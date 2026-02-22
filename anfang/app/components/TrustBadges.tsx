export default function TrustBadges() {
  const trustMetrics = [
    'Über 500 erfolgreiche Vermittlungen',
    '4.9/5 Kundenbewertung',
    '98% Zufriedenheitsrate',
    '72h bis zur Einstellung',
  ];

  return (
    <section className="bg-black h-[60px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="flex items-center gap-4 md:gap-12 w-full overflow-x-auto">

          {/* Rating Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-sm font-medium">4.8/5</span>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/20 shrink-0"></div>

          {/* Trust Metrics */}
          <div className="flex items-center gap-8 flex-1 flex-wrap">
            {trustMetrics.map((metric) => (
              <span
                key={metric}
                className="text-white/50 text-sm font-semibold tracking-wide hover:text-white/80 transition-colors"
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

