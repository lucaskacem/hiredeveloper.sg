'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function ShieldCheckIcon() {
  return (
    <svg className="w-12 h-12 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="w-12 h-12 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-12 h-12 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-12 h-12 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

const iconMap: Record<string, () => React.ReactElement> = {
  'vetted-talent': ShieldCheckIcon,
  'matches-seconds': BoltIcon,
  'global-hires': GlobeIcon,
  'human-support': UsersIcon,
};

export default function WhyChooseArc() {
  const { t } = useLanguage();

  const features = [
    {
      id: 'vetted-talent',
      title: t('whyChoose.vettedTalent.title'),
      description: t('whyChoose.vettedTalent.description'),
    },
    {
      id: 'matches-seconds',
      title: t('whyChoose.matchesSeconds.title'),
      description: t('whyChoose.matchesSeconds.description'),
    },
    {
      id: 'global-hires',
      title: t('whyChoose.globalHires.title'),
      description: t('whyChoose.globalHires.description'),
    },
    {
      id: 'human-support',
      title: t('whyChoose.humanSupport.title'),
      description: t('whyChoose.humanSupport.description'),
    }
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 text-center mb-3 md:mb-6">
          {t('whyChoose.title')}
        </h2>
        <p className="text-center text-xs md:text-sm text-gray-500 mb-6 md:mb-12">
          🇸🇬 {t('whyChoose.subtitle')}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.id];
            return (
              <div
                key={feature.id}
                className="flex items-start gap-4 md:gap-6 border border-gray-200 rounded-lg bg-white p-4 md:p-6"
              >
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-50 flex items-center justify-center [&_svg]:w-8 [&_svg]:h-8 md:[&_svg]:w-12 md:[&_svg]:h-12">
                  <IconComponent />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
