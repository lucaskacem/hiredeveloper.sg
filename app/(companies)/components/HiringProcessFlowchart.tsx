'use client';

import { useLeadFormModal } from './LeadFormModalProvider';

interface HiringProcessFlowchartProps {
  industry?: string;
}

export default function HiringProcessFlowchart({ industry = 'your project' }: HiringProcessFlowchartProps) {
  const { openModal } = useLeadFormModal();

  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: `Tell us about ${industry}, tech stack, team size, and timeline. We analyze your needs within hours.`,
      time: 'Day 1',
      color: 'rgb(0,159,255)',
    },
    {
      number: '02',
      title: 'AI-Powered Matching',
      description: 'Our system matches you with pre-vetted developers based on skills, industry experience, and availability.',
      time: 'Day 1–2',
      color: 'rgb(0,159,255)',
    },
    {
      number: '03',
      title: 'Review Candidate Profiles',
      description: 'Receive 3–5 curated profiles with portfolios, code samples, and verified references. No resume spam.',
      time: 'Day 2–3',
      color: 'rgb(0,159,255)',
    },
    {
      number: '04',
      title: 'Interview & Evaluate',
      description: 'Conduct technical interviews with shortlisted candidates. We handle scheduling and provide assessment frameworks.',
      time: 'Day 3–5',
      color: 'rgb(23,162,69)',
    },
    {
      number: '05',
      title: 'Risk-Free Trial',
      description: 'Start working with your chosen developer. If it\'s not a fit within the trial period, we replace them at no cost.',
      time: 'Day 5–7',
      color: 'rgb(23,162,69)',
    },
    {
      number: '06',
      title: 'Scale & Grow',
      description: 'Add more developers, adjust hours, or transition to full-time. We handle contracts, compliance, and payments.',
      time: 'Ongoing',
      color: 'rgb(23,162,69)',
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-[rgb(0,159,255)]/10 text-[rgb(0,159,255)] text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Hiring Process
          </span>
          <h2 className="text-[22px] sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            From Request to Hire in 7 Days
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process eliminates the bottlenecks of traditional hiring. Here&apos;s how it works.
          </p>
        </div>

        {/* Flowchart */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-1">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -bottom-1 w-0.5 h-2 bg-gray-200" />
                )}

                <div className="flex items-start gap-3 md:gap-4 bg-white rounded-xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  {/* Step number circle */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                      <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded ml-2 flex-shrink-0">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Arrow between steps (mobile) */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-1 md:hidden">
                    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary bar */}
          <div className="mt-6 md:mt-8 bg-gray-900 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-6 text-center md:text-left">
              <div>
                <p className="text-2xl font-bold text-white">48h</p>
                <p className="text-xs text-white/50">First candidates</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div>
                <p className="text-2xl font-bold text-white">7 days</p>
                <p className="text-xs text-white/50">Avg. time to hire</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div>
                <p className="text-2xl font-bold text-white">0</p>
                <p className="text-xs text-white/50">Upfront fees</p>
              </div>
            </div>
            <button
              onClick={openModal}
              className="px-6 py-3 text-sm font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all"
            >
              Start Hiring Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
