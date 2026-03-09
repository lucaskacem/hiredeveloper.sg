interface Subsection {
  subtitle: string;
  content: string;
  questions?: string[];
}

interface Section {
  title: string;
  subsections: Subsection[];
}

interface HiringGuideSectionProps {
  heading: string;
  sections: Section[];
}

export default function HiringGuideSection({ heading, sections }: HiringGuideSectionProps) {
  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-bold text-gray-900 mb-8 md:mb-12">
            {heading}
          </h2>

          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold text-gray-900 mb-4 md:mb-6">
                {section.title}
              </h3>

              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-8">
                  <h4 className="text-[18px] md:text-[20px] font-semibold text-gray-900 mb-3">
                    {subsection.subtitle}
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {subsection.content}
                  </p>

                  {subsection.questions && subsection.questions.length > 0 && (
                    <ul className="space-y-3 ml-6">
                      {subsection.questions.map((question, qIndex) => (
                        <li key={qIndex} className="text-base text-gray-700 leading-relaxed flex items-start">
                          <span className="text-[rgb(0,159,255)] mr-2">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
