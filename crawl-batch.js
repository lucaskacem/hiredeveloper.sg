// Script để crawl một batch pages
const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets } = require('./process-assets');
const { getNextPage, getProgressSummary, saveProgress, loadProgress } = require('./crawl-all-pages');

// Crawl một batch pages (ví dụ: 10 pages đầu tiên)
async function crawlBatch(startIndex = 0, batchSize = 10) {
  const endIndex = Math.min(startIndex + batchSize, allPages.length);
  const pagesToCrawl = allPages.slice(startIndex, endIndex);
  
  console.log(`\n🚀 Crawling batch: pages ${startIndex + 1}-${endIndex} (${pagesToCrawl.length} pages)\n`);
  
  for (let i = 0; i < pagesToCrawl.length; i++) {
    const pageUrl = pagesToCrawl[i];
    const currentIndex = startIndex + i;
    
    console.log(`\n[${currentIndex + 1}/${allPages.length}] ${pageUrl}`);
    
    // Instructions để crawl page này
    console.log(`
  Steps:
  1. navigate_page("${pageUrl}")
  2. Wait 2 seconds
  3. evaluate_script(scrollScript) - để scroll
  4. const assets = evaluate_script(extractAssetsScript) - để extract
  5. processPageAssets("${pageUrl}", assets) - để download
    `);
  }
  
  console.log(`\n✅ Batch instructions generated for ${pagesToCrawl.length} pages`);
}

// Show current progress
const summary = getProgressSummary();
console.log(`\n📊 Current Progress: ${summary.processed}/${summary.total} (${summary.percentage}%)\n`);

// Crawl first 5 pages as demo
crawlBatch(0, 5);

module.exports = { crawlBatch };

