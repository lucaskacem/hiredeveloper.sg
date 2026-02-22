'use client';

import { useLeadFormModal } from './LeadFormModalProvider';

interface HireHeroProps {
  category: 'developers' | 'designers' | 'marketers' | 'product-managers' | 'project-managers' | 'assistants';
  count: number;
  description: string;
}

export default function HireHero({ category, count, description }: HireHeroProps) {
  const { openModal } = useLeadFormModal();

  const categoryNames: Record<string, string> = {
    'developers': 'Remote-Entwickler',
    'designers': 'Remote-Designer',
    'marketers': 'Remote-Marketer',
    'product-managers': 'Produktmanager',
    'project-managers': 'Projektmanager',
    'assistants': 'Remote-Assistenten'
  };

  const badges = ['Freelance-Vertragnehmer', 'Vollzeitstellen', 'Globale Teams'];
  const trustMetrics = ['Über 500 Vermittlungen', '4.9/5 Bewertung', '98% Zufriedenheit', '72h bis zur Einstellung'];

  return (
    <section className="bg-black py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        {/* Hero Content */}
        <div className="max-w-3xl mb-8">
          {/* Heading */}
          <h1 className="text-[56px] font-bold leading-tight mb-6">
            <span className="text-white">Stellen Sie die </span>
            <a
              href="/hire-developers"
              className="text-[rgb(0,159,255)] hover:underline"
            >
              Top 2%
            </a>
            <span className="text-white"> der</span>
            <br />
            <span className="text-white">{categoryNames[category]}</span>
            <span className="text-white"> ein</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/85 leading-relaxed mb-8">
            {description}
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
            Talente einstellen
          </button>

          {/* Badge */}
          <div className="flex items-center gap-2 mt-4 max-w-[400px]">
            <span className="text-sm font-medium text-white">0 EUR bis zur Einstellung</span>
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
      </div>
    </section>
  );
}
