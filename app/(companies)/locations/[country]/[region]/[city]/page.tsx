import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../../../components/Breadcrumb';
import RelatedLinks from '../../../../components/RelatedLinks';
import FinalCTA from '../../../../components/FinalCTA';
import OpenModalButton from '../../../../components/OpenModalButton';
import {
  getAllCityPaths,
  getCityByPath,
  getCityData,
  getNearbyRegions,
} from '@/app/data/locations';

interface Props {
  params: Promise<{ country: string; region: string; city: string }>;
}

export async function generateStaticParams() {
  return getAllCityPaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, region, city } = await params;
  const data = getCityByPath(country, region, city);
  if (!data) return {};

  return {
    title: `Hire Remote Developers in ${data.city.name} | HireDeveloper.ae`,
    description: `Find and hire the best remote developers in ${data.city.name}, ${data.region.name}. Access vetted programmers with local expertise from a city of ${data.city.population.toLocaleString('en-US')} residents.`,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.ae/locations/${country}/${region}/${city}`,
    },
  };
}

const developerSpecializations = [
  { label: 'JavaScript Developer', slug: 'javascript' },
  { label: 'TypeScript Developer', slug: 'typescript' },
  { label: 'React Developer', slug: 'reactjs' },
  { label: 'Python Developer', slug: 'python' },
  { label: 'Java Developer', slug: 'java' },
  { label: 'PHP Developer', slug: 'php' },
  { label: 'Node.js Developer', slug: 'nodejs' },
  { label: 'Go Developer', slug: 'golang' },
  { label: 'Swift Developer', slug: 'swift' },
  { label: 'Kotlin Developer', slug: 'kotlin' },
  { label: 'C# Developer', slug: 'csharp' },
  { label: 'AI Developer', slug: 'ai' },
];

const allDeveloperLinkDefs = [
  { label: 'JavaScript Developer', slug: 'javascript' },
  { label: 'Python Developer', slug: 'python' },
  { label: 'React Developer', slug: 'reactjs' },
  { label: 'TypeScript Developer', slug: 'typescript' },
  { label: 'Java Developer', slug: 'java' },
  { label: 'PHP Developer', slug: 'php' },
  { label: 'Go Developer', slug: 'golang' },
  { label: 'Ruby Developer', slug: 'ruby' },
  { label: 'C# Developer', slug: 'csharp' },
  { label: 'Full-Stack Developer', slug: 'full-stack' },
  { label: 'DevOps Engineer', slug: 'devops' },
  { label: 'Node.js Developer', slug: 'nodejs' },
  { label: 'AWS Developer', slug: 'aws' },
  { label: 'AI Developer', slug: 'ai' },
  { label: 'Mobile App Developer', slug: 'mobile-app-development' },
  { label: 'Data Scientist', slug: 'data-science' },
];

export default async function CityPage({ params }: Props) {
  const { country, region, city } = await params;
  const data = getCityData(country, region, city);
  if (!data) notFound();

  const nearbyRegions = getNearbyRegions(country, region, 5);

  const siblingCities = data.region.cities
    .filter((c) => c.slug !== data.city.slug)
    .map((c) => ({
      label: `Hire Developers in ${c.name}`,
      href: `/locations/${data.country.slug}/${data.region.slug}/${c.slug}`,
    }));

  const nearbyRegionLinks = nearbyRegions.map((r) => ({
    label: `Developers in ${r.name}`,
    href: `/locations/${data.country.slug}/${r.slug}`,
  }));

  const populationFormatted = data.city.population.toLocaleString('en-US');
  const pop = data.city.population;

  const isLargeCity = pop > 500000;
  const isMediumCity = pop > 100000 && pop <= 500000;

  const heroText = isLargeCity
    ? `${data.city.name} is one of the largest cities in ${data.country.name} with ${populationFormatted} residents and a thriving tech ecosystem. Find top-tier remote developers with experience across diverse industries and technologies.`
    : isMediumCity
    ? `${data.city.name} is an important business hub in ${data.region.name}, ${data.country.name} with ${populationFormatted} residents. The city offers a growing pool of qualified remote developers who combine local market knowledge with modern technologies.`
    : `${data.city.name} in ${data.region.name} provides access to talented remote developers who understand the local market in ${data.country.name} and work in your timezone.`;

  const whyCards = isLargeCity
    ? [
        {
          title: 'Diverse Tech Ecosystem',
          text: `As a major city, ${data.city.name} is home to numerous tech companies, startups, and free zones. Developers benefit from this environment and bring cross-industry knowledge to your projects.`,
        },
        {
          title: 'Broad Skill Spectrum',
          text: `The large talent pool in ${data.city.name} makes it possible to find specialists for virtually any technology — from frontend and backend to mobile, AI, and DevOps.`,
        },
        {
          title: 'International Experience',
          text: `In a metropolis like ${data.city.name}, many developers work in international teams and bring experience with global projects, agile methodologies, and English-speaking communication.`,
        },
      ]
    : isMediumCity
    ? [
        {
          title: 'Regional Strength',
          text: `${data.city.name} is a business center in ${data.region.name} with a growing IT sector. Developers here combine technical competence with an understanding of the regional economy.`,
        },
        {
          title: 'Dedicated Professionals',
          text: `Mid-sized cities like ${data.city.name} often offer particularly dedicated developers who value long-term partnerships and immerse themselves deeply in projects.`,
        },
        {
          title: 'Excellent Value',
          text: `Compared to major metropolitan areas, developers in ${data.city.name} often offer more competitive rates while maintaining consistently high quality.`,
        },
      ]
    : [
        {
          title: 'Close Collaboration',
          text: `In a city like ${data.city.name}, developers often maintain close professional networks, ensuring reliable collaboration and personal attention to your project.`,
        },
        {
          title: 'Focus and Reliability',
          text: `Developers from smaller cities like ${data.city.name} are often distinguished by exceptional reliability and focus — fewer distractions, more productivity.`,
        },
        {
          title: 'Same Timezone',
          text: `${data.city.name} is in the UTC+4 timezone, making real-time collaboration seamless. Developers here are experienced with international teams and English communication.`,
        },
      ];

  const countryCodeMap: Record<string, string> = {
    uae: 'AE',
    'saudi-arabia': 'SA',
    qatar: 'QA',
    bahrain: 'BH',
    oman: 'OM',
    kuwait: 'KW',
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EmploymentAgency',
            name: `HireDeveloper.ae ${data.city.name}`,
            description: `Hire remote developers in ${data.city.name}. ${data.city.description}`,
            url: `https://hiredeveloper.ae/locations/${data.country.slug}/${data.region.slug}/${data.city.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: data.city.name,
              addressRegion: data.region.name,
              addressCountry: countryCodeMap[data.country.slug] || 'AE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: data.city.lat,
              longitude: data.city.lng,
            },
            areaServed: {
              '@type': 'City',
              name: data.city.name,
            },
            serviceType: 'IT Recruitment',
            priceRange: '$$',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `How do I find remote developers in ${data.city.name}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `With HireDeveloper.ae you can access vetted remote developers in ${data.city.name} within minutes. Our platform gives you access to the top 2% of talent.`,
                },
              },
              {
                '@type': 'Question',
                name: `How much does it cost to hire a developer in ${data.city.name}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Freelance developers in ${data.city.name} typically cost between $35-$135 per hour depending on experience and technology. Through HireDeveloper.ae you can save up to 58%.`,
                },
              },
              {
                '@type': 'Question',
                name: `Which programming languages are most in demand in ${data.city.name}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `In ${data.city.name}, JavaScript, TypeScript, Python, Java, and React are particularly in demand.`,
                },
              },
            ],
          }),
        }}
      />
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: data.country.name, href: `/locations/${data.country.slug}` },
          { label: data.region.name, href: `/locations/${data.country.slug}/${data.region.slug}` },
          { label: data.city.name, href: `/locations/${data.country.slug}/${data.region.slug}/${data.city.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hire Remote Developers in {data.city.name}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            {heroText}
          </p>
          <OpenModalButton
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
          >
            Hire Talent
          </OpenModalButton>
        </div>
      </section>

      {/* City Overview */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About {data.city.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {data.city.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {data.city.name} has a population of {populationFormatted} and is part of {data.region.name}, {data.country.name}. The city is an important hub for the tech industry and offers excellent access to qualified remote developers.
              </p>
              <a
                href={data.city.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(0,159,255)] hover:underline font-medium"
              >
                Learn more about {data.city.name} on Wikipedia
              </a>
            </div>

            {/* OpenStreetMap */}
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                src={data.mapUrl}
                className="w-full"
                title={`Map of ${data.city.name}`}
              />
              <div className="bg-white px-4 py-2 text-xs text-gray-500">
                <a href={`https://www.openstreetmap.org/?mlat=${data.city.lat}&mlon=${data.city.lng}#map=13/${data.city.lat}/${data.city.lng}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  View Larger Map
                </a>
                {' | '}
                &copy; OpenStreetMap contributors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Why Hire Developers in {data.city.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Zones (if available) */}
      {data.city.freeZones && data.city.freeZones.length > 0 && (
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-[1280px] mx-auto px-12">
            <h2 className="text-2xl font-bold mb-6">
              Free Zones in {data.city.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {data.city.freeZones.map((zone) => (
                <div key={zone.slug} className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h3 className="text-sm font-semibold text-white mb-2">{zone.name}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{zone.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Hubs (if available) */}
      {data.city.techHubs && data.city.techHubs.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-[1280px] mx-auto px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tech Hubs in {data.city.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.city.techHubs.map((hub) => (
                <div key={hub.name} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{hub.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{hub.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Major Employers (if available) */}
      {data.city.majorEmployers && data.city.majorEmployers.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-[1280px] mx-auto px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Major Tech Employers in {data.city.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.city.majorEmployers.map((employer) => (
                <span key={employer} className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 border border-gray-200 font-medium">
                  {employer}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hiring Facts (if available) */}
      {data.city.hiringFacts && data.city.hiringFacts.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-[1280px] mx-auto px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Hiring in {data.city.name}: Key Facts
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.city.hiringFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[rgb(0,159,255)] mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-sm leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Developer Specializations — cross-links to hiring pages */}
      <section id="talent" className="bg-white py-12">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Hire Developers by Specialization in {data.city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {developerSpecializations.map((spec) => (
              <a
                key={spec.slug}
                href={`/hire-developers/${spec.slug}`}
                className="flex items-center justify-center px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md transition-all border border-gray-200"
              >
                {spec.label} in {data.city.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to marketing talent */}
      <RelatedLinks
        title={`Hire Marketers in ${data.city.name}`}
        links={[
          { label: 'SEO Audit Specialist', href: '/hire-marketers/seo-audit' },
          { label: 'Content Strategist', href: '/hire-marketers/content-strategy' },
          { label: 'Paid Ads Expert', href: '/hire-marketers/paid-ads' },
          { label: 'Copywriter', href: '/hire-marketers/copywriting' },
          { label: 'A/B Testing Expert', href: '/hire-marketers/ab-test-setup' },
          { label: 'All Marketing Specializations', href: '/hire-marketers' },
        ]}
      />

      {/* Related Links: Sibling Cities */}
      {siblingCities.length > 0 && (
        <RelatedLinks
          title={`More Cities in ${data.region.name}`}
          links={siblingCities}
        />
      )}

      {/* Related Links: Developer Types */}
      <RelatedLinks
        title={`Popular Developer Specializations`}
        links={(() => {
          let h = 0;
          for (let i = 0; i < data.city.name.length; i++) {
            h = ((h << 5) - h + data.city.name.charCodeAt(i)) | 0;
          }
          h = Math.abs(h);
          return Array.from({ length: 8 }, (_, i) => {
            const def = allDeveloperLinkDefs[(h + i) % allDeveloperLinkDefs.length];
            return {
              label: `Hire ${def.label}s`,
              href: `/hire-developers/${def.slug}`,
            };
          });
        })()}
      />

      {/* Related Links: Nearby Regions */}
      {nearbyRegionLinks.length > 0 && (
        <RelatedLinks
          title="Nearby Regions"
          links={nearbyRegionLinks}
        />
      )}

      {/* Cross-link to tools */}
      <RelatedLinks
        title="Useful Hiring Tools"
        links={[
          { label: 'Developer Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'Technology Comparison', href: '/tools/technology-comparison' },
        ]}
      />

      {/* City FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            FAQ: Hiring Developers in {data.city.name}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: `How do I find remote developers in ${data.city.name}?`,
                a: `With HireDeveloper.ae you can access vetted remote developers in ${data.city.name} within minutes. Our platform gives you access to the top 2% of talent, fully screened for technical skills and communication.`
              },
              {
                q: `How much does it cost to hire a developer in ${data.city.name}?`,
                a: `Costs vary by experience level and technology. Freelance developers in ${data.city.name} typically cost between $35-$135 per hour. Through HireDeveloper.ae you can save up to 58% compared to traditional hiring methods.`
              },
              {
                q: `Which programming languages are most in demand in ${data.city.name}?`,
                a: `In ${data.city.name}, JavaScript, TypeScript, Python, Java, and React are particularly in demand. The city has a strong community for web and mobile development as well as growing interest in AI and Machine Learning.`
              },
              {
                q: `How quickly can I hire a developer in ${data.city.name}?`,
                a: `With HireDeveloper.ae you can engage a qualified freelance developer from ${data.city.name} within 24-48 hours. For full-time hires, expect approximately 14 days.`
              },
              {
                q: `Why choose remote developers from ${data.city.name}?`,
                a: `${data.city.name} in ${data.region.name} offers access to highly qualified developers in the UTC+4 timezone. Developers here often have international project experience and are fluent in English.`
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        heading={`Find Top Developers in ${data.city.name}!`}
        subheading={`Start now and hire the best remote developers from ${data.city.name}, ${data.region.name}.`}
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
