'use client';

import { useLeadFormModal } from './LeadFormModalProvider';
import { useLanguage } from '@/app/i18n/LanguageContext';

interface HireHeroProps {
  category: 'developers' | 'designers' | 'marketers' | 'product-managers' | 'project-managers' | 'assistants';
  count: number;
  description: string;
  descriptionAr?: string;
}

const categoryNameKeys: Record<string, string> = {
  'developers': 'hireHero.remoteDevelopers',
  'designers': 'hireHero.remoteDesigners',
  'marketers': 'hireHero.remoteMarketers',
  'product-managers': 'hireHero.productManagers',
  'project-managers': 'hireHero.projectManagers',
  'assistants': 'hireHero.remoteAssistants',
};

export default function HireHero({ category, count, description, descriptionAr }: HireHeroProps) {
  const { openModal } = useLeadFormModal();
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  const badges = [t('hireHero.freelanceFulltime'), t('hireHero.top2Vetted'), `🇦🇪 ${t('hireHero.uaeAligned')}`];
  const trustMetrics = [t('hireHero.placements'), t('hireHero.rating'), t('hireHero.satisfaction'), t('hireHero.matching48h')];
  const uaeHighlights = [t('hireHero.zeroTax'), t('hireHero.gmt4'), t('hireHero.nationalities'), t('hireHero.allEmirates')];

  return (
    <section className="bg-black py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full" dir={isAr ? 'rtl' : 'ltr'}>
        {/* Hero Content */}
        <div className="max-w-3xl mb-8">
          {/* UAE Location Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg" aria-label="UAE flag">🇦🇪</span>
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
              {t('hireHero.platform')}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[56px] font-bold leading-tight mb-6">
            {isAr ? (
              <>
                <span className="text-white">وظّف </span>
                <a
                  href="/hire-developers"
                  className="text-[rgb(0,159,255)] hover:underline"
                >
                  أفضل 2%
                </a>
                <span className="text-white"> من</span>
                <br />
                <span className="text-white">{t(categoryNameKeys[category])}</span>
              </>
            ) : (
              <>
                <span className="text-white">{t('hireHero.hireThe')} </span>
                <a
                  href="/hire-developers"
                  className="text-[rgb(0,159,255)] hover:underline"
                >
                  {t('hireHero.top2')}
                </a>
                <span className="text-white"> {t('hireHero.of')}</span>
                <br />
                <span className="text-white">{t(categoryNameKeys[category])}</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-lg text-white/85 leading-relaxed mb-8">
            {isAr && descriptionAr ? descriptionAr : description}
          </p>

          {/* Badges */}
          <div className="flex items-center gap-6 mb-8">
            {badges.map((badge) => (
              <div
                key={badge}
                className="px-4 py-2 bg-white/10 rounded-full text-sm text-white"
              >
                {badge}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={openModal}
            className="flex items-center justify-center w-full max-w-[400px] h-14 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200"
          >
            {t('hireHero.getMatched')}
          </button>

          {/* Badge */}
          <div className="flex items-center gap-2 mt-4 max-w-[400px]">
            <span className="text-sm font-medium text-white">{t('hireHero.zeroCost')}</span>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="flex items-center gap-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-8 flex-wrap">
            {trustMetrics.map((metric) => (
              <span
                key={metric}
                className="text-white/50 text-sm font-semibold tracking-wide"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        {/* UAE Business Highlights */}
        <div className="flex items-center gap-6 pt-4 flex-wrap">
          {uaeHighlights.map((highlight) => (
            <span
              key={highlight}
              className="text-[rgb(0,159,255)]/60 text-xs font-medium tracking-wide"
            >
              {highlight}
            </span>
          ))}
          <span className="text-white/30 text-xs">
            🇦🇪 {t('hireHero.servingCompanies')}
          </span>
        </div>
      </div>
    </section>
  );
}
