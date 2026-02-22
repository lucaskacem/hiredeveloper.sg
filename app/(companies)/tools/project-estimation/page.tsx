'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';

const projectTypes = [
  { value: 'web-app', label: 'Web Application', baseWeeks: 8, baseCost: 15000 },
  { value: 'mobile-app', label: 'Mobile App (iOS/Android)', baseWeeks: 12, baseCost: 25000 },
  { value: 'e-commerce', label: 'E-Commerce Platform', baseWeeks: 10, baseCost: 20000 },
  { value: 'api', label: 'API / Backend Service', baseWeeks: 6, baseCost: 12000 },
  { value: 'saas', label: 'SaaS Platform', baseWeeks: 16, baseCost: 35000 },
  { value: 'dashboard', label: 'Dashboard / Admin Panel', baseWeeks: 6, baseCost: 10000 },
  { value: 'landing', label: 'Landing Page / Marketing Site', baseWeeks: 3, baseCost: 5000 },
  { value: 'mvp', label: 'MVP / Prototype', baseWeeks: 5, baseCost: 8000 },
];

const complexities = [
  { value: 'simple', label: 'Simple', multiplier: 1.0 },
  { value: 'medium', label: 'Medium', multiplier: 1.8 },
  { value: 'complex', label: 'Complex', multiplier: 3.0 },
];

const featureOptions = [
  { value: 'auth', label: 'Authentication & Authorization', weeks: 1.5, cost: 3000 },
  { value: 'payments', label: 'Payment Integration', weeks: 2, cost: 4000 },
  { value: 'chat', label: 'Real-Time Chat / Messaging', weeks: 3, cost: 6000 },
  { value: 'analytics', label: 'Analytics & Reporting', weeks: 2, cost: 4000 },
  { value: 'search', label: 'Full-Text Search', weeks: 1.5, cost: 3000 },
  { value: 'notifications', label: 'Push Notifications', weeks: 1, cost: 2000 },
  { value: 'file-upload', label: 'File Upload & Management', weeks: 1.5, cost: 3000 },
  { value: 'multi-language', label: 'Multi-Language Support', weeks: 1.5, cost: 2500 },
  { value: 'cms', label: 'Content Management System', weeks: 2, cost: 4000 },
  { value: 'third-party', label: 'Third-Party Integrations', weeks: 2, cost: 4000 },
  { value: 'admin', label: 'Admin Dashboard', weeks: 2.5, cost: 5000 },
  { value: 'email', label: 'Email Integration', weeks: 1, cost: 2000 },
  { value: 'maps', label: 'Maps & Geolocation', weeks: 1.5, cost: 3000 },
  { value: 'social', label: 'Social Login / OAuth', weeks: 1, cost: 2000 },
];

const aedRate = 3.67;

export default function ProjectEstimationPage() {
  const [projectType, setProjectType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [calculated, setCalculated] = useState(false);

  const toggleFeature = (value: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
    setCalculated(false);
  };

  const project = projectTypes.find((p) => p.value === projectType);
  const comp = complexities.find((c) => c.value === complexity);
  const features = featureOptions.filter((f) => selectedFeatures.includes(f.value));

  const baseWeeks = project ? project.baseWeeks * (comp?.multiplier || 1) : 0;
  const featureWeeks = features.reduce((s, f) => s + f.weeks, 0);
  const totalWeeks = Math.round(baseWeeks + featureWeeks);

  const baseCost = project ? project.baseCost * (comp?.multiplier || 1) : 0;
  const featureCost = features.reduce((s, f) => s + f.cost, 0);
  const totalCostMin = Math.round((baseCost + featureCost) * 0.85);
  const totalCostMax = Math.round((baseCost + featureCost) * 1.2);

  const hireDeveloperMin = Math.round(totalCostMin * 0.42);
  const hireDeveloperMax = Math.round(totalCostMax * 0.42);

  const totalCostMinAED = Math.round(totalCostMin * aedRate);
  const totalCostMaxAED = Math.round(totalCostMax * aedRate);
  const hireDeveloperMinAED = Math.round(hireDeveloperMin * aedRate);
  const hireDeveloperMaxAED = Math.round(hireDeveloperMax * aedRate);

  const handleCalculate = () => {
    if (projectType && complexity) {
      setCalculated(true);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Project Estimation',
    description: 'Estimate the time and cost of your software project based on type, complexity, and features.',
    url: 'https://hiredeveloper.ae/tools/project-estimation',
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
          { label: 'Project Estimation', href: '/tools/project-estimation' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">Project Estimation</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            How long will your project take and what will it cost? Select the project type, complexity, and features.
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">

            {/* Project Type */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Select Project Type</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => { setProjectType(pt.value); setCalculated(false); }}
                    className={`p-4 rounded-lg border-2 text-sm font-medium text-left transition-all ${
                      projectType === pt.value
                        ? 'border-[rgb(0,159,255)] bg-[rgb(0,159,255)]/5 text-[rgb(0,159,255)]'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Complexity</h2>
              <div className="grid grid-cols-3 gap-4">
                {complexities.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => { setComplexity(c.value); setCalculated(false); }}
                    className={`p-5 rounded-lg border-2 text-center transition-all ${
                      complexity === c.value
                        ? 'border-[rgb(0,159,255)] bg-[rgb(0,159,255)]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className={`font-bold text-lg ${complexity === c.value ? 'text-[rgb(0,159,255)]' : 'text-gray-900'}`}>
                      {c.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {c.value === 'simple' && 'Standard functionality, clear requirements'}
                      {c.value === 'medium' && 'Custom logic, multiple integrations'}
                      {c.value === 'complex' && 'Highly scalable, real-time, complex architecture'}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Select Features (optional)</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {featureOptions.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => toggleFeature(f.value)}
                    className={`p-3 rounded-lg border-2 text-sm text-left transition-all ${
                      selectedFeatures.includes(f.value)
                        ? 'border-[rgb(23,162,69)] bg-[rgb(23,162,69)]/5 text-[rgb(23,162,69)]'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {selectedFeatures.includes(f.value) ? (
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="w-4 h-4 flex-shrink-0 border border-gray-300 rounded" />
                      )}
                      {f.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCalculate}
              disabled={!projectType || !complexity}
              className="w-full py-3 px-6 text-white font-semibold bg-[rgb(0,159,255)] rounded-lg hover:bg-[rgb(0,140,230)] transition-colors text-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Estimate Project
            </button>

            {/* Results */}
            {calculated && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Project Estimate</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[rgb(0,159,255)]/5 rounded-xl p-6 text-center border border-[rgb(0,159,255)]/20">
                    <p className="text-sm text-gray-600 mb-1">Estimated Duration</p>
                    <p className="text-3xl font-bold text-[rgb(0,159,255)]">{totalWeeks} Weeks</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">UAE Market Price (USD)</p>
                    <p className="text-2xl font-bold text-gray-400 line-through">
                      ${totalCostMin.toLocaleString('en-US')}&ndash;${totalCostMax.toLocaleString('en-US')}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {totalCostMinAED.toLocaleString('en-US')}&ndash;{totalCostMaxAED.toLocaleString('en-US')} AED
                    </p>
                  </div>
                  <div className="bg-[rgb(23,162,69)]/5 rounded-xl p-6 text-center border border-[rgb(23,162,69)]/20">
                    <p className="text-sm text-gray-600 mb-1">With HireDeveloper.ae</p>
                    <p className="text-3xl font-bold text-[rgb(23,162,69)]">
                      ${hireDeveloperMin.toLocaleString('en-US')}&ndash;${hireDeveloperMax.toLocaleString('en-US')}
                    </p>
                    <p className="text-xs text-[rgb(23,162,69)] mt-1">
                      {hireDeveloperMinAED.toLocaleString('en-US')}&ndash;{hireDeveloperMaxAED.toLocaleString('en-US')} AED
                    </p>
                  </div>
                </div>

                {/* Breakdown */}
                {features.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Feature Breakdown</h4>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 text-sm font-medium text-gray-500">Feature</th>
                          <th className="text-right py-2 text-sm font-medium text-gray-500">Duration</th>
                          <th className="text-right py-2 text-sm font-medium text-gray-500">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-sm text-gray-900">{project?.label} ({comp?.label})</td>
                          <td className="py-2 text-sm text-gray-600 text-right">{Math.round(baseWeeks)} wk</td>
                          <td className="py-2 text-sm text-gray-600 text-right">${Math.round(baseCost).toLocaleString('en-US')}</td>
                        </tr>
                        {features.map((f) => (
                          <tr key={f.value} className="border-b border-gray-100">
                            <td className="py-2 text-sm text-gray-900">{f.label}</td>
                            <td className="py-2 text-sm text-gray-600 text-right">{f.weeks} wk</td>
                            <td className="py-2 text-sm text-gray-600 text-right">${f.cost.toLocaleString('en-US')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="p-6 bg-[rgb(23,162,69)]/5 rounded-xl border border-[rgb(23,162,69)]/20 text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Save Up to 58% on Implementation
                  </p>
                  <p className="text-gray-600 mb-4">
                    Have your project built by our vetted remote developers based in the UAE and beyond.
                  </p>
                  <a
                    href="/hire-developers"
                    className="inline-block px-8 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                  >
                    Discuss Your Project
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
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Technology Comparison', href: '/tools/technology-comparison' },
          { label: 'Hire Software Developers', href: '/hire-developers/software-development' },
          { label: 'Hire Full-Stack Developers', href: '/hire-developers/full-stack' },
          { label: 'Hire Web Developers', href: '/hire-developers/web-development' },
          { label: 'Hire Mobile App Developers', href: '/hire-developers/mobile-app-development' },
          { label: 'Hire DevOps Engineers', href: '/hire-developers/devops' },
        ]}
      />

      <FinalCTA
        heading="Let Us Make Your Project a Reality"
        subheading="Vetted developers, fast matching, risk-free start."
      />

      <Footer />
    </div>
  );
}
