// Script tự động crawl tất cả pages
// Sử dụng Chrome DevTools MCP để crawl

const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets } = require('./process-assets');
const { getNextPage, getProgressSummary, saveProgress, loadProgress } = require('./crawl-all-pages');

// Process một page
async function processPage(pageUrl) {
  console.log(`\n📄 Processing: ${pageUrl}`);
  
  // 1. Navigate
  // await navigate_page(pageUrl);
  
  // 2. Wait
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // 3. Scroll
  const scrollResult = await evaluate_script(scrollScript);
  console.log(`   Scrolled: ${scrollResult.maxScroll}px`);
  
  // 4. Extract
  const assets = await evaluate_script(extractAssetsScript);
  console.log(`   Found: ${assets.images.length} images, ${assets.videos.length} videos`);
  
  // 5. Process và download
  const metadata = await processPageAssets(pageUrl, assets);
  
  // 6. Update progress
  const progress = loadProgress();
  if (!progress.processed.includes(pageUrl)) {
    progress.processed.push(pageUrl);
  }
  progress.currentIndex = allPages.indexOf(pageUrl) + 1;
  saveProgress(progress);
  
  console.log(`   ✅ Downloaded: ${metadata.images.successful} images, ${metadata.videos.successful} videos`);
  
  return metadata;
}

// Extract script
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

// Main crawl function - sẽ được gọi từ Chrome DevTools
async function crawlAll() {
  const summary = getProgressSummary();
  console.log(`\n🚀 Bắt đầu crawl ${summary.remaining} pages còn lại...\n`);
  
  let processed = 0;
  const batchSize = 10; // Process 10 pages at a time
  
  while (true) {
    const next = getNextPage();
    if (!next) {
      console.log('\n✅ Hoàn thành! Tất cả pages đã được crawl.');
      break;
    }
    
    try {
      await processPage(next.url);
      processed++;
      
      // Show progress every 10 pages
      if (processed % 10 === 0) {
        const currentSummary = getProgressSummary();
        console.log(`\n📊 Progress: ${currentSummary.processed}/${currentSummary.total} (${currentSummary.percentage}%)`);
      }
      
      // Delay between pages
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      console.error(`❌ Error processing ${next.url}:`, err.message);
      // Continue with next page
    }
  }
}

module.exports = {
  processPage,
  crawlAll,
  extractAssetsScript,
  scrollScript,
  allPages
};

// Show instructions
console.log(`
📝 Script đã sẵn sàng!

Để chạy crawl tự động, sử dụng Chrome DevTools MCP với các functions:
- navigate_page(url)
- evaluate_script(script)
- processPageAssets(url, assets)

Hoặc chạy crawlAll() để crawl tất cả pages tự động.
`);

