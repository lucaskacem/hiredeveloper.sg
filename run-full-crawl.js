// Script tự động crawl tất cả 257 pages
const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets } = require('./process-assets');
const { getNextPage, getProgressSummary, saveProgress, loadProgress } = require('./crawl-all-pages');

// Extract assets script
const extractAssetsScript = `
(() => {
  const assets = { images: new Set(), videos: new Set() };
  
  // Get all images
  document.querySelectorAll('img').forEach(img => {
    if (img.src && !img.src.startsWith('data:')) assets.images.add(img.src);
    if (img.srcset) {
      img.srcset.split(',').forEach(src => {
        const url = src.trim().split(' ')[0];
        if (url && !url.startsWith('data:')) assets.images.add(url);
      });
    }
    if (img.dataset && img.dataset.src) assets.images.add(img.dataset.src);
  });
  
  // Get all videos
  document.querySelectorAll('video').forEach(video => {
    if (video.src && !video.src.startsWith('data:')) assets.videos.add(video.src);
    video.querySelectorAll('source').forEach(source => {
      if (source.src && !source.src.startsWith('data:')) assets.videos.add(source.src);
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
    if (src && !src.startsWith('data:')) assets.images.add(src);
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

// Scroll script
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
    
    if (maxScroll <= window.innerHeight) {
      resolve({ scrolled: true, maxScroll: 0 });
      return;
    }
    
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, scrollStep);
      scrollPosition += scrollStep;
      
      if (scrollPosition >= maxScroll) {
        clearInterval(scrollInterval);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => resolve({ scrolled: true, maxScroll }), 2000);
      }
    }, 300);
  });
})()
`;

console.log(`
╔═══════════════════════════════════════════════════════════╗
║  Arc.dev Full Crawl - Tự động crawl tất cả 257 pages    ║
╚═══════════════════════════════════════════════════════════╝

📊 Progress hiện tại:
`);

const summary = getProgressSummary();
console.log(`  Total: ${summary.total} pages`);
console.log(`  Processed: ${summary.processed} pages`);
console.log(`  Remaining: ${summary.remaining} pages`);
console.log(`  Progress: ${summary.percentage}%\n`);

// Export scripts để sử dụng với Chrome DevTools
module.exports = {
  allPages,
  extractAssetsScript,
  scrollScript,
  processPageAssets,
  getNextPage,
  getProgressSummary,
  saveProgress,
  loadProgress
};

// Instructions
console.log(`
📝 Hướng dẫn sử dụng Chrome DevTools MCP:

Script này cần được chạy với Chrome DevTools MCP để:
1. Navigate đến từng page
2. Scroll để load lazy assets  
3. Extract assets
4. Download assets

Để chạy tự động, sử dụng các function sau trong Chrome DevTools MCP:

1. navigate_page(url)
2. evaluate_script(scrollScript) - để scroll
3. evaluate_script(extractAssetsScript) - để extract assets
4. processPageAssets(pageUrl, assets) - để download

Hoặc sử dụng script crawl-manual.js để crawl từng page.
`);

