#!/usr/bin/env node
// verify-links.js — Verify all external links in the codebase
const fs = require('fs');
const https = require('https');
const http = require('http');

// Read location data file for Wikipedia URLs
const allContent = fs.readFileSync('./app/data/locations.ts', 'utf8');

// Extract all Wikipedia URLs
const wikiRegex = /wikipedia:\s*['"]([^'"]+)['"]/g;
const urls = [];
let match;
while ((match = wikiRegex.exec(allContent)) !== null) {
  urls.push(match[1]);
}

// Also check all href values in all .tsx files for internal links
const { execSync } = require('child_process');

// Extract all internal hrefs
const grepResult = execSync(
  'grep -roh \'href="[^"]*"\' app/ --include="*.tsx" 2>/dev/null || true',
  { encoding: 'utf8' }
);
const hrefRegex = /href="([^"]+)"/g;
const internalLinks = new Set();
let hrefMatch;
while ((hrefMatch = hrefRegex.exec(grepResult)) !== null) {
  const href = hrefMatch[1];
  if (href.startsWith('/') && !href.startsWith('/#') && href !== '/') {
    internalLinks.add(href.replace(/\/$/, '')); // remove trailing slash
  }
}

console.log(`\n Found ${urls.length} Wikipedia URLs to verify`);
console.log(` Found ${internalLinks.size} unique internal links\n`);

// Verify Wikipedia URLs
function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.request(url, { method: 'HEAD', timeout: 10000, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0; +https://programmier-anfang.de)' } }, (res) => {
      resolve({ url, status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 400 });
    });
    req.on('error', (err) => {
      resolve({ url, status: 0, ok: false, error: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 0, ok: false, error: 'timeout' });
    });
    req.end();
  });
}

async function main() {
  console.log('Checking Wikipedia URLs...\n');

  const results = [];
  const batchSize = 5; // Limit concurrent requests

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
    process.stdout.write(`  Checked ${Math.min(i + batchSize, urls.length)}/${urls.length}\r`);
  }

  console.log('\n');

  const broken = results.filter(r => !r.ok);
  const ok = results.filter(r => r.ok);

  console.log(`${ok.length} Wikipedia URLs are valid`);

  if (broken.length > 0) {
    console.log(`\n${broken.length} BROKEN Wikipedia URLs:\n`);
    broken.forEach(r => {
      console.log(`  ${r.url}`);
      console.log(`    Status: ${r.status}${r.error ? ' (' + r.error + ')' : ''}`);
    });
  }

  // Check internal links against known routes
  console.log('\n\nChecking internal links against known routes...\n');

  // Known static routes
  const staticRoutes = new Set([
    '/hire-developers',
    '/hire-designers',
    '/hire-marketers',
    '/hire-product-managers',
    '/hire-project-managers',
    '/hire-assistants',
    '/standorte',
    '/datenschutz',
    '/nutzungsbedingungen',
    '/employer-blog/remote-ready-interview-questions',
    '/employer-blog/software-engineer-interview-questions',
    '/employer-blog/how-to-find-developers',
    '/employer-blog/how-to-conduct-a-remote-technical-interview',
    '/employer-blog/distributed-software-engineering-team',
    '/employer-blog/how-to-manage-developers-remote-team',
  ]);

  // Dynamic route patterns
  const dynamicPatterns = [
    /^\/hire-developers\/[a-z0-9-]+$/,
    /^\/standorte\/[a-z-]+$/,
    /^\/standorte\/[a-z-]+\/[a-z-]+$/,
    /^\/standorte\/[a-z-]+\/[a-z-]+\/[a-z-]+$/,
  ];

  const suspiciousLinks = [];

  for (const link of internalLinks) {
    if (staticRoutes.has(link)) continue;
    if (dynamicPatterns.some(p => p.test(link))) continue;
    if (link.startsWith('#')) continue;
    suspiciousLinks.push(link);
  }

  if (suspiciousLinks.length > 0) {
    console.log(`${suspiciousLinks.length} internal links could not be matched to known routes:\n`);
    suspiciousLinks.sort().forEach(l => console.log(`  ${l}`));
  } else {
    console.log('All internal links match known routes');
  }

  console.log('\nVerification complete!\n');
}

main().catch(console.error);
