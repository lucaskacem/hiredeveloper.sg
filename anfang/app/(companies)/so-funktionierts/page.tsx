import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'So funktioniert Programmier-Anfang | In 3 Schritten zum Traumteam',
  description:
    'Erfahren Sie, wie Sie in nur 3 Schritten gepruefte Remote-Entwickler, Designer und weitere Talente ueber Programmier-Anfang einstellen. Schnell, risikofrei und ohne Vorabkosten.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'So stellen Sie Remote-Talente ueber Programmier-Anfang ein',
    description:
      'In 3 einfachen Schritten zum perfekten Remote-Team: Anforderungen teilen, Interviews fuehren, einstellen.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Anforderungen teilen',
        text: 'Beschreiben Sie die Rolle, die benoetigten Faehigkeiten und Ihr Budget. Unser Team beginnt sofort mit der Suche.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Interviews fuehren',
        text: 'Innerhalb von 72 Stunden erhalten Sie vorgepruefte Kandidatenprofile und fuehren Interviews nach Ihren Standards.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Einstellen und starten',
        text: 'Waehlen Sie den besten Kandidaten, unterzeichnen Sie den Vertrag und starten Sie die Zusammenarbeit sofort.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function SoFunktioniertsPage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: "So funktioniert's", href: '/so-funktionierts' },
  ];

  const relatedLinks = [
    { label: 'Entwickler einstellen', href: '/hire-developers' },
    { label: 'Designer einstellen', href: '/hire-designers' },
    { label: 'Preise', href: '/preise' },
    { label: 'Ersparnis berechnen', href: '/ersparnis-berechnen' },
    { label: 'Fallstudien', href: '/fallstudien' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Team-Kosten-Rechner', href: '/tools/team-kosten-rechner' },
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
              So funktioniert Programmier-Anfang
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Drei Schritte. So verbinden wir Sie mit den besten Remote-Talenten der Welt.
              Kein Risiko, keine Vorabkosten. Sie zahlen erst bei erfolgreicher Einstellung.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Jetzt starten
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            Ihr Weg zum perfekten Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6 rounded-lg overflow-hidden bg-white p-8">
                <div className="aspect-square w-full max-w-[300px] mx-auto flex items-center justify-center">
                  <img
                    src="/images/steps/request.svg"
                    alt="Anforderungen teilen"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-[20px] font-bold text-[rgb(0,159,255)] mb-2">01</div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                Anforderungen teilen
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                Sagen Sie uns, welche Rolle Sie besetzen wollen, welche Skills gefragt sind und
                was Ihr Budget hergibt. Unser Matching-Team legt sofort los und sucht in
                einem Pool von ueber 350.000 geprüften Talenten nach den richtigen Leuten.
              </p>
              <p className="text-sm text-gray-600">Dauert nur 5 Minuten</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6 rounded-lg overflow-hidden bg-white p-8">
                <div className="aspect-square w-full max-w-[300px] mx-auto flex items-center justify-center">
                  <img
                    src="/images/steps/interview.svg"
                    alt="Interviews fuehren"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-[20px] font-bold text-[rgb(0,159,255)] mb-2">02</div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                Interviews fuehren
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                Innerhalb von 72 Stunden bekommen Sie handverlesene Kandidatenprofile.
                Dann fuehren Sie Interviews so, wie Sie es gewohnt sind: per Video, technische Tests
                oder Pair Programming. Die Koordination uebernehmen wir.
              </p>
              <p className="text-sm text-gray-600">Erste Profile innerhalb von 72 Stunden</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6 rounded-lg overflow-hidden bg-white p-8">
                <div className="aspect-square w-full max-w-[300px] mx-auto flex items-center justify-center">
                  <img
                    src="/images/steps/hire.svg"
                    alt="Einstellen"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-[20px] font-bold text-[rgb(0,159,255)] mb-2">03</div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                Einstellen und starten
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                Sie haben sich entschieden? NDA und Vertrag unterschreiben, den Papierkram erledigen wir.
                Ihr neues Teammitglied kann direkt loslegen. Und falls es doch nicht passt:
                Ersatz finden wir kostenlos.
              </p>
              <p className="text-sm text-gray-600">Risikofreie Probezeit inklusive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Programmier-Anfang */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Warum Unternehmen Programmier-Anfang waehlen
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Mehr als eine Plattform: Wir sind Ihr Partner beim Aufbau starker Remote-Teams.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">2%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nur die Besten</h3>
              <p className="text-gray-600 leading-relaxed">
                Unser Pruefverfahren ist streng: Nur die besten 2 % aller Bewerber schaffen es.
                Technische Assessments, Live-Coding, Kommunikationstests, Referenzpruefungen. So
                landen nur wirklich gute Leute auf Ihrem Schreibtisch.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">72h</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schnelle Ergebnisse</h3>
              <p className="text-gray-600 leading-relaxed">
                Klassische Einstellungen ziehen sich ueber Monate. Bei uns bekommen Sie
                erste Profile innerhalb von 72 Stunden. Die meisten Unternehmen stellen
                in ein bis zwei Wochen ein.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">58%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bis zu 58 % weniger Kosten</h3>
              <p className="text-gray-600 leading-relaxed">
                Sparen Sie bis zu 58 % der Personalkosten gegenueber lokalen Einstellungen
                im DACH-Raum, ohne bei der Qualitaet Abstriche zu machen. Probieren Sie unseren{' '}
                <a href="/tools/team-kosten-rechner" className="text-[rgb(0,159,255)] hover:underline">
                  Team-Kosten-Rechner
                </a>{' '}
                fuer eine individuelle Kalkulation.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">0 EUR</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keine Vorabkosten</h3>
              <p className="text-gray-600 leading-relaxed">
                Sie zahlen erst, wenn Sie jemanden einstellen. Keine Registrierungsgebuehren,
                keine Abonnements, nichts Verstecktes. Was es kostet, sehen Sie vorher.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">350K+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Riesiger Talentpool</h3>
              <p className="text-gray-600 leading-relaxed">
                Ueber 350.000 gepruefte Remote-Talente weltweit: Entwickler, Designer,
                Marketer, Produktmanager, Projektmanager, Assistenten. Egal welche Rolle,
                wir finden jemanden.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">100%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risikofreie Probezeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Jede Einstellung kommt mit einer risikofreien Probezeit. Passt der Kandidat
                nicht? Dann suchen wir kostenlos einen Ersatz. So einfach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Fuer wen ist Programmier-Anfang?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Ob Startup oder Konzern: Wir haben die passende Loesung fuer jede Unternehmensgroesse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Startups</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Schnell ein starkes Team aufbauen, ohne das Budget zu sprengen?
                Wir finden erfahrene Remote-Talente, die ab Tag eins liefern.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Schnelle Skalierung ohne Buerokosten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Zugang zu Senior-Talenten ab dem ersten Tag
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Flexible Freelance- oder Vollzeitmodelle
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">KMUs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Spezialisten, die es lokal kaum gibt? Unser globaler Talentpool macht es moeglich,
                auch Nischenpositionen schnell zu besetzen.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Spezialisierte Fachkraefte fuer Nischenprojekte
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Bis zu 58 % Kostenersparnis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Dedizierte Account-Manager
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Konzerne</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ganze Teams aufbauen oder Engpaesse ueberbruecken: Grosse Unternehmen
                setzen auf Programmier-Anfang, wenn es schnell gehen muss.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Parallele Besetzung mehrerer Positionen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Employer-of-Record-Loesungen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  DSGVO-konforme Vertraege und NDA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Talent categories */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Welche Talente koennen Sie einstellen?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Programmier-Anfang deckt alle wichtigen Rollen fuer Ihr digitales Team ab.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/hire-developers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entwickler</h3>
              <p className="text-gray-600 text-sm">
                Full-Stack, Frontend, Backend, Mobile, DevOps, KI. Ueber 250.000 gepruefte Entwickler weltweit.
              </p>
            </a>
            <a href="/hire-designers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Designer</h3>
              <p className="text-gray-600 text-sm">
                UX, UI, Produkt, Grafik, Brand: kreative Koepfe fuer jede Design-Aufgabe.
              </p>
            </a>
            <a href="/hire-marketers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marketer</h3>
              <p className="text-gray-600 text-sm">
                SEO, Content, Growth, Performance, Social Media. Datengetriebene Marketing-Profis.
              </p>
            </a>
            <a href="/hire-product-managers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Produktmanager</h3>
              <p className="text-gray-600 text-sm">
                Produktstrategie, Roadmap, Stakeholder-Management: erfahrene PMs fuer Ihr Produkt.
              </p>
            </a>
            <a href="/hire-project-managers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Projektmanager</h3>
              <p className="text-gray-600 text-sm">
                Agile, Scrum, PMP: zertifizierte Projektmanager fuer anspruchsvolle Projekte.
              </p>
            </a>
            <a href="/hire-assistants" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assistenten</h3>
              <p className="text-gray-600 text-sm">
                Virtuelle Assistenten, Executive Assistants. Zuverlaessige Unterstuetzung fuer Ihren Alltag.
              </p>
            </a>
          </div>
        </div>
      </section>

      <RelatedLinks title="Verwandte Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Bereit, Ihr Team aufzubauen?"
        subheading="Erhalten Sie innerhalb von 72 Stunden gepruefte Kandidatenprofile. Risikofrei und ohne Vorabkosten."
        ctaText="Jetzt starten"
      />

      <Footer />
    </div>
  );
}
