export default function HowToUseArc() {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Teilen Sie uns Ihre Bedürfnisse mit',
      description: 'Teilen Sie uns Ihre Ziele, Ihr Budget, Jobdetails und Standortpräferenzen mit.',
      hasIcon: false
    },
    {
      id: 2,
      number: '2',
      title: 'Treffen Sie Top-Kandidaten',
      description: 'Verbinden Sie sich direkt mit Ihren besten Matches, vollständig geprüft und sehr reaktionsschnell.',
      hasIcon: false
    },
    {
      id: 3,
      number: '3',
      title: 'Interviewen und einstellen',
      description: "Entscheiden Sie, wen Sie einstellen möchten, und wir kümmern uns um den Rest. Genießen Sie Sicherheit mit sicheren Freelancer-Zahlungen und konformen globalen Einstellungen über vertrauenswürdige EOR-Partner.",
      hasIcon: true
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 text-center mb-8 md:mb-12">
          So funktioniert Programmier-Anfang
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              {/* Step Number with optional icon */}
              <div className="flex items-center justify-center mb-4">
                {step.hasIcon && (
                  <svg className="w-6 h-6 mr-2 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
                <h3 className="text-[32px] font-bold text-gray-900">
                  {step.number}. {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

