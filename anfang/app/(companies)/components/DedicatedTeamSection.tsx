interface Feature {
  title: string;
  description: string;
}

interface DedicatedTeamSectionProps {
  heading: string;
  description: string;
  features: Feature[];
}

export default function DedicatedTeamSection({ heading, description, features }: DedicatedTeamSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-[40px] font-bold text-gray-900 mb-6">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[rgb(0,159,255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

