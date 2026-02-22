import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Preise | Transparentes Preismodell | Programmier-Anfang',
  description:
    'Erfahren Sie alles ueber die Preise von Programmier-Anfang. $0 bis zur Einstellung, dann eine faire Vermittlungsgebuehr. Keine versteckten Kosten, kein Risiko.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Preise - Programmier-Anfang',
    description: 'Transparentes Preismodell: Keine Vorabgebuehren. Sie zahlen erst bei erfolgreicher Einstellung.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PreisePage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Preise', href: '/preise' },
  ];

  const relatedLinks = [
    { label: 'Ersparnis berechnen', href: '/ersparnis-berechnen' },
    { label: 'Team-Kosten-Rechner', href: '/tools/team-kosten-rechner' },
    { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
    { label: "So funktioniert's", href: '/so-funktionierts' },
    { label: 'Fallstudien', href: '/fallstudien' },
    { label: 'Entwickler einstellen', href: '/hire-developers' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Ressourcen', href: '/ressourcen' },
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
              Transparente Preise
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Bei Programmier-Anfang zahlen Sie erst, wenn Sie den perfekten Kandidaten gefunden haben.
              Keine Vorabgebuehren, keine Abonnements, keine versteckten Kosten.
            </p>
            <p className="text-lg text-[rgb(0,159,255)] font-semibold">
              $0 bis zur Einstellung. Garantiert.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing model */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            So funktioniert unser Preismodell
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anfrage stellen</h3>
              <div className="text-3xl font-bold text-[rgb(23,162,69)] mb-4">Kostenlos</div>
              <p className="text-gray-600 leading-relaxed">
                Beschreiben Sie Ihren Bedarf und erhalten Sie innerhalb von 72 Stunden
                handverlesene Kandidatenprofile. Ohne Kosten und ohne Verpflichtung.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interviews fuehren</h3>
              <div className="text-3xl font-bold text-[rgb(23,162,69)] mb-4">Kostenlos</div>
              <p className="text-gray-600 leading-relaxed">
                Fuehren Sie so viele Interviews, wie Sie moechten. Wir koordinieren den
                gesamten Prozess fuer Sie, ohne zusaetzliche Kosten.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-xl border-2 border-[rgb(0,159,255)] text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(0,159,255)] text-white text-xs font-bold px-3 py-1 rounded-full">
                Erst hier zahlen Sie
              </div>
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Einstellen</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">Vermittlungsgebuehr</div>
              <p className="text-gray-600 leading-relaxed">
                Nur wenn Sie sich fuer einen Kandidaten entscheiden, faellt eine faire
                Vermittlungsgebuehr an. Risikofreie Probezeit inklusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Flexible Engagement-Modelle
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Waehlen Sie das Modell, das am besten zu Ihrem Projekt und Budget passt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Freelance / Projektbasis</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ideal fuer kurzfristige Projekte oder spezialisierte Aufgaben. Bezahlen Sie
                auf Stundenbasis und skalieren Sie flexibel nach Bedarf.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Abrechnung auf Stundenbasis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Keine Mindestlaufzeit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Flexible Skalierung (hoch oder runter)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Ideal fuer Projekte mit definiertem Scope
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Typische Stundensaetze:</p>
                <p className="text-lg font-semibold text-gray-900">25 bis 200 USD/Stunde</p>
                <p className="text-xs text-gray-500">Je nach Rolle und Erfahrungslevel</p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vollzeit-Remote</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Perfekt fuer langfristige Positionen. Ihr Talent arbeitet exklusiv fuer Sie
                und wird Teil Ihres Teams.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Monatliches Festgehalt
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Exklusives Engagement fuer Ihr Unternehmen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Employer-of-Record-Loesung verfuegbar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Bis zu 58 % Ersparnis vs. DACH-Gehaelter
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Typische Monatsgehaelter:</p>
                <p className="text-lg font-semibold text-gray-900">1.500 bis 8.000 USD/Monat</p>
                <p className="text-xs text-gray-500">Je nach Rolle und Erfahrungslevel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            Was in jedem Plan enthalten ist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strenge Vorauswahl</h3>
              <p className="text-gray-600 text-sm">
                Jeder Kandidat durchlaeuft unser mehrstufiges Pruefverfahren mit technischen
                Tests, Live-Coding und Kommunikationsbewertung.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Risikofreie Probezeit</h3>
              <p className="text-gray-600 text-sm">
                Testen Sie die Zusammenarbeit risikofrei. Wenn der Kandidat nicht passt,
                finden wir kostenlos einen Ersatz.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vertragsmanagement</h3>
              <p className="text-gray-600 text-sm">
                Wir kuemmern uns um NDA, IP-Vertraege, Dienstleistungsvertraege und
                DSGVO-konforme Auftragsverarbeitung.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dedizierter Account-Manager</h3>
              <p className="text-gray-600 text-sm">
                Ihr persoenlicher Ansprechpartner begleitet Sie durch den gesamten
                Einstellungsprozess, und auch danach.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Onboarding-Support</h3>
              <p className="text-gray-600 text-sm">
                Wir unterstuetzen Sie beim Onboarding, damit Ihr neues Teammitglied
                schnell produktiv wird.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Laufende Betreuung</h3>
              <p className="text-gray-600 text-sm">
                Auch nach der Einstellung sind wir fuer Sie da: bei Fragen,
                Problemen oder wenn Sie weitere Leute brauchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[40px] font-bold text-gray-900 text-center mb-12">
              Haeufige Fragen zu unseren Preisen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Gibt es wirklich keine Vorabkosten?',
                  a: 'Richtig. Registrierung, Anfrage und Interviews sind kostenlos. Sie zahlen erst, wenn Sie sich fuer einen Kandidaten entscheiden und die Zusammenarbeit starten.',
                },
                {
                  q: 'Wie hoch ist die Vermittlungsgebuehr?',
                  a: 'Die Vermittlungsgebuehr haengt vom Vertragsmodell (Freelance oder Vollzeit) und dem Erfahrungslevel des Talents ab. Kontaktieren Sie uns fuer ein individuelles Angebot. Wir legen alles offen.',
                },
                {
                  q: 'Was passiert, wenn der Kandidat nicht passt?',
                  a: 'Wir bieten eine risikofreie Probezeit. Wenn der Kandidat Ihre Erwartungen nicht erfuellt, finden wir kostenlos einen Ersatz oder erstatten die Vermittlungsgebuehr.',
                },
                {
                  q: 'Gibt es Rabatte fuer mehrere Einstellungen?',
                  a: 'Ja, bei der Einstellung mehrerer Talente bieten wir attraktive Staffelpreise. Sprechen Sie uns an fuer ein massgeschneidertes Angebot fuer Ihr Team.',
                },
                {
                  q: 'Wie werden laufende Kosten fuer Freelancer abgerechnet?',
                  a: 'Freelancer rechnen auf Stundenbasis ab. Sie erhalten eine transparente monatliche Rechnung mit detaillierter Aufschluesselung der geleisteten Stunden.',
                },
              ].map((item) => (
                <div key={item.q} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/faq" className="text-[rgb(0,159,255)] hover:underline font-medium">
                Alle FAQ anzeigen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Individuelles Angebot anfordern
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Jedes Projekt ist einzigartig. Lassen Sie uns ueber Ihre Anforderungen sprechen
            und ein massgeschneidertes Angebot erstellen.
          </p>
          <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
            Kostenloses Angebot anfordern
          </OpenModalButton>
        </div>
      </section>

      <RelatedLinks title="Verwandte Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Starten Sie risikofrei"
        subheading="$0 bis zur Einstellung. Erhalten Sie innerhalb von 72 Stunden gepruefte Kandidatenprofile."
        ctaText="Jetzt starten"
      />

      <Footer />
    </div>
  );
}
