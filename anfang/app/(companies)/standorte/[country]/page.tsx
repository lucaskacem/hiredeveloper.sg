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
    title: `Remote-Entwickler in ${data.name} einstellen | Programmier-Anfang`,
    description: data.metaDescription,
    robots: { index: false, follow: false },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = getCountryBySlug(country);
  if (!data) notFound();

  const topCities = getTopCitiesForCountry(country, 10);

  // Find the region for each top city so we can build the full path
  const topCitiesWithRegion = topCities.map((city) => {
    const region = data.regions.find((r) =>
      r.cities.some((c) => c.slug === city.slug),
    );
    return { ...city, regionSlug: region?.slug ?? '' };
  });

  // Other countries for "Weitere Standorte"
  const otherCountries = countries.filter((c) => c.slug !== country);

  // Country-specific content
  const countryContent: Record<string, { intro: string; highlights: { title: string; text: string }[]; specLinks: { label: string; href: string }[] }> = {
    deutschland: {
      intro: `Deutschland ist Europas grösste Volkswirtschaft und ein Zentrum für Technologie und Innovation. Mit renommierten Universitäten, einer lebhaften Startup-Szene in Berlin und etablierten Technologiezentren in München, Hamburg und Frankfurt bietet das Land einen aussergewöhnlich tiefen Pool an qualifizierten Entwicklern. Deutsche Programmierer zeichnen sich durch gründliche Arbeitsweise, starke Ingenieurtradition und hohe Zuverlässigkeit aus.`,
      highlights: [
        { title: 'Starke Tech-Hubs', text: 'Berlin, München, Hamburg und Frankfurt zählen zu den wichtigsten IT-Standorten Europas. Jede Stadt hat ihr eigenes Ökosystem — von Berliner Startups über Münchner Konzernwelt bis hin zu Hamburger E-Commerce-Unternehmen.' },
        { title: 'Exzellente Ausbildung', text: 'Das duale Bildungssystem und renommierte Hochschulen wie TU München, RWTH Aachen und KIT Karlsruhe bringen jährlich tausende gut ausgebildete Informatiker hervor.' },
        { title: 'DSGVO-Kompetenz', text: 'Deutsche Entwickler sind mit den strengen europäischen Datenschutzanforderungen bestens vertraut und implementieren Privacy-by-Design als Selbstverständlichkeit.' },
      ],
      specLinks: [
        { label: 'JavaScript-Entwickler', href: '/hire-developers/javascript' },
        { label: 'Python-Entwickler', href: '/hire-developers/python' },
        { label: 'Java-Entwickler', href: '/hire-developers/java' },
        { label: 'React-Entwickler', href: '/hire-developers/reactjs' },
        { label: 'DevOps-Ingenieure', href: '/hire-developers/devops' },
        { label: 'KI-Entwickler', href: '/hire-developers/ai' },
        { label: 'Full-Stack-Entwickler', href: '/hire-developers/full-stack' },
        { label: 'C#-Entwickler', href: '/hire-developers/csharp' },
      ],
    },
    oesterreich: {
      intro: `Österreich verbindet eine starke industrielle Tradition mit einer wachsenden digitalen Wirtschaft. Wien, Graz und Linz haben sich als bedeutende Tech-Standorte etabliert, mit einer wachsenden Zahl erfolgreicher Tech-Unternehmen und Startups. Österreichische Entwickler bringen typischerweise eine Kombination aus technischer Exzellenz, Mehrsprachigkeit und mitteleuropäischer Arbeitsmoral mit.`,
      highlights: [
        { title: 'Innovationsstandort Wien', text: 'Die Hauptstadt Wien ist ein Magnet für Tech-Talente mit einer wachsenden Startup-Szene, mehreren Universitäten und einer hohen Lebensqualität, die internationale Fachkräfte anzieht.' },
        { title: 'Industrienahe IT', text: 'Graz und Linz sind Heimat zahlreicher Industrieunternehmen, die stark auf Digitalisierung setzen. Entwickler aus diesen Regionen haben oft wertvolle Erfahrung an der Schnittstelle von IT und Fertigung.' },
        { title: 'EU-Markt-Expertise', text: 'Österreichische Entwickler verstehen den europäischen Markt und sind mit den regulatorischen Anforderungen der EU bestens vertraut, von DSGVO bis hin zu branchenspezifischen Compliance-Standards.' },
      ],
      specLinks: [
        { label: 'Python-Entwickler', href: '/hire-developers/python' },
        { label: 'TypeScript-Entwickler', href: '/hire-developers/typescript' },
        { label: 'React-Entwickler', href: '/hire-developers/reactjs' },
        { label: 'Node.js-Entwickler', href: '/hire-developers/nodejs' },
        { label: 'AWS-Entwickler', href: '/hire-developers/aws' },
        { label: '.NET-Entwickler', href: '/hire-developers/dotnet' },
        { label: 'Machine-Learning-Entwickler', href: '/hire-developers/machine-learning' },
        { label: 'Mobile-App-Entwickler', href: '/hire-developers/mobile-app-development' },
      ],
    },
    schweiz: {
      intro: `Die Schweiz gilt als einer der wettbewerbsfähigsten Technologiestandorte der Welt. Mit der ETH Zürich als führender technischer Universität, einem florierenden FinTech-Ökosystem und dem Crypto Valley in Zug zieht das Land erstklassige Entwickler an. Schweizer Programmierer sind bekannt für höchste Qualitätsansprüche, Präzision und oft ausgezeichnete Mehrsprachigkeit in Deutsch, Französisch und Englisch.`,
      highlights: [
        { title: 'Weltklasse-Forschung', text: 'Die ETH Zürich und die EPFL Lausanne gehören zu den besten technischen Hochschulen weltweit. Viele Absolventen bleiben in der Schweiz und bringen Spitzenforschung in die Praxis.' },
        { title: 'FinTech und Blockchain', text: 'Zürich und Zug sind Zentren für FinTech und Blockchain-Technologie. Entwickler aus diesen Regionen haben oft tiefe Expertise in Finanzsoftware, Kryptowährungen und regulierter Softwareentwicklung.' },
        { title: 'Mehrsprachigkeit', text: 'In der Schweiz arbeiten Entwickler routinemässig in mehreren Sprachen — ein Vorteil für Unternehmen, die international tätig sind oder mehrsprachige Produkte entwickeln.' },
      ],
      specLinks: [
        { label: 'Blockchain-Entwickler', href: '/hire-developers/blockchain' },
        { label: 'FinTech-Entwickler', href: '/hire-developers/fintech' },
        { label: 'Python-Entwickler', href: '/hire-developers/python' },
        { label: 'Java-Entwickler', href: '/hire-developers/java' },
        { label: 'Cloud-Entwickler', href: '/hire-developers/cloud' },
        { label: 'Data Scientists', href: '/hire-developers/data-science' },
        { label: 'Security-Entwickler', href: '/hire-developers/security' },
        { label: 'Golang-Entwickler', href: '/hire-developers/golang' },
      ],
    },
  };

  const content = countryContent[country] || {
    intro: `${data.name} bietet einen wachsenden Pool qualifizierter Entwickler. Über Programmier-Anfang finden Sie vorgeprüfte Programmierer, die den lokalen Markt verstehen und sich nahtlos in Ihr Team integrieren.`,
    highlights: [
      { title: 'Lokale Expertise', text: `Entwickler aus ${data.name} verstehen die lokalen Geschäftsprozesse und Branchenstandards und bringen wertvolles regionales Wissen in Ihre Projekte ein.` },
      { title: 'Qualifizierte Talente', text: `${data.name} verfügt über gut ausgebildete Fachkräfte im IT-Bereich, die in verschiedenen Technologien und Frameworks versiert sind.` },
      { title: 'Kulturelle Nähe', text: `Deutschsprachige Entwickler aus ${data.name} integrieren sich nahtlos in Ihr Team und sorgen für reibungslose Kommunikation und effiziente Zusammenarbeit.` },
    ],
    specLinks: [
      { label: 'JavaScript-Entwickler', href: '/hire-developers/javascript' },
      { label: 'Python-Entwickler', href: '/hire-developers/python' },
      { label: 'React-Entwickler', href: '/hire-developers/reactjs' },
      { label: 'Node.js-Entwickler', href: '/hire-developers/nodejs' },
      { label: 'TypeScript-Entwickler', href: '/hire-developers/typescript' },
      { label: 'Java-Entwickler', href: '/hire-developers/java' },
      { label: 'PHP-Entwickler', href: '/hire-developers/php' },
      { label: 'AWS-Entwickler', href: '/hire-developers/aws' },
    ],
  };

  const countryCodes: Record<string, string> = { deutschland: 'DE', oesterreich: 'AT', schweiz: 'CH', liechtenstein: 'LI', luxemburg: 'LU' };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Remote-Entwickler in ${data.name} einstellen`,
    description: data.metaDescription,
    url: `https://programmier-anfang.de/standorte/${country}`,
    about: {
      '@type': 'Country',
      name: data.name,
      identifier: countryCodes[country] || country.toUpperCase(),
    },
    provider: {
      '@type': 'Organization',
      name: 'Programmier-Anfang',
      url: 'https://programmier-anfang.de',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://programmier-anfang.de/' },
        { '@type': 'ListItem', position: 2, name: 'Standorte', item: 'https://programmier-anfang.de/standorte' },
        { '@type': 'ListItem', position: 3, name: data.name, item: `https://programmier-anfang.de/standorte/${country}` },
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
          { label: 'Startseite', href: '/' },
          { label: 'Standorte', href: '/standorte' },
          { label: data.name, href: `/standorte/${country}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Remote-Entwickler in {data.name} einstellen
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
              Warum Entwickler in {data.name} einstellen?
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

      {/* Regions grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {data.regions.length} Regionen in {data.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.regions.map((region) => (
              <Link
                key={region.slug}
                href={`/standorte/${country}/${region.slug}`}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {region.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {region.cities.length}{' '}
                  {region.cities.length === 1 ? 'Stadt' : 'Städte'}
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
            Top-Städte in {data.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {topCitiesWithRegion.map((city) => (
              <Link
                key={city.slug}
                href={`/standorte/${country}/${city.regionSlug}/${city.slug}`}
                className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {city.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {city.population.toLocaleString('de-DE')} Einwohner
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        title={`Gefragte Entwickler in ${data.name}`}
        links={content.specLinks}
      />

      <RelatedLinks
        title="Weitere Standorte"
        links={otherCountries.map((c) => ({
          label: `Entwickler in ${c.name}`,
          href: `/standorte/${c.slug}`,
        }))}
      />

      <FinalCTA
        heading={`Finden Sie Top-Entwickler in ${data.name}!`}
        subheading="Risikofrei starten. Zugang zu vorgeprüften Programmierern."
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
