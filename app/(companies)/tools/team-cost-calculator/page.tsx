'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';

type Role = {
  id: number;
  type: string;
  experience: string;
};

const roleTypes = [
  'Frontend Developer',
  'Backend Developer',
  'Full-Stack Developer',
  'DevOps Engineer',
  'UI/UX Designer',
  'Project Manager',
  'QA Engineer',
  'Data Engineer',
  'Mobile Developer',
];

const experienceOptions = ['Junior', 'Mid-Level', 'Senior', 'Lead'];

// Monthly cost in USD (UAE/Gulf market rate)
const costData: Record<string, Record<string, number>> = {
  'Frontend Developer':    { Junior: 4800, 'Mid-Level': 7200, Senior: 10400, Lead: 13600 },
  'Backend Developer':     { Junior: 5000, 'Mid-Level': 7500, Senior: 11000, Lead: 14000 },
  'Full-Stack Developer':  { Junior: 5200, 'Mid-Level': 7800, Senior: 11500, Lead: 14500 },
  'DevOps Engineer':       { Junior: 5400, 'Mid-Level': 8000, Senior: 12000, Lead: 15000 },
  'UI/UX Designer':        { Junior: 4200, 'Mid-Level': 6500, Senior: 9500, Lead: 12000 },
  'Project Manager':       { Junior: 4500, 'Mid-Level': 7000, Senior: 10000, Lead: 13000 },
  'QA Engineer':           { Junior: 4000, 'Mid-Level': 6200, Senior: 9000, Lead: 11500 },
  'Data Engineer':         { Junior: 5200, 'Mid-Level': 8000, Senior: 12000, Lead: 15500 },
  'Mobile Developer':      { Junior: 5000, 'Mid-Level': 7500, Senior: 11000, Lead: 14000 },
};

const aedRate = 3.67;

let nextId = 1;

export default function TeamCostCalculatorPage() {
  const [roles, setRoles] = useState<Role[]>([{ id: nextId++, type: 'Full-Stack Developer', experience: 'Mid-Level' }]);

  const addRole = () => {
    setRoles([...roles, { id: nextId++, type: 'Frontend Developer', experience: 'Mid-Level' }]);
  };

  const removeRole = (id: number) => {
    if (roles.length > 1) {
      setRoles(roles.filter((r) => r.id !== id));
    }
  };

  const updateRole = (id: number, field: 'type' | 'experience', value: string) => {
    setRoles(roles.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const getRoleCost = (role: Role) => costData[role.type]?.[role.experience] || 0;
  const totalCost = roles.reduce((sum, r) => sum + getRoleCost(r), 0);
  const totalCostAED = Math.round(totalCost * aedRate);
  const savingsRate = 0.58;
  const hireDeveloperCost = Math.round(totalCost * (1 - savingsRate));
  const hireDeveloperCostAED = Math.round(hireDeveloperCost * aedRate);
  const savings = totalCost - hireDeveloperCost;
  const savingsAED = Math.round(savings * aedRate);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Team Cost Calculator',
    description: 'Calculate the monthly cost of your development team in USD and AED.',
    url: 'https://hiredeveloper.ae/tools/team-cost-calculator',
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
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">Team Cost Calculator</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Build your ideal team and see the monthly costs. Plus: how much you save with HireDeveloper.ae.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Build Your Team</h2>
              <button
                onClick={addRole}
                className="px-4 py-2 bg-[rgb(0,159,255)] text-white font-medium rounded-lg hover:bg-[rgb(0,140,230)] transition-colors text-sm"
              >
                + Add Role
              </button>
            </div>

            {/* Roles */}
            <div className="space-y-4 mb-8">
              {roles.map((role, index) => (
                <div key={role.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-sm font-bold text-gray-400 w-6">{index + 1}.</span>
                  <select
                    value={role.type}
                    onChange={(e) => updateRole(role.id, 'type', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900 text-sm"
                  >
                    {roleTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <select
                    value={role.experience}
                    onChange={(e) => updateRole(role.id, 'experience', e.target.value)}
                    className="w-36 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900 text-sm"
                  >
                    {experienceOptions.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                  <span className="w-28 text-right font-semibold text-gray-900 text-sm">
                    ${getRoleCost(role).toLocaleString('en-US')}/mo
                  </span>
                  <button
                    onClick={() => removeRole(role.id)}
                    disabled={roles.length <= 1}
                    className="text-gray-400 hover:text-red-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Remove role"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Cost breakdown table */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Overview</h3>

              <table className="w-full mb-8">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Role</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Experience</th>
                    <th className="text-right py-3 text-sm font-medium text-gray-500">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role) => (
                    <tr key={role.id} className="border-b border-gray-100">
                      <td className="py-3 text-sm text-gray-900">{role.type}</td>
                      <td className="py-3 text-sm text-gray-600">{role.experience}</td>
                      <td className="py-3 text-sm text-gray-900 text-right font-medium">
                        ${getRoleCost(role).toLocaleString('en-US')}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-300">
                    <td colSpan={2} className="py-4 font-bold text-gray-900">Total (UAE Market Rate)</td>
                    <td className="py-4 font-bold text-gray-900 text-right text-lg">
                      ${totalCost.toLocaleString('en-US')}/mo
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="pb-4 text-sm text-gray-500">Equivalent in AED</td>
                    <td className="pb-4 text-sm text-gray-500 text-right">
                      {totalCostAED.toLocaleString('en-US')} AED/mo
                    </td>
                  </tr>
                </tfoot>
              </table>

              {/* Savings comparison */}
              <div className="bg-[rgb(23,162,69)]/5 rounded-xl p-8 border border-[rgb(23,162,69)]/20">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Save Up to 58% with HireDeveloper.ae
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">UAE Market Rate</p>
                    <p className="text-2xl font-bold text-gray-400 line-through">${totalCost.toLocaleString('en-US')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">With HireDeveloper.ae</p>
                    <p className="text-2xl font-bold text-[rgb(23,162,69)]">${hireDeveloperCost.toLocaleString('en-US')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Your Savings</p>
                    <p className="text-2xl font-bold text-[rgb(0,159,255)]">${savings.toLocaleString('en-US')}/mo</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  That&apos;s {savingsAED.toLocaleString('en-US')} AED saved every month
                </p>
                <div className="mt-6 text-center">
                  <a
                    href="/hire-developers"
                    className="inline-block px-8 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                  >
                    Build Your Team Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Related Tools"
        links={[
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Project Estimation', href: '/tools/project-estimation' },
          { label: 'Technology Comparison', href: '/tools/technology-comparison' },
          { label: 'Hire Frontend Developers', href: '/hire-developers/front-end' },
          { label: 'Hire Backend Developers', href: '/hire-developers/back-end' },
          { label: 'Hire Full-Stack Developers', href: '/hire-developers/full-stack' },
          { label: 'Hire DevOps Engineers', href: '/hire-developers/devops' },
          { label: 'All Developers', href: '/hire-developers' },
        ]}
      />

      <FinalCTA
        heading="Build Your Dream Team - for Less"
        subheading="Start risk-free - only pay when you are satisfied."
      />

      <Footer />
    </div>
  );
}
