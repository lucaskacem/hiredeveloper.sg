'use client';

import { useState } from 'react';
import { useLeadFormModal } from '@/app/(companies)/components/LeadFormModalProvider';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    score: number; // higher = more likely to recommend Programmier-Anfang
  }[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Wie groß ist Ihr Entwicklerteam aktuell?',
    options: [
      { label: '1–5 Personen (Startup/kleines Team)', score: 3 },
      { label: '6–20 Personen (wachsendes Unternehmen)', score: 3 },
      { label: '20+ Personen (etabliertes Unternehmen)', score: 2 },
    ],
  },
  {
    id: 2,
    question: 'Welches Budget steht Ihnen pro Entwickler monatlich zur Verfügung?',
    options: [
      { label: 'Unter 3.000 EUR/Monat', score: 1 },
      { label: '3.000–6.000 EUR/Monat', score: 3 },
      { label: 'Über 6.000 EUR/Monat', score: 2 },
    ],
  },
  {
    id: 3,
    question: 'Wie schnell benötigen Sie einen neuen Entwickler?',
    options: [
      { label: 'Sofort (innerhalb einer Woche)', score: 3 },
      { label: 'Innerhalb von 2–4 Wochen', score: 2 },
      { label: 'Zeitrahmen ist flexibel', score: 1 },
    ],
  },
  {
    id: 4,
    question: 'Welche Technologien werden hauptsächlich eingesetzt?',
    options: [
      { label: 'JavaScript/TypeScript (React, Node.js, etc.)', score: 3 },
      { label: 'Python, Java oder andere Backend-Sprachen', score: 3 },
      { label: 'Mobile (iOS/Android) oder spezialisierte Technologien', score: 2 },
    ],
  },
  {
    id: 5,
    question: 'Wie möchten Sie die Entwickler führen und verwalten?',
    options: [
      { label: 'Direkt in unser bestehendes Team integrieren', score: 3 },
      { label: 'Als eigenständiges Remote-Team arbeiten lassen', score: 2 },
      { label: 'Projektbasiert mit klaren Deliverables', score: 2 },
    ],
  },
  {
    id: 6,
    question: 'Wie wichtig ist Ihnen die Nähe zum DACH-Markt (Sprache, Zeitzonen, Kultur)?',
    options: [
      { label: 'Sehr wichtig – deutschsprachiger Support ist ein Muss', score: 3 },
      { label: 'Wäre schön, aber nicht zwingend erforderlich', score: 2 },
      { label: 'Nicht relevant – globale Talente sind mir lieber', score: 1 },
    ],
  },
];

function getResult(totalScore: number): {
  title: string;
  description: string;
  recommendation: string;
} {
  if (totalScore >= 14) {
    return {
      title: 'Programmier-Anfang passt sehr gut zu Ihnen!',
      description:
        'Ihre Anforderungen und unser Angebot passen zusammen. Schnelles Matching in 72 Stunden, offene Preise, DACH-Fokus und geprüfte Entwickler: Das ist genau das, was Sie brauchen.',
      recommendation: 'Starten Sie risikofrei und sehen Sie selbst.',
    };
  }
  if (totalScore >= 10) {
    return {
      title: 'Programmier-Anfang ist eine starke Option für Sie!',
      description:
        'Risikofreie Probezeit, persönliches Matching und flexible Vertragsmodelle: Das spricht für Programmier-Anfang. Für Ihr Unternehmen eine solide Wahl.',
      recommendation: 'Lassen Sie uns in einem kurzen Gespräch die Details klären.',
    };
  }
  return {
    title: 'Programmier-Anfang kann auch bei Ihnen funktionieren',
    description:
      'Ihre Anforderungen sind etwas spezieller, aber genau dafür haben wir flexible Lösungen. Am besten sprechen wir kurz, dann finden wir gemeinsam heraus, was für Ihr Projekt am sinnvollsten ist.',
    recommendation: 'Sprechen Sie mit uns, ganz unverbindlich.',
  };
}

export default function ComparisonQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { openModal } = useLeadFormModal();

  const handleAnswer = (score: number, optionIndex: number) => {
    setSelectedOption(optionIndex);

    setTimeout(() => {
      const newAnswers = [...answers, score];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedOption(null);
  };

  const totalScore = answers.reduce((sum, s) => sum + s, 0);
  const result = getResult(totalScore);
  const progress = showResult
    ? 100
    : ((currentQuestion) / questions.length) * 100;

  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-[rgb(0,159,255)]/10 text-[rgb(0,159,255)] text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Interaktiver Test
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Welcher Anbieter passt zu Ihnen?
            </h2>
            <p className="text-gray-600">
              Beantworten Sie 6 kurze Fragen und erhalten Sie eine personalisierte Empfehlung.
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-[rgb(23,162,69)] h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {!showResult ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="mb-2 text-sm text-gray-400 font-medium">
                Frage {currentQuestion + 1} von {questions.length}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score, index)}
                    className={`w-full text-left px-5 py-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedOption === index
                        ? 'border-[rgb(23,162,69)] bg-[rgb(23,162,69)]/5 shadow-sm'
                        : 'border-gray-200 hover:border-[rgb(0,159,255)] hover:bg-[rgb(0,159,255)]/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                          selectedOption === index
                            ? 'border-[rgb(23,162,69)] bg-[rgb(23,162,69)]'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedOption === index && (
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {option.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm text-center">
              {/* Result icon */}
              <div className="w-16 h-16 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[rgb(23,162,69)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {result.title}
              </h3>
              <p className="text-gray-600 mb-4 max-w-xl mx-auto leading-relaxed">
                {result.description}
              </p>
              <p className="text-[rgb(23,162,69)] font-semibold mb-8">
                {result.recommendation}
              </p>

              {/* Score breakdown */}
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-8 rounded-sm ${
                      i < totalScore ? 'bg-[rgb(23,162,69)]' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={openModal}
                  className="px-8 py-3 text-base font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200"
                >
                  Jetzt Beratung anfordern
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 text-base font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200"
                >
                  Quiz wiederholen
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
