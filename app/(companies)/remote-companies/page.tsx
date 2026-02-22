import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Remote Companies | Work for UAE-Based Firms | HireDeveloper.ae',
  description:
    'Discover remote-friendly companies in Dubai, Abu Dhabi, and across the UAE that hire through HireDeveloper.ae. Startups, SMEs, and enterprises across the Middle East.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Remote Companies - HireDeveloper.ae',
    description: 'Companies in the UAE that hire remote talent through HireDeveloper.ae.',
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
      'Fast-growing startups developing new products and scaling quickly. From pre-seed to Series C: work at the forefront of innovation in the UAE ecosystem.',
    examples: ['FinTech', 'HealthTech', 'EdTech', 'PropTech', 'FoodTech'],
    roles: ['Full-Stack Developer', 'Mobile Developer', 'Product Designer', 'Growth Marketer'],
  },
  {
    type: 'SMEs & Mid-Market',
    description:
      'Established companies driving their digital transformation. UAE SMEs offer stable projects, long-term perspectives, and challenging work across diverse industries.',
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
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[rgb(0,159,255)] font-semibold text-lg mb-4">For Talent</p>
            <h1 className="text-[48px] font-bold text-gray-900 mb-6">
              Remote Companies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Which companies hire through HireDeveloper.ae?
              From startups to enterprises, all based in the UAE and Middle East. Here is an overview.
            </p>
            <OpenModalButton className="px-8 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-all">
              Apply Now
            </OpenModalButton>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">500+</div>
              <p className="text-sm text-gray-600 mt-1">Companies trust us</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">7</div>
              <p className="text-sm text-gray-600 mt-1">Emirates covered</p>
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
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Which Companies Hire Through Us?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Companies across the UAE and Middle East rely on HireDeveloper.ae for their remote hiring needs.
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
        <div className="max-w-[1280px] mx-auto px-12 w-full">
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
        <div className="max-w-[1280px] mx-auto px-12 w-full">
          <h2 className="text-[40px] font-bold text-gray-900 text-center mb-4">
            Where Our Companies Are Based
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our companies are headquartered in the major cities and free zones of the UAE.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { city: 'Dubai', href: '/locations/uae/dubai/dubai' },
              { city: 'Abu Dhabi', href: '/locations/uae/abu-dhabi/abu-dhabi' },
              { city: 'Sharjah', href: '/locations/uae/sharjah/sharjah' },
              { city: 'DIFC', href: '/locations/uae/dubai/dubai' },
              { city: 'Dubai Silicon Oasis', href: '/locations/uae/dubai/dubai' },
              { city: 'Dubai Internet City', href: '/locations/uae/dubai/dubai-internet-city' },
              { city: 'Abu Dhabi Global Market', href: '/locations/uae/abu-dhabi/abu-dhabi' },
              { city: 'Ras Al Khaimah', href: '/locations/uae/ras-al-khaimah/ras-al-khaimah' },
              { city: 'Ajman', href: '/locations/uae/ajman/ajman' },
              { city: 'Fujairah', href: '/locations/uae/fujairah/fujairah' },
              { city: 'Riyadh', href: '/locations/saudi-arabia/riyadh-region/riyadh' },
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

      <RelatedLinks title="More Pages" links={relatedLinks} />

      <FinalCTA
        heading="Work for Leading UAE Companies"
        subheading="Apply now and gain access to exclusive remote positions."
        ctaText="Apply Now"
      />

      <Footer />
    </div>
  );
}
