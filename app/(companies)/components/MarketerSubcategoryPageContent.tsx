'use client';

import WhyChooseArc from '@/app/components/WhyChooseArc';
import HireHero from './HireHero';
import TalentShowcase from './TalentShowcase';
import StatsTestimonials from './StatsTestimonials';
import HowItWorksSteps from './HowItWorksSteps';
import HiringGuideSection from './HiringGuideSection';
import FAQSection from './FAQSection';
import FinalCTA from './FinalCTA';
import Breadcrumb from './Breadcrumb';
import RelatedLinks from './RelatedLinks';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Profile {
  name: string;
  location: string;
  badge: string;
  bio: string;
  skills: string[];
  availability: string;
  previousCompany: { name: string; logo: string };
  avatar: string;
}

interface GuideSection {
  title: string;
  subsections: { subtitle: string; content: string; questions?: string[] }[];
}

interface Link {
  label: string;
  href: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  subtext: string;
  image: string;
}

interface Stat {
  prefix?: string;
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}

export interface MarketerSubcategoryPageContentProps {
  dataName: string;
  heroCount: number;
  heroDescription: string;
  slug: string;
  profiles: Profile[];
  guideSections: GuideSection[];
  stats: Stat[];
  testimonials: Testimonial[];
  steps: Step[];
  relatedLinks: Link[];
  locationLinks: Link[];
  cityLinks: Link[];
  breadcrumbItems: { label: string; href: string }[];
}

export default function MarketerSubcategoryPageContent({
  dataName,
  heroCount,
  heroDescription,
  slug,
  profiles,
  guideSections,
  stats,
  testimonials,
  steps,
  relatedLinks,
  locationLinks,
  cityLinks,
  breadcrumbItems,
}: MarketerSubcategoryPageContentProps) {
  return (
    <>
      <Breadcrumb
        items={breadcrumbItems.map((item) => ({
          label: item.label,
          href: item.href,
        }))}
      />

      <HireHero
        category="marketers"
        count={heroCount}
        description={heroDescription}
      />

      <TalentShowcase
        heading={`${heroCount.toLocaleString('en-US')} remote ${dataName} available:`}
        profiles={profiles}
        category="marketers"
      />

      <StatsTestimonials
        stats={stats.map((s) => ({
          prefix: s.prefix,
          value: s.value,
          label: s.label,
        }))}
        testimonials={testimonials.map((t) => ({
          quote: t.quote,
          author: t.author,
          title: t.title,
          company: t.company,
          avatar: t.avatar,
        }))}
      />

      <HowItWorksSteps
        steps={steps.map((s) => ({
          number: s.number,
          title: s.title,
          description: s.description,
          subtext: s.subtext,
          image: s.image,
        }))}
        category="marketers"
      />

      <WhyChooseArc />

      <HiringGuideSection
        heading={`How to Hire Top ${dataName}`}
        sections={guideSections}
      />

      <FAQSection category={dataName} />

      <RelatedLinks
        title="Related Specializations"
        links={relatedLinks}
      />

      <RelatedLinks
        title={`${dataName} by Location`}
        links={locationLinks}
      />

      <RelatedLinks
        title={`${dataName} in Top Cities`}
        links={cityLinks}
      />

      <RelatedLinks
        title="Also Hire Developers"
        links={[
          { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
          { label: 'Python Developers', href: '/hire-developers/python' },
          { label: 'React Developers', href: '/hire-developers/reactjs' },
          { label: 'All Developer Specializations', href: '/hire-developers' },
        ]}
      />

      <RelatedLinks
        title="Hiring Resources"
        links={[
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'Finding Freelance Developers: 21+ Tips', href: '/employer-blog/how-to-find-developers' },
          { label: 'Remote Technical Interview Guide', href: '/employer-blog/how-to-conduct-a-remote-technical-interview' },
        ]}
      />

      <FinalCTA
        heading={`Your next ${dataName} is just around the corner!`}
        subheading="Start risk-free."
        ctaText="Hire Talent"
      />
    </>
  );
}
