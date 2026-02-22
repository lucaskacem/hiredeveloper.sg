import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import RelatedLinks from '../../../components/RelatedLinks';
import FinalCTA from '../../../components/FinalCTA';
import {
  getSubcategoryBySlug,
  getAllSubcategories,
} from '@/app/data/developer-subcategories';
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
// Top technologies and cities for static generation
// ---------------------------------------------------------------------------

const TOP_TECHNOLOGY_SLUGS = [
  'javascript',
  'typescript',
  'python',
  'java',
  'php',
  'reactjs',
  'nodejs',
  'csharp',
  'golang',
  'ruby',
  'rust',
  'kotlin',
  'swift',
  'full-stack',
  'devops',
  'aws',
  'ai',
  'data-science',
  'nextjs',
  'angular',
  'vuejs',
  'docker',
  'kubernetes',
  'flutter',
  'django',
  'laravel',
  'machine-learning',
  'front-end',
  'back-end',
  'postgresql',
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
  for (const slug of TOP_TECHNOLOGY_SLUGS) {
    const sub = getSubcategoryBySlug(slug);
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const sub = getSubcategoryBySlug(slug);
  const cityCtx = findCityBySlug(citySlug);
  if (!sub || !cityCtx) return {};

  const title = `${sub.name} in ${cityCtx.city.name} einstellen | Programmier-Anfang`;
  const description = `Finden Sie die besten Freelance-${sub.name} in ${cityCtx.city.name}, ${cityCtx.region.name}. Gepr\u00fcfte Experten f\u00fcr ${sub.skills.slice(0, 3).join(', ')} und mehr. Jetzt risikofrei starten.`;

  return {
    title,
    description,
    robots: { index: false, follow: false },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function TechCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const sub = getSubcategoryBySlug(slug);
  const cityCtx = findCityBySlug(citySlug);
  if (!sub || !cityCtx) notFound();

  const { city, region, country } = cityCtx;
  const populationFormatted = city.population.toLocaleString('de-DE');
  const pop = city.population;

  const isLargeCity = pop > 500000;
  const isMediumCity = pop > 100000 && pop <= 500000;

  // ---- JSON-LD ----
  const countryCode =
    country.slug === 'deutschland'
      ? 'DE'
      : country.slug === 'oesterreich'
      ? 'AT'
      : country.slug === 'schweiz'
      ? 'CH'
      : country.slug === 'liechtenstein'
      ? 'LI'
      : 'LU';

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${sub.name} in ${city.name} einstellen - Programmier-Anfang`,
    description: `Freelance-${sub.name} in ${city.name} einstellen. ${city.description}`,
    url: `https://programmier-anfang.de/hire-developers/${slug}/${city.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Programmier-Anfang',
      url: 'https://programmier-anfang.de',
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
      priceCurrency: 'EUR',
      description: '0 EUR bis zur Einstellung',
    },
  };

  // ---- FAQ Data ----
  const faqItems = [
    {
      q: `Wie finde ich ${sub.name} in ${city.name}?`,
      a: `Mit Programmier-Anfang k\u00f6nnen Sie innerhalb von 72 Stunden auf gepr\u00fcfte ${sub.name} in ${city.name} zugreifen. Unsere Plattform bietet Zugang zu den Top 2\u00a0% der ${sub.name}, die auf ${sub.skills.slice(0, 3).join(', ')} und weitere Technologien spezialisiert sind.`,
    },
    {
      q: `Was kostet ein Freelance-${sub.name.replace('-Entwickler', '').replace('-Ingenieure', '')} Entwickler in ${city.name}?`,
      a: `Die Kosten variieren je nach Erfahrungsniveau und Spezialisierung. Freelance-${sub.name} in ${city.name} kosten typischerweise zwischen 60\u2013150\u00a0\u20ac pro Stunde. \u00dcber Programmier-Anfang k\u00f6nnen Sie bis zu 58\u00a0% im Vergleich zu traditionellen Einstellungsmethoden sparen.`,
    },
    {
      q: `Welche ${sub.skills[0]}-Kompetenzen sind in ${city.name} besonders gefragt?`,
      a: `In ${city.name} sind ${sub.name} mit Kenntnissen in ${sub.skills.slice(0, 5).join(', ')} besonders gefragt. ${isLargeCity ? `Als Gro\u00dfstadt bietet ${city.name} ein breites Spektrum an Projekten, von Startups bis hin zu gro\u00dfen Konzernen.` : `${city.name} hat eine wachsende Tech-Szene mit steigender Nachfrage nach spezialisierten Entwicklern.`}`,
    },
    {
      q: `Kann ich ${sub.name} in ${city.name} auch f\u00fcr Remote-Arbeit einstellen?`,
      a: `Ja, alle ${sub.name} auf Programmier-Anfang sind auf Remote-Arbeit spezialisiert. Entwickler aus ${city.name} arbeiten in der Zeitzone UTC+1, sprechen flie\u00dfend Deutsch und haben Erfahrung mit verteilten Teams und modernen Kollaborationstools.`,
    },
    {
      q: `Wie schnell kann ich einen ${sub.name.replace('-Entwickler', '').replace('-Ingenieure', '')} Spezialisten in ${city.name} einstellen?`,
      a: `Bei Programmier-Anfang erhalten Sie innerhalb von 72 Stunden gepr\u00fcfte ${sub.name}-Profile aus ${city.name}. Nach dem Interview-Prozess k\u00f6nnen Sie den Entwickler oft innerhalb einer Woche einstellen und sofort mit der Zusammenarbeit beginnen.`,
    },
  ];

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
          title: `Gro\u00dfes ${sub.skills[0]}-Talent\u00f6kosystem`,
          text: `${city.name} z\u00e4hlt mit ${populationFormatted} Einwohnern zu den gr\u00f6\u00dften St\u00e4dten im deutschsprachigen Raum. Die Stadt beherbergt zahlreiche Tech-Unternehmen und Startups, die auf ${sub.skills.slice(0, 3).join(', ')} setzen \u2014 ein idealer N\u00e4hrboden f\u00fcr erstklassige ${sub.name}.`,
        },
        {
          title: 'Tiefes Branchenwissen',
          text: `${sub.name} in ${city.name} bringen Erfahrung aus diversen Branchen mit \u2014 von Fintech \u00fcber E-Commerce bis hin zu Industrie 4.0. Dieses branchenspezifische Wissen, kombiniert mit ${sub.skills[0]}-Expertise, macht sie zu wertvollen Partnern f\u00fcr anspruchsvolle Projekte.`,
        },
        {
          title: 'Internationale Projekterfahrung',
          text: `In einer Metropole wie ${city.name} arbeiten viele ${sub.name} in internationalen Teams. Sie beherrschen agile Methoden, kommunizieren sicher auf Deutsch und Englisch und bringen Best Practices aus globalen Projekten mit.`,
        },
      ]
    : isMediumCity
    ? [
        {
          title: `Regionale ${sub.skills[0]}-Kompetenz`,
          text: `${city.name} ist mit ${populationFormatted} Einwohnern ein wichtiger Wirtschaftsstandort in ${region.name}. Die lokale Tech-Community bietet spezialisierte ${sub.name}, die regionale Marktkenntnis mit modernem ${sub.skills[0]}-Know-how verbinden.`,
        },
        {
          title: 'Engagierte Spezialisten',
          text: `${sub.name} aus mittelgro\u00dfen St\u00e4dten wie ${city.name} zeichnen sich durch hohe Projektbindung und langfristige Zusammenarbeit aus. Sie bringen fokussierte ${sub.skills.slice(0, 2).join('- und ')}-Expertise in Ihre Projekte ein.`,
        },
        {
          title: 'Attraktives Preis-Leistungs-Verh\u00e4ltnis',
          text: `Im Vergleich zu den gro\u00dfen Metropolen bieten ${sub.name} in ${city.name} oft ein hervorragendes Preis-Leistungs-Verh\u00e4ltnis bei gleichbleibend hoher technischer Qualit\u00e4t in ${sub.skills[0]} und verwandten Technologien.`,
        },
      ]
    : [
        {
          title: `${sub.skills[0]}-Expertise vor Ort`,
          text: `Auch in einer Stadt wie ${city.name} (${populationFormatted} Einwohner) finden Sie hochqualifizierte ${sub.name}, die den lokalen Markt in ${country.name} kennen und moderne ${sub.skills[0]}-L\u00f6sungen entwickeln.`,
        },
        {
          title: 'Pers\u00f6nliche Zusammenarbeit',
          text: `${sub.name} aus ${city.name} pflegen enge professionelle Netzwerke und bieten pers\u00f6nliche Betreuung Ihrer ${sub.skills.slice(0, 2).join('- und ')}-Projekte \u2014 mit hoher Verl\u00e4sslichkeit und Fokus.`,
        },
        {
          title: 'Gleiche Zeitzone, gleiche Sprache',
          text: `${city.name} liegt in der Zeitzone UTC+1. Ihre ${sub.name} sprechen flie\u00dfend Deutsch und arbeiten nahtlos mit Ihrem Team zusammen \u2014 keine Sprachbarrieren, keine Zeitzonen-Probleme.`,
        },
      ];

  // ---- Specializations in this city (related subcategories) ----
  const relatedTechs = getAllSubcategories()
    .filter((s) => s.slug !== slug)
    .slice(0, 12);

  const specLinks = relatedTechs.map((s) => ({
    label: `${s.name} in ${city.name}`,
    slug: s.slug,
  }));

  // ---- Cross-links: same tech in other cities ----
  const topCities = getAllCitiesSorted()
    .filter((c) => c.city.slug !== city.slug)
    .slice(0, 12);

  const sameTechOtherCities = topCities.map((c) => ({
    label: `${sub.name} in ${c.city.name}`,
    href: `/hire-developers/${slug}/${c.city.slug}`,
  }));

  // ---- Cross-links: other techs in same city ----
  const otherTechsSameCity = relatedTechs.slice(0, 8).map((s) => ({
    label: `${s.name} in ${city.name}`,
    href: `/hire-developers/${s.slug}/${city.slug}`,
  }));

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
      <Header />

      <Breadcrumb
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Entwickler einstellen', href: '/hire-developers' },
          { label: sub.name, href: `/hire-developers/${slug}` },
          {
            label: city.name,
            href: `/hire-developers/${slug}/${city.slug}`,
          },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[rgb(23,162,69)] mb-4">
            {sub.skills.slice(0, 3).join(' \u00b7 ')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {sub.name} in {city.name} einstellen
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Finden Sie gepr{'\u00fc'}fte Freelance-{sub.name} in {city.name},{' '}
            {region.name}. Unsere Experten f{'\u00fc'}r{' '}
            {sub.skills.slice(0, 3).join(', ')} verbinden lokales Marktverst
            {'\u00e4'}ndnis mit erstklassiger technischer Kompetenz.{' '}
            {isLargeCity
              ? `${city.name} bietet als Gro\u00dfstadt Zugang zu einem vielf\u00e4ltigen Pool an ${sub.name} mit internationaler Projekterfahrung.`
              : isMediumCity
              ? `${city.name} ist ein wachsender Tech-Standort in ${region.name} mit engagierten ${sub.name}, die langfristige Partnerschaften sch\u00e4tzen.`
              : `${sub.name} aus ${city.name} zeichnen sich durch pers\u00f6nliche Betreuung und hohe Zuverl\u00e4ssigkeit aus.`}
          </p>
          <a
            href="#spezialisierungen"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(23,162,69,0.4)] transition-all duration-200"
          >
            {sub.name} einstellen
          </a>
        </div>
      </section>

      {/* Why hire section */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Warum {sub.name} in {city.name} einstellen?
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

      {/* Available developer specializations */}
      <section id="spezialisierungen" className="bg-gray-50 py-12">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Verf{'\u00fc'}gbare Entwickler-Spezialisierungen in {city.name}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Neben {sub.name} finden Sie {'\u00fc'}ber Programmier-Anfang auch
            weitere Spezialisten in {city.name}:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specLinks.map((spec) => (
              <a
                key={spec.slug}
                href={`/hire-developers/${spec.slug}/${city.slug}`}
                className="flex items-center justify-center px-4 py-3 bg-white rounded-lg text-sm font-medium text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md transition-all border border-gray-200"
              >
                {spec.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills overview */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Gef{'\u00fc'}hlte Kompetenzen unserer {sub.name} in {city.name}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {sub.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-center mt-6">
              Unsere {sub.name} in {city.name} beherrschen diese und viele
              weitere Technologien. Jeder Kandidat wurde in einem mehrstufigen
              Verfahren auf technische F{'\u00e4'}higkeiten und
              Kommunikationskompetenz gepr{'\u00fc'}ft.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            H{'\u00e4'}ufig gestellte Fragen: {sub.name} in {city.name}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links: other techs in same city */}
      <RelatedLinks
        title={`Weitere Entwickler in ${city.name}`}
        links={otherTechsSameCity}
      />

      {/* Cross-links: same tech in other cities */}
      <RelatedLinks
        title={`${sub.name} in anderen St\u00e4dten`}
        links={sameTechOtherCities}
      />

      <FinalCTA
        heading={`Finden Sie Top-${sub.name} in ${city.name}!`}
        subheading={`Starten Sie jetzt und engagieren Sie die besten Freelance-${sub.name} aus ${city.name}, ${region.name}.`}
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
