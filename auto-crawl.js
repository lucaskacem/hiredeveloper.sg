// Script tự động crawl tất cả pages sử dụng Chrome DevTools MCP
// Chạy script này để crawl tất cả 257 pages

const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets } = require('./process-assets');
const { getNextPage, getProgressSummary, saveProgress, loadProgress } = require('./crawl-all-pages');

// Extract script để chạy trong browser
const extractAssetsScript = `
(() => {
  const assets = { images: new Set(), videos: new Set() };
  
  // Get all images
  document.querySelectorAll('img').forEach(img => {
    if (img.src && !img.src.startsWith('data:')) {
      assets.images.add(img.src);
    }
    if (img.srcset) {
      img.srcset.split(',').forEach(src => {
        const url = src.trim().split(' ')[0];
        if (url && !url.startsWith('data:')) {
          assets.images.add(url);
        }
      });
    }
    if (img.dataset && img.dataset.src) {
      assets.images.add(img.dataset.src);
    }
  });
  
  // Get all videos
  document.querySelectorAll('video').forEach(video => {
    if (video.src && !video.src.startsWith('data:')) {
      assets.videos.add(video.src);
    }
    video.querySelectorAll('source').forEach(source => {
      if (source.src && !source.src.startsWith('data:')) {
        assets.videos.add(source.src);
      }
    });
  });
  
  // Get background images
  document.querySelectorAll('*').forEach(el => {
    try {
      const style = window.getComputedStyle(el);
      const bgImage = style.backgroundImage;
      if (bgImage && bgImage !== 'none') {
        const match = bgImage.match(/url\\(["']?([^"')]+)["']?\\)/);
        if (match && match[1] && !match[1].startsWith('data:')) {
          assets.images.add(match[1]);
        }
      }
    } catch (e) {}
  });
  
  // Get lazy loaded images
  document.querySelectorAll('[data-src], [data-lazy-src], [data-bg]').forEach(el => {
    const src = el.getAttribute('data-src') || el.getAttribute('data-lazy-src') || el.getAttribute('data-bg');
    if (src && !src.startsWith('data:')) {
      assets.images.add(src);
    }
  });
  
  // Filter only arc.dev assets
  const filteredImages = Array.from(assets.images).filter(url => 
    url.includes('arc.dev') || url.includes('cdn.arc.dev')
  );
  const filteredVideos = Array.from(assets.videos).filter(url => 
    url.includes('arc.dev') || url.includes('cdn.arc.dev')
  );
  
  return {
    images: filteredImages,
    videos: filteredVideos,
    pageUrl: window.location.href
  };
})()
`;

const scrollScript = `
(() => {
  return new Promise((resolve) => {
    let scrollPosition = 0;
    const scrollStep = 500;
    const maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, scrollStep);
      scrollPosition += scrollStep;
      
      if (scrollPosition >= maxScroll) {
        clearInterval(scrollInterval);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => resolve('Scrolled'), 2000);
      }
    }, 300);
  });
})()
`;

console.log(`
╔═══════════════════════════════════════════════════════════╗
║  Arc.dev Assets Crawler                                   ║
║  This script will crawl all ${allPages.length} pages and download assets  ║
╚═══════════════════════════════════════════════════════════╝

📋 Instructions:
1. This script uses Chrome DevTools MCP to crawl pages
2. Each page will be scrolled to load lazy assets
3. Assets will be saved in: arc-assets/[page-path]/images/ and videos/
4. Progress is saved and can be resumed

📊 Current Progress:
`);

const summary = getProgressSummary();
console.log(`  Total: ${summary.total} pages`);
console.log(`  Processed: ${summary.processed} pages`);
console.log(`  Remaining: ${summary.remaining} pages`);
console.log(`  Progress: ${summary.percentage}%\n`);

console.log(`
🔧 Usage with Chrome DevTools MCP:

For each page, you need to:
1. Navigate to the page using: navigate_page(url)
2. Wait for load: wait 2 seconds
3. Scroll to load lazy assets: evaluate_script(scrollScript)
4. Extract assets: evaluate_script(extractAssetsScript)
5. Process assets: processPageAssets(pageUrl, extractedAssets)

Or use the automated workflow below.
`);

console.log(`
📝 Extract Script (copy this for Chrome DevTools):
${extractAssetsScript}

📝 Scroll Script (copy this for Chrome DevTools):
${scrollScript}
`);

// Export for use
module.exports = {
  extractAssetsScript,
  scrollScript,
  allPages
};

