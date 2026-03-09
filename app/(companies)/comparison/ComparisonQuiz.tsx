'use client';

import { useState } from 'react';
import { useLeadFormModal } from '@/app/(companies)/components/LeadFormModalProvider';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    score: number;
  }[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'How large is your current development team?',
    options: [
      { label: '1–5 people (Startup / Small team)', score: 3 },
      { label: '6–20 people (Growing company)', score: 3 },
      { label: '20+ people (Established enterprise)', score: 2 },
    ],
  },
  {
    id: 2,
    question: 'What is your monthly budget per developer?',
    options: [
      { label: 'Under $3,000/month', score: 1 },
      { label: '$3,000–$6,000/month', score: 3 },
      { label: 'Over $6,000/month', score: 2 },
    ],
  },
  {
    id: 3,
    question: 'How quickly do you need a new developer?',
    options: [
      { label: 'ASAP (within one week)', score: 3 },
      { label: 'Within 2–4 weeks', score: 2 },
      { label: 'Timeline is flexible', score: 1 },
    ],
  },
  {
    id: 4,
    question: 'Which technologies does your team primarily use?',
    options: [
      { label: 'JavaScript/TypeScript (React, Node.js, etc.)', score: 3 },
      { label: 'Python, Java, or other backend languages', score: 3 },
      { label: 'Mobile (iOS/Android) or specialized technologies', score: 2 },
    ],
  },
  {
    id: 5,
    question: 'How do you want to manage the developers?',
    options: [
      { label: 'Integrate directly into our existing team', score: 3 },
      { label: 'Work as an independent remote team', score: 2 },
      { label: 'Project-based with clear deliverables', score: 2 },
    ],
  },
  {
    id: 6,
    question: 'How important is Singapore / Southeast Asian market alignment to you?',
    options: [
      { label: 'Very important – Monday-Friday, GMT+8 timezone is a must', score: 3 },
      { label: 'Nice to have, but not required', score: 2 },
      { label: 'Not relevant – global talent is fine', score: 1 },
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
      title: '🇸🇬 HireDeveloper.sg is the perfect fit for you!',
      description:
        'Your requirements align perfectly with what we offer. 48-hour matching, transparent pricing, Singapore market focus, and top 2% vetted developers — exactly what you need.',
      recommendation: 'Start risk-free today. $0 until you hire.',
    };
  }
  if (totalScore >= 10) {
    return {
      title: '🇸🇬 HireDeveloper.sg is a strong option for you!',
      description:
        'Risk-free trial, personal matching, and flexible contracts — HireDeveloper.sg is a solid choice for your business. In your team within 48 hours, ready to work.',
      recommendation: 'Let\'s discuss the details in a quick call.',
    };
  }
  return {
    title: 'HireDeveloper.sg can work for you too',
    description:
      'Your requirements are a bit more specialized, but that\'s exactly what we have flexible solutions for. Let\'s talk briefly and find the best approach for your project.',
    recommendation: 'Talk to us — no obligation, no commitment.',
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
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-[rgb(0,159,255)]/10 text-[rgb(0,159,255)] text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Interactive Quiz
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Which platform is right for you?
            </h2>
            <p className="text-gray-600">
              Answer 6 quick questions and get a personalized recommendation.
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
                Question {currentQuestion + 1} of {questions.length}
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
                  Get Matched Now — Free
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 text-base font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
