import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Pricing | Transparent Pricing Model | HireDeveloper.ae',
  description:
    'Learn about HireDeveloper.ae pricing. $0 until you hire, then a fair placement fee. No hidden costs, no risk.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pricing - HireDeveloper.ae',
    description: 'Transparent pricing model: No upfront fees. You only pay upon successful hire.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PricingPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
  ];

  const relatedLinks = [
    { label: 'Calculate Savings', href: '/calculate-savings' },
    { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
    { label: 'Salary Calculator', href: '/tools/salary-calculator' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageJsonLd />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              At HireDeveloper.ae, you only pay once you&apos;ve found the perfect candidate.
              No upfront fees, no subscriptions, no hidden costs.
            </p>
            <p className="text-lg text-[rgb(0,159,255)] font-semibold">
              $0 until you hire. Guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing model */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            How Our Pricing Model Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Your Request</h3>
              <div className="text-3xl font-bold text-[rgb(23,162,69)] mb-4">Free</div>
              <p className="text-gray-600 leading-relaxed">
                Describe your requirements and receive hand-picked candidate profiles
                within 48 hours. No cost, no obligation.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conduct Interviews</h3>
              <div className="text-3xl font-bold text-[rgb(23,162,69)] mb-4">Free</div>
              <p className="text-gray-600 leading-relaxed">
                Conduct as many interviews as you like. We coordinate the
                entire process for you at no additional cost.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-xl border-2 border-[rgb(0,159,255)] text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(0,159,255)] text-white text-xs font-bold px-3 py-1 rounded-full">
                You only pay here
              </div>
              <div className="w-16 h-16 bg-[rgb(0,159,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[rgb(0,159,255)]">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hire</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">Placement Fee</div>
              <p className="text-gray-600 leading-relaxed">
                Only when you decide to hire a candidate does a fair
                placement fee apply. Risk-free trial period included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Flexible Engagement Models
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Choose the model that best fits your project and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Freelance / Project-Based</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ideal for short-term projects or specialized tasks. Pay
                on an hourly basis and scale flexibly as needed.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Hourly billing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  No minimum contract duration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Flexible scaling (up or down)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Ideal for projects with a defined scope
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Typical hourly rates:</p>
                <p className="text-lg font-semibold text-gray-900">$25 to $200 USD/hour</p>
                <p className="text-xs text-gray-500">Depending on role and experience level</p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Time Remote</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Perfect for long-term positions. Your talent works exclusively for you
                and becomes part of your team.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Fixed monthly salary
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Exclusive engagement for your company
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Employer-of-Record solution available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Up to 60% savings vs. Dubai/Abu Dhabi salaries
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Typical monthly salaries:</p>
                <p className="text-lg font-semibold text-gray-900">$1,500 to $8,000 USD/month</p>
                <p className="text-xs text-gray-500">Depending on role and experience level</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            What&apos;s Included in Every Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rigorous Vetting</h3>
              <p className="text-gray-600 text-sm">
                Every candidate goes through our multi-stage screening process including
                technical assessments, live coding, and communication evaluation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Risk-Free Trial Period</h3>
              <p className="text-gray-600 text-sm">
                Test the collaboration risk-free. If the candidate is not the right fit,
                we find a replacement at no extra cost.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contract Management</h3>
              <p className="text-gray-600 text-sm">
                We handle NDAs, IP agreements, service contracts, and
                compliant data processing agreements.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Account Manager</h3>
              <p className="text-gray-600 text-sm">
                Your personal point of contact guides you through the entire
                hiring process and beyond.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Onboarding Support</h3>
              <p className="text-gray-600 text-sm">
                We support you during onboarding so your new team member
                becomes productive quickly.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">
                Even after hiring, we are here for you: for questions,
                issues, or when you need more people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[40px] font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions About Pricing
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Are there really no upfront costs?',
                  a: 'Correct. Registration, requests, and interviews are all free. You only pay when you decide on a candidate and start the collaboration.',
                },
                {
                  q: 'How much is the placement fee?',
                  a: 'The placement fee depends on the contract model (freelance or full-time) and the experience level of the talent. Contact us for a personalized quote. We are fully transparent.',
                },
                {
                  q: 'What happens if the candidate is not the right fit?',
                  a: 'We offer a risk-free trial period. If the candidate does not meet your expectations, we find a replacement at no cost or refund the placement fee.',
                },
                {
                  q: 'Are there discounts for multiple hires?',
                  a: 'Yes, when hiring multiple talents we offer attractive volume pricing. Talk to us for a customized offer for your team.',
                },
                {
                  q: 'How are ongoing costs for freelancers billed?',
                  a: 'Freelancers are billed on an hourly basis. You receive a transparent monthly invoice with a detailed breakdown of hours worked.',
                },
              ].map((item) => (
                <div key={item.q} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/faq" className="text-[rgb(0,159,255)] hover:underline font-medium">
                View all FAQs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Request a Custom Quote
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Every project is unique. Let us discuss your requirements
            and create a tailored offer.
          </p>
          <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
            Get a Free Quote
          </OpenModalButton>
        </div>
      </section>

      <RelatedLinks title="Related Pages" links={relatedLinks} />

      <FinalCTA
        heading="Start Risk-Free"
        subheading="$0 until you hire. Receive vetted candidate profiles within 48 hours."
        ctaText="Get Started"
      />

      <Footer />
    </div>
  );
}
