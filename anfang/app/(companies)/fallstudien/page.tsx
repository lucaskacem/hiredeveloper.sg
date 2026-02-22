import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Fallstudien | Erfolgsgeschichten unserer Kunden | Programmier-Anfang',
  description:
    'Erfahren Sie, wie Unternehmen im DACH-Raum mit Programmier-Anfang ihre Remote-Teams aufgebaut, Kosten gespart und Projekte erfolgreich umgesetzt haben.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Fallstudien - Programmier-Anfang',
    description:
      'Erfolgsgeschichten von Unternehmen, die ueber Programmier-Anfang Remote-Talente eingestellt haben.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CaseStudy {
  company: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  quoteAuthor: string;
  quoteTitle: string;
  teamSize: string;
  timeToHire: string;
  costSaving: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: 'FinSecure GmbH',
    industry: 'FinTech',
    location: 'Frankfurt am Main',
    challenge:
      'FinSecure GmbH, ein schnell wachsendes FinTech-Startup, musste innerhalb von 6 Wochen ein komplettes Backend-Entwicklungsteam aufbauen, um eine neue Zahlungsplattform fuer den europaeischen Markt zu lancieren. Lokale Entwickler waren rar und die Gehaelter im Frankfurter Markt extrem hoch.',
    solution:
      'Ueber Programmier-Anfang stellte FinSecure in nur 10 Tagen drei Senior-Backend-Entwickler (Node.js, Python) und einen DevOps-Engineer ein. Alle vier hatten FinTech-Erfahrung und kannten sich mit DSGVO-Anforderungen aus.',
    results: [
      'Zahlungsplattform 3 Wochen vor Deadline gelauncht',
      '52 % Kostenersparnis gegenueber lokalen Einstellungen',
      'Alle 4 Talente nach Probezeit in Vollzeit uebernommen',
      'Zero-Downtime seit Launch (99,99 % Uptime)',
    ],
    quote: 'Programmier-Anfang hat uns geholfen, ein starkes Team in Rekordzeit aufzubauen. Die Qualitaet der Kandidaten hat unsere Erwartungen uebertroffen.',
    quoteAuthor: 'M. Weber',
    quoteTitle: 'CTO, FinSecure GmbH',
    teamSize: '4 Talente',
    timeToHire: '10 Tage',
    costSaving: '52%',
  },
  {
    company: 'MediConnect AG',
    industry: 'HealthTech',
    location: 'Zuerich',
    challenge:
      'MediConnect AG entwickelt eine Telemedizin-Plattform und benoetigte dringend spezialisierte React- und React-Native-Entwickler, um die mobile App und das Arzt-Dashboard parallel zu entwickeln. Im Zuericher Markt waren die Kosten fuer solche Spezialisten kaum tragbar.',
    solution:
      'Programmier-Anfang stellte innerhalb von 2 Wochen zwei Senior-React-Entwickler und einen React-Native-Spezialisten bereit. Dazu kam ein UX-Designer, der die mobile Nutzererfahrung ueberarbeitet hat.',
    results: [
      'Mobile App in 4 Monaten fertiggestellt (statt geplanten 8)',
      '58 % Kostenersparnis im Vergleich zu Zuericher Gehaeltern',
      'App-Store-Bewertung von 4,8 Sternen nach Launch',
      'Patientenzufriedenheit um 35 % gestiegen',
    ],
    quote: 'Die Entwickler von Programmier-Anfang haben sich sofort in unser Team eingefuegt. Man merkt kaum, dass sie remote arbeiten.',
    quoteAuthor: 'Dr. S. Mueller',
    quoteTitle: 'CEO, MediConnect AG',
    teamSize: '4 Talente',
    timeToHire: '14 Tage',
    costSaving: '58%',
  },
  {
    company: 'ShopVenture GmbH',
    industry: 'E-Commerce',
    location: 'Berlin',
    challenge:
      'ShopVenture, ein mittelstaendischer E-Commerce-Anbieter, wollte seinen Online-Shop komplett neu aufbauen und gleichzeitig ein Daten-Team fuer personalisierte Produktempfehlungen gruenden. Das bestehende Team war ausgelastet und interne Recruitingversuche blieben monatelang erfolglos.',
    solution:
      'Programmier-Anfang besetzte schrittweise 6 Positionen: zwei Full-Stack-Entwickler, einen Shopify-Experten, einen Data Scientist, einen UX-Designer und einen Growth Marketer. Die ersten Kandidaten waren innerhalb von 72 Stunden verfuegbar.',
    results: [
      'Relaunch des Online-Shops in 5 Monaten statt geplanten 9',
      'Umsatzsteigerung um 40 % innerhalb von 6 Monaten nach Launch',
      'Conversion-Rate von 2,1 % auf 3,8 % verbessert',
      '55 % Gesamtersparnis bei den Personalkosten',
    ],
    quote: 'Von der ersten Anfrage bis zum produktiven Team lief alles glatt. Programmier-Anfang ist jetzt unser fester Partner fuer alle Einstellungen.',
    quoteAuthor: 'L. Hoffmann',
    quoteTitle: 'Geschaeftsfuehrer, ShopVenture GmbH',
    teamSize: '6 Talente',
    timeToHire: '3 Wochen',
    costSaving: '55%',
  },
  {
    company: 'GreenLogistics GmbH',
    industry: 'Logistik & Nachhaltigkeit',
    location: 'Wien',
    challenge:
      'GreenLogistics entwickelt eine KI-gestuetzte Routenoptimierungssoftware fuer nachhaltige Logistik. Das Unternehmen brauchte KI-Spezialisten mit Erfahrung in Machine Learning und Optimierungsalgorithmen. In Wien: praktisch nicht zu finden.',
    solution:
      'Programmier-Anfang fand innerhalb von 8 Tagen zwei erfahrene Machine-Learning-Engineers und einen KI-Architekten mit Schwerpunkt Optimierung. Alle drei hatten relevante Branchenerfahrung in Logistik oder Supply Chain.',
    results: [
      'KI-Modell erreichte 94 % Genauigkeit bei Routenvorhersagen',
      'CO2-Einsparung der Kunden um durchschnittlich 23 % verbessert',
      'Entwicklungszeit um 4 Monate verkuerzt',
      '48 % Kostenersparnis gegenueber Wiener Gehaeltern',
    ],
    quote: 'Wir haetten diese KI-Expertise lokal nie gefunden. Programmier-Anfang hat uns Weltklasse-Talente geliefert, die unsere Vision verstanden haben.',
    quoteAuthor: 'T. Bauer',
    quoteTitle: 'Head of AI, GreenLogistics GmbH',
    teamSize: '3 Talente',
    timeToHire: '8 Tage',
    costSaving: '48%',
  },
  {
    company: 'EduStar AG',
    industry: 'EdTech',
    location: 'Muenchen',
    challenge:
      'EduStar entwickelt eine interaktive Lernplattform fuer Schulen im DACH-Raum. Nach einer Finanzierungsrunde musste das Team schnell von 5 auf 15 Entwickler wachsen, um die ambitionierte Produkt-Roadmap umzusetzen. Und das in Muenchen, einem der teuersten Tech-Maerkte Deutschlands.',
    solution:
      'In 4 Wochen baute Programmier-Anfang ein komplettes Remote-Team auf: 5 Frontend-Entwickler (React/TypeScript), 3 Backend-Entwickler (Python/Django), einen Mobile-Entwickler (Flutter) und einen Projektmanager. Ein dedizierter Account-Manager koordinierte den gesamten Prozess.',
    results: [
      '10 neue Teammitglieder in unter 4 Wochen eingestellt',
      'MVP 6 Wochen frueher als geplant fertiggestellt',
      '60 % Kostenersparnis im Vergleich zu Muenchner Gehaeltern',
      'Plattform wird von ueber 200 Schulen in der DACH-Region genutzt',
    ],
    quote: 'Ohne Programmier-Anfang haetten wir unser Team nie so schnell aufbauen koennen. Die Qualitaet der Talente ist beeindruckend, und der Prozess war unkompliziert.',
    quoteAuthor: 'A. Richter',
    quoteTitle: 'Co-Founder & CEO, EduStar AG',
    teamSize: '10 Talente',
    timeToHire: '4 Wochen',
    costSaving: '60%',
  },
];

export default function FallstudienPage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Fallstudien', href: '/fallstudien' },
  ];

  const relatedLinks = [
    { label: "So funktioniert's", href: '/so-funktionierts' },
    { label: 'Preise', href: '/preise' },
    { label: 'Ersparnis berechnen', href: '/ersparnis-berechnen' },
    { label: 'Entwickler einstellen', href: '/hire-developers' },
    { label: 'Designer einstellen', href: '/hire-designers' },
    { label: 'Marketer einstellen', href: '/hire-marketers' },
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
              Fallstudien
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Wie bauen Unternehmen im DACH-Raum mit Programmier-Anfang ihre
              Remote-Teams auf? Hier sind konkrete Beispiele mit echten Zahlen.
            </p>
          </div>
        </div>
      </section>

      {/* Stats overview */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">800+</div>
              <p className="text-sm text-gray-600 mt-1">Erfolgreiche Einstellungen</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">58%</div>
              <p className="text-sm text-gray-600 mt-1">Durchschnittliche Ersparnis</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">72h</div>
              <p className="text-sm text-gray-600 mt-1">Bis zum ersten Profil</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">96%</div>
              <p className="text-sm text-gray-600 mt-1">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <article key={study.company} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gray-900 text-white p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-sm text-[rgb(0,159,255)] font-semibold mb-1">Fallstudie #{index + 1}</p>
                      <h2 className="text-2xl font-bold">{study.company}</h2>
                      <p className="text-white/70 mt-1">{study.industry} | {study.location}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[rgb(23,162,69)]">{study.costSaving}</div>
                        <p className="text-xs text-white/60">Ersparnis</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[rgb(0,159,255)]">{study.timeToHire}</div>
                        <p className="text-xs text-white/60">Time-to-Hire</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{study.teamSize}</div>
                        <p className="text-xs text-white/60">Teamgroesse</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Herausforderung</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Loesung</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Ergebnisse</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-gray-600">
                          <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[rgb(0,159,255)]">
                    <p className="text-gray-700 italic leading-relaxed mb-3">
                      &ldquo;{study.quote}&rdquo;
                    </p>
                    <p className="text-sm text-gray-500 font-semibold">
                      -- {study.quoteAuthor}, {study.quoteTitle}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks title="Verwandte Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Werden Sie unsere naechste Erfolgsgeschichte"
        subheading="Starten Sie risikofrei und erhalten Sie innerhalb von 72 Stunden gepruefte Kandidatenprofile."
        ctaText="Jetzt starten"
      />

      <Footer />
    </div>
  );
}
