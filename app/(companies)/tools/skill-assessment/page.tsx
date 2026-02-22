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
    { question: 'What does typeof null return?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], correct: 2 },
    { question: 'Which keyword creates a block scope?', options: ['var', 'let', 'function', 'global'], correct: 1 },
    { question: 'What is the result of [] + []?', options: ['[]', '""', 'undefined', 'NaN'], correct: 1 },
    { question: 'Which method creates a shallow copy of an array?', options: ['.copy()', '.clone()', '.slice()', '.duplicate()'], correct: 2 },
    { question: 'What is a closure?', options: ['A closed block', 'A function with access to its outer scope', 'A syntax error', 'A data type'], correct: 1 },
    { question: 'What does console.log(1 + "2") output?', options: ['3', '"12"', 'NaN', 'TypeError'], correct: 1 },
    { question: 'How do you stop event propagation?', options: ['event.stop()', 'event.stopPropagation()', 'event.cancel()', 'event.halt()'], correct: 1 },
    { question: 'What is the difference between == and ===?', options: ['No difference', '=== also checks the type', '== is faster', '=== is deprecated'], correct: 1 },
    { question: 'Which loop is best for asynchronous iterations?', options: ['for', 'while', 'for...of with await', 'forEach'], correct: 2 },
    { question: 'What is the output of typeof undefined?', options: ['"null"', '"undefined"', '"void"', '"NaN"'], correct: 1 },
  ],
  TypeScript: [
    { question: 'How do you define an optional parameter?', options: ['param!: string', 'param?: string', 'param: string | null', 'optional param: string'], correct: 1 },
    { question: 'What is the difference between any and unknown?', options: ['No difference', 'unknown requires type checking before use', 'any is safer', 'unknown does not exist'], correct: 1 },
    { question: 'What is a generic in TypeScript?', options: ['A general data type', 'A parameterized type', 'An error', 'A module'], correct: 1 },
    { question: 'How do you create a readonly type?', options: ['const type T', 'Readonly<T>', 'freeze<T>', 'immutable T'], correct: 1 },
    { question: 'What is a union type?', options: ['A & B', 'A | B', 'A + B', 'A extends B'], correct: 1 },
    { question: 'How do you declare an interface?', options: ['type X = {}', 'interface X {}', 'class X {}', 'struct X {}'], correct: 1 },
    { question: 'What does the as keyword do?', options: ['Assignment', 'Type assertion', 'Alias', 'Async'], correct: 1 },
    { question: 'What is the never type?', options: ['Same as void', 'A type that never occurs', 'An error type', 'A legacy type'], correct: 1 },
    { question: 'Which utility creates a type with all optional properties?', options: ['Optional<T>', 'Partial<T>', 'Maybe<T>', 'Nullable<T>'], correct: 1 },
    { question: 'What is type narrowing?', options: ['Making types smaller', 'Narrowing types at runtime', 'Deleting types', 'Exporting types'], correct: 1 },
  ],
  React: [
    { question: 'What is the purpose of React.memo?', options: ['Store state', 'Prevent re-renders with same props', 'Memory management', 'Display memos'], correct: 1 },
    { question: 'Which hook replaces componentDidMount?', options: ['useState', 'useEffect', 'useRef', 'useMemo'], correct: 1 },
    { question: 'What is the correct way to update state that depends on previous state?', options: ['setState(newValue)', 'setState(prev => newValue)', 'state = newValue', 'this.state = newValue'], correct: 1 },
    { question: 'How do you avoid prop drilling?', options: ['Use more props', 'Context API or state management', 'Global variables', 'Fewer components'], correct: 1 },
    { question: 'What happens when the key of a component changes?', options: ['Nothing', 'Re-render', 'Complete remount', 'Error message'], correct: 2 },
    { question: 'What is the difference between useMemo and useCallback?', options: ['No difference', 'useMemo caches values, useCallback caches functions', 'useCallback is faster', 'useMemo is deprecated'], correct: 1 },
    { question: 'What are error boundaries?', options: ['CSS borders', 'Class components that catch errors', 'Try/catch blocks', 'Validation rules'], correct: 1 },
    { question: 'When does useEffect without a dependencies array run?', options: ['Never', 'Once', 'On every render', 'On state changes'], correct: 2 },
    { question: 'What is the virtual DOM?', options: ['A browser feature', 'An in-memory representation of the DOM', 'A CSS framework', 'A build tool'], correct: 1 },
    { question: 'How do you optimize a long list in React?', options: ['Use more state', 'Virtualization (e.g., react-window)', 'useEffect for each item', 'Inline styles'], correct: 1 },
  ],
  Python: [
    { question: 'What is the difference between list and tuple?', options: ['No difference', 'Tuples are immutable', 'Lists are faster', 'Tuples can only contain numbers'], correct: 1 },
    { question: 'What does len({1, 2, 2, 3}) return?', options: ['4', '3', '2', 'Error'], correct: 1 },
    { question: 'How do you create a decorator?', options: ['@decorator syntax', 'decorator() function', 'class Decorator', 'All are correct'], correct: 3 },
    { question: 'What is the GIL?', options: ['Global Integer Lock', 'Global Interpreter Lock', 'General Import Library', 'Generated Interface Layer'], correct: 1 },
    { question: 'What is list comprehension?', options: ['Understanding a list', 'Compact syntax for creating lists', 'A sorting algorithm', 'An import system'], correct: 1 },
    { question: 'How do you create a virtual environment?', options: ['python -m venv name', 'pip create-env', 'python --virtual', 'env create name'], correct: 0 },
    { question: 'What is self in Python classes?', options: ['A keyword', 'A reference to the current instance', 'A data type', 'A global variable'], correct: 1 },
    { question: 'What does type([]) return?', options: ['"array"', '<class "list">', '"list"', '<type "array">'], correct: 1 },
    { question: 'How do you import a specific element from a module?', options: ['import x from module', 'from module import x', 'require(module).x', 'include module.x'], correct: 1 },
    { question: 'What is the difference between append and extend?', options: ['No difference', 'append adds one element, extend adds iterable elements', 'extend is faster', 'append is deprecated'], correct: 1 },
  ],
  Java: [
    { question: 'What is the difference between interface and abstract class?', options: ['No difference', 'Interfaces cannot have implementations', 'Abstract classes can be multiply inherited', 'Interfaces cannot have default methods'], correct: 1 },
    { question: 'What is autoboxing in Java?', options: ['Automatic packaging', 'Automatic conversion between primitive types and wrapper classes', 'A design pattern', 'A build tool'], correct: 1 },
    { question: 'Which keyword prevents inheritance?', options: ['static', 'final', 'private', 'sealed'], correct: 1 },
    { question: 'What is the difference between String and StringBuilder?', options: ['No difference', 'StringBuilder is mutable', 'String is faster', 'StringBuilder is thread-safe'], correct: 1 },
    { question: 'What does the volatile keyword do?', options: ['Makes a variable faster', 'Guarantees visibility across threads', 'Deletes the variable', 'Makes it read-only'], correct: 1 },
    { question: 'What is garbage collection?', options: ['Code deletion', 'Automatic memory management', 'A design pattern', 'A testing framework'], correct: 1 },
    { question: 'How many classes can a class extend in Java?', options: ['Any number', 'Exactly one', 'Maximum two', 'None'], correct: 1 },
    { question: 'What is a stream in Java?', options: ['An I/O stream', 'A functional pipeline for collections', 'A thread', 'A network protocol'], correct: 1 },
    { question: 'What is the difference between == and equals()?', options: ['No difference', '== compares references, equals() compares content', '== is faster', 'equals() is deprecated'], correct: 1 },
    { question: 'What is a lambda expression?', options: ['A Greek letter', 'An anonymous function', 'A data type', 'An operator'], correct: 1 },
  ],
  'Node.js': [
    { question: 'What is the event loop?', options: ['A loop in HTML', 'A mechanism for asynchronous execution', 'A CSS feature', 'A database'], correct: 1 },
    { question: 'What is npm?', options: ['Node Package Manager', 'Network Protocol Module', 'New Programming Method', 'Node Process Monitor'], correct: 0 },
    { question: 'What is the difference between require and import?', options: ['No difference', 'require is CommonJS, import is ES Modules', 'import is faster', 'require is deprecated'], correct: 1 },
    { question: 'What is Express.js?', options: ['A database', 'A web framework for Node.js', 'A build tool', 'A test framework'], correct: 1 },
    { question: 'How do you read a file asynchronously?', options: ['fs.readFile()', 'file.read()', 'io.read()', 'stream.read()'], correct: 0 },
    { question: 'What is middleware?', options: ['Software in the middle', 'Functions that process request/response', 'A database layer', 'A frontend framework'], correct: 1 },
    { question: 'What is a buffer in Node.js?', options: ['A cache', 'An object for working with binary data', 'A UI buffer', 'A network buffer'], correct: 1 },
    { question: 'What does process.env do?', options: ['Start processes', 'Access environment variables', 'Change environment', 'Terminate process'], correct: 1 },
    { question: 'Which module is used for HTTP servers?', options: ['net', 'http', 'server', 'web'], correct: 1 },
    { question: 'What is package.json?', options: ['A configuration file', 'The project manifest file', 'A build script', 'All are correct'], correct: 1 },
  ],
  AWS: [
    { question: 'What is EC2?', options: ['A database', 'Virtual servers in the cloud', 'A CDN', 'A DNS service'], correct: 1 },
    { question: 'What is S3?', options: ['Simple Storage Service', 'Secure Server System', 'Standard SQL Service', 'Smart Scaling Solution'], correct: 0 },
    { question: 'What is Lambda?', options: ['A server framework', 'Serverless compute', 'A database', 'A container service'], correct: 1 },
    { question: 'What does IAM do?', options: ['Internet Access Management', 'Identity and Access Management', 'Integrated Application Monitoring', 'Internal API Manager'], correct: 1 },
    { question: 'What is a VPC?', options: ['Virtual Private Cloud', 'Very Powerful Computer', 'Virtual Process Controller', 'Variable Pricing Calculator'], correct: 0 },
    { question: 'What is CloudFront?', options: ['A web framework', 'A CDN', 'A database', 'A monitoring tool'], correct: 1 },
    { question: 'What is the difference between RDS and DynamoDB?', options: ['No difference', 'RDS is relational, DynamoDB is NoSQL', 'DynamoDB is more expensive', 'RDS is serverless'], correct: 1 },
    { question: 'What is a security group?', options: ['An IAM feature', 'A virtual firewall', 'A VPN', 'An encryption service'], correct: 1 },
    { question: 'What does Elastic Load Balancer do?', options: ['Distribute storage', 'Distribute traffic across multiple targets', 'Compress data', 'Scale servers'], correct: 1 },
    { question: 'What is SQS?', options: ['Simple Query Service', 'Simple Queue Service', 'Secure Queue System', 'Standard Quality Service'], correct: 1 },
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
    if (percentage >= 90) return { label: 'Expert', color: 'text-[rgb(23,162,69)]' };
    if (percentage >= 70) return { label: 'Intermediate', color: 'text-[rgb(0,159,255)]' };
    if (percentage >= 50) return { label: 'Foundational', color: 'text-yellow-600' };
    return { label: 'Beginner', color: 'text-red-500' };
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
    name: 'Skill Assessment',
    description: 'Test your knowledge on various technologies with an interactive quiz.',
    url: 'https://hiredeveloper.ae/tools/skill-assessment',
    applicationCategory: 'EducationalApplication',
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
          { label: 'Skill Assessment', href: '/tools/skill-assessment' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">Skill Assessment</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            How well do you know your stuff? Pick a technology and answer 10 questions.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-12">
          {!started && !showResult && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Technology</h2>
              <div className="max-w-md mx-auto mb-8">
                <select
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Please select...</option>
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
                Start Quiz
              </button>
              <p className="text-sm text-gray-500 mt-4">10 multiple-choice questions, no time limit</p>
            </div>
          )}

          {started && !showResult && questions.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestion + 1} of {totalQuestions}
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
                  Back
                </button>
                <button
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === null}
                  className="px-6 py-2 text-white font-semibold bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {currentQuestion === totalQuestions - 1 ? 'Submit' : 'Next'}
                </button>
              </div>
            </div>
          )}

          {showResult && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Result: {technology}</h2>
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
                            <p className="text-xs text-gray-600 mt-1">Correct answer: {q.options[q.correct]}</p>
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
                  Start New Quiz
                </button>
              </div>

              {/* CTA */}
              <div className="p-6 bg-[rgb(23,162,69)]/5 rounded-xl border border-[rgb(23,162,69)]/20 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Find developers who know what they are doing
                </p>
                <p className="text-gray-600 mb-4">
                  Our {technology} developers are screened and evaluated in multiple stages.
                </p>
                <a
                  href="/hire-developers"
                  className="inline-block px-6 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                >
                  Find Vetted {technology} Developers
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <RelatedLinks
        title="Related Tools"
        links={[
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Technology Comparison', href: '/tools/technology-comparison' },
          { label: 'Project Estimation', href: '/tools/project-estimation' },
          { label: 'Hire JavaScript Developers', href: '/hire-developers/javascript' },
          { label: 'Hire React Developers', href: '/hire-developers/reactjs' },
          { label: 'Hire Python Developers', href: '/hire-developers/python' },
          { label: 'All Developers', href: '/hire-developers' },
        ]}
      />

      <FinalCTA
        heading="Find Vetted Top Developers"
        subheading="Every developer at HireDeveloper.ae is tested for technical skills."
      />

      <Footer />
    </div>
  );
}
