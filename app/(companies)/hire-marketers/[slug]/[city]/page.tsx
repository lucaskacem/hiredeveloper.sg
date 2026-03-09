import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import MarketerCityPageContent from '../../../components/MarketerCityPageContent';
import {
  getMarketingSubcategoryBySlug,
  getAllMarketingSubcategories,
} from '@/app/data/marketer-subcategories';
import { countries, City, Country, Region } from '@/app/data/locations';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface CityWithContext {
  city: City;
  region: Region;
  country: Country;
}

function findCityBySlug(slug: string): CityWithContext | undefined {
  for (const country of countries) {
    for (const region of country.regions) {
      for (const city of region.cities) {
        if (city.slug === slug) {
          return { city, region, country };
        }
      }
    }
  }
  return undefined;
}

/** Return all cities flattened with their context, sorted by population desc. */
function getAllCitiesSorted(): CityWithContext[] {
  const all: CityWithContext[] = [];
  for (const country of countries) {
    for (const region of country.regions) {
      for (const city of region.cities) {
        all.push({ city, region, country });
      }
    }
  }
  return all.sort((a, b) => b.city.population - a.city.population);
}

// ---------------------------------------------------------------------------
// Top marketing specializations and cities for static generation
// ---------------------------------------------------------------------------

const TOP_MARKETING_SLUGS = [
  'digital-marketers',
  'seo-specialists',
  'content-marketers',
  'social-media-marketers',
  'ppc-specialists',
  'email-marketers',
  'growth-hackers',
  'brand-strategists',
  'marketing-analysts',
  'performance-marketers',
  'copywriters',
  'marketing-managers',
  'product-marketers',
  'sem-specialists',
  'inbound-marketers',
  'influencer-marketers',
  'affiliate-marketers',
  'community-managers',
  'pr-specialists',
  'marketing-consultants',
];

const TOP_CITY_COUNT = 35;

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const topCities = getAllCitiesSorted()
    .slice(0, TOP_CITY_COUNT)
    .map((c) => c.city.slug);

  const params: { slug: string; city: string }[] = [];
  for (const slug of TOP_MARKETING_SLUGS) {
    const sub = getMarketingSubcategoryBySlug(slug);
    if (!sub) continue;
    for (const citySlug of topCities) {
      params.push({ slug, city: citySlug });
    }
  }
  return params;
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

function metaHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const sub = getMarketingSubcategoryBySlug(slug);
  const cityCtx = findCityBySlug(citySlug);
  if (!sub || !cityCtx) return {};

  const spec = sub.name;
  const city = cityCtx.city.name;
  const region = cityCtx.region.name;
  const country = cityCtx.country.name;
  const sk = sub.skills;
  const h = metaHash(slug + citySlug);
  const year = new Date().getFullYear();
  const showYear = h % 100 < 30;

  const titles = showYear ? [
    `Hire ${spec} in ${city} - ${year} | HireDeveloper.sg`,
    `${spec} in ${city} — Top 2% Vetted ${year} | HireDeveloper.sg`,
    `Hire Freelance ${spec} in ${city} - ${year} | HireDeveloper.sg`,
    `Best ${spec} in ${city}, ${country} - ${year} | HireDeveloper.sg`,
    `Find ${spec} in ${city} — Matched in 48h | HireDeveloper.sg`,
    `${city} ${spec} for Hire - ${year} | HireDeveloper.sg`,
    `Hire Remote ${spec} in ${city} - ${year} | HireDeveloper.sg`,
  ] : [
    `Hire ${spec} in ${city} | HireDeveloper.sg`,
    `${spec} in ${city} — Top 2% Vetted | HireDeveloper.sg`,
    `Hire Freelance ${spec} in ${city} | HireDeveloper.sg`,
    `Best ${spec} in ${city}, ${country} | HireDeveloper.sg`,
    `Find ${spec} in ${city} — Matched in 48h | HireDeveloper.sg`,
    `${city} ${spec} for Hire | HireDeveloper.sg`,
    `Hire Remote ${spec} in ${city} | HireDeveloper.sg`,
  ];

  const descriptions = [
    `Find vetted freelance ${spec} in ${city}, ${region}. Experts in ${sk.slice(0, 3).join(', ')} ready to start. Matched in 48h, $0 until you hire.`,
    `Hire pre-screened ${spec} based in ${city}. ${sk[0]} and ${sk[1]} specialists matched to your project within 48 hours. Risk-free.`,
    `Looking for ${spec} in ${city}, ${country}? Access the top 2% of vetted marketing talent. ${sk.slice(0, 3).join(', ')} expertise.`,
    `${city}-based ${spec} available for freelance or full-time. Specialized in ${sk[0]}, ${sk[1]}, and ${sk[2]}. Matched within 48h.`,
    `Connect with top ${spec} in ${city}. Pre-screened for ${sk.slice(0, 4).join(', ')} and more. Flexible hiring for ${country} businesses.`,
    `Hire expert ${spec} from ${city}, ${region}. Vetted ${sk[0]} and ${sk[1]} professionals. $0 upfront — pay only when you hire.`,
    `Need ${spec} in ${city}? Browse vetted talent specializing in ${sk.slice(0, 3).join(', ')}. Interview top candidates within days.`,
  ];

  const title = titles[h % titles.length];
  const description = descriptions[(h + 3) % descriptions.length];

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.sg/hire-marketers/${slug}/${citySlug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function MarketingCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const sub = getMarketingSubcategoryBySlug(slug);
  const cityCtx = findCityBySlug(citySlug);
  if (!sub || !cityCtx) notFound();

  const { city, region, country } = cityCtx;
  const populationFormatted = city.population.toLocaleString('en-US');
  const pop = city.population;

  const isLargeCity = pop > 500000;
  const isMediumCity = pop > 100000 && pop <= 500000;

  // ---- JSON-LD (always in English for search engines) ----
  const countryCode = 'SG';

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Hire ${sub.name} in ${city.name} - HireDeveloper.sg`,
    description: `Hire freelance ${sub.name} in ${city.name}. ${city.description}`,
    url: `https://hiredeveloper.sg/hire-marketers/${slug}/${city.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.sg',
      url: 'https://hiredeveloper.sg',
    },
    serviceType: `${sub.name} Recruitment`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressRegion: region.name,
        addressCountry: countryCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.lat,
        longitude: city.lng,
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: '$0 until you hire',
    },
  };

  // ---- FAQ Data ----
  const faqItems = [
    {
      q: `How do I find ${sub.name} in ${city.name}?`,
      a: `With HireDeveloper.sg, you can access vetted ${sub.name} in ${city.name} within 48 hours. Our platform provides access to the top 2% of ${sub.name} specializing in ${sub.skills.slice(0, 3).join(', ')} and other marketing disciplines.`,
    },
    {
      q: `How much does a freelance ${sub.name.replace(' Marketers', '').replace(' Specialists', '')} marketer cost in ${city.name}?`,
      a: `Costs vary depending on experience level and specialization. Freelance ${sub.name} in ${city.name} typically charge between $50\u2013$150 per hour. Through HireDeveloper.sg, you can save up to 58% compared to traditional hiring methods.`,
    },
    {
      q: `Which ${sub.skills[0]} skills are most in demand in ${city.name}?`,
      a: `In ${city.name}, ${sub.name} with expertise in ${sub.skills.slice(0, 5).join(', ')} are in high demand. ${isLargeCity ? `As a major city, ${city.name} offers a wide range of projects, from startups to large enterprises.` : `${city.name} has a growing business scene with increasing demand for specialized marketers.`}`,
    },
    {
      q: `Can I hire ${sub.name} in ${city.name} for remote work?`,
      a: `Yes, all ${sub.name} on HireDeveloper.sg specialize in remote work. Marketers based in ${city.name} operate in the UTC+8 timezone, are fluent in English, and have experience working with distributed teams and modern collaboration tools.`,
    },
    {
      q: `How quickly can I hire a ${sub.name.replace(' Marketers', '').replace(' Specialists', '')} specialist in ${city.name}?`,
      a: `With HireDeveloper.sg, you receive vetted ${sub.name} profiles from ${city.name} within 48 hours. After the interview process, you can often hire the marketer within a week and start collaborating immediately.`,
    },
  ];

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hiredeveloper.sg' },
      { '@type': 'ListItem', position: 2, name: 'Hire Marketers', item: 'https://hiredeveloper.sg/hire-marketers' },
      { '@type': 'ListItem', position: 3, name: sub.name, item: `https://hiredeveloper.sg/hire-marketers/${slug}` },
      { '@type': 'ListItem', position: 4, name: city.name, item: `https://hiredeveloper.sg/hire-marketers/${slug}/${city.slug}` },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  // ---- Why-hire cards ----
  const whyCards = isLargeCity
    ? [
        {
          title: `Thriving ${sub.skills[0]} Talent Ecosystem`,
          text: `With a population of ${populationFormatted}, ${city.name} is one of the largest cities in Southeast Asia region. The city is home to numerous companies and agencies leveraging ${sub.skills.slice(0, 3).join(', ')} \u2014 an ideal breeding ground for top-tier ${sub.name}.`,
        },
        {
          title: 'Deep Industry Knowledge',
          text: `${sub.name} in ${city.name} bring experience from diverse industries \u2014 from fintech and e-commerce to logistics and smart city initiatives. This industry-specific knowledge, combined with ${sub.skills[0]} expertise, makes them valuable partners for demanding projects.`,
        },
        {
          title: 'International Project Experience',
          text: `In a global hub like ${city.name}, many ${sub.name} work in international teams. They are proficient in agile methodologies, communicate confidently in English, and bring best practices from global campaigns.`,
        },
      ]
    : isMediumCity
    ? [
        {
          title: `Regional ${sub.skills[0]} Expertise`,
          text: `With a population of ${populationFormatted}, ${city.name} is an important economic hub in ${region.name}. The local marketing community offers specialized ${sub.name} who combine regional market knowledge with modern ${sub.skills[0]} skills.`,
        },
        {
          title: 'Dedicated Specialists',
          text: `${sub.name} from mid-sized cities like ${city.name} are known for high project commitment and long-term collaboration. They bring focused ${sub.skills.slice(0, 2).join(' and ')} expertise to your projects.`,
        },
        {
          title: 'Excellent Value for Money',
          text: `Compared to major metropolises, ${sub.name} in ${city.name} often offer excellent value for money while maintaining consistently high quality in ${sub.skills[0]} and related marketing disciplines.`,
        },
      ]
    : [
        {
          title: `${sub.skills[0]} Expertise on the Ground`,
          text: `Even in a city like ${city.name} (population ${populationFormatted}), you can find highly qualified ${sub.name} who know the local market in ${country.name} and deliver modern ${sub.skills[0]} solutions.`,
        },
        {
          title: 'Personalized Collaboration',
          text: `${sub.name} from ${city.name} maintain close professional networks and offer personalized attention to your ${sub.skills.slice(0, 2).join(' and ')} projects \u2014 with high reliability and focus.`,
        },
        {
          title: 'Same Timezone, Clear Communication',
          text: `${city.name} is in the UTC+8 timezone. Your ${sub.name} are fluent in English and work seamlessly with your team \u2014 no language barriers, no timezone issues.`,
        },
      ];

  // ---- Specializations in this city (related subcategories) ----
  const relatedSpecs = getAllMarketingSubcategories()
    .filter((s) => s.slug !== slug)
    .slice(0, 12);

  const specLinks = relatedSpecs.map((s) => ({
    label: `${s.name} in ${city.name}`,
    slug: s.slug,
    citySlug: city.slug,
  }));

  // ---- Cross-links: same specialization in other cities ----
  const topCities = getAllCitiesSorted()
    .filter((c) => c.city.slug !== city.slug)
    .slice(0, 12);

  const sameSpecOtherCities = topCities.map((c) => ({
    label: `${sub.name} in ${c.city.name}`,
    href: `/hire-marketers/${slug}/${c.city.slug}`,
  }));

  // ---- Cross-links: other specializations in same city ----
  const otherSpecsSameCity = relatedSpecs.slice(0, 8).map((s) => ({
    label: `${s.name} in ${city.name}`,
    href: `/hire-marketers/${s.slug}/${city.slug}`,
  }));

  // ---- Breadcrumb items ----
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hire Marketers', href: '/hire-marketers' },
    { label: sub.name, href: `/hire-marketers/${slug}` },
    {
      label: city.name,
      href: `/hire-marketers/${slug}/${city.slug}`,
    },
  ];

  // ---- Hero subtitle ----
  const heroSubtitle = `Find vetted freelance ${sub.name} in ${city.name}, ${region.name}. Our experts in ${sub.skills.slice(0, 3).join(', ')} combine local market insight with first-class marketing competence. ${
    isLargeCity
      ? `As a major city, ${city.name} provides access to a diverse pool of ${sub.name} with international project experience.`
      : isMediumCity
      ? `${city.name} is a growing business hub in ${region.name} with dedicated ${sub.name} who value long-term partnerships.`
      : `${sub.name} from ${city.name} are known for personalized attention and high reliability.`
  }`;

  // ---- Skills description ----
  const skillsDescription = `Our ${sub.name} in ${city.name} are proficient in these and many other marketing disciplines. Every candidate has been rigorously tested through a multi-step process for marketing skills and communication ability.`;

  // ---- Specs intro ----
  const specsIntro = `In addition to ${sub.name}, you can find other specialists in ${city.name} through HireDeveloper.sg:`;

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Header />

      <MarketerCityPageContent
        subName={sub.name}
        cityName={city.name}
        regionName={region.name}
        countryName={country.name}
        slug={slug}
        citySlug={city.slug}
        skills={sub.skills}
        heroSubtitle={heroSubtitle}
        whyCards={whyCards}
        specLinks={specLinks}
        faqItems={faqItems}
        sameSpecOtherCities={sameSpecOtherCities}
        otherSpecsSameCity={otherSpecsSameCity}
        breadcrumbItems={breadcrumbItems}
        skillsDescription={skillsDescription}
        specsIntro={specsIntro}
      />

      <Footer />
    </div>
  );
}
