import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Ressourcen fuer Unternehmen | Guides, Tools & Blog | Programmier-Anfang',
  description:
    'Entdecken Sie unsere Ressourcen fuer Unternehmen: Einstellungsguides, Kostenrechner, Blog-Artikel, Interview-Fragen und mehr. Alles fuer erfolgreiches Remote-Hiring.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ressourcen fuer Unternehmen - Programmier-Anfang',
    description: 'Guides, Tools, Blog-Artikel und mehr fuer erfolgreiches Remote-Hiring.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RessourcenPage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Ressourcen', href: '/ressourcen' },
  ];

  const relatedLinks = [
    { label: "So funktioniert's", href: '/so-funktionierts' },
    { label: 'Preise', href: '/preise' },
    { label: 'Fallstudien', href: '/fallstudien' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Talent-Ressourcen', href: '/talent-ressourcen' },
    { label: 'Entwickler einstellen', href: '/hire-developers' },
    { label: 'Designer einstellen', href: '/hire-designers' },
    { label: 'Marketer einstellen', href: '/hire-marketers' },
  ];

  const tools = [
    {
      title: 'Gehalt-Rechner',
      description: 'Vergleichen Sie Gehaelter fuer verschiedene Rollen und Standorte weltweit.',
      href: '/tools/gehalt-rechner',
    },
    {
      title: 'Team-Kosten-Rechner',
      description: 'Berechnen Sie die Gesamtkosten fuer Ihr Remote-Team und sehen Sie Ihre Ersparnis.',
      href: '/tools/team-kosten-rechner',
    },
    {
      title: 'Technologie-Vergleich',
      description: 'Vergleichen Sie Technologien und Frameworks fuer Ihr naechstes Projekt.',
      href: '/tools/technologie-vergleich',
    },
    {
      title: 'Interview-Fragen Generator',
      description: 'Generieren Sie massgeschneiderte Interview-Fragen fuer verschiedene Rollen.',
      href: '/tools/interview-fragen-generator',
    },
    {
      title: 'Projekt-Schaetzung',
      description: 'Schaetzen Sie Aufwand und Kosten fuer Ihr Softwareprojekt.',
      href: '/tools/projekt-schaetzung',
    },
    {
      title: 'Skill-Assessment',
      description: 'Bewerten Sie die technischen Faehigkeiten Ihrer Kandidaten.',
      href: '/tools/skill-assessment',
    },
  ];

  const guides = [
    {
      title: "So funktioniert's",
      description: 'Erfahren Sie in 3 einfachen Schritten, wie Sie ueber Programmier-Anfang einstellen.',
      href: '/so-funktionierts',
    },
    {
      title: 'Ersparnis berechnen',
      description: 'Detaillierter Kostenvergleich zwischen lokalen und Remote-Einstellungen.',
      href: '/ersparnis-berechnen',
    },
    {
      title: 'Preise',
      description: 'Transparentes Preismodell: $0 bis zur Einstellung, dann faire Vermittlungsgebuehr.',
      href: '/preise',
    },
    {
      title: 'Fallstudien',
      description: 'Erfolgsgeschichten von Unternehmen, die ueber Programmier-Anfang eingestellt haben.',
      href: '/fallstudien',
    },
    {
      title: 'FAQ',
      description: 'Antworten auf die haeufigsten Fragen zu Programmier-Anfang.',
      href: '/faq',
    },
    {
      title: 'Anbietervergleich',
      description: 'Wie Programmier-Anfang im Vergleich zu anderen Plattformen abschneidet.',
      href: '/vergleich',
    },
  ];

  const blogArticles = [
    {
      title: 'Freelance-Entwickler finden: 21+ Expertentipps & Strategien',
      description: 'Bewaehrte Strategien, um die besten Freelance-Entwickler fuer Ihr Projekt zu finden.',
      href: '/employer-blog/how-to-find-developers',
      image: '/images/blog/people-search.svg',
    },
    {
      title: 'Ist Ihr Entwickler bereit fuer Remote-Arbeit?',
      description: 'Interview-Fragen, die zeigen, ob ein Kandidat fuer Remote-Arbeit geeignet ist.',
      href: '/employer-blog/remote-ready-interview-questions',
      image: '/images/blog/remote-team.svg',
    },
    {
      title: 'Interviewfragen fuer Software-Ingenieure',
      description: 'Die besten Fragen fuer technische Interviews mit Softwareentwicklern.',
      href: '/employer-blog/software-engineer-interview-questions',
      image: '/images/blog/online-test.svg',
    },
    {
      title: 'Technisches Remote-Interview durchfuehren',
      description: 'Best Practices fuer die Durchfuehrung technischer Interviews im Remote-Setting.',
      href: '/employer-blog/how-to-conduct-a-remote-technical-interview',
      image: '/images/blog/code-review.svg',
    },
    {
      title: 'Remote-Engineering-Team aufbauen & pflegen',
      description: 'Praxisleitfaden fuer den Aufbau eines erfolgreichen verteilten Entwicklungsteams.',
      href: '/employer-blog/distributed-software-engineering-team',
      image: '/images/blog/team-collaboration.svg',
    },
    {
      title: 'Remote-Entwicklungsteams managen',
      description: 'Strategien und Tools fuer die effektive Fuehrung von Remote-Teams.',
      href: '/employer-blog/how-to-manage-developers-remote-team',
      image: '/images/blog/project-completed.svg',
    },
  ];

  const hiringPages = [
    { title: 'Entwickler einstellen', description: 'Full-Stack, Frontend, Backend, Mobile, DevOps, KI und mehr.', href: '/hire-developers' },
    { title: 'Designer einstellen', description: 'UX, UI, Produkt, Grafik, Brand und weitere Designrollen.', href: '/hire-designers' },
    { title: 'Marketer einstellen', description: 'SEO, Content, Growth, Performance und Social Media Experten.', href: '/hire-marketers' },
    { title: 'Produktmanager einstellen', description: 'Erfahrene PMs fuer Produktstrategie und Roadmap.', href: '/hire-product-managers' },
    { title: 'Projektmanager einstellen', description: 'Zertifizierte Projektmanager fuer komplexe Projekte.', href: '/hire-project-managers' },
    { title: 'Assistenten einstellen', description: 'Virtuelle und Executive Assistenten fuer Ihren Alltag.', href: '/hire-assistants' },
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
              Ressourcen fuer Unternehmen
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Alles, was Sie fuer erfolgreiches Remote-Hiring brauchen: Interaktive Tools,
              Einstellungsguides, Blog-Artikel und mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Interaktive Tools
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Unsere kostenlosen Tools helfen Ihnen, bei der Einstellung die richtigen Entscheidungen zu treffen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/tools" className="text-[rgb(0,159,255)] hover:underline font-medium">
              Alle Tools anzeigen
            </a>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Guides & Leitfaeden
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Mehr ueber Remote-Hiring erfahren? Unsere Leitfaeden bringen Sie auf den neuesten Stand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Blog-Artikel
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Praxis-Tipps und Expertenwissen rund um Remote-Einstellungen und Teamfuehrung.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="block bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center p-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Pages */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Talente nach Kategorie
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Finden Sie die richtigen Talente fuer jede Rolle in Ihrem Team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{page.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{page.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks title="Weitere Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Bereit, Ihr Remote-Team aufzubauen?"
        subheading="Erhalten Sie innerhalb von 72 Stunden gepruefte Kandidatenprofile. Risikofrei und ohne Vorabkosten."
        ctaText="Jetzt starten"
      />

      <Footer />
    </div>
  );
}
