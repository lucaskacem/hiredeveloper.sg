'use client';

import { useEffect, useRef } from 'react';

function StarIcon({ half = false }: { half?: boolean }) {
  if (half) {
    return (
      <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path fill="url(#halfStar)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function WhyArcIsDifferent() {
  const testimonials = [
    {
      id: 1,
      quote: "Skalieren Sie Ihr Team und sparen Sie Zeit, Geld und Nerven",
      author: "Thomas Weber",
      position: "Gründer @ TechVenture GmbH",
      company: "TechVenture",
      initials: "TW",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      id: 2,
      quote: "Starker Talentpool mit grosser Vielfalt, und das zu fairen Konditionen!",
      author: "Kristina Müller",
      position: "Lead Recruiter @ DataFlow AG",
      company: "DataFlow",
      initials: "KM",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    },
    {
      id: 3,
      quote: "Schnell Kandidaten geliefert, die unseren sehr hohen Ansprüchen genügten",
      author: "Dirk Marzahn",
      position: "CPO @ CloudBridge Solutions",
      company: "CloudBridge",
      initials: "DM",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      id: 4,
      quote: "Einige der besten Einstellungen, die wir je gemacht haben!",
      author: "Hannah Klein",
      position: "CEO @ NextLevel Digital",
      company: "NextLevel",
      initials: "HK",
      gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5; // Scroll speed

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPos;

        // Reset when reaching halfway (since we duplicated items)
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Triple the testimonials for seamless loop
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 text-center mb-6 md:mb-8">
          Warum Programmier-Anfang anders ist
        </h2>

        {/* Trustpilot and Stats Row */}
        <div className="flex items-center justify-center gap-12 mb-12">
          {/* Trustpilot Rating */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-gray-900 mb-2">Exzellent</span>
            <div className="flex items-center gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon half />
            </div>
          </div>

          {/* Divider */}
          <div className="h-12 w-px bg-gray-200"></div>

          {/* Stats */}
          <div className="flex items-center gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-[36px] font-bold text-gray-900">75%</div>
              <div className="text-sm text-gray-600">schneller eingestellt</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-[36px] font-bold text-gray-900">58%</div>
              <div className="text-sm text-gray-600">Kostenersparnis</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-[36px] font-bold text-gray-900">800+</div>
              <div className="text-sm text-gray-600">Einstellungen vorgenommen</div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {tripleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[380px] bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                {/* Quote */}
                <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </h3>

                {/* Author Info */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {testimonial.position}
                    </div>
                  </div>

                  {/* Author Initials */}
                  <div className={`ml-4 w-12 h-12 rounded-full ${testimonial.gradient} flex items-center justify-center shadow-md`}>
                    <span className="text-white text-sm font-bold">{testimonial.initials}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

