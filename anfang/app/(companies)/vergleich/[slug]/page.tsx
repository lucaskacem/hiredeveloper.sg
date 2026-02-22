import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';
import { competitors, Competitor } from '@/app/data/competitors';
import ComparisonQuiz from '../ComparisonQuiz';
import DecisionFlowchart from '../DecisionFlowchart';

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const competitor = competitors.find((c) => c.slug === params.slug);
  if (!competitor) {
    return { title: 'Vergleich nicht gefunden' };
  }
  return {
    title: `Programmier-Anfang vs ${competitor.name} | Vergleich 2025`,
    description: `Detaillierter Vergleich zwischen Programmier-Anfang und ${competitor.name}: Funktionen, Preise, Vor- und Nachteile. Finden Sie die beste Plattform für Ihre Remote-Entwickler.`,
    robots: { index: false, follow: false },
  };
}

function FeatureCheck({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[rgb(23,162,69)]/10">
        <svg className="w-4 h-4 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
        <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    );
  }
  return <span className="text-sm text-gray-600">{value}</span>;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function generateFAQs(competitor: Competitor) {
  return [
    {
      question: `Was ist der Hauptunterschied zwischen Programmier-Anfang und ${competitor.name}?`,
      answer: `Programmier-Anfang liefert vorgeprüfte Remote-Entwickler mit Fokus auf den DACH-Markt und stellt Kandidaten innerhalb von 72 Stunden vor. ${competitor.name} konzentriert sich auf: ${competitor.focus}. Beide vermitteln qualifizierte Entwickler, aber bei Programmier-Anfang bekommen Sie persönlichere Betreuung und klarere Preise.`,
    },
    {
      question: `Ist Programmier-Anfang günstiger als ${competitor.name}?`,
      answer: `Bei ${competitor.name} sieht die Preisgestaltung so aus: ${competitor.pricing} Programmier-Anfang arbeitet mit klaren, offenen Preisen ohne versteckte Gebühren. Gerade bei Vollzeiteinstellungen kann das deutlich günstiger sein.`,
    },
    {
      question: `Kann ich von ${competitor.name} zu Programmier-Anfang wechseln?`,
      answer: `Klar, ein Wechsel ist jederzeit möglich. Unser Team begleitet Sie beim Übergang und hilft, schnell passende Entwickler zu finden. Viele Kunden kommen von anderen Plattformen zu uns und schätzen den persönlichen Service.`,
    },
    {
      question: `Welche Plattform ist besser für Startups geeignet?`,
      answer: `Beide kommen infrage. Was Programmier-Anfang für Startups besonders interessant macht: risikofreie Probezeit, Matching in 72 Stunden und flexible Verträge. Wenn das Budget knapp ist und es schnell gehen muss, zahlt sich das aus. Plus: Unser DACH-Fokus passt gut zu europäischen Gründerteams.`,
    },
    {
      question: `Wie lange dauert es, über Programmier-Anfang vs ${competitor.name} einen Entwickler einzustellen?`,
      answer: `Bei Programmier-Anfang bekommen Sie in der Regel innerhalb von 72 Stunden passende Kandidatenvorschläge. Bei ${competitor.name} schwankt das je nach Verfügbarkeit und Auswahlprozess. Wer schnell jemanden braucht, spart mit unserem Matching-Verfahren spürbar Zeit.`,
    },
    {
      question: `Bietet Programmier-Anfang die gleichen Technologien wie ${competitor.name}?`,
      answer: `Ja. In unserem Pool finden Sie Entwickler für JavaScript, TypeScript, React, Node.js, Python, Java, PHP, Ruby, Go, Swift, Kotlin und mehr. Egal ob Full-Stack, Frontend, Backend, Mobile oder KI: Wir haben für die meisten Projekte den richtigen Experten.`,
    },
    {
      question: `Wie funktioniert die risikofreie Probezeit bei Programmier-Anfang?`,
      answer: `Sie testen jeden vermittelten Entwickler erst mal in einer Probezeit. Passt es nicht, finden wir kostenlos Ersatz. Das nimmt Ihnen das Risiko, und Sie stellen sicher, dass der Entwickler auch im Alltag zu Ihrem Team passt.`,
    },
    {
      question: `Welche Vertragsmodelle bietet Programmier-Anfang im Vergleich zu ${competitor.name}?`,
      answer: `Bei Programmier-Anfang haben Sie die Wahl zwischen Vollzeit- und Freelance-Verträgen. Kurzfristiges Projekt oder langfristige Festanstellung, beides geht. Bei ${competitor.name} hängt das vom jeweiligen Angebot ab.`,
    },
    {
      question: `Gibt es versteckte Kosten bei Programmier-Anfang?`,
      answer: `Nein. Sie wissen von Anfang an, was Sie zahlen. Keine Plattformgebühren, keine Vorabkosten, keine Aufschläge im Nachhinein. Bei vielen anderen Plattformen tauchen zusätzliche Gebühren erst auf der Rechnung auf. Das machen wir anders.`,
    },
    {
      question: `Wie stellt Programmier-Anfang die Qualität der Entwickler sicher?`,
      answer: `Vier Stufen: technischer Coding-Test, Prüfung der Berufserfahrung, Kommunikationscheck und Referenzen. Etwa 5% der Bewerber schaffen es durch. Und auch nach der Vermittlung bleiben wir dran und geben Ihnen laufend Feedback und Support.`,
    },
  ];
}

function generateDetailedComparison(competitor: Competitor) {
  return {
    einstellung: {
      title: 'Einstellungsprozess',
      us: 'So läuft es bei Programmier-Anfang: Sie beschreiben, wen Sie brauchen. Innerhalb von 72 Stunden bekommen Sie vorgeprüfte Kandidaten vorgestellt. Wir übernehmen Screening und Vorauswahl. Sie führen nur noch die finalen Gespräche.',
      them: `Bei ${competitor.name} variiert der Einstellungsprozess: ${competitor.focus}. Je nach Plattform müssen Sie selbst aktiv nach Kandidaten suchen, eigene Auswahlverfahren durchführen oder auf automatisiertes Matching warten. Dies kann je nach Ihren Anforderungen mehr oder weniger Zeit in Anspruch nehmen.`,
    },
    qualitaet: {
      title: 'Qualitätssicherung',
      us: 'Vier Prüfschritte, bevor jemand bei uns reinkommt: technischer Coding-Test, Berufserfahrung und Referenzen, Kommunikations-Check und eine Probeaufgabe mit realistischem Szenario. Am Ende bleiben rund 5% der Bewerber übrig.',
      them: `${competitor.name} setzt auf: ${competitor.pros.join(', ')}. Allerdings gibt es auch Einschränkungen: ${competitor.cons.slice(0, 2).join(', ')}.`,
    },
    support: {
      title: 'Kundenbetreuung',
      us: 'Jeder Kunde bekommt einen festen Ansprechpartner, der Deutsch spricht. Vom ersten Briefing bis lange nach der Einstellung. Wenn etwas klemmt, rufen Sie an, statt Tickets zu schreiben.',
      them: `Der Support bei ${competitor.name} hängt von Ihrem Tarif und Standort ab. Da die Plattform primär auf den englischsprachigen Markt ausgerichtet ist, kann die Kommunikation für deutschsprachige Unternehmen eine zusätzliche Hürde darstellen.`,
    },
    skalierung: {
      title: 'Skalierbarkeit',
      us: 'Ein Entwickler oder ein ganzes Team: Programmier-Anfang wächst mit. Sie wechseln flexibel zwischen Vollzeit und Freelance, stocken auf oder reduzieren, ganz ohne langfristige Vertragsbindung.',
      them: `Bei ${competitor.name} hängt die Skalierbarkeit von den verfügbaren Tarifen und Modellen ab. ${competitor.pricing}`,
    },
  };
}

export default function ComparisonPage({
  params,
}: {
  params: { slug: string };
}) {
  const competitor = competitors.find((c) => c.slug === params.slug);

  if (!competitor) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-[1280px] mx-auto px-12 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Vergleich nicht gefunden
          </h1>
          <Link href="/vergleich" className="text-[rgb(0,159,255)] hover:underline">
            Zurück zur Übersicht
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const faqs = generateFAQs(competitor);
  const detailedComparison = generateDetailedComparison(competitor);
  const otherCompetitors = competitors
    .filter((c) => c.slug !== competitor.slug)
    .slice(0, 8);

  const extendedFeatures = [
    ...competitor.features,
    { name: 'Deutschsprachiger Support', us: true as boolean | string, them: false as boolean | string },
    { name: 'Europäische Zeitzonen', us: true as boolean | string, them: 'Teilweise' as boolean | string },
    { name: 'Vollzeit & Freelance', us: true as boolean | string, them: (competitor.features.find(f => f.name === 'Vollzeit-Einstellungen')?.them === true ? true : false) as boolean | string },
    { name: 'Keine Vorabgebühren', us: true as boolean | string, them: false as boolean | string },
    { name: 'Persönliches Matching', us: true as boolean | string, them: false as boolean | string },
    { name: 'Kostenloser Ersatz', us: true as boolean | string, them: false as boolean | string },
  ];

  // Remove duplicates based on name
  const seenNames = new Set<string>();
  const uniqueFeatures = extendedFeatures.filter((f) => {
    if (seenNames.has(f.name)) return false;
    seenNames.add(f.name);
    return true;
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Programmier-Anfang vs ${competitor.name} | Vergleich 2025`,
    description: `Detaillierter Vergleich zwischen Programmier-Anfang und ${competitor.name}.`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Startseite',
          item: 'https://programmier-anfang.de/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Vergleich',
          item: 'https://programmier-anfang.de/vergleich',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `vs ${competitor.name}`,
          item: `https://programmier-anfang.de/vergleich/${competitor.slug}`,
        },
      ],
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <Breadcrumb
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Vergleich', href: '/vergleich' },
          { label: `vs ${competitor.name}`, href: `/vergleich/${competitor.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <p className="text-[rgb(23,162,69)] font-semibold mb-4 text-sm uppercase tracking-wider">
            Anbietervergleich 2025
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Programmier-Anfang vs {competitor.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Detaillierter Vergleich zwischen Programmier-Anfang und{' '}
            {competitor.name}. Erfahren Sie, welche Plattform am besten zu Ihren
            Anforderungen passt.
          </p>
          {/* Quick stat badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
              72h Matching
            </span>
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
              Risikofreie Probezeit
            </span>
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
              DACH-Fokus
            </span>
            <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20">
              Keine versteckten Kosten
            </span>
          </div>
        </div>
      </section>

      {/* TL;DR summary */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="bg-[rgb(23,162,69)]/5 border border-[rgb(23,162,69)]/20 rounded-xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Zusammenfassung (TL;DR)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Programmier-Anfang</strong> bietet schnelleres Matching (72h vs. Wochen), transparentere Preise und speziellen DACH-Fokus mit deutschsprachigem Support.{' '}
              <strong>{competitor.name}</strong> hat als Schwerpunkt: {competitor.focus}.{' '}
              Für Unternehmen im DACH-Raum, die schnell hochqualifizierte Remote-Entwickler einstellen möchten, ist Programmier-Anfang die bessere Wahl.
            </p>
          </div>
        </div>
      </section>

      {/* Quick overview table */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Kurzübersicht
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 w-1/3">
                    Kriterium
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[rgb(23,162,69)] w-1/3">
                    Programmier-Anfang
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700 w-1/3">
                    {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Gegründet</td>
                  <td className="py-3 px-4 text-sm text-gray-600">2023</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.founded}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Hauptsitz</td>
                  <td className="py-3 px-4 text-sm text-gray-600">DACH-Region</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.headquarters}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Fokus</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Vorgeprüfte Remote-Entwickler (DACH)</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.focus}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Preisgestaltung</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Transparent, keine versteckten Gebühren</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.pricing}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Matching-Zeit</td>
                  <td className="py-3 px-4 text-sm text-gray-600">72 Stunden</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Variiert</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Zielmarkt</td>
                  <td className="py-3 px-4 text-sm text-gray-600">DACH-Region (DE, AT, CH)</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Global / {competitor.headquarters}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Vertragsmodelle</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Vollzeit & Freelance</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{competitor.focus.includes('EOR') ? 'EOR & Contractor' : 'Variiert'}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-700">Kundenbewertung</td>
                  <td className="py-3 px-4">
                    <StarRating rating={5} />
                  </td>
                  <td className="py-3 px-4">
                    <StarRating rating={3} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed comparison sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Detaillierter Vergleich
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Programmier-Anfang und {competitor.name} in vier Bereichen, die bei der Plattformwahl am meisten zählen.
          </p>

          <div className="space-y-8">
            {Object.values(detailedComparison).map((section) => (
              <div key={section.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-6 py-3">
                  <h3 className="text-white font-bold text-lg">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[rgb(23,162,69)] text-white text-xs font-bold px-2 py-0.5 rounded">
                        Programmier-Anfang
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {section.us}
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded">
                        {competitor.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {section.them}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended feature comparison table */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Alle Funktionen im Vergleich
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Alle Funktionen und Merkmale beider Plattformen auf einen Blick.
          </p>
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">
                    Funktion
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-[rgb(23,162,69)]">
                    Programmier-Anfang
                  </th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">
                    {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {uniqueFeatures.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-gray-100 ${
                      index % 2 === 1 ? 'bg-gray-50' : ''
                    }`}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-700">
                      {feature.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <FeatureCheck value={feature.us} />
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        <FeatureCheck value={feature.them} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Feature count summary */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[rgb(23,162,69)]/5 border border-[rgb(23,162,69)]/20 rounded-lg p-4 text-center">
              <span className="text-3xl font-bold text-[rgb(23,162,69)]">
                {uniqueFeatures.filter((f) => f.us === true).length}
              </span>
              <p className="text-sm text-gray-600 mt-1">Funktionen bei Programmier-Anfang</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <span className="text-3xl font-bold text-gray-500">
                {uniqueFeatures.filter((f) => f.them === true).length}
              </span>
              <p className="text-sm text-gray-600 mt-1">Funktionen bei {competitor.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Preisvergleich
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Transparenz bei den Kosten ist uns wichtig. Hier sehen Sie, wie sich die Preismodelle unterscheiden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-[rgb(23,162,69)] rounded-lg p-8 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-[rgb(23,162,69)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  EMPFOHLEN
                </span>
              </div>
              <div className="flex items-center gap-2 mb-6 mt-2">
                <h3 className="text-xl font-bold text-gray-900">Programmier-Anfang</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Transparente Preisgestaltung ohne versteckte Gebühren</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Risikofreie Probezeit inklusive</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Keine Vorabgebühren oder Plattformkosten</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Bis zu 58% Kostenersparnis gegenüber traditioneller Einstellung</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[rgb(23,162,69)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Kostenloser Ersatz bei Unzufriedenheit</span>
                </li>
              </ul>
              <div className="bg-[rgb(23,162,69)]/5 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-medium">
                  Fazit: Sie zahlen nur für die geleistete Arbeitszeit. Keine versteckten Gebühren, keine Überraschungen.
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {competitor.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {competitor.pricing}
              </p>
              <div className="space-y-3">
                {competitor.cons.filter((_, i) => i < 3).map((con) => (
                  <div key={con} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="text-sm text-gray-600">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Vor- und Nachteile im Detail
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Eine ehrliche Gegenüberstellung der Stärken und Schwächen beider Plattformen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programmier-Anfang */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Programmier-Anfang
              </h3>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[rgb(23,162,69)] uppercase tracking-wider mb-3">
                  Vorteile
                </h4>
                <ul className="space-y-2">
                  {[
                    'Vorgeprüfte Entwickler mit technischem Screening',
                    'Matching innerhalb von 72 Stunden',
                    'DACH-Fokus mit deutschsprachigem Support',
                    'Vollzeit- und Freelance-Optionen',
                    'Risikofreie Probezeit',
                    'Transparente Preise ohne versteckte Kosten',
                    'Persönlicher Account Manager',
                    'Kostenloser Ersatz bei Nichtpassung',
                  ].map((pro) => (
                    <li key={pro} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[rgb(23,162,69)] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Einschränkungen
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1 shrink-0">-</span>
                    <span className="text-sm text-gray-500">Jüngere Plattform als einige Wettbewerber</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1 shrink-0">-</span>
                    <span className="text-sm text-gray-500">Fokus auf DACH-Region (weniger global)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Competitor */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {competitor.name}
              </h3>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[rgb(23,162,69)] uppercase tracking-wider mb-3">
                  Vorteile
                </h4>
                <ul className="space-y-2">
                  {competitor.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[rgb(23,162,69)] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                  Nachteile
                </h4>
                <ul className="space-y-2">
                  {competitor.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Flowchart */}
      <DecisionFlowchart competitorName={competitor.name} />

      {/* Why choose Programmier-Anfang */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Warum Programmier-Anfang wählen?
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Gebaut für Unternehmen im DACH-Raum, die zuverlässige Remote-Entwickler brauchen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Geprüfte Qualität
              </h3>
              <p className="text-sm text-gray-600">
                Technik, Kommunikation und Zuverlässigkeit werden
                in mehreren Stufen geprüft. Am Ende schaffen es
                nur rund 5% der Bewerber in unseren Pool.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(0,159,255)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Schnelles Matching
              </h3>
              <p className="text-sm text-gray-600">
                72 Stunden, dann haben Sie passende Kandidaten
                auf dem Tisch. Kein langes Warten, keine endlosen
                Bewerbungsschleifen.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(23,162,69)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(23,162,69)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                DACH-Expertise
              </h3>
              <p className="text-sm text-gray-600">
                Wir kennen den deutschsprachigen Markt und wissen,
                worauf Unternehmen in Deutschland, Österreich und der
                Schweiz Wert legen. Support auf Deutsch ist dabei selbstverständlich.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-10 h-10 rounded-full bg-[rgb(0,159,255)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[rgb(0,159,255)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Risikofrei starten
              </h3>
              <p className="text-sm text-gray-600">
                Erst testen, dann entscheiden.
                Zahlen Sie nur, wenn Sie zufrieden sind. Keine
                Bindung, keine versteckten Kosten, und bei Bedarf
                gibt es kostenlosen Ersatz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fazit / Conclusion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Fazit: Programmier-Anfang vs {competitor.name}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beide Plattformen haben ihre Berechtigung. Für DACH-Unternehmen spricht aber einiges für Programmier-Anfang:{' '}
              <strong>schnelleres Matching</strong> (72h statt Wochen),{' '}
              <strong>transparente Preise</strong> ohne versteckte Gebühren,{' '}
              <strong>deutschsprachigen Support</strong> und eine{' '}
              <strong>risikofreie Probezeit</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {competitor.name} punktet mit {competitor.pros.slice(0, 2).join(' und ').toLowerCase()}, hat aber Schwächen bei {competitor.cons.slice(0, 2).join(' und ').toLowerCase()}.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Sie suchen jemanden, der den DACH-Markt kennt und Ihnen schnell starke Remote-Entwickler liefert? Dann ist Programmier-Anfang die richtige Adresse.
            </p>
            <div className="bg-white border-2 border-[rgb(23,162,69)] rounded-xl p-6 inline-block">
              <p className="text-[rgb(23,162,69)] font-bold text-lg mb-1">Unser Urteil</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <StarRating rating={5} />
                <span className="text-sm text-gray-500 ml-2">5/5 Sterne</span>
              </div>
              <p className="text-sm text-gray-600">
                Unsere Empfehlung, wenn Ihnen Qualität, Tempo und persönlicher Kontakt wichtig sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <ComparisonQuiz />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-600 mb-8">
            Antworten auf die wichtigsten Fragen zum Vergleich zwischen Programmier-Anfang und {competitor.name}.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related comparisons */}
      <RelatedLinks
        title="Weitere Vergleiche"
        links={otherCompetitors.map((c) => ({
          label: `vs ${c.name}`,
          href: `/vergleich/${c.slug}`,
        }))}
      />

      <FinalCTA
        heading="Überzeugen Sie sich selbst!"
        subheading="Starten Sie risikofrei und finden Sie Ihren idealen Entwickler in 72 Stunden."
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
