'use client';

import { useState, useCallback } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';

type Question = {
  id: number;
  text: string;
  difficulty: string;
};

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js',
  'Python', 'Java', 'PHP', 'Ruby', 'Go', 'Swift', 'Kotlin',
  'AWS', 'DevOps', 'SQL', 'MongoDB', 'Docker', 'Kubernetes',
];

const difficultyLevels = ['Einsteiger', 'Fortgeschritten', 'Experte'];

const questionsDb: Record<string, Record<string, string[]>> = {
  JavaScript: {
    Einsteiger: [
      'Was ist der Unterschied zwischen var, let und const?',
      'Erklären Sie den Unterschied zwischen == und ===.',
      'Was sind Closures in JavaScript?',
      'Was ist der Unterschied zwischen null und undefined?',
      'Wie funktioniert Event Bubbling?',
      'Was ist Hoisting in JavaScript?',
      'Erklären Sie die Array-Methoden map, filter und reduce.',
      'Was ist der Unterschied zwischen Funktionsdeklaration und Funktionsausdruck?',
      'Was ist das DOM und wie interagiert JavaScript damit?',
      'Wie funktioniert die Typumwandlung in JavaScript?',
      'Was sind Template Literals?',
      'Erklären Sie Destructuring in JavaScript.',
      'Was ist der Spread-Operator?',
      'Wie funktionieren Promises?',
      'Was ist der Unterschied zwischen synchronem und asynchronem Code?',
    ],
    Fortgeschritten: [
      'Erklären Sie das Konzept der Prototypenkette.',
      'Was ist der Unterschied zwischen call, apply und bind?',
      'Wie funktioniert die Event Loop in JavaScript?',
      'Was sind WeakMap und WeakSet?',
      'Erklären Sie das Modul-System in JavaScript (CommonJS vs ES Modules).',
      'Was sind Generatoren und wie werden sie verwendet?',
      'Erklären Sie das Observer-Pattern in JavaScript.',
      'Was ist Debouncing und Throttling?',
      'Wie funktioniert Garbage Collection in JavaScript?',
      'Was sind Service Workers?',
      'Erklären Sie die Unterschiede zwischen REST und GraphQL.',
      'Was ist CORS und wie löst man CORS-Probleme?',
      'Wie implementiert man Error Handling in asynchronem Code?',
      'Was sind Proxy und Reflect in JavaScript?',
      'Erklären Sie die verschiedenen Design Patterns in JavaScript.',
    ],
    Experte: [
      'Wie funktioniert die V8-Engine intern?',
      'Erklären Sie die verschiedenen Speicheroptimierungen in JavaScript.',
      'Was sind die Unterschiede zwischen verschiedenen JS-Engines?',
      'Wie implementiert man eine eigene Promise-Bibliothek?',
      'Erklären Sie das Konzept von Micro- und Macro-Tasks.',
      'Was ist Tail Call Optimization?',
      'Wie optimiert man die Rendering-Performance einer Web-App?',
      'Erklären Sie die Internals von async/await.',
      'Was sind SharedArrayBuffer und Atomics?',
      'Wie implementiert man Thread-Sicherheit in Node.js?',
      'Erklären Sie die verschiedenen Caching-Strategien für Web-Apps.',
      'Was sind die Vor- und Nachteile von Microfrontends?',
      'Wie implementiert man eine eigene Virtual DOM Bibliothek?',
      'Erklären Sie WebAssembly und seine Integration mit JavaScript.',
      'Wie designt man eine skalierbare Event-Driven-Architektur?',
    ],
  },
  TypeScript: {
    Einsteiger: [
      'Was ist der Vorteil von TypeScript gegenüber JavaScript?',
      'Erklären Sie die grundlegenden Typen in TypeScript.',
      'Was ist der Unterschied zwischen Interface und Type?',
      'Wie funktionieren Generics in TypeScript?',
      'Was ist eine Union Type?',
      'Erklären Sie optionale Properties in TypeScript.',
      'Was ist Type Inference?',
      'Wie definiert man ein Enum in TypeScript?',
      'Was ist der Unterschied zwischen any und unknown?',
      'Erklären Sie die tsconfig.json Konfiguration.',
      'Was sind Tuple-Typen?',
      'Wie funktioniert Type Narrowing?',
      'Was ist der never-Typ?',
      'Erklären Sie Index Signatures.',
      'Was ist der Readonly-Modifikator?',
    ],
    Fortgeschritten: [
      'Erklären Sie Conditional Types in TypeScript.',
      'Was sind Mapped Types?',
      'Wie funktionieren Template Literal Types?',
      'Was ist die infer-Keyword?',
      'Erklären Sie Discriminated Unions.',
      'Wie verwendet man Utility Types (Partial, Required, Pick, Omit)?',
      'Was sind Declaration Files (.d.ts)?',
      'Erklären Sie Module Augmentation.',
      'Wie funktioniert die Kovarianz und Kontravarianz in TypeScript?',
      'Was ist Structural Typing vs. Nominal Typing?',
      'Erklären Sie Type Guards und ihre Implementierung.',
      'Was sind Abstract Classes und wann verwendet man sie?',
      'Wie implementiert man Decorator-Pattern in TypeScript?',
      'Erklären Sie Project References in TypeScript.',
      'Was ist die strict-Konfiguration und ihre Auswirkungen?',
    ],
    Experte: [
      'Wie implementiert man einen Typ-sicheren Event Emitter?',
      'Erklären Sie fortgeschrittene Pattern Matching mit TypeScript.',
      'Wie designt man eine typ-sichere API-Client-Bibliothek?',
      'Was sind die Limitierungen des TypeScript Type Systems?',
      'Erklären Sie die Compiler-API von TypeScript.',
      'Wie implementiert man Type-Level Programming?',
      'Was sind Higher-Kinded Types und wie simuliert man sie?',
      'Erklären Sie die Architektur des TypeScript-Compilers.',
      'Wie optimiert man die Compile-Performance großer Projekte?',
      'Was sind Variadic Tuple Types und ihre Anwendungen?',
      'Erklären Sie die Unterschiede zwischen TypeScript und Flow.',
      'Wie implementiert man einen Custom Language Service Plugin?',
      'Was ist die Rolle von TypeScript in monorepo-Setups?',
      'Erklären Sie Type Erasure und seine Implikationen.',
      'Wie designt man ein Framework mit maximaler Type Safety?',
    ],
  },
  React: {
    Einsteiger: [
      'Was ist der Unterschied zwischen State und Props?',
      'Erklären Sie den React Component Lifecycle.',
      'Was ist JSX und warum wird es verwendet?',
      'Wie funktioniert Conditional Rendering in React?',
      'Was ist der Unterschied zwischen Funktions- und Klassenkomponenten?',
      'Erklären Sie den useState Hook.',
      'Was ist der Virtual DOM?',
      'Wie erstellt man Listen in React?',
      'Was ist die Bedeutung von Keys in React?',
      'Erklären Sie Event Handling in React.',
      'Was ist React Fragment?',
      'Wie funktioniert der useEffect Hook?',
      'Was sind Controlled vs Uncontrolled Components?',
      'Erklären Sie Props Drilling.',
      'Was ist React StrictMode?',
    ],
    Fortgeschritten: [
      'Erklären Sie das Context API und seine Verwendung.',
      'Was ist React.memo und wann sollte man es verwenden?',
      'Wie funktioniert useCallback und useMemo?',
      'Was sind Custom Hooks und wann erstellt man sie?',
      'Erklären Sie Error Boundaries.',
      'Was ist der Unterschied zwischen useRef und createRef?',
      'Wie implementiert man Code-Splitting in React?',
      'Erklären Sie die Reconciliation in React.',
      'Was ist Suspense und wie funktioniert es?',
      'Wie implementiert man optimistisches UI-Update?',
      'Erklären Sie das Render-Verhalten von React.',
      'Was sind Higher-Order Components (HOC)?',
      'Wie funktioniert Server-Side Rendering?',
      'Erklären Sie die verschiedenen State-Management-Lösungen.',
      'Was ist React.lazy und Dynamic Imports?',
    ],
    Experte: [
      'Wie funktioniert der React Fiber Reconciler intern?',
      'Erklären Sie Concurrent Mode und seine Auswirkungen.',
      'Was ist die Architektur von React Server Components?',
      'Wie optimiert man eine React-App für 60fps Animationen?',
      'Erklären Sie die Implementierung eines eigenen Renderers.',
      'Was sind die Trade-offs zwischen verschiedenen State-Lösungen?',
      'Wie implementiert man ein Plugin-System in React?',
      'Erklären Sie die Streaming SSR Architektur.',
      'Was sind die Performance-Implikationen von Context?',
      'Wie designt man eine komponentenbasierte Design-System-Architektur?',
      'Erklären Sie React Compiler und seine Optimierungen.',
      'Was ist Selective Hydration?',
      'Wie implementiert man Accessibility in komplexen React-Apps?',
      'Erklären Sie die Unterschiede zwischen RSC und SSR.',
      'Wie designt man eine Micro-Frontend-Architektur mit React?',
    ],
  },
  Python: {
    Einsteiger: [
      'Was ist der Unterschied zwischen einer Liste und einem Tuple?',
      'Erklären Sie List Comprehensions.',
      'Was sind Dekoratoren in Python?',
      'Wie funktioniert die Speicherverwaltung in Python?',
      'Was ist der Unterschied zwischen args und kwargs?',
      'Erklären Sie den Unterschied zwischen is und ==.',
      'Was sind virtuelle Umgebungen?',
      'Wie funktioniert Error Handling mit try/except?',
      'Was ist der Unterschied zwischen range und xrange?',
      'Erklären Sie den Unterschied zwischen deep copy und shallow copy.',
      'Was sind Generators in Python?',
      'Wie funktioniert das import-System?',
      'Was ist der Global Interpreter Lock (GIL)?',
      'Erklären Sie die Datentypen in Python.',
      'Was ist PEP 8 und warum ist es wichtig?',
    ],
    Fortgeschritten: [
      'Erklären Sie Metaklassen in Python.',
      'Wie funktioniert das Descriptor Protocol?',
      'Was sind Context Manager und wie implementiert man sie?',
      'Erklären Sie async/await in Python.',
      'Wie funktioniert die MRO (Method Resolution Order)?',
      'Was sind Abstract Base Classes?',
      'Erklären Sie Slots in Python-Klassen.',
      'Wie implementiert man ein Observer Pattern?',
      'Was ist der Unterschied zwischen threading und multiprocessing?',
      'Erklären Sie Type Hints und ihre Verwendung.',
      'Wie funktioniert das GC (Garbage Collection) in Python?',
      'Was sind Coroutinen?',
      'Erklären Sie das Konzept von Monkey Patching.',
      'Wie optimiert man Python-Code für Performance?',
      'Was sind Dataclasses und wann verwendet man sie?',
    ],
    Experte: [
      'Erklären Sie die CPython-Architektur.',
      'Wie implementiert man einen eigenen Import Hook?',
      'Was sind die Internals des Python Bytecode-Compilers?',
      'Erklären Sie das Konzept von Free Variables und Closures in CPython.',
      'Wie optimiert man Python für parallele Berechnung trotz GIL?',
      'Was sind die Unterschiede zwischen CPython, PyPy und Cython?',
      'Erklären Sie die Implementierung von Python C-Extensions.',
      'Wie designt man ein Plugin-System in Python?',
      'Was sind die Best Practices für Python-Packaging?',
      'Erklären Sie die Internals von async I/O in Python.',
      'Wie implementiert man Memory-efficient Datenstrukturen?',
      'Was ist das Konzept von Zero-Copy in Python?',
      'Erklären Sie die verschiedenen Python Testing Frameworks.',
      'Wie designt man eine skalierbare Python-Microservice-Architektur?',
      'Was sind die Best Practices für Python-Security?',
    ],
  },
  Java: {
    Einsteiger: [
      'Was ist der Unterschied zwischen JDK, JRE und JVM?',
      'Erklären Sie die OOP-Prinzipien in Java.',
      'Was ist der Unterschied zwischen Interface und Abstract Class?',
      'Wie funktioniert die Speicherverwaltung in Java?',
      'Was ist der Unterschied zwischen Stack und Heap?',
      'Erklären Sie den Unterschied zwischen equals() und ==.',
      'Was sind Generics in Java?',
      'Wie funktioniert Exception Handling?',
      'Was ist der Unterschied zwischen Checked und Unchecked Exceptions?',
      'Erklären Sie die Collections Framework.',
      'Was ist Multithreading in Java?',
      'Wie funktioniert das final Keyword?',
      'Was ist der Unterschied zwischen String, StringBuilder und StringBuffer?',
      'Erklären Sie Access Modifiers in Java.',
      'Was sind Annotations?',
    ],
    Fortgeschritten: [
      'Erklären Sie das Java Memory Model.',
      'Was ist der Unterschied zwischen synchronized und Lock?',
      'Wie funktioniert der Garbage Collector?',
      'Erklären Sie das Stream API.',
      'Was sind Functional Interfaces?',
      'Wie implementiert man Immutable Classes?',
      'Erklären Sie das Observer Pattern mit Java.',
      'Was ist Reflection und wann verwendet man es?',
      'Wie funktioniert Class Loading?',
      'Was sind die Unterschiede zwischen HashMap und ConcurrentHashMap?',
      'Erklären Sie Optional und seine Best Practices.',
      'Was ist der Unterschied zwischen Composition und Inheritance?',
      'Wie implementiert man Thread-Safe Singleton?',
      'Erklären Sie die verschiedenen GC-Algorithmen.',
      'Was sind Records in Java?',
    ],
    Experte: [
      'Erklären Sie die JVM-Architektur im Detail.',
      'Wie funktioniert JIT-Compilation?',
      'Was ist der Unterschied zwischen G1, ZGC und Shenandoah?',
      'Erklären Sie Project Loom und Virtual Threads.',
      'Wie optimiert man Java-Apps für High-Throughput?',
      'Was sind die Internals von Spring Framework?',
      'Erklären Sie die verschiedenen Concurrency-Primitives.',
      'Wie implementiert man einen eigenen ClassLoader?',
      'Was ist GraalVM und seine Vorteile?',
      'Erklären Sie die Architektur von Reactive Streams.',
      'Wie designt man eine Event-Sourcing Architektur in Java?',
      'Was sind die Vor- und Nachteile von Microservices vs. Monolith?',
      'Erklären Sie die Container-Optimierung für Java-Apps.',
      'Wie implementiert man eine Custom Annotation Processor?',
      'Was sind die Best Practices für Java Security?',
    ],
  },
  Node_js: {
    Einsteiger: [
      'Was ist Node.js und wie unterscheidet es sich vom Browser-JavaScript?',
      'Erklären Sie das Event Loop Modell in Node.js.',
      'Was ist npm und wie funktioniert das Paketmanagement?',
      'Wie erstellt man einen HTTP-Server mit Node.js?',
      'Was sind Streams in Node.js?',
      'Erklären Sie das Callback-Pattern.',
      'Was ist der Unterschied zwischen CommonJS und ES Modules?',
      'Wie funktioniert das Dateisystem-Modul (fs)?',
      'Was ist Express.js und warum wird es verwendet?',
      'Erklären Sie Middleware in Express.',
      'Was ist der Unterschied zwischen process.nextTick und setImmediate?',
      'Wie funktioniert Error-First Callbacks?',
      'Was sind Environment Variables?',
      'Erklären Sie das Path-Modul.',
      'Was ist REPL in Node.js?',
    ],
    Fortgeschritten: [
      'Erklären Sie Cluster-Modul und Worker Threads.',
      'Wie implementiert man Rate Limiting?',
      'Was sind die Best Practices für API Design in Node.js?',
      'Erklären Sie das Concept von Backpressure in Streams.',
      'Wie funktioniert Connection Pooling?',
      'Was sind die Unterschiede zwischen REST und GraphQL in Node.js?',
      'Erklären Sie JWT Authentication.',
      'Wie implementiert man Logging in Production?',
      'Was ist PM2 und wie verwendet man es?',
      'Erklären Sie Caching-Strategien für Node.js-Apps.',
      'Wie funktioniert WebSocket in Node.js?',
      'Was sind die Best Practices für Error Handling?',
      'Erklären Sie das Konzept von Event-Driven Architecture.',
      'Wie implementiert man Graceful Shutdown?',
      'Was ist die Rolle von Buffers in Node.js?',
    ],
    Experte: [
      'Erklären Sie die V8 Garbage Collection in Node.js.',
      'Wie optimiert man Node.js für CPU-intensive Tasks?',
      'Was sind N-API und wie erstellt man native Add-ons?',
      'Erklären Sie die Architektur von libuv.',
      'Wie implementiert man Zero-Downtime Deployments?',
      'Was sind die Strategien für horizontale Skalierung?',
      'Erklären Sie Memory Leak Detection und Prevention.',
      'Wie designt man eine Event-Sourcing Architektur?',
      'Was sind die Best Practices für Microservices mit Node.js?',
      'Erklären Sie APM (Application Performance Monitoring).',
      'Wie implementiert man einen Custom Stream?',
      'Was ist die Rolle von WASI in Node.js?',
      'Erklären Sie die verschiedenen Testing-Strategien.',
      'Wie optimiert man die Startup-Zeit von Node.js-Apps?',
      'Was sind die Security Best Practices für Node.js in Production?',
    ],
  },
  AWS: {
    Einsteiger: [
      'Was ist der Unterschied zwischen EC2, ECS und Lambda?',
      'Erklären Sie S3 und seine Storage-Klassen.',
      'Was ist IAM und wie funktioniert Access Management?',
      'Wie funktioniert VPC Networking?',
      'Was ist der Unterschied zwischen RDS und DynamoDB?',
      'Erklären Sie CloudFormation.',
      'Was ist Elastic Load Balancing?',
      'Wie funktioniert Auto Scaling?',
      'Was ist CloudWatch und wofür wird es verwendet?',
      'Erklären Sie Route 53.',
      'Was ist SNS vs SQS?',
      'Wie funktioniert CloudFront?',
      'Was sind Security Groups vs NACLs?',
      'Erklären Sie den Unterschied zwischen Public und Private Subnets.',
      'Was ist AWS Regions und Availability Zones?',
    ],
    Fortgeschritten: [
      'Erklären Sie die Well-Architected Framework Pillars.',
      'Wie implementiert man Multi-AZ Deployments?',
      'Was sind die Best Practices für Cost Optimization?',
      'Erklären Sie Event-Driven Architektur mit AWS Services.',
      'Wie funktioniert AWS Organizations und Multi-Account Setup?',
      'Was ist der Unterschied zwischen Step Functions und SWF?',
      'Erklären Sie die verschiedenen Database-Migration-Strategien.',
      'Wie implementiert man CI/CD mit AWS CodePipeline?',
      'Was sind die Encryption-Optionen in AWS?',
      'Erklären Sie Container-Orchestrierung mit ECS vs EKS.',
      'Wie implementiert man Disaster Recovery?',
      'Was ist AWS WAF und wie konfiguriert man es?',
      'Erklären Sie Serverless Application Model (SAM).',
      'Wie optimiert man Lambda Cold Starts?',
      'Was sind die Best Practices für Logging und Monitoring?',
    ],
    Experte: [
      'Wie designt man eine Multi-Region Active-Active Architektur?',
      'Erklären Sie die Internals von DynamoDB Partitioning.',
      'Was sind die Strategien für Legacy Migration zu AWS?',
      'Erklären Sie die Architektur von Serverless Data Lakes.',
      'Wie implementiert man Zero-Trust Security auf AWS?',
      'Was sind die Trade-offs zwischen verschiedenen Compute-Optionen?',
      'Erklären Sie Custom Resource Providers in CloudFormation.',
      'Wie optimiert man AWS-Kosten für großskalige Anwendungen?',
      'Was sind die Best Practices für HIPAA/GDPR Compliance?',
      'Erklären Sie die Architektur von Real-Time Data Processing.',
      'Wie designt man eine Hybrid-Cloud-Architektur?',
      'Was sind die Strategien für Database Sharding auf AWS?',
      'Erklären Sie FinOps und Cloud-Kostenmanagement.',
      'Wie implementiert man Chaos Engineering auf AWS?',
      'Was sind die Best Practices für Large-Scale Kubernetes auf EKS?',
    ],
  },
};

// Default questions for techs not in detailed DB
const defaultQuestions: Record<string, string[]> = {
  Einsteiger: [
    'Was sind die grundlegenden Konzepte dieser Technologie?',
    'Welche Probleme löst diese Technologie?',
    'Erklären Sie die grundlegende Architektur.',
    'Was sind die Vor- und Nachteile?',
    'Wie unterscheidet sich diese Technologie von Alternativen?',
    'Was ist das Ökosystem rund um diese Technologie?',
    'Wie sieht ein typisches Projekt-Setup aus?',
    'Was sind die wichtigsten Best Practices?',
    'Erklären Sie die grundlegenden Datenstrukturen.',
    'Wie funktioniert das Dependency Management?',
    'Was sind die gängigsten Frameworks?',
    'Erklären Sie den typischen Entwicklungsworkflow.',
    'Was sind die Mindestanforderungen für den Einstieg?',
    'Wie funktioniert das Testing?',
    'Was sind die häufigsten Anfängerfehler?',
  ],
  Fortgeschritten: [
    'Erklären Sie fortgeschrittene Design Patterns in diesem Kontext.',
    'Wie optimiert man die Performance?',
    'Was sind die Best Practices für Skalierung?',
    'Erklären Sie die Sicherheitskonzepte.',
    'Wie funktioniert das Monitoring?',
    'Was sind die Best Practices für CI/CD?',
    'Erklären Sie die Concurrency-Modelle.',
    'Wie implementiert man Caching effektiv?',
    'Was sind die gängigen Anti-Patterns?',
    'Erklären Sie die Integration mit anderen Systemen.',
    'Wie funktioniert das Error Handling in Production?',
    'Was sind die Best Practices für Logging?',
    'Erklären Sie die verschiedenen Testing-Strategien.',
    'Wie implementiert man Feature Flags?',
    'Was sind die gängigen Architekturmuster?',
  ],
  Experte: [
    'Erklären Sie die interne Architektur im Detail.',
    'Wie optimiert man für extremen Durchsatz?',
    'Was sind die Limitierungen und wie umgeht man sie?',
    'Erklären Sie die verschiedenen Skalierungsstrategien.',
    'Wie implementiert man eine Plugin-Architektur?',
    'Was sind die Best Practices für Multi-Tenancy?',
    'Erklären Sie die verschiedenen Deployment-Strategien.',
    'Wie designt man eine Disaster-Recovery-Strategie?',
    'Was sind die Compliance-Anforderungen?',
    'Erklären Sie die verschiedenen Migration-Strategien.',
    'Wie implementiert man Observability?',
    'Was sind die Best Practices für Security Hardening?',
    'Erklären Sie die verschiedenen Konsistenzmodelle.',
    'Wie designt man eine Event-Driven-Architektur?',
    'Was sind die Best Practices für Performance Profiling?',
  ],
};

function shuffleAndPick(arr: string[], count: number, seed: number): string[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function InterviewFragenGeneratorPage() {
  const [technology, setTechnology] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [seed, setSeed] = useState(1);

  const generate = useCallback(() => {
    if (!technology || !difficulty) return;

    const techKey = technology.replace('.', '_').replace(' ', '_');
    const pool = questionsDb[techKey]?.[difficulty] || defaultQuestions[difficulty] || [];
    const newSeed = Date.now() % 100000;
    setSeed(newSeed);
    const selected = shuffleAndPick(pool, Math.min(12, pool.length), newSeed);
    setQuestions(selected.map((text, i) => ({
      id: i + 1,
      text,
      difficulty,
    })));
  }, [technology, difficulty]);

  const regenerate = () => {
    if (!technology || !difficulty) return;
    const techKey = technology.replace('.', '_').replace(' ', '_');
    const pool = questionsDb[techKey]?.[difficulty] || defaultQuestions[difficulty] || [];
    const newSeed = seed + 7919;
    setSeed(newSeed);
    const selected = shuffleAndPick(pool, Math.min(12, pool.length), newSeed);
    setQuestions(selected.map((text, i) => ({
      id: i + 1,
      text,
      difficulty,
    })));
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Interview-Fragen-Generator',
    description: 'Generieren Sie technische Interviewfragen für Entwickler nach Technologie und Schwierigkeitsgrad.',
    url: 'https://programmier-anfang.de/tools/interview-fragen-generator',
    applicationCategory: 'BusinessApplication',
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
          { label: 'Interview-Fragen-Generator', href: '/tools/interview-fragen-generator' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">Interview-Fragen-Generator</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Technische Interviewfragen, passend zu Ihrer Technologie und dem gewünschten Level. Einfach generieren.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fragen generieren</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologie</label>
                <select
                  value={technology}
                  onChange={(e) => { setTechnology(e.target.value); setQuestions([]); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
                  {technologies.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Schwierigkeitsgrad</label>
                <select
                  value={difficulty}
                  onChange={(e) => { setDifficulty(e.target.value); setQuestions([]); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
                  {difficultyLevels.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={generate}
                disabled={!technology || !difficulty}
                className="flex-1 py-3 px-6 text-white font-semibold bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-colors text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Fragen generieren
              </button>
              {questions.length > 0 && (
                <button
                  onClick={regenerate}
                  className="py-3 px-6 text-[rgb(0,159,255)] font-semibold border-2 border-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,159,255)]/5 transition-colors"
                >
                  Neu generieren
                </button>
              )}
            </div>

            {/* Questions */}
            {questions.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {technology} - {difficulty} ({questions.length} Fragen)
                  </h3>
                </div>
                <ol className="space-y-4">
                  {questions.map((q) => (
                    <li key={q.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgb(0,159,255)] text-white flex items-center justify-center text-sm font-bold">
                        {q.id}
                      </span>
                      <p className="text-gray-900 pt-1">{q.text}</p>
                    </li>
                  ))}
                </ol>

                {/* CTA */}
                <div className="mt-10 p-6 bg-[rgb(23,162,69)]/5 rounded-xl border border-[rgb(23,162,69)]/20 text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Lassen Sie uns die Interviews für Sie führen
                  </p>
                  <p className="text-gray-600 mb-4">
                    Unsere Experten prüfen und bewerten Kandidaten mit technischen Interviews.
                  </p>
                  <a
                    href="/hire-developers"
                    className="inline-block px-6 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                  >
                    Entwickler einstellen
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Verwandte Tools & Ressourcen"
        links={[
          { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
          { label: 'Skill-Assessment', href: '/tools/skill-assessment' },
          { label: 'Technologie-Vergleich', href: '/tools/technologie-vergleich' },
          { label: 'Projekt-Schätzung', href: '/tools/projekt-schaetzung' },
          { label: 'React-Entwickler einstellen', href: '/hire-developers/reactjs' },
          { label: 'Python-Entwickler einstellen', href: '/hire-developers/python' },
          { label: 'Java-Entwickler einstellen', href: '/hire-developers/java' },
          { label: 'Node.js-Entwickler einstellen', href: '/hire-developers/nodejs' },
        ]}
      />

      <FinalCTA
        heading="Sparen Sie sich den Interviewprozess"
        subheading="Wir prüfen Kandidaten für Sie - technisch und kulturell."
      />

      <Footer />
    </div>
  );
}
