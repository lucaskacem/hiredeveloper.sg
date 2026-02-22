'use client';

import { useLeadFormModal } from './LeadFormModalProvider';

interface FinalCTAProps {
  heading: string;
  subheading: string;
  ctaText?: string;
}

export default function FinalCTA({ heading, subheading, ctaText }: FinalCTAProps) {
  const { openModal } = useLeadFormModal();

  return (
    <section id="kontakt" className="bg-gray-50 py-24 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600">
            {subheading}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={openModal}
            className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200"
          >
            {ctaText || 'Talente einstellen'}
          </button>
        </div>
      </div>
    </section>
  );
}
