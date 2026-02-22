import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import RelatedLinks from '../components/RelatedLinks';
import FinalCTA from '../components/FinalCTA';
import InlineCTABanner from '../components/InlineCTABanner';
import { countries, getTopCitiesForCountry } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Remote-Entwickler nach Standort einstellen | Programmier-Anfang',
  description:
    'Finden und engagieren Sie die besten Remote-Entwickler in Deutschland, Österreich, der Schweiz, Liechtenstein und Luxemburg. Zugang zu erstklassigen Programmierern in allen Regionen.',
  robots: { index: false, follow: false },
};

export default function StandortePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Standorte', href: '/standorte' },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Remote-Entwickler nach Standort
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Finden Sie vorgeprüfte Remote-Entwickler in Deutschland, Österreich,
                der Schweiz, Liechtenstein und Luxemburg. Durchsuchen Sie unsere
                Standorte und entdecken Sie Top-Programmierer in Ihrer Region.
              </p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.05)] border border-white/10 hidden lg:block">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/hero.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Country cards grid */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Alle Standorte durchsuchen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => {
              const topCities = getTopCitiesForCountry(country.slug, 5);
              const regionCount = country.regions.length;

              return (
                <Link
                  key={country.slug}
                  href={`/standorte/${country.slug}`}
                  className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {country.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {regionCount} {regionCount === 1 ? 'Region' : 'Regionen'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topCities.map((city) => (
                      <span
                        key={city.slug}
                        className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-700"
                      >
                        {city.name}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <InlineCTABanner
        headline="Entwickler in Ihrer Region gesucht?"
        subtext="Vorgepruefte Remote-Talente mit Zeitzonen-Ueberlappung -- bereit fuer Ihr Projekt."
      />

      <RelatedLinks
        title="Entwickler nach Spezialisierung"
        links={[
          { label: 'JavaScript-Entwickler', href: '/hire-developers/javascript' },
          { label: 'Python-Entwickler', href: '/hire-developers/python' },
          { label: 'React-Entwickler', href: '/hire-developers/reactjs' },
          { label: 'Node.js-Entwickler', href: '/hire-developers/nodejs' },
          { label: 'TypeScript-Entwickler', href: '/hire-developers/typescript' },
          { label: 'Java-Entwickler', href: '/hire-developers/java' },
          { label: 'PHP-Entwickler', href: '/hire-developers/php' },
          { label: 'Ruby-Entwickler', href: '/hire-developers/ruby' },
        ]}
      />

      <FinalCTA
        heading="Finden Sie Remote-Entwickler in Ihrer Region!"
        subheading="Risikofrei starten. Zugang zu vorgeprüften Programmierern weltweit."
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
