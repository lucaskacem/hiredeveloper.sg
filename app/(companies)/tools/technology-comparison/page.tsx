'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';

type TechData = {
  name: string;
  popularity: number; // 1-10
  salaryMin: number;
  salaryMax: number;
  useCases: string[];
  learningCurve: string;
  jobMarket: string;
  category: string;
  hireUrl: string;
};

const techDatabase: TechData[] = [
  { name: 'JavaScript', popularity: 10, salaryMin: 5600, salaryMax: 16000, useCases: ['Web Apps', 'Server-Side', 'Mobile Apps'], learningCurve: 'Easy', jobMarket: 'Very High', category: 'Language', hireUrl: '/hire-developers/javascript' },
  { name: 'TypeScript', popularity: 9, salaryMin: 6100, salaryMax: 16800, useCases: ['Enterprise Apps', 'Web Apps', 'APIs'], learningCurve: 'Medium', jobMarket: 'Very High', category: 'Language', hireUrl: '/hire-developers/typescript' },
  { name: 'Python', popularity: 10, salaryMin: 6400, salaryMax: 18400, useCases: ['AI/ML', 'Data Science', 'Web Apps', 'Automation'], learningCurve: 'Easy', jobMarket: 'Very High', category: 'Language', hireUrl: '/hire-developers/python' },
  { name: 'Java', popularity: 8, salaryMin: 6100, salaryMax: 17600, useCases: ['Enterprise Apps', 'Android', 'Microservices'], learningCurve: 'Medium', jobMarket: 'High', category: 'Language', hireUrl: '/hire-developers/java' },
  { name: 'PHP', popularity: 6, salaryMin: 4800, salaryMax: 14400, useCases: ['Web Apps', 'CMS', 'E-Commerce'], learningCurve: 'Easy', jobMarket: 'Medium', category: 'Language', hireUrl: '/hire-developers/php' },
  { name: 'Ruby', popularity: 5, salaryMin: 6100, salaryMax: 16800, useCases: ['Web Apps', 'Startups', 'APIs'], learningCurve: 'Easy', jobMarket: 'Medium', category: 'Language', hireUrl: '/hire-developers/ruby' },
  { name: 'Go', popularity: 7, salaryMin: 6700, salaryMax: 19200, useCases: ['Microservices', 'Cloud', 'DevOps Tools'], learningCurve: 'Medium', jobMarket: 'High', category: 'Language', hireUrl: '/hire-developers/golang' },
  { name: 'Rust', popularity: 6, salaryMin: 7200, salaryMax: 20000, useCases: ['Systems Programming', 'WebAssembly', 'Embedded'], learningCurve: 'Hard', jobMarket: 'Growing', category: 'Language', hireUrl: '/hire-developers/rust' },
  { name: 'Swift', popularity: 6, salaryMin: 6400, salaryMax: 18400, useCases: ['iOS Apps', 'macOS Apps', 'Server-Side'], learningCurve: 'Medium', jobMarket: 'High', category: 'Language', hireUrl: '/hire-developers/ios' },
  { name: 'Kotlin', popularity: 6, salaryMin: 6400, salaryMax: 17900, useCases: ['Android Apps', 'Server-Side', 'Multiplatform'], learningCurve: 'Medium', jobMarket: 'High', category: 'Language', hireUrl: '/hire-developers/android' },
  { name: 'React', popularity: 10, salaryMin: 6400, salaryMax: 17600, useCases: ['Single-Page Apps', 'Dashboards', 'Mobile (React Native)'], learningCurve: 'Medium', jobMarket: 'Very High', category: 'Framework', hireUrl: '/hire-developers/reactjs' },
  { name: 'Angular', popularity: 7, salaryMin: 6100, salaryMax: 16800, useCases: ['Enterprise Apps', 'Single-Page Apps', 'Progressive Web Apps'], learningCurve: 'Hard', jobMarket: 'High', category: 'Framework', hireUrl: '/hire-developers/angular' },
  { name: 'Vue.js', popularity: 7, salaryMin: 5800, salaryMax: 16000, useCases: ['Web Apps', 'Single-Page Apps', 'Dashboards'], learningCurve: 'Easy', jobMarket: 'High', category: 'Framework', hireUrl: '/hire-developers/vuejs' },
  { name: 'Node.js', popularity: 9, salaryMin: 6100, salaryMax: 17300, useCases: ['APIs', 'Real-Time Apps', 'Microservices'], learningCurve: 'Medium', jobMarket: 'Very High', category: 'Runtime', hireUrl: '/hire-developers/nodejs' },
  { name: 'Django', popularity: 6, salaryMin: 6400, salaryMax: 17600, useCases: ['Web Apps', 'APIs', 'Data-Driven Apps'], learningCurve: 'Medium', jobMarket: 'High', category: 'Framework', hireUrl: '/hire-developers/python' },
  { name: 'AWS', popularity: 9, salaryMin: 6700, salaryMax: 19200, useCases: ['Cloud Infrastructure', 'Serverless', 'DevOps'], learningCurve: 'Hard', jobMarket: 'Very High', category: 'Cloud', hireUrl: '/hire-developers/aws' },
  { name: 'Docker', popularity: 8, salaryMin: 6700, salaryMax: 19200, useCases: ['Containerization', 'CI/CD', 'Microservices'], learningCurve: 'Medium', jobMarket: 'Very High', category: 'DevOps', hireUrl: '/hire-developers/devops' },
  { name: 'Kubernetes', popularity: 7, salaryMin: 7200, salaryMax: 20000, useCases: ['Container Orchestration', 'Cloud-Native', 'Scaling'], learningCurve: 'Hard', jobMarket: 'Very High', category: 'DevOps', hireUrl: '/hire-developers/devops' },
  { name: 'PostgreSQL', popularity: 8, salaryMin: 5800, salaryMax: 17600, useCases: ['Relational Data', 'Analytics', 'GIS'], learningCurve: 'Medium', jobMarket: 'High', category: 'Database', hireUrl: '/hire-developers/sql' },
  { name: 'MongoDB', popularity: 7, salaryMin: 5800, salaryMax: 17600, useCases: ['NoSQL', 'Real-Time Analytics', 'Content Management'], learningCurve: 'Easy', jobMarket: 'High', category: 'Database', hireUrl: '/hire-developers/mongodb' },
];

export default function TechnologyComparisonPage() {
  const [tech1Name, setTech1Name] = useState('');
  const [tech2Name, setTech2Name] = useState('');

  const tech1 = techDatabase.find((t) => t.name === tech1Name);
  const tech2 = techDatabase.find((t) => t.name === tech2Name);
  const showComparison = tech1 && tech2 && tech1.name !== tech2.name;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Technology Comparison',
    description: 'Compare technologies side by side: popularity, salaries, use cases, and more.',
    url: 'https://hiredeveloper.ae/tools/technology-comparison',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  const renderBar = (value: number, max: number, color: string) => {
    const width = Math.round((value / max) * 100);
    return (
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div className={`h-3 rounded-full ${color}`} style={{ width: `${width}%` }} />
      </div>
    );
  };

  const learningCurveScore = (lc: string) => {
    if (lc === 'Easy') return 3;
    if (lc === 'Medium') return 6;
    return 9;
  };

  const jobMarketScore = (jm: string) => {
    if (jm === 'Growing') return 5;
    if (jm === 'Medium') return 6;
    if (jm === 'High') return 8;
    return 10;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Technology Comparison', href: '/tools/technology-comparison' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">Technology Comparison</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Two technologies, one comparison. Popularity, salaries, learning curve, and job market at a glance.
          </p>
        </div>
      </section>

      {/* Selector */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Technologies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technology 1</label>
                <select
                  value={tech1Name}
                  onChange={(e) => setTech1Name(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Please select...</option>
                  {techDatabase.map((t) => (
                    <option key={t.name} value={t.name} disabled={t.name === tech2Name}>{t.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technology 2</label>
                <select
                  value={tech2Name}
                  onChange={(e) => setTech2Name(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Please select...</option>
                  {techDatabase.map((t) => (
                    <option key={t.name} value={t.name} disabled={t.name === tech1Name}>{t.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {tech1Name && tech2Name && tech1Name === tech2Name && (
              <p className="text-red-500 text-sm mb-4">Please select two different technologies.</p>
            )}

            {/* Comparison */}
            {showComparison && (
              <div className="mt-8">
                {/* Header */}
                <div className="grid grid-cols-3 gap-4 mb-8 pb-4 border-b border-gray-200">
                  <div className="text-sm font-medium text-gray-500">Criterion</div>
                  <div className="text-center">
                    <span className="inline-block px-4 py-1 bg-[rgb(0,159,255)]/10 text-[rgb(0,159,255)] font-bold rounded-full text-sm">{tech1.name}</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-4 py-1 bg-[rgb(23,162,69)]/10 text-[rgb(23,162,69)] font-bold rounded-full text-sm">{tech2.name}</span>
                  </div>
                </div>

                {/* Category */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-700">Category</div>
                  <div className="text-center text-sm text-gray-900">{tech1.category}</div>
                  <div className="text-center text-sm text-gray-900">{tech2.category}</div>
                </div>

                {/* Popularity */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 items-center">
                  <div className="text-sm font-medium text-gray-700">Popularity</div>
                  <div className="px-4">
                    <div className="text-center text-sm font-semibold text-gray-900 mb-1">{tech1.popularity}/10</div>
                    {renderBar(tech1.popularity, 10, 'bg-[rgb(0,159,255)]')}
                  </div>
                  <div className="px-4">
                    <div className="text-center text-sm font-semibold text-gray-900 mb-1">{tech2.popularity}/10</div>
                    {renderBar(tech2.popularity, 10, 'bg-[rgb(23,162,69)]')}
                  </div>
                </div>

                {/* Salary Range */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-700">Salary Range (Monthly)</div>
                  <div className="text-center text-sm text-gray-900">
                    ${tech1.salaryMin.toLocaleString('en-US')}&ndash;${tech1.salaryMax.toLocaleString('en-US')}
                  </div>
                  <div className="text-center text-sm text-gray-900">
                    ${tech2.salaryMin.toLocaleString('en-US')}&ndash;${tech2.salaryMax.toLocaleString('en-US')}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-700">Use Cases</div>
                  <div className="text-center">
                    {tech1.useCases.map((uc) => (
                      <span key={uc} className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded mr-1 mb-1">{uc}</span>
                    ))}
                  </div>
                  <div className="text-center">
                    {tech2.useCases.map((uc) => (
                      <span key={uc} className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded mr-1 mb-1">{uc}</span>
                    ))}
                  </div>
                </div>

                {/* Learning Curve */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 items-center">
                  <div className="text-sm font-medium text-gray-700">Learning Curve</div>
                  <div className="px-4">
                    <div className="text-center text-sm font-semibold text-gray-900 mb-1">{tech1.learningCurve}</div>
                    {renderBar(learningCurveScore(tech1.learningCurve), 10, 'bg-[rgb(0,159,255)]')}
                  </div>
                  <div className="px-4">
                    <div className="text-center text-sm font-semibold text-gray-900 mb-1">{tech2.learningCurve}</div>
                    {renderBar(learningCurveScore(tech2.learningCurve), 10, 'bg-[rgb(23,162,69)]')}
                  </div>
                </div>

                {/* Job Market */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 items-center">
                  <div className="text-sm font-medium text-gray-700">Job Market</div>
                  <div className="px-4">
                    <div className="text-center text-sm font-semibold text-gray-900 mb-1">{tech1.jobMarket}</div>
                    {renderBar(jobMarketScore(tech1.jobMarket), 10, 'bg-[rgb(0,159,255)]')}
                  </div>
                  <div className="px-4">
                    <div className="text-center text-sm font-semibold text-gray-900 mb-1">{tech2.jobMarket}</div>
                    {renderBar(jobMarketScore(tech2.jobMarket), 10, 'bg-[rgb(23,162,69)]')}
                  </div>
                </div>

                {/* Hire links */}
                <div className="grid grid-cols-3 gap-4 py-6 mt-4">
                  <div></div>
                  <div className="text-center">
                    <a href={tech1.hireUrl} className="inline-block px-5 py-2 bg-[rgb(0,159,255)] text-white font-medium rounded-lg hover:bg-[rgb(0,140,230)] transition-colors text-sm">
                      Hire {tech1.name} Developers
                    </a>
                  </div>
                  <div className="text-center">
                    <a href={tech2.hireUrl} className="inline-block px-5 py-2 bg-[rgb(23,162,69)] text-white font-medium rounded-lg hover:bg-[rgb(20,145,60)] transition-colors text-sm">
                      Hire {tech2.name} Developers
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Related Tools"
        links={[
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'Skill Assessment', href: '/tools/skill-assessment' },
          { label: 'Hire React Developers', href: '/hire-developers/reactjs' },
          { label: 'Hire Python Developers', href: '/hire-developers/python' },
          { label: 'Hire Node.js Developers', href: '/hire-developers/nodejs' },
          { label: 'Hire Java Developers', href: '/hire-developers/java' },
        ]}
      />

      <FinalCTA
        heading="Need Help Choosing the Right Technology?"
        subheading="Our experts are happy to advise you and find the right developers."
      />

      <Footer />
    </div>
  );
}
