import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import HireHero from '../../components/HireHero';
import TalentShowcase from '../../components/TalentShowcase';
import StatsTestimonials from '../../components/StatsTestimonials';
import HowItWorksSteps from '../../components/HowItWorksSteps';
import HiringGuideSection from '../../components/HiringGuideSection';
import FAQSection from '../../components/FAQSection';
import FinalCTA from '../../components/FinalCTA';
import Breadcrumb from '../../components/Breadcrumb';
import RelatedLinks from '../../components/RelatedLinks';
import {
  getSubcategoryBySlug,
  getAllSubcategorySlugs,
  getRelatedSubcategories,
  generateProfiles,
  generateGuideSections,
} from '@/app/data/developer-subcategories';
import { countries } from '@/app/data/locations';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSubcategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getSubcategoryBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    robots: { index: false, follow: false },
  };
}

export default async function DeveloperSubcategoryPage({ params }: Props) {
  const { slug } = await params;
  const data = getSubcategoryBySlug(slug);
  if (!data) notFound();

  const profiles = generateProfiles(data.name, data.skills);
  const guideSections = generateGuideSections(data.name);
  const related = getRelatedSubcategories(slug, 8);

  const stats = [
    { prefix: 'Bis zu', value: '75%', label: 'schneller eingestellt' },
    { prefix: 'Bis zu', value: '58%', label: 'Kostenersparnis' },
    { value: `${data.heroCount.toLocaleString('de-DE')}+`, label: `${data.name} verfügbar` },
  ];

  const testimonials = [
    {
      quote: `Die Qualität der ${data.name} bei Programmier-Anfang ist hervorragend. Wir haben in weniger als einer Woche den perfekten Kandidaten gefunden.`,
      author: 'M.G.',
      title: 'CEO',
      company: 'SaaS-Unternehmen',
      avatar: '',
    },
    {
      quote: 'Ich habe ehemalige Gründer, Senior Engineers und sogar CMOs in weniger als 72 Stunden gefunden.',
      author: 'C.B.',
      title: 'Gründer & CEO',
      company: 'Tech-Startup',
      avatar: '',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Anfrage',
      description: `Beschreiben Sie den idealen ${data.name}, den Sie suchen.`,
      subtext: 'Erzählen Sie uns von der Rolle, den technischen Anforderungen und dem Budget.',
      image: 'request.png',
    },
    {
      number: '02',
      title: 'Interview',
      description: `Erhalten Sie geprüfte ${data.name}-Profile, die zu Ihren Anforderungen passen.`,
      subtext: `Wählen Sie den ${data.name} aus, den Sie interviewen möchten.`,
      image: 'interview.png',
    },
    {
      number: '03',
      title: 'Einstellen',
      description: `Wenn Sie bereit sind, stellen Sie den bevorzugten ${data.name} ein.`,
      subtext: 'Unterschreiben Sie eine NDA, und wir kümmern uns um den Papierkram.',
      image: 'hire.png',
    },
  ];

  const relatedLinks = related.map((r) => ({
    label: r.name,
    href: `/hire-developers/${r.slug}`,
  }));

  const locationLinks = data.relatedLocations.map((loc) => {
    const names: Record<string, string> = {
      deutschland: 'Deutschland',
      oesterreich: 'Österreich',
      schweiz: 'Schweiz',
      liechtenstein: 'Liechtenstein',
      luxemburg: 'Luxemburg',
    };
    return {
      label: `${data.name} in ${names[loc] || loc}`,
      href: `/standorte/${loc}`,
    };
  });

  // Generate city-level cross-links for deep cocoon
  const topCities = countries
    .flatMap((c) =>
      c.regions.flatMap((r) =>
        r.cities.map((city) => ({
          name: city.name,
          slug: city.slug,
          population: city.population,
        }))
      )
    )
    .sort((a, b) => b.population - a.population)
    .slice(0, 12);

  const cityLinks = topCities.map((c) => ({
    label: `${data.name} in ${c.name}`,
    href: `/hire-developers/${slug}/${c.slug}`,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.name} einstellen - Programmier-Anfang`,
    description: data.metaDescription,
    url: `https://programmier-anfang.de/hire-developers/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Programmier-Anfang',
      url: 'https://programmier-anfang.de',
    },
    serviceType: `${data.name} Recruitment`,
    areaServed: ['Deutschland', 'Österreich', 'Schweiz', 'Liechtenstein', 'Luxemburg'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: '0 EUR bis zur Einstellung',
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
          { label: 'Entwickler einstellen', href: '/hire-developers' },
          { label: data.name, href: `/hire-developers/${slug}` },
        ]}
      />

      <HireHero
        category="developers"
        count={data.heroCount}
        description={data.heroDescription}
      />

      <TalentShowcase
        heading={`${data.heroCount.toLocaleString('de-DE')} Remote ${data.name} verfügbar:`}
        profiles={profiles}
        category="developers"
      />

      <StatsTestimonials stats={stats} testimonials={testimonials} />

      <HowItWorksSteps steps={steps} category="developers" />

      <WhyChooseArc />

      <HiringGuideSection
        heading={`Wie man Top-${data.name} einstellt`}
        sections={guideSections}
      />

      <FAQSection category={data.name} />

      <RelatedLinks title="Verwandte Spezialisierungen" links={relatedLinks} />

      <RelatedLinks title={`${data.name} nach Standort`} links={locationLinks} />

      <RelatedLinks title={`${data.name} in Top-Städten`} links={cityLinks} />

      <FinalCTA
        heading={`Ihr neuer ${data.name} ist gleich um die Ecke!`}
        subheading="Risikofrei starten."
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}
