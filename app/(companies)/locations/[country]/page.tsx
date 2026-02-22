import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import RelatedLinks from '../../components/RelatedLinks';
import FinalCTA from '../../components/FinalCTA';
import {
  countries,
  getAllCountrySlugs,
  getCountryBySlug,
  getTopCitiesForCountry,
} from '@/app/data/locations';

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ country: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const data = getCountryBySlug(country);
  if (!data) return {};
  return {
    title: `Hire Remote Developers in ${data.name} | HireDeveloper.ae`,
    description: data.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.ae/locations/${country}`,
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = getCountryBySlug(country);
  if (!data) notFound();

  const topCities = getTopCitiesForCountry(country, 10);

  const topCitiesWithRegion = topCities.map((city) => {
    const region = data.regions.find((r) =>
      r.cities.some((c) => c.slug === city.slug),
    );
    return { ...city, regionSlug: region?.slug ?? '' };
  });

  const otherCountries = countries.filter((c) => c.slug !== country);

  const countryContent: Record<string, { intro: string; highlights: { title: string; text: string }[]; specLinks: { label: string; href: string }[] }> = {
    uae: {
      intro: `The United Arab Emirates is the Middle East's leading technology hub, home to Dubai Internet City, Abu Dhabi's Hub71, and thriving free zones across all seven emirates. With a cosmopolitan workforce, world-class infrastructure, and a government that actively promotes digital transformation, the UAE offers an exceptional talent pool of skilled developers.`,
      highlights: [
        { title: 'World-Class Tech Hubs', text: 'Dubai, Abu Dhabi, and Sharjah host some of the most advanced tech ecosystems in the region. From DIFC fintech to Dubai Silicon Oasis startups, developers here work on cutting-edge projects.' },
        { title: 'Diverse Talent Pool', text: 'The UAE attracts tech talent from around the world. Developers here bring experience from global companies and diverse industries, offering broad expertise across technologies.' },
        { title: 'Business-Friendly Environment', text: 'Free zones, zero income tax, and strong IP protection make the UAE ideal for tech companies. Developers understand this ecosystem and build products optimized for regional needs.' },
      ],
      specLinks: [
        { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
        { label: 'Python Developers', href: '/hire-developers/python' },
        { label: 'React Developers', href: '/hire-developers/reactjs' },
        { label: 'AI Developers', href: '/hire-developers/ai' },
        { label: 'DevOps Engineers', href: '/hire-developers/devops' },
        { label: 'Full-Stack Developers', href: '/hire-developers/full-stack' },
        { label: 'Node.js Developers', href: '/hire-developers/nodejs' },
        { label: 'Mobile App Developers', href: '/hire-developers/mobile-app-development' },
      ],
    },
    'saudi-arabia': {
      intro: `Saudi Arabia's Vision 2030 is transforming the Kingdom into a global technology powerhouse. With massive investments in NEOM, Riyadh's tech sector, and digital government initiatives, Saudi Arabia offers a rapidly growing pool of developers with expertise in enterprise solutions, fintech, and smart city technologies.`,
      highlights: [
        { title: 'Vision 2030 Digital Push', text: 'Government-backed digital transformation creates enormous demand for developers. Projects range from smart city infrastructure to e-government platforms and fintech solutions.' },
        { title: 'Enterprise-Grade Talent', text: 'Saudi developers often have experience with large-scale enterprise systems, government projects, and high-security applications, bringing robust engineering practices.' },
        { title: 'Growing Startup Ecosystem', text: 'Riyadh and Jeddah are emerging as startup hubs with accelerators, VCs, and tech communities that foster innovative developers.' },
      ],
      specLinks: [
        { label: 'Java Developers', href: '/hire-developers/java' },
        { label: 'Python Developers', href: '/hire-developers/python' },
        { label: 'Cloud Developers', href: '/hire-developers/cloud' },
        { label: 'AI Developers', href: '/hire-developers/ai' },
        { label: 'React Developers', href: '/hire-developers/reactjs' },
        { label: 'DevOps Engineers', href: '/hire-developers/devops' },
        { label: 'Data Scientists', href: '/hire-developers/data-science' },
        { label: 'Mobile App Developers', href: '/hire-developers/mobile-app-development' },
      ],
    },
  };

  const content = countryContent[country] || {
    intro: `${data.name} offers a growing pool of qualified developers. Through HireDeveloper.ae, find pre-vetted programmers who understand the local market and integrate seamlessly into your team.`,
    highlights: [
      { title: 'Local Expertise', text: `Developers from ${data.name} understand local business processes and industry standards, bringing valuable regional knowledge to your projects.` },
      { title: 'Qualified Talent', text: `${data.name} has well-trained professionals in the IT sector who are proficient in various technologies and frameworks.` },
      { title: 'Cultural Alignment', text: `Developers from ${data.name} integrate seamlessly into your team, ensuring smooth communication and efficient collaboration.` },
    ],
    specLinks: [
      { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
      { label: 'Python Developers', href: '/hire-developers/python' },
      { label: 'React Developers', href: '/hire-developers/reactjs' },
      { label: 'Node.js Developers', href: '/hire-developers/nodejs' },
      { label: 'TypeScript Developers', href: '/hire-developers/typescript' },
      { label: 'Java Developers', href: '/hire-developers/java' },
      { label: 'PHP Developers', href: '/hire-developers/php' },
      { label: 'AWS Developers', href: '/hire-developers/aws' },
    ],
  };

  const countryCodeMap: Record<string, string> = { uae: 'AE', 'saudi-arabia': 'SA', qatar: 'QA', bahrain: 'BH', oman: 'OM', kuwait: 'KW' };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Hire Remote Developers in ${data.name}`,
    description: data.metaDescription,
    url: `https://hiredeveloper.ae/locations/${country}`,
    about: {
      '@type': 'Country',
      name: data.name,
      identifier: countryCodeMap[country] || country.toUpperCase(),
    },
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.ae',
      url: 'https://hiredeveloper.ae',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hiredeveloper.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://hiredeveloper.ae/locations' },
        { '@type': 'ListItem', position: 3, name: data.name, item: `https://hiredeveloper.ae/locations/${country}` },
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
          { label: data.name, href: `/locations/${country}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hire Remote Developers in {data.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {data.metaDescription}
          </p>
        </div>
      </section>

      {/* Country intro */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Hire Developers in {data.name}?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {content.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.highlights.map((h, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{h.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UAE-specific: Free Zones & Business Facts */}
      {country === 'uae' && (
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-[1280px] mx-auto px-12">
            <h2 className="text-2xl font-bold mb-8">Why the UAE for Hiring Developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-3xl font-bold text-[rgb(0,159,255)] mb-2">0%</p>
                <p className="text-sm text-white/70">Personal income tax for all residents in the UAE</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-3xl font-bold text-[rgb(0,159,255)] mb-2">GMT+4</p>
                <p className="text-sm text-white/70">Strategic timezone bridging Asia, Europe, and Africa</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-3xl font-bold text-[rgb(0,159,255)] mb-2">200+</p>
                <p className="text-sm text-white/70">Nationalities working in the UAE tech ecosystem</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-3xl font-bold text-[rgb(0,159,255)] mb-2">95%+</p>
                <p className="text-sm text-white/70">Internet penetration rate — highest in MENA</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Key Tech Free Zones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { name: 'Dubai Internet City (DIC)', focus: 'ICT, software, startups — Google, Microsoft, Meta HQs' },
                { name: 'DIFC', focus: 'Fintech, banking, financial services — 400+ firms' },
                { name: 'Dubai Silicon Oasis (DSO)', focus: 'Semiconductors, electronics, and software development' },
                { name: 'Abu Dhabi Global Market (ADGM)', focus: 'Fintech sandbox, digital assets, blockchain' },
                { name: 'Hub71 (Abu Dhabi)', focus: 'Tech startup ecosystem backed by Mubadala — 200+ startups' },
                { name: 'Sharjah Media City (Shams)', focus: 'Media, IT, and digital marketing — affordable licenses' },
              ].map((zone) => (
                <div key={zone.name} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-sm font-semibold text-white mb-1">{zone.name}</p>
                  <p className="text-xs text-white/50">{zone.focus}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 flex-wrap text-xs text-white/40">
              <span>Sun-Thu work week</span>
              <span>|</span>
              <span>Golden Visa for tech professionals</span>
              <span>|</span>
              <span>100% foreign ownership in free zones</span>
              <span>|</span>
              <span>AED pegged to USD at 3.67</span>
            </div>
          </div>
        </section>
      )}

      {/* Regions grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {country === 'uae' ? '7 Emirates' : `${data.regions.length} Regions`} in {data.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.regions.map((region) => (
              <Link
                key={region.slug}
                href={`/locations/${country}/${region.slug}`}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {region.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {region.cities.length}{' '}
                  {region.cities.length === 1 ? 'city' : 'cities'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top cities */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top Cities in {data.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {topCitiesWithRegion.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${country}/${city.regionSlug}/${city.slug}`}
                className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {city.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {city.population.toLocaleString('en-US')} residents
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        title={`Popular Developer Specializations in ${data.name}`}
        links={content.specLinks}
      />

      {/* Cross-link to marketers */}
      <RelatedLinks
        title={`Hire Marketers in ${data.name}`}
        links={[
          { label: 'SEO Audit Specialist', href: '/hire-marketers/seo-audit' },
          { label: 'Content Strategist', href: '/hire-marketers/content-strategy' },
          { label: 'Paid Ads Expert', href: '/hire-marketers/paid-ads' },
          { label: 'All Marketing Specializations', href: '/hire-marketers' },
        ]}
      />

      <RelatedLinks
        title="Other Locations"
        links={otherCountries.map((c) => ({
          label: `Developers in ${c.name}`,
          href: `/locations/${c.slug}`,
        }))}
      />

      {/* Cross-link to tools and blog */}
      <RelatedLinks
        title="Hiring Resources"
        links={[
          { label: 'Developer Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
          { label: 'Finding Freelance Developers: 21+ Tips', href: '/employer-blog/how-to-find-developers' },
          { label: 'Remote Technical Interview Guide', href: '/employer-blog/how-to-conduct-a-remote-technical-interview' },
        ]}
      />

      <FinalCTA
        heading={`Find Top Developers in ${data.name}!`}
        subheading="Start risk-free. Access pre-vetted programmers."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
