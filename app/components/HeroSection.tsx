'use client';

import Image from 'next/image';
import { useLeadFormModal } from '../(companies)/components/LeadFormModalProvider';
import { useLanguage } from '../i18n/LanguageContext';

export default function HeroSection() {
  const { openModal } = useLeadFormModal();
  const { t } = useLanguage();

  return (
    <section className="bg-black py-10 md:py-12 lg:py-0 lg:h-[500px] flex items-center">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        {/* Grid Layout: 45% / 55% */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-center">

          {/* Left Column */}
          <div>
            {/* Singapore Location Indicator */}
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-lg" aria-label="Singapore flag">🇸🇬</span>
              <span className="text-xs md:text-sm font-medium text-white/60 uppercase tracking-wider">{t('hero.platformLabel')}</span>
            </div>

            {/* Heading */}
            <h1 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[1.15] tracking-tight mb-4 md:mb-6">
              <span className="text-white">{t('hero.title.line1')}</span>
              <br />
              <span className="text-[rgb(0,159,255)]">{t('hero.title.line2')}</span>
              <br />
              <span className="text-white">{t('hero.title.line3')}</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-base lg:text-lg text-white/85 leading-relaxed max-w-[520px] mb-6 md:mb-8">
              {t('hero.subtitle')}
            </p>

            {/* CTA Button */}
            <button
              onClick={openModal}
              className="flex items-center justify-center w-full max-w-[400px] h-12 md:h-14 text-base md:text-lg font-semibold text-white bg-[#0050ff] rounded-lg hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              {t('hero.cta')}
            </button>

            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mt-3 md:mt-4 max-w-[400px] flex-wrap">
              <span className="text-sm font-medium text-white">{t('hero.badge')}</span>
              <span className="text-white/40 mx-1">|</span>
              <span className="text-sm text-white/60">🇸🇬 {t('hero.sgFocused')}</span>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="hidden lg:block relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.05)] border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
