import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import MarketerCityPageContent from '../../../components/MarketerCityPageContent';
import {
  getMarketingSubcategoryBySlug,
  getAllMarketingSubcategories,
} from '@/app/data/marketer-subcategories';
import { countries, City, Country, Region } from '@/app/data/locations';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface CityWithContext {
  city: City;
  region: Region;
  country: Country;
}

function findCityBySlug(slug: string): CityWithContext | undefined {
  for (const country of countries) {
    for (const region of country.regions) {
      for (const city of region.cities) {
        if (city.slug === slug) {
          return { city, region, country };
        }
      }
    }
  }
  return undefined;
}

/** Return all cities flattened with their context, sorted by population desc. */
function getAllCitiesSorted(): CityWithContext[] {
  const all: CityWithContext[] = [];
  for (const country of countries) {
    for (const region of country.regions) {
      for (const city of region.cities) {
        all.push({ city, region, country });
      }
    }
  }
  return all.sort((a, b) => b.city.population - a.city.population);
}

// ---------------------------------------------------------------------------
// Top marketing specializations and cities for static generation
// ---------------------------------------------------------------------------

const TOP_MARKETING_SLUGS = [
  'digital-marketers',
  'seo-specialists',
  'content-marketers',
  'social-media-marketers',
  'ppc-specialists',
  'email-marketers',
  'growth-hackers',
  'brand-strategists',
  'marketing-analysts',
  'performance-marketers',
  'copywriters',
  'marketing-managers',
  'product-marketers',
  'sem-specialists',
  'inbound-marketers',
  'influencer-marketers',
  'affiliate-marketers',
  'community-managers',
  'pr-specialists',
  'marketing-consultants',
];

const TOP_CITY_COUNT = 35;

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const topCities = getAllCitiesSorted()
    .slice(0, TOP_CITY_COUNT)
    .map((c) => c.city.slug);

  const params: { slug: string; city: string }[] = [];
  for (const slug of TOP_MARKETING_SLUGS) {
    const sub = getMarketingSubcategoryBySlug(slug);
    if (!sub) continue;
    for (const citySlug of topCities) {
      params.push({ slug, city: citySlug });
    }
  }
  return params;
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

function metaHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const sub = getMarketingSubcategoryBySlug(slug);
  const cityCtx = findCityBySlug(citySlug);
  if (!sub || !cityCtx) return {};

  const spec = sub.name;
  const city = cityCtx.city.name;
  const region = cityCtx.region.name;
  const country = cityCtx.country.name;
  const sk = sub.skills;
  const h = metaHash(slug + citySlug);

  const titles = [
    `Hire ${spec} in ${city} | HireDeveloper.ae`,
    `${spec} in ${city} — Top 2% Vetted | HireDeveloper.ae`,
    `Hire Freelance ${spec} in ${city} | HireDeveloper.ae`,
    `Best ${spec} in ${city}, ${country} | HireDeveloper.ae`,
    `Find ${spec} in ${city} — Matched in 48h | HireDeveloper.ae`,
    `${city} ${spec} for Hire | HireDeveloper.ae`,
    `Hire Remote ${spec} in ${city} | HireDeveloper.ae`,
  ];

  const descriptions = [
    `Find vetted freelance ${spec} in ${city}, ${region}. Experts in ${sk.slice(0, 3).join(', ')} ready to start. Matched in 48h, $0 until you hire.`,
    `Hire pre-screened ${spec} based in ${city}. ${sk[0]} and ${sk[1]} specialists matched to your project within 48 hours. Risk-free.`,
    `Looking for ${spec} in ${city}, ${country}? Access the top 2% of vetted marketing talent. ${sk.slice(0, 3).join(', ')} expertise.`,
    `${city}-based ${spec} available for freelance or full-time. Specialized in ${sk[0]}, ${sk[1]}, and ${sk[2]}. Matched within 48h.`,
    `Connect with top ${spec} in ${city}. Pre-screened for ${sk.slice(0, 4).join(', ')} and more. Flexible hiring for ${country} businesses.`,
    `Hire expert ${spec} from ${city}, ${region}. Vetted ${sk[0]} and ${sk[1]} professionals. $0 upfront — pay only when you hire.`,
    `Need ${spec} in ${city}? Browse vetted talent specializing in ${sk.slice(0, 3).join(', ')}. Interview top candidates within days.`,
  ];

  const title = titles[h % titles.length];
  const description = descriptions[(h + 3) % descriptions.length];

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.ae/hire-marketers/${slug}/${citySlug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function MarketingCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const sub = getMarketingSubcategoryBySlug(slug);
  const cityCtx = findCityBySlug(citySlug);
  if (!sub || !cityCtx) notFound();

  const { city, region, country } = cityCtx;
  const populationFormatted = city.population.toLocaleString('en-US');
  const populationFormattedAr = city.population.toLocaleString('ar-SA');
  const pop = city.population;

  const isLargeCity = pop > 500000;
  const isMediumCity = pop > 100000 && pop <= 500000;

  // Sub name Arabic fallback
  const subNameAr = sub.metaTitleAr
    ? sub.metaTitleAr.replace(' | HireDeveloper.ae', '').replace('توظيف ', '')
    : sub.name;

  // ---- JSON-LD (always in English for search engines) ----
  const countryCode =
    country.slug === 'uae'
      ? 'AE'
      : country.slug === 'saudi-arabia'
      ? 'SA'
      : country.slug === 'qatar'
      ? 'QA'
      : country.slug === 'bahrain'
      ? 'BH'
      : country.slug === 'kuwait'
      ? 'KW'
      : country.slug === 'oman'
      ? 'OM'
      : 'AE';

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Hire ${sub.name} in ${city.name} - HireDeveloper.ae`,
    description: `Hire freelance ${sub.name} in ${city.name}. ${city.description}`,
    url: `https://hiredeveloper.ae/hire-marketers/${slug}/${city.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.ae',
      url: 'https://hiredeveloper.ae',
    },
    serviceType: `${sub.name} Recruitment`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressRegion: region.name,
        addressCountry: countryCode,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.lat,
        longitude: city.lng,
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: '$0 until you hire',
    },
  };

  // ---- FAQ Data (bilingual) ----
  const faqItems = [
    {
      q: `How do I find ${sub.name} in ${city.name}?`,
      qAr: `كيف أجد ${subNameAr} في ${city.nameAr}؟`,
      a: `With HireDeveloper.ae, you can access vetted ${sub.name} in ${city.name} within 48 hours. Our platform provides access to the top 2% of ${sub.name} specializing in ${sub.skills.slice(0, 3).join(', ')} and other marketing disciplines.`,
      aAr: `مع HireDeveloper.ae، يمكنك الوصول إلى ${subNameAr} معتمدين في ${city.nameAr} خلال 48 ساعة. توفر منصتنا الوصول إلى أفضل 2% من ${subNameAr} المتخصصين في ${sub.skills.slice(0, 3).join(' و')} وتخصصات تسويقية أخرى.`,
    },
    {
      q: `How much does a freelance ${sub.name.replace(' Marketers', '').replace(' Specialists', '')} marketer cost in ${city.name}?`,
      qAr: `كم تكلفة مسوّق ${subNameAr} مستقل في ${city.nameAr}؟`,
      a: `Costs vary depending on experience level and specialization. Freelance ${sub.name} in ${city.name} typically charge between $50\u2013$150 per hour. Through HireDeveloper.ae, you can save up to 58% compared to traditional hiring methods.`,
      aAr: `تختلف التكاليف حسب مستوى الخبرة والتخصص. عادةً ما يتقاضى ${subNameAr} المستقلون في ${city.nameAr} بين 50-150 دولاراً في الساعة. من خلال HireDeveloper.ae، يمكنك توفير حتى 58% مقارنة بطرق التوظيف التقليدية.`,
    },
    {
      q: `Which ${sub.skills[0]} skills are most in demand in ${city.name}?`,
      qAr: `ما هي مهارات ${sub.skills[0]} الأكثر طلباً في ${city.nameAr}؟`,
      a: `In ${city.name}, ${sub.name} with expertise in ${sub.skills.slice(0, 5).join(', ')} are in high demand. ${isLargeCity ? `As a major city, ${city.name} offers a wide range of projects, from startups to large enterprises.` : `${city.name} has a growing business scene with increasing demand for specialized marketers.`}`,
      aAr: `في ${city.nameAr}، يزداد الطلب على ${subNameAr} ذوي الخبرة في ${sub.skills.slice(0, 5).join(' و')}. ${isLargeCity ? `كمدينة كبرى، توفر ${city.nameAr} مجموعة واسعة من المشاريع، من الشركات الناشئة إلى المؤسسات الكبيرة.` : `تشهد ${city.nameAr} نمواً في المشهد التجاري مع طلب متزايد على المسوّقين المتخصصين.`}`,
    },
    {
      q: `Can I hire ${sub.name} in ${city.name} for remote work?`,
      qAr: `هل يمكنني توظيف ${subNameAr} في ${city.nameAr} للعمل عن بعد؟`,
      a: `Yes, all ${sub.name} on HireDeveloper.ae specialize in remote work. Marketers based in ${city.name} operate in the UTC+4 timezone, are fluent in English, and have experience working with distributed teams and modern collaboration tools.`,
      aAr: `نعم، جميع ${subNameAr} على HireDeveloper.ae متخصصون في العمل عن بعد. يعمل المسوّقون المقيمون في ${city.nameAr} في المنطقة الزمنية UTC+4، ويجيدون اللغة الإنجليزية، ولديهم خبرة في العمل مع فرق موزعة وأدوات تعاون حديثة.`,
    },
    {
      q: `How quickly can I hire a ${sub.name.replace(' Marketers', '').replace(' Specialists', '')} specialist in ${city.name}?`,
      qAr: `ما مدى سرعة توظيف متخصص ${subNameAr} في ${city.nameAr}؟`,
      a: `With HireDeveloper.ae, you receive vetted ${sub.name} profiles from ${city.name} within 48 hours. After the interview process, you can often hire the marketer within a week and start collaborating immediately.`,
      aAr: `مع HireDeveloper.ae، تحصل على ملفات ${subNameAr} المعتمدين من ${city.nameAr} خلال 48 ساعة. بعد عملية المقابلة، يمكنك غالباً توظيف المسوّق خلال أسبوع والبدء بالتعاون فوراً.`,
    },
  ];

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hiredeveloper.ae' },
      { '@type': 'ListItem', position: 2, name: 'Hire Marketers', item: 'https://hiredeveloper.ae/hire-marketers' },
      { '@type': 'ListItem', position: 3, name: sub.name, item: `https://hiredeveloper.ae/hire-marketers/${slug}` },
      { '@type': 'ListItem', position: 4, name: city.name, item: `https://hiredeveloper.ae/hire-marketers/${slug}/${city.slug}` },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  // ---- Why-hire cards (bilingual) ----
  const whyCards = isLargeCity
    ? [
        {
          title: `Thriving ${sub.skills[0]} Talent Ecosystem`,
          titleAr: `منظومة مواهب ${sub.skills[0]} مزدهرة`,
          text: `With a population of ${populationFormatted}, ${city.name} is one of the largest cities in the Gulf region. The city is home to numerous companies and agencies leveraging ${sub.skills.slice(0, 3).join(', ')} \u2014 an ideal breeding ground for top-tier ${sub.name}.`,
          textAr: `بعدد سكان يبلغ ${populationFormattedAr}، تعد ${city.nameAr} واحدة من أكبر المدن في منطقة الخليج. تضم المدينة العديد من الشركات والوكالات التي تستفيد من ${sub.skills.slice(0, 3).join(' و')} \u2014 بيئة مثالية لتنشئة أفضل ${subNameAr}.`,
        },
        {
          title: 'Deep Industry Knowledge',
          titleAr: 'معرفة عميقة بالقطاع',
          text: `${sub.name} in ${city.name} bring experience from diverse industries \u2014 from fintech and e-commerce to logistics and smart city initiatives. This industry-specific knowledge, combined with ${sub.skills[0]} expertise, makes them valuable partners for demanding projects.`,
          textAr: `يجلب ${subNameAr} في ${city.nameAr} خبرة من قطاعات متنوعة \u2014 من التكنولوجيا المالية والتجارة الإلكترونية إلى الخدمات اللوجستية ومبادرات المدن الذكية. هذه المعرفة المتخصصة بالقطاع، مع خبرة ${sub.skills[0]}، تجعلهم شركاء قيّمين للمشاريع المتطلبة.`,
        },
        {
          title: 'International Project Experience',
          titleAr: 'خبرة في المشاريع الدولية',
          text: `In a global hub like ${city.name}, many ${sub.name} work in international teams. They are proficient in agile methodologies, communicate confidently in English, and bring best practices from global campaigns.`,
          textAr: `في مركز عالمي مثل ${city.nameAr}، يعمل العديد من ${subNameAr} في فرق دولية. يتقنون المنهجيات الرشيقة، ويتواصلون بثقة بالإنجليزية، ويجلبون أفضل الممارسات من الحملات العالمية.`,
        },
      ]
    : isMediumCity
    ? [
        {
          title: `Regional ${sub.skills[0]} Expertise`,
          titleAr: `خبرة إقليمية في ${sub.skills[0]}`,
          text: `With a population of ${populationFormatted}, ${city.name} is an important economic hub in ${region.name}. The local marketing community offers specialized ${sub.name} who combine regional market knowledge with modern ${sub.skills[0]} skills.`,
          textAr: `بعدد سكان يبلغ ${populationFormattedAr}، تعد ${city.nameAr} مركزاً اقتصادياً مهماً في ${region.nameAr}. يقدم المجتمع التسويقي المحلي ${subNameAr} متخصصين يجمعون بين معرفة السوق الإقليمية ومهارات ${sub.skills[0]} الحديثة.`,
        },
        {
          title: 'Dedicated Specialists',
          titleAr: 'متخصصون متفانون',
          text: `${sub.name} from mid-sized cities like ${city.name} are known for high project commitment and long-term collaboration. They bring focused ${sub.skills.slice(0, 2).join(' and ')} expertise to your projects.`,
          textAr: `يُعرف ${subNameAr} من المدن المتوسطة مثل ${city.nameAr} بالتزامهم العالي بالمشاريع والتعاون طويل الأمد. يجلبون خبرة مركّزة في ${sub.skills.slice(0, 2).join(' و')} لمشاريعك.`,
        },
        {
          title: 'Excellent Value for Money',
          titleAr: 'قيمة ممتازة مقابل المال',
          text: `Compared to major metropolises, ${sub.name} in ${city.name} often offer excellent value for money while maintaining consistently high quality in ${sub.skills[0]} and related marketing disciplines.`,
          textAr: `مقارنة بالمدن الكبرى، غالباً ما يقدم ${subNameAr} في ${city.nameAr} قيمة ممتازة مقابل المال مع الحفاظ على جودة عالية باستمرار في ${sub.skills[0]} والتخصصات التسويقية ذات الصلة.`,
        },
      ]
    : [
        {
          title: `${sub.skills[0]} Expertise on the Ground`,
          titleAr: `خبرة ${sub.skills[0]} على أرض الواقع`,
          text: `Even in a city like ${city.name} (population ${populationFormatted}), you can find highly qualified ${sub.name} who know the local market in ${country.name} and deliver modern ${sub.skills[0]} solutions.`,
          textAr: `حتى في مدينة مثل ${city.nameAr} (عدد السكان ${populationFormattedAr})، يمكنك العثور على ${subNameAr} مؤهلين تأهيلاً عالياً يعرفون السوق المحلي في ${country.nameAr} ويقدمون حلول ${sub.skills[0]} حديثة.`,
        },
        {
          title: 'Personalized Collaboration',
          titleAr: 'تعاون شخصي',
          text: `${sub.name} from ${city.name} maintain close professional networks and offer personalized attention to your ${sub.skills.slice(0, 2).join(' and ')} projects \u2014 with high reliability and focus.`,
          textAr: `يحافظ ${subNameAr} من ${city.nameAr} على شبكات مهنية وثيقة ويقدمون اهتماماً شخصياً لمشاريع ${sub.skills.slice(0, 2).join(' و')} الخاصة بك \u2014 بموثوقية وتركيز عاليين.`,
        },
        {
          title: 'Same Timezone, Clear Communication',
          titleAr: 'نفس المنطقة الزمنية، تواصل واضح',
          text: `${city.name} is in the UTC+4 timezone. Your ${sub.name} are fluent in English and work seamlessly with your team \u2014 no language barriers, no timezone issues.`,
          textAr: `تقع ${city.nameAr} في المنطقة الزمنية UTC+4. ${subNameAr} لديك يجيدون الإنجليزية ويعملون بسلاسة مع فريقك \u2014 بدون حواجز لغوية أو مشاكل في المنطقة الزمنية.`,
        },
      ];

  // ---- Specializations in this city (related subcategories) ----
  const relatedSpecs = getAllMarketingSubcategories()
    .filter((s) => s.slug !== slug)
    .slice(0, 12);

  const specLinks = relatedSpecs.map((s) => {
    const sNameAr = s.metaTitleAr
      ? s.metaTitleAr.replace(' | HireDeveloper.ae', '').replace('توظيف ', '')
      : s.name;
    return {
      label: `${s.name} in ${city.name}`,
      labelAr: `${sNameAr} في ${city.nameAr}`,
      slug: s.slug,
      citySlug: city.slug,
    };
  });

  // ---- Cross-links: same specialization in other cities ----
  const topCities = getAllCitiesSorted()
    .filter((c) => c.city.slug !== city.slug)
    .slice(0, 12);

  const sameSpecOtherCities = topCities.map((c) => ({
    label: `${sub.name} in ${c.city.name}`,
    labelAr: `${subNameAr} في ${c.city.nameAr}`,
    href: `/hire-marketers/${slug}/${c.city.slug}`,
  }));

  // ---- Cross-links: other specializations in same city ----
  const otherSpecsSameCity = relatedSpecs.slice(0, 8).map((s) => {
    const sNameAr = s.metaTitleAr
      ? s.metaTitleAr.replace(' | HireDeveloper.ae', '').replace('توظيف ', '')
      : s.name;
    return {
      label: `${s.name} in ${city.name}`,
      labelAr: `${sNameAr} في ${city.nameAr}`,
      href: `/hire-marketers/${s.slug}/${city.slug}`,
    };
  });

  // ---- Breadcrumb items (bilingual) ----
  const breadcrumbItems = [
    { label: 'Home', labelAr: 'الرئيسية', href: '/' },
    { label: 'Hire Marketers', labelAr: 'وظّف مسوّقين', href: '/hire-marketers' },
    { label: sub.name, labelAr: subNameAr, href: `/hire-marketers/${slug}` },
    {
      label: city.name,
      labelAr: city.nameAr,
      href: `/hire-marketers/${slug}/${city.slug}`,
    },
  ];

  // ---- Hero subtitle (bilingual) ----
  const heroSubtitle = `Find vetted freelance ${sub.name} in ${city.name}, ${region.name}. Our experts in ${sub.skills.slice(0, 3).join(', ')} combine local market insight with first-class marketing competence. ${
    isLargeCity
      ? `As a major city, ${city.name} provides access to a diverse pool of ${sub.name} with international project experience.`
      : isMediumCity
      ? `${city.name} is a growing business hub in ${region.name} with dedicated ${sub.name} who value long-term partnerships.`
      : `${sub.name} from ${city.name} are known for personalized attention and high reliability.`
  }`;

  const heroSubtitleAr = `اعثر على ${subNameAr} مستقلين معتمدين في ${city.nameAr}، ${region.nameAr}. خبراؤنا في ${sub.skills.slice(0, 3).join(' و')} يجمعون بين معرفة السوق المحلي والكفاءة التسويقية المتميزة. ${
    isLargeCity
      ? `كمدينة كبرى، توفر ${city.nameAr} الوصول إلى مجموعة متنوعة من ${subNameAr} ذوي خبرة في المشاريع الدولية.`
      : isMediumCity
      ? `${city.nameAr} مركز تجاري متنامٍ في ${region.nameAr} مع ${subNameAr} متفانين يقدرون الشراكات طويلة الأمد.`
      : `يُعرف ${subNameAr} من ${city.nameAr} بالاهتمام الشخصي والموثوقية العالية.`
  }`;

  // ---- Skills description (bilingual) ----
  const skillsDescription = `Our ${sub.name} in ${city.name} are proficient in these and many other marketing disciplines. Every candidate has been rigorously tested through a multi-step process for marketing skills and communication ability.`;
  const skillsDescriptionAr = `${subNameAr} لدينا في ${city.nameAr} يتقنون هذه التخصصات التسويقية والعديد غيرها. تم اختبار كل مرشح بدقة من خلال عملية متعددة المراحل للمهارات التسويقية والقدرة على التواصل.`;

  // ---- Specs intro (bilingual) ----
  const specsIntro = `In addition to ${sub.name}, you can find other specialists in ${city.name} through HireDeveloper.ae:`;
  const specsIntroAr = `بالإضافة إلى ${subNameAr}، يمكنك العثور على متخصصين آخرين في ${city.nameAr} من خلال HireDeveloper.ae:`;

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Header />

      <MarketerCityPageContent
        subName={sub.name}
        subNameAr={subNameAr}
        cityName={city.name}
        cityNameAr={city.nameAr}
        regionName={region.name}
        regionNameAr={region.nameAr}
        countryName={country.name}
        countryNameAr={country.nameAr}
        slug={slug}
        citySlug={city.slug}
        skills={sub.skills}
        heroSubtitle={heroSubtitle}
        heroSubtitleAr={heroSubtitleAr}
        whyCards={whyCards}
        specLinks={specLinks}
        faqItems={faqItems}
        sameSpecOtherCities={sameSpecOtherCities}
        otherSpecsSameCity={otherSpecsSameCity}
        breadcrumbItems={breadcrumbItems}
        skillsDescription={skillsDescription}
        skillsDescriptionAr={skillsDescriptionAr}
        specsIntro={specsIntro}
        specsIntroAr={specsIntroAr}
      />

      <Footer />
    </div>
  );
}
