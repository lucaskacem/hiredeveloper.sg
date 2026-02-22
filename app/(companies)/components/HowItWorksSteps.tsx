'use client';

import { useLeadFormModal } from './LeadFormModalProvider';

interface Step {
  number: string;
  title: string;
  description: string;
  subtext: string;
  image: string;
}

interface HowItWorksStepsProps {
  steps: Step[];
  category: string;
}

const stepImages: Record<string, string> = {
  '01': '/images/steps/request.svg',
  '02': '/images/steps/interview.svg',
  '03': '/images/steps/hire.svg',
};

export default function HowItWorksSteps({ steps, category }: HowItWorksStepsProps) {
  const { openModal } = useLeadFormModal();
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
          It&apos;s easy to hire full-time &amp; freelance {category} with HireDeveloper.ae
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Illustration */}
              <div className="mb-6 rounded-lg overflow-hidden bg-white p-8">
                <div className="aspect-square w-full max-w-[300px] mx-auto flex items-center justify-center">
                  <img
                    src={stepImages[step.number] || '/images/steps/request.svg'}
                    alt={step.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Number */}
              <div className="text-[20px] font-bold text-[rgb(0,159,255)] mb-2">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                {step.description}
              </p>

              {/* Subtext */}
              <p className="text-sm text-gray-600">
                {step.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={openModal} className="px-8 py-3 text-base font-semibold text-white bg-[rgb(23,162,69)] rounded-md hover:bg-[rgb(20,145,60)] transition-colors">
            Hire Now
          </button>
          <a
            href="/hire-developers"
            className="px-8 py-3 text-base font-semibold text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Learn More About Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
