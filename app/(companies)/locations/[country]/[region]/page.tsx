import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import RelatedLinks from '../../../components/RelatedLinks';
import FinalCTA from '../../../components/FinalCTA';
import {
  getAllRegionPaths,
  getRegionByPath,
  getNearbyRegions,
} from '@/app/data/locations';

interface Props {
  params: Promise<{ country: string; region: string }>;
}

export async function generateStaticParams() {
  return getAllRegionPaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, region } = await params;
  const data = getRegionByPath(country, region);
  if (!data) return {};
  const year = new Date().getFullYear();
  const hashStr = `${country}-${region}`;
  let h = 0;
  for (let i = 0; i < hashStr.length; i++) h = ((h << 5) - h + hashStr.charCodeAt(i)) | 0;
  const showYear = Math.abs(h) % 100 < 30;
  return {
    title: showYear ? `Hire Remote Developers in ${data.region.name}, ${data.country.name} - ${year} | HireDeveloper.sg` : `Hire Remote Developers in ${data.region.name}, ${data.country.name} | HireDeveloper.sg`,
    description: showYear ? `Find and hire experienced remote developers in ${data.region.name}, ${data.country.name}. Access pre-vetted programmers across ${data.region.cities.length} cities. Top-rated in ${year}.` : `Find and hire experienced remote developers in ${data.region.name}, ${data.country.name}. Access pre-vetted programmers across ${data.region.cities.length} cities.`,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.sg/locations/${country}/${region}`,
    },
  };
}

export default async function RegionPage({ params }: Props) {
  const { country, region } = await params;
  const data = getRegionByPath(country, region);
  if (!data) notFound();

  const nearbyRegions = getNearbyRegions(country, region, 8);

  const totalPopulation = data.region.cities.reduce((sum, c) => sum + c.population, 0);
  const largestCity = data.region.cities.reduce((max, c) => c.population > max.population ? c : max, data.region.cities[0]);

  let rHash = 0;
  for (let i = 0; i < data.region.name.length; i++) {
    rHash = ((rHash << 5) - rHash + data.region.name.charCodeAt(i)) | 0;
  }
  rHash = Math.abs(rHash);

  const allDevLinks = [
    { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
    { label: 'Python Developers', href: '/hire-developers/python' },
    { label: 'React Developers', href: '/hire-developers/reactjs' },
    { label: 'Node.js Developers', href: '/hire-developers/nodejs' },
    { label: 'TypeScript Developers', href: '/hire-developers/typescript' },
    { label: 'Java Developers', href: '/hire-developers/java' },
    { label: 'Full-Stack Developers', href: '/hire-developers/full-stack' },
    { label: 'DevOps Engineers', href: '/hire-developers/devops' },
    { label: 'PHP Developers', href: '/hire-developers/php' },
    { label: 'C# Developers', href: '/hire-developers/csharp' },
    { label: 'AWS Developers', href: '/hire-developers/aws' },
    { label: 'Mobile App Developers', href: '/hire-developers/mobile-app-development' },
    { label: 'AI Developers', href: '/hire-developers/ai' },
    { label: 'Data Scientists', href: '/hire-developers/data-science' },
    { label: 'Backend Developers', href: '/hire-developers/back-end' },
    { label: 'Frontend Developers', href: '/hire-developers/front-end' },
  ];
  const devLinks = Array.from({ length: 8 }, (_, i) => allDevLinks[(rHash + i) % allDevLinks.length]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Hire Remote Developers in ${data.region.name}, ${data.country.name}`,
    description: `Find and hire experienced remote developers in ${data.region.name}, ${data.country.name}. ${data.region.cities.length} cities available.`,
    url: `https://hiredeveloper.sg/locations/${country}/${region}`,
    about: {
      '@type': 'AdministrativeArea',
      name: data.region.name,
      containedInPlace: { '@type': 'Country', name: data.country.name },
    },
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.sg',
      url: 'https://hiredeveloper.sg',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hiredeveloper.sg/' },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://hiredeveloper.sg/locations' },
        { '@type': 'ListItem', position: 3, name: data.country.name, item: `https://hiredeveloper.sg/locations/${country}` },
        { '@type': 'ListItem', position: 4, name: data.region.name, item: `https://hiredeveloper.sg/locations/${country}/${region}` },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: data.country.name, href: `/locations/${country}` },
          { label: data.region.name, href: `/locations/${country}/${region}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">
            {data.country.name}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hire Remote Developers in {data.region.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {data.region.name} in {data.country.name} has approximately{' '}
            {totalPopulation.toLocaleString('en-US')} residents across{' '}
            {data.region.cities.length}{' '}
            {data.region.cities.length === 1 ? 'city' : 'cities'}, offering a
            diverse talent pool. Find pre-vetted remote developers ready to
            start immediately.
          </p>
        </div>
      </section>

      {/* Region description */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tech Talent in {data.region.name}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The {data.region.name} region is part of {data.country.name} and
              encompasses {data.region.cities.length}{' '}
              {data.region.cities.length === 1 ? 'city' : 'cities'}, including{' '}
              {largestCity.name} with {largestCity.population.toLocaleString('en-US')}{' '}
              residents as the largest city. Developers from {data.region.name}{' '}
              bring familiarity with local business processes and industries
              and work in a timezone convenient for APAC collaboration.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through HireDeveloper.sg, gain access to pre-vetted programmers
              in {data.region.name} who have experience with modern technologies,
              agile methodologies, and remote collaboration. Our screening process
              ensures only the most qualified candidates reach you.
            </p>
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Cities in {data.region.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.region.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${country}/${region}/${city.slug}`}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {city.population.toLocaleString('en-US')} residents
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        title={`Developer Specializations in ${data.region.name}`}
        links={devLinks}
      />

      {nearbyRegions.length > 0 && (
        <RelatedLinks
          title={`More Regions in ${data.country.name}`}
          links={nearbyRegions.map((r) => ({
            label: `Developers in ${r.name}`,
            href: `/locations/${country}/${r.slug}`,
          }))}
        />
      )}

      <RelatedLinks
        title="Hire Marketing Talent"
        links={[
          { label: 'SEO Audit Specialist', href: '/hire-marketers/seo-audit' },
          { label: 'Content Strategist', href: '/hire-marketers/content-strategy' },
          { label: 'All Marketing Specializations', href: '/hire-marketers' },
        ]}
      />

      <FinalCTA
        heading={`Find Top Developers in ${data.region.name}!`}
        subheading={`Start now and hire pre-vetted remote developers from ${data.region.name}, ${data.country.name}.`}
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
