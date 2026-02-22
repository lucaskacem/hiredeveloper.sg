// Script tự động crawl TẤT CẢ 257 pages
// Sử dụng Chrome DevTools MCP để crawl từng page

const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets } = require('./process-assets');
const { saveProgress, loadProgress } = require('./crawl-all-pages');

console.log(`
╔═══════════════════════════════════════════════════════════╗
║  BẮT ĐẦU CRAWL TẤT CẢ ${allPages.length} PAGES TỰ ĐỘNG...        ║
╚═══════════════════════════════════════════════════════════╝
`);

// Scripts để sử dụng với Chrome DevTools MCP
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

// Get progress
const progress = loadProgress();
const processed = new Set(progress.processed || []);
const remainingPages = allPages.filter(url => !processed.has(url));

console.log(`📊 Progress: ${progress.processed.length}/${allPages.length} (${((progress.processed.length / allPages.length) * 100).toFixed(2)}%)`);
console.log(`📋 Remaining: ${remainingPages.length} pages\n`);

if (remainingPages.length === 0) {
  console.log('✅ Tất cả pages đã được crawl xong!');
} else {
  console.log(`🚀 Bắt đầu crawl ${remainingPages.length} pages còn lại...\n`);
  console.log(`📝 Sử dụng Chrome DevTools MCP với workflow sau cho mỗi page:\n`);
  console.log(`1. navigate_page(url)`);
  console.log(`2. evaluate_script(scrollScript)`);
  console.log(`3. const assets = evaluate_script(extractAssetsScript)`);
  console.log(`4. processPageAssets(url, assets)\n`);
  
  console.log(`📋 Danh sách pages cần crawl:\n`);
  remainingPages.slice(0, 10).forEach((url, i) => {
    console.log(`  ${i + 1}. ${url}`);
  });
  if (remainingPages.length > 10) {
    console.log(`  ... và ${remainingPages.length - 10} pages nữa`);
  }
}

module.exports = {
  allPages,
  extractAssetsScript,
  scrollScript,
  processPageAssets,
  saveProgress,
  loadProgress
};

