'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js',
  'Python', 'Java', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin',
  'C#', '.NET', 'AWS', 'DevOps', 'Data Science', 'Machine Learning',
];

const experienceLevels = ['Junior (0-2 Years)', 'Mid-Level (2-5 Years)', 'Senior (5-8 Years)', 'Lead (8+ Years)'];

const regions = ['Singapore', 'Marina Bay', 'Jurong East', 'Changi Business Park', 'Tampines', 'Remote (Singapore)', 'Remote (APAC)', 'Remote (Global)'];

// Hourly rates in USD based on tech category and experience (Singapore/Southeast Asian market)
const salaryData: Record<string, number[]> = {
  'JavaScript':       [35, 55, 80, 100],
  'TypeScript':       [38, 58, 85, 105],
  'React':            [40, 60, 90, 110],
  'Angular':          [38, 58, 85, 105],
  'Vue.js':           [36, 55, 82, 100],
  'Node.js':          [38, 58, 85, 108],
  'Python':           [40, 62, 90, 115],
  'Java':             [38, 60, 88, 110],
  'PHP':              [30, 48, 70, 90],
  'Ruby':             [38, 58, 85, 105],
  'Go':               [42, 65, 95, 120],
  'Rust':             [45, 68, 98, 125],
  'Swift':            [40, 62, 90, 115],
  'Kotlin':           [40, 62, 90, 112],
  'C#':               [36, 55, 82, 105],
  '.NET':             [36, 55, 82, 105],
  'AWS':              [42, 65, 95, 120],
  'DevOps':           [42, 65, 95, 120],
  'Data Science':     [45, 68, 98, 125],
  'Machine Learning': [48, 72, 105, 135],
};

// Regional multipliers
const regionMultipliers: Record<string, number> = {
  'Singapore': 1.15,
  'Marina Bay': 1.12,
  'Jurong East': 0.95,
  'Changi Business Park': 1.0,
  'Tampines': 0.95,
  'Remote (Singapore)': 1.0,
  'Remote (APAC)': 1.0,
  'Remote (Global)': 0.9,
};

export default function SalaryCalculatorPage() {
  const [technology, setTechnology] = useState('');
  const [experience, setExperience] = useState('');
  const [region, setRegion] = useState('');
  const [calculated, setCalculated] = useState(false);

  const experienceIndex = experienceLevels.indexOf(experience);
  const baseRate = technology && experienceIndex >= 0 ? salaryData[technology]?.[experienceIndex] || 50 : 0;
  const multiplier = region ? regionMultipliers[region] || 1 : 1;
  const hourlyRate = Math.round(baseRate * multiplier);
  const monthlyMin = Math.round(hourlyRate * 160 * 0.9);
  const monthlyMax = Math.round(hourlyRate * 160 * 1.1);
  const yearlyMin = monthlyMin * 12;
  const yearlyMax = monthlyMax * 12;

  // SGD conversion (1 USD ~ 1.34 SGD)
  const sgdRate = 1.34;
  const monthlyMinSGD = Math.round(monthlyMin * sgdRate);
  const monthlyMaxSGD = Math.round(monthlyMax * sgdRate);
  const yearlyMinSGD = Math.round(yearlyMin * sgdRate);
  const yearlyMaxSGD = Math.round(yearlyMax * sgdRate);

  // Local hiring cost comparison (office, visa, benefits overhead)
  const localHiringOverhead = 1.45; // ~45% overhead for office, visa, insurance, gratuity
  const localMonthlyMinSGD = Math.round(monthlyMinSGD * localHiringOverhead);
  const localMonthlyMaxSGD = Math.round(monthlyMaxSGD * localHiringOverhead);
  const savingsPercent = Math.round((1 - 1 / localHiringOverhead) * 100);

  const handleCalculate = () => {
    if (technology && experience && region) {
      setCalculated(true);
    }
  };

  const maxRate = 135 * 1.15; // Max possible for bar scaling

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Developer Salary Calculator',
    description: 'Calculate salaries and hourly rates for developers by technology, experience, and location in Singapore and Southeast Asia region.',
    url: 'https://hiredeveloper.sg/tools/salary-calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h1 className="text-[42px] font-bold mb-4">
            Developer Salary Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            What does a developer cost per hour, per month, per year? Select a technology, experience level, and region.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Salary</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Technology */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
                <select
                  value={technology}
                  onChange={(e) => { setTechnology(e.target.value); setCalculated(false); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Please select...</option>
                  {technologies.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <select
                  value={experience}
                  onChange={(e) => { setExperience(e.target.value); setCalculated(false); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Please select...</option>
                  {experienceLevels.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City / Region</label>
                <select
                  value={region}
                  onChange={(e) => { setRegion(e.target.value); setCalculated(false); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Please select...</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              disabled={!technology || !experience || !region}
              className="w-full py-3 px-6 text-white font-semibold bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-colors text-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Calculate Salary
            </button>

            {/* Results */}
            {calculated && (
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Result: {technology} {experience} in {region}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="bg-[rgb(0,159,255)]/5 rounded-xl p-6 text-center border border-[rgb(0,159,255)]/20">
                    <p className="text-sm text-gray-600 mb-1">Hourly Rate</p>
                    <p className="text-3xl font-bold text-[rgb(0,159,255)]">${hourlyRate}/h</p>
                    <p className="text-xs text-gray-400 mt-1">{Math.round(hourlyRate * sgdRate)} SGD/h</p>
                  </div>
                  <div className="bg-[rgb(23,162,69)]/5 rounded-xl p-6 text-center border border-[rgb(23,162,69)]/20">
                    <p className="text-sm text-gray-600 mb-1">Monthly Salary (USD)</p>
                    <p className="text-3xl font-bold text-[rgb(23,162,69)]">${monthlyMin.toLocaleString('en-US')}&ndash;${monthlyMax.toLocaleString('en-US')}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Monthly Salary (SGD)</p>
                    <p className="text-3xl font-bold text-gray-900">{monthlyMinSGD.toLocaleString('en-US')}&ndash;{monthlyMaxSGD.toLocaleString('en-US')}</p>
                    <p className="text-xs text-gray-400 mt-1">{yearlyMinSGD.toLocaleString('en-US')}&ndash;{yearlyMaxSGD.toLocaleString('en-US')} SGD/year</p>
                  </div>
                </div>

                {/* Singapore Cost Savings Comparison */}
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-8">
                  <h4 className="text-sm font-semibold text-amber-900 mb-2">Save {savingsPercent}% vs Local Hiring in Singapore</h4>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-gray-600">Remote hire: </span>
                      <span className="font-semibold text-gray-900">{monthlyMinSGD.toLocaleString('en-US')}&ndash;{monthlyMaxSGD.toLocaleString('en-US')} SGD/mo</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Local hire (incl. visa, office, benefits): </span>
                      <span className="font-semibold text-gray-900 line-through opacity-60">{localMonthlyMinSGD.toLocaleString('en-US')}&ndash;{localMonthlyMaxSGD.toLocaleString('en-US')} SGD/mo</span>
                    </div>
                  </div>
                  <p className="text-xs text-amber-700 mt-2">Local costs include office space, work pass (Employment Pass/S Pass), CPF contributions, health insurance, and other benefits required under Singapore employment law.</p>
                </div>

                {/* Comparison bars */}
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Comparison by Experience Level</h4>
                <div className="space-y-4">
                  {experienceLevels.map((level, i) => {
                    const rate = Math.round((salaryData[technology]?.[i] || 50) * multiplier);
                    const width = Math.round((rate / maxRate) * 100);
                    const isActive = i === experienceIndex;
                    return (
                      <div key={level}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className={isActive ? 'font-bold text-gray-900' : 'text-gray-600'}>{level}</span>
                          <span className={isActive ? 'font-bold text-gray-900' : 'text-gray-600'}>${rate}/h</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-4">
                          <div
                            className={`h-4 rounded-full transition-all ${isActive ? 'bg-[rgb(0,159,255)]' : 'bg-gray-300'}`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="mt-10 p-6 bg-[rgb(23,162,69)]/5 rounded-xl border border-[rgb(23,162,69)]/20 text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    For more accurate estimates, contact us
                  </p>
                  <p className="text-gray-600 mb-4">
                    We help you find strong {technology} developers at competitive market rates in Singapore.
                  </p>
                  <a
                    href="/hire-developers"
                    className="inline-block px-6 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                  >
                    Hire Developers
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Related Tools"
        links={[
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
          { label: 'Technology Comparison', href: '/tools/technology-comparison' },
          { label: 'Project Estimation', href: '/tools/project-estimation' },
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'Skill Assessment', href: '/tools/skill-assessment' },
          { label: 'Hire React Developers', href: '/hire-developers/reactjs' },
          { label: 'Hire Python Developers', href: '/hire-developers/python' },
          { label: 'Hire DevOps Engineers', href: '/hire-developers/devops' },
        ]}
      />

      <FinalCTA
        heading="Find the Right Developer at the Right Price"
        subheading="Start risk-free - only pay when you are satisfied."
      />

      <Footer />
    </div>
  );
}
