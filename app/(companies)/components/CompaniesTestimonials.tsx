interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}

interface CompaniesTestimonialsProps {
  testimonials: Testimonial[];
}

const avatarGradients = [
  'bg-gradient-to-br from-blue-500 to-blue-600',
  'bg-gradient-to-br from-emerald-500 to-emerald-600',
  'bg-gradient-to-br from-purple-500 to-purple-600',
  'bg-gradient-to-br from-orange-500 to-orange-600',
  'bg-gradient-to-br from-rose-500 to-rose-600',
  'bg-gradient-to-br from-cyan-500 to-cyan-600',
];

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

export default function CompaniesTestimonials({ testimonials }: CompaniesTestimonialsProps) {
  return (
    <section className="bg-gray-50 py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-bold text-gray-900 text-center mb-8 md:mb-12">
          What Companies Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-5 md:p-8 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                {testimonial.avatar && testimonial.avatar.startsWith('http') ? (
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover flex-shrink-0 shadow-md" />
                ) : (
                  <div className={`w-12 h-12 rounded-full ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <span className="text-white font-bold text-sm">{getInitials(testimonial.author)}</span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
