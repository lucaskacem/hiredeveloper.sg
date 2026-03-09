#!/usr/bin/env npx tsx
// =============================================================================
// drip-publish.ts — Gradual pSEO page publisher for hiredeveloper.sg
// =============================================================================
//
// Publishes 2-5 pSEO pages per day at random times with NO algorithmic
// footprint. Uses crypto.randomBytes for all randomisation decisions.
//
// What "publishing" means here:
//   - Pages are added to `drip-state.json` with a `publishedAt` timestamp.
//   - The companion `generate-drip-sitemap.ts` reads that state and produces
//     a `public/sitemap-pseo.xml` that contains ONLY already-published pages.
//   - Your main `app/sitemap.ts` can reference this file or be replaced by it.
//
// Usage
// -----
//   # Dry run — see what would be published today without writing anything
//   npx tsx scripts/drip-publish.ts --dry-run
//
//   # Normal run — pick today's batch and mark them as published
//   npx tsx scripts/drip-publish.ts
//
//   # Force a specific count (overrides the random 2-5 range)
//   npx tsx scripts/drip-publish.ts --count 3
//
// Cron setup (run once a day, e.g. at 6 AM server time)
// -----------------------------------------------------
//   0 6 * * * cd /path/to/hiredeveloper.sg && npx tsx scripts/drip-publish.ts >> /var/log/drip-publish.log 2>&1
//
// The script is idempotent per calendar day (UTC). Running it multiple times
// in the same day will NOT publish additional pages — it detects that today's
// batch has already been dispatched and exits cleanly.
//
// State file: scripts/drip-state.json
// ------------------------------------
//   {
//     "published": {
//       "/hire-developers/reactjs/singapore": "2025-06-12T09:23:17.442Z",
//       ...
//     },
//     "pending": ["/hire-developers/python/marina-bay", ...],
//     "lastRunDate": "2025-06-12",
//     "history": [
//       { "date": "2025-06-12", "count": 3, "pages": [...] },
//       ...
//     ]
//   }
//
// =============================================================================

import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");
const STATE_FILE = path.join(__dirname, "drip-state.json");
const BASE_URL = "https://hiredeveloper.sg";

// Min / max pages per day (inclusive)
const MIN_PAGES_PER_DAY = 2;
const MAX_PAGES_PER_DAY = 5;

// Weekend multiplier — on Sat/Sun (Singapore weekend) we sometimes publish less
const WEEKEND_DAYS = [0, 6]; // Sunday = 0, Saturday = 6

// ---------------------------------------------------------------------------
// Cryptographically-secure random helpers
// ---------------------------------------------------------------------------

/**
 * Return a cryptographically-secure random integer in [min, max] (inclusive).
 *
 * Implementation: draw 4 random bytes, interpret as a uint32, then use
 * rejection sampling so that every value in [min, max] is equally likely
 * (no modulo bias).
 */
function secureRandomInt(min: number, max: number): number {
  if (min > max) throw new RangeError("min must be <= max");
  if (min === max) return min;

  const range = max - min + 1;

  // Find the largest multiple of `range` that fits in a uint32.
  // We reject values >= limit to avoid modulo bias.
  const limit = Math.floor(0x100000000 / range) * range;

  let value: number;
  do {
    const buf = crypto.randomBytes(4);
    value = buf.readUInt32BE(0);
  } while (value >= limit);

  return min + (value % range);
}

/**
 * Cryptographically-secure Fisher-Yates shuffle (in-place).
 * Every permutation is equally likely.
 */
function secureShuffleInPlace<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = secureRandomInt(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------------------------------------------------------------------------
// Page enumeration — mirrors the logic from app/sitemap.ts
// ---------------------------------------------------------------------------

/**
 * Dynamically import the data modules so we always get the latest list.
 * Because these are TypeScript files that use `export`, we run through tsx.
 */
async function enumerateAllPseoPages(): Promise<string[]> {
  // Import the data modules using relative paths from project root
  const devSubcats = await import(
    path.join(PROJECT_ROOT, "app/data/developer-subcategories")
  );
  const marketerSubcats = await import(
    path.join(PROJECT_ROOT, "app/data/marketer-subcategories")
  );
  const locations = await import(
    path.join(PROJECT_ROOT, "app/data/locations")
  );

  const devSlugs: string[] = devSubcats.getAllSubcategorySlugs();
  const marketerSlugs: string[] =
    marketerSubcats.getAllMarketingSubcategorySlugs();

  // Top 35 cities by population (same logic as app/sitemap.ts)
  interface CityWithPop {
    slug: string;
    population: number;
  }
  const allCities: CityWithPop[] = locations.countries.flatMap(
    (c: { regions: { cities: { slug: string; population: number }[] }[] }) =>
      c.regions.flatMap((r) =>
        r.cities.map((city) => ({
          slug: city.slug,
          population: city.population,
        }))
      )
  );
  const topCitySlugs = allCities
    .sort((a, b) => b.population - a.population)
    .slice(0, 35)
    .map((c) => c.slug);

  const pages: string[] = [];

  // Developer + city pages
  for (const devSlug of devSlugs) {
    for (const citySlug of topCitySlugs) {
      pages.push(`/hire-developers/${devSlug}/${citySlug}`);
    }
  }

  // Marketer + city pages
  for (const mSlug of marketerSlugs) {
    for (const citySlug of topCitySlugs) {
      pages.push(`/hire-marketers/${mSlug}/${citySlug}`);
    }
  }

  // Location pages (country / region / city)
  for (const country of locations.countries) {
    pages.push(`/locations/${country.slug}`);
    for (const region of country.regions) {
      pages.push(`/locations/${country.slug}/${region.slug}`);
      for (const city of region.cities) {
        pages.push(
          `/locations/${country.slug}/${region.slug}/${city.slug}`
        );
      }
    }
  }

  return pages;
}

// ---------------------------------------------------------------------------
// State management
// ---------------------------------------------------------------------------

interface HistoryEntry {
  date: string; // YYYY-MM-DD
  count: number;
  pages: string[];
  timestamps: string[]; // the simulated publish times (ISO strings)
}

interface DripState {
  published: Record<string, string>; // path -> ISO timestamp
  pending: string[];
  lastRunDate: string | null; // YYYY-MM-DD
  history: HistoryEntry[];
}

function loadState(): DripState {
  if (fs.existsSync(STATE_FILE)) {
    const raw = fs.readFileSync(STATE_FILE, "utf-8");
    return JSON.parse(raw) as DripState;
  }
  return {
    published: {},
    pending: [],
    lastRunDate: null,
    history: [],
  };
}

function saveState(state: DripState): void {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// Determine how many pages to publish today
// ---------------------------------------------------------------------------

function decideTodayCount(dayOfWeek: number): number {
  const isWeekend = WEEKEND_DAYS.includes(dayOfWeek);

  if (isWeekend) {
    // On weekends, sometimes skip entirely (20% chance) or publish fewer
    const skipRoll = secureRandomInt(1, 100);
    if (skipRoll <= 20) {
      return 0; // skip this day — organic behaviour
    }
    // Weekend range: 1-3
    return secureRandomInt(1, 3);
  }

  // Weekday: 2-5 pages
  return secureRandomInt(MIN_PAGES_PER_DAY, MAX_PAGES_PER_DAY);
}

// ---------------------------------------------------------------------------
// Generate random timestamps spread across the day
// ---------------------------------------------------------------------------

/**
 * Generate `count` timestamps spread randomly across a 24-hour window for the
 * given date, with realistic gaps (not evenly spaced, not clustered).
 *
 * Strategy:
 *   1. Pick `count` random hours from a pool of reasonable working/activity
 *      hours, but with some variance (sometimes a late-night publish).
 *   2. Within each hour, pick a random minute and second.
 *   3. Add random sub-second jitter.
 *   4. Sort chronologically.
 *
 * All randomness uses crypto.randomBytes.
 */
function generatePublishTimestamps(date: string, count: number): Date[] {
  if (count === 0) return [];

  // Build an hour pool — weight towards normal hours but allow outliers.
  // Hours 0-5 are rare; 6-22 are common; 23 is rare.
  const hourPool: number[] = [];
  for (let h = 0; h < 24; h++) {
    if (h >= 6 && h <= 22) {
      // Common hours: add multiple copies to increase probability
      hourPool.push(h, h, h);
    } else {
      // Rare hours: single copy
      hourPool.push(h);
    }
  }

  // Pick `count` distinct hours
  const shuffledHours = secureShuffleInPlace([...hourPool]);
  const chosenHoursSet = new Set<number>();
  for (const h of shuffledHours) {
    if (chosenHoursSet.size >= count) break;
    chosenHoursSet.add(h);
  }
  // If we somehow don't have enough distinct hours (very unlikely for count <= 5),
  // just use what we got.
  const chosenHours = Array.from(chosenHoursSet).sort((a, b) => a - b);

  // Make sure we have exactly `count` entries (pad if needed)
  while (chosenHours.length < count) {
    chosenHours.push(secureRandomInt(6, 22));
  }
  chosenHours.sort((a, b) => a - b);

  const timestamps: Date[] = chosenHours.map((hour) => {
    const minute = secureRandomInt(0, 59);
    const second = secureRandomInt(0, 59);
    const millis = secureRandomInt(0, 999);
    const d = new Date(`${date}T00:00:00.000Z`);
    d.setUTCHours(hour, minute, second, millis);
    return d;
  });

  return timestamps;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const countOverrideIdx = args.indexOf("--count");
  const countOverride =
    countOverrideIdx >= 0 ? parseInt(args[countOverrideIdx + 1], 10) : null;
  const resetFlag = args.includes("--reset");

  const todayUTC = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const dayOfWeek = new Date().getUTCDay(); // 0=Sun ... 6=Sat

  console.log(`\n=== Drip-Publish — ${todayUTC} (day ${dayOfWeek}) ===\n`);

  // Load or initialise state
  let state = loadState();

  // --reset: wipe all state and re-enumerate
  if (resetFlag) {
    console.log("[RESET] Clearing all state...");
    state = { published: {}, pending: [], lastRunDate: null, history: [] };
  }

  // Enumerate all pSEO pages from the data modules
  const allPages = await enumerateAllPseoPages();
  console.log(`Total pSEO pages in project: ${allPages.length}`);

  // If first run or after reset, initialise the pending list
  if (state.pending.length === 0 && Object.keys(state.published).length === 0) {
    console.log("First run detected — initialising pending list.");
    // Shuffle the full list so the publish order is unpredictable
    state.pending = secureShuffleInPlace([...allPages]);
  } else {
    // Reconcile: any new pages that appeared since the last run?
    const knownSet = new Set([
      ...Object.keys(state.published),
      ...state.pending,
    ]);
    const newPages = allPages.filter((p) => !knownSet.has(p));
    if (newPages.length > 0) {
      console.log(`Found ${newPages.length} new pages not in state — adding to pending.`);
      // Insert new pages at random positions in the pending list
      for (const page of newPages) {
        const pos = secureRandomInt(0, state.pending.length);
        state.pending.splice(pos, 0, page);
      }
    }
  }

  console.log(
    `Published so far: ${Object.keys(state.published).length} | Pending: ${state.pending.length}`
  );

  // Check idempotency — have we already run today?
  if (state.lastRunDate === todayUTC && !dryRun && !resetFlag) {
    console.log(
      `\nAlready ran today (${todayUTC}). Exiting to prevent double-publishing.`
    );
    console.log(
      "Use --dry-run to preview, or wait until tomorrow.\n"
    );
    return;
  }

  // Nothing left to publish?
  if (state.pending.length === 0) {
    console.log("\nAll pages have been published! Nothing to do.\n");
    if (!dryRun) saveState(state);
    return;
  }

  // Decide how many pages to publish today
  let todayCount =
    countOverride !== null && !isNaN(countOverride)
      ? countOverride
      : decideTodayCount(dayOfWeek);

  // Cap at what's available
  todayCount = Math.min(todayCount, state.pending.length);

  if (todayCount === 0) {
    console.log(
      `\nDecided to skip today (weekend rest). No pages published.\n`
    );
    if (!dryRun) {
      state.lastRunDate = todayUTC;
      state.history.push({
        date: todayUTC,
        count: 0,
        pages: [],
        timestamps: [],
      });
      saveState(state);
    }
    return;
  }

  // Pick the pages (take from front of the shuffled pending list)
  const batch = state.pending.slice(0, todayCount);

  // Generate random timestamps for today
  const timestamps = generatePublishTimestamps(todayUTC, todayCount);

  console.log(`\nPublishing ${todayCount} pages today:\n`);
  for (let i = 0; i < batch.length; i++) {
    const ts = timestamps[i]?.toISOString() ?? new Date().toISOString();
    console.log(`  ${i + 1}. ${batch[i]}`);
    console.log(`     -> scheduled at ${ts}`);
  }

  if (dryRun) {
    console.log("\n[DRY RUN] No changes written.\n");
    return;
  }

  // Apply the batch to state
  for (let i = 0; i < batch.length; i++) {
    const pagePath = batch[i];
    const ts = timestamps[i]?.toISOString() ?? new Date().toISOString();
    state.published[pagePath] = ts;
  }
  state.pending = state.pending.slice(todayCount);
  state.lastRunDate = todayUTC;
  state.history.push({
    date: todayUTC,
    count: todayCount,
    pages: batch,
    timestamps: timestamps.map((t) => t.toISOString()),
  });

  saveState(state);

  console.log(`\nState saved. ${state.pending.length} pages remaining.\n`);

  // Auto-generate the drip sitemap
  console.log("Generating drip sitemap...");
  await generateDripSitemap(state);
  console.log("Done.\n");
}

// ---------------------------------------------------------------------------
// Drip sitemap generator (embedded companion)
// ---------------------------------------------------------------------------

async function generateDripSitemap(state: DripState): Promise<void> {
  const sitemapPath = path.join(PROJECT_ROOT, "public", "sitemap-pseo.xml");

  interface SitemapEntry {
    loc: string;
    lastmod?: string;
    priority: string;
    changefreq: string;
  }

  // Static/core pages that should always be in the sitemap
  const coreUrls: SitemapEntry[] = [
    { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-developers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-marketers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-designers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-product-managers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-project-managers`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/hire-assistants`, priority: "0.9", changefreq: "weekly" },
  ];

  // Build URL entries from published pages
  const publishedEntries: SitemapEntry[] = Object.entries(state.published).map(
    ([pagePath, publishedAt]) => {
      const segments = pagePath.split("/").filter(Boolean);
      const depth = segments.length;

      // Assign priority based on page type
      let priority = "0.5";
      if (depth <= 2) priority = "0.7";
      else if (depth === 3) priority = "0.6";

      return {
        loc: `${BASE_URL}${pagePath}`,
        lastmod: publishedAt.slice(0, 10), // YYYY-MM-DD
        priority,
        changefreq: "monthly",
      };
    }
  );

  // Sort published entries by publish date (oldest first) for a natural look
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

  fs.writeFileSync(sitemapPath, xml, "utf-8");
  console.log(
    `  -> ${sitemapPath} written (${allEntries.length} URLs)`
  );
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

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
