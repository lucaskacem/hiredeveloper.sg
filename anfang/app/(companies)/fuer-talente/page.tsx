import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Fuer Talente | Remote arbeiten mit Top-Unternehmen | Programmier-Anfang',
  description:
    'Werden Sie Teil des Programmier-Anfang-Netzwerks und arbeiten Sie remote fuer fuehrende Unternehmen im DACH-Raum. Gepruefte Remote-Jobs, faire Bezahlung, flexible Arbeitsmodelle.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Fuer Talente - Programmier-Anfang',
    description: 'Remote-Karriere starten: Arbeiten Sie fuer Top-Unternehmen aus dem DACH-Raum.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FuerTalentePage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Fuer Talente', href: '/fuer-talente' },
  ];

  const relatedLinks = [
    { label: 'Remote-Jobs', href: '/remote-jobs' },
    { label: 'Remote-Unternehmen', href: '/remote-unternehmen' },
    { label: 'Talent-Ressourcen', href: '/talent-ressourcen' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Entwickler einstellen', href: '/hire-developers' },
    { label: 'Designer einstellen', href: '/hire-designers' },
    { label: 'Marketer einstellen', href: '/hire-marketers' },
    { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
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
              Arbeiten Sie remote fuer Top-Unternehmen
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Treten Sie dem Programmier-Anfang-Netzwerk bei und erhalten Sie Zugang zu
              exklusiven Remote-Jobs bei fuehrenden Unternehmen im DACH-Raum. Faire Bezahlung,
              flexible Arbeitsmodelle und spannende Projekte warten auf Sie.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Jetzt bewerben
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Warum Programmier-Anfang?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Wir bringen Sie mit den besten Unternehmen zusammen und sorgen dafuer, dass die Zusammenarbeit laeuft.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exklusive Auftraege</h3>
              <p className="text-gray-600 leading-relaxed">
                Zugang zu spannenden Projekten bei Startups, KMUs und Konzernen im DACH-Raum.
                Viele Auftraege sind exklusiv und werden nicht oeffentlich ausgeschrieben.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faire Bezahlung</h3>
              <p className="text-gray-600 leading-relaxed">
                Wir achten auf faire Verguetungen. Unsere Talente verdienen
                ueberdurchschnittlich fuer ihren Standort, weil gute Arbeit gutes Geld verdient.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Remote</h3>
              <p className="text-gray-600 leading-relaxed">
                Arbeiten Sie von ueberall auf der Welt. Homeoffice, Co-Working-Space
                oder Balkon mit Meerblick: Sie entscheiden, wo Sie am besten arbeiten.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Modelle</h3>
              <p className="text-gray-600 leading-relaxed">
                Freelance, Teilzeit oder Vollzeit. Waehlen Sie, was zu Ihrem
                Lebensstil passt, und wechseln Sie flexibel zwischen Projekten.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Karriereentwicklung</h3>
              <p className="text-gray-600 leading-relaxed">
                Arbeiten Sie an anspruchsvollen Projekten und entwickeln Sie Ihre Faehigkeiten
                weiter. Unsere Unternehmen setzen modernste Technologien ein.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unterstuetzung</h3>
              <p className="text-gray-600 leading-relaxed">
                Unser Talent-Success-Team begleitet Sie: von der Bewerbung ueber das
                Onboarding bis zur laufenden Zusammenarbeit. Sie sind nie allein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            So werden Sie Teil unseres Netzwerks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bewerben</h3>
              <p className="text-gray-600 text-sm">
                Reichen Sie Ihr Profil, Portfolio und relevante Erfahrungen ein. Der Prozess dauert nur wenige Minuten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pruefung</h3>
              <p className="text-gray-600 text-sm">
                Durchlaufen Sie unsere technische Bewertung, Kommunikationstests und ein Experten-Interview.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Matching</h3>
              <p className="text-gray-600 text-sm">
                Unser Team matcht Sie mit passenden Unternehmen und Projekten, die Ihren Faehigkeiten und Wuenschen entsprechen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Starten</h3>
              <p className="text-gray-600 text-sm">
                Nach erfolgreichem Interview mit dem Unternehmen starten Sie die Zusammenarbeit. Wir kuemmern uns um den Papierkram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Wen wir suchen
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Wir suchen erfahrene Leute, die Remote-Arbeit lieben und richtig gute Ergebnisse abliefern.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entwickler</h3>
              <p className="text-gray-600 text-sm">
                Full-Stack, Frontend, Backend, Mobile, DevOps, KI: alle Technologien und Frameworks.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Designer</h3>
              <p className="text-gray-600 text-sm">
                UX, UI, Produkt, Grafik, Brand, Interaktion. Kreative Koepfe gesucht.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marketer</h3>
              <p className="text-gray-600 text-sm">
                SEO, Content, Growth, Performance, Social Media. Datengetrieben und ergebnisorientiert.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Produktmanager</h3>
              <p className="text-gray-600 text-sm">
                Produktstrategie, Roadmap, Stakeholder-Management. Erfahrene PMs mit Hands-on-Mentalitaet.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Projektmanager</h3>
              <p className="text-gray-600 text-sm">
                Agile, Scrum, PMP: zertifizierte Projektmanager fuer anspruchsvolle Projekte.
              </p>
            </a>
            <a href="/remote-jobs" className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assistenten</h3>
              <p className="text-gray-600 text-sm">
                Virtuelle und Executive Assistenten mit starken organisatorischen Faehigkeiten.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">350K+</div>
              <p className="text-sm text-gray-600 mt-1">Talente im Netzwerk</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">50+</div>
              <p className="text-sm text-gray-600 mt-1">Laender vertreten</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">800+</div>
              <p className="text-sm text-gray-600 mt-1">Erfolgreiche Platzierungen</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">4.8/5</div>
              <p className="text-sm text-gray-600 mt-1">Talent-Zufriedenheit</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks title="Weitere Seiten fuer Talente" links={relatedLinks} />

      <FinalCTA
        heading="Starten Sie Ihre Remote-Karriere"
        subheading="Bewerben Sie sich jetzt und erhalten Sie Zugang zu exklusiven Remote-Jobs bei Top-Unternehmen."
        ctaText="Jetzt bewerben"
      />

      <Footer />
    </div>
  );
}
