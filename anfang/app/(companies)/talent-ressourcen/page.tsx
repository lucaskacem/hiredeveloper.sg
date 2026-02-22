import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Ressourcen fuer Talente | Guides, Tools & Tipps | Programmier-Anfang',
  description:
    'Ressourcen fuer Remote-Talente: Gehalt-Rechner, Bewerbungstipps, Interview-Vorbereitung, Remote-Arbeit-Guides und mehr. Alles fuer Ihre erfolgreiche Remote-Karriere.',
  robots: { index: false, follow: false },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ressourcen fuer Talente - Programmier-Anfang',
    description: 'Guides, Tools und Tipps fuer eine erfolgreiche Remote-Karriere.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function TalentRessourcenPage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Fuer Talente', href: '/fuer-talente' },
    { label: 'Talent-Ressourcen', href: '/talent-ressourcen' },
  ];

  const relatedLinks = [
    { label: 'Fuer Talente - Uebersicht', href: '/fuer-talente' },
    { label: 'Remote-Jobs', href: '/remote-jobs' },
    { label: 'Remote-Unternehmen', href: '/remote-unternehmen' },
    { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
    { label: 'Skill-Assessment', href: '/tools/skill-assessment' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Ressourcen fuer Unternehmen', href: '/ressourcen' },
    { label: "So funktioniert's", href: '/so-funktionierts' },
  ];

  const tools = [
    {
      title: 'Gehalt-Rechner',
      description: 'Vergleichen Sie Gehaelter fuer verschiedene Rollen und erfahren Sie, was Sie erwarten koennen.',
      href: '/tools/gehalt-rechner',
    },
    {
      title: 'Skill-Assessment',
      description: 'Testen Sie Ihre technischen Faehigkeiten und bereiten Sie sich auf Bewertungen vor.',
      href: '/tools/skill-assessment',
    },
    {
      title: 'Technologie-Vergleich',
      description: 'Vergleichen Sie Technologien und finden Sie heraus, welche Skills am gefragtesten sind.',
      href: '/tools/technologie-vergleich',
    },
  ];

  const interviewGuides = [
    {
      title: 'Remote-Interview vorbereiten',
      description: 'Praktische Tipps, damit Sie in technischen und persoenlichen Remote-Interviews punkten.',
      tips: [
        'Testen Sie Ihre Internetverbindung, Kamera und Mikrofon vorab',
        'Waehlen Sie einen ruhigen, gut beleuchteten Ort',
        'Bereiten Sie konkrete Beispiele aus frueheren Projekten vor',
        'Recherchieren Sie das Unternehmen und seine Produkte gruendlich',
        'Haben Sie Fragen an das Unternehmen vorbereitet',
      ],
    },
    {
      title: 'Technisches Assessment meistern',
      description: 'Was Sie tun koennen, um im technischen Teil zu glaenzen.',
      tips: [
        'Ueben Sie Live-Coding auf Plattformen wie LeetCode oder HackerRank',
        'Erklaeren Sie Ihren Denkprozess laut waehrend des Codings',
        'Fragen Sie nach Klaerung, wenn die Aufgabe unklar ist',
        'Schreiben Sie sauberen, lesbaren Code mit aussagekraeftigen Variablennamen',
        'Testen Sie Ihren Code mit verschiedenen Edge Cases',
      ],
    },
    {
      title: 'Portfolio optimal praesentieren',
      description: 'Machen Sie einen starken ersten Eindruck mit Ihrem Portfolio.',
      tips: [
        'Zeigen Sie 3-5 Ihrer besten und relevantesten Projekte',
        'Beschreiben Sie Ihre Rolle und Ihren Beitrag bei jedem Projekt',
        'Verwenden Sie messbare Ergebnisse (Zahlen, Metriken, Impact)',
        'Halten Sie Ihr Portfolio aktuell und gut organisiert',
        'Fuegen Sie Links zu Live-Demos oder GitHub-Repos hinzu',
      ],
    },
  ];

  const remoteWorkGuides = [
    {
      title: 'Produktiv im Homeoffice',
      content:
        'Richten Sie sich einen festen Arbeitsplatz ein, schaffen Sie Routinen und probieren Sie Techniken wie Pomodoro oder Time-Blocking. Ganz wichtig: Trennen Sie Arbeit und Freizeit raeumlich und zeitlich. Das macht den Unterschied bei der langfristigen Produktivitaet.',
    },
    {
      title: 'Kommunikation in Remote-Teams',
      content:
        'Lieber einmal zu viel schreiben als zu wenig. Fuer Nicht-Dringendes reichen Slack oder E-Mail. Komplexe Themen gehoeren in einen Video-Call. Status aktuell halten und Entscheidungen schriftlich festhalten, das spart spaeter Zeit.',
    },
    {
      title: 'Zeitzonenmanagement',
      content:
        'Wenn Sie fuer ein DACH-Unternehmen arbeiten, stellen Sie sicher, dass Sie mindestens 4-6 Stunden Ueberlappung mit CET/MEZ haben. Kommunizieren Sie Ihre Arbeitszeiten klar und nutzen Sie Tools wie World Time Buddy, um Meetings zu planen.',
    },
    {
      title: 'Berufliche Weiterentwicklung',
      content:
        'Bleiben Sie am Ball. Online-Kurse, Open-Source-Beitraege und Side Projects halten Ihre Skills frisch. Und gut zu wissen: Viele unserer Unternehmen foerdern Weiterbildung aktiv.',
    },
    {
      title: 'Networking als Remote-Profi',
      content:
        'Ein starkes Netzwerk geht auch remote. Virtuelle Meetups, Open-Source-Beitraege, Blog-Posts, Fach-Communities: Alles hilft. Ihr Netzwerk ist Ihr groesstes Kapital.',
    },
    {
      title: 'Work-Life-Balance',
      content:
        'Im Homeoffice verschwimmen Arbeit und Privatleben leicht. Klare Arbeitszeiten helfen. Machen Sie Pausen, bewegen Sie sich, pflegen Sie Hobbys. Wer gut abschaltet, arbeitet am naechsten Tag besser.',
    },
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
              Ressourcen fuer Talente
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Alles, was Sie fuer eine erfolgreiche Remote-Karriere brauchen: Tools, Guides,
              Interview-Tipps und Best Practices fuer Remote-Arbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Nuetzliche Tools
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Nutzen Sie unsere kostenlosen Tools fuer Ihre Karriereplanung.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Interview Guides */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Interview-Vorbereitung
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            So machen Sie sich fit fuer den Bewerbungsprozess bei Programmier-Anfang.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interviewGuides.map((guide) => (
              <div key={guide.title} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                <ul className="space-y-2">
                  {guide.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Work Guides */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Remote-Arbeit-Guides
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Best Practices fuer erfolgreiches Remote-Arbeiten.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remoteWorkGuides.map((guide) => (
              <div key={guide.title} className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{guide.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pruefungsprozess */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Unser Pruefungsprozess
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Was Sie beim Pruefverfahren von Programmier-Anfang erwartet.
          </p>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: '1',
                title: 'Profil-Bewertung',
                description: 'Wir prueefen Ihren Lebenslauf, Ihr Portfolio und Ihre Berufserfahrung. Achten Sie darauf, dass Ihr Profil komplett ist und Ihre besten Arbeiten zeigt.',
              },
              {
                step: '2',
                title: 'Technisches Assessment',
                description: 'Je nach Rolle absolvieren Sie einen technischen Test: Coding-Challenge, Design-Aufgabe oder Strategie-Case. Diese sind praxisnah und dauern in der Regel 1-2 Stunden.',
              },
              {
                step: '3',
                title: 'Kommunikations-Check',
                description: 'Remote-Arbeit steht und faellt mit guter Kommunikation. Deshalb pruefen wir, ob Sie klar und professionell kommunizieren koennen, auf Deutsch und/oder Englisch.',
              },
              {
                step: '4',
                title: 'Experten-Interview',
                description: 'Ein Fachexperte aus unserem Team fuehrt ein Gespraech mit Ihnen, um Ihre technischen Faehigkeiten, Soft Skills und Remote-Arbeit-Eignung zu bewerten.',
              },
              {
                step: '5',
                title: 'Aufnahme ins Netzwerk',
                description: 'Nach bestandener Pruefung werden Sie in unser Netzwerk aufgenommen und erhalten Zugang zu passenden Unternehmen und Projekten. Nur die besten 2 % schaffen es.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[rgb(0,159,255)]">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ for talents */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[40px] font-bold text-gray-900 text-center mb-12">
              Haeufige Fragen von Talenten
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Kostet die Bewerbung bei Programmier-Anfang etwas?',
                  a: 'Nein, alles kostenlos. Bewerbung, Pruefung und Aufnahme ins Netzwerk kosten Sie nichts. Wir verdienen erst, wenn Sie erfolgreich vermittelt werden.',
                },
                {
                  q: 'Wie hoch sind die typischen Gehaelter?',
                  a: 'Gehaelter variieren je nach Rolle, Erfahrung und Engagement-Modell. Als Entwickler koennen Sie zwischen 3.000 und 12.000 USD pro Monat verdienen. Nutzen Sie unseren Gehalt-Rechner fuer eine individuelle Schaetzung.',
                },
                {
                  q: 'Muss ich Deutsch sprechen?',
                  a: 'Nicht unbedingt. Viele unserer Unternehmen arbeiten auf Englisch. Deutschkenntnisse sind jedoch ein Vorteil und erhoehen Ihre Chancen, besonders bei Unternehmen, die direkten Kundenkontakt erwarten.',
                },
                {
                  q: 'Kann ich gleichzeitig fuer mehrere Unternehmen arbeiten?',
                  a: 'Bei Freelance-Engagements ja, solange es keine Interessenkonflikte gibt. Bei Vollzeit-Positionen arbeiten Sie exklusiv fuer ein Unternehmen.',
                },
                {
                  q: 'Wie werde ich bezahlt?',
                  a: 'Programmier-Anfang sorgt fuer puenktliche, sichere Zahlungen. Wir unterstuetzen verschiedene Zahlungsmethoden und Waehrungen. Die Abrechnung erfolgt transparent ueber unsere Plattform.',
                },
              ].map((item) => (
                <div key={item.q} className="p-6 bg-white rounded-lg border border-gray-200">
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

      <RelatedLinks title="Weitere Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Bereit fuer Ihre Remote-Karriere?"
        subheading="Bewerben Sie sich jetzt und werden Sie Teil unseres Netzwerks von Top-Talenten."
        ctaText="Jetzt bewerben"
      />

      <Footer />
    </div>
  );
}
