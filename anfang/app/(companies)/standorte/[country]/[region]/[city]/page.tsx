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
    title: `Remote-Entwickler in ${data.city.name} einstellen | Programmier-Anfang`,
    description: `Finden und engagieren Sie die besten Remote-Entwickler in ${data.city.name}, ${data.region.name}. Zugang zu gepr\u00fcften Programmierern mit lokalem Fachwissen aus einer Stadt mit ${data.city.population.toLocaleString('de-DE')} Einwohnern.`,
    robots: { index: false, follow: false },
  };
}

const developerSpecializations = [
  { label: 'JavaScript-Entwickler', slug: 'javascript' },
  { label: 'TypeScript-Entwickler', slug: 'typescript' },
  { label: 'React-Entwickler', slug: 'reactjs' },
  { label: 'Python-Entwickler', slug: 'python' },
  { label: 'Java-Entwickler', slug: 'java' },
  { label: 'PHP-Entwickler', slug: 'php' },
  { label: 'Ruby-Entwickler', slug: 'ruby' },
  { label: 'Go-Entwickler', slug: 'golang' },
  { label: 'Swift-Entwickler', slug: 'swift' },
  { label: 'Kotlin-Entwickler', slug: 'kotlin' },
  { label: 'C#-Entwickler', slug: 'csharp' },
  { label: 'Rust-Entwickler', slug: 'rust' },
];

const allDeveloperLinkDefs = [
  { label: 'JavaScript-Entwickler', slug: 'javascript' },
  { label: 'Python-Entwickler', slug: 'python' },
  { label: 'React-Entwickler', slug: 'reactjs' },
  { label: 'TypeScript-Entwickler', slug: 'typescript' },
  { label: 'Java-Entwickler', slug: 'java' },
  { label: 'PHP-Entwickler', slug: 'php' },
  { label: 'Go-Entwickler', slug: 'golang' },
  { label: 'Ruby-Entwickler', slug: 'ruby' },
  { label: 'C#-Entwickler', slug: 'csharp' },
  { label: 'Full-Stack-Entwickler', slug: 'full-stack' },
  { label: 'DevOps-Ingenieure', slug: 'devops' },
  { label: 'Node.js-Entwickler', slug: 'nodejs' },
  { label: 'AWS-Entwickler', slug: 'aws' },
  { label: 'KI-Entwickler', slug: 'ai' },
  { label: 'Mobile-App-Entwickler', slug: 'mobile-app-development' },
  { label: 'Data Scientists', slug: 'data-science' },
];

export default async function CityPage({ params }: Props) {
  const { country, region, city } = await params;
  const data = getCityData(country, region, city);
  if (!data) notFound();

  const nearbyRegions = getNearbyRegions(country, region, 5);

  const siblingCities = data.region.cities
    .filter((c) => c.slug !== data.city.slug)
    .map((c) => ({
      label: c.name,
      href: `/standorte/${data.country.slug}/${data.region.slug}/${c.slug}`,
    }));

  const nearbyRegionLinks = nearbyRegions.map((r) => ({
    label: r.name,
    href: `/standorte/${data.country.slug}/${r.slug}`,
  }));

  const populationFormatted = data.city.population.toLocaleString('de-DE');
  const pop = data.city.population;

  // City-size-dependent content
  const isLargeCity = pop > 500000;
  const isMediumCity = pop > 100000 && pop <= 500000;

  const heroText = isLargeCity
    ? `${data.city.name} zählt mit ${populationFormatted} Einwohnern zu den grössten Städten in ${data.country.name} und verfügt über ein ausgeprägtes Tech-Ökosystem. Hier finden Sie erstklassige Remote-Entwickler mit Erfahrung in diversen Branchen und Technologien.`
    : isMediumCity
    ? `${data.city.name} ist mit ${populationFormatted} Einwohnern ein wichtiger Wirtschaftsstandort in ${data.region.name}, ${data.country.name}. Die Stadt bietet einen wachsenden Pool an qualifizierten Remote-Entwicklern, die lokale Marktkenntnisse mit modernen Technologien verbinden.`
    : `${data.city.name} in ${data.region.name} bietet trotz seiner Grösse von ${populationFormatted} Einwohnern Zugang zu talentierten Remote-Entwicklern, die den lokalen Markt in ${data.country.name} kennen und in Ihrer Zeitzone arbeiten.`;

  const whyCards = isLargeCity
    ? [
        {
          title: 'Vielfältiges Tech-Ökosystem',
          text: `Als Grossstadt beheimatet ${data.city.name} zahlreiche Tech-Unternehmen, Startups und Forschungseinrichtungen. Entwickler profitieren von diesem Umfeld und bringen branchenübergreifendes Wissen in Ihre Projekte ein.`,
        },
        {
          title: 'Breites Kompetenzspektrum',
          text: `Der grosse Talentpool in ${data.city.name} ermöglicht es, Spezialisten für nahezu jede Technologie zu finden — von Frontend und Backend über Mobile bis hin zu KI und DevOps.`,
        },
        {
          title: 'Internationale Erfahrung',
          text: `In einer Metropole wie ${data.city.name} arbeiten viele Entwickler in internationalen Teams und bringen Erfahrung mit globalen Projekten, agilen Methoden und englischsprachiger Kommunikation mit.`,
        },
      ]
    : isMediumCity
    ? [
        {
          title: 'Regionale Stärke',
          text: `${data.city.name} ist ein Wirtschaftszentrum in ${data.region.name} mit einer wachsenden IT-Branche. Entwickler hier verbinden technische Kompetenz mit einem Verständnis für die regionale Wirtschaft.`,
        },
        {
          title: 'Engagierte Fachkräfte',
          text: `Mittelgrosse Städte wie ${data.city.name} bieten oft besonders engagierte Entwickler, die langfristige Partnerschaften schätzen und sich tief in Projekte einarbeiten.`,
        },
        {
          title: 'Gutes Preis-Leistungs-Verhältnis',
          text: `Im Vergleich zu den grossen Metropolen bieten Entwickler in ${data.city.name} oft ein attraktiveres Preis-Leistungs-Verhältnis bei gleichbleibend hoher Qualität.`,
        },
      ]
    : [
        {
          title: 'Persönliche Zusammenarbeit',
          text: `In einer Stadt wie ${data.city.name} pflegen Entwickler oft engere professionelle Netzwerke. Das sorgt für verlässliche Zusammenarbeit und eine persönliche Betreuung Ihres Projekts.`,
        },
        {
          title: 'Fokus und Zuverlässigkeit',
          text: `Entwickler aus kleineren Städten wie ${data.city.name} zeichnen sich häufig durch besondere Zuverlässigkeit und Fokussierung aus — weniger Ablenkung, mehr Produktivität.`,
        },
        {
          title: 'Gleiche Zeitzone, gleiche Sprache',
          text: `${data.city.name} liegt in der Zeitzone UTC+1, und die Entwickler sprechen fliessend Deutsch. Das ermöglicht reibungslose Abstimmungen und eine effiziente Zusammenarbeit ohne Sprachbarrieren.`,
        },
      ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EmploymentAgency',
            name: `Programmier-Anfang ${data.city.name}`,
            description: `Remote-Entwickler in ${data.city.name} einstellen. ${data.city.description}`,
            url: `https://programmier-anfang.de/standorte/${data.country.slug}/${data.region.slug}/${data.city.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: data.city.name,
              addressRegion: data.region.name,
              addressCountry: data.country.slug === 'deutschland' ? 'DE' : data.country.slug === 'oesterreich' ? 'AT' : data.country.slug === 'schweiz' ? 'CH' : data.country.slug === 'liechtenstein' ? 'LI' : 'LU',
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
                name: `Wie finde ich Remote-Entwickler in ${data.city.name}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Mit Programmier-Anfang können Sie in wenigen Minuten auf geprüfte Remote-Entwickler in ${data.city.name} zugreifen. Unsere Plattform bietet Zugang zu den Top 2% der Talente.`,
                },
              },
              {
                '@type': 'Question',
                name: `Was kostet es, einen Entwickler in ${data.city.name} einzustellen?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Freelance-Entwickler in ${data.city.name} kosten typischerweise zwischen 60-150€ pro Stunde. Über Programmier-Anfang können Sie bis zu 58% sparen.`,
                },
              },
              {
                '@type': 'Question',
                name: `Welche Programmiersprachen sind in ${data.city.name} am gefragtesten?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `In ${data.city.name} sind besonders JavaScript, TypeScript, Python, Java und React gefragt.`,
                },
              },
            ],
          }),
        }}
      />
      <Header />

      <Breadcrumb
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Standorte', href: '/standorte' },
          { label: data.country.name, href: `/standorte/${data.country.slug}` },
          { label: data.region.name, href: `/standorte/${data.country.slug}/${data.region.slug}` },
          { label: data.city.name, href: `/standorte/${data.country.slug}/${data.region.slug}/${data.city.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Remote-Entwickler in {data.city.name} einstellen
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            {heroText}
          </p>
          <OpenModalButton
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
          >
            Talente einstellen
          </OpenModalButton>
        </div>
      </section>

      {/* City Overview */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Über {data.city.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {data.city.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {data.city.name} hat eine Bevölkerung von {populationFormatted} Einwohnern und gehört zu {data.region.name}, {data.country.name}. Die Stadt ist ein wichtiger Standort für die IT-Branche und bietet exzellenten Zugang zu qualifizierten Remote-Entwicklern.
              </p>
              <a
                href={data.city.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(0,159,255)] hover:underline font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.407 0 .07.019.151.056.242l4.326 9.684c.068-.143 1.813-3.773 2.444-5.051.492-1.002.939-2.072.939-2.706 0-.467-.311-.683-.933-.641l-.437.03c-.152.009-.228-.057-.228-.197V6.45l.051-.045s3.564-.011 4.379-.011l.054.045v.437c0 .135-.073.2-.219.2l-.488.03c-.601.044-.893.335-.893.876 0 .478.327 1.282.784 2.142l2.501 4.901 2.091-4.418c.368-.778.601-1.513.601-2.023 0-.59-.345-.883-1.039-.883h-.291c-.152 0-.228-.064-.228-.197v-.437l.05-.045h4.321l.052.045v.455c0 .082-.104.132-.312.148-.587.035-.979.142-1.178.32-.202.179-.461.635-.773 1.357L14.26 18.864c-.321.653-.674.961-1.058.961-.393 0-.695-.264-1.112-.961z"/>
                </svg>
                Mehr über {data.city.name} auf Wikipedia
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
                title={`Karte von ${data.city.name}`}
              />
              <div className="bg-white px-4 py-2 text-xs text-gray-500">
                <a href={`https://www.openstreetmap.org/?mlat=${data.city.lat}&mlon=${data.city.lng}#map=13/${data.city.lat}/${data.city.lng}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Größere Karte anzeigen
                </a>
                {' | '}
                © OpenStreetMap-Mitwirkende
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Warum Entwickler in {data.city.name} einstellen?
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

      {/* Developer Specializations */}
      <section id="talente" className="bg-white py-12">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Verfügbare Entwickler-Spezialisierungen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {developerSpecializations.map((spec) => (
              <a
                key={spec.slug}
                href={`/hire-developers/${spec.slug}/${data.city.slug}`}
                className="flex items-center justify-center px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md transition-all border border-gray-200"
              >
                {spec.label} in {data.city.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links: Sibling Cities */}
      {siblingCities.length > 0 && (
        <RelatedLinks
          title={`Weitere St\u00e4dte in ${data.region.name}`}
          links={siblingCities}
        />
      )}

      {/* Related Links: Developer Types — varied per city */}
      <RelatedLinks
        title={`Entwickler in ${data.city.name}`}
        links={(() => {
          let h = 0;
          for (let i = 0; i < data.city.name.length; i++) {
            h = ((h << 5) - h + data.city.name.charCodeAt(i)) | 0;
          }
          h = Math.abs(h);
          return Array.from({ length: 8 }, (_, i) => {
            const def = allDeveloperLinkDefs[(h + i) % allDeveloperLinkDefs.length];
            return {
              label: `${def.label} in ${data.city.name}`,
              href: `/hire-developers/${def.slug}/${data.city.slug}`,
            };
          });
        })()}
      />

      {/* Related Links: Nearby Regions */}
      {nearbyRegionLinks.length > 0 && (
        <RelatedLinks
          title="Benachbarte Regionen"
          links={nearbyRegionLinks}
        />
      )}

      {/* City FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Häufig gestellte Fragen: Entwickler in {data.city.name}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: `Wie finde ich Remote-Entwickler in ${data.city.name}?`,
                a: `Mit Programmier-Anfang können Sie in wenigen Minuten auf geprüfte Remote-Entwickler in ${data.city.name} zugreifen. Unsere Plattform bietet Zugang zu den Top 2% der Talente, die vollständig auf technische Fähigkeiten und Kommunikation geprüft wurden.`
              },
              {
                q: `Was kostet es, einen Entwickler in ${data.city.name} einzustellen?`,
                a: `Die Kosten variieren je nach Erfahrungsniveau und Technologie. Freelance-Entwickler in ${data.city.name} kosten typischerweise zwischen 60-150€ pro Stunde. Über Programmier-Anfang können Sie bis zu 58% im Vergleich zu traditionellen Einstellungsmethoden sparen.`
              },
              {
                q: `Welche Programmiersprachen sind in ${data.city.name} am gefragtesten?`,
                a: `In ${data.city.name} sind besonders JavaScript, TypeScript, Python, Java und React gefragt. Die Stadt hat eine starke Community für Web- und Mobile-Entwicklung sowie wachsendes Interesse an KI und Machine Learning.`
              },
              {
                q: `Wie schnell kann ich einen Entwickler in ${data.city.name} einstellen?`,
                a: `Mit Programmier-Anfang können Sie innerhalb von 72 Stunden einen qualifizierten Freelance-Entwickler aus ${data.city.name} engagieren. Für Vollzeiteinstellungen rechnen Sie mit etwa 14 Tagen.`
              },
              {
                q: `Warum Remote-Entwickler aus ${data.city.name} wählen?`,
                a: `${data.city.name} in ${data.region.name} bietet Zugang zu hochqualifizierten Entwicklern in der Zeitzone UTC+1. Die Entwickler sprechen fließend Deutsch und haben oft internationale Projekterfahrung.`
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
        heading={`Finden Sie Top-Entwickler in ${data.city.name}!`}
        subheading={`Starten Sie jetzt und engagieren Sie die besten Remote-Entwickler aus ${data.city.name}, ${data.region.name}.`}
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
