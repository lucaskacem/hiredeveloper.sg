// Script tự động crawl tất cả pages sử dụng Chrome DevTools MCP
const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets } = require('./process-assets');
const { getNextPage, getProgressSummary, saveProgress, loadProgress } = require('./crawl-all-pages');

// Extract và scroll scripts
const extractAssetsScript = `(() => {
  const assets = { images: new Set(), videos: new Set() };
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
  document.querySelectorAll('video').forEach(video => {
    if (video.src && !video.src.startsWith('data:')) assets.videos.add(video.src);
    video.querySelectorAll('source').forEach(source => {
      if (source.src && !source.src.startsWith('data:')) assets.videos.add(source.src);
    });
  });
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
  document.querySelectorAll('[data-src], [data-lazy-src], [data-bg]').forEach(el => {
    const src = el.getAttribute('data-src') || el.getAttribute('data-lazy-src') || el.getAttribute('data-bg');
    if (src && !src.startsWith('data:')) assets.images.add(src);
  });
  const filteredImages = Array.from(assets.images).filter(url => 
    url.includes('arc.dev') || url.includes('cdn.arc.dev')
  );
  const filteredVideos = Array.from(assets.videos).filter(url => 
    url.includes('arc.dev') || url.includes('cdn.arc.dev')
  );
  return { images: filteredImages, videos: filteredVideos, pageUrl: window.location.href };
})()`;

const scrollScript = `(() => {
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
})()`;

console.log(`
╔═══════════════════════════════════════════════════════════╗
║  Bắt đầu crawl tự động tất cả ${allPages.length} pages...              ║
╚═══════════════════════════════════════════════════════════╝
`);

const summary = getProgressSummary();
console.log(`📊 Progress: ${summary.processed}/${summary.total} (${summary.percentage}%)\n`);

// Export để sử dụng
module.exports = {
  allPages,
  extractAssetsScript,
  scrollScript,
  processPageAssets,
  getNextPage,
  getProgressSummary
};

