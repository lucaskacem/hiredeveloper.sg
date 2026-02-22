import { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/app/(companies)/components/LeadForm';
import RelatedLinks from '@/app/(companies)/components/RelatedLinks';

export function generateMetadata(): Metadata {
  return {
    title: 'Wie man ein technisches Remote-Interview erfolgreich durchführt | Programmier-Anfang',
    description: 'Kompletter Leitfaden für technische Remote-Interviews. Von der Vorbereitung über Live-Coding bis zur Bewertung - so führen Sie effektive technische Interviews online durch.',
    robots: { index: false, follow: false },
  };
}

export default function HowToConductRemoteTechnicalInterviewPage() {
  const otherArticles = [
    { title: 'Freelance-Entwickler finden: 21+ Expertentipps', href: '/employer-blog/how-to-find-developers', image: '/images/blog/people-search.svg' },
    { title: 'Ist Ihr Entwickler bereit für Remote-Arbeit?', href: '/employer-blog/remote-ready-interview-questions', image: '/images/blog/remote-team.svg' },
    { title: 'Interviewfragen für Remote-Entwickler', href: '/employer-blog/software-engineer-interview-questions', image: '/images/blog/online-test.svg' },
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
          <span className="text-gray-900">Technisches Remote-Interview durchführen</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Wie man ein technisches Remote-Interview erfolgreich durchführt
        </h1>

        {/* Author & Date */}
        <div className="text-sm text-gray-500 mb-10 border-b border-gray-200 pb-6">
          Von <span className="text-gray-700 font-medium">Programmier-Anfang Team</span> &middot; Aktualisiert am 3. Februar 2025
        </div>

        {/* Hero Image */}
        <div className="my-8 rounded-xl overflow-hidden bg-blue-50 p-8 flex items-center justify-center">
          <img
            src="/images/blog/code-review.svg"
            alt="Wie man ein technisches Remote-Interview erfolgreich durchführt"
            className="w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Technische Interviews aus der Ferne zu führen, ist zu einer Kernkompetenz für moderne Unternehmen geworden. Doch der Wechsel vom persönlichen Gespräch zum virtuellen Format bringt eigene Herausforderungen mit sich: Technische Probleme, eingeschränkte nonverbale Kommunikation und die Schwierigkeit, die Coding-Fähigkeiten eines Kandidaten authentisch zu bewerten. Dieser Leitfaden zeigt Ihnen, wie Sie technische Remote-Interviews professionell gestalten und die besten Talente identifizieren.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            1. Vorbereitung ist der Schlüssel zum Erfolg
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Ein gut vorbereitetes technisches Interview spart Zeit, reduziert Stress für beide Seiten und liefert bessere Ergebnisse. Investieren Sie mindestens 30 Minuten in die Vorbereitung jedes Interviews.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Technische Infrastruktur testen:</strong> Überprüfen Sie Ihre Internetverbindung, Kamera und Mikrofon. Haben Sie einen Backup-Plan, falls Zoom oder Google Meet ausfällt? Halten Sie die Telefonnummer des Kandidaten bereit und teilen Sie auch Ihre Kontaktdaten im Voraus mit.</li>
            <li><strong>Coding-Plattform vorbereiten:</strong> Richten Sie die gewählte Plattform (CoderPad, HackerRank, CodeSignal oder ein geteiltes VS Code via LiveShare) vorab ein. Erstellen Sie die Aufgaben, testen Sie sie selbst und stellen Sie sicher, dass der Kandidat Zugang hat.</li>
            <li><strong>Interviewstruktur festlegen:</strong> Definieren Sie die zeitliche Aufteilung des Interviews. Ein typisches 60-minütiges technisches Interview könnte wie folgt aussehen: 5 Minuten Begrüßung, 10 Minuten Hintergrundgespräch, 35 Minuten technische Aufgabe, 10 Minuten Fragen des Kandidaten.</li>
            <li><strong>Bewertungskriterien definieren:</strong> Erstellen Sie eine Scorecard mit klaren Kriterien, bevor das Interview beginnt. So bewerten Sie alle Kandidaten nach denselben Maßstäben und reduzieren unbewusste Vorurteile.</li>
            <li><strong>Kandidaten informieren:</strong> Senden Sie dem Kandidaten mindestens 48 Stunden vor dem Interview alle relevanten Informationen: Plattform-Links, erwartetes Format, ungefähre Dauer und benötigte Tools.</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            2. Die richtige Aufgabe wählen
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Die richtige Aufgabe bestimmt die Qualität des gesamten Interviews. Sie sollte relevant, fair und in der vorgegebenen Zeit lösbar sein. Vermeiden Sie Rätsel oder Trick-Fragen, die mehr über Vorwissen als über echte Fähigkeiten aussagen.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Praxisnahe Aufgaben:</strong> Wählen Sie Aufgaben, die den realen Anforderungen der Position entsprechen. Wenn Sie einen Frontend-Entwickler suchen, lassen Sie ihn eine React-Komponente bauen. Für einen Backend-Entwickler eignet sich das Design einer REST-API mit Datenmodellierung.</li>
            <li><strong>Skalierbare Schwierigkeit:</strong> Die beste Aufgabe hat einen einfachen Kern, den jeder kompetente Entwickler lösen kann, und optionale Erweiterungen für fortgeschrittene Kandidaten. So können Sie verschiedene Erfahrungsstufen fair bewerten.</li>
            <li><strong>Kein Spezialwissen voraussetzen:</strong> Vermeiden Sie Aufgaben, die spezifisches Domänenwissen erfordern, das nicht in der Stellenbeschreibung erwähnt wurde. Ein Kandidat ohne Graphenalgorithmus-Erfahrung kann trotzdem ein sehr guter Web-Entwickler sein.</li>
            <li><strong>Zeitrahmen realistisch setzen:</strong> Testen Sie die Aufgabe selbst und multiplizieren Sie die benötigte Zeit mit 1,5 bis 2. Kandidaten stehen unter Druck und brauchen Zeit zum Nachdenken und Erklären.</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            3. Live-Coding-Sessions effektiv durchführen
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Live-Coding ist eine der aussagekräftigsten Methoden, um die technischen Fähigkeiten eines Entwicklers zu bewerten. Doch in einer Remote-Umgebung gibt es besondere Aspekte zu beachten, damit die Session für beide Seiten produktiv verläuft.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Schaffen Sie eine entspannte Atmosphäre:</strong> Beginnen Sie mit Small Talk und erklären Sie dem Kandidaten den Ablauf. Betonen Sie, dass Sie den Denkprozess sehen möchten, nicht nur das Endergebnis. Sagen Sie explizit, dass Googeln und Fragen stellen erlaubt ist.</li>
            <li><strong>Beobachten Sie den Denkprozess:</strong> Bitten Sie den Kandidaten, laut zu denken. Wie analysiert er das Problem? Stellt er klärende Fragen? Beginnt er mit Pseudocode oder stürzt er sich direkt in die Implementierung? Wie geht er mit Fehlern um?</li>
            <li><strong>Geben Sie Hinweise, wenn nötig:</strong> Wenn ein Kandidat feststeckt, geben Sie dezente Hinweise. Die Art, wie jemand Hilfe annimmt und umsetzt, sagt viel über die Zusammenarbeit im Team aus.</li>
            <li><strong>Bewerten Sie die Code-Qualität:</strong> Achten Sie auf sinnvolle Variablennamen, Codestruktur, Fehlerbehandlung und die Berücksichtigung von Edge Cases. Ein Entwickler, der unter Druck sauberen Code schreibt, wird dies auch im Alltag tun.</li>
          </ul>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Wichtig: Unterbrechen Sie den Kandidaten nicht ständig. Notieren Sie sich Fragen und stellen Sie diese nach Abschluss der Aufgabe. Ständige Unterbrechungen erhöhen den Druck und verfälschen das Ergebnis.
          </p>

          {/* Section Image */}
          <div className="my-8 rounded-lg bg-gray-50 p-6 flex items-center justify-center">
            <img
              src="/images/blog/people-search.svg"
              alt="Kandidatensuche und Bewertung"
              className="w-full max-w-[400px] h-auto"
            />
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            4. System-Design-Interviews remote durchführen
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            System-Design-Interviews sind besonders für Senior-Positionen relevant. In einer Remote-Umgebung benötigen Sie die richtigen Tools und eine klare Struktur, um diese effektiv durchzuführen.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Whiteboard-Alternativen nutzen:</strong> Verwenden Sie digitale Whiteboard-Tools wie Excalidraw, Miro oder FigJam. Diese ermöglichen kollaboratives Zeichnen in Echtzeit und können nach dem Interview als Dokumentation gespeichert werden.</li>
            <li><strong>Offene Fragen stellen:</strong> Beginnen Sie mit einer breiten Fragestellung wie &quot;Entwerfen Sie ein System, das X kann&quot; und lassen Sie den Kandidaten die Diskussion führen. Gute Kandidaten stellen klärende Fragen zu Anforderungen, Skalierung und Einschränkungen.</li>
            <li><strong>Auf Trade-offs achten:</strong> Erfahrene Entwickler diskutieren die Vor- und Nachteile verschiedener Ansätze. Sie wägen Konsistenz gegen Verfügbarkeit ab, diskutieren die Wahl zwischen SQL und NoSQL und berücksichtigen Caching-Strategien.</li>
            <li><strong>Tiefgang variieren:</strong> Beginnen Sie mit dem Big Picture und vertiefen Sie ausgewählte Bereiche. So können Sie sowohl das breite Verständnis als auch die Detailkenntnisse des Kandidaten bewerten.</li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            5. Häufige Fehler bei Remote-Interviews vermeiden
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Auch erfahrene Interviewer machen im Remote-Kontext Fehler. Hier sind die häufigsten Fallstricke und wie Sie sie vermeiden:
          </p>
          <ol className="list-decimal pl-6 text-gray-600 mb-6 space-y-3">
            <li><strong>Technische Probleme nicht einplanen:</strong> Haben Sie immer einen Backup-Plan. Fällt die Videoverbindung aus, wechseln Sie zum Telefon. Streikt die Coding-Plattform, nutzen Sie ein geteiltes Google Doc oder GitHub Gist.</li>
            <li><strong>Zu viel oder zu wenig reden:</strong> Als Interviewer sollten Sie bei etwa 20-30 % Redeanteil liegen. Stellen Sie klare Fragen, hören Sie zu und geben Sie nicht selbst die Antworten vor.</li>
            <li><strong>Multitasking während des Interviews:</strong> Schliessen Sie alle irrelevanten Tabs. Der Kandidat merkt, wenn Sie nicht aufmerksam sind, und das wirft ein schlechtes Licht auf Ihr Unternehmen.</li>
            <li><strong>Kein strukturiertes Feedback geben:</strong> Dokumentieren Sie Ihre Beobachtungen während des Interviews und geben Sie dem Kandidaten zeitnah Rückmeldung, egal wie die Entscheidung ausfällt.</li>
            <li><strong>Den kulturellen Aspekt vergessen:</strong> Technik allein reicht nicht. Nutzen Sie die letzten Minuten, um kulturelle Passung und Motivation einzuschätzen.</li>
          </ol>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            6. Nach dem Interview: Bewertung und Entscheidung
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Die Bewertung sollte unmittelbar nach dem Interview erfolgen, solange die Eindrücke noch frisch sind. Verwenden Sie die vorab definierte Scorecard und bewerten Sie den Kandidaten in folgenden Kategorien:
          </p>
          <ol className="list-decimal pl-6 text-gray-600 mb-6 space-y-2">
            <li><strong>Problemverständnis:</strong> Hat der Kandidat das Problem korrekt erfasst und klärende Fragen gestellt?</li>
            <li><strong>Lösungsansatz:</strong> War der Ansatz strukturiert, effizient und gut durchdacht?</li>
            <li><strong>Code-Qualität:</strong> War der Code lesbar, wartbar und korrekt?</li>
            <li><strong>Kommunikation:</strong> Hat der Kandidat seinen Denkprozess klar kommuniziert?</li>
            <li><strong>Umgang mit Schwierigkeiten:</strong> Wie hat der Kandidat auf Hindernisse und Hinweise reagiert?</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Wenn mehrere Interviewer beteiligt sind, halten Sie ein Debrief-Meeting ab, bei dem jeder seine Bewertung unabhängig abgibt, bevor die Eindrücke diskutiert werden. So vermeiden Sie Gruppendenken und erhalten ein objektiveres Bild.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Denken Sie daran: Ein gutes technisches Interview ist keine Einbahnstraße. Der Kandidat bewertet auch Sie und Ihr Unternehmen. Ein professionell durchgeführtes Interview stärkt Ihre Arbeitgebermarke und erhöht die Wahrscheinlichkeit, dass Top-Talente Ihr Angebot annehmen.
          </p>

          {/* Inline Tool CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Tools für Ihren Interviewprozess</h3>
            <p className="text-gray-600 mb-4">Nutzen Sie diese Tools für effektivere Interviews:</p>
            <ul className="space-y-2">
              <li><Link href="/tools/interview-fragen-generator" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">Interview-Fragen-Generator</Link> - Maßgeschneiderte technische Fragen generieren</li>
              <li><Link href="/tools/technologie-vergleich" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">Technologie-Vergleich</Link> - Technologien und Frameworks vergleichen</li>
            </ul>
          </div>
        </article>

        {/* CTA */}
        <div className="bg-gray-50 rounded-xl p-8 text-center mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Lassen Sie uns den Interviewprozess vereinfachen</h3>
          <p className="text-gray-600 mb-6">Zugang zu vorgeprüften Entwicklern, die bereits technisch bewertet wurden.</p>
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
          { label: 'Interviewfragen für Freelancer', href: '/employer-blog/software-engineer-interview-questions' },
          { label: 'Freelance-Entwickler finden', href: '/employer-blog/how-to-find-developers' },
          { label: 'Remote-Entwicklungsteams managen', href: '/employer-blog/how-to-manage-developers-remote-team' },
        ]}
      />

      <RelatedLinks
        title="Entwickler einstellen"
        links={[
          { label: 'Frontend-Entwickler', href: '/hire-developers/front-end' },
          { label: 'Backend-Entwickler', href: '/hire-developers/back-end' },
          { label: 'Full-Stack-Entwickler', href: '/hire-developers/full-stack' },
          { label: 'Softwareentwickler', href: '/hire-developers/software-development' },
          { label: 'Web-Entwickler', href: '/hire-developers/web-development' },
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
          { label: 'vs Toptal', href: '/vergleich/toptal' },
          { label: 'vs Hired', href: '/vergleich/hired' },
        ]}
      />

    </div>
  );
}
