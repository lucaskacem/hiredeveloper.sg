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
  { name: 'JavaScript', popularity: 10, salaryMin: 5600, salaryMax: 16000, useCases: ['Web-Apps', 'Server-Side', 'Mobile Apps'], learningCurve: 'Einfach', jobMarket: 'Sehr hoch', category: 'Sprache', hireUrl: '/hire-developers/javascript' },
  { name: 'TypeScript', popularity: 9, salaryMin: 6100, salaryMax: 16800, useCases: ['Enterprise-Apps', 'Web-Apps', 'APIs'], learningCurve: 'Mittel', jobMarket: 'Sehr hoch', category: 'Sprache', hireUrl: '/hire-developers/typescript' },
  { name: 'Python', popularity: 10, salaryMin: 6400, salaryMax: 18400, useCases: ['KI/ML', 'Data Science', 'Web-Apps', 'Automatisierung'], learningCurve: 'Einfach', jobMarket: 'Sehr hoch', category: 'Sprache', hireUrl: '/hire-developers/python' },
  { name: 'Java', popularity: 8, salaryMin: 6100, salaryMax: 17600, useCases: ['Enterprise-Apps', 'Android', 'Microservices'], learningCurve: 'Mittel', jobMarket: 'Hoch', category: 'Sprache', hireUrl: '/hire-developers/java' },
  { name: 'PHP', popularity: 6, salaryMin: 4800, salaryMax: 14400, useCases: ['Web-Apps', 'CMS', 'E-Commerce'], learningCurve: 'Einfach', jobMarket: 'Mittel', category: 'Sprache', hireUrl: '/hire-developers/php' },
  { name: 'Ruby', popularity: 5, salaryMin: 6100, salaryMax: 16800, useCases: ['Web-Apps', 'Startups', 'APIs'], learningCurve: 'Einfach', jobMarket: 'Mittel', category: 'Sprache', hireUrl: '/hire-developers/ruby' },
  { name: 'Go', popularity: 7, salaryMin: 6700, salaryMax: 19200, useCases: ['Microservices', 'Cloud', 'DevOps-Tools'], learningCurve: 'Mittel', jobMarket: 'Hoch', category: 'Sprache', hireUrl: '/hire-developers/golang' },
  { name: 'Rust', popularity: 6, salaryMin: 7200, salaryMax: 20000, useCases: ['Systemprogrammierung', 'WebAssembly', 'Embedded'], learningCurve: 'Schwer', jobMarket: 'Wachsend', category: 'Sprache', hireUrl: '/hire-developers/rust' },
  { name: 'Swift', popularity: 6, salaryMin: 6400, salaryMax: 18400, useCases: ['iOS-Apps', 'macOS-Apps', 'Server-Side'], learningCurve: 'Mittel', jobMarket: 'Hoch', category: 'Sprache', hireUrl: '/hire-developers/ios' },
  { name: 'Kotlin', popularity: 6, salaryMin: 6400, salaryMax: 17900, useCases: ['Android-Apps', 'Server-Side', 'Multiplatform'], learningCurve: 'Mittel', jobMarket: 'Hoch', category: 'Sprache', hireUrl: '/hire-developers/android' },
  { name: 'React', popularity: 10, salaryMin: 6400, salaryMax: 17600, useCases: ['Single-Page-Apps', 'Dashboards', 'Mobile (React Native)'], learningCurve: 'Mittel', jobMarket: 'Sehr hoch', category: 'Framework', hireUrl: '/hire-developers/reactjs' },
  { name: 'Angular', popularity: 7, salaryMin: 6100, salaryMax: 16800, useCases: ['Enterprise-Apps', 'Single-Page-Apps', 'Progressive Web Apps'], learningCurve: 'Schwer', jobMarket: 'Hoch', category: 'Framework', hireUrl: '/hire-developers/angular' },
  { name: 'Vue.js', popularity: 7, salaryMin: 5800, salaryMax: 16000, useCases: ['Web-Apps', 'Single-Page-Apps', 'Dashboards'], learningCurve: 'Einfach', jobMarket: 'Hoch', category: 'Framework', hireUrl: '/hire-developers/vuejs' },
  { name: 'Node.js', popularity: 9, salaryMin: 6100, salaryMax: 17300, useCases: ['APIs', 'Echtzeit-Apps', 'Microservices'], learningCurve: 'Mittel', jobMarket: 'Sehr hoch', category: 'Runtime', hireUrl: '/hire-developers/nodejs' },
  { name: 'Django', popularity: 6, salaryMin: 6400, salaryMax: 17600, useCases: ['Web-Apps', 'APIs', 'Data-Driven Apps'], learningCurve: 'Mittel', jobMarket: 'Hoch', category: 'Framework', hireUrl: '/hire-developers/python' },
  { name: 'AWS', popularity: 9, salaryMin: 6700, salaryMax: 19200, useCases: ['Cloud-Infrastruktur', 'Serverless', 'DevOps'], learningCurve: 'Schwer', jobMarket: 'Sehr hoch', category: 'Cloud', hireUrl: '/hire-developers/aws' },
  { name: 'Docker', popularity: 8, salaryMin: 6700, salaryMax: 19200, useCases: ['Containerisierung', 'CI/CD', 'Microservices'], learningCurve: 'Mittel', jobMarket: 'Sehr hoch', category: 'DevOps', hireUrl: '/hire-developers/devops' },
  { name: 'Kubernetes', popularity: 7, salaryMin: 7200, salaryMax: 20000, useCases: ['Container-Orchestrierung', 'Cloud-Native', 'Skalierung'], learningCurve: 'Schwer', jobMarket: 'Sehr hoch', category: 'DevOps', hireUrl: '/hire-developers/devops' },
  { name: 'PostgreSQL', popularity: 8, salaryMin: 5800, salaryMax: 17600, useCases: ['Relationale Daten', 'Analytics', 'GIS'], learningCurve: 'Mittel', jobMarket: 'Hoch', category: 'Datenbank', hireUrl: '/hire-developers/sql' },
  { name: 'MongoDB', popularity: 7, salaryMin: 5800, salaryMax: 17600, useCases: ['NoSQL', 'Echtzeit-Analytics', 'Content Management'], learningCurve: 'Einfach', jobMarket: 'Hoch', category: 'Datenbank', hireUrl: '/hire-developers/mongodb' },
];

export default function TechnologieVergleichPage() {
  const [tech1Name, setTech1Name] = useState('');
  const [tech2Name, setTech2Name] = useState('');

  const tech1 = techDatabase.find((t) => t.name === tech1Name);
  const tech2 = techDatabase.find((t) => t.name === tech2Name);
  const showComparison = tech1 && tech2 && tech1.name !== tech2.name;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Technologie-Vergleich',
    description: 'Vergleichen Sie Technologien Seite an Seite: Popularität, Gehälter, Anwendungsfälle und mehr.',
    url: 'https://programmier-anfang.de/tools/technologie-vergleich',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
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
    if (lc === 'Einfach') return 3;
    if (lc === 'Mittel') return 6;
    return 9;
  };

  const jobMarketScore = (jm: string) => {
    if (jm === 'Wachsend') return 5;
    if (jm === 'Mittel') return 6;
    if (jm === 'Hoch') return 8;
    return 10;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Technologie-Vergleich', href: '/tools/technologie-vergleich' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">Technologie-Vergleich</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Zwei Technologien, ein Vergleich. Popularität, Gehälter, Lernkurve und Arbeitsmarkt auf einen Blick.
          </p>
        </div>
      </section>

      {/* Selector */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologien auswählen</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologie 1</label>
                <select
                  value={tech1Name}
                  onChange={(e) => setTech1Name(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
                  {techDatabase.map((t) => (
                    <option key={t.name} value={t.name} disabled={t.name === tech2Name}>{t.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologie 2</label>
                <select
                  value={tech2Name}
                  onChange={(e) => setTech2Name(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
                  {techDatabase.map((t) => (
                    <option key={t.name} value={t.name} disabled={t.name === tech1Name}>{t.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {tech1Name && tech2Name && tech1Name === tech2Name && (
              <p className="text-red-500 text-sm mb-4">Bitte wählen Sie zwei verschiedene Technologien.</p>
            )}

            {/* Comparison */}
            {showComparison && (
              <div className="mt-8">
                {/* Header */}
                <div className="grid grid-cols-3 gap-4 mb-8 pb-4 border-b border-gray-200">
                  <div className="text-sm font-medium text-gray-500">Kriterium</div>
                  <div className="text-center">
                    <span className="inline-block px-4 py-1 bg-[rgb(0,159,255)]/10 text-[rgb(0,159,255)] font-bold rounded-full text-sm">{tech1.name}</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-4 py-1 bg-[rgb(23,162,69)]/10 text-[rgb(23,162,69)] font-bold rounded-full text-sm">{tech2.name}</span>
                  </div>
                </div>

                {/* Category */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-700">Kategorie</div>
                  <div className="text-center text-sm text-gray-900">{tech1.category}</div>
                  <div className="text-center text-sm text-gray-900">{tech2.category}</div>
                </div>

                {/* Popularity */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 items-center">
                  <div className="text-sm font-medium text-gray-700">Popularität</div>
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
                  <div className="text-sm font-medium text-gray-700">Gehaltsrange (Monat)</div>
                  <div className="text-center text-sm text-gray-900">
                    {tech1.salaryMin.toLocaleString('de-DE')}&ndash;{tech1.salaryMax.toLocaleString('de-DE')} &euro;
                  </div>
                  <div className="text-center text-sm text-gray-900">
                    {tech2.salaryMin.toLocaleString('de-DE')}&ndash;{tech2.salaryMax.toLocaleString('de-DE')} &euro;
                  </div>
                </div>

                {/* Use Cases */}
                <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-700">Anwendungsfälle</div>
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
                  <div className="text-sm font-medium text-gray-700">Lernkurve</div>
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
                  <div className="text-sm font-medium text-gray-700">Arbeitsmarkt</div>
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
                      {tech1.name}-Entwickler einstellen
                    </a>
                  </div>
                  <div className="text-center">
                    <a href={tech2.hireUrl} className="inline-block px-5 py-2 bg-[rgb(23,162,69)] text-white font-medium rounded-lg hover:bg-[rgb(20,145,60)] transition-colors text-sm">
                      {tech2.name}-Entwickler einstellen
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Verwandte Tools"
        links={[
          { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
          { label: 'Team-Kosten-Rechner', href: '/tools/team-kosten-rechner' },
          { label: 'Interview-Fragen-Generator', href: '/tools/interview-fragen-generator' },
          { label: 'Skill-Assessment', href: '/tools/skill-assessment' },
          { label: 'React-Entwickler einstellen', href: '/hire-developers/reactjs' },
          { label: 'Python-Entwickler einstellen', href: '/hire-developers/python' },
          { label: 'Node.js-Entwickler einstellen', href: '/hire-developers/nodejs' },
          { label: 'Java-Entwickler einstellen', href: '/hire-developers/java' },
        ]}
      />

      <FinalCTA
        heading="Brauchen Sie Hilfe bei der Technologiewahl?"
        subheading="Unsere Experten beraten Sie gerne und finden die passenden Entwickler."
      />

      <Footer />
    </div>
  );
}
