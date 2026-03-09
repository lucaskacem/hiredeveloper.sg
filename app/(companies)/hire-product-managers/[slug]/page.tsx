import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import HireHero from '../../components/HireHero';
import TalentShowcase from '../../components/TalentShowcase';
import StatsTestimonials from '../../components/StatsTestimonials';
import HowItWorksSteps from '../../components/HowItWorksSteps';
import HiringGuideSection from '../../components/HiringGuideSection';
import FAQSection from '../../components/FAQSection';
import FinalCTA from '../../components/FinalCTA';
import RelatedLinks from '../../components/RelatedLinks';
import HiringProcessFlowchart from '../../components/HiringProcessFlowchart';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import {
  getPMSubcategoryBySlug,
  getAllPMSubcategorySlugs,
  getRelatedPMSubcategories,
  generatePMProfiles,
  generatePMGuideSections,
} from '@/app/data/product-manager-subcategories';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPMSubcategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getPMSubcategoryBySlug(slug);
  if (!data) return {};
  const year = new Date().getFullYear();
  return {
    title: `${data.metaTitle} - ${year} | HireDeveloper.sg`,
    description: `${data.metaDescription} Updated for ${year}.`,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.sg/hire-product-managers/${slug}`,
    },
  };
}

export default async function PMSubcategoryPage({ params }: Props) {
  const { slug } = await params;
  const data = getPMSubcategoryBySlug(slug);
  if (!data) notFound();

  const profiles = generatePMProfiles(data.name, data.skills);
  const guideSections = generatePMGuideSections(data.name);
  const related = getRelatedPMSubcategories(slug, 5);
  const year = new Date().getFullYear();

  const stats = [
    { prefix: 'Up to', value: '75%', label: 'faster hiring' },
    { prefix: 'Up to', value: '58%', label: 'cost savings' },
    { value: `${data.heroCount.toLocaleString('en-US')}+`, label: `${data.name} available` },
  ];

  const testimonials = [
    {
      quote: `The ${data.name.toLowerCase()} we hired through HireDeveloper.sg transformed our product strategy and delivery cadence.`,
      author: 'J.L.',
      title: 'VP of Product',
      company: 'Singapore SaaS Startup',
      avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    },
    {
      quote: `Finding a pre-vetted ${data.name.toLowerCase().replace(/s$/, '')} who understood our domain saved us months of searching.`,
      author: 'S.W.',
      title: 'CEO',
      company: 'FinTech Company',
      avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: `Describe the ideal ${data.name.toLowerCase().replace(/s$/, '')} you are looking for.`,
      subtext: 'Tell us about the role, product scope, and budget.',
      image: 'request.png',
    },
    {
      number: '02',
      title: 'Interview Top Candidates',
      description: `Receive vetted ${data.name.toLowerCase()} profiles matched to your requirements.`,
      subtext: `Select the ${data.name.toLowerCase().replace(/s$/, '')} you would like to interview.`,
      image: 'interview.png',
    },
    {
      number: '03',
      title: 'Hire & Onboard',
      description: `When you are ready, hire the preferred ${data.name.toLowerCase().replace(/s$/, '')}.`,
      subtext: 'We handle compliance and contracts.',
      image: 'hire.png',
    },
  ];

  const relatedLinks = related.map((r) => ({
    label: `Hire ${r.name}`,
    href: `/hire-product-managers/${r.slug}`,
  }));

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hire Product Managers', href: '/hire-product-managers' },
    { label: data.name, href: `/hire-product-managers/${slug}` },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Hire ${data.name} in Singapore - HireDeveloper.sg`,
    description: data.metaDescription,
    url: `https://hiredeveloper.sg/hire-product-managers/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.sg',
      url: 'https://hiredeveloper.sg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Singapore',
        addressCountry: 'SG',
      },
    },
    serviceType: `${data.name} Recruitment`,
    areaServed: { '@type': 'Country', name: 'Singapore' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'SGD',
      description: '$0 until you hire',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <Breadcrumb items={breadcrumbItems} />

      <HireHero
        category="product-managers"
        count={data.heroCount}
        description={data.heroDescription}
      />

      <TalentShowcase
        heading={`${data.heroCount.toLocaleString('en-US')}+ ${data.name.toLowerCase()} available:`}
        profiles={profiles}
        category="product managers"
      />

      <StatsTestimonials stats={stats} testimonials={testimonials} />

      <HowItWorksSteps steps={steps} category="product managers" />

      <WhyChooseArc />

      <HiringGuideSection
        heading={`How to Hire Top ${data.name} in Singapore`}
        sections={guideSections}
      />

      <FAQSection category={data.name} />

      <HiringProcessFlowchart industry={`your ${data.name.toLowerCase()} hiring`} />

      <RelatedLinks
        title="Related Product Management Roles"
        links={relatedLinks}
      />

      <RelatedLinks
        title="Also Hire"
        links={[
          { label: 'Software Developers', href: '/hire-developers' },
          { label: 'UX/UI Designers', href: '/hire-designers' },
          { label: 'Project Managers', href: '/hire-project-managers' },
          { label: 'Marketing Experts', href: '/hire-marketers' },
        ]}
      />

      <RelatedLinks
        title="Hiring Resources"
        links={[
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
        ]}
      />

      <FinalCTA
        heading={`Hire ${data.name} in Singapore — Start Today`}
        subheading="Pre-vetted candidates matched in 48 hours. $0 until you hire."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
