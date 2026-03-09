import Image from 'next/image';
import Link from 'next/link';

const districts = [
  {
    name: 'Marina Bay',
    subtitle: 'Financial District',
    description: 'Fintech, global banking HQs, and 200+ financial institutions.',
    image: '/images/singapore/photos/marina-bay.jpg',
    href: '/locations/singapore/central-region/marina-bay',
  },
  {
    name: 'CBD',
    subtitle: 'Central Business District',
    description: 'Enterprise tech, SaaS companies, and venture capital firms.',
    image: '/images/singapore/photos/cbd.jpg',
    href: '/locations/singapore/central-region/tanjong-pagar',
  },
  {
    name: 'one-north',
    subtitle: 'Science & Innovation',
    description: 'Fusionopolis, Block71, 400+ companies, and deep tech R&D.',
    image: '/images/singapore/photos/one-north.jpg',
    href: '/locations/singapore/central-region/one-north',
  },
  {
    name: 'Changi',
    subtitle: 'Business Park',
    description: 'IBM, HP, Infosys, and 70+ buildings with 85,000 workers.',
    image: '/images/singapore/photos/changi.jpg',
    href: '/locations/singapore/east-region/changi-business-park',
  },
  {
    name: 'Jurong',
    subtitle: 'Future Second CBD',
    description: 'Industry 4.0, robotics, advanced manufacturing, and NTU.',
    image: '/images/singapore/photos/jurong.jpg',
    href: '/locations/singapore/west-region/jurong-east',
  },
];

export default function SingaporeTechHub() {
  return (
    <section className="bg-gray-950 py-10 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-14">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">
            Singapore Tech Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Hire from Asia&apos;s Leading Tech Hub
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Singapore&apos;s world-class tech districts are home to thousands of
            pre-vetted developers across fintech, deep tech, AI, and enterprise
            software.
          </p>
        </div>

        {/* Districts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
          {districts.map((district) => (
            <Link
              key={district.name}
              href={district.href}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
            >
              {/* District photo */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={district.image}
                  alt={`${district.name} Singapore`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
              </div>

              {/* Text content */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-white mb-0.5">
                  {district.name}
                </h3>
                <p className="text-xs font-medium text-[rgb(0,159,255)] mb-2">
                  {district.subtitle}
                </p>
                <p className="text-xs text-white/40 leading-relaxed">
                  {district.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-8 md:mt-12 flex items-center justify-center">
          <p className="text-sm text-white/30">
            GMT+8 &middot; 17% corporate tax &middot; 95%+ internet penetration
            &middot; Smart Nation initiative
          </p>
        </div>
      </div>
    </section>
  );
}
