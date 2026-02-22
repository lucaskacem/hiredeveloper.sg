'use client';

import { useLeadFormModal } from '../(companies)/components/LeadFormModalProvider';
import { useLanguage } from '../i18n/LanguageContext';

export default function FooterCTA() {
  const { openModal } = useLeadFormModal();
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[40px] font-bold text-gray-900 mb-4">
            {t('footerCta.title')}
          </h2>
          <p className="text-sm text-gray-600">
            {t('footerCta.noCost')} &middot; 🇦🇪 {t('footerCta.uaePlatform')}
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
