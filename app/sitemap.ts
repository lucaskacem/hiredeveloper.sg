import { MetadataRoute } from 'next';
import { getAllSubcategorySlugs } from '@/app/data/developer-subcategories';
import { getAllMarketingSubcategorySlugs } from '@/app/data/marketer-subcategories';
import { countries } from '@/app/data/locations';
import { competitors } from '@/app/data/competitors';

const BASE_URL = 'https://hiredeveloper.ae';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ---- Static pages ----
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/hire-developers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/hire-marketers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/hire-designers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/hire-product-managers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/hire-project-managers`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/hire-assistants`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/salary-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/team-cost-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/technology-comparison`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/interview-questions`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/project-estimation`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/skill-assessment`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/comparison`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/for-talent`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/team`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/calculate-savings`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/remote-jobs`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${BASE_URL}/remote-companies`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${BASE_URL}/talent-resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  // ---- Blog posts ----
  const blogSlugs = [
    'distributed-software-engineering-team',
    'how-to-conduct-a-remote-technical-interview',
    'how-to-find-developers',
    'how-to-manage-developers-remote-team',
    'remote-ready-interview-questions',
    'software-engineer-interview-questions',
  ];
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/employer-blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ---- Developer subcategory pages ----
  const devSlugs = getAllSubcategorySlugs();
  const devPages: MetadataRoute.Sitemap = devSlugs.map((slug) => ({
    url: `${BASE_URL}/hire-developers/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ---- Marketer subcategory pages ----
  const marketerSlugs = getAllMarketingSubcategorySlugs();
  const marketerPages: MetadataRoute.Sitemap = marketerSlugs.map((slug) => ({
    url: `${BASE_URL}/hire-marketers/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ---- Location pages (country, region, city) ----
  const locationPages: MetadataRoute.Sitemap = [];
  for (const country of countries) {
    locationPages.push({
      url: `${BASE_URL}/locations/${country.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
    for (const region of country.regions) {
      locationPages.push({
        url: `${BASE_URL}/locations/${country.slug}/${region.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
      for (const city of region.cities) {
        locationPages.push({
          url: `${BASE_URL}/locations/${country.slug}/${region.slug}/${city.slug}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
    }
  }

  // ---- Developer + city combination pages ----
  const allCities = countries.flatMap((c) =>
    c.regions.flatMap((r) => r.cities.map((city) => city.slug))
  );
  // Include top 35 cities by generating combos for key tech slugs
  const topCitySlugs = countries
    .flatMap((c) =>
      c.regions.flatMap((r) =>
        r.cities.map((city) => ({ slug: city.slug, population: city.population }))
      )
    )
    .sort((a, b) => b.population - a.population)
    .slice(0, 35)
    .map((c) => c.slug);

  const devCityPages: MetadataRoute.Sitemap = [];
  for (const devSlug of devSlugs) {
    for (const citySlug of topCitySlugs) {
      devCityPages.push({
        url: `${BASE_URL}/hire-developers/${devSlug}/${citySlug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // ---- Marketer + city combination pages ----
  const marketerCityPages: MetadataRoute.Sitemap = [];
  for (const mSlug of marketerSlugs) {
    for (const citySlug of topCitySlugs) {
      marketerCityPages.push({
        url: `${BASE_URL}/hire-marketers/${mSlug}/${citySlug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // ---- Comparison pages ----
  const comparisonPages: MetadataRoute.Sitemap = competitors.map((c) => ({
    url: `${BASE_URL}/comparison/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...devPages,
    ...marketerPages,
    ...locationPages,
    ...devCityPages,
    ...marketerCityPages,
    ...comparisonPages,
  ];
}
