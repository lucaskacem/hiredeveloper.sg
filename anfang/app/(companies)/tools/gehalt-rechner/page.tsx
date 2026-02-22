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

const experienceLevels = ['Junior (0-2 Jahre)', 'Mid-Level (2-5 Jahre)', 'Senior (5-8 Jahre)', 'Lead (8+ Jahre)'];

const regions = ['Berlin', 'München', 'Hamburg', 'Frankfurt', 'Köln', 'Stuttgart', 'Wien', 'Zürich', 'Remote (DACH)'];

// Hourly rates in EUR based on tech category and experience
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
  'Berlin': 1.0,
  'München': 1.15,
  'Hamburg': 1.05,
  'Frankfurt': 1.1,
  'Köln': 0.95,
  'Stuttgart': 1.08,
  'Wien': 0.9,
  'Zürich': 1.45,
  'Remote (DACH)': 1.0,
};

export default function GehaltRechnerPage() {
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

  const handleCalculate = () => {
    if (technology && experience && region) {
      setCalculated(true);
    }
  };

  const maxRate = 135 * 1.45; // Max possible for bar scaling

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Entwickler-Gehaltsrechner',
    description: 'Berechnen Sie Gehälter und Stundensätze für Entwickler nach Technologie, Erfahrung und Standort.',
    url: 'https://programmier-anfang.de/tools/gehalt-rechner',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">
            Entwickler-Gehaltsrechner
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Was kostet ein Entwickler pro Stunde, pro Monat, pro Jahr? Wählen Sie Technologie, Erfahrung und Region.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gehalt berechnen</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Technology */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologie</label>
                <select
                  value={technology}
                  onChange={(e) => { setTechnology(e.target.value); setCalculated(false); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
                  {technologies.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Erfahrungslevel</label>
                <select
                  value={experience}
                  onChange={(e) => { setExperience(e.target.value); setCalculated(false); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
                  {experienceLevels.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stadt / Region</label>
                <select
                  value={region}
                  onChange={(e) => { setRegion(e.target.value); setCalculated(false); }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
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
              Gehalt berechnen
            </button>

            {/* Results */}
            {calculated && (
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Ergebnis: {technology} {experience} in {region}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[rgb(0,159,255)]/5 rounded-xl p-6 text-center border border-[rgb(0,159,255)]/20">
                    <p className="text-sm text-gray-600 mb-1">Stundensatz</p>
                    <p className="text-3xl font-bold text-[rgb(0,159,255)]">{hourlyRate} &euro;/h</p>
                  </div>
                  <div className="bg-[rgb(23,162,69)]/5 rounded-xl p-6 text-center border border-[rgb(23,162,69)]/20">
                    <p className="text-sm text-gray-600 mb-1">Monatsgehalt</p>
                    <p className="text-3xl font-bold text-[rgb(23,162,69)]">{monthlyMin.toLocaleString('de-DE')}&ndash;{monthlyMax.toLocaleString('de-DE')} &euro;</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Jahresgehalt</p>
                    <p className="text-3xl font-bold text-gray-900">{yearlyMin.toLocaleString('de-DE')}&ndash;{yearlyMax.toLocaleString('de-DE')} &euro;</p>
                  </div>
                </div>

                {/* Comparison bars */}
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Vergleich nach Erfahrungslevel</h4>
                <div className="space-y-4">
                  {experienceLevels.map((level, i) => {
                    const rate = Math.round((salaryData[technology]?.[i] || 50) * multiplier);
                    const width = Math.round((rate / maxRate) * 100);
                    const isActive = i === experienceIndex;
                    return (
                      <div key={level}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className={isActive ? 'font-bold text-gray-900' : 'text-gray-600'}>{level}</span>
                          <span className={isActive ? 'font-bold text-gray-900' : 'text-gray-600'}>{rate} &euro;/h</span>
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
                    Für genauere Schätzungen, kontaktieren Sie uns
                  </p>
                  <p className="text-gray-600 mb-4">
                    Wir helfen Ihnen, starke {technology}-Entwickler zu marktgerechten Konditionen zu finden.
                  </p>
                  <a
                    href="/hire-developers"
                    className="inline-block px-6 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                  >
                    Entwickler einstellen
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Verwandte Tools"
        links={[
          { label: 'Team-Kosten-Rechner', href: '/tools/team-kosten-rechner' },
          { label: 'Technologie-Vergleich', href: '/tools/technologie-vergleich' },
          { label: 'Projekt-Schätzung', href: '/tools/projekt-schaetzung' },
          { label: 'Interview-Fragen-Generator', href: '/tools/interview-fragen-generator' },
          { label: 'Skill-Assessment', href: '/tools/skill-assessment' },
          { label: 'React-Entwickler einstellen', href: '/hire-developers/reactjs' },
          { label: 'Python-Entwickler einstellen', href: '/hire-developers/python' },
          { label: 'DevOps-Ingenieure einstellen', href: '/hire-developers/devops' },
        ]}
      />

      <FinalCTA
        heading="Finden Sie den passenden Entwickler zum richtigen Preis"
        subheading="Risikofrei starten - zahlen Sie nur, wenn Sie zufrieden sind."
      />

      <Footer />
    </div>
  );
}
