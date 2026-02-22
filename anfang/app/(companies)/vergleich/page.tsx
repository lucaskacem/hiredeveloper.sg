import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import { competitors } from '@/app/data/competitors';
import ComparisonQuiz from './ComparisonQuiz';

export const metadata: Metadata = {
  title: 'Programmier-Anfang vs Alternativen | Anbietervergleich 2025',
  description:
    'Vergleichen Sie Programmier-Anfang mit Toptal, Upwork, Fiverr, Turing und weiteren Plattformen. Finden Sie die beste Lösung für Ihre Remote-Entwickler-Einstellungen.',
  robots: { index: false, follow: false },
};

const featuredSlugs = ['toptal', 'upwork', 'turing'];
const featuredCompetitors = competitors.filter((c) =>
  featuredSlugs.includes(c.slug)
);

export default function VergleichPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Vergleich', href: '/vergleich' },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-[rgb(23,162,69)] font-semibold mb-4 text-sm uppercase tracking-wider">
                Anbietervergleich 2025
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Programmier-Anfang vs Alternativen
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-6">
                Welche Plattform passt zu Ihrem Unternehmen? Wir haben
                Programmier-Anfang mit den bekanntesten Alternativen verglichen,
                damit Sie schneller die richtige Wahl treffen.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
                  {competitors.length} Anbieter verglichen
                </span>
                <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
                  Detaillierte Analysen
                </span>
                <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
                  Interaktiver Test
                </span>
              </div>
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

      {/* Why compare section */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Warum Plattformen vergleichen?
          </h2>
          <p className="text-gray-600 max-w-3xl mb-6">
            Die falsche Plattform kostet Zeit und Geld. Jeder Anbieter hat
            andere Stärken, Preismodelle und Spezialisierungen. Mit unseren
            Vergleichen sehen Sie auf einen Blick, wo die Unterschiede liegen,
            und treffen schneller eine gute Entscheidung.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Qualität vergleichen</h3>
              <p className="text-sm text-gray-600">
                Welche Plattformen prüfen ihre Entwickler selbst,
                und welche agieren nur als Vermittler?
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(0,159,255)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Kosten verstehen</h3>
              <p className="text-sm text-gray-600">
                Was zahlen Sie am Ende wirklich? Preismodelle, versteckte Gebühren
                und ROI im direkten Vergleich.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Schneller entscheiden</h3>
              <p className="text-sm text-gray-600">
                Statt stundenlanger Recherche: klare Tabellen,
                kurze Bewertungen, fertig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Comparisons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="text-center mb-10">
            <span className="inline-block bg-[rgb(23,162,69)]/10 text-[rgb(23,162,69)] text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Beliebte Vergleiche
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Top-Vergleiche: Am häufigsten nachgefragt
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Die drei Vergleiche, die DACH-Unternehmen am meisten interessieren. Ein guter Startpunkt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCompetitors.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/vergleich/${competitor.slug}`}
                className="bg-white rounded-xl p-6 border-2 border-[rgb(23,162,69)]/20 hover:border-[rgb(23,162,69)] hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[rgb(23,162,69)]/10 text-[rgb(23,162,69)] text-xs font-bold px-2 py-1 rounded">
                    BELIEBT
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-[rgb(23,162,69)] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Programmier-Anfang vs {competitor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {competitor.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {competitor.features.filter((f) => f.us === true).length} Vorteile PA
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {competitor.focus.split(' ').slice(0, 3).join(' ')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick comparison table: PA vs top 5 */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Kurzvergleich: Programmier-Anfang vs Top-Alternativen
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Sehen Sie auf einen Blick, wie sich Programmier-Anfang von den bekanntesten Plattformen unterscheidet.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg border border-gray-200">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Plattform</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Matching-Zeit</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Vorprüfung</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">DACH-Fokus</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Probezeit</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Transparente Preise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-[rgb(23,162,69)]/5">
                  <td className="py-3 px-4 text-sm font-bold text-[rgb(23,162,69)]">Programmier-Anfang</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-700 font-medium">72 Stunden</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                      <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                      <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                      <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                      <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                </tr>
                {competitors.slice(0, 5).map((c, i) => (
                  <tr key={c.slug} className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50'}`}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">
                      <Link href={`/vergleich/${c.slug}`} className="hover:text-[rgb(0,159,255)] hover:underline">
                        {c.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">
                      {c.features.find((f) => f.name === 'Matching in 72 Stunden')?.them === false
                        ? 'Variiert'
                        : String(c.features.find((f) => f.name === 'Matching in 72 Stunden')?.them)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {c.features.find((f) => f.name === 'Vorgeprüfte Entwickler')?.them === true ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                          <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                          <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                        <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {c.features.find((f) => f.name === 'Risikofreie Probezeit')?.them === true ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                          <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                          <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {c.features.find((f) => f.name === 'Transparente Preise')?.them === true ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                          <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                          <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <ComparisonQuiz />

      {/* All competitor cards grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Alle Vergleiche
          </h2>
          <p className="text-gray-600 mb-8">
            Wählen Sie einen Anbieter und lesen Sie unseren detaillierten Vergleich mit Programmier-Anfang.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/vergleich/${competitor.slug}`}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    vs {competitor.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {competitor.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {competitor.focus}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom info section */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              So erstellen wir unsere Vergleiche
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Wir schauen uns jede Plattform anhand derselben Kriterien an: Qualitätssicherung, Preise, Matching-Geschwindigkeit, Support und Technologie-Abdeckung. Die Daten stammen aus öffentlichen Quellen, Nutzerbewertungen und eigenen Tests. So bekommen Sie eine solide Grundlage, ohne selbst alles durcharbeiten zu müssen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-[rgb(23,162,69)]">{competitors.length}+</span>
                <p className="text-sm text-gray-600 mt-1">Anbieter verglichen</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-[rgb(23,162,69)]">8+</span>
                <p className="text-sm text-gray-600 mt-1">Kriterien pro Vergleich</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-[rgb(23,162,69)]">2025</span>
                <p className="text-sm text-gray-600 mt-1">Aktualisiert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Entwickler nach Spezialisierung"
        links={[
          { label: 'JavaScript-Entwickler', href: '/hire-developers/javascript' },
          { label: 'Python-Entwickler', href: '/hire-developers/python' },
          { label: 'React-Entwickler', href: '/hire-developers/reactjs' },
          { label: 'Node.js-Entwickler', href: '/hire-developers/nodejs' },
          { label: 'TypeScript-Entwickler', href: '/hire-developers/typescript' },
          { label: 'Java-Entwickler', href: '/hire-developers/java' },
          { label: 'Full-Stack-Entwickler', href: '/hire-developers/full-stack' },
          { label: 'KI-Entwickler', href: '/hire-developers/ai' },
        ]}
      />

      <FinalCTA
        heading="Bereit, die beste Wahl zu treffen?"
        subheading="Starten Sie risikofrei und überzeugen Sie sich selbst."
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
