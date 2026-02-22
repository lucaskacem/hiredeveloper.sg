// Script để crawl từng page một cách thủ công với Chrome DevTools MCP
// Chạy script này và follow instructions

const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets } = require('./process-assets');
const { getNextPage, getProgressSummary, saveProgress, loadProgress } = require('./crawl-all-pages');

function crawlNextPage() {
  const progress = loadProgress();
  const processed = new Set(progress.processed || []);
  
  for (let i = progress.currentIndex || 0; i < allPages.length; i++) {
    if (!processed.has(allPages[i])) {
      const summary = getProgressSummary();
      return {
        url: allPages[i],
        index: i,
        instructions: `
1. Navigate: navigate_page("${allPages[i]}")
2. Wait: 2 seconds
3. Scroll: evaluate_script(scrollScript)
4. Extract: const assets = evaluate_script(extractAssetsScript)
5. Process: processPageAssets("${allPages[i]}", assets)
        `
      };
    }
  }
  
  return null;
}

// Show current status
const summary = getProgressSummary();
console.log(`
╔═══════════════════════════════════════════════════════════╗
║  Arc.dev Manual Crawl Helper                              ║
╚═══════════════════════════════════════════════════════════╝

📊 Current Status:
  Total: ${summary.total} pages
  Processed: ${summary.processed} pages  
  Remaining: ${summary.remaining} pages
  Progress: ${summary.percentage}%

📝 Next Page to Process:
`);

const next = crawlNextPage();
if (next) {
  console.log(`  URL: ${next.url}`);
  console.log(`  Index: ${next.index + 1}/${allPages.length}`);
  console.log(`\n${next.instructions}`);
} else {
  console.log('  ✅ All done!');
}

module.exports = { crawlNextPage, getProgressSummary };

