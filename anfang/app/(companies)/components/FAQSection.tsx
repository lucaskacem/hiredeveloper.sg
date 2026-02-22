'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<string, FAQItem[]> = {
  developers: [
    {
      question: 'Wie schnell kann ich einen Remote-Entwickler einstellen?',
      answer: 'In der Regel erhalten Sie innerhalb von 72 Stunden geprüfte Kandidatenprofile. Nach dem Interview-Prozess können Sie einen Entwickler oft innerhalb einer Woche einstellen und sofort mit der Arbeit beginnen.',
    },
    {
      question: 'Wie werden die Entwickler bei Programmier-Anfang geprüft?',
      answer: 'Jeder Entwickler durchläuft einen strengen Prüfungsprozess, der technische Assessments, Code-Reviews, Kommunikationsbewertungen und Referenzprüfungen umfasst. Nur die besten 2% werden akzeptiert.',
    },
    {
      question: 'Was kostet es, einen Freelance-Entwickler einzustellen?',
      answer: 'Die Kosten variieren je nach Erfahrungslevel und Spezialisierung. Programmier-Anfang berechnet keine Vorabgebühren. Sie zahlen erst, wenn Sie den passenden Entwickler gefunden und eingestellt haben.',
    },
    {
      question: 'Kann ich Entwickler sowohl als Freelancer als auch in Vollzeit einstellen?',
      answer: 'Ja, Programmier-Anfang bietet beide Optionen. Sie können Entwickler als Freelancer auf Projektbasis oder als Vollzeit-Remote-Mitarbeiter einstellen, je nach Ihren Anforderungen.',
    },
    {
      question: 'Welche Programmiersprachen und Technologien decken Ihre Entwickler ab?',
      answer: 'Unsere Entwickler sind in allen gängigen Programmiersprachen versiert, darunter JavaScript, Python, Java, TypeScript, PHP, Ruby, Go, C#, Rust, Kotlin und viele mehr. Wir decken auch Frameworks wie React, Node.js, Django und Angular ab.',
    },
    {
      question: 'Gibt es eine Qualitätsgarantie oder Probezeit?',
      answer: 'Ja, Programmier-Anfang bietet eine risikofreie Probezeit. Wenn Sie mit dem eingestellten Entwickler nicht zufrieden sind, helfen wir Ihnen, kostenlos einen Ersatz zu finden.',
    },
  ],
  'product designers': [
    {
      question: 'Welche Arten von Designern kann ich über Programmier-Anfang einstellen?',
      answer: 'Sie können UX-Designer, UI-Designer, Produktdesigner, Interaktionsdesigner, Visual Designer und Full-Service-Designer einstellen. Unsere Designer sind in Figma, Adobe XD, Sketch und anderen modernen Design-Tools versiert.',
    },
    {
      question: 'Wie werden die Designer bei Programmier-Anfang geprüft?',
      answer: 'Jeder Designer durchläuft eine gründliche Portfolio-Bewertung, Design-Challenge, Kommunikationsprüfung und Referenzcheck. Wir bewerten technische Fähigkeiten, Kreativität und Problemlösungskompetenz gleichermassen.',
    },
    {
      question: 'Wie schnell kann ich einen Remote-Designer einstellen?',
      answer: 'Innerhalb von 72 Stunden erhalten Sie vorgeprüfte Kandidatenprofile. Die meisten Unternehmen stellen innerhalb von 1-2 Wochen nach der Anfrage einen Designer ein.',
    },
    {
      question: 'Was kostet ein Freelance-Produktdesigner?',
      answer: 'Freelance-Produktdesigner kosten je nach Erfahrung zwischen 25-200 USD pro Stunde. Senior UX/UI-Designer liegen typischerweise bei 80-150 USD pro Stunde. Programmier-Anfang berechnet keine Vorabgebühren.',
    },
    {
      question: 'Können Designer auch an langfristigen Projekten arbeiten?',
      answer: 'Ja, unsere Designer sind sowohl für kurzfristige Projekte als auch für langfristige Vollzeit-Remote-Positionen verfügbar. Sie können die Zusammenarbeit flexibel gestalten.',
    },
  ],
  marketers: [
    {
      question: 'Welche Marketing-Experten kann ich über Programmier-Anfang einstellen?',
      answer: 'Wir bieten Digital Marketer, SEO-Experten, Content-Marketer, Social-Media-Manager, Growth Hacker, E-Mail-Marketer, Performance-Marketing-Spezialisten und Conversion-Optimierer.',
    },
    {
      question: 'Wie werden die Marketer bei Programmier-Anfang geprüft?',
      answer: 'Unsere Marketer durchlaufen eine mehrstufige Prüfung: Strategiebewertungen, Fallstudien-Analysen, nachgewiesene Ergebnisse und Referenzprüfungen. Nur die qualifiziertesten Experten werden aufgenommen.',
    },
    {
      question: 'Wie schnell kann ich einen Marketing-Experten einstellen?',
      answer: 'Innerhalb von 72 Stunden erhalten Sie vorgeprüfte Kandidatenprofile, die zu Ihren Anforderungen passen. Die meisten Unternehmen stellen innerhalb von 1-2 Wochen einen Marketer ein.',
    },
    {
      question: 'Was kostet ein Freelance-Marketer?',
      answer: 'Die Kosten variieren je nach Spezialisierung und Erfahrung zwischen 30-175 USD pro Stunde. Senior Growth Marketer oder CMOs auf Teilzeitbasis können höhere Stundensätze haben. Es fallen keine Vorabgebühren an.',
    },
    {
      question: 'Können Marketer auch messbare Ergebnisse liefern?',
      answer: 'Ja, unsere Marketer werden anhand nachweisbarer Ergebnisse geprüft. Sie setzen auf datengestütztes Marketing und liefern messbare KPIs wie Conversion-Rates, ROI und organisches Wachstum.',
    },
  ],
  'product managers': [
    {
      question: 'Welche Arten von Produktmanagern kann ich einstellen?',
      answer: 'Sie können Produktmanager, technische Produktmanager, Product Owner, KI-Produktmanager und Daten-Produktmanager einstellen. Unsere Experten decken verschiedene Branchen und Technologien ab.',
    },
    {
      question: 'Wie werden die Produktmanager bei Programmier-Anfang geprüft?',
      answer: 'Jeder Produktmanager durchläuft Bewertungen in Produktstrategie, Stakeholder-Kommunikation, agilen Methoden und technischem Verständnis. Nur erfahrene Experten mit nachweisbaren Erfolgen werden aufgenommen.',
    },
    {
      question: 'Wie schnell kann ich einen Remote-Produktmanager einstellen?',
      answer: 'Innerhalb von 72 Stunden erhalten Sie vorgeprüfte Kandidatenprofile. Die meisten Unternehmen stellen innerhalb von 1-2 Wochen einen Produktmanager ein.',
    },
    {
      question: 'Was kostet ein Freelance-Produktmanager?',
      answer: 'Freelance-Produktmanager kosten je nach Erfahrung zwischen 50-200 USD pro Stunde. Senior oder VP-Level-PMs liegen typischerweise bei 100-200 USD pro Stunde. Es fallen keine Vorabgebühren an.',
    },
    {
      question: 'Können Produktmanager auch als Fractional oder Teilzeit arbeiten?',
      answer: 'Ja, unsere Produktmanager sind für verschiedene Arbeitsmodelle verfügbar. Von Teilzeit-Freelance über projektbasierte Arbeit bis hin zu Vollzeit-Remote-Positionen bieten wir flexible Optionen.',
    },
  ],
  'project managers': [
    {
      question: 'Welche Arten von Projektmanagern kann ich einstellen?',
      answer: 'Sie können klassische Projektmanager, Scrum Master, Programm-Manager und Agile Coaches einstellen. Unsere Experten sind in agilen und traditionellen Methoden erfahren.',
    },
    {
      question: 'Wie werden die Projektmanager bei Programmier-Anfang geprüft?',
      answer: 'Jeder Projektmanager durchläuft Bewertungen in Projektplanung, Risikomanagement, Stakeholder-Kommunikation und Methodenkompetenz. Viele sind PMP-, PSM- oder PRINCE2-zertifiziert.',
    },
    {
      question: 'Wie schnell kann ich einen Remote-Projektmanager einstellen?',
      answer: 'Innerhalb von 72 Stunden erhalten Sie vorgeprüfte Kandidatenprofile. Die meisten Unternehmen stellen innerhalb von 1-2 Wochen einen Projektmanager ein.',
    },
    {
      question: 'Was kostet ein Freelance-Projektmanager?',
      answer: 'Freelance-Projektmanager kosten je nach Erfahrung und Zertifizierungen zwischen 40-175 USD pro Stunde. Zertifizierte PMPs und Programm-Manager liegen typischerweise am oberen Ende. Es fallen keine Vorabgebühren an.',
    },
    {
      question: 'Können Projektmanager sofort mit der Arbeit beginnen?',
      answer: 'Ja, unsere Projektmanager sind bereit, sofort mit der Arbeit zu beginnen. Sie können sich schnell in bestehende Projekte und Teams integrieren und bringen Struktur und Effizienz in Ihre Abläufe.',
    },
  ],
  assistants: [
    {
      question: 'Welche Arten von Assistenten kann ich einstellen?',
      answer: 'Sie können virtuelle Assistenten, Executive Assistants und administrative Assistenten einstellen. Unsere Experten unterstützen bei Kalendermanagement, E-Mail-Verwaltung, Recherche, Dateneingabe und mehr.',
    },
    {
      question: 'Wie werden die Assistenten bei Programmier-Anfang geprüft?',
      answer: 'Jeder Assistent durchläuft eine sorgfältige Prüfung, bei der Organisationsfähigkeit, Kommunikation, technische Kompetenz und Zeitmanagement bewertet werden. Nur die zuverlässigsten Kandidaten werden aufgenommen.',
    },
    {
      question: 'Wie schnell kann ich einen Remote-Assistenten einstellen?',
      answer: 'Innerhalb von 72 Stunden erhalten Sie vorgeprüfte Kandidatenprofile. Viele Unternehmen stellen innerhalb einer Woche einen passenden Assistenten ein.',
    },
    {
      question: 'Was kostet ein virtueller Assistent?',
      answer: 'Virtuelle Assistenten kosten je nach Erfahrung und Aufgaben zwischen 15-75 USD pro Stunde. Executive Assistants mit spezialisierter Erfahrung liegen typischerweise bei 30-75 USD pro Stunde.',
    },
    {
      question: 'In welchen Zeitzonen arbeiten die Assistenten?',
      answer: 'Unsere Assistenten sind weltweit verfügbar und decken alle Zeitzonen ab. Sie können Assistenten wählen, die in Ihrer Zeitzone oder überlappend arbeiten, um maximale Produktivität zu gewährleisten.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Category-aware FAQ generation for developer subcategories
// Uses the category name to determine domain and generate unique Q&A
// ---------------------------------------------------------------------------
function isKICategory(cat: string): boolean {
  const keywords = ['KI', 'AI', 'OpenAI', 'ChatGPT', 'LLM', 'NLP', 'Data Scien', 'Data Engineer', 'Machine-Learning'];
  return keywords.some(kw => cat.includes(kw));
}

function isWebCategory(cat: string): boolean {
  const keywords = ['Web-', 'Frontend', 'Backend', 'Full-Stack', 'HTML', 'RESTful', 'WordPress', 'Ruby on Rails', 'Django', 'Laravel', 'React-', 'Node.js', 'JavaScript', 'TypeScript', 'PHP'];
  return keywords.some(kw => cat.includes(kw));
}

function isMobileCategory(cat: string): boolean {
  const keywords = ['Mobile', 'Swift', 'Android', 'iOS', 'React Native', 'Flutter', 'Xamarin', 'Ionic', 'PhoneGap', 'Kotlin'];
  return keywords.some(kw => cat.includes(kw));
}

function isInfraCategory(cat: string): boolean {
  const keywords = ['IT-', 'DevOps', 'Security', 'AWS', 'Azure', 'Google Cloud', 'Netzwerk', 'Cloud-', 'CloudFront'];
  return keywords.some(kw => cat.includes(kw));
}

function isDataCategory(cat: string): boolean {
  const keywords = ['Datenbank', 'PostgreSQL', 'SQL', 'MySQL', 'BigQuery', 'Oracle', 'MongoDB', 'SQLite', 'Redis', 'Amazon RDS', 'Elasticsearch'];
  return keywords.some(kw => cat.includes(kw));
}

function isEcommerceCategory(cat: string): boolean {
  const keywords = ['E-Commerce', 'Shopify', 'WooCommerce', 'Magento', 'Wix', 'BigCommerce', 'Squarespace'];
  return keywords.some(kw => cat.includes(kw));
}

function getFAQsForCategory(category: string): FAQItem[] {
  if (faqData[category]) return faqData[category];

  // Base FAQs that appear for all developer subcategories but with varied phrasing
  const baseFaqs: FAQItem[] = [
    {
      question: `Wie lange dauert es, bis ich einen qualifizierten ${category} gefunden habe?`,
      answer: `Bei Programmier-Anfang erhalten Sie in der Regel innerhalb von 72 Stunden eine Auswahl vorgeprüfter ${category}-Profile. Da alle Kandidaten bereits unser mehrstufiges Auswahlverfahren durchlaufen haben, können Sie den Interviewprozess deutlich abkürzen. Die meisten Unternehmen stellen innerhalb von ein bis zwei Wochen einen ${category} ein und starten die Zusammenarbeit unmittelbar danach.`,
    },
    {
      question: `Wie stellt Programmier-Anfang die Qualität der ${category} sicher?`,
      answer: `Unser Prüfverfahren besteht aus mehreren Stufen: Zunächst bewerten wir die fachlichen Qualifikationen anhand von Arbeitsproben und technischen Tests. Anschliessend folgen ein Live-Coding-Assessment und ein Kommunikations-Check. Nur etwa 2 % aller Bewerber schaffen es in unser Netzwerk. Zusätzlich sammeln wir nach jeder Zusammenarbeit Feedback, um die Qualität fortlaufend zu sichern.`,
    },
    {
      question: `Welche Vertragsmodelle gibt es für die Zusammenarbeit mit einem ${category}?`,
      answer: `Programmier-Anfang bietet maximale Flexibilität bei der Vertragsgestaltung. Sie können einen ${category} als Freelancer auf Projektbasis engagieren, auf Stundenbasis abrechnen oder eine langfristige Vollzeit-Remote-Position besetzen. Auch Teilzeit- und Fractional-Modelle sind möglich. Wir beraten Sie gerne, welches Modell am besten zu Ihrem Projekt und Budget passt.`,
    },
  ];

  // Domain-specific FAQs
  let domainFaqs: FAQItem[] = [];

  if (isKICategory(category)) {
    domainFaqs = [
      {
        question: `Welche KI-Frameworks und -Technologien beherrschen Ihre ${category}?`,
        answer: `Unsere ${category} sind mit den führenden KI-Frameworks vertraut, darunter TensorFlow, PyTorch, Hugging Face Transformers, LangChain, scikit-learn und OpenAI API. Viele bringen auch Erfahrung mit MLOps-Tools wie MLflow, Kubeflow und Weights & Biases mit. Je nach Projektanforderung vermitteln wir Ihnen Spezialisten für Computer Vision, NLP, Reinforcement Learning oder klassisches Machine Learning.`,
      },
      {
        question: `Können Ihre ${category} auch bestehende Modelle optimieren oder fine-tunen?`,
        answer: `Ja, viele unserer ${category} haben Praxiserfahrung im Fine-Tuning vortrainierter Modelle, in der Optimierung von Inferenzzeiten und bei der Steigerung der Modellgenauigkeit. Sie helfen auch bei der Auswahl geeigneter Modellarchitekturen, bei der Datenaufbereitung und beim Aufbau reproduzierbarer ML-Pipelines.`,
      },
      {
        question: `Wie gehen Ihre ${category} mit sensiblen Daten und Datenschutz um?`,
        answer: `Datenschutz hat bei unseren ${category}n höchste Priorität. Sie sind mit den Anforderungen der DSGVO vertraut und implementieren Best Practices wie Datenanonymisierung, Zugriffskontrolle und sichere Datenverarbeitung. Auf Wunsch arbeiten sie ausschliesslich in Ihrer eigenen Infrastruktur und unterzeichnen NDAs und Auftragsverarbeitungsverträge.`,
      },
    ];
  } else if (isWebCategory(category)) {
    domainFaqs = [
      {
        question: `Welche modernen Web-Technologien beherrschen Ihre ${category}?`,
        answer: `Unsere ${category} arbeiten mit den neuesten Web-Technologien: React, Next.js, Vue.js, Angular, Node.js, TypeScript, Tailwind CSS und vielen weiteren. Sie entwickeln performante Single-Page-Applications, Server-Side-Rendered Anwendungen und Progressive Web Apps. Zusätzlich achten sie auf SEO, Barrierefreiheit und mobile Optimierung.`,
      },
      {
        question: `Können Ihre ${category} auch bestehende Webanwendungen modernisieren?`,
        answer: `Auf jeden Fall. Viele unserer ${category} sind spezialisiert auf die Migration und Modernisierung bestehender Webanwendungen. Typische Projekte: Umstieg von jQuery auf React, Einführung von TypeScript in eine bestehende Codebasis oder Umstellung auf eine Microservice-Architektur. Dabei achten sie auf minimale Ausfallzeiten und reibungslose Übergänge.`,
      },
      {
        question: `Wie stellen Ihre ${category} die Performance meiner Website sicher?`,
        answer: `Unsere ${category} nutzen Tools wie Lighthouse, WebPageTest und Chrome DevTools, um die Performance Ihrer Website systematisch zu analysieren und zu optimieren. Dazu gehören Massnahmen wie Code-Splitting, Lazy Loading, Bildoptimierung, Caching-Strategien und die Minimierung kritischer Render-Pfade. Ziel ist stets ein Core-Web-Vitals-Score, der sowohl Nutzererlebnis als auch SEO-Rankings verbessert.`,
      },
    ];
  } else if (isMobileCategory(category)) {
    domainFaqs = [
      {
        question: `Entwickeln Ihre ${category} für iOS, Android oder beide Plattformen?`,
        answer: `Unsere ${category} decken alle gängigen Plattformen ab. Je nach Projektanforderung können Sie native iOS-Entwickler (Swift/Objective-C), native Android-Entwickler (Kotlin/Java) oder Cross-Platform-Spezialisten (React Native, Flutter) engagieren. Wir beraten Sie gerne, welche Plattformstrategie für Ihr Vorhaben am sinnvollsten ist.`,
      },
      {
        question: `Können Ihre ${category} auch bei der App-Store-Veröffentlichung helfen?`,
        answer: `Ja, unsere ${category} kennen die Richtlinien von Apple App Store und Google Play Store und unterstützen Sie bei der gesamten Veröffentlichungskette: App-Store-Optimierung (ASO), Screenshot-Erstellung, Einhaltung der Review-Richtlinien und Management von Updates. So vermeiden Sie Ablehnungen und beschleunigen den Go-to-Market-Prozess.`,
      },
      {
        question: `Wie stellen Ihre ${category} eine gute User Experience sicher?`,
        answer: `Unsere ${category} verbinden technische Expertise mit UX-Sensibilität. Sie berücksichtigen plattformspezifische Designrichtlinien (Material Design, Human Interface Guidelines), implementieren flüssige Animationen und sorgen für eine intuitive Navigation. Viele arbeiten eng mit UX-Designern zusammen oder bringen eigene Designkompetenz mit.`,
      },
    ];
  } else if (isInfraCategory(category)) {
    domainFaqs = [
      {
        question: `Welche Cloud-Plattformen und DevOps-Tools beherrschen Ihre ${category}?`,
        answer: `Unsere ${category} sind mit allen grossen Cloud-Plattformen vertraut: AWS, Microsoft Azure und Google Cloud. Sie arbeiten mit Tools wie Terraform, Ansible, Docker, Kubernetes, Jenkins, GitLab CI/CD und GitHub Actions. Je nach Bedarf unterstützen sie bei Cloud-Migration, Infrastruktur-Automatisierung, Monitoring oder Sicherheitsaudits.`,
      },
      {
        question: `Können Ihre ${category} auch bei der Einhaltung von Compliance-Anforderungen helfen?`,
        answer: `Ja, viele unserer ${category} haben Erfahrung mit Compliance-Frameworks wie ISO 27001, SOC 2, DSGVO und PCI-DSS. Sie implementieren Sicherheitskontrollen, richten Zugriffsmanagement ein und erstellen Audit-Trails. Gerade im deutschsprachigen Raum ist die DSGVO-Konformität ein Schwerpunkt unserer Experten.`,
      },
      {
        question: `Wie gewährleisten Ihre ${category} die Verfügbarkeit und Sicherheit meiner Systeme?`,
        answer: `Unsere ${category} setzen auf bewährte Strategien für Hochverfügbarkeit: Redundanz, automatisiertes Failover, Lastverteilung und Disaster-Recovery-Planung. Auf der Sicherheitsseite implementieren sie Firewalls, Intrusion-Detection-Systeme, verschlüsselte Kommunikation und regelmässige Sicherheitsaudits. Proaktives Monitoring mit Tools wie Prometheus, Grafana oder Datadog rundet das Bild ab.`,
      },
    ];
  } else if (isDataCategory(category)) {
    domainFaqs = [
      {
        question: `Welche Datenbanksysteme beherrschen Ihre ${category}?`,
        answer: `Unsere ${category} decken ein breites Spektrum ab: Relationale Datenbanken wie PostgreSQL, MySQL, SQL Server und Oracle, NoSQL-Systeme wie MongoDB, Redis und DynamoDB sowie spezialisierte Lösungen wie Elasticsearch, BigQuery und InfluxDB. Sie unterstützen bei Design, Migration, Optimierung und Hochverfügbarkeit, unabhängig von der eingesetzten Technologie.`,
      },
      {
        question: `Können Ihre ${category} auch bei Datenmigrationen helfen?`,
        answer: `Ja, Datenmigration gehört zu den Kernkompetenzen unserer ${category}. Sie planen und führen Migrationen zwischen verschiedenen Datenbanksystemen durch, minimieren Ausfallzeiten durch Strategien wie Blue-Green-Deployments und validieren die Datenintegrität nach jeder Migration. Auch die Migration in Cloud-Datenbanken (AWS RDS, Azure SQL, Google Cloud SQL) wird routinemässig durchgeführt.`,
      },
      {
        question: `Wie optimieren Ihre ${category} die Datenbankperformance?`,
        answer: `Unsere ${category} analysieren Ausführungspläne, identifizieren langsame Abfragen und optimieren sie durch gezielte Indexierung, Query-Rewriting und Partitionierung. Sie richten ausserdem Caching-Strategien ein, konfigurieren Verbindungspooling und implementieren Read-Replicas für lastintensive Anwendungen. Das Ergebnis: Spürbar schnellere Antwortzeiten und geringere Infrastrukturkosten.`,
      },
    ];
  } else if (isEcommerceCategory(category)) {
    domainFaqs = [
      {
        question: `Welche E-Commerce-Plattformen beherrschen Ihre ${category}?`,
        answer: `Unsere ${category} arbeiten mit allen führenden E-Commerce-Plattformen: Shopify und Shopify Plus, WooCommerce, Magento (Adobe Commerce), BigCommerce, Wix und individuelle Lösungen. Sie entwickeln massgeschneiderte Themes, individuelle Plugins und Integrationen mit ERP-, CRM- und Zahlungssystemen.`,
      },
      {
        question: `Können Ihre ${category} auch Zahlungssysteme und Checkout-Prozesse optimieren?`,
        answer: `Auf jeden Fall. Unsere ${category} integrieren Zahlungsanbieter wie Stripe, PayPal, Klarna und Adyen und optimieren den Checkout-Prozess für maximale Conversion. Dazu gehören One-Click-Checkout, Gast-Bestellung, Vertrauenssignale und die Einhaltung von PCI-DSS-Standards. Viele haben nachweislich Conversion-Raten um 15-30 % verbessert.`,
      },
      {
        question: `Wie unterstützen Ihre ${category} bei der internationalen Expansion meines Online-Shops?`,
        answer: `Unsere ${category} haben Erfahrung mit der Internationalisierung von Online-Shops. Sie implementieren Mehrsprachigkeit, länderspezifische Zahlungsmethoden, korrekte Mehrwertsteuerberechnung und lokale Versandoptionen. Zudem berücksichtigen sie kulturelle Unterschiede im UX-Design und sorgen für schnelle Ladezeiten durch CDN-Integration und regionales Hosting.`,
      },
    ];
  } else {
    // Generic but still richer fallback for "Andere" categories
    domainFaqs = [
      {
        question: `Welche besonderen Qualifikationen bringen Ihre ${category} mit?`,
        answer: `Unsere ${category} verfügen über fundierte Fachkenntnisse und nachweisliche Projekterfahrung in ihrem Spezialgebiet. Viele bringen relevante Zertifizierungen, Branchenerfahrung und ein Portfolio erfolgreicher Projekte mit. Im Auswahlverfahren bewerten wir nicht nur technische Fähigkeiten, sondern auch Problemlösungskompetenz, Kommunikation und die Fähigkeit, sich schnell in neue Kontexte einzuarbeiten.`,
      },
      {
        question: `Wie integrieren sich Ihre ${category} in mein bestehendes Team?`,
        answer: `Unsere ${category} sind erfahren in der Remote-Zusammenarbeit und fügen sich schnell in bestehende Teams ein. Sie arbeiten routinemässig mit Tools wie Slack, Jira, Confluence, GitHub und Microsoft Teams. Dank ihrer Erfahrung mit agilen Methoden passen sie sich zügig an Ihre Prozesse und Unternehmenskultur an.`,
      },
      {
        question: `Kann ich die Zusammenarbeit mit einem ${category} flexibel skalieren?`,
        answer: `Ja, Flexibilität ist ein Kernmerkmal der Zusammenarbeit mit Programmier-Anfang. Sie können den Umfang jederzeit anpassen, von wenigen Stunden pro Woche bis zur Vollzeit-Integration. Auch der Wechsel zwischen Projektphasen mit unterschiedlichem Aufwand ist problemlos möglich.`,
      },
    ];
  }

  return [...baseFaqs, ...domainFaqs];
}

function FAQJsonLd({ faqs, category }: { faqs: FAQItem[]; category: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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

export default function FAQSection({ category }: { category: string }) {
  const faqs = getFAQsForCategory(category);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <FAQJsonLd faqs={faqs} category={category} />
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[40px] font-bold text-gray-900 mb-10 text-center">
            Häufig gestellte Fragen
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-500 flex-shrink-0">
                    {openIndex === index ? '\u2212' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Haben Sie weitere Fragen zur Einstellung von{' '}
            <span className="font-semibold">{category}</span>?{' '}
            <a
              href="/hire-developers"
              className="text-[rgb(0,159,255)] hover:underline"
            >
              Entdecken Sie unsere Talente
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
