import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import FAQAccordion from './FAQAccordion';
import InlineCTABanner from '../components/InlineCTABanner';

export const metadata: Metadata = {
  title: 'Haufig gestellte Fragen (FAQ) | Programmier-Anfang',
  description:
    'Antworten auf die haufigsten Fragen zu Programmier-Anfang: Einstellung, Kosten, Entwicklerqualitat, Zusammenarbeit, Standorte und mehr. Alles, was Sie wissen mussen.',
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  FAQ data – 6 sections, 5-7 items each                             */
/* ------------------------------------------------------------------ */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    id: 'allgemein',
    title: 'Allgemein',
    items: [
      {
        question: 'Was ist Programmier-Anfang?',
        answer:
          'Programmier-Anfang ist eine Plattform, die Unternehmen mit geprüften Remote-Talenten weltweit verbindet. Wir vermitteln Entwickler, Designer, Marketer, Produktmanager, Projektmanager und Assistenten, sowohl als Freelancer als auch in Vollzeit.',
      },
      {
        question: 'Wie funktioniert Programmier-Anfang?',
        answer:
          'Sie beschreiben Ihren Bedarf und erhalten innerhalb von 72 Stunden eine Auswahl vorgeprüfter Kandidatenprofile. Nach Interviews und Auswahl starten Sie die Zusammenarbeit sofort. Programmier-Anfang kümmert sich um Qualitätssicherung, Verträge und Abrechnung.',
      },
      {
        question: 'Für wen ist Programmier-Anfang geeignet?',
        answer:
          'Programmier-Anfang ist ideal für Startups, KMUs und Konzerne im DACH-Raum, die schnell qualifizierte Remote-Talente brauchen, ohne monatelange Rekrutierungsprozesse. Egal ob Einzelprojekt oder ganzes Team: Wir haben die passende Lösung.',
      },
      {
        question: 'In welchen Branchen sind Ihre Talente erfahren?',
        answer:
          'Unsere Talente bringen Erfahrung aus vielen Branchen mit: Fintech, E-Commerce, SaaS, Gesundheitswesen, Logistik, Medien, Bildung, Industrie 4.0 und mehr. Wir matchen Sie gezielt mit Leuten, die Ihre Branche kennen.',
      },
      {
        question: 'Wie unterscheidet sich Programmier-Anfang von klassischen Personalvermittlungen?',
        answer:
          'Klassische Vermittler arbeiten anders. Wir konzentrieren uns auf geprüfte Remote-Talente und haben ein strenges Auswahlverfahren: Nur die besten 2 % schaffen es in unser Netzwerk. Sie zahlen erst bei erfolgreicher Einstellung, ohne Vorabgebühren oder langfristige Verträge.',
      },
      {
        question: 'Kann ich Programmier-Anfang kostenlos testen?',
        answer:
          'Ja. Registrierung und Anfrage kosten nichts. Sie zahlen erst, wenn Sie jemanden einstellen. Kein Risiko, keine versteckten Kosten.',
      },
    ],
  },
  {
    id: 'einstellung',
    title: 'Einstellung',
    items: [
      {
        question: 'Wie stelle ich über Programmier-Anfang ein?',
        answer:
          'Beschreiben Sie Ihren Bedarf über unser Kontaktformular. Unser Team stellt Ihnen innerhalb von 72 Stunden eine Auswahl vorgeprüfter Kandidaten vor. Nach Interviews wählen Sie den besten Kandidaten und starten die Zusammenarbeit.',
      },
      {
        question: 'Wie lange dauert es, bis ich einen Kandidaten bekomme?',
        answer:
          'In der Regel erhalten Sie innerhalb von 72 Stunden die ersten Kandidatenprofile. Die meisten Unternehmen stellen innerhalb von ein bis zwei Wochen einen Mitarbeiter ein. Bei dringendem Bedarf können wir den Prozess beschleunigen.',
      },
      {
        question: 'Kann ich sowohl Freelancer als auch Vollzeitmitarbeiter einstellen?',
        answer:
          'Ja, beides ist möglich. Freelancer auf Projektbasis, Teilzeitkräfte oder Vollzeit-Remote-Mitarbeiter: Sie wählen das Modell, das zu Ihrem Projekt passt.',
      },
      {
        question: 'Wie sieht der Interview-Prozess aus?',
        answer:
          'Sobald Sie Kandidatenprofile haben, interviewen Sie nach Ihren eigenen Standards: per Video, technische Tests oder Pair Programming. Unser Team hilft bei der Koordination und gibt Empfehlungen.',
      },
      {
        question: 'Was passiert, wenn ein Kandidat nicht passt?',
        answer:
          'Wir bieten eine risikofreie Probezeit. Wenn Sie mit einem Kandidaten nicht zufrieden sind, finden wir kostenlos einen Ersatz. Ihr Erfolg hat für uns höchste Priorität.',
      },
      {
        question: 'Kann ich mehrere Talente gleichzeitig einstellen?',
        answer:
          'Klar. Viele unserer Kunden bauen ganze Remote-Teams über uns auf. Wir koennen mehrere Positionen parallel besetzen und stellen Ihnen dedizierte Account-Manager zur Seite.',
      },
    ],
  },
  {
    id: 'kosten',
    title: 'Kosten',
    items: [
      {
        question: 'Was kostet Programmier-Anfang?',
        answer:
          'Es fallen keine Vorabgebühren an. Sie zahlen erst, wenn Sie einen Kandidaten erfolgreich einstellen. Die Kosten variieren je nach Erfahrungslevel, Spezialisierung und Vertragsmodell des Talents.',
      },
      {
        question: 'Gibt es versteckte Kosten oder Abonnements?',
        answer:
          'Nein. Keine Registrierungsgebühren, keine monatlichen Abonnements, nichts Verstecktes. Unser Preismodell ist transparent: Sie zahlen nur für erfolgreich vermittelte Talente.',
      },
      {
        question: 'Wie werden Freelancer abgerechnet?',
        answer:
          'Freelancer werden in der Regel auf Stundenbasis abgerechnet. Die Stundensätze variieren je nach Technologie und Erfahrung zwischen 25 und 200 USD. Wir stellen Ihnen eine transparente monatliche Rechnung.',
      },
      {
        question: 'Wie viel spare ich im Vergleich zu lokalen Einstellungen?',
        answer:
          'Im Schnitt sparen unsere Kunden bis zu 58 % der Personalkosten gegenueber lokalen Einstellungen im DACH-Raum, bei gleicher Qualität. Mit unserem Team-Kosten-Rechner koennen Sie Ihre individuelle Ersparnis berechnen.',
      },
      {
        question: 'Gibt es eine Geld-zurück-Garantie?',
        answer:
          'Ja, wir bieten eine Zufriedenheitsgarantie. Wenn ein Talent während der Probezeit nicht Ihren Erwartungen entspricht, finden wir kostenlos einen Ersatz oder erstatten die Vermittlungsgebühr.',
      },
    ],
  },
  {
    id: 'entwickler',
    title: 'Entwickler',
    items: [
      {
        question: 'Wie werden Entwickler bei Programmier-Anfang geprüft?',
        answer:
          'Unser Prüfverfahren umfasst mehrere Stufen: Lebenslauf- und Portfolio-Bewertung, technische Assessments und Live-Coding-Tests, Kommunikationsbewertung auf Deutsch und Englisch sowie Referenzprüfungen. Nur etwa 2 % aller Bewerber werden akzeptiert.',
      },
      {
        question: 'Welche Technologien und Programmiersprachen decken Sie ab?',
        answer:
          'Wir decken alle gängigen Technologien ab: JavaScript, TypeScript, Python, Java, PHP, Ruby, Go, C#, Rust, Kotlin, Swift und viele mehr. Ebenso Frameworks wie React, Next.js, Angular, Vue.js, Node.js, Django, Laravel und Spring Boot.',
      },
      {
        question: 'Können Ihre Entwickler auch auf Deutsch kommunizieren?',
        answer:
          'Viele unserer Talente sprechen fliessend Deutsch oder haben fortgeschrittene Deutschkenntnisse. Bei der Kandidatenauswahl berücksichtigen wir Ihre Sprachanforderungen und achten darauf, dass die Kommunikation gut klappt.',
      },
      {
        question: 'Wie stellen Sie die fortlaufende Qualität sicher?',
        answer:
          'Nach jedem Projekt sammeln wir Feedback von beiden Seiten und machen regelmaessige Qualitaetschecks. Talente, die wiederholt negatives Feedback bekommen, fliegen aus dem Netzwerk. So bleibt die Qualitaet konstant hoch.',
      },
      {
        question: 'Bieten Sie auch spezialisierte KI- und Machine-Learning-Entwickler an?',
        answer:
          'Ja, wir haben ein wachsendes Netzwerk an KI-Spezialisten, die mit TensorFlow, PyTorch, Hugging Face, LangChain, OpenAI API und anderen Frameworks arbeiten. NLP, Computer Vision oder MLOps: Wir finden den passenden Experten.',
      },
      {
        question: 'Wie erfahren sind Ihre Entwickler im Durchschnitt?',
        answer:
          'Die meisten haben mindestens 5 Jahre Berufserfahrung, viele über 10 Jahre. Wir vermitteln Junior-, Mid-Level- und Senior-Entwickler sowie Tech Leads und Architekten, je nachdem was Sie brauchen.',
      },
    ],
  },
  {
    id: 'zusammenarbeit',
    title: 'Zusammenarbeit',
    items: [
      {
        question: 'In welchen Zeitzonen arbeiten Ihre Talente?',
        answer:
          'Unsere Talente sind weltweit verteilt und decken alle Zeitzonen ab. Wir können Ihnen gezielt Kandidaten vorschlagen, die in Ihrer Zeitzone oder mit signifikanter Überlappung arbeiten (z. B. CET/MEZ für den DACH-Raum).',
      },
      {
        question: 'Welche Kommunikationstools werden verwendet?',
        answer:
          'Unsere Talente kennen die gaengigen Tools: Slack, Microsoft Teams, Zoom, Google Meet, Jira, Confluence, Asana, Trello, GitHub, GitLab und mehr. Sie fuegen sich problemlos in Ihre bestehende Tool-Landschaft ein.',
      },
      {
        question: 'Wie werden Verträge und Arbeitsrecht gehandhabt?',
        answer:
          'Darum kümmern wir uns. Bei Freelancern schliessen wir Dienstleistungsverträge ab. Bei Vollzeitkräften arbeiten wir mit Employer-of-Record-Lösungen, die lokale Arbeitsgesetze einhalten.',
      },
      {
        question: 'Wie schütze ich mein geistiges Eigentum?',
        answer:
          'Alle unsere Verträge enthalten standardmässig NDA- und IP-Übertragungsklauseln. Das geistige Eigentum, das im Rahmen der Zusammenarbeit entsteht, gehört Ihnen. Auf Wunsch passen wir die Verträge an Ihre spezifischen Anforderungen an.',
      },
      {
        question: 'Kann ich die Zusammenarbeit jederzeit beenden?',
        answer:
          'Ja, bei Freelancer-Engagements gibt es in der Regel kurze Kündigungsfristen (1-2 Wochen). Bei Vollzeitverträgen gelten die vertraglich vereinbarten Fristen. Wir bieten maximale Flexibilität für Ihr Unternehmen.',
      },
      {
        question: 'Bieten Sie Unterstützung beim Onboarding?',
        answer:
          'Ja, unser Customer-Success-Team begleitet Sie durch den gesamten Onboarding-Prozess. Wir stellen sicher, dass der neue Mitarbeiter schnell produktiv wird, und stehen für Fragen jederzeit zur Verfügung.',
      },
    ],
  },
  {
    id: 'standorte',
    title: 'Standorte',
    items: [
      {
        question: 'Aus welchen Ländern kommen Ihre Talente?',
        answer:
          'Unsere Talente kommen aus über 50 Ländern weltweit, darunter Osteuropa (Polen, Ukraine, Rumänien), Lateinamerika (Brasilien, Argentinien, Mexiko), Südasien (Indien, Pakistan) und Afrika (Nigeria, Ägypten, Kenia). Wir vermitteln auch Talente innerhalb des DACH-Raums.',
      },
      {
        question: 'Können Remote-Talente auch vor Ort arbeiten?',
        answer:
          'In der Regel arbeiten unsere Talente remote. Auf Wunsch können wir aber auch Kandidaten vermitteln, die bereit sind, gelegentlich oder dauerhaft vor Ort zu arbeiten. Das hängt von den Visum- und Arbeitserlaubnisregelungen ab.',
      },
      {
        question: 'Wie gehen Sie mit unterschiedlichen Zeitzonen um?',
        answer:
          'Wir berücksichtigen Ihre Zeitzonenpräferenzen bei der Kandidatenauswahl. Für Unternehmen im DACH-Raum empfehlen wir Talente mit mindestens 4-6 Stunden Überlappung zur mitteleuropäischen Zeit. Unsere osteuropäischen und afrikanischen Talente bieten oft eine nahezu vollständige Zeitzonenüberlappung.',
      },
      {
        question: 'Gibt es rechtliche Besonderheiten bei der Beschäftigung internationaler Talente?',
        answer:
          'Ja, je nach Land gelten unterschiedliche Steuer- und Arbeitsrechtsregelungen. Wir helfen Ihnen mit Employer-of-Record-Lösungen und sorgen dafuer, dass alle Verträge rechtskonform sind. So gehen Sie bei internationalen Einstellungen kein unnötiges Risiko ein.',
      },
      {
        question: 'Haben Sie auch Talente in Deutschland, Österreich und der Schweiz?',
        answer:
          'Ja, wir haben auch Remote-Talente im DACH-Raum. Diese Kandidaten bieten den Vorteil der gleichen Zeitzone, Sprache und Rechtsordnung. Besuchen Sie unsere Standortseiten für Berlin, München, Wien, Zürich und weitere Städte.',
      },
      {
        question: 'Wie stellen Sie die Datensicherheit bei internationalen Teams sicher?',
        answer:
          'Alle unsere Verträge beinhalten DSGVO-konforme Datenschutzklauseln und Auftragsverarbeitungsverträge. Unsere Talente sind im Umgang mit sensiblen Daten geschult und halten sich an europäische Datenschutzstandards. Auf Wunsch arbeiten sie ausschliesslich in Ihrer Infrastruktur.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */

function FAQJsonLd({ sections }: { sections: FAQSection[] }) {
  const allItems = sections.flatMap((s) => s.items);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FAQPage() {
  const breadcrumbItems = [
    { label: 'Startseite', href: '/' },
    { label: 'FAQ', href: '/faq' },
  ];

  const relatedLinks = [
    { label: 'Entwickler einstellen', href: '/hire-developers' },
    { label: 'Designer einstellen', href: '/hire-designers' },
    { label: 'Marketer einstellen', href: '/hire-marketers' },
    { label: 'Produktmanager einstellen', href: '/hire-product-managers' },
    { label: 'Projektmanager einstellen', href: '/hire-project-managers' },
    { label: 'Assistenten einstellen', href: '/hire-assistants' },
    { label: 'Standorte', href: '/standorte' },
    { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
    { label: 'Team-Kosten-Rechner', href: '/tools/team-kosten-rechner' },
    { label: 'Technologie-Vergleich', href: '/tools/technologie-vergleich' },
    { label: 'Anbietervergleich', href: '/vergleich' },
    { label: 'Alle Tools', href: '/tools' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FAQJsonLd sections={faqSections} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] font-bold text-gray-900 mb-4">
              Haufig gestellte Fragen
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Alles, was Sie über Programmier-Anfang wissen müssen: von der Einstellung über Kosten bis zur Zusammenarbeit mit Remote-Talenten.
            </p>
          </div>
        </div>
      </section>

      {/* Section navigation */}
      <nav className="bg-gray-50 border-b border-gray-200 sticky top-[116px] z-40">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="flex items-center gap-6 overflow-x-auto py-4">
            {faqSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-gray-600 hover:text-[rgb(0,159,255)] whitespace-nowrap transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* FAQ sections */}
      <div className="py-16">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto space-y-16">
            {faqSections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-[32px] font-bold text-gray-900 mb-8">
                  {section.title}
                </h2>
                <FAQAccordion items={section.items} sectionId={section.id} />
              </section>
            ))}
          </div>
        </div>
      </div>

      <InlineCTABanner
        headline="Noch Fragen? Wir beraten Sie gerne!"
        subtext="Unser Team hilft Ihnen, die passenden Talente fuer Ihr Projekt zu finden."
      />

      {/* Contact note */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Ihre Frage war nicht dabei? Schreiben Sie uns einfach.
              Unser Team antwortet in der Regel innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks title="Verwandte Seiten" links={relatedLinks} />

      <FinalCTA
        heading="Bereit, Ihr Team aufzubauen?"
        subheading="Erhalten Sie innerhalb von 72 Stunden geprüfte Kandidatenprofile. Risikofrei und ohne Vorabkosten."
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
