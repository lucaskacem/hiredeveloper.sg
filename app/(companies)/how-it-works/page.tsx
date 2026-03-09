import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'How HireDeveloper.sg Works | Hire in 3 Simple Steps',
  description:
    'Learn how to hire vetted remote developers, designers, and other talent through HireDeveloper.sg in just 3 steps. Fast, risk-free, and with no upfront costs.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to hire remote talent through HireDeveloper.sg',
    description:
      'In 3 simple steps to the perfect remote team: Tell us your needs, interview candidates, hire.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Tell Us Your Needs',
        text: 'Describe the role, required skills, and your budget. Our team immediately starts searching.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Interview Candidates',
        text: 'Within 48 hours you receive pre-vetted candidate profiles and conduct interviews on your terms.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Hire and Start',
        text: 'Choose the best candidate, sign the contract, and start the collaboration immediately.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HowItWorksPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
  ];

  const relatedLinks = [
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'Hire Designers', href: '/hire-designers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Calculate Savings', href: '/calculate-savings' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageJsonLd />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-10 md:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 mb-6">
              How HireDeveloper.sg Works
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Three steps. That is how we connect you with the best remote talent in the world.
              No risk, no upfront costs. You only pay upon successful hire.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Get Started
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-gray-50 py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-16">
            Your Path to the Perfect Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6 rounded-lg overflow-hidden bg-white p-8">
                <div className="aspect-square w-full max-w-[300px] mx-auto flex items-center justify-center">
                  <img
                    src="/images/steps/request.svg"
                    alt="Tell us your hiring needs - hire developers in Singapore"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-[20px] font-bold text-[rgb(0,159,255)] mb-2">01</div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                Tell Us Your Needs
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                Tell us what role you need to fill, what skills are required, and
                what your budget looks like. Our matching team starts immediately, searching
                a pool of over 350,000 vetted talents for the right people.
              </p>
              <p className="text-sm text-gray-600">Takes only 5 minutes</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6 rounded-lg overflow-hidden bg-white p-8">
                <div className="aspect-square w-full max-w-[300px] mx-auto flex items-center justify-center">
                  <img
                    src="/images/steps/interview.svg"
                    alt="Interview pre-vetted developer candidates for Singapore companies"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-[20px] font-bold text-[rgb(0,159,255)] mb-2">02</div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                Interview Candidates
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                Within 48 hours you receive hand-picked candidate profiles.
                Then interview them the way you normally do: via video, technical tests,
                or pair programming. We handle the coordination.
              </p>
              <p className="text-sm text-gray-600">First profiles within 48 hours</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6 rounded-lg overflow-hidden bg-white p-8">
                <div className="aspect-square w-full max-w-[300px] mx-auto flex items-center justify-center">
                  <img
                    src="/images/steps/hire.svg"
                    alt="Hire remote developers and start working - Singapore talent platform"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-[20px] font-bold text-[rgb(0,159,255)] mb-2">03</div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                Hire and Start
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                Made your decision? Sign the NDA and contract -- we handle the paperwork.
                Your new team member can start right away. And if it does not work out:
                we find a replacement at no cost.
              </p>
              <p className="text-sm text-gray-600">Risk-free trial period included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HireDeveloper.sg */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            Why Companies Choose HireDeveloper.sg
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            More than a platform: we are your partner in building strong remote teams.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">2%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Only the Best</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vetting process is rigorous: only the top 2% of all applicants make it through.
                Technical assessments, live coding, communication tests, reference checks. Only truly
                exceptional talent ends up on your desk.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">48h</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional hiring drags on for months. With us, you receive
                first profiles within 48 hours. Most companies hire
                within one to two weeks.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">60%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Up to 60% Lower Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                Save up to 60% on staffing costs compared to local hires
                in Singapore, without compromising on quality. Try our{' '}
                <a href="/tools/team-cost-calculator" className="text-[rgb(0,159,255)] hover:underline">
                  Team Cost Calculator
                </a>{' '}
                for an individual estimate.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">$0</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Upfront Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                You only pay when you hire someone. No registration fees,
                no subscriptions, nothing hidden. You see the costs upfront.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">350K+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Massive Talent Pool</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 350,000 vetted remote talents worldwide: developers, designers,
                marketers, product managers, project managers, assistants. Whatever role
                you need, we find someone.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl mb-4 text-[rgb(0,159,255)]">100%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk-Free Trial Period</h3>
              <p className="text-gray-600 leading-relaxed">
                Every hire comes with a risk-free trial period. If the candidate
                is not the right fit, we find a replacement at no cost. Simple as that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50 py-10 md:py-16 lg:py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            Who Is HireDeveloper.sg For?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Whether startup or enterprise: we have the right solution for every company size.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Startups</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Build a strong team quickly without breaking the budget?
                We find experienced remote talent that delivers from day one.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Rapid scaling without office costs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Access to senior talent from day one
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Flexible freelance or full-time models
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SMEs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specialists that are hard to find locally? Our global talent pool makes it possible
                to fill even niche positions quickly.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Specialized talent for niche projects
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Up to 60% cost savings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Dedicated account managers
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprises</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Building entire teams or bridging capacity gaps: large companies
                rely on HireDeveloper.sg when speed matters.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Parallel filling of multiple positions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Employer-of-Record solutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                  Compliant contracts and NDAs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Talent categories */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 text-center mb-4">
            What Talent Can You Hire?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            HireDeveloper.sg covers all key roles for your digital team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/hire-developers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Developers</h3>
              <p className="text-gray-600 text-sm">
                Full-stack, frontend, backend, mobile, DevOps, AI. Over 250,000 vetted developers worldwide.
              </p>
            </a>
            <a href="/hire-designers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Designers</h3>
              <p className="text-gray-600 text-sm">
                UX, UI, product, graphic, brand: creative minds for every design challenge.
              </p>
            </a>
            <a href="/hire-marketers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marketers</h3>
              <p className="text-gray-600 text-sm">
                SEO, content, growth, performance, social media. Data-driven marketing professionals.
              </p>
            </a>
            <a href="/hire-product-managers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Product Managers</h3>
              <p className="text-gray-600 text-sm">
                Product strategy, roadmap, stakeholder management: experienced PMs for your product.
              </p>
            </a>
            <a href="/hire-project-managers" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Managers</h3>
              <p className="text-gray-600 text-sm">
                Agile, Scrum, PMP: certified project managers for complex projects.
              </p>
            </a>
            <a href="/hire-assistants" className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assistants</h3>
              <p className="text-gray-600 text-sm">
                Virtual assistants, executive assistants. Reliable support for your daily operations.
              </p>
            </a>
          </div>
        </div>
      </section>

      <RelatedLinks title="Related Pages" links={relatedLinks} />

      <FinalCTA
        heading="Ready to Build Your Team?"
        subheading="Receive vetted candidate profiles within 48 hours. Risk-free with no upfront costs."
        ctaText="Get Started"
      />

      <Footer />
    </div>
  );
}
