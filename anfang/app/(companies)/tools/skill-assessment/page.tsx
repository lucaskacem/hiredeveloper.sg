'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';

type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
};

const quizzes: Record<string, QuizQuestion[]> = {
  JavaScript: [
    { question: 'Was gibt typeof null zurück?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], correct: 2 },
    { question: 'Welches Keyword erzeugt einen Block-Scope?', options: ['var', 'let', 'function', 'global'], correct: 1 },
    { question: 'Was ist das Ergebnis von [] + []?', options: ['[]', '""', 'undefined', 'NaN'], correct: 1 },
    { question: 'Welche Methode erstellt eine flache Kopie eines Arrays?', options: ['.copy()', '.clone()', '.slice()', '.duplicate()'], correct: 2 },
    { question: 'Was ist ein Closure?', options: ['Ein geschlossener Block', 'Eine Funktion mit Zugriff auf ihren äußeren Scope', 'Ein Syntax-Fehler', 'Ein Datentyp'], correct: 1 },
    { question: 'Was gibt console.log(1 + "2") aus?', options: ['3', '"12"', 'NaN', 'TypeError'], correct: 1 },
    { question: 'Wie stoppt man die Event-Propagation?', options: ['event.stop()', 'event.stopPropagation()', 'event.cancel()', 'event.halt()'], correct: 1 },
    { question: 'Was ist der Unterschied zwischen == und ===?', options: ['Kein Unterschied', '=== prüft auch den Typ', '== ist schneller', '=== ist veraltet'], correct: 1 },
    { question: 'Welche Schleife ist am besten für asynchrone Iterationen?', options: ['for', 'while', 'for...of mit await', 'forEach'], correct: 2 },
    { question: 'Was ist die Ausgabe von typeof undefined?', options: ['"null"', '"undefined"', '"void"', '"NaN"'], correct: 1 },
  ],
  TypeScript: [
    { question: 'Wie definiert man einen optionalen Parameter?', options: ['param!: string', 'param?: string', 'param: string | null', 'optional param: string'], correct: 1 },
    { question: 'Was ist der Unterschied zwischen any und unknown?', options: ['Kein Unterschied', 'unknown erfordert Typprüfung vor Verwendung', 'any ist sicherer', 'unknown existiert nicht'], correct: 1 },
    { question: 'Was ist ein Generic in TypeScript?', options: ['Ein allgemeiner Datentyp', 'Ein parametrisierter Typ', 'Ein Fehler', 'Ein Modul'], correct: 1 },
    { question: 'Wie erstellt man einen Readonly-Typ?', options: ['const type T', 'Readonly<T>', 'freeze<T>', 'immutable T'], correct: 1 },
    { question: 'Was ist eine Union Type?', options: ['A & B', 'A | B', 'A + B', 'A extends B'], correct: 1 },
    { question: 'Wie deklariert man ein Interface?', options: ['type X = {}', 'interface X {}', 'class X {}', 'struct X {}'], correct: 1 },
    { question: 'Was macht das as Keyword?', options: ['Assignment', 'Type Assertion', 'Alias', 'Async'], correct: 1 },
    { question: 'Was ist der never-Typ?', options: ['Gleich wie void', 'Ein Typ der niemals vorkommt', 'Ein Fehlertyp', 'Ein Legacy-Typ'], correct: 1 },
    { question: 'Welches Utility erstellt einen Typ mit allen optionalen Properties?', options: ['Optional<T>', 'Partial<T>', 'Maybe<T>', 'Nullable<T>'], correct: 1 },
    { question: 'Was ist Type Narrowing?', options: ['Typen kleiner machen', 'Typen zur Laufzeit eingrenzen', 'Typen löschen', 'Typen exportieren'], correct: 1 },
  ],
  React: [
    { question: 'Was ist der Zweck von React.memo?', options: ['State speichern', 'Re-Renders vermeiden bei gleichen Props', 'Memory Management', 'Memos anzeigen'], correct: 1 },
    { question: 'Welcher Hook ersetzt componentDidMount?', options: ['useState', 'useEffect', 'useRef', 'useMemo'], correct: 1 },
    { question: 'Was ist die korrekte Art, State zu updaten, der vom vorherigen State abhängt?', options: ['setState(newValue)', 'setState(prev => newValue)', 'state = newValue', 'this.state = newValue'], correct: 1 },
    { question: 'Wie vermeidet man Prop Drilling?', options: ['Mehr Props verwenden', 'Context API oder State Management', 'Globale Variablen', 'Weniger Komponenten'], correct: 1 },
    { question: 'Was passiert wenn der key einer Komponente sich ändert?', options: ['Nichts', 'Re-render', 'Kompletter Remount', 'Fehlermeldung'], correct: 2 },
    { question: 'Was ist der Unterschied zwischen useMemo und useCallback?', options: ['Kein Unterschied', 'useMemo cached Werte, useCallback cached Funktionen', 'useCallback ist schneller', 'useMemo ist veraltet'], correct: 1 },
    { question: 'Was sind Error Boundaries?', options: ['CSS-Rahmen', 'Klassen-Komponenten die Fehler abfangen', 'Try/catch-Blöcke', 'Validation-Rules'], correct: 1 },
    { question: 'Wann wird useEffect ohne Dependencies Array ausgeführt?', options: ['Nie', 'Einmal', 'Bei jedem Render', 'Bei State-Änderungen'], correct: 2 },
    { question: 'Was ist der Virtual DOM?', options: ['Ein Browser-Feature', 'Eine In-Memory-Repräsentation des DOM', 'Ein CSS-Framework', 'Ein Build-Tool'], correct: 1 },
    { question: 'Wie optimiert man eine lange Liste in React?', options: ['Mehr State verwenden', 'Virtualisierung (z.B. react-window)', 'useEffect für jedes Item', 'Inline Styles'], correct: 1 },
  ],
  Python: [
    { question: 'Was ist der Unterschied zwischen list und tuple?', options: ['Kein Unterschied', 'Tuples sind unveränderlich', 'Listen sind schneller', 'Tuples können nur Zahlen enthalten'], correct: 1 },
    { question: 'Was gibt len({1, 2, 2, 3}) zurück?', options: ['4', '3', '2', 'Error'], correct: 1 },
    { question: 'Wie erstellt man einen Decorator?', options: ['@decorator Syntax', 'decorator() Funktion', 'class Decorator', 'Alle sind korrekt'], correct: 3 },
    { question: 'Was ist der GIL?', options: ['Global Integer Lock', 'Global Interpreter Lock', 'General Import Library', 'Generated Interface Layer'], correct: 1 },
    { question: 'Was ist List Comprehension?', options: ['Eine Liste verstehen', 'Kompakte Syntax zum Erstellen von Listen', 'Ein Sortieralgorithmus', 'Ein Import-System'], correct: 1 },
    { question: 'Wie erstellt man eine virtuelle Umgebung?', options: ['python -m venv name', 'pip create-env', 'python --virtual', 'env create name'], correct: 0 },
    { question: 'Was ist self in Python-Klassen?', options: ['Ein Keyword', 'Referenz auf die aktuelle Instanz', 'Ein Datentyp', 'Eine globale Variable'], correct: 1 },
    { question: 'Was gibt type([]) zurück?', options: ['"array"', '<class "list">', '"list"', '<type "array">'], correct: 1 },
    { question: 'Wie importiert man ein spezifisches Element aus einem Modul?', options: ['import x from modul', 'from modul import x', 'require(modul).x', 'include modul.x'], correct: 1 },
    { question: 'Was ist der Unterschied zwischen append und extend?', options: ['Kein Unterschied', 'append fügt ein Element hinzu, extend fügt iterierbare Elemente hinzu', 'extend ist schneller', 'append ist veraltet'], correct: 1 },
  ],
  Java: [
    { question: 'Was ist der Unterschied zwischen Interface und Abstract Class?', options: ['Kein Unterschied', 'Interfaces können keine Implementierung haben', 'Abstract Classes können mehrfach vererbt werden', 'Interfaces können keine Default Methods haben'], correct: 1 },
    { question: 'Was ist Autoboxing in Java?', options: ['Automatische Verpackung', 'Automatische Konvertierung zwischen primitiven Typen und Wrapper-Klassen', 'Ein Design Pattern', 'Ein Build-Tool'], correct: 1 },
    { question: 'Welches Keyword verhindert Vererbung?', options: ['static', 'final', 'private', 'sealed'], correct: 1 },
    { question: 'Was ist der Unterschied zwischen String und StringBuilder?', options: ['Kein Unterschied', 'StringBuilder ist mutable', 'String ist schneller', 'StringBuilder ist thread-safe'], correct: 1 },
    { question: 'Was macht das volatile Keyword?', options: ['Macht eine Variable schneller', 'Garantiert Sichtbarkeit über Threads', 'Löscht die Variable', 'Macht sie schreibgeschützt'], correct: 1 },
    { question: 'Was ist Garbage Collection?', options: ['Code-Löschung', 'Automatische Speicherverwaltung', 'Ein Design Pattern', 'Ein Testing-Framework'], correct: 1 },
    { question: 'Wie viele Klassen kann eine Klasse in Java erweitern?', options: ['Beliebig viele', 'Genau eine', 'Maximal zwei', 'Gar keine'], correct: 1 },
    { question: 'Was ist ein Stream in Java?', options: ['Ein I/O-Strom', 'Eine funktionale Pipeline für Collections', 'Ein Thread', 'Ein Netzwerkprotokoll'], correct: 1 },
    { question: 'Was ist der Unterschied zwischen == und equals()?', options: ['Kein Unterschied', '== vergleicht Referenzen, equals() vergleicht Inhalte', '== ist schneller', 'equals() ist veraltet'], correct: 1 },
    { question: 'Was ist eine Lambda-Expression?', options: ['Ein griechischer Buchstabe', 'Eine anonyme Funktion', 'Ein Datentyp', 'Ein Operator'], correct: 1 },
  ],
  'Node.js': [
    { question: 'Was ist die Event Loop?', options: ['Eine Schleife in HTML', 'Ein Mechanismus zur asynchronen Ausführung', 'Ein CSS-Feature', 'Eine Datenbank'], correct: 1 },
    { question: 'Was ist npm?', options: ['Node Package Manager', 'Network Protocol Module', 'New Programming Method', 'Node Process Monitor'], correct: 0 },
    { question: 'Was ist der Unterschied zwischen require und import?', options: ['Kein Unterschied', 'require ist CommonJS, import ist ES Modules', 'import ist schneller', 'require ist veraltet'], correct: 1 },
    { question: 'Was ist Express.js?', options: ['Eine Datenbank', 'Ein Web-Framework für Node.js', 'Ein Build-Tool', 'Ein Test-Framework'], correct: 1 },
    { question: 'Wie liest man eine Datei asynchron?', options: ['fs.readFile()', 'file.read()', 'io.read()', 'stream.read()'], correct: 0 },
    { question: 'Was ist Middleware?', options: ['Software in der Mitte', 'Funktionen die Request/Response verarbeiten', 'Ein Datenbank-Layer', 'Ein Frontend-Framework'], correct: 1 },
    { question: 'Was ist ein Buffer in Node.js?', options: ['Ein Cache', 'Ein Objekt zum Arbeiten mit binären Daten', 'Ein UI-Puffer', 'Ein Netzwerk-Buffer'], correct: 1 },
    { question: 'Was macht process.env?', options: ['Prozesse starten', 'Zugriff auf Umgebungsvariablen', 'Umgebung ändern', 'Prozess beenden'], correct: 1 },
    { question: 'Welches Modul wird für HTTP-Server verwendet?', options: ['net', 'http', 'server', 'web'], correct: 1 },
    { question: 'Was ist package.json?', options: ['Ein Konfigurationsfile', 'Die Projektmanifest-Datei', 'Ein Build-Script', 'Alle sind korrekt'], correct: 1 },
  ],
  AWS: [
    { question: 'Was ist EC2?', options: ['Eine Datenbank', 'Virtuelle Server in der Cloud', 'Ein CDN', 'Ein DNS-Service'], correct: 1 },
    { question: 'Was ist S3?', options: ['Simple Storage Service', 'Secure Server System', 'Standard SQL Service', 'Smart Scaling Solution'], correct: 0 },
    { question: 'Was ist Lambda?', options: ['Ein Server-Framework', 'Serverless Compute', 'Eine Datenbank', 'Ein Container-Service'], correct: 1 },
    { question: 'Was macht IAM?', options: ['Internet Access Management', 'Identity and Access Management', 'Integrated Application Monitoring', 'Internal API Manager'], correct: 1 },
    { question: 'Was ist eine VPC?', options: ['Virtual Private Cloud', 'Very Powerful Computer', 'Virtual Process Controller', 'Variable Pricing Calculator'], correct: 0 },
    { question: 'Was ist CloudFront?', options: ['Ein Web-Framework', 'Ein CDN', 'Eine Datenbank', 'Ein Monitoring-Tool'], correct: 1 },
    { question: 'Was ist der Unterschied zwischen RDS und DynamoDB?', options: ['Kein Unterschied', 'RDS ist relational, DynamoDB ist NoSQL', 'DynamoDB ist teurer', 'RDS ist serverless'], correct: 1 },
    { question: 'Was ist eine Security Group?', options: ['Ein IAM-Feature', 'Eine virtuelle Firewall', 'Ein VPN', 'Ein Verschlüsselungs-Service'], correct: 1 },
    { question: 'Was macht Elastic Load Balancer?', options: ['Speicher verteilen', 'Traffic auf mehrere Ziele verteilen', 'Daten komprimieren', 'Server skalieren'], correct: 1 },
    { question: 'Was ist SQS?', options: ['Simple Query Service', 'Simple Queue Service', 'Secure Queue System', 'Standard Quality Service'], correct: 1 },
  ],
};

const availableTechs = Object.keys(quizzes);

export default function SkillAssessmentPage() {
  const [technology, setTechnology] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);

  const questions = quizzes[technology] || [];
  const totalQuestions = questions.length;

  const startQuiz = () => {
    if (!technology) return;
    setAnswers(new Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setShowResult(false);
    setStarted(true);
  };

  const selectAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const score = answers.filter((a, i) => a === questions[i]?.correct).length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Experte', color: 'text-[rgb(23,162,69)]' };
    if (percentage >= 70) return { label: 'Fortgeschritten', color: 'text-[rgb(0,159,255)]' };
    if (percentage >= 50) return { label: 'Grundkenntnisse', color: 'text-yellow-600' };
    return { label: 'Einsteiger', color: 'text-red-500' };
  };

  const resetQuiz = () => {
    setStarted(false);
    setShowResult(false);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Skill-Assessment',
    description: 'Testen Sie Ihr Wissen zu verschiedenen Technologien mit einem interaktiven Quiz.',
    url: 'https://programmier-anfang.de/tools/skill-assessment',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Skill-Assessment', href: '/tools/skill-assessment' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">Skill-Assessment</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Wie gut kennen Sie sich aus? Wählen Sie eine Technologie und beantworten Sie 10 Fragen.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-12">
          {!started && !showResult && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologie auswählen</h2>
              <div className="max-w-md mx-auto mb-8">
                <select
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
                  {availableTechs.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={startQuiz}
                disabled={!technology}
                className="px-8 py-3 text-white font-semibold bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-colors text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Quiz starten
              </button>
              <p className="text-sm text-gray-500 mt-4">10 Multiple-Choice-Fragen, keine Zeitbegrenzung</p>
            </div>
          )}

          {started && !showResult && questions.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-500">
                  Frage {currentQuestion + 1} von {totalQuestions}
                </span>
                <span className="text-sm font-medium text-[rgb(0,159,255)]">{technology}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
                <div
                  className="h-2 rounded-full bg-[rgb(0,159,255)] transition-all"
                  style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      answers[currentQuestion] === i
                        ? 'border-[rgb(0,159,255)] bg-[rgb(0,159,255)]/5 text-[rgb(0,159,255)]'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        answers[currentQuestion] === i
                          ? 'border-[rgb(0,159,255)] bg-[rgb(0,159,255)]'
                          : 'border-gray-300'
                      }`}>
                        {answers[currentQuestion] === i && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                      {option}
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="px-6 py-2 text-gray-600 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Zurück
                </button>
                <button
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === null}
                  className="px-6 py-2 text-white font-semibold bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {currentQuestion === totalQuestions - 1 ? 'Auswerten' : 'Weiter'}
                </button>
              </div>
            </div>
          )}

          {showResult && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Ergebnis: {technology}</h2>
                <div className="my-6">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-[rgb(0,159,255)]">
                    <div>
                      <p className="text-4xl font-bold text-[rgb(0,159,255)]">{percentage}%</p>
                      <p className="text-sm text-gray-500">{score}/{totalQuestions}</p>
                    </div>
                  </div>
                </div>
                <p className={`text-2xl font-bold ${getGrade().color}`}>
                  {getGrade().label}
                </p>
              </div>

              {/* Answer Review */}
              <div className="space-y-4 mb-8">
                {questions.map((q, i) => {
                  const isCorrect = answers[i] === q.correct;
                  return (
                    <div key={i} className={`p-4 rounded-lg border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${isCorrect ? 'bg-[rgb(23,162,69)]' : 'bg-red-500'}`}>
                          {isCorrect ? (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          ) : (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                          )}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{q.question}</p>
                          {!isCorrect && (
                            <p className="text-xs text-gray-600 mt-1">Richtige Antwort: {q.options[q.correct]}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 mb-8">
                <button
                  onClick={resetQuiz}
                  className="flex-1 py-3 px-6 text-[rgb(0,159,255)] font-semibold border-2 border-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,159,255)]/5 transition-colors"
                >
                  Neues Quiz starten
                </button>
              </div>

              {/* CTA */}
              <div className="p-6 bg-[rgb(23,162,69)]/5 rounded-xl border border-[rgb(23,162,69)]/20 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Finden Sie Entwickler, die wissen, was sie tun
                </p>
                <p className="text-gray-600 mb-4">
                  Unsere {technology}-Entwickler werden in mehreren Stufen geprüft und bewertet.
                </p>
                <a
                  href="/hire-developers"
                  className="inline-block px-6 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                >
                  Geprüfte {technology}-Entwickler finden
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <RelatedLinks
        title="Verwandte Tools"
        links={[
          { label: 'Interview-Fragen-Generator', href: '/tools/interview-fragen-generator' },
          { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
          { label: 'Technologie-Vergleich', href: '/tools/technologie-vergleich' },
          { label: 'Projekt-Schätzung', href: '/tools/projekt-schaetzung' },
          { label: 'JavaScript-Entwickler einstellen', href: '/hire-developers/javascript' },
          { label: 'React-Entwickler einstellen', href: '/hire-developers/reactjs' },
          { label: 'Python-Entwickler einstellen', href: '/hire-developers/python' },
          { label: 'Alle Entwickler', href: '/hire-developers' },
        ]}
      />

      <FinalCTA
        heading="Finden Sie geprüfte Top-Entwickler"
        subheading="Jeder Entwickler bei uns wird auf technische Fähigkeiten getestet."
      />

      <Footer />
    </div>
  );
}
