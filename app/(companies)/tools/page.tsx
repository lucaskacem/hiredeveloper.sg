import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import RelatedLinks from '../components/RelatedLinks';
import FinalCTA from '../components/FinalCTA';

export const metadata: Metadata = {
  title: 'Free Tools for Companies | HireDeveloper.ae',
  description: 'Free tools for companies: Salary Calculator, Team Cost Calculator, Technology Comparison, Interview Questions Generator, and more.',
  robots: { index: true, follow: true },
};

const tools = [
  {
    title: 'Salary Calculator',
    description: 'Calculate salaries and hourly rates for developers by technology, experience, and location across Dubai and Abu Dhabi.',
    href: '/tools/salary-calculator',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Team Cost Calculator',
    description: 'How much does your development team cost per month? Calculate it and see where you can save.',
    href: '/tools/team-cost-calculator',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Technology Comparison',
    description: 'Compare technologies side by side: popularity, salaries, use cases, and more.',
    href: '/tools/technology-comparison',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Interview Questions Generator',
    description: 'Technical interview questions at the push of a button. Simply choose a technology and level.',
    href: '/tools/interview-questions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Project Estimation',
    description: 'Estimate the time and cost of your software project based on type, complexity, and features.',
    href: '/tools/project-estimation',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Skill Assessment',
    description: 'Test your knowledge with a quiz on various technologies and receive a rating.',
    href: '/tools/skill-assessment',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function ToolsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Tools for Companies',
    description: 'Free tools for planning and calculating software development projects.',
    url: 'https://hiredeveloper.ae/tools',
    publisher: {
      '@type': 'Organization',
      name: 'HireDeveloper.ae',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-[48px] font-bold mb-6">
                Free Tools for Companies
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
                Calculate costs, compare technologies, prepare interview questions. All free, all interactive.
              </p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.05)] border border-white/10 hidden lg:block">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/hero.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="group block p-8 bg-white rounded-xl border border-gray-200 hover:border-[rgb(0,159,255)] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-[rgb(0,159,255)]/10 text-[rgb(0,159,255)] flex items-center justify-center mb-5 group-hover:bg-[rgb(0,159,255)] group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(0,159,255)] transition-colors">
                  {tool.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-[rgb(0,159,255)]">
                  Open Tool
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Build Your Team?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Plan first, then execute. Find the best remote developers at HireDeveloper.ae.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/hire-developers" className="px-6 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors">
              Hire Developers
            </a>
            <a href="/hire-designers" className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:border-[rgb(0,159,255)] hover:text-[rgb(0,159,255)] transition-colors">
              Hire Designers
            </a>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Hire Top Talent"
        links={[
          { label: 'Hire JavaScript Developers', href: '/hire-developers/javascript' },
          { label: 'Hire Python Developers', href: '/hire-developers/python' },
          { label: 'Hire React Developers', href: '/hire-developers/reactjs' },
          { label: 'Hire AI Developers', href: '/hire-developers/ai' },
          { label: 'Hire Full-Stack Developers', href: '/hire-developers/full-stack' },
          { label: 'All Developer Specializations', href: '/hire-developers' },
          { label: 'Hire Marketing Experts', href: '/hire-marketers' },
          { label: 'Hire Designers', href: '/hire-designers' },
        ]}
      />

      <RelatedLinks
        title="Developers by Location"
        links={[
          { label: 'Developers in Dubai', href: '/locations/uae/dubai/dubai' },
          { label: 'Developers in Abu Dhabi', href: '/locations/uae/abu-dhabi/abu-dhabi' },
          { label: 'Developers in Saudi Arabia', href: '/locations/saudi-arabia' },
          { label: 'All Locations', href: '/locations' },
        ]}
      />

      <RelatedLinks
        title="Hiring Guides"
        links={[
          { label: 'Finding Freelance Developers: 21+ Tips', href: '/employer-blog/how-to-find-developers' },
          { label: 'Remote Technical Interview Guide', href: '/employer-blog/how-to-conduct-a-remote-technical-interview' },
          { label: 'Building a Remote Engineering Team', href: '/employer-blog/distributed-software-engineering-team' },
          { label: 'Managing Remote Development Teams', href: '/employer-blog/how-to-manage-developers-remote-team' },
        ]}
      />

      <FinalCTA
        heading="Let Us Build Your Dream Team"
        subheading="Start risk-free - only pay when you are satisfied."
      />

      <Footer />
    </div>
  );
}
