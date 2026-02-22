interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}

interface StatsTestimonialsProps {
  stats: Array<{
    prefix?: string;
    value: string;
    label: string;
  }>;
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

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function StarIcon({ half = false }: { half?: boolean }) {
  if (half) {
    return (
      <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
        <defs>
          <linearGradient id="halfStarStats">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path fill="url(#halfStarStats)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function StatsTestimonials({ stats, testimonials }: StatsTestimonialsProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        {/* Title */}
        <h2 className="text-[40px] font-bold text-gray-900 text-center mb-12">
          Remote Hiring Made Easy
        </h2>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[48px] font-bold text-gray-900 leading-none mb-2">
                {stat.prefix && (
                  <span className="text-[20px] font-normal text-gray-600">{stat.prefix} </span>
                )}
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6"
            >
              {/* Quote */}
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <span className="text-white text-sm font-bold">{getInitials(testimonial.author)}</span>
                </div>
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

        {/* Rating Stars */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm font-semibold text-gray-900">Excellent</span>
          <div className="flex items-center gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon half />
          </div>
        </div>
      </div>
    </section>
  );
}
