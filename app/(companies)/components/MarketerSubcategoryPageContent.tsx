'use client';

import { useLanguage } from '@/app/i18n/LanguageContext';
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

interface BilingualLink {
  label: string;
  labelAr: string;
  href: string;
}

interface Step {
  number: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  subtext: string;
  subtextAr: string;
  image: string;
}

interface Stat {
  prefix?: string;
  prefixAr?: string;
  value: string;
  label: string;
  labelAr: string;
}

interface Testimonial {
  quote: string;
  quoteAr: string;
  author: string;
  title: string;
  titleAr: string;
  company: string;
  avatar: string;
}

export interface MarketerSubcategoryPageContentProps {
  dataName: string;
  dataNameAr: string;
  heroCount: number;
  heroDescription: string;
  heroDescriptionAr: string;
  slug: string;
  profiles: Profile[];
  guideSections: GuideSection[];
  stats: Stat[];
  testimonials: Testimonial[];
  steps: Step[];
  relatedLinks: BilingualLink[];
  locationLinks: BilingualLink[];
  cityLinks: BilingualLink[];
  breadcrumbItems: { label: string; labelAr: string; href: string }[];
}

export default function MarketerSubcategoryPageContent({
  dataName,
  dataNameAr,
  heroCount,
  heroDescription,
  heroDescriptionAr,
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
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const name = isAr ? dataNameAr : dataName;

  return (
    <>
      <Breadcrumb
        items={breadcrumbItems.map((item) => ({
          label: isAr ? item.labelAr : item.label,
          href: item.href,
        }))}
      />

      <HireHero
        category="marketers"
        count={heroCount}
        description={isAr ? heroDescriptionAr : heroDescription}
      />

      <TalentShowcase
        heading={
          isAr
            ? `${heroCount.toLocaleString('ar-SA')}+ ${dataNameAr} متاحون عن بعد:`
            : `${heroCount.toLocaleString('en-US')} remote ${dataName} available:`
        }
        profiles={profiles}
        category="marketers"
      />

      <StatsTestimonials
        stats={stats.map((s) => ({
          prefix: isAr ? s.prefixAr : s.prefix,
          value: s.value,
          label: isAr ? s.labelAr : s.label,
        }))}
        testimonials={testimonials.map((t) => ({
          quote: isAr ? t.quoteAr : t.quote,
          author: t.author,
          title: isAr ? t.titleAr : t.title,
          company: t.company,
          avatar: t.avatar,
        }))}
      />

      <HowItWorksSteps
        steps={steps.map((s) => ({
          number: s.number,
          title: isAr ? s.titleAr : s.title,
          description: isAr ? s.descriptionAr : s.description,
          subtext: isAr ? s.subtextAr : s.subtext,
          image: s.image,
        }))}
        category="marketers"
      />

      <WhyChooseArc />

      <HiringGuideSection
        heading={isAr ? `كيف توظف أفضل ${dataNameAr}` : `How to Hire Top ${dataName}`}
        sections={guideSections}
      />

      <FAQSection category={dataName} />

      <RelatedLinks
        title={isAr ? 'تخصصات ذات صلة' : 'Related Specializations'}
        links={relatedLinks.map((l) => ({
          label: isAr ? l.labelAr : l.label,
          href: l.href,
        }))}
      />

      <RelatedLinks
        title={isAr ? `${name} حسب الموقع` : `${dataName} by Location`}
        links={locationLinks.map((l) => ({
          label: isAr ? l.labelAr : l.label,
          href: l.href,
        }))}
      />

      <RelatedLinks
        title={isAr ? `${name} في أبرز المدن` : `${dataName} in Top Cities`}
        links={cityLinks.map((l) => ({
          label: isAr ? l.labelAr : l.label,
          href: l.href,
        }))}
      />

      <RelatedLinks
        title={isAr ? 'وظّف مطورين أيضاً' : 'Also Hire Developers'}
        links={
          isAr
            ? [
                { label: 'مطورو JavaScript', href: '/hire-developers/javascript' },
                { label: 'مطورو Python', href: '/hire-developers/python' },
                { label: 'مطورو React', href: '/hire-developers/reactjs' },
                { label: 'جميع تخصصات التطوير', href: '/hire-developers' },
              ]
            : [
                { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
                { label: 'Python Developers', href: '/hire-developers/python' },
                { label: 'React Developers', href: '/hire-developers/reactjs' },
                { label: 'All Developer Specializations', href: '/hire-developers' },
              ]
        }
      />

      <RelatedLinks
        title={isAr ? 'موارد التوظيف' : 'Hiring Resources'}
        links={
          isAr
            ? [
                { label: 'حاسبة الرواتب', href: '/tools/salary-calculator' },
                { label: 'مولّد أسئلة المقابلات', href: '/tools/interview-questions' },
                { label: 'إيجاد مطورين مستقلين: 21+ نصيحة', href: '/employer-blog/how-to-find-developers' },
                { label: 'دليل المقابلة التقنية عن بعد', href: '/employer-blog/how-to-conduct-a-remote-technical-interview' },
              ]
            : [
                { label: 'Salary Calculator', href: '/tools/salary-calculator' },
                { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
                { label: 'Finding Freelance Developers: 21+ Tips', href: '/employer-blog/how-to-find-developers' },
                { label: 'Remote Technical Interview Guide', href: '/employer-blog/how-to-conduct-a-remote-technical-interview' },
              ]
        }
      />

      <FinalCTA
        heading={
          isAr
            ? `${dataNameAr} التاليون لديك على بعد خطوة!`
            : `Your next ${dataName} is just around the corner!`
        }
        subheading={isAr ? 'ابدأ بدون مخاطر.' : 'Start risk-free.'}
        ctaText={isAr ? 'وظّف موهبة' : 'Hire Talent'}
      />
    </>
  );
}
