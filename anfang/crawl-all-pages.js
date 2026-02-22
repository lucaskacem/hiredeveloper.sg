const { processPageAssets } = require('./process-assets');
const { allPages } = require('./download-assets-with-scroll');
const fs = require('fs');
const path = require('path');

// Script này sẽ được gọi từ Chrome DevTools MCP
// Mỗi lần gọi sẽ process một page

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

// Process single page (to be called from Chrome DevTools)
async function processSinglePage(pageUrl, rawAssets) {
  try {
    const metadata = await processPageAssets(pageUrl, rawAssets);
    
    // Update progress
    const progress = loadProgress();
    if (!progress.processed.includes(pageUrl)) {
      progress.processed.push(pageUrl);
    }
    progress.currentIndex = allPages.indexOf(pageUrl) + 1;
    saveProgress(progress);
    
    return { success: true, metadata };
  } catch (err) {
    console.error(`Error processing ${pageUrl}:`, err);
    return { success: false, error: err.message };
  }
}

// Get next page to process
function getNextPage() {
  const progress = loadProgress();
  const processed = new Set(progress.processed);
  
  for (let i = progress.currentIndex || 0; i < allPages.length; i++) {
    if (!processed.has(allPages[i])) {
      return { index: i, url: allPages[i] };
    }
  }
  
  return null;
}

// Get progress summary
function getProgressSummary() {
  const progress = loadProgress();
  return {
    total: allPages.length,
    processed: progress.processed.length,
    remaining: allPages.length - progress.processed.length,
    percentage: ((progress.processed.length / allPages.length) * 100).toFixed(2)
  };
}

module.exports = {
  processSinglePage,
  getNextPage,
  getProgressSummary,
  saveProgress,
  loadProgress,
  allPages
};

// If run directly, show progress
if (require.main === module) {
  const summary = getProgressSummary();
  console.log('\n📊 Crawl Progress:');
  console.log(`  Total pages: ${summary.total}`);
  console.log(`  Processed: ${summary.processed}`);
  console.log(`  Remaining: ${summary.remaining}`);
  console.log(`  Progress: ${summary.percentage}%`);
  
  const next = getNextPage();
  if (next) {
    console.log(`\n  Next page: ${next.url} (${next.index + 1}/${allPages.length})`);
  } else {
    console.log('\n  ✅ All pages processed!');
  }
}

