#!/usr/bin/env npx tsx
// =============================================================================
// generate-drip-sitemap.ts — Standalone drip-sitemap generator
// =============================================================================
//
// Reads the `drip-state.json` created by `drip-publish.ts` and regenerates
// `public/sitemap-pseo.xml` containing only published pages.
//
// Useful for:
//   - Regenerating the sitemap after manual edits to drip-state.json
//   - Running as part of a build pipeline (e.g. in a CI/CD deploy step)
//   - Verifying the current sitemap matches the state
//
// Usage:
//   npx tsx scripts/generate-drip-sitemap.ts
//   npx tsx scripts/generate-drip-sitemap.ts --stats   # show statistics only
//
// =============================================================================

import * as fs from "node:fs";
import * as path from "node:path";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const STATE_FILE = path.join(__dirname, "drip-state.json");
const SITEMAP_PATH = path.join(PROJECT_ROOT, "public", "sitemap-pseo.xml");
const BASE_URL = "https://hiredeveloper.ae";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DripState {
  published: Record<string, string>;
  pending: string[];
  lastRunDate: string | null;
  history: {
    date: string;
    count: number;
    pages: string[];
    timestamps: string[];
  }[];
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  const args = process.argv.slice(2);
  const statsOnly = args.includes("--stats");

  if (!fs.existsSync(STATE_FILE)) {
    console.error(
      `State file not found: ${STATE_FILE}\n` +
        `Run 'npx tsx scripts/drip-publish.ts' first to initialise.\n`
    );
    process.exit(1);
  }

  const state: DripState = JSON.parse(
    fs.readFileSync(STATE_FILE, "utf-8")
  );

  const publishedCount = Object.keys(state.published).length;
  const pendingCount = state.pending.length;
  const totalCount = publishedCount + pendingCount;
  const pctDone =
    totalCount > 0 ? ((publishedCount / totalCount) * 100).toFixed(1) : "0.0";

  console.log(`\n=== Drip Sitemap Status ===\n`);
  console.log(`  Published : ${publishedCount}`);
  console.log(`  Pending   : ${pendingCount}`);
  console.log(`  Total     : ${totalCount}`);
  console.log(`  Progress  : ${pctDone}%`);
  console.log(`  Last run  : ${state.lastRunDate ?? "never"}`);

  if (state.history.length > 0) {
    console.log(`\n  Recent history:`);
    const recent = state.history.slice(-7);
    for (const entry of recent) {
      console.log(`    ${entry.date}: ${entry.count} pages`);
    }
  }

  if (statsOnly) {
    console.log("");
    return;
  }

  // ---- Generate the sitemap ----

  interface SitemapEntry {
    loc: string;
    lastmod?: string;
    priority: string;
    changefreq: string;
  }

  // Core pages always included
  const coreUrls: SitemapEntry[] = [
    { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-developers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-marketers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-designers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-product-managers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-project-managers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-assistants`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/locations`, priority: "0.8", changefreq: "monthly" },
    { loc: `${BASE_URL}/pricing`, priority: "0.7", changefreq: "monthly" },
    { loc: `${BASE_URL}/how-it-works`, priority: "0.7", changefreq: "monthly" },
    { loc: `${BASE_URL}/faq`, priority: "0.6", changefreq: "monthly" },
    { loc: `${BASE_URL}/comparison`, priority: "0.7", changefreq: "monthly" },
    { loc: `${BASE_URL}/case-studies`, priority: "0.6", changefreq: "monthly" },
  ];

  // Published pSEO pages
  const publishedEntries: SitemapEntry[] = Object.entries(state.published).map(
    ([pagePath, publishedAt]) => {
      const segments = pagePath.split("/").filter(Boolean);
      const depth = segments.length;

      let priority = "0.5";
      if (depth <= 2) priority = "0.7";
      else if (depth === 3) priority = "0.6";

      return {
        loc: `${BASE_URL}${pagePath}`,
        lastmod: publishedAt.slice(0, 10),
        priority,
        changefreq: "monthly",
      };
    }
  );

  // Sort by publish date for natural ordering
  publishedEntries.sort((a, b) =>
    (a.lastmod ?? "").localeCompare(b.lastmod ?? "")
  );

  const allEntries: SitemapEntry[] = [...coreUrls, ...publishedEntries];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allEntries.map(
      (entry) =>
        `  <url>
    <loc>${escapeXml(entry.loc)}</loc>${
          entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""
        }
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    ),
    "</urlset>",
    "",
  ].join("\n");

  // Ensure public dir exists
  const publicDir = path.join(PROJECT_ROOT, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(SITEMAP_PATH, xml, "utf-8");
  console.log(
    `\n  Sitemap written: ${SITEMAP_PATH}`
  );
  console.log(`  Total URLs in sitemap: ${allEntries.length}\n`);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

main();
