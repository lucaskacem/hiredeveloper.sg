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
  getAssistantSubcategoryBySlug,
  getAllAssistantSubcategorySlugs,
  getRelatedAssistantSubcategories,
  generateAssistantProfiles,
  generateAssistantGuideSections,
} from '@/app/data/assistant-subcategories';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAssistantSubcategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getAssistantSubcategoryBySlug(slug);
  if (!data) return {};
  const year = new Date().getFullYear();
  return {
    title: `${data.metaTitle} - ${year} | HireDeveloper.sg`,
    description: `${data.metaDescription} Updated for ${year}.`,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.sg/hire-assistants/${slug}`,
    },
  };
}

export default async function AssistantSubcategoryPage({ params }: Props) {
  const { slug } = await params;
  const data = getAssistantSubcategoryBySlug(slug);
  if (!data) notFound();

  const profiles = generateAssistantProfiles(data.name, data.skills);
  const guideSections = generateAssistantGuideSections(data.name);
  const related = getRelatedAssistantSubcategories(slug, 5);
  const year = new Date().getFullYear();

  const stats = [
    { prefix: 'Up to', value: '75%', label: 'faster hiring' },
    { prefix: 'Up to', value: '60%', label: 'cost savings' },
    { value: `${data.heroCount.toLocaleString('en-US')}+`, label: `${data.name} available` },
  ];

  const testimonials = [
    {
      quote: `The ${data.name.toLowerCase().replace(/s$/, '')} we found through HireDeveloper.sg has been a game-changer for our daily operations.`,
      author: 'L.T.',
      title: 'CEO',
      company: 'Singapore Tech Startup',
      avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
    },
    {
      quote: `We hired a pre-vetted ${data.name.toLowerCase().replace(/s$/, '')} in under a week — the quality and professionalism exceeded expectations.`,
      author: 'M.C.',
      title: 'COO',
      company: 'E-Commerce Company',
      avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: `Tell us about the ideal ${data.name.toLowerCase().replace(/s$/, '')} you need.`,
      subtext: 'Describe the role, tasks, hours, and budget.',
      image: 'request.png',
    },
    {
      number: '02',
      title: 'Interview Top Candidates',
      description: `Receive vetted ${data.name.toLowerCase()} profiles matched to your needs.`,
      subtext: `Select the ${data.name.toLowerCase().replace(/s$/, '')} you would like to interview.`,
      image: 'interview.png',
    },
    {
      number: '03',
      title: 'Hire & Onboard',
      description: `When you are ready, hire your preferred ${data.name.toLowerCase().replace(/s$/, '')}.`,
      subtext: 'We handle compliance and contracts.',
      image: 'hire.png',
    },
  ];

  const relatedLinks = related.map((r) => ({
    label: `Hire ${r.name}`,
    href: `/hire-assistants/${r.slug}`,
  }));

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Hire Assistants', href: '/hire-assistants' },
    { label: data.name, href: `/hire-assistants/${slug}` },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Hire ${data.name} in Singapore - HireDeveloper.sg`,
    description: data.metaDescription,
    url: `https://hiredeveloper.sg/hire-assistants/${slug}`,
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
        category="assistants"
        count={data.heroCount}
        description={data.heroDescription}
      />

      <TalentShowcase
        heading={`${data.heroCount.toLocaleString('en-US')}+ ${data.name.toLowerCase()} available:`}
        profiles={profiles}
        category="assistants"
      />

      <StatsTestimonials stats={stats} testimonials={testimonials} />

      <HowItWorksSteps steps={steps} category="assistants" />

      <WhyChooseArc />

      <HiringGuideSection
        heading={`How to Hire Top ${data.name} in Singapore`}
        sections={guideSections}
      />

      <FAQSection category={data.name} />

      <HiringProcessFlowchart industry={`your ${data.name.toLowerCase()} hiring`} />

      <RelatedLinks
        title="Related Assistant Roles"
        links={relatedLinks}
      />

      <RelatedLinks
        title="Also Hire"
        links={[
          { label: 'Software Developers', href: '/hire-developers' },
          { label: 'Product Managers', href: '/hire-product-managers' },
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
