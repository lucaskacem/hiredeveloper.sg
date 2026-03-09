import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import HiringProcessFlowchart from '../components/HiringProcessFlowchart';
import RelatedLinks from '../components/RelatedLinks';
import { industries } from '@/app/data/industries';

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Hire Developers by Industry in Singapore - ${year} | HireDeveloper.sg`,
  description: `Find pre-vetted developers specialized in Singapore's key industries: FinTech, HealthTech, E-Commerce, EdTech, Logistics, PropTech, GovTech, and Gaming. Matched in 48 hours.`,
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://hiredeveloper.sg/industries',
  },
};

export default function IndustriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hire Developers by Industry - HireDeveloper.sg',
    description: 'Find pre-vetted developers specialized in Singapore key industries.',
    url: 'https://hiredeveloper.sg/industries',
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 text-center">
          <p className="text-[rgb(0,159,255)] font-semibold text-sm uppercase tracking-wider mb-4">
            Industry Expertise &middot; Singapore &middot; {year}
          </p>
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white mb-4">
            Hire Developers by Industry in Singapore
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Every industry has unique technical requirements. Our pre-vetted developers bring domain expertise
            in Singapore&apos;s fastest-growing sectors — from MAS-regulated fintech to Smart Nation govtech.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-[22px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            {industries.length} Industries Covered
          </h2>
          <p className="text-gray-600 text-center mb-10 md:mb-16 max-w-2xl mx-auto">
            Select an industry to explore specialized developer roles, salary benchmarks,
            tech stacks, and hiring guides tailored to Singapore&apos;s market.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-5 md:p-6 hover:shadow-lg hover:border-[rgb(0,159,255)] transition-all"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[rgb(0,159,255)] transition-colors mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {industry.metaDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {industry.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {industry.techStack.length > 4 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                      +{industry.techStack.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {industry.keyRoles.length} key roles &middot; {industry.stats[0]?.value}
                  </span>
                  <span className="text-[rgb(0,159,255)] text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-[22px] md:text-[32px] font-bold text-gray-900 text-center mb-8 md:mb-12">
            Why Industry Expertise Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-xl p-5 md:p-8 border border-gray-200">
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3">Domain Knowledge</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Developers with industry experience understand regulatory requirements, user expectations,
                and technical constraints specific to your sector — from MAS compliance in fintech to
                HIPAA standards in healthtech.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-8 border border-gray-200">
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3">Faster Onboarding</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Industry-experienced developers hit the ground running. They already know the common
                tech stacks, design patterns, and integration points used in your sector, reducing
                ramp-up time by 40-60%.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-8 border border-gray-200">
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3">Better Architecture</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Developers who have built similar products before make better architectural decisions.
                They anticipate scaling challenges, security requirements, and integration needs
                specific to your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HiringProcessFlowchart industry="your industry-specialized project" />

      <RelatedLinks
        title="Hire by Role"
        links={[
          { label: 'Software Developers', href: '/hire-developers' },
          { label: 'UX/UI Designers', href: '/hire-designers' },
          { label: 'Marketing Experts', href: '/hire-marketers' },
          { label: 'Product Managers', href: '/hire-product-managers' },
          { label: 'Project Managers', href: '/hire-project-managers' },
        ]}
      />

      <RelatedLinks
        title="Hiring Tools"
        links={[
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'All Tools', href: '/tools' },
        ]}
      />

      <FinalCTA
        heading="Hire Industry-Specialized Developers in Singapore"
        subheading="8 industries covered. Pre-vetted candidates matched in 48 hours."
      />

      <Footer />
    </div>
  );
}
