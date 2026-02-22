import { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/app/(companies)/components/LeadForm';
import RelatedLinks from '@/app/(companies)/components/RelatedLinks';

export function generateMetadata(): Metadata {
  return {
    title: 'Interviewfragen für Remote-Entwickler für potenzielle Freelancer | Programmier-Anfang',
    description: 'Die besten Interviewfragen für Software-Ingenieure und Freelance-Entwickler. Technische und verhaltensbasierte Fragen für erfolgreiche Remote-Einstellungen.',
    robots: { index: false, follow: false },
  };
}

export default function SoftwareEngineerInterviewQuestionsPage() {
  const otherArticles = [
    { title: 'Freelance-Entwickler finden: 21+ Expertentipps', href: '/employer-blog/how-to-find-developers', image: '/images/blog/people-search.svg' },
    { title: 'Ist Ihr Entwickler bereit für Remote-Arbeit?', href: '/employer-blog/remote-ready-interview-questions', image: '/images/blog/remote-team.svg' },
    { title: 'Technisches Remote-Interview durchführen', href: '/employer-blog/how-to-conduct-a-remote-technical-interview', image: '/images/blog/code-review.svg' },
    { title: 'Remote-Engineering-Team aufbauen & pflegen', href: '/employer-blog/distributed-software-engineering-team', image: '/images/blog/team-collaboration.svg' },
    { title: 'Remote-Entwicklungsteams managen', href: '/employer-blog/how-to-manage-developers-remote-team', image: '/images/blog/project-completed.svg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/employer-blog/how-to-find-developers" className="hover:text-gray-700">Blog</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Interviewfragen für Remote-Entwickler</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Interviewfragen für Remote-Entwickler für potenzielle Freelancer
        </h1>

        {/* Author & Date */}
        <div className="text-sm text-gray-500 mb-10 border-b border-gray-200 pb-6">
          Von <span className="text-gray-700 font-medium">Programmier-Anfang Team</span> &middot; Aktualisiert am 20. Januar 2025
        </div>

        {/* Hero Image */}
        <div className="my-8 rounded-xl overflow-hidden bg-blue-50 p-8 flex items-center justify-center">
          <img
            src="/images/blog/online-test.svg"
            alt="Interviewfragen für Remote-Entwickler für potenzielle Freelancer"
            className="w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Freelance-Entwickler einzustellen, ist etwas anderes als klassisches Recruiting. Freelancer bringen technische Expertise mit, müssen sich aber auch schnell in laufende Projekte einarbeiten, eigenständig liefern und klar mit Ihrem Team kommunizieren. Dieser Leitfaden gibt Ihnen einen praxisnahen Fragenkatalog an die Hand, der technische und verhaltensbasierte Aspekte abdeckt.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            1. Technische Grundlagenfragen
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Bevor Sie in die Tiefe gehen, sollten Sie sicherstellen, dass der Freelancer über solide Grundkenntnisse in den für Ihr Projekt relevanten Technologien verfügt. Diese Fragen helfen Ihnen, das technische Fundament des Kandidaten einzuschätzen.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Erklären Sie den Unterschied zwischen REST und GraphQL. Wann würden Sie welches verwenden?</strong> Ein erfahrener Entwickler kann die Vor- und Nachteile beider Ansätze klar benennen und Anwendungsfälle zuordnen. REST eignet sich für einfache CRUD-Operationen, während GraphQL bei komplexen Datenabfragen mit verschachtelten Beziehungen punktet.</li>
            <li><strong>Was verstehen Sie unter SOLID-Prinzipien? Geben Sie ein Beispiel aus Ihrer Praxis.</strong> Die fünf SOLID-Prinzipien (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) sind fundamental für sauberen Code. Achten Sie darauf, ob der Kandidat praxisnahe Beispiele liefert.</li>
            <li><strong>Wie gehen Sie mit technischen Schulden um?</strong> Diese Frage zeigt, ob der Entwickler langfristig denkt und bereit ist, Code-Qualität über schnelle Lösungen zu stellen.</li>
            <li><strong>Beschreiben Sie Ihre Erfahrung mit CI/CD-Pipelines.</strong> Freelancer sollten mit automatisierten Build-, Test- und Deployment-Prozessen vertraut sein, da sie oft schnell produktiv werden müssen.</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            2. Architektur- und Designfragen
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Erfahrene Freelance-Entwickler sollten in der Lage sein, architektonische Entscheidungen zu treffen und diese fundiert zu begründen. Diese Fragen helfen Ihnen, das Systemdesign-Verständnis des Kandidaten zu bewerten.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Wie würden Sie eine skalierbare Microservices-Architektur entwerfen?</strong> Achten Sie auf Antworten, die Service Discovery, API Gateway, Event-Driven Communication und Container-Orchestrierung (z. B. Kubernetes) einbeziehen.</li>
            <li><strong>Wann würden Sie eine Monolith-Architektur einer Microservices-Architektur vorziehen?</strong> Die Antwort zeigt, ob der Entwickler pragmatisch denkt und nicht blind Trends folgt. Für kleinere Teams oder MVP-Projekte kann ein Monolith oft die bessere Wahl sein.</li>
            <li><strong>Wie stellen Sie die Datenkonsistenz in verteilten Systemen sicher?</strong> Erwähnung von Konzepten wie eventual consistency, Saga-Pattern, idempotenten Operationen und verteilten Transaktionen deutet auf fundiertes Wissen hin.</li>
            <li><strong>Beschreiben Sie eine Architekturentscheidung, die Sie im Nachhinein bereut haben. Was haben Sie daraus gelernt?</strong> Selbstreflexion ist ein starkes Zeichen für Reife und Lernbereitschaft.</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            3. Fragen zum Projektmanagement als Freelancer
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Freelancer müssen oft mehrere Projekte gleichzeitig managen und dabei Deadlines, Qualitätsansprüche und Kundenerwartungen unter einen Hut bringen. Diese Fragen helfen Ihnen, die organisatorischen Fähigkeiten des Kandidaten einzuschätzen.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Wie schätzen Sie den Zeitaufwand für ein neues Projekt ein?</strong> Erfahrene Freelancer nutzen Methoden wie Planning Poker, T-Shirt-Sizing oder historische Daten aus vergangenen Projekten. Achten Sie auf Erwähnungen von Pufferzonen für unvorhergesehene Komplikationen.</li>
            <li><strong>Wie kommunizieren Sie Verzögerungen oder Probleme an den Kunden?</strong> Proaktive, transparente Kommunikation ist ein Markenzeichen professioneller Freelancer. Der Kandidat sollte betonen, dass er Probleme frühzeitig anspricht und Lösungsvorschläge mitbringt.</li>
            <li><strong>Wie gehen Sie vor, wenn sich die Anforderungen mitten im Projekt ändern?</strong> Flexibilität ist wichtig, aber der Freelancer sollte auch in der Lage sein, Scope Creep zu erkennen und konstruktiv damit umzugehen.</li>
            <li><strong>Arbeiten Sie aktuell an anderen Projekten? Wie stellen Sie sicher, dass unser Projekt die nötige Aufmerksamkeit bekommt?</strong> Transparenz über die aktuelle Auslastung ist ein gutes Zeichen für Professionalität.</li>
          </ul>

          {/* Section Image */}
          <div className="my-8 rounded-lg bg-gray-50 p-6 flex items-center justify-center">
            <img
              src="/images/blog/remote-team.svg"
              alt="Remote-Teamarbeit und Zusammenarbeit"
              className="w-full max-w-[400px] h-auto"
            />
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            4. Code-Review und Qualitätssicherung
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Die Qualität des Codes ist bei Freelance-Projekten besonders wichtig, da der Code oft von anderen Entwicklern weitergeführt werden muss. Diese Fragen helfen Ihnen, den Qualitätsanspruch des Kandidaten zu bewerten.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Wie stellen Sie sicher, dass Ihr Code wartbar und verständlich ist?</strong> Gute Antworten umfassen klare Namensgebung, Kommentare an strategischen Stellen, Design Patterns und aussagekräftige Commit-Nachrichten.</li>
            <li><strong>Welche Testing-Strategien verwenden Sie?</strong> Ein durchdachter Ansatz umfasst Unit Tests, Integration Tests, End-to-End Tests und ggf. Property-based Testing. Der Kandidat sollte auch Testabdeckungsziele nennen können.</li>
            <li><strong>Wie gehen Sie mit Code Reviews um, wenn Sie allein an einem Projekt arbeiten?</strong> Selbst-Reviews, automatisierte Linting-Tools (ESLint, Prettier), statische Code-Analyse (SonarQube) und das Schreiben von Pull Requests, auch wenn man der einzige Reviewer ist, zeigen Disziplin.</li>
            <li><strong>Beschreiben Sie einen Bug, der Ihnen besonders in Erinnerung geblieben ist. Wie haben Sie ihn gefunden und behoben?</strong> Diese Frage zeigt die Debugging-Fähigkeiten und die Fähigkeit, systematisch an Probleme heranzugehen.</li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            5. Verhaltensbasierte Fragen für Freelancer
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Verhaltensbasierte Fragen geben Ihnen Einblick in die Arbeitsweise und den Charakter des Kandidaten. Sie basieren auf der Annahme, dass vergangenes Verhalten der beste Prädiktor für zukünftiges Verhalten ist.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Erzählen Sie mir von einem Projekt, das nicht wie geplant verlaufen ist. Was haben Sie getan?</strong> Achten Sie auf Ehrlichkeit, Verantwortungsübernahme und konstruktive Lösungsansätze.</li>
            <li><strong>Wie gehen Sie mit einem Kunden um, der unrealistische Erwartungen hat?</strong> Professionelle Freelancer setzen Grenzen, kommunizieren klar und bieten Alternativen an, ohne die Kundenbeziehung zu gefährden.</li>
            <li><strong>Beschreiben Sie eine Situation, in der Sie eine Technologie schnell erlernen mussten.</strong> Freelancer müssen sich oft in kurzer Zeit in neue Technologien einarbeiten. Achten Sie auf konkrete Lernstrategien und einen pragmatischen Umgang mit Wissenslücken.</li>
            <li><strong>Wie halten Sie sich technisch auf dem neuesten Stand?</strong> Konferenzen, Blogs, Open-Source-Beiträge, Online-Kurse und Tech-Communities zeigen ein Engagement für kontinuierliches Lernen.</li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            6. Praktische Bewertungstipps
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Interviewfragen allein reichen nicht. Kombinieren Sie sie mit praktischen Bewertungsmethoden, um ein realistisches Bild zu bekommen.
          </p>
          <ol className="list-decimal pl-6 text-gray-600 mb-6 space-y-2">
            <li><strong>Live-Coding-Session:</strong> Lassen Sie den Kandidaten eine kleine Aufgabe in Echtzeit lösen. Achten Sie dabei nicht nur auf das Ergebnis, sondern auch auf den Denkprozess, die Kommunikation und den Umgang mit Fehlern.</li>
            <li><strong>Take-Home-Aufgabe:</strong> Eine realitätsnahe Aufgabe, die der Kandidat in 2-4 Stunden lösen kann, gibt Aufschluss über Code-Qualität, Problemlösungsansatz und Dokumentationsfähigkeiten.</li>
            <li><strong>Portfolio-Review:</strong> Bitten Sie um Zugang zu GitHub-Repositories oder einem Portfolio. Achten Sie auf Code-Stil, Commit-Historie, README-Qualität und die Komplexität der Projekte.</li>
            <li><strong>Referenzen einholen:</strong> Sprechen Sie mit früheren Kunden oder Arbeitgebern des Freelancers. Fragen Sie gezielt nach Zuverlässigkeit, Kommunikation und Qualität der Arbeit.</li>
            <li><strong>Bezahltes Probeprojekt:</strong> Ein kurzes bezahltes Projekt (1-2 Wochen) ist oft der beste Weg, um die tatsächliche Arbeitsweise eines Freelancers zu erleben.</li>
          </ol>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Mit diesem Fragenkatalog und den ergänzenden Bewertungsmethoden haben Sie alles, was Sie brauchen, um passende Freelance-Entwickler für Ihr Projekt zu finden und erfolgreich einzustellen.
          </p>

          {/* Inline Tool CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Nützliche Tools für Ihr Interview</h3>
            <p className="text-gray-600 mb-4">Optimieren Sie Ihren Einstellungsprozess mit unseren kostenlosen Tools:</p>
            <ul className="space-y-2">
              <li><Link href="/tools/interview-fragen-generator" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">Interview-Fragen-Generator</Link> - Technische Interviewfragen automatisch erstellen</li>
              <li><Link href="/tools/skill-assessment" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">Skill-Assessment</Link> - Kandidaten objektiv bewerten</li>
              <li><Link href="/tools/gehalt-rechner" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">Gehaltsrechner</Link> - Marktkonforme Gehälter berechnen</li>
            </ul>
          </div>
        </article>

        {/* CTA */}
        <div className="bg-gray-50 rounded-xl p-8 text-center mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Finden Sie den perfekten Freelance-Entwickler</h3>
          <p className="text-gray-600 mb-6">Zugang zu über 90.000 geprüften Entwicklern weltweit.</p>
          <Link
            href="/hire-developers"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Jetzt Top-Entwickler einstellen
          </Link>
        </div>

        {/* Lead Generation Form */}
        <div className="mt-12 mb-8">
          <LeadForm />
        </div>

        {/* Weitere Artikel with image cards */}
        <div className="border-t border-gray-200 pt-10 mt-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Weitere Artikel</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
                  <img src={article.image} alt={article.title} className="w-full max-w-[140px] h-auto group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[rgb(0,159,255)] transition-colors leading-tight">
                    {article.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* RelatedLinks Sections */}
      <RelatedLinks
        title="Verwandte Artikel"
        links={[
          { label: 'Remote-Bereitschaft: Interviewfragen', href: '/employer-blog/remote-ready-interview-questions' },
          { label: 'Freelance-Entwickler finden', href: '/employer-blog/how-to-find-developers' },
          { label: 'Technisches Remote-Interview führen', href: '/employer-blog/how-to-conduct-a-remote-technical-interview' },
          { label: 'Remote-Engineering-Team aufbauen', href: '/employer-blog/distributed-software-engineering-team' },
        ]}
      />

      <RelatedLinks
        title="Entwickler einstellen"
        links={[
          { label: 'JavaScript-Entwickler', href: '/hire-developers/javascript' },
          { label: 'TypeScript-Entwickler', href: '/hire-developers/typescript' },
          { label: 'Java-Entwickler', href: '/hire-developers/java' },
          { label: 'Python-Entwickler', href: '/hire-developers/python' },
          { label: 'React-Entwickler', href: '/hire-developers/reactjs' },
          { label: 'Node.js-Entwickler', href: '/hire-developers/nodejs' },
        ]}
      />

      <RelatedLinks
        title="Top-Standorte"
        links={[
          { label: 'Entwickler in Deutschland', href: '/standorte/deutschland' },
          { label: 'Entwickler in Österreich', href: '/standorte/oesterreich' },
          { label: 'Entwickler in der Schweiz', href: '/standorte/schweiz' },
        ]}
      />

      <RelatedLinks
        title="Anbietervergleich"
        links={[
          { label: 'vs Turing', href: '/vergleich/turing' },
          { label: 'vs Andela', href: '/vergleich/andela' },
        ]}
      />

    </div>
  );
}
