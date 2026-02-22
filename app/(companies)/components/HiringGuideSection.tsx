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
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[40px] font-bold text-gray-900 mb-12">
            {heading}
          </h2>

          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h3 className="text-[28px] font-bold text-gray-900 mb-6">
                {section.title}
              </h3>

              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-8">
                  <h4 className="text-[20px] font-semibold text-gray-900 mb-3">
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
