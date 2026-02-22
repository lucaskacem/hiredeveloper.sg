import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Ersparnis berechnen | Bis zu 58% sparen mit Remote-Talenten | Programmier-Anfang',
  description:
    'Berechnen Sie Ihre Ersparnisse bei der Einstellung von Remote-Talenten ueber Programmier-Anfang. Bis zu 58% Kostenersparnis im Vergleich zu lokalen Einstellungen im DACH-Raum.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Ersparnis berechnen - Programmier-Anfang',
    description:
      'Erfahren Sie, wie viel Sie mit Remote-Talenten sparen koennen. Detaillierter Kostenvergleich zwischen lokalen und Remote-Einstellungen.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ErsparnisBerechnenPage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Ersparnis berechnen', href: '/ersparnis-berechnen' },
  ];

  const relatedLinks = [
    { label: 'Team-Kosten-Rechner', href: '/tools/team-kosten-rechner' },
    { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
    { label: 'Preise', href: '/preise' },
    { label: "So funktioniert's", href: '/so-funktionierts' },
    { label: 'Fallstudien', href: '/fallstudien' },
    { label: 'Entwickler einstellen', href: '/hire-developers' },
    { label: 'Designer einstellen', href: '/hire-designers' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageJsonLd />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] font-bold text-gray-900 mb-6">
              Berechnen Sie Ihre Ersparnis
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Unternehmen im DACH-Raum sparen durchschnittlich bis zu 58 % der Personalkosten,
              wenn sie Remote-Talente ueber Programmier-Anfang einstellen. Die Qualitaet?
              Bleibt gleich hoch.
            </p>
            <a
              href="/tools/team-kosten-rechner"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-all"
            >
              Zum Team-Kosten-Rechner
            </a>
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Kostenvergleich: Lokal vs. Remote
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            So viel koennen Sie bei typischen Rollen sparen, wenn Sie ueber Programmier-Anfang einstellen.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-gray-900 text-white text-sm font-semibold">
                <div className="p-4">Rolle</div>
                <div className="p-4 text-center">DACH-Gehalt (Jaehrlich)</div>
                <div className="p-4 text-center">Remote via Programmier-Anfang</div>
                <div className="p-4 text-center">Ersparnis</div>
              </div>

              {[
                { role: 'Senior Full-Stack-Entwickler', local: '85.000 EUR', remote: '42.000 EUR', saving: '~50%' },
                { role: 'UX/UI-Designer', local: '70.000 EUR', remote: '32.000 EUR', saving: '~54%' },
                { role: 'DevOps-Engineer', local: '80.000 EUR', remote: '38.000 EUR', saving: '~52%' },
                { role: 'Digital Marketer', local: '65.000 EUR', remote: '28.000 EUR', saving: '~57%' },
                { role: 'Produktmanager', local: '90.000 EUR', remote: '40.000 EUR', saving: '~56%' },
                { role: 'Projektmanager', local: '75.000 EUR', remote: '34.000 EUR', saving: '~55%' },
                { role: 'Virtueller Assistent', local: '45.000 EUR', remote: '18.000 EUR', saving: '~60%' },
              ].map((item) => (
                <div key={item.role} className="grid grid-cols-4 gap-0 border-t border-gray-100">
                  <div className="p-4 text-sm font-medium text-gray-900">{item.role}</div>
                  <div className="p-4 text-sm text-gray-600 text-center">{item.local}</div>
                  <div className="p-4 text-sm text-[rgb(23,162,69)] font-semibold text-center">{item.remote}</div>
                  <div className="p-4 text-sm text-[rgb(0,159,255)] font-bold text-center">{item.saving}</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Durchschnittswerte basierend auf Marktdaten. Tatsaechliche Ersparnisse variieren je nach Erfahrung, Standort und Projektanforderungen.
            </p>
          </div>
        </div>
      </section>

      {/* Where savings come from */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Woher kommen die Ersparnisse?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Es geht nicht nur ums Gehalt. Remote-Einstellungen ueber Programmier-Anfang senken die Kosten an vielen Stellen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gehaltsunterschiede</h3>
              <p className="text-gray-600 leading-relaxed">
                Talente in Osteuropa, Lateinamerika und Asien liefern die gleiche Qualitaet,
                bei deutlich niedrigeren Lebenshaltungskosten. Das Ergebnis: faire Gehaelter
                fuer die Talente, spuerbare Ersparnisse fuer Sie.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keine Buerokosten</h3>
              <p className="text-gray-600 leading-relaxed">
                Kein Buero, keine Ausstattung, keine Nebenkosten. Remote-Talente arbeiten von ihrem
                eigenen Arbeitsplatz aus. Das spart allein in Muenchen oder Zuerich schnell
                10.000-20.000 EUR pro Mitarbeiter und Jahr.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Geringere Rekrutierungskosten</h3>
              <p className="text-gray-600 leading-relaxed">
                Klassische Personalvermittler verlangen 20-30 % des Jahresgehalts. Bei uns?
                Keine Vorabgebuehren, ein transparentes Preismodell und faire Konditionen.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schnellere Einstellung</h3>
              <p className="text-gray-600 leading-relaxed">
                Bis zu 75 % schnellere Einstellungszeit bedeutet weniger Produktivitaetsverlust.
                Waehrend traditionelle Prozesse 2-4 Monate dauern, stellen Sie ueber Programmier-Anfang
                oft in 1-2 Wochen ein.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Modelle</h3>
              <p className="text-gray-600 leading-relaxed">
                Brauchen Sie kein Vollzeittalent? Stellen Sie Freelancer auf Projektbasis ein.
                Sie zahlen nur fuer Stunden, die auch gearbeitet werden. Kein Leerlauf.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keine Fehlbesetzungen</h3>
              <p className="text-gray-600 leading-relaxed">
                Eine Fehlbesetzung kostet im Schnitt das 1,5-fache des Jahresgehalts. Durch
                unsere strenge Vorauswahl und die risikofreie Probezeit sinkt dieses Risiko
                auf ein Minimum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[40px] font-bold text-gray-900 mb-6">
              Berechnen Sie Ihre individuelle Ersparnis
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mit unserem interaktiven Team-Kosten-Rechner sehen Sie auf einen Blick, wie viel
              Sie bei Ihrer naechsten Einstellung sparen. Teamgroesse und Rollen eingeben, fertig.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/tools/team-kosten-rechner"
                className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-all"
              >
                Team-Kosten-Rechner oeffnen
              </a>
              <OpenModalButton className="px-8 py-4 text-lg font-semibold text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                Persoenliche Beratung anfordern
              </OpenModalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Real savings example */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            Rechenbeispiel: 5-koepfiges Entwicklungsteam
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lokale Einstellung (DACH)</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex justify-between">
                  <span>2x Senior Entwickler</span>
                  <span className="font-semibold">170.000 EUR</span>
                </li>
                <li className="flex justify-between">
                  <span>2x Mid-Level Entwickler</span>
                  <span className="font-semibold">120.000 EUR</span>
                </li>
                <li className="flex justify-between">
                  <span>1x DevOps Engineer</span>
                  <span className="font-semibold">80.000 EUR</span>
                </li>
                <li className="flex justify-between border-t border-gray-300 pt-4">
                  <span>Buerokosten (5 Plaetze)</span>
                  <span className="font-semibold">60.000 EUR</span>
                </li>
                <li className="flex justify-between">
                  <span>Rekrutierungskosten</span>
                  <span className="font-semibold">55.000 EUR</span>
                </li>
                <li className="flex justify-between border-t border-gray-900 pt-4 text-lg font-bold text-gray-900">
                  <span>Gesamtkosten</span>
                  <span>485.000 EUR</span>
                </li>
              </ul>
            </div>

            <div className="bg-[rgb(0,159,255)]/5 p-8 rounded-xl border border-[rgb(0,159,255)]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Remote via Programmier-Anfang</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex justify-between">
                  <span>2x Senior Entwickler</span>
                  <span className="font-semibold">84.000 EUR</span>
                </li>
                <li className="flex justify-between">
                  <span>2x Mid-Level Entwickler</span>
                  <span className="font-semibold">56.000 EUR</span>
                </li>
                <li className="flex justify-between">
                  <span>1x DevOps Engineer</span>
                  <span className="font-semibold">38.000 EUR</span>
                </li>
                <li className="flex justify-between border-t border-gray-300 pt-4">
                  <span>Buerokosten</span>
                  <span className="font-semibold text-[rgb(23,162,69)]">0 EUR</span>
                </li>
                <li className="flex justify-between">
                  <span>Vermittlungsgebuehr</span>
                  <span className="font-semibold">transparent</span>
                </li>
                <li className="flex justify-between border-t border-gray-900 pt-4 text-lg font-bold text-[rgb(23,162,69)]">
                  <span>Gesamtkosten</span>
                  <span>~205.000 EUR</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg text-center">
                <p className="text-2xl font-bold text-[rgb(23,162,69)]">Ersparnis: ~280.000 EUR / Jahr</p>
                <p className="text-sm text-gray-500">Das sind ca. 58 % weniger Kosten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks title="Verwandte Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Sparen Sie bis zu 58 % Personalkosten"
        subheading="Starten Sie risikofrei und berechnen Sie Ihre individuelle Ersparnis."
        ctaText="Jetzt Ersparnis berechnen"
      />

      <Footer />
    </div>
  );
}
