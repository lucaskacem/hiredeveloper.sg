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

const difficultyLevels = ['Beginner', 'Intermediate', 'Expert'];

const questionsDb: Record<string, Record<string, string[]>> = {
  JavaScript: {
    Beginner: [
      'What is the difference between var, let, and const?',
      'Explain the difference between == and ===.',
      'What are closures in JavaScript?',
      'What is the difference between null and undefined?',
      'How does event bubbling work?',
      'What is hoisting in JavaScript?',
      'Explain the array methods map, filter, and reduce.',
      'What is the difference between a function declaration and a function expression?',
      'What is the DOM and how does JavaScript interact with it?',
      'How does type coercion work in JavaScript?',
      'What are template literals?',
      'Explain destructuring in JavaScript.',
      'What is the spread operator?',
      'How do promises work?',
      'What is the difference between synchronous and asynchronous code?',
    ],
    Intermediate: [
      'Explain the concept of the prototype chain.',
      'What is the difference between call, apply, and bind?',
      'How does the event loop work in JavaScript?',
      'What are WeakMap and WeakSet?',
      'Explain the module system in JavaScript (CommonJS vs ES Modules).',
      'What are generators and how are they used?',
      'Explain the observer pattern in JavaScript.',
      'What is debouncing and throttling?',
      'How does garbage collection work in JavaScript?',
      'What are service workers?',
      'Explain the differences between REST and GraphQL.',
      'What is CORS and how do you solve CORS issues?',
      'How do you implement error handling in asynchronous code?',
      'What are Proxy and Reflect in JavaScript?',
      'Explain the various design patterns in JavaScript.',
    ],
    Expert: [
      'How does the V8 engine work internally?',
      'Explain the different memory optimizations in JavaScript.',
      'What are the differences between various JS engines?',
      'How would you implement your own Promise library?',
      'Explain the concept of micro-tasks and macro-tasks.',
      'What is tail call optimization?',
      'How do you optimize the rendering performance of a web app?',
      'Explain the internals of async/await.',
      'What are SharedArrayBuffer and Atomics?',
      'How do you implement thread safety in Node.js?',
      'Explain the different caching strategies for web apps.',
      'What are the pros and cons of microfrontends?',
      'How would you implement your own virtual DOM library?',
      'Explain WebAssembly and its integration with JavaScript.',
      'How do you design a scalable event-driven architecture?',
    ],
  },
  TypeScript: {
    Beginner: [
      'What is the advantage of TypeScript over JavaScript?',
      'Explain the basic types in TypeScript.',
      'What is the difference between interface and type?',
      'How do generics work in TypeScript?',
      'What is a union type?',
      'Explain optional properties in TypeScript.',
      'What is type inference?',
      'How do you define an enum in TypeScript?',
      'What is the difference between any and unknown?',
      'Explain the tsconfig.json configuration.',
      'What are tuple types?',
      'How does type narrowing work?',
      'What is the never type?',
      'Explain index signatures.',
      'What is the readonly modifier?',
    ],
    Intermediate: [
      'Explain conditional types in TypeScript.',
      'What are mapped types?',
      'How do template literal types work?',
      'What is the infer keyword?',
      'Explain discriminated unions.',
      'How do you use utility types (Partial, Required, Pick, Omit)?',
      'What are declaration files (.d.ts)?',
      'Explain module augmentation.',
      'How do covariance and contravariance work in TypeScript?',
      'What is structural typing vs. nominal typing?',
      'Explain type guards and their implementation.',
      'What are abstract classes and when do you use them?',
      'How do you implement the decorator pattern in TypeScript?',
      'Explain project references in TypeScript.',
      'What is the strict configuration and its effects?',
    ],
    Expert: [
      'How do you implement a type-safe event emitter?',
      'Explain advanced pattern matching with TypeScript.',
      'How do you design a type-safe API client library?',
      'What are the limitations of the TypeScript type system?',
      'Explain the TypeScript compiler API.',
      'How do you implement type-level programming?',
      'What are higher-kinded types and how do you simulate them?',
      'Explain the architecture of the TypeScript compiler.',
      'How do you optimize compile performance for large projects?',
      'What are variadic tuple types and their applications?',
      'Explain the differences between TypeScript and Flow.',
      'How do you implement a custom language service plugin?',
      'What is the role of TypeScript in monorepo setups?',
      'Explain type erasure and its implications.',
      'How do you design a framework with maximum type safety?',
    ],
  },
  React: {
    Beginner: [
      'What is the difference between state and props?',
      'Explain the React component lifecycle.',
      'What is JSX and why is it used?',
      'How does conditional rendering work in React?',
      'What is the difference between functional and class components?',
      'Explain the useState hook.',
      'What is the virtual DOM?',
      'How do you create lists in React?',
      'What is the significance of keys in React?',
      'Explain event handling in React.',
      'What is React Fragment?',
      'How does the useEffect hook work?',
      'What are controlled vs uncontrolled components?',
      'Explain props drilling.',
      'What is React StrictMode?',
    ],
    Intermediate: [
      'Explain the Context API and its usage.',
      'What is React.memo and when should you use it?',
      'How do useCallback and useMemo work?',
      'What are custom hooks and when do you create them?',
      'Explain error boundaries.',
      'What is the difference between useRef and createRef?',
      'How do you implement code-splitting in React?',
      'Explain reconciliation in React.',
      'What is Suspense and how does it work?',
      'How do you implement optimistic UI updates?',
      'Explain the rendering behavior of React.',
      'What are higher-order components (HOC)?',
      'How does server-side rendering work?',
      'Explain the various state management solutions.',
      'What is React.lazy and dynamic imports?',
    ],
    Expert: [
      'How does the React Fiber reconciler work internally?',
      'Explain concurrent mode and its effects.',
      'What is the architecture of React Server Components?',
      'How do you optimize a React app for 60fps animations?',
      'Explain the implementation of a custom renderer.',
      'What are the trade-offs between different state solutions?',
      'How do you implement a plugin system in React?',
      'Explain the streaming SSR architecture.',
      'What are the performance implications of Context?',
      'How do you design a component-based design system architecture?',
      'Explain React Compiler and its optimizations.',
      'What is selective hydration?',
      'How do you implement accessibility in complex React apps?',
      'Explain the differences between RSC and SSR.',
      'How do you design a micro-frontend architecture with React?',
    ],
  },
  Python: {
    Beginner: [
      'What is the difference between a list and a tuple?',
      'Explain list comprehensions.',
      'What are decorators in Python?',
      'How does memory management work in Python?',
      'What is the difference between *args and **kwargs?',
      'Explain the difference between is and ==.',
      'What are virtual environments?',
      'How does error handling work with try/except?',
      'What is the difference between range and xrange?',
      'Explain the difference between deep copy and shallow copy.',
      'What are generators in Python?',
      'How does the import system work?',
      'What is the Global Interpreter Lock (GIL)?',
      'Explain the data types in Python.',
      'What is PEP 8 and why is it important?',
    ],
    Intermediate: [
      'Explain metaclasses in Python.',
      'How does the descriptor protocol work?',
      'What are context managers and how do you implement them?',
      'Explain async/await in Python.',
      'How does the MRO (Method Resolution Order) work?',
      'What are abstract base classes?',
      'Explain slots in Python classes.',
      'How do you implement an observer pattern?',
      'What is the difference between threading and multiprocessing?',
      'Explain type hints and their usage.',
      'How does garbage collection work in Python?',
      'What are coroutines?',
      'Explain the concept of monkey patching.',
      'How do you optimize Python code for performance?',
      'What are dataclasses and when do you use them?',
    ],
    Expert: [
      'Explain the CPython architecture.',
      'How do you implement a custom import hook?',
      'What are the internals of the Python bytecode compiler?',
      'Explain the concept of free variables and closures in CPython.',
      'How do you optimize Python for parallel computation despite the GIL?',
      'What are the differences between CPython, PyPy, and Cython?',
      'Explain the implementation of Python C extensions.',
      'How do you design a plugin system in Python?',
      'What are the best practices for Python packaging?',
      'Explain the internals of async I/O in Python.',
      'How do you implement memory-efficient data structures?',
      'What is the concept of zero-copy in Python?',
      'Explain the various Python testing frameworks.',
      'How do you design a scalable Python microservice architecture?',
      'What are the best practices for Python security?',
    ],
  },
  Java: {
    Beginner: [
      'What is the difference between JDK, JRE, and JVM?',
      'Explain the OOP principles in Java.',
      'What is the difference between interface and abstract class?',
      'How does memory management work in Java?',
      'What is the difference between stack and heap?',
      'Explain the difference between equals() and ==.',
      'What are generics in Java?',
      'How does exception handling work?',
      'What is the difference between checked and unchecked exceptions?',
      'Explain the Collections framework.',
      'What is multithreading in Java?',
      'How does the final keyword work?',
      'What is the difference between String, StringBuilder, and StringBuffer?',
      'Explain access modifiers in Java.',
      'What are annotations?',
    ],
    Intermediate: [
      'Explain the Java Memory Model.',
      'What is the difference between synchronized and Lock?',
      'How does the garbage collector work?',
      'Explain the Stream API.',
      'What are functional interfaces?',
      'How do you implement immutable classes?',
      'Explain the observer pattern in Java.',
      'What is reflection and when do you use it?',
      'How does class loading work?',
      'What are the differences between HashMap and ConcurrentHashMap?',
      'Explain Optional and its best practices.',
      'What is the difference between composition and inheritance?',
      'How do you implement a thread-safe singleton?',
      'Explain the different GC algorithms.',
      'What are records in Java?',
    ],
    Expert: [
      'Explain the JVM architecture in detail.',
      'How does JIT compilation work?',
      'What is the difference between G1, ZGC, and Shenandoah?',
      'Explain Project Loom and virtual threads.',
      'How do you optimize Java apps for high throughput?',
      'What are the internals of the Spring framework?',
      'Explain the different concurrency primitives.',
      'How do you implement a custom ClassLoader?',
      'What is GraalVM and its advantages?',
      'Explain the architecture of reactive streams.',
      'How do you design an event-sourcing architecture in Java?',
      'What are the pros and cons of microservices vs. monolith?',
      'Explain container optimization for Java apps.',
      'How do you implement a custom annotation processor?',
      'What are the best practices for Java security?',
    ],
  },
  Node_js: {
    Beginner: [
      'What is Node.js and how does it differ from browser JavaScript?',
      'Explain the event loop model in Node.js.',
      'What is npm and how does package management work?',
      'How do you create an HTTP server with Node.js?',
      'What are streams in Node.js?',
      'Explain the callback pattern.',
      'What is the difference between CommonJS and ES Modules?',
      'How does the file system module (fs) work?',
      'What is Express.js and why is it used?',
      'Explain middleware in Express.',
      'What is the difference between process.nextTick and setImmediate?',
      'How do error-first callbacks work?',
      'What are environment variables?',
      'Explain the path module.',
      'What is REPL in Node.js?',
    ],
    Intermediate: [
      'Explain the cluster module and worker threads.',
      'How do you implement rate limiting?',
      'What are the best practices for API design in Node.js?',
      'Explain the concept of backpressure in streams.',
      'How does connection pooling work?',
      'What are the differences between REST and GraphQL in Node.js?',
      'Explain JWT authentication.',
      'How do you implement logging in production?',
      'What is PM2 and how do you use it?',
      'Explain caching strategies for Node.js apps.',
      'How do WebSockets work in Node.js?',
      'What are the best practices for error handling?',
      'Explain the concept of event-driven architecture.',
      'How do you implement graceful shutdown?',
      'What is the role of buffers in Node.js?',
    ],
    Expert: [
      'Explain V8 garbage collection in Node.js.',
      'How do you optimize Node.js for CPU-intensive tasks?',
      'What are N-API and how do you create native add-ons?',
      'Explain the architecture of libuv.',
      'How do you implement zero-downtime deployments?',
      'What are the strategies for horizontal scaling?',
      'Explain memory leak detection and prevention.',
      'How do you design an event-sourcing architecture?',
      'What are the best practices for microservices with Node.js?',
      'Explain APM (Application Performance Monitoring).',
      'How do you implement a custom stream?',
      'What is the role of WASI in Node.js?',
      'Explain the various testing strategies.',
      'How do you optimize the startup time of Node.js apps?',
      'What are the security best practices for Node.js in production?',
    ],
  },
  AWS: {
    Beginner: [
      'What is the difference between EC2, ECS, and Lambda?',
      'Explain S3 and its storage classes.',
      'What is IAM and how does access management work?',
      'How does VPC networking work?',
      'What is the difference between RDS and DynamoDB?',
      'Explain CloudFormation.',
      'What is Elastic Load Balancing?',
      'How does Auto Scaling work?',
      'What is CloudWatch and what is it used for?',
      'Explain Route 53.',
      'What is SNS vs SQS?',
      'How does CloudFront work?',
      'What are Security Groups vs NACLs?',
      'Explain the difference between public and private subnets.',
      'What are AWS Regions and Availability Zones?',
    ],
    Intermediate: [
      'Explain the Well-Architected Framework Pillars.',
      'How do you implement multi-AZ deployments?',
      'What are the best practices for cost optimization?',
      'Explain event-driven architecture with AWS services.',
      'How do AWS Organizations and multi-account setup work?',
      'What is the difference between Step Functions and SWF?',
      'Explain the different database migration strategies.',
      'How do you implement CI/CD with AWS CodePipeline?',
      'What are the encryption options in AWS?',
      'Explain container orchestration with ECS vs EKS.',
      'How do you implement disaster recovery?',
      'What is AWS WAF and how do you configure it?',
      'Explain the Serverless Application Model (SAM).',
      'How do you optimize Lambda cold starts?',
      'What are the best practices for logging and monitoring?',
    ],
    Expert: [
      'How do you design a multi-region active-active architecture?',
      'Explain the internals of DynamoDB partitioning.',
      'What are the strategies for legacy migration to AWS?',
      'Explain the architecture of serverless data lakes.',
      'How do you implement zero-trust security on AWS?',
      'What are the trade-offs between different compute options?',
      'Explain custom resource providers in CloudFormation.',
      'How do you optimize AWS costs for large-scale applications?',
      'What are the best practices for HIPAA/GDPR compliance?',
      'Explain the architecture of real-time data processing.',
      'How do you design a hybrid cloud architecture?',
      'What are the strategies for database sharding on AWS?',
      'Explain FinOps and cloud cost management.',
      'How do you implement chaos engineering on AWS?',
      'What are the best practices for large-scale Kubernetes on EKS?',
    ],
  },
};

// Default questions for techs not in detailed DB
const defaultQuestions: Record<string, string[]> = {
  Beginner: [
    'What are the fundamental concepts of this technology?',
    'What problems does this technology solve?',
    'Explain the basic architecture.',
    'What are the pros and cons?',
    'How does this technology differ from alternatives?',
    'What is the ecosystem around this technology?',
    'What does a typical project setup look like?',
    'What are the most important best practices?',
    'Explain the basic data structures.',
    'How does dependency management work?',
    'What are the most common frameworks?',
    'Explain the typical development workflow.',
    'What are the minimum requirements to get started?',
    'How does testing work?',
    'What are the most common beginner mistakes?',
  ],
  Intermediate: [
    'Explain advanced design patterns in this context.',
    'How do you optimize performance?',
    'What are the best practices for scaling?',
    'Explain the security concepts.',
    'How does monitoring work?',
    'What are the best practices for CI/CD?',
    'Explain the concurrency models.',
    'How do you implement caching effectively?',
    'What are the common anti-patterns?',
    'Explain integration with other systems.',
    'How does error handling work in production?',
    'What are the best practices for logging?',
    'Explain the various testing strategies.',
    'How do you implement feature flags?',
    'What are the common architecture patterns?',
  ],
  Expert: [
    'Explain the internal architecture in detail.',
    'How do you optimize for extreme throughput?',
    'What are the limitations and how do you work around them?',
    'Explain the different scaling strategies.',
    'How do you implement a plugin architecture?',
    'What are the best practices for multi-tenancy?',
    'Explain the different deployment strategies.',
    'How do you design a disaster recovery strategy?',
    'What are the compliance requirements?',
    'Explain the different migration strategies.',
    'How do you implement observability?',
    'What are the best practices for security hardening?',
    'Explain the different consistency models.',
    'How do you design an event-driven architecture?',
    'What are the best practices for performance profiling?',
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

export default function InterviewQuestionsPage() {
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
    name: 'Interview Questions Generator',
    description: 'Generate technical interview questions for developers by technology and difficulty level.',
    url: 'https://hiredeveloper.sg/tools/interview-questions',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Interview Questions', href: '/tools/interview-questions' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h1 className="text-[42px] font-bold mb-4">Interview Questions Generator</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Technical interview questions tailored to your technology and desired level. Simply generate them.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Generate Questions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
                <select
                  value={technology}
                  onChange={(e) => { setTechnology(e.target.value); setQuestions([]); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Please select...</option>
                  {technologies.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                <select
                  value={difficulty}
                  onChange={(e) => { setDifficulty(e.target.value); setQuestions([]); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Please select...</option>
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
                Generate Questions
              </button>
              {questions.length > 0 && (
                <button
                  onClick={regenerate}
                  className="py-3 px-6 text-[rgb(0,159,255)] font-semibold border-2 border-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,159,255)]/5 transition-colors"
                >
                  Regenerate
                </button>
              )}
            </div>

            {/* Questions */}
            {questions.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {technology} - {difficulty} ({questions.length} Questions)
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
                    Let us conduct the interviews for you
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our experts screen and evaluate candidates with technical interviews.
                  </p>
                  <a
                    href="/hire-developers"
                    className="inline-block px-6 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                  >
                    Hire Developers
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Related Tools & Resources"
        links={[
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Skill Assessment', href: '/tools/skill-assessment' },
          { label: 'Technology Comparison', href: '/tools/technology-comparison' },
          { label: 'Project Estimation', href: '/tools/project-estimation' },
          { label: 'Hire React Developers', href: '/hire-developers/reactjs' },
          { label: 'Hire Python Developers', href: '/hire-developers/python' },
          { label: 'Hire Java Developers', href: '/hire-developers/java' },
          { label: 'Hire Node.js Developers', href: '/hire-developers/nodejs' },
        ]}
      />

      <FinalCTA
        heading="Skip the Interview Process"
        subheading="We screen candidates for you - technically and culturally."
      />

      <Footer />
    </div>
  );
}
