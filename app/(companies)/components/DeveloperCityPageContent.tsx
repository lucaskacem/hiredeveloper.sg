'use client';

import { useLanguage } from '@/app/i18n/LanguageContext';
import { useLeadFormModal } from './LeadFormModalProvider';
import Breadcrumb from './Breadcrumb';
import RelatedLinks from './RelatedLinks';
import FinalCTA from './FinalCTA';

// ---------------------------------------------------------------------------
// Types for bilingual data passed from the server component
// ---------------------------------------------------------------------------

interface WhyCard {
  title: string;
  titleAr: string;
  text: string;
  textAr: string;
}

interface FaqItem {
  q: string;
  qAr: string;
  a: string;
  aAr: string;
}

interface SpecLink {
  label: string;
  labelAr: string;
  slug: string;
  citySlug: string;
}

interface CrossLink {
  label: string;
  labelAr: string;
  href: string;
}

interface BreadcrumbItem {
  label: string;
  labelAr: string;
  href: string;
}

export interface DeveloperCityPageContentProps {
  subName: string;
  subNameAr: string;
  cityName: string;
  cityNameAr: string;
  regionName: string;
  regionNameAr: string;
  countryName: string;
  countryNameAr: string;
  slug: string;
  citySlug: string;
  skills: string[];

  heroSubtitle: string;
  heroSubtitleAr: string;

  whyCards: WhyCard[];
  specLinks: SpecLink[];
  faqItems: FaqItem[];

  sameTechOtherCities: CrossLink[];
  otherTechsSameCity: CrossLink[];

  breadcrumbItems: BreadcrumbItem[];

  skillsDescription: string;
  skillsDescriptionAr: string;
  specsIntro: string;
  specsIntroAr: string;
}

export default function DeveloperCityPageContent({
  subName,
  subNameAr,
  cityName,
  cityNameAr,
  regionName,
  regionNameAr,
  slug,
  citySlug,
  skills,
  heroSubtitle,
  heroSubtitleAr,
  whyCards,
  specLinks,
  faqItems,
  sameTechOtherCities,
  otherTechsSameCity,
  breadcrumbItems,
  skillsDescription,
  skillsDescriptionAr,
  specsIntro,
  specsIntroAr,
}: DeveloperCityPageContentProps) {
  const { language } = useLanguage();
  const { openModal } = useLeadFormModal();
  const isAr = language === 'ar';

  const name = isAr ? subNameAr : subName;
  const city = isAr ? cityNameAr : cityName;
  const region = isAr ? regionNameAr : regionName;

  return (
    <>
      <Breadcrumb
        items={breadcrumbItems.map((item) => ({
          label: isAr ? item.labelAr : item.label,
          href: item.href,
        }))}
      />

      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="max-w-[1280px] mx-auto px-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[rgb(23,162,69)] mb-4">
            {skills.slice(0, 3).join(' \u00b7 ')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {isAr ? `توظيف ${name} في ${city}` : `Hire ${subName} in ${cityName}`}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            {isAr ? heroSubtitleAr : heroSubtitle}
          </p>
          <button
            onClick={openModal}
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(23,162,69,0.4)] transition-all duration-200"
          >
            {isAr ? `وظّف ${name}` : `Hire ${subName}`}
          </button>
        </div>
      </section>

      {/* Why hire section */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {isAr
              ? `لماذا توظف ${name} في ${city}؟`
              : `Why Hire ${subName} in ${cityName}?`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {isAr ? card.titleAr : card.title}
                </h3>
                <p className="text-gray-600">
                  {isAr ? card.textAr : card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available developer specializations */}
      <section id="specializations" className="bg-gray-50 py-12">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {isAr
              ? `تخصصات المطورين المتاحة في ${city}`
              : `Available Developer Specializations in ${cityName}`}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {isAr ? specsIntroAr : specsIntro}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specLinks.map((spec) => (
              <a
                key={spec.slug}
                href={`/hire-developers/${spec.slug}/${citySlug}`}
                className="flex items-center justify-center px-4 py-3 bg-white rounded-lg text-sm font-medium text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md transition-all border border-gray-200"
              >
                {isAr ? spec.labelAr : spec.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills overview */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isAr
              ? `المهارات الأساسية لدى ${name} في ${city}`
              : `Core Skills of Our ${subName} in ${cityName}`}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-center mt-6">
              {isAr ? skillsDescriptionAr : skillsDescription}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isAr
              ? `الأسئلة الشائعة: ${name} في ${city}`
              : `Frequently Asked Questions: ${subName} in ${cityName}`}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isAr ? faq.qAr : faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isAr ? faq.aAr : faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links: other techs in same city */}
      <RelatedLinks
        title={
          isAr
            ? `المزيد من المطورين في ${city}`
            : `More Developers in ${cityName}`
        }
        links={otherTechsSameCity.map((l) => ({
          label: isAr ? l.labelAr : l.label,
          href: l.href,
        }))}
      />

      {/* Cross-links: same tech in other cities */}
      <RelatedLinks
        title={
          isAr
            ? `${name} في مدن أخرى`
            : `${subName} in Other Cities`
        }
        links={sameTechOtherCities.map((l) => ({
          label: isAr ? l.labelAr : l.label,
          href: l.href,
        }))}
      />

      <FinalCTA
        heading={
          isAr
            ? `اعثر على أفضل ${name} في ${city}!`
            : `Find Top ${subName} in ${cityName}!`
        }
        subheading={
          isAr
            ? `ابدأ الآن ووظّف أفضل ${name} من ${city}، ${region}.`
            : `Get started now and hire the best freelance ${subName} from ${cityName}, ${regionName}.`
        }
        ctaText={isAr ? 'وظّف موهبة' : 'Hire Talent'}
      />
    </>
  );
}
