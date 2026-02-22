'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';

const projectTypes = [
  { value: 'web-app', label: 'Web-Applikation', baseWeeks: 8, baseCost: 15000 },
  { value: 'mobile-app', label: 'Mobile App (iOS/Android)', baseWeeks: 12, baseCost: 25000 },
  { value: 'e-commerce', label: 'E-Commerce-Plattform', baseWeeks: 10, baseCost: 20000 },
  { value: 'api', label: 'API / Backend-Service', baseWeeks: 6, baseCost: 12000 },
  { value: 'saas', label: 'SaaS-Plattform', baseWeeks: 16, baseCost: 35000 },
  { value: 'dashboard', label: 'Dashboard / Admin-Panel', baseWeeks: 6, baseCost: 10000 },
  { value: 'landing', label: 'Landing Page / Marketing-Site', baseWeeks: 3, baseCost: 5000 },
  { value: 'mvp', label: 'MVP / Prototyp', baseWeeks: 5, baseCost: 8000 },
];

const complexities = [
  { value: 'simple', label: 'Einfach', multiplier: 1.0 },
  { value: 'medium', label: 'Mittel', multiplier: 1.8 },
  { value: 'complex', label: 'Komplex', multiplier: 3.0 },
];

const featureOptions = [
  { value: 'auth', label: 'Authentifizierung & Autorisierung', weeks: 1.5, cost: 3000 },
  { value: 'payments', label: 'Zahlungsintegration', weeks: 2, cost: 4000 },
  { value: 'chat', label: 'Echtzeit-Chat / Messaging', weeks: 3, cost: 6000 },
  { value: 'analytics', label: 'Analytics & Reporting', weeks: 2, cost: 4000 },
  { value: 'search', label: 'Volltextsuche', weeks: 1.5, cost: 3000 },
  { value: 'notifications', label: 'Push-Benachrichtigungen', weeks: 1, cost: 2000 },
  { value: 'file-upload', label: 'Datei-Upload & Verwaltung', weeks: 1.5, cost: 3000 },
  { value: 'multi-language', label: 'Mehrsprachigkeit', weeks: 1.5, cost: 2500 },
  { value: 'cms', label: 'Content Management System', weeks: 2, cost: 4000 },
  { value: 'third-party', label: 'Drittanbieter-Integrationen', weeks: 2, cost: 4000 },
  { value: 'admin', label: 'Admin-Dashboard', weeks: 2.5, cost: 5000 },
  { value: 'email', label: 'E-Mail-Integration', weeks: 1, cost: 2000 },
  { value: 'maps', label: 'Karten & Geolocation', weeks: 1.5, cost: 3000 },
  { value: 'social', label: 'Social Login / OAuth', weeks: 1, cost: 2000 },
];

export default function ProjektSchaetzungPage() {
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

  const anfangMin = Math.round(totalCostMin * 0.42);
  const anfangMax = Math.round(totalCostMax * 0.42);

  const handleCalculate = () => {
    if (projectType && complexity) {
      setCalculated(true);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Projekt-Schätzung',
    description: 'Schätzen Sie Zeit und Kosten für Ihr Softwareprojekt basierend auf Typ, Komplexität und Features.',
    url: 'https://programmier-anfang.de/tools/projekt-schaetzung',
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
          { label: 'Projekt-Schätzung', href: '/tools/projekt-schaetzung' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h1 className="text-[42px] font-bold mb-4">Projekt-Schätzung</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Wie lange dauert Ihr Projekt und was wird es kosten? Wählen Sie Projekttyp, Komplexität und Features.
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">

            {/* Project Type */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Projekttyp wählen</h2>
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Komplexität</h2>
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
                      {c.value === 'simple' && 'Standard-Funktionalität, klare Anforderungen'}
                      {c.value === 'medium' && 'Benutzerdefinierte Logik, mehrere Integrationen'}
                      {c.value === 'complex' && 'Hochskalierbar, Echtzeit, komplexe Architektur'}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Features auswählen (optional)</h2>
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
              Projekt schätzen
            </button>

            {/* Results */}
            {calculated && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ihre Projektschätzung</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[rgb(0,159,255)]/5 rounded-xl p-6 text-center border border-[rgb(0,159,255)]/20">
                    <p className="text-sm text-gray-600 mb-1">Geschätzte Dauer</p>
                    <p className="text-3xl font-bold text-[rgb(0,159,255)]">{totalWeeks} Wochen</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Deutscher Marktpreis</p>
                    <p className="text-2xl font-bold text-gray-400 line-through">
                      {totalCostMin.toLocaleString('de-DE')}&ndash;{totalCostMax.toLocaleString('de-DE')} &euro;
                    </p>
                  </div>
                  <div className="bg-[rgb(23,162,69)]/5 rounded-xl p-6 text-center border border-[rgb(23,162,69)]/20">
                    <p className="text-sm text-gray-600 mb-1">Mit Programmier-Anfang</p>
                    <p className="text-3xl font-bold text-[rgb(23,162,69)]">
                      {anfangMin.toLocaleString('de-DE')}&ndash;{anfangMax.toLocaleString('de-DE')} &euro;
                    </p>
                  </div>
                </div>

                {/* Breakdown */}
                {features.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Feature-Aufschlüsselung</h4>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 text-sm font-medium text-gray-500">Feature</th>
                          <th className="text-right py-2 text-sm font-medium text-gray-500">Dauer</th>
                          <th className="text-right py-2 text-sm font-medium text-gray-500">Kosten</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 text-sm text-gray-900">{project?.label} ({comp?.label})</td>
                          <td className="py-2 text-sm text-gray-600 text-right">{Math.round(baseWeeks)} Wo.</td>
                          <td className="py-2 text-sm text-gray-600 text-right">{Math.round(baseCost).toLocaleString('de-DE')} &euro;</td>
                        </tr>
                        {features.map((f) => (
                          <tr key={f.value} className="border-b border-gray-100">
                            <td className="py-2 text-sm text-gray-900">{f.label}</td>
                            <td className="py-2 text-sm text-gray-600 text-right">{f.weeks} Wo.</td>
                            <td className="py-2 text-sm text-gray-600 text-right">{f.cost.toLocaleString('de-DE')} &euro;</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="p-6 bg-[rgb(23,162,69)]/5 rounded-xl border border-[rgb(23,162,69)]/20 text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Sparen Sie bis zu 58% bei der Umsetzung
                  </p>
                  <p className="text-gray-600 mb-4">
                    Lassen Sie Ihr Projekt von unseren geprüften Remote-Entwicklern umsetzen.
                  </p>
                  <a
                    href="/hire-developers"
                    className="inline-block px-8 py-3 bg-[rgb(23,162,69)] text-white font-semibold rounded-lg hover:bg-[rgb(20,145,60)] transition-colors"
                  >
                    Projekt besprechen
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
          { label: 'Gehalt-Rechner', href: '/tools/gehalt-rechner' },
          { label: 'Technologie-Vergleich', href: '/tools/technologie-vergleich' },
          { label: 'Softwareentwickler einstellen', href: '/hire-developers/software-development' },
          { label: 'Full-Stack-Entwickler einstellen', href: '/hire-developers/full-stack' },
          { label: 'Web-Entwickler einstellen', href: '/hire-developers/web-development' },
          { label: 'Mobile-App-Entwickler einstellen', href: '/hire-developers/mobile-app-development' },
          { label: 'DevOps-Ingenieure einstellen', href: '/hire-developers/devops' },
        ]}
      />

      <FinalCTA
        heading="Lassen Sie uns Ihr Projekt Realität werden"
        subheading="Geprüfte Entwickler, schnelles Matching, risikofreier Start."
      />

      <Footer />
    </div>
  );
}
