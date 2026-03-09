import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import HiringProcessFlowchart from '../components/HiringProcessFlowchart';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Remote Companies | Work for Singapore-Based Firms | HireDeveloper.sg',
  description:
    'Discover remote-friendly companies in Singapore, and across Singapore that hire through HireDeveloper.sg. Startups, SMEs, and enterprises across the Asia Pacific.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Remote Companies - HireDeveloper.sg',
    description: 'Companies in Singapore that hire remote talent through HireDeveloper.sg.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CompanyType {
  type: string;
  description: string;
  examples: string[];
  roles: string[];
}

const companyTypes: CompanyType[] = [
  {
    type: 'Tech Startups',
    description:
      'Fast-growing startups developing new products and scaling quickly. From pre-seed to Series C: work at the forefront of innovation in Singapore ecosystem.',
    examples: ['FinTech', 'HealthTech', 'EdTech', 'PropTech', 'FoodTech'],
    roles: ['Full-Stack Developer', 'Mobile Developer', 'Product Designer', 'Growth Marketer'],
  },
  {
    type: 'SMEs & Mid-Market',
    description:
      'Established companies driving their digital transformation. Singapore SMEs offer stable projects, long-term perspectives, and challenging work across diverse industries.',
    examples: ['Industry 4.0', 'E-Commerce', 'Logistics', 'Manufacturing', 'Retail'],
    roles: ['Backend Developer', 'DevOps Engineer', 'UX Designer', 'Project Manager'],
  },
  {
    type: 'Software Companies',
    description:
      'SaaS firms and software houses strengthening their development teams with remote experts. Modern tech stacks, agile methods, and exciting product work.',
    examples: ['SaaS', 'Enterprise Software', 'Developer Tools', 'Cloud Services', 'Security'],
    roles: ['Senior Developer', 'Tech Lead', 'Product Manager', 'QA Engineer'],
  },
  {
    type: 'Agencies & Consultancies',
    description:
      'Digital agencies and consulting firms that need specialized remote talent for client projects. Varied projects and constantly new challenges.',
    examples: ['Web Agency', 'Design Agency', 'Marketing Agency', 'IT Consulting', 'Strategy Consulting'],
    roles: ['Frontend Developer', 'Content Marketer', 'Graphic Designer', 'SEO Expert'],
  },
  {
    type: 'Enterprises & Large Corporations',
    description:
      'International corporations hiring remote talent for specialized and large-scale projects. Enterprise environments, structured processes, and long-term engagements.',
    examples: ['Oil & Gas', 'Banking & Insurance', 'Real Estate', 'Telecommunications', 'Energy'],
    roles: ['Cloud Architect', 'AI Developer', 'Program Manager', 'Data Engineer'],
  },
];

export default function RemoteCompaniesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'For Talent', href: '/for-talent' },
    { label: 'Remote Companies', href: '/remote-companies' },
  ];

  const relatedLinks = [
    { label: 'For Talent - Overview', href: '/for-talent' },
    { label: 'Remote Jobs', href: '/remote-jobs' },
    { label: 'Talent Resources', href: '/talent-resources' },
    { label: 'Locations', href: '/locations' },
    { label: 'Salary Calculator', href: '/tools/salary-calculator' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'How It Works', href: '/how-it-works' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageJsonLd />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[rgb(0,159,255)] font-semibold text-lg mb-4">For Talent</p>
            <h1 className="text-[48px] font-bold text-gray-900 mb-6">
              Remote Companies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Which companies hire through HireDeveloper.sg?
              From startups to enterprises, all based in Singapore and Asia Pacific. Here is an overview.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Apply Now
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">500+</div>
              <p className="text-sm text-gray-600 mt-1">Companies trust us</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">7</div>
              <p className="text-sm text-gray-600 mt-1">districts covered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">15+</div>
              <p className="text-sm text-gray-600 mt-1">Industries covered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">96%</div>
              <p className="text-sm text-gray-600 mt-1">Repeat engagement rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Types */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Which Companies Hire Through Us?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Companies across Singapore and Asia Pacific rely on HireDeveloper.sg for their remote hiring needs.
          </p>

          <div className="space-y-8">
            {companyTypes.map((company) => (
              <div key={company.type} className="bg-gray-50 rounded-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{company.type}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{company.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Industries</p>
                    <div className="flex flex-wrap gap-2">
                      {company.examples.map((example) => (
                        <span key={example} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Commonly Sought Roles</p>
                    <div className="flex flex-wrap gap-2">
                      {company.roles.map((role) => (
                        <span key={role} className="px-3 py-1 bg-[rgb(0,159,255)]/10 text-[rgb(0,159,255)] text-sm rounded-full">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What companies offer */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            What These Companies Offer
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our partner companies offer attractive conditions for remote talent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Salaries</h3>
              <p className="text-gray-600 leading-relaxed">
                Our companies pay fair, market-rate salaries. Often significantly above
                the local average in your region.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Tech Stacks</h3>
              <p className="text-gray-600 leading-relaxed">
                React, TypeScript, Python, Kubernetes, AI: work with current
                technologies and frameworks.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agile Practices</h3>
              <p className="text-gray-600 leading-relaxed">
                Scrum, Kanban, Lean. Most companies work agile and emphasize
                autonomous, self-directed work.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Perspectives</h3>
              <p className="text-gray-600 leading-relaxed">
                Many engagements start as freelance and evolve into long-term
                full-time positions with career development.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remote-First Culture</h3>
              <p className="text-gray-600 leading-relaxed">
                Our companies have an established remote culture with clear processes,
                great tools, and asynchronous communication.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Data Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                All contracts are legally compliant. NDAs, IP protection, and data privacy are
                included by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Where Our Companies Are Based
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our companies are headquartered across Singapore&apos;s major business districts and tech hubs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { city: 'Singapore', href: '/locations/singapore' },
              { city: 'Marina Bay', href: '/locations/singapore/central-region/marina-bay' },
              { city: 'Jurong East', href: '/locations/singapore/west-region/jurong-east' },
              { city: 'CBD (Raffles Place)', href: '/locations/singapore/central-region/raffles-place' },
              { city: 'one-north', href: '/locations/singapore/central-region/one-north' },
              { city: 'Changi Business Park', href: '/locations/singapore/east-region/changi-business-park' },
              { city: 'Mapletree Business City', href: '/locations/singapore/central-region/tanjong-pagar' },
              { city: 'Punggol', href: '/locations/singapore/north-east-region/punggol' },
              { city: 'Tampines', href: '/locations/singapore/east-region/tampines' },
              { city: 'Woodlands', href: '/locations/singapore/north-region/woodlands' },
              { city: 'Buona Vista', href: '/locations/singapore/central-region/buona-vista' },
              { city: 'All Locations', href: '/locations' },
            ].map((loc) => (
              <a
                key={loc.city}
                href={loc.href}
                className="px-4 py-3 bg-gray-50 rounded-lg text-sm text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md transition-all border border-gray-200 text-center"
              >
                {loc.city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: 'What types of companies hire remote developers through HireDeveloper.sg?', a: 'We serve startups, SMEs, and enterprises across Singapore. From pre-seed startups needing their first engineer to established companies scaling their tech teams, our platform matches you with pre-vetted developers regardless of company size.' },
                { q: 'Can remote companies in Singapore hire developers from other countries?', a: 'Yes, Singapore companies can hire remote developers globally. For developers working outside Singapore, no Employment Pass is required. HireDeveloper.sg handles the matching — you handle the contract directly or use an EOR service for compliance.' },
                { q: 'How do remote-first companies in Singapore manage timezone differences?', a: 'Singapore (GMT+8) overlaps well with developers in APAC, India, and parts of Europe. Most remote teams adopt async-first communication with 2-4 hours of live overlap. Tools like Slack, Notion, and Loom make collaboration seamless across timezones.' },
                { q: 'What is the typical engagement model for remote developers?', a: 'We offer freelance (hourly/project-based), part-time (20hrs/week), and full-time remote positions. Most clients start with a freelance contract and transition to full-time after a successful trial period. There are no upfront fees or long-term commitments required.' },
                { q: 'How do you vet remote developers for Singapore companies?', a: 'Every developer passes a multi-stage process: technical assessment, code review, communication evaluation, and reference checks. Only the top 2% are accepted. We also verify timezone compatibility and English proficiency for Singapore-based teams.' },
              ].map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-base font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks title="More Pages" links={relatedLinks} />

      <HiringProcessFlowchart industry="your remote team" />

      <FinalCTA
        heading="Work for Leading Singapore Companies"
        subheading="Apply now and gain access to exclusive remote positions."
        ctaText="Apply Now"
      />

      <Footer />
    </div>
  );
}
