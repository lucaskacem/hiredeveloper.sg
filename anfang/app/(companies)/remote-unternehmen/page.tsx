import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Remote-Unternehmen | Arbeiten Sie fuer DACH-Firmen | Programmier-Anfang',
  description:
    'Entdecken Sie Remote-Unternehmen im DACH-Raum, die ueber Programmier-Anfang einstellen. Startups, KMUs und Konzerne aus Deutschland, Oesterreich und der Schweiz.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Remote-Unternehmen - Programmier-Anfang',
    description: 'Unternehmen im DACH-Raum, die Remote-Talente ueber Programmier-Anfang einstellen.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CompanyType {
  type: string;
  description: string;
  examples: string[];
  roles: string[];
}

const companyTypes: CompanyType[] = [
  {
    type: 'Tech-Startups',
    description:
      'Schnell wachsende Startups, die neue Produkte entwickeln und zügig skalieren muessen. Von Pre-Seed bis Series C: Hier arbeiten Sie an vorderster Front.',
    examples: ['FinTech', 'HealthTech', 'EdTech', 'PropTech', 'FoodTech'],
    roles: ['Full-Stack-Entwickler', 'Mobile-Entwickler', 'Produktdesigner', 'Growth Marketer'],
  },
  {
    type: 'Mittelstand & KMUs',
    description:
      'Etablierte Unternehmen, die ihre digitale Transformation vorantreiben. Der deutsche Mittelstand bietet stabile Auftraege, langfristige Perspektiven und anspruchsvolle Projekte.',
    examples: ['Industrie 4.0', 'E-Commerce', 'Logistik', 'Fertigung', 'Handel'],
    roles: ['Backend-Entwickler', 'DevOps-Engineer', 'UX-Designer', 'Projektmanager'],
  },
  {
    type: 'Software-Unternehmen',
    description:
      'SaaS-Firmen und Software-Haeuser, die ihre Entwicklungsteams mit Remote-Experten verstaerken. Moderne Tech-Stacks, agile Methoden und spannende Produktarbeit.',
    examples: ['SaaS', 'Enterprise Software', 'Developer Tools', 'Cloud Services', 'Security'],
    roles: ['Senior-Entwickler', 'Tech Lead', 'Produktmanager', 'QA-Engineer'],
  },
  {
    type: 'Agenturen & Beratungen',
    description:
      'Digitalagenturen und Beratungshaeuser, die fuer ihre Kundenprojekte spezialisierte Remote-Talente benoetigen. Abwechslungsreiche Projekte und staendig neue Herausforderungen.',
    examples: ['Webagentur', 'Designagentur', 'Marketingagentur', 'IT-Beratung', 'Strategieberatung'],
    roles: ['Frontend-Entwickler', 'Content Marketer', 'Grafikdesigner', 'SEO-Experte'],
  },
  {
    type: 'Konzerne & Grossunternehmen',
    description:
      'Internationale Konzerne, die Remote-Talente fuer Spezial- und Grossprojekte einstellen. Enterprise-Umgebungen, strukturierte Prozesse und langfristige Engagements.',
    examples: ['Automotive', 'Banken & Versicherungen', 'Pharma', 'Telekommunikation', 'Energie'],
    roles: ['Cloud-Architekt', 'KI-Entwickler', 'Programm-Manager', 'Data Engineer'],
  },
];

export default function RemoteUnternehmenPage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Fuer Talente', href: '/fuer-talente' },
    { label: 'Remote-Unternehmen', href: '/remote-unternehmen' },
  ];

  const relatedLinks = [
    { label: 'Fuer Talente - Uebersicht', href: '/fuer-talente' },
    { label: 'Remote-Jobs', href: '/remote-jobs' },
    { label: 'Talent-Ressourcen', href: '/talent-ressourcen' },
    { label: 'Standorte', href: '/standorte' },
    { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Fallstudien', href: '/fallstudien' },
    { label: "So funktioniert's", href: '/so-funktionierts' },
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
            <p className="text-[rgb(0,159,255)] font-semibold text-lg mb-4">Fuer Talente</p>
            <h1 className="text-[48px] font-bold text-gray-900 mb-6">
              Remote-Unternehmen
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Welche Unternehmen stellen ueber Programmier-Anfang ein?
              Von Startups bis zu Konzernen, alle aus dem DACH-Raum. Hier ein Ueberblick.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Jetzt bewerben
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">500+</div>
              <p className="text-sm text-gray-600 mt-1">Unternehmen vertrauen uns</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">3</div>
              <p className="text-sm text-gray-600 mt-1">Laender (DACH)</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">15+</div>
              <p className="text-sm text-gray-600 mt-1">Branchen abgedeckt</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">96%</div>
              <p className="text-sm text-gray-600 mt-1">Wiederbeauftragungsrate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Types */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Welche Unternehmen stellen ueber uns ein?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Unternehmen aus dem gesamten DACH-Raum setzen auf Programmier-Anfang fuer ihre Remote-Einstellungen.
          </p>

          <div className="space-y-8">
            {companyTypes.map((company) => (
              <div key={company.type} className="bg-gray-50 rounded-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{company.type}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{company.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Branchen</p>
                    <div className="flex flex-wrap gap-2">
                      {company.examples.map((example) => (
                        <span key={example} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Haeufig gesuchte Rollen</p>
                    <div className="flex flex-wrap gap-2">
                      {company.roles.map((role) => (
                        <span key={role} className="px-3 py-1 bg-[rgb(0,159,255)]/10 text-[rgb(0,159,255)] text-sm rounded-full">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What companies offer */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Was diese Unternehmen bieten
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Unsere Partner-Unternehmen bieten attraktive Konditionen fuer Remote-Talente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wettbewerbsfaehige Gehaelter</h3>
              <p className="text-gray-600 leading-relaxed">
                Unsere Unternehmen zahlen faire, marktgerechte Gehaelter. Oft liegen sie deutlich ueber
                dem lokalen Durchschnitt.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Moderne Tech-Stacks</h3>
              <p className="text-gray-600 leading-relaxed">
                React, TypeScript, Python, Kubernetes, KI: Arbeiten Sie mit aktuellen
                Technologien und Frameworks.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agile Arbeitsweisen</h3>
              <p className="text-gray-600 leading-relaxed">
                Scrum, Kanban, Lean. Die meisten Unternehmen arbeiten agil und setzen
                auf eigenverantwortliches Arbeiten.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Langfristige Perspektiven</h3>
              <p className="text-gray-600 leading-relaxed">
                Viele Engagements beginnen als Freelance und entwickeln sich zu langfristigen
                Vollzeit-Positionen mit Karriereentwicklung.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remote-First-Kultur</h3>
              <p className="text-gray-600 leading-relaxed">
                Unsere Unternehmen haben eine etablierte Remote-Kultur mit klaren Prozessen,
                guten Tools und asynchroner Kommunikation.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">DSGVO & Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Alle Vertraege sind rechtskonform. NDA, IP-Schutz und Datenschutz sind
                standardmaessig enthalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Standorte unserer Unternehmen
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Unsere Unternehmen haben ihren Sitz in den wichtigsten Staedten des DACH-Raums.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { city: 'Berlin', href: '/standorte/deutschland/berlin/berlin' },
              { city: 'Muenchen', href: '/standorte/deutschland/bayern/muenchen' },
              { city: 'Hamburg', href: '/standorte/deutschland/hamburg/hamburg' },
              { city: 'Frankfurt', href: '/standorte/deutschland/hessen/frankfurt' },
              { city: 'Koeln', href: '/standorte/deutschland/nordrhein-westfalen/koeln' },
              { city: 'Stuttgart', href: '/standorte/deutschland/baden-wuerttemberg/stuttgart' },
              { city: 'Duesseldorf', href: '/standorte/deutschland/nordrhein-westfalen/duesseldorf' },
              { city: 'Wien', href: '/standorte/oesterreich/wien/wien' },
              { city: 'Zuerich', href: '/standorte/schweiz/zuerich/zuerich' },
              { city: 'Genf', href: '/standorte/schweiz/genf/genf' },
              { city: 'Basel', href: '/standorte/schweiz/basel-stadt/basel' },
              { city: 'Alle Standorte', href: '/standorte' },
            ].map((loc) => (
              <a
                key={loc.city}
                href={loc.href}
                className="px-4 py-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md transition-all border border-gray-200 text-center"
              >
                {loc.city}
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks title="Weitere Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Arbeiten Sie fuer fuehrende DACH-Unternehmen"
        subheading="Bewerben Sie sich jetzt und erhalten Sie Zugang zu exklusiven Remote-Positionen."
        ctaText="Jetzt bewerben"
      />

      <Footer />
    </div>
  );
}
