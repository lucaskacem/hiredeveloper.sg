import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Calculate Savings | Save Up to 60% with Remote Talent | HireDeveloper.ae',
  description:
    'Calculate your savings when hiring remote talent through HireDeveloper.ae. Up to 60% cost savings compared to local hires in Dubai and Abu Dhabi.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Calculate Savings - HireDeveloper.ae',
    description:
      'Find out how much you can save with remote talent. Detailed cost comparison between local and remote hires.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function CalculateSavingsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Calculate Savings', href: '/calculate-savings' },
  ];

  const relatedLinks = [
    { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
    { label: 'Salary Calculator', href: '/tools/salary-calculator' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'Hire Designers', href: '/hire-designers' },
    { label: 'FAQ', href: '/faq' },
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
              Calculate Your Savings
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Companies in Dubai and Abu Dhabi save an average of up to 60% on staffing costs
              when hiring remote talent through HireDeveloper.ae. The quality?
              Stays just as high.
            </p>
            <a
              href="/tools/team-cost-calculator"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-all"
            >
              Open Team Cost Calculator
            </a>
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Cost Comparison: Local vs. Remote
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            See how much you can save on typical roles when hiring through HireDeveloper.ae.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-gray-900 text-white text-sm font-semibold">
                <div className="p-4">Role</div>
                <div className="p-4 text-center">UAE Salary (Annual)</div>
                <div className="p-4 text-center">Remote via HireDeveloper.ae</div>
                <div className="p-4 text-center">Savings</div>
              </div>

              {[
                { role: 'Senior Full-Stack Developer', local: '$95,000 USD', remote: '$45,000 USD', saving: '~53%' },
                { role: 'UX/UI Designer', local: '$75,000 USD', remote: '$32,000 USD', saving: '~57%' },
                { role: 'DevOps Engineer', local: '$90,000 USD', remote: '$40,000 USD', saving: '~56%' },
                { role: 'Digital Marketer', local: '$70,000 USD', remote: '$28,000 USD', saving: '~60%' },
                { role: 'Product Manager', local: '$100,000 USD', remote: '$42,000 USD', saving: '~58%' },
                { role: 'Project Manager', local: '$85,000 USD', remote: '$36,000 USD', saving: '~58%' },
                { role: 'Virtual Assistant', local: '$45,000 USD', remote: '$18,000 USD', saving: '~60%' },
              ].map((item) => (
                <div key={item.role} className="grid grid-cols-4 gap-0 border-t border-gray-100">
                  <div className="p-4 text-sm font-medium text-gray-900">{item.role}</div>
                  <div className="p-4 text-sm text-gray-600 text-center">{item.local}</div>
                  <div className="p-4 text-sm text-[rgb(23,162,69)] font-semibold text-center">{item.remote}</div>
                  <div className="p-4 text-sm text-[rgb(0,159,255)] font-bold text-center">{item.saving}</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Average values based on Dubai/Abu Dhabi market data. Actual savings vary depending on experience, location, and project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Where savings come from */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Where Do the Savings Come From?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            It is not just about salary. Remote hires through HireDeveloper.ae reduce costs across the board.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Salary Differentials</h3>
              <p className="text-gray-600 leading-relaxed">
                Talent in Eastern Europe, Latin America, and Asia deliver the same quality
                at significantly lower cost of living. The result: fair salaries
                for the talent, noticeable savings for you.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Office Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                No office, no equipment, no overhead. Remote talent works from their
                own workspace. In Dubai or Abu Dhabi alone, that saves
                $10,000-$25,000 USD per employee per year.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lower Recruitment Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional recruiters charge 20-30% of the annual salary. With us?
                No upfront fees, a transparent pricing model, and fair terms.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faster Hiring</h3>
              <p className="text-gray-600 leading-relaxed">
                Up to 75% faster time-to-hire means less lost productivity.
                While traditional processes take 2-4 months, you hire through HireDeveloper.ae
                often in 1-2 weeks.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Models</h3>
              <p className="text-gray-600 leading-relaxed">
                Do not need full-time talent? Hire freelancers on a project basis.
                You only pay for hours actually worked. No idle time.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Bad Hires</h3>
              <p className="text-gray-600 leading-relaxed">
                A bad hire costs on average 1.5x the annual salary. Through
                our rigorous vetting and risk-free trial period, this risk drops
                to a minimum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[40px] font-bold text-gray-900 mb-6">
              Calculate Your Individual Savings
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With our interactive Team Cost Calculator, you can see at a glance how much
              you save on your next hire. Enter your team size and roles, and you are done.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/tools/team-cost-calculator"
                className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-all"
              >
                Open Team Cost Calculator
              </a>
              <OpenModalButton className="px-8 py-4 text-lg font-semibold text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                Request Personal Consultation
              </OpenModalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Real savings example */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
            Example: 5-Person Development Team
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Hire (Dubai/Abu Dhabi)</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex justify-between">
                  <span>2x Senior Developers</span>
                  <span className="font-semibold">$190,000 USD</span>
                </li>
                <li className="flex justify-between">
                  <span>2x Mid-Level Developers</span>
                  <span className="font-semibold">$130,000 USD</span>
                </li>
                <li className="flex justify-between">
                  <span>1x DevOps Engineer</span>
                  <span className="font-semibold">$90,000 USD</span>
                </li>
                <li className="flex justify-between border-t border-gray-300 pt-4">
                  <span>Office costs (5 desks)</span>
                  <span className="font-semibold">$75,000 USD</span>
                </li>
                <li className="flex justify-between">
                  <span>Recruitment costs</span>
                  <span className="font-semibold">$60,000 USD</span>
                </li>
                <li className="flex justify-between border-t border-gray-900 pt-4 text-lg font-bold text-gray-900">
                  <span>Total cost</span>
                  <span>$545,000 USD</span>
                </li>
              </ul>
            </div>

            <div className="bg-[rgb(0,159,255)]/5 p-8 rounded-xl border border-[rgb(0,159,255)]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Remote via HireDeveloper.ae</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex justify-between">
                  <span>2x Senior Developers</span>
                  <span className="font-semibold">$90,000 USD</span>
                </li>
                <li className="flex justify-between">
                  <span>2x Mid-Level Developers</span>
                  <span className="font-semibold">$60,000 USD</span>
                </li>
                <li className="flex justify-between">
                  <span>1x DevOps Engineer</span>
                  <span className="font-semibold">$40,000 USD</span>
                </li>
                <li className="flex justify-between border-t border-gray-300 pt-4">
                  <span>Office costs</span>
                  <span className="font-semibold text-[rgb(23,162,69)]">$0 USD</span>
                </li>
                <li className="flex justify-between">
                  <span>Placement fee</span>
                  <span className="font-semibold">transparent</span>
                </li>
                <li className="flex justify-between border-t border-gray-900 pt-4 text-lg font-bold text-[rgb(23,162,69)]">
                  <span>Total cost</span>
                  <span>~$220,000 USD</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg text-center">
                <p className="text-2xl font-bold text-[rgb(23,162,69)]">Savings: ~$325,000 USD / year</p>
                <p className="text-sm text-gray-500">That is approximately 60% lower costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks title="Related Pages" links={relatedLinks} />

      <FinalCTA
        heading="Save Up to 60% on Staffing Costs"
        subheading="Start risk-free and calculate your individual savings."
        ctaText="Calculate Savings Now"
      />

      <Footer />
    </div>
  );
}
