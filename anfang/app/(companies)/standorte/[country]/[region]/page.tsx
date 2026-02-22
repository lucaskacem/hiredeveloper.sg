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
  return {
    title: `Remote-Entwickler in ${data.region.name}, ${data.country.name} einstellen | Programmier-Anfang`,
    description: `Finden und engagieren Sie erfahrene Remote-Entwickler in ${data.region.name}, ${data.country.name}. Zugang zu vorgeprüften Programmierern in ${data.region.cities.length} Städten.`,
    robots: { index: false, follow: false },
  };
}

export default async function RegionPage({ params }: Props) {
  const { country, region } = await params;
  const data = getRegionByPath(country, region);
  if (!data) notFound();

  const nearbyRegions = getNearbyRegions(country, region, 8);

  // Compute total population for the region
  const totalPopulation = data.region.cities.reduce((sum, c) => sum + c.population, 0);
  const largestCity = data.region.cities.reduce((max, c) => c.population > max.population ? c : max, data.region.cities[0]);

  // Deterministic index based on region name for varied dev links
  let rHash = 0;
  for (let i = 0; i < data.region.name.length; i++) {
    rHash = ((rHash << 5) - rHash + data.region.name.charCodeAt(i)) | 0;
  }
  rHash = Math.abs(rHash);

  const allDevLinks = [
    { label: 'JavaScript-Entwickler', href: '/hire-developers/javascript' },
    { label: 'Python-Entwickler', href: '/hire-developers/python' },
    { label: 'React-Entwickler', href: '/hire-developers/reactjs' },
    { label: 'Node.js-Entwickler', href: '/hire-developers/nodejs' },
    { label: 'TypeScript-Entwickler', href: '/hire-developers/typescript' },
    { label: 'Java-Entwickler', href: '/hire-developers/java' },
    { label: 'Full-Stack-Entwickler', href: '/hire-developers/full-stack' },
    { label: 'DevOps-Ingenieure', href: '/hire-developers/devops' },
    { label: 'PHP-Entwickler', href: '/hire-developers/php' },
    { label: 'C#-Entwickler', href: '/hire-developers/csharp' },
    { label: 'AWS-Entwickler', href: '/hire-developers/aws' },
    { label: 'Mobile-App-Entwickler', href: '/hire-developers/mobile-app-development' },
    { label: 'KI-Entwickler', href: '/hire-developers/ai' },
    { label: 'Data Scientists', href: '/hire-developers/data-science' },
    { label: 'Backend-Entwickler', href: '/hire-developers/back-end' },
    { label: 'Frontend-Entwickler', href: '/hire-developers/front-end' },
  ];
  // Select 8 links starting from a hash-determined offset
  const devLinks = Array.from({ length: 8 }, (_, i) => allDevLinks[(rHash + i) % allDevLinks.length]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Remote-Entwickler in ${data.region.name}, ${data.country.name}`,
    description: `Finden und engagieren Sie erfahrene Remote-Entwickler in ${data.region.name}, ${data.country.name}. ${data.region.cities.length} Städte verfügbar.`,
    url: `https://programmier-anfang.de/standorte/${country}/${region}`,
    about: {
      '@type': 'AdministrativeArea',
      name: data.region.name,
      containedInPlace: { '@type': 'Country', name: data.country.name },
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
        { '@type': 'ListItem', position: 3, name: data.country.name, item: `https://programmier-anfang.de/standorte/${country}` },
        { '@type': 'ListItem', position: 4, name: data.region.name, item: `https://programmier-anfang.de/standorte/${country}/${region}` },
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
          { label: data.country.name, href: `/standorte/${country}` },
          {
            label: data.region.name,
            href: `/standorte/${country}/${region}`,
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-12">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">
            {data.country.name}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Remote-Entwickler in {data.region.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {data.region.name} in {data.country.name} bietet mit rund{' '}
            {totalPopulation.toLocaleString('de-DE')} Einwohnern in{' '}
            {data.region.cities.length}{' '}
            {data.region.cities.length === 1 ? 'Stadt' : 'Städten'} einen
            vielfältigen Talentpool. Finden Sie hier vorgeprüfte
            Remote-Entwickler, die sofort einsatzbereit sind.
          </p>
        </div>
      </section>

      {/* Region description */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              IT-Talente in {data.region.name}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Region {data.region.name} ist Teil von {data.country.name} und
              umfasst {data.region.cities.length}{' '}
              {data.region.cities.length === 1 ? 'Stadt' : 'Städte'}, darunter{' '}
              {largestCity.name} mit {largestCity.population.toLocaleString('de-DE')}{' '}
              Einwohnern als grösste Stadt. Entwickler aus {data.region.name}{' '}
              bringen Vertrautheit mit lokalen Geschäftsprozessen und Branchen
              mit und arbeiten in der gleichen Zeitzone wie der Rest des
              DACH-Raums.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Über Programmier-Anfang erhalten Sie Zugang zu vorgeprüften
              Programmierern in {data.region.name}, die Erfahrung mit modernen
              Technologien, agilen Methoden und Remote-Zusammenarbeit mitbringen.
              Unser Auswahlverfahren stellt sicher, dass nur die qualifiziertesten
              Kandidaten zu Ihnen gelangen.
            </p>
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Städte in {data.region.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.region.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/standorte/${country}/${region}/${city.slug}`}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {city.population.toLocaleString('de-DE')} Einwohner
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        title={`Entwickler in ${data.region.name}`}
        links={devLinks}
      />

      {nearbyRegions.length > 0 && (
        <RelatedLinks
          title={`Weitere Regionen in ${data.country.name}`}
          links={nearbyRegions.map((r) => ({
            label: r.name,
            href: `/standorte/${country}/${r.slug}`,
          }))}
        />
      )}

      <FinalCTA
        heading={`Finden Sie Top-Entwickler in ${data.region.name}!`}
        subheading={`Starten Sie jetzt und engagieren Sie vorgeprüfte Remote-Entwickler aus ${data.region.name}, ${data.country.name}.`}
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
