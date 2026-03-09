import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';
import InlineCTABanner from '../../components/InlineCTABanner';
import HiringProcessFlowchart from '../../components/HiringProcessFlowchart';
import FAQSection from '../../components/FAQSection';
import { industries, getIndustryBySlug, getAllIndustrySlugs } from '@/app/data/industries';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  const year = new Date().getFullYear();
  return {
    title: `${industry.metaTitle} - ${year} | HireDeveloper.sg`,
    description: industry.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.sg/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const year = new Date().getFullYear();
  const otherIndustries = industries.filter((i) => i.slug !== slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: industry.metaTitle,
    description: industry.metaDescription,
    url: `https://hiredeveloper.sg/industries/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.sg',
      url: 'https://hiredeveloper.sg',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: industry.name, href: `/industries/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <p className="text-[rgb(0,159,255)] font-semibold mb-4 text-sm uppercase tracking-wider">
            {industry.name} Industry &middot; Singapore &middot; {year}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {industry.metaTitle}
          </h1>
          <p className="text-lg text-white/70 mb-2">
            {industry.heroSubtitle}
          </p>
          <p className="text-sm text-white/40 mt-4">
            Pre-vetted &middot; Matched in 48 hours &middot; Risk-free trial
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industry.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[rgb(0,159,255)]">{stat.value}</p>
                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Hire {industry.name} Developers in Singapore?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {industry.intro}
            </p>

            {/* Fun Facts */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[rgb(0,159,255)]/10 flex items-center justify-center text-sm">
                  <svg className="w-4 h-4 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Singapore {industry.name} — Did You Know?
              </h3>
              <ul className="space-y-3">
                {industry.funFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgb(0,159,255)]/10 flex items-center justify-center mt-0.5 text-xs font-bold text-[rgb(0,159,255)]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Roles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Key {industry.name} Developer Roles
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            The most in-demand {industry.name.toLowerCase()} engineering roles in Singapore&apos;s {year} job market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industry.keyRoles.map((role, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[rgb(0,159,255)]/10 flex items-center justify-center text-sm font-bold text-[rgb(0,159,255)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Benchmarks */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            {industry.name} Developer Salary Benchmarks — Singapore {year}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Annual salary ranges for {industry.name.toLowerCase()} developers based on Singapore market data.
            Rates include base salary and may vary by company size and funding stage.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2 bg-gray-900 text-white px-6 py-3">
                <span className="text-sm font-semibold">Role</span>
                <span className="text-sm font-semibold text-right">Annual Salary Range</span>
              </div>
              {industry.salaryBenchmarks.map((bench, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${i < industry.salaryBenchmarks.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className="text-sm text-gray-900 font-medium">{bench.role}</span>
                  <span className="text-sm text-[rgb(0,159,255)] font-semibold text-right">{bench.range}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Source: HireDeveloper.sg internal data, Glassdoor, and NodeFlair. Updated {year}. Salaries in SGD.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Common {industry.name} Tech Stack in Singapore
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Technologies most frequently used by {industry.name.toLowerCase()} companies in Singapore.
            Our developers are pre-vetted in these tools.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industry.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 shadow-sm hover:border-[rgb(0,159,255)] hover:text-[rgb(0,159,255)] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <InlineCTABanner
        headline={`Ready to hire ${industry.name} developers?`}
        subtext="Receive vetted candidate profiles within 48 hours — free and with no obligation."
      />

      {/* Hiring Process Flowchart */}
      <HiringProcessFlowchart industry={`your ${industry.name.toLowerCase()} project`} />

      {/* Challenges */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {industry.name} Hiring Challenges in Singapore
            </h2>
            <p className="text-gray-600 mb-6">
              Hiring {industry.name.toLowerCase()} developers in Singapore comes with unique challenges that generic platforms can&apos;t solve. Here&apos;s what companies face — and how HireDeveloper.sg addresses each one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.challenges.map((challenge, i) => (
                <div key={i} className="flex items-start gap-3 bg-red-50/50 rounded-lg p-4 border border-red-100/50">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">{challenge}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-[rgb(23,162,69)]/5 rounded-lg p-5 border border-[rgb(23,162,69)]/10">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-[rgb(23,162,69)]">How HireDeveloper.sg helps:</span>{' '}
                We pre-vet all {industry.name.toLowerCase()} developers for domain expertise, ensuring they understand Singapore&apos;s
                regulatory environment, local tech ecosystem, and industry-specific tooling. No wasted interviews, no skills mismatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-center mb-10">
              Common questions about hiring {industry.name.toLowerCase()} developers in Singapore.
            </p>
            <div className="space-y-4">
              {industry.faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-base font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Explore Other Industries
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We provide pre-vetted developers across all major industries in Singapore.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {otherIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="px-4 py-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md hover:bg-white transition-all border border-gray-200 text-center font-medium"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        title={`Related ${industry.name} Developers`}
        links={industry.relatedDevelopers}
      />

      <RelatedLinks
        title="Singapore Tech Hubs"
        links={industry.relatedLocations}
      />

      <FinalCTA
        heading={`Hire ${industry.name} developers in Singapore today`}
        subheading="Get matched with pre-vetted candidates in 48 hours. Start risk-free."
      />

      <Footer />
    </div>
  );
}
