import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import RelatedLinks from '../../components/RelatedLinks';
import FinalCTA from '../../components/FinalCTA';
import HiringProcessFlowchart from '../../components/HiringProcessFlowchart';
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
  const year = new Date().getFullYear();
  let h = 0;
  for (let i = 0; i < country.length; i++) h = ((h << 5) - h + country.charCodeAt(i)) | 0;
  const showYear = Math.abs(h) % 100 < 30;
  return {
    title: showYear ? `Hire Developers in ${data.name} - ${year} | HireDeveloper.sg` : `Hire Developers in ${data.name} | HireDeveloper.sg`,
    description: showYear ? `${data.metaDescription} Top-rated in ${year}.` : data.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.sg/locations/${country}`,
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

  // Shuffle city display order monthly using seeded random
  const now = new Date();
  const shuffleSeed = `${now.getFullYear()}-${now.getMonth()}-${country}`;
  let seedHash = 0;
  for (let i = 0; i < shuffleSeed.length; i++) {
    seedHash = ((seedHash << 5) - seedHash + shuffleSeed.charCodeAt(i)) | 0;
  }
  seedHash = Math.abs(seedHash);
  const shuffledCities = [...topCitiesWithRegion].sort((a, b) => {
    const ha = Math.abs(((seedHash << 5) - seedHash + a.name.charCodeAt(0)) | 0);
    const hb = Math.abs(((seedHash << 5) - seedHash + b.name.charCodeAt(0)) | 0);
    return ha - hb;
  });

  const otherCountries = countries.filter((c) => c.slug !== country);

  const countryContent: Record<string, { intro: string; highlights: { title: string; text: string }[]; specLinks: { label: string; href: string }[] }> = {
    singapore: {
      intro: `Singapore is Asia Pacific's leading technology hub, home to world-renowned tech corridors in the CBD, one-north, and Changi Business Park. With a cosmopolitan workforce, world-class infrastructure, and a government that actively promotes digital transformation through the Smart Nation initiative, Singapore offers an exceptional talent pool of skilled developers.`,
      highlights: [
        { title: 'World-Class Tech Hub', text: 'Singapore hosts one of the most advanced tech ecosystems in Asia Pacific. From fintech startups in the CBD to deep tech in one-north, developers here work on cutting-edge projects.' },
        { title: 'Diverse Talent Pool', text: 'Singapore attracts tech talent from around the world. Developers here bring experience from global companies and diverse industries, offering broad expertise across technologies.' },
        { title: 'Business-Friendly Environment', text: 'Low corporate tax, strong IP protection, and a pro-business regulatory framework make Singapore ideal for tech companies. Developers understand this ecosystem and build products optimized for regional needs.' },
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
  };

  const content = countryContent[country] || {
    intro: `${data.name} offers a growing pool of qualified developers. Through HireDeveloper.sg, find pre-vetted programmers who understand the local market and integrate seamlessly into your team.`,
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

  const countryCodeMap: Record<string, string> = { singapore: 'SG' };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Hire Remote Developers in ${data.name}`,
    description: data.metaDescription,
    url: `https://hiredeveloper.sg/locations/${country}`,
    about: {
      '@type': 'Country',
      name: data.name,
      identifier: countryCodeMap[country] || country.toUpperCase(),
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
        { '@type': 'ListItem', position: 3, name: data.name, item: `https://hiredeveloper.sg/locations/${country}` },
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
      <section className="bg-black py-16 relative overflow-hidden">
        {/* Singapore skyline photo background */}
        {country === 'singapore' && (
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/singapore/photos/skyline-wide.jpg"
              alt=""
              fill
              className="object-cover opacity-20"
              aria-hidden="true"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
          </div>
        )}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 text-center relative z-10">
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
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
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

      {/* Singapore-specific: Tech Hubs & Business Facts */}
      {country === 'singapore' && (
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
            <h2 className="text-2xl font-bold mb-8">Why Singapore for Hiring Developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-3xl font-bold text-[rgb(0,159,255)] mb-2">17%</p>
                <p className="text-sm text-white/70">Corporate tax rate — one of the lowest in Asia</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-3xl font-bold text-[rgb(0,159,255)] mb-2">GMT+8</p>
                <p className="text-sm text-white/70">Strategic timezone bridging Asia, Australia, and the Americas</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-3xl font-bold text-[rgb(0,159,255)] mb-2">200+</p>
                <p className="text-sm text-white/70">Nationalities working in Singapore tech ecosystem</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-3xl font-bold text-[rgb(0,159,255)] mb-2">95%+</p>
                <p className="text-sm text-white/70">Internet penetration rate — highest in APAC</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Key Tech Hubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { name: 'one-north / Fusionopolis', focus: 'R&D, tech startups, biomedical sciences — A*STAR, Grab HQ', image: '/images/singapore/photos/one-north-hub.jpg' },
                { name: 'CBD (Raffles Place)', focus: 'Fintech, banking, financial services — 200+ firms', image: '/images/singapore/photos/raffles-place.jpg' },
                { name: 'Changi Business Park', focus: 'Tech operations, software development, data centres', image: '/images/singapore/photos/changi-park.jpg' },
                { name: 'Singapore Science Park', focus: 'Deep tech, AI, and applied research — NUS spinoffs', image: '/images/singapore/photos/science-park.jpg' },
                { name: 'Block71 / BASH', focus: 'Startup ecosystem backed by NUS Enterprise — 1,000+ startups', image: '/images/singapore/photos/coworking.jpg' },
                { name: 'Mapletree Business City', focus: 'Tech, media, and digital marketing — Google, Visa offices', image: '/images/singapore/photos/marina-bay-wide.jpg' },
              ].map((zone) => (
                <div key={zone.name} className="bg-white/5 rounded-lg border border-white/10 relative overflow-hidden">
                  <div className="relative h-28 overflow-hidden">
                    <Image src={zone.image} alt={zone.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-white mb-1">{zone.name}</p>
                    <p className="text-xs text-white/50">{zone.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 flex-wrap text-xs text-white/40">
              <span>Mon-Fri work week</span>
              <span>|</span>
              <span>Tech.Pass for tech professionals</span>
              <span>|</span>
              <span>100% foreign ownership permitted</span>
              <span>|</span>
              <span>SGD — stable, freely traded currency</span>
            </div>
          </div>
        </section>
      )}

      {/* Regions grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {country === 'singapore' ? 'Singapore districts' : `${data.regions.length} Regions`} in {data.name}
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
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top Cities in {data.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {shuffledCities.map((city) => (
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

      {/* FAQ Section */}
      {country === 'singapore' && (
        <section className="bg-white py-16">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-center mb-10">
                Common questions about hiring developers in Singapore.
              </p>
              <div className="space-y-4">
                {[
                  { q: 'Why is Singapore a good place to hire developers?', a: 'Singapore offers a world-class tech ecosystem with 200+ nationalities, the highest internet penetration in APAC (95%+), English as the business language, strong IP protection, and a timezone (GMT+8) that bridges Asia, Australia, and parts of the Americas. The government actively promotes tech through the Smart Nation initiative and grants like StartupSG.' },
                  { q: 'What is the average developer salary in Singapore?', a: 'Software developer salaries in Singapore range from S$48,000 for junior roles to S$300,000+ for architects and lead engineers. Mid-level developers typically earn S$80,000-S$140,000 annually. Freelance rates range from S$50-200/hour depending on specialization and experience level.' },
                  { q: 'How long does it take to hire a developer in Singapore?', a: 'Through HireDeveloper.sg, you receive pre-vetted candidate profiles within 48 hours. Most companies complete their hire within 7 days. Traditional recruitment agencies typically take 4-8 weeks due to manual screening and limited tech-specific vetting.' },
                  { q: 'Do I need an Employment Pass to hire foreign developers in Singapore?', a: 'If you\'re hiring developers to work in Singapore, they need a valid work pass (Employment Pass for professionals earning S$5,600+/month, or Tech.Pass for experienced tech experts). For remote contractors working from outside Singapore, no local work pass is required.' },
                  { q: 'What tech hubs should I know about in Singapore?', a: 'Key tech districts include the CBD (Raffles Place) for fintech, one-north/Fusionopolis for R&D and startups, Changi Business Park for tech operations, Science Park for deep tech, and Block71/BASH for the startup ecosystem. Each hub has its own specialization and talent pool.' },
                  { q: 'Is it cheaper to hire remote developers from Singapore vs locally?', a: 'Remote developers through platforms like HireDeveloper.sg can save 30-58% compared to traditional agency hiring due to lower overhead, no office costs, and access to a wider talent pool. You also avoid the 15-25% agency placement fees charged by traditional recruiters.' },
                ].map((faq, i) => (
                  <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors">
                      <span className="text-base font-semibold text-gray-900 pr-4">{faq.q}</span>
                      <span className="flex-shrink-0 text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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

      <HiringProcessFlowchart industry={`your ${data.name} project`} />

      <FinalCTA
        heading={`Find Top Developers in ${data.name}!`}
        subheading="Start risk-free. Access pre-vetted programmers."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
