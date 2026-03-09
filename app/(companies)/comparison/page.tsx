import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import { competitors } from '@/app/data/competitors';
import ComparisonQuiz from './ComparisonQuiz';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `HireDeveloper.sg vs Alternatives | Platform Comparison ${currentYear}`,
  description:
    'Compare HireDeveloper.sg with Toptal, Upwork, Fiverr, Turing, and more platforms. Find the best solution for your remote developer hiring needs in Singapore and Singapore.',
  robots: { index: true, follow: true },
};

const featuredSlugs = ['toptal', 'upwork', 'turing'];
const featuredCompetitors = competitors.filter((c) =>
  featuredSlugs.includes(c.slug)
);

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Comparison', href: '/comparison' },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-[rgb(23,162,69)] font-semibold mb-4 text-sm uppercase tracking-wider">
                Platform Comparison {currentYear}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HireDeveloper.sg vs Alternatives
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-6">
                Which platform is right for your business? We have compared
                HireDeveloper.sg with the most well-known alternatives so you
                can make the right choice faster.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
                  {competitors.length} Platforms Compared
                </span>
                <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
                  Detailed Analyses
                </span>
                <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
                  Interactive Quiz
                </span>
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.05)] border border-white/10 hidden lg:block">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/hero.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Why compare section */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Compare Platforms?
          </h2>
          <p className="text-gray-600 max-w-3xl mb-6">
            Choosing the wrong platform costs time and money. Each provider has
            different strengths, pricing models, and specializations. With our
            comparisons, you can see at a glance where the differences lie and
            make a better decision faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compare Quality</h3>
              <p className="text-sm text-gray-600">
                Which platforms vet their developers themselves,
                and which only act as intermediaries?
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(0,159,255)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Understand Costs</h3>
              <p className="text-sm text-gray-600">
                What do you actually pay in the end? Pricing models, hidden fees,
                and ROI in a direct comparison.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Decide Faster</h3>
              <p className="text-sm text-gray-600">
                Instead of hours of research: clear tables,
                brief evaluations, done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Comparisons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="text-center mb-10">
            <span className="inline-block bg-[rgb(23,162,69)]/10 text-[rgb(23,162,69)] text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Popular Comparisons
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Top Comparisons: Most Requested
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The three comparisons that Singapore and APAC companies are most interested in. A great starting point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCompetitors.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/comparison/${competitor.slug}`}
                className="bg-white rounded-xl p-6 border-2 border-[rgb(23,162,69)]/20 hover:border-[rgb(23,162,69)] hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[rgb(23,162,69)]/10 text-[rgb(23,162,69)] text-xs font-bold px-2 py-1 rounded">
                    POPULAR
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-[rgb(23,162,69)] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  HireDeveloper.sg vs {competitor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {competitor.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {competitor.features.filter((f) => f.us === true).length} HD.sg Advantages
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {competitor.focus.split(' ').slice(0, 3).join(' ')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick comparison table: HD.sg vs top 5 */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Quick Comparison: HireDeveloper.sg vs Top Alternatives
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            See at a glance how HireDeveloper.sg differs from the most well-known platforms.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg border border-gray-200">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Platform</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Matching Time</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Pre-Vetting</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Singapore Focus</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Trial Period</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Transparent Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-[rgb(23,162,69)]/5">
                  <td className="py-3 px-4 text-sm font-bold text-[rgb(23,162,69)]">HireDeveloper.sg</td>
                  <td className="py-3 px-4 text-center text-sm text-gray-700 font-medium">48 Hours</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                      <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                      <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                      <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                      <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                </tr>
                {competitors.slice(0, 5).map((c, i) => (
                  <tr key={c.slug} className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50'}`}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">
                      <Link href={`/comparison/${c.slug}`} className="hover:text-[rgb(0,159,255)] hover:underline">
                        {c.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">
                      {c.features.find((f) => f.name === 'Matching within 48 Hours')?.them === false
                        ? 'Varies'
                        : String(c.features.find((f) => f.name === 'Matching within 48 Hours')?.them)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {c.features.find((f) => f.name === 'Pre-vetted Developers')?.them === true ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                          <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                          <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                        <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {c.features.find((f) => f.name === 'Risk-free Trial Period')?.them === true ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                          <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                          <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {c.features.find((f) => f.name === 'Transparent Pricing')?.them === true ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[rgb(23,162,69)]/10">
                          <svg className="w-3 h-3 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                          <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <ComparisonQuiz />

      {/* All competitor cards grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            All Comparisons
          </h2>
          <p className="text-gray-600 mb-8">
            Choose a provider and read our detailed comparison with HireDeveloper.sg.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/comparison/${competitor.slug}`}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    vs {competitor.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {competitor.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {competitor.focus}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom info section */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Create Our Comparisons
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We evaluate each platform using the same criteria: quality assurance, pricing, matching speed, support, and technology coverage. The data comes from public sources, user reviews, and our own tests. This gives you a solid foundation without having to do all the research yourself.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-[rgb(23,162,69)]">{competitors.length}+</span>
                <p className="text-sm text-gray-600 mt-1">Platforms Compared</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-[rgb(23,162,69)]">8+</span>
                <p className="text-sm text-gray-600 mt-1">Criteria Per Comparison</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-3xl font-bold text-[rgb(23,162,69)]">{currentYear}</span>
                <p className="text-sm text-gray-600 mt-1">Last Updated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Developers by Specialization"
        links={[
          { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
          { label: 'Python Developers', href: '/hire-developers/python' },
          { label: 'React Developers', href: '/hire-developers/reactjs' },
          { label: 'Node.js Developers', href: '/hire-developers/nodejs' },
          { label: 'TypeScript Developers', href: '/hire-developers/typescript' },
          { label: 'Java Developers', href: '/hire-developers/java' },
          { label: 'Full-Stack Developers', href: '/hire-developers/full-stack' },
          { label: 'AI Developers', href: '/hire-developers/ai' },
        ]}
      />

      <FinalCTA
        heading="Ready to make the best choice?"
        subheading="Start risk-free and see for yourself."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
