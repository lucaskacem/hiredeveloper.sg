// Script để crawl 10 pages tiếp theo
const { allPages } = require('./download-assets-with-scroll');
const { processPageAssets, normalizeUrl } = require('./process-assets');
const { loadProgress, saveProgress } = require('./crawl-all-pages');

const progress = loadProgress();
const processed = new Set(progress.processed || []);
const remaining = allPages.filter(url => !processed.has(url));

console.log(`\n📊 Progress: ${progress.processed.length}/${allPages.length}`);
console.log(`📋 Remaining: ${remaining.length} pages\n`);

const next10 = remaining.slice(0, 10);
console.log(`🚀 Crawling next 10 pages:\n`);
next10.forEach((url, i) => {
  console.log(`  ${i + 1}. ${url}`);
});

module.exports = { next10 };

