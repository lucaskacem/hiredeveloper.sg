'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function FreelanceIcon() {
  return (
    <svg className="w-10 h-10 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function FulltimeIcon() {
  return (
    <svg className="w-10 h-10 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );
}

function GlobalIcon() {
  return (
    <svg className="w-10 h-10 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[rgb(23,162,69)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

const iconMap: Record<number, () => React.ReactElement> = {
  1: FreelanceIcon,
  2: FulltimeIcon,
  3: GlobalIcon,
};

export default function BestFitSection() {
  const { t } = useLanguage();

  const offerings = [
    {
      id: 1,
      title: t('bestFit.freelance.title'),
      features: [
        t('bestFit.freelance.feature1'),
        t('bestFit.freelance.feature2'),
        t('bestFit.freelance.feature3'),
      ]
    },
    {
      id: 2,
      title: t('bestFit.fulltime.title'),
      features: [
        t('bestFit.fulltime.feature1'),
        t('bestFit.fulltime.feature2'),
        t('bestFit.fulltime.feature3'),
      ]
    },
    {
      id: 3,
      title: t('bestFit.global.title'),
      features: [
        t('bestFit.global.feature1'),
        t('bestFit.global.feature2'),
        t('bestFit.global.feature3'),
      ]
    }
  ];

  return (
    <section className="bg-white py-16 md:py-0 md:h-[580px] flex items-center">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 text-center mb-8 md:mb-12">
          {t('bestFit.title')}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering) => {
            const IconComponent = iconMap[offering.id];
            return (
              <div
                key={offering.id}
                className="bg-gray-50 rounded-lg p-6 md:p-8 md:h-[280px] flex flex-col"
              >
                {/* Icon */}
                <div className="mb-3 md:mb-4">
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-3 md:mb-4">
                  {offering.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-2 md:space-y-3">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-base md:text-[18px] text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
