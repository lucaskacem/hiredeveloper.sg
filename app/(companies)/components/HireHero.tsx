'use client';

import { useLeadFormModal } from './LeadFormModalProvider';
import { useLanguage } from '@/app/i18n/LanguageContext';
import SummarizeWith from '@/app/components/SummarizeWith';

interface HireHeroProps {
  category: 'developers' | 'designers' | 'marketers' | 'product-managers' | 'project-managers' | 'assistants';
  count: number;
  description: string;
}

const categoryNameKeys: Record<string, string> = {
  'developers': 'hireHero.remoteDevelopers',
  'designers': 'hireHero.remoteDesigners',
  'marketers': 'hireHero.remoteMarketers',
  'product-managers': 'hireHero.productManagers',
  'project-managers': 'hireHero.projectManagers',
  'assistants': 'hireHero.remoteAssistants',
};

export default function HireHero({ category, count, description }: HireHeroProps) {
  const { openModal } = useLeadFormModal();
  const { t } = useLanguage();

  const badges = [t('hireHero.freelanceFulltime'), t('hireHero.top2Vetted'), `🇸🇬 ${t('hireHero.sgAligned')}`];
  const trustMetrics = [t('hireHero.placements'), t('hireHero.rating'), t('hireHero.satisfaction'), t('hireHero.matching48h')];
  const sgHighlights = [t('hireHero.zeroTax'), t('hireHero.gmt4'), t('hireHero.nationalities'), t('hireHero.alldistricts')];

  return (
    <section className="bg-black py-10 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        {/* Hero Content */}
        <div className="max-w-3xl mb-8">
          {/* Singapore Location Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg" aria-label="Singapore flag">🇸🇬</span>
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
              {t('hireHero.platform')}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-bold leading-tight mb-4 md:mb-6">
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
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-4 md:mb-6">
            {description}
          </p>

          {/* Summarize with AI */}
          <div className="mb-6 md:mb-8">
            <SummarizeWith pageUrl={typeof window !== 'undefined' ? window.location.href : `https://hiredeveloper.sg/hire-${category}`} />
          </div>

          {/* Badges */}
          <div className="flex items-center gap-3 md:gap-6 mb-6 md:mb-8 flex-wrap">
            {badges.map((badge) => (
              <div
                key={badge}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-white/10 rounded-full text-xs md:text-sm text-white"
              >
                {badge}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={openModal}
            className="flex items-center justify-center w-full max-w-[400px] h-12 md:h-14 text-base md:text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200"
          >
            {t('hireHero.getMatched')}
          </button>

          {/* Badge */}
          <div className="flex items-center gap-2 mt-3 md:mt-4 max-w-[400px]">
            <span className="text-sm font-medium text-white">{t('hireHero.zeroCost')}</span>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="flex items-center gap-4 md:gap-8 pt-6 md:pt-8 border-t border-white/10 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-center gap-4 md:gap-8 flex-nowrap md:flex-wrap">
            {trustMetrics.map((metric) => (
              <span
                key={metric}
                className="text-white/50 text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        {/* Singapore Business Highlights */}
        <div className="flex items-center gap-3 md:gap-6 pt-3 md:pt-4 flex-wrap">
          {sgHighlights.map((highlight) => (
            <span
              key={highlight}
              className="text-[rgb(0,159,255)]/60 text-xs font-medium tracking-wide"
            >
              {highlight}
            </span>
          ))}
          <span className="text-white/30 text-xs">
            🇸🇬 {t('hireHero.servingCompanies')}
          </span>
        </div>
      </div>
    </section>
  );
}
