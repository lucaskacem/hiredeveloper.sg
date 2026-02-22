// Script để crawl với Chrome DevTools MCP
// Chạy script này và follow instructions để crawl từng page

const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets } = require('./process-assets');
const { saveProgress, loadProgress } = require('./crawl-all-pages');

const PROGRESS_FILE = path.join(__dirname, 'crawl-progress.json');

// Load progress
function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
  }
  return { processed: [], currentIndex: 0 };
}

// Save progress
function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

// Get next page to crawl
function getNextPage() {
  const progress = loadProgress();
  const processed = new Set(progress.processed || []);
  
  for (let i = progress.currentIndex || 0; i < allPages.length; i++) {
    if (!processed.has(allPages[i])) {
      return { index: i, url: allPages[i] };
    }
  }
  
  return null;
}

// Process single page
async function processPage(pageUrl) {
  console.log(`\n📄 [${allPages.indexOf(pageUrl) + 1}/${allPages.length}] Processing: ${pageUrl}`);
  
  // Steps:
  // 1. Navigate (done via Chrome DevTools MCP)
  // 2. Scroll
  // 3. Extract
  // 4. Process
  
  return {
    url: pageUrl,
    steps: [
      `navigate_page("${pageUrl}")`,
      `evaluate_script(scrollScript)`,
      `const assets = evaluate_script(extractAssetsScript)`,
      `processPageAssets("${pageUrl}", assets)`
    ]
  };
}

// Show current status
const progress = loadProgress();
const summary = {
  total: allPages.length,
  processed: progress.processed.length,
  remaining: allPages.length - progress.processed.length,
  percentage: ((progress.processed.length / allPages.length) * 100).toFixed(2)
};

console.log(`
╔═══════════════════════════════════════════════════════════╗
║  Arc.dev Full Crawl - ${allPages.length} pages                    ║
╚═══════════════════════════════════════════════════════════╝

📊 Progress: ${summary.processed}/${summary.total} (${summary.percentage}%)
📋 Remaining: ${summary.remaining} pages
`);

const next = getNextPage();
if (next) {
  const pageInfo = processPage(next.url);
  console.log(`\n📝 Next page to crawl:\n`);
  console.log(`   URL: ${pageInfo.url}`);
  console.log(`   Steps:`);
  pageInfo.steps.forEach((step, i) => {
    console.log(`   ${i + 1}. ${step}`);
  });
} else {
  console.log(`\n✅ Tất cả pages đã được crawl xong!`);
}

module.exports = {
  getNextPage,
  processPage,
  allPages,
  loadProgress,
  saveProgress
};

