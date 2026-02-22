import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Remote-Jobs | Fuer Entwickler, Designer, Marketer & mehr | Programmier-Anfang',
  description:
    'Finden Sie Remote-Jobs bei Unternehmen im DACH-Raum. Entwickler, Designer, Marketer, Produktmanager und mehr. Alle Kategorien, faire Bezahlung, 100% remote.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Remote-Jobs - Programmier-Anfang',
    description: 'Finden Sie Remote-Jobs in Entwicklung, Design, Marketing und mehr bei Top-Unternehmen.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface JobCategory {
  title: string;
  roles: string[];
  salary: string;
  demand: string;
  href: string;
}

const jobCategories: JobCategory[] = [
  {
    title: 'Softwareentwicklung',
    roles: ['Full-Stack-Entwickler', 'Frontend-Entwickler', 'Backend-Entwickler', 'Mobile-App-Entwickler', 'DevOps-Engineer', 'KI/ML-Entwickler'],
    salary: '3.000 - 12.000 USD/Monat',
    demand: 'Sehr hoch',
    href: '/hire-developers',
  },
  {
    title: 'Design',
    roles: ['UX-Designer', 'UI-Designer', 'Produktdesigner', 'Grafikdesigner', 'Brand-Designer', 'Interaktionsdesigner'],
    salary: '2.500 - 10.000 USD/Monat',
    demand: 'Hoch',
    href: '/hire-designers',
  },
  {
    title: 'Marketing',
    roles: ['SEO-Experte', 'Content Marketer', 'Growth Marketer', 'Social Media Manager', 'Performance Marketer', 'E-Mail-Marketer'],
    salary: '2.000 - 8.000 USD/Monat',
    demand: 'Hoch',
    href: '/hire-marketers',
  },
  {
    title: 'Produktmanagement',
    roles: ['Product Manager', 'Technical Product Manager', 'Product Owner', 'KI-Produktmanager', 'Daten-Produktmanager'],
    salary: '3.500 - 12.000 USD/Monat',
    demand: 'Hoch',
    href: '/hire-product-managers',
  },
  {
    title: 'Projektmanagement',
    roles: ['Projektmanager', 'Scrum Master', 'Programm-Manager', 'Agile Coach', 'Delivery Manager'],
    salary: '3.000 - 10.000 USD/Monat',
    demand: 'Mittel-Hoch',
    href: '/hire-project-managers',
  },
  {
    title: 'Assistenz',
    roles: ['Virtueller Assistent', 'Executive Assistant', 'Administrativer Assistent', 'Datenerfasser', 'Recherche-Assistent'],
    salary: '1.500 - 5.000 USD/Monat',
    demand: 'Mittel',
    href: '/hire-assistants',
  },
];

export default function RemoteJobsPage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Fuer Talente', href: '/fuer-talente' },
    { label: 'Remote-Jobs', href: '/remote-jobs' },
  ];

  const relatedLinks = [
    { label: 'Fuer Talente - Uebersicht', href: '/fuer-talente' },
    { label: 'Remote-Unternehmen', href: '/remote-unternehmen' },
    { label: 'Talent-Ressourcen', href: '/talent-ressourcen' },
    { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
    { label: 'Entwickler einstellen', href: '/hire-developers' },
    { label: 'Designer einstellen', href: '/hire-designers' },
    { label: 'FAQ', href: '/faq' },
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
              Remote-Jobs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Remote-Jobs in Softwareentwicklung, Design, Marketing,
              Produktmanagement und mehr. Arbeiten Sie fuer Unternehmen im DACH-Raum,
              von ueberall auf der Welt.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Jobs entdecken
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Offene Remote-Job-Kategorien
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Finden Sie Ihre naechste Remote-Position in einer dieser Kategorien.
          </p>

          <div className="space-y-8">
            {jobCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.roles.map((role) => (
                          <span key={role} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 min-w-[200px]">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Gehaltsspanne</p>
                        <p className="text-sm font-semibold text-gray-900">{category.salary}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Nachfrage</p>
                        <p className="text-sm font-semibold text-[rgb(23,162,69)]">{category.demand}</p>
                      </div>
                      <a
                        href={category.href}
                        className="mt-2 inline-block px-4 py-2 text-sm font-semibold text-[rgb(0,159,255)] border border-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,159,255)] hover:text-white transition-all text-center"
                      >
                        Mehr erfahren
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why remote */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Warum Remote arbeiten?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Remote-Arbeit hat viele Vorteile, fuer Ihre Karriere und fuer Ihr Leben.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#127758;</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ortsunabhaengig</h3>
              <p className="text-gray-600 text-sm">
                Arbeiten Sie von jedem Ort der Welt. Kein Pendeln, kein Umzug noetig.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#9200;</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Zeiten</h3>
              <p className="text-gray-600 text-sm">
                Gestalten Sie Ihren Arbeitstag flexibel um Ihr Leben herum.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#128176;</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hoeheres Einkommen</h3>
              <p className="text-gray-600 text-sm">
                Verdienen Sie DACH-nahe Gehaelter, unabhaengig von Ihrem lokalen Markt.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#128640;</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Karriere-Boost</h3>
              <p className="text-gray-600 text-sm">
                Arbeiten Sie an anspruchsvollen Projekten mit modernsten Technologien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            Was unsere Talente sagen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed mb-4">
                &ldquo;Seit ich ueber Programmier-Anfang arbeite, habe ich spannende Projekte bei
                deutschen Startups betreut und mein Einkommen verdoppelt. Die Flexibilitaet
                ist unschlagbar.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-900">A.K., Senior React-Entwickler</p>
              <p className="text-xs text-gray-500">Kiew, Ukraine</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed mb-4">
                &ldquo;Die Qualitaet der Unternehmen und Projekte ist hervorragend. Ich arbeite
                seit 2 Jahren fuer eine Schweizer Firma und fuehle mich als vollwertiges
                Teammitglied.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-900">M.S., UX-Designerin</p>
              <p className="text-xs text-gray-500">Buenos Aires, Argentinien</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed mb-4">
                &ldquo;Programmier-Anfang hat mir geholfen, von Freelance-Auftraegen zu einer
                stabilen Vollzeit-Remote-Position bei einem Muenchner Unternehmen zu wechseln.
                Beste Entscheidung.&rdquo;
              </p>
              <p className="text-sm font-semibold text-gray-900">D.R., DevOps Engineer</p>
              <p className="text-xs text-gray-500">Bukarest, Rumaenien</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[40px] font-bold text-gray-900 mb-6">
              Bereit fuer Ihren naechsten Remote-Job?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Bewerben Sie sich jetzt und unser Team wird Sie mit passenden Unternehmen
              und Projekten matchen. Der Bewerbungsprozess dauert nur wenige Minuten.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
                Jetzt bewerben
              </OpenModalButton>
              <a
                href="/fuer-talente"
                className="px-8 py-4 text-lg font-semibold text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks title="Weitere Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Ihre Remote-Karriere beginnt hier"
        subheading="Treten Sie unserem Netzwerk bei und arbeiten Sie fuer Top-Unternehmen im DACH-Raum."
        ctaText="Jetzt bewerben"
      />

      <Footer />
    </div>
  );
}
