'use client';

import { useLeadFormModal } from '../(companies)/components/LeadFormModalProvider';
import { useLanguage } from '../i18n/LanguageContext';

export default function FooterCTA() {
  const { openModal } = useLeadFormModal();
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="bg-white py-10 md:py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-[40px] font-bold text-gray-900 mb-4">
            {t('footerCta.title')}
          </h2>
          <p className="text-sm text-gray-600">
            {t('footerCta.noCost')} &middot; 🇸🇬 {t('footerCta.sgPlatform')}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={openModal}
            className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200"
          >
            {t('footerCta.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
