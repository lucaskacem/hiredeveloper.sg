'use client';

import { useLeadFormModal } from './LeadFormModalProvider';
import { useLanguage } from '@/app/i18n/LanguageContext';

interface FinalCTAProps {
  heading: string;
  subheading: string;
  ctaText?: string;
}

export default function FinalCTA({ heading, subheading, ctaText }: FinalCTAProps) {
  const { openModal } = useLeadFormModal();
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-gray-50 py-12 md:py-16 lg:py-24 border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600">
            {subheading}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            🇸🇬 {t('finalCta.trustedBy')}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={openModal}
            className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200"
          >
            {ctaText || t('finalCta.startHiring')}
          </button>
        </div>
      </div>
    </section>
  );
}
