import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import MarketerSubcategoryPageContent from '../../components/MarketerSubcategoryPageContent';
import {
  getMarketingSubcategoryBySlug,
  getAllMarketingSubcategorySlugs,
  getRelatedMarketingSubcategories,
  generateMarketingProfiles,
  generateMarketingGuideSections,
} from '@/app/data/marketer-subcategories';
import { countries } from '@/app/data/locations';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMarketingSubcategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getMarketingSubcategoryBySlug(slug);
  if (!data) return {};
  const year = new Date().getFullYear();
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
  const showYear = Math.abs(h) % 100 < 30;
  return {
    title: showYear ? `Hire ${data.name} - ${year} | HireDeveloper.sg` : `Hire ${data.name} | HireDeveloper.sg`,
    description: showYear ? `${data.metaDescription} Updated for ${year}.` : data.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.sg/hire-marketers/${slug}`,
    },
  };
}

export default async function MarketerSubcategoryPage({ params }: Props) {
  const { slug } = await params;
  const data = getMarketingSubcategoryBySlug(slug);
  if (!data) notFound();

  const profiles = generateMarketingProfiles(data.name, data.skills);
  const guideSections = generateMarketingGuideSections(data.name);
  const related = getRelatedMarketingSubcategories(slug, 8);

  // Shuffle profile order monthly using seeded random (year + month + slug)
  const now = new Date();
  const shuffleSeed = `${now.getFullYear()}-${now.getMonth()}-${slug}`;
  let seedHash = 0;
  for (let i = 0; i < shuffleSeed.length; i++) {
    seedHash = ((seedHash << 5) - seedHash + shuffleSeed.charCodeAt(i)) | 0;
  }
  seedHash = Math.abs(seedHash);
  const shuffledProfiles = [...profiles].sort((a, b) => {
    const ha = Math.abs(((seedHash << 5) - seedHash + a.name.charCodeAt(0)) | 0);
    const hb = Math.abs(((seedHash << 5) - seedHash + b.name.charCodeAt(0)) | 0);
    return ha - hb;
  });

  const stats = [
    { prefix: 'Up to', value: '75%', label: 'faster hiring' },
    { prefix: 'Up to', value: '58%', label: 'cost savings' },
    { value: `${data.heroCount.toLocaleString('en-US')}+`, label: `${data.name} available` },
  ];

  const testimonials = [
    {
      quote: `The quality of ${data.name} at HireDeveloper.sg is outstanding. We found the perfect candidate in less than a week.`,
      author: 'M.G.',
      title: 'CEO',
      company: 'SaaS Company',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      quote: 'I found former founders, senior engineers, and even CMOs in less than 48 hours.',
      author: 'C.B.',
      title: 'Founder & CEO',
      company: 'Tech Startup',
      avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Request',
      description: `Describe the ideal ${data.name} you are looking for.`,
      subtext: 'Tell us about the role, technical requirements, and budget.',
      image: 'request.png',
    },
    {
      number: '02',
      title: 'Interview',
      description: `Receive vetted ${data.name} profiles that match your requirements.`,
      subtext: `Select the ${data.name} you would like to interview.`,
      image: 'interview.png',
    },
    {
      number: '03',
      title: 'Hire',
      description: `When you are ready, hire the preferred ${data.name}.`,
      subtext: 'Sign an NDA, and we handle the paperwork.',
      image: 'hire.png',
    },
  ];

  const relatedLinks = related.map((r) => ({
    label: r.name,
    href: `/hire-marketers/${r.slug}`,
  }));

  const locationNames: Record<string, string> = {
    singapore: 'Singapore',
    'marina-bay': 'Marina Bay',
    'jurong-east': 'Jurong East',
    tampines: 'Tampines',
    punggol: 'Punggol',
    woodlands: 'Woodlands',
    sengkang: 'Sengkang',
  };

  // Map city/country slugs to correct location URLs
  const locationHrefs: Record<string, string> = {
    singapore: '/locations/singapore',
    'marina-bay': '/locations/singapore/central-region/marina-bay',
    'jurong-east': '/locations/singapore/west-region/jurong-east',
    tampines: '/locations/singapore/east-region/tampines',
    punggol: '/locations/singapore/north-east-region/punggol',
    woodlands: '/locations/singapore/north-region/woodlands',
    sengkang: '/locations/singapore/north-east-region/sengkang',
  };

  const countrySlugs = new Set(['singapore']);
  const locationLinks = data.relatedLocations.map((loc) => ({
    label: `${data.name} in ${locationNames[loc] || loc}`,
    href: countrySlugs.has(loc)
      ? (locationHrefs[loc] || `/locations/${loc}`)
      : `/hire-marketers/${slug}/${loc}`,
  }));

  // Generate city-level cross-links
  const topCities = countries
    .flatMap((c) =>
      c.regions.flatMap((r) =>
        r.cities.map((city) => ({
          name: city.name,
          slug: city.slug,
          population: city.population,
        }))
      )
    )
    .sort((a, b) => b.population - a.population)
    .slice(0, 12);

  const cityLinks = topCities.map((c) => ({
    label: `${data.name} in ${c.name}`,
    href: `/hire-marketers/${slug}/${c.slug}`,
  }));

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hire Marketers', href: '/hire-marketers' },
    { label: data.name, href: `/hire-marketers/${slug}` },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Hire ${data.name} - HireDeveloper.sg`,
    description: data.metaDescription,
    url: `https://hiredeveloper.sg/hire-marketers/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.sg',
      url: 'https://hiredeveloper.sg',
    },
    serviceType: `${data.name} Recruitment`,
    areaServed: ['Singapore'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: '$0 until you hire',
    },
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hiredeveloper.sg' },
      { '@type': 'ListItem', position: 2, name: 'Hire Marketers', item: 'https://hiredeveloper.sg/hire-marketers' },
      { '@type': 'ListItem', position: 3, name: data.name, item: `https://hiredeveloper.sg/hire-marketers/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Header />

      <MarketerSubcategoryPageContent
        dataName={data.name}
        heroCount={data.heroCount}
        heroDescription={data.heroDescription}
        slug={slug}
        profiles={shuffledProfiles}
        guideSections={guideSections}
        stats={stats}
        testimonials={testimonials}
        steps={steps}
        relatedLinks={relatedLinks}
        locationLinks={locationLinks}
        cityLinks={cityLinks}
        breadcrumbItems={breadcrumbItems}
      />

      <Footer />
    </div>
  );
}
