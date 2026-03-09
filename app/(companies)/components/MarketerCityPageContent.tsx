'use client';

import Breadcrumb from './Breadcrumb';
import RelatedLinks from './RelatedLinks';
import FinalCTA from './FinalCTA';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface WhyCard {
  title: string;
  text: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface SpecLink {
  label: string;
  slug: string;
  citySlug: string;
}

interface CrossLink {
  label: string;
  href: string;
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface MarketerCityPageContentProps {
  subName: string;
  cityName: string;
  regionName: string;
  countryName: string;
  slug: string;
  citySlug: string;
  skills: string[];

  heroSubtitle: string;

  whyCards: WhyCard[];
  specLinks: SpecLink[];
  faqItems: FaqItem[];

  sameSpecOtherCities: CrossLink[];
  otherSpecsSameCity: CrossLink[];

  breadcrumbItems: BreadcrumbItem[];

  skillsDescription: string;
  specsIntro: string;
}

export default function MarketerCityPageContent({
  subName,
  cityName,
  regionName,
  slug,
  citySlug,
  skills,
  heroSubtitle,
  whyCards,
  specLinks,
  faqItems,
  sameSpecOtherCities,
  otherSpecsSameCity,
  breadcrumbItems,
  skillsDescription,
  specsIntro,
}: MarketerCityPageContentProps) {
  return (
    <>
      <Breadcrumb
        items={breadcrumbItems.map((item) => ({
          label: item.label,
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
            {`Hire ${subName} in ${cityName}`}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            {heroSubtitle}
          </p>
          <a
            href="#specializations"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(23,162,69,0.4)] transition-all duration-200"
          >
            {`Hire ${subName}`}
          </a>
        </div>
      </section>

      {/* Why hire section */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {`Why Hire ${subName} in ${cityName}?`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available marketer specializations */}
      <section id="specializations" className="bg-gray-50 py-12">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {`Available Marketer Specializations in ${cityName}`}
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {specsIntro}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specLinks.map((spec) => (
              <a
                key={spec.slug}
                href={`/hire-marketers/${spec.slug}/${citySlug}`}
                className="flex items-center justify-center px-4 py-3 bg-white rounded-lg text-sm font-medium text-gray-700 hover:text-[rgb(0,159,255)] hover:shadow-md transition-all border border-gray-200"
              >
                {spec.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills overview */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {`Core Skills of Our ${subName} in ${cityName}`}
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
              {skillsDescription}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {`Frequently Asked Questions: ${subName} in ${cityName}`}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links: other specializations in same city */}
      <RelatedLinks
        title={`More Marketers in ${cityName}`}
        links={otherSpecsSameCity.map((l) => ({
          label: l.label,
          href: l.href,
        }))}
      />

      {/* Cross-links: same specialization in other cities */}
      <RelatedLinks
        title={`${subName} in Other Cities`}
        links={sameSpecOtherCities.map((l) => ({
          label: l.label,
          href: l.href,
        }))}
      />

      <FinalCTA
        heading={`Find Top ${subName} in ${cityName}!`}
        subheading={`Get started now and hire the best freelance ${subName} from ${cityName}, ${regionName}.`}
        ctaText="Hire Talent"
      />
    </>
  );
}
