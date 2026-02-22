import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';
import { competitors, Competitor } from '@/app/data/competitors';
import ComparisonQuiz from '../ComparisonQuiz';
import DecisionFlowchart from '../DecisionFlowchart';

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const competitor = competitors.find((c) => c.slug === params.slug);
  if (!competitor) {
    return { title: 'Comparison Not Found | HireDeveloper.ae' };
  }
  return {
    title: `HireDeveloper.ae vs ${competitor.name} | Comparison ${new Date().getFullYear()}`,
    description: `Detailed comparison between HireDeveloper.ae and ${competitor.name}: features, pricing, pros and cons. Find the best platform for your remote developers.`,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.ae/comparison/${competitor.slug}`,
    },
  };
}

function FeatureCheck({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[rgb(23,162,69)]/10">
        <svg className="w-4 h-4 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
        <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    );
  }
  return <span className="text-sm text-gray-600">{value}</span>;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function generateFAQs(competitor: Competitor) {
  return [
    {
      question: `What is the main difference between HireDeveloper.ae and ${competitor.name}?`,
      answer: `HireDeveloper.ae delivers pre-vetted remote developers with a focus on the UAE and Gulf market, presenting candidates within 48 hours. ${competitor.name} focuses on: ${competitor.focus}. Both connect you with qualified developers, but with HireDeveloper.ae you get more personalized support and clearer pricing.`,
    },
    {
      question: `Is HireDeveloper.ae more affordable than ${competitor.name}?`,
      answer: `At ${competitor.name}, the pricing works as follows: ${competitor.pricing} HireDeveloper.ae operates with clear, transparent pricing and no hidden fees. Especially for full-time hires, this can be significantly more cost-effective.`,
    },
    {
      question: `Can I switch from ${competitor.name} to HireDeveloper.ae?`,
      answer: `Absolutely, switching is possible at any time. Our team will guide you through the transition and help you quickly find suitable developers. Many clients come to us from other platforms and appreciate the personal service.`,
    },
    {
      question: `Which platform is better suited for startups?`,
      answer: `Both are viable options. What makes HireDeveloper.ae particularly attractive for startups: risk-free trial period, matching within 48 hours, and flexible contracts. When the budget is tight and speed matters, that pays off. Plus, our UAE focus is a great fit for Gulf-region founding teams.`,
    },
    {
      question: `How long does it take to hire a developer through HireDeveloper.ae vs ${competitor.name}?`,
      answer: `With HireDeveloper.ae, you typically receive matching candidate proposals within 48 hours. With ${competitor.name}, this varies depending on availability and selection process. If you need someone quickly, our matching process saves you significant time.`,
    },
    {
      question: `Does HireDeveloper.ae offer the same technologies as ${competitor.name}?`,
      answer: `Yes. In our pool, you will find developers for JavaScript, TypeScript, React, Node.js, Python, Java, PHP, Ruby, Go, Swift, Kotlin, and more. Whether Full-Stack, Frontend, Backend, Mobile, or AI: we have the right expert for most projects.`,
    },
    {
      question: `How does the risk-free trial period work at HireDeveloper.ae?`,
      answer: `You test every matched developer during a trial period first. If it does not work out, we find a replacement at no extra cost. This removes the risk and ensures the developer truly fits your team in day-to-day work.`,
    },
    {
      question: `What contract models does HireDeveloper.ae offer compared to ${competitor.name}?`,
      answer: `With HireDeveloper.ae, you can choose between full-time and freelance contracts. Short-term project or long-term employment, both work. With ${competitor.name}, this depends on their specific offering.`,
    },
    {
      question: `Are there hidden costs at HireDeveloper.ae?`,
      answer: `No. You know from the start what you are paying. No platform fees, no upfront costs, no surprise surcharges. With many other platforms, additional fees only show up on the invoice. We do things differently.`,
    },
    {
      question: `How does HireDeveloper.ae ensure developer quality?`,
      answer: `Four stages: technical coding test, professional experience review, communication check, and references. About 5% of applicants make it through. And even after placement, we stay involved and provide you with ongoing feedback and support.`,
    },
  ];
}

function generateDetailedComparison(competitor: Competitor) {
  return {
    hiring: {
      title: 'Hiring Process',
      us: 'Here is how it works at HireDeveloper.ae: You describe who you need. Within 48 hours, you receive pre-vetted candidate proposals. We handle screening and pre-selection. You only conduct the final interviews.',
      them: `At ${competitor.name}, the hiring process varies: ${competitor.focus}. Depending on the platform, you may need to actively search for candidates yourself, run your own selection processes, or wait for automated matching. This can take more or less time depending on your requirements.`,
    },
    quality: {
      title: 'Quality Assurance',
      us: 'Four screening steps before anyone joins our pool: technical coding test, professional experience and references, communication check, and a trial task with a realistic scenario. In the end, roughly 5% of applicants make the cut.',
      them: `${competitor.name} relies on: ${competitor.pros.join(', ')}. However, there are also limitations: ${competitor.cons.slice(0, 2).join(', ')}.`,
    },
    support: {
      title: 'Client Support',
      us: 'Every client gets a dedicated account manager. From the first briefing to well after the hire is made. If something comes up, you call instead of filing tickets.',
      them: `Support at ${competitor.name} depends on your plan and location. Since the platform is primarily aimed at the English-speaking market, communication can sometimes be an additional hurdle.`,
    },
    scalability: {
      title: 'Scalability',
      us: 'One developer or an entire team: HireDeveloper.ae scales with you. You can flexibly switch between full-time and freelance, ramp up or reduce, all without long-term contract commitments.',
      them: `At ${competitor.name}, scalability depends on available plans and models. ${competitor.pricing}`,
    },
  };
}

export default function ComparisonDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const competitor = competitors.find((c) => c.slug === params.slug);

  if (!competitor) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-[1280px] mx-auto px-12 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Comparison Not Found
          </h1>
          <Link href="/comparison" className="text-[rgb(0,159,255)] hover:underline">
            Back to Overview
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const faqs = generateFAQs(competitor);
  const detailedComparison = generateDetailedComparison(competitor);
  const otherCompetitors = competitors
    .filter((c) => c.slug !== competitor.slug)
    .slice(0, 8);

  const extendedFeatures = [
    ...competitor.features,
    { name: 'Dedicated Account Manager', us: true as boolean | string, them: false as boolean | string },
    { name: 'Gulf Time Zone Support', us: true as boolean | string, them: 'Partial' as boolean | string },
    { name: 'Full-Time & Freelance', us: true as boolean | string, them: (competitor.features.find(f => f.name === 'Full-time Hires')?.them === true ? true : false) as boolean | string },
    { name: 'No Upfront Fees', us: true as boolean | string, them: false as boolean | string },
    { name: 'Personal Matching', us: true as boolean | string, them: false as boolean | string },
    { name: 'Free Replacement', us: true as boolean | string, them: false as boolean | string },
  ];

  // Remove duplicates based on name
  const seenNames = new Set<string>();
  const uniqueFeatures = extendedFeatures.filter((f) => {
    if (seenNames.has(f.name)) return false;
    seenNames.add(f.name);
    return true;
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `HireDeveloper.ae vs ${competitor.name} | Comparison ${new Date().getFullYear()}`,
    description: `Detailed comparison between HireDeveloper.ae and ${competitor.name}.`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://hiredeveloper.ae/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Comparison',
          item: 'https://hiredeveloper.ae/comparison',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `vs ${competitor.name}`,
          item: `https://hiredeveloper.ae/comparison/${competitor.slug}`,
        },
      ],
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
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
          { label: 'Comparison', href: '/comparison' },
          { label: `vs ${competitor.name}`, href: `/comparison/${competitor.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <p className="text-[rgb(23,162,69)] font-semibold mb-4 text-sm uppercase tracking-wider">
            Platform Comparison {new Date().getFullYear()}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            HireDeveloper.ae vs {competitor.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Detailed comparison between HireDeveloper.ae and{' '}
            {competitor.name}. Find out which platform best fits your
            requirements.
          </p>
          {/* Quick stat badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
              48h Matching
            </span>
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
              Risk-Free Trial
            </span>
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
              UAE Focus
            </span>
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
              No Hidden Costs
            </span>
          </div>
        </div>
      </section>

      {/* TL;DR summary */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="bg-[rgb(23,162,69)]/5 border border-[rgb(23,162,69)]/20 rounded-xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Summary (TL;DR)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>HireDeveloper.ae</strong> offers faster matching (48h vs. weeks), more transparent pricing, and a special UAE focus with dedicated support.{' '}
              <strong>{competitor.name}</strong> focuses on: {competitor.focus}.{' '}
              For companies in the UAE and Gulf region looking to quickly hire highly qualified remote developers, HireDeveloper.ae is the better choice.
            </p>
          </div>
        </div>
      </section>

      {/* Quick overview table */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Quick Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 w-1/3">
                    Criterion
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[rgb(23,162,69)] w-1/3">
                    HireDeveloper.ae
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700 w-1/3">
                    {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Founded</td>
                  <td className="py-3 px-4 text-sm text-gray-600">2023</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.founded}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Headquarters</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Dubai, UAE</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.headquarters}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Focus</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Pre-Vetted Remote Developers (UAE/Gulf)</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.focus}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Pricing</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Transparent, no hidden fees</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.pricing}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Matching Time</td>
                  <td className="py-3 px-4 text-sm text-gray-600">48 Hours</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Varies</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Target Market</td>
                  <td className="py-3 px-4 text-sm text-gray-600">UAE & Gulf Region</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Global / {competitor.headquarters}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Contract Models</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Full-Time & Freelance</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.focus.includes('EOR') ? 'EOR & Contractor' : 'Varies'}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Client Rating</td>
                  <td className="py-3 px-4">
                    <StarRating rating={5} />
                  </td>
                  <td className="py-3 px-4">
                    <StarRating rating={3} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed comparison sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Detailed Comparison
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            HireDeveloper.ae and {competitor.name} across four areas that matter most when choosing a platform.
          </p>

          <div className="space-y-8">
            {Object.values(detailedComparison).map((section) => (
              <div key={section.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-6 py-3">
                  <h3 className="text-white font-bold text-lg">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[rgb(23,162,69)] text-white text-xs font-bold px-2 py-0.5 rounded">
                        HireDeveloper.ae
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {section.us}
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded">
                        {competitor.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {section.them}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended feature comparison table */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            All Features Compared
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            All features and characteristics of both platforms at a glance.
          </p>
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-[rgb(23,162,69)]">
                    HireDeveloper.ae
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">
                    {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {uniqueFeatures.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-gray-100 ${
                      index % 2 === 1 ? 'bg-gray-50' : ''
                    }`}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-700">
                      {feature.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <FeatureCheck value={feature.us} />
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <FeatureCheck value={feature.them} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Feature count summary */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[rgb(23,162,69)]/5 border border-[rgb(23,162,69)]/20 rounded-lg p-4 text-center">
              <span className="text-3xl font-bold text-[rgb(23,162,69)]">
                {uniqueFeatures.filter((f) => f.us === true).length}
              </span>
              <p className="text-sm text-gray-600 mt-1">Features at HireDeveloper.ae</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <span className="text-3xl font-bold text-gray-500">
                {uniqueFeatures.filter((f) => f.them === true).length}
              </span>
              <p className="text-sm text-gray-600 mt-1">Features at {competitor.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Pricing Comparison
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Cost transparency is important to us. Here you can see how the pricing models differ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-[rgb(23,162,69)] rounded-lg p-8 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-[rgb(23,162,69)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </div>
              <div className="flex items-center gap-2 mb-6 mt-2">
                <h3 className="text-xl font-bold text-gray-900">HireDeveloper.ae</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Risk-free trial period included</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">No upfront fees or platform costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Up to 58% cost savings vs. traditional hiring</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Free replacement if not satisfied</span>
                </li>
              </ul>
              <div className="bg-[rgb(23,162,69)]/5 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-medium">
                  Bottom line: You only pay for work delivered. No hidden fees, no surprises.
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {competitor.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {competitor.pricing}
              </p>
              <div className="space-y-3">
                {competitor.cons.filter((_, i) => i < 3).map((con) => (
                  <div key={con} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="text-sm text-gray-600">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Pros and Cons in Detail
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            An honest comparison of the strengths and weaknesses of both platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* HireDeveloper.ae */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                HireDeveloper.ae
              </h3>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[rgb(23,162,69)] uppercase tracking-wider mb-3">
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {[
                    'Pre-vetted developers with technical screening',
                    'Matching within 48 hours',
                    'UAE focus with dedicated support',
                    'Full-time and freelance options',
                    'Risk-free trial period',
                    'Transparent pricing with no hidden costs',
                    'Personal account manager',
                    'Free replacement if not a fit',
                  ].map((pro) => (
                    <li key={pro} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[rgb(23,162,69)] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Limitations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1 shrink-0">-</span>
                    <span className="text-sm text-gray-500">Newer platform than some competitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1 shrink-0">-</span>
                    <span className="text-sm text-gray-500">Focus on UAE/Gulf region (less global)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Competitor */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {competitor.name}
              </h3>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[rgb(23,162,69)] uppercase tracking-wider mb-3">
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {competitor.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[rgb(23,162,69)] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                  Disadvantages
                </h4>
                <ul className="space-y-2">
                  {competitor.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Flowchart */}
      <DecisionFlowchart competitorName={competitor.name} />

      {/* Why choose HireDeveloper.ae */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Why Choose HireDeveloper.ae?
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Built for companies in the UAE and Gulf region that need reliable remote developers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verified Quality</h3>
              <p className="text-sm text-gray-600">
                Technical skills, communication, and reliability are vetted across multiple stages. Only about 5% of applicants make it into our pool.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(0,159,255)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Matching</h3>
              <p className="text-sm text-gray-600">
                48 hours, then you have matching candidates on the table. No long waits, no endless application loops.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">UAE Expertise</h3>
              <p className="text-sm text-gray-600">
                We understand the Dubai and Abu Dhabi market and know what companies in the UAE and Gulf region value. Dedicated English-speaking support is standard.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(0,159,255)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start Risk-Free</h3>
              <p className="text-sm text-gray-600">
                Test first, then decide. Pay only when you are satisfied. No commitments, no hidden costs, and free replacement if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Conclusion: HireDeveloper.ae vs {competitor.name}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Both platforms have their merits. For UAE-based companies, however, HireDeveloper.ae has several strong arguments:{' '}
              <strong>faster matching</strong> (48h instead of weeks),{' '}
              <strong>transparent pricing</strong> with no hidden fees,{' '}
              <strong>dedicated support</strong>, and a{' '}
              <strong>risk-free trial period</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {competitor.name} scores with {competitor.pros.slice(0, 2).join(' and ').toLowerCase()}, but has weaknesses in {competitor.cons.slice(0, 2).join(' and ').toLowerCase()}.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Looking for someone who knows the UAE market and can quickly deliver strong remote developers? Then HireDeveloper.ae is the right choice.
            </p>
            <div className="bg-white border-2 border-[rgb(23,162,69)] rounded-xl p-6 inline-block">
              <p className="text-[rgb(23,162,69)] font-bold text-lg mb-1">Our Verdict</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <StarRating rating={5} />
                <span className="text-sm text-gray-500 ml-2">5/5 Stars</span>
              </div>
              <p className="text-sm text-gray-600">
                Our recommendation if quality, speed, and personal support matter to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <ComparisonQuiz />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Answers to the most important questions about the comparison between HireDeveloper.ae and {competitor.name}.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related comparisons */}
      <RelatedLinks
        title="More Comparisons"
        links={otherCompetitors.map((c) => ({
          label: `vs ${c.name}`,
          href: `/comparison/${c.slug}`,
        }))}
      />

      <FinalCTA
        heading="See for yourself!"
        subheading="Start risk-free and find your ideal developer in 48 hours."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
