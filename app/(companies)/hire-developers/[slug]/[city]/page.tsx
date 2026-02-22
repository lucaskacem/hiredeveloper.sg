import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import DeveloperCityPageContent from '../../../components/DeveloperCityPageContent';
import {
  getSubcategoryBySlug,
  getAllSubcategories,
} from '@/app/data/developer-subcategories';
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
// Top technologies and cities for static generation
// ---------------------------------------------------------------------------

const TOP_TECHNOLOGY_SLUGS = [
  'javascript',
  'typescript',
  'python',
  'java',
  'php',
  'reactjs',
  'nodejs',
  'csharp',
  'golang',
  'ruby',
  'rust',
  'kotlin',
  'swift',
  'full-stack',
  'devops',
  'aws',
  'ai',
  'data-science',
  'nextjs',
  'angular',
  'vuejs',
  'docker',
  'kubernetes',
  'flutter',
  'django',
  'laravel',
  'machine-learning',
  'front-end',
  'back-end',
  'postgresql',
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
  for (const slug of TOP_TECHNOLOGY_SLUGS) {
    const sub = getSubcategoryBySlug(slug);
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

// Deterministic hash for consistent per-page variation
function metaHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const sub = getSubcategoryBySlug(slug);
  const cityCtx = findCityBySlug(citySlug);
  if (!sub || !cityCtx) return {};

  const tech = sub.name;
  const city = cityCtx.city.name;
  const region = cityCtx.region.name;
  const country = cityCtx.country.name;
  const sk = sub.skills;
  const h = metaHash(slug + citySlug);
  const year = new Date().getFullYear();
  const showYear = h % 100 < 30;

  // Varied title patterns — all keep primary keyword "Hire {tech} in {city}"
  const titles = showYear ? [
    `Hire ${tech} in ${city} - ${year} | HireDeveloper.ae`,
    `${tech} in ${city} — Top 2% Vetted Talent ${year} | HireDeveloper.ae`,
    `Hire Freelance ${tech} in ${city} - ${year} | HireDeveloper.ae`,
    `Best ${tech} in ${city}, ${country} - ${year} | HireDeveloper.ae`,
    `Find ${tech} in ${city} — Matched in 48h | HireDeveloper.ae`,
    `${city} ${tech} for Hire - ${year} | HireDeveloper.ae`,
    `Hire Remote ${tech} in ${city} - ${year} | HireDeveloper.ae`,
  ] : [
    `Hire ${tech} in ${city} | HireDeveloper.ae`,
    `${tech} in ${city} — Top 2% Vetted Talent | HireDeveloper.ae`,
    `Hire Freelance ${tech} in ${city} | HireDeveloper.ae`,
    `Best ${tech} in ${city}, ${country} | HireDeveloper.ae`,
    `Find ${tech} in ${city} — Matched in 48h | HireDeveloper.ae`,
    `${city} ${tech} for Hire | HireDeveloper.ae`,
    `Hire Remote ${tech} in ${city} | HireDeveloper.ae`,
  ];

  // Varied description patterns — unique phrasing, same keywords
  const descriptions = [
    `Find vetted freelance ${tech} in ${city}, ${region}. Experts in ${sk.slice(0, 3).join(', ')} ready to start. Get matched in 48 hours, $0 until you hire.`,
    `Hire pre-screened ${tech} based in ${city}. ${sk[0]} and ${sk[1]} specialists matched to your project within 48 hours. Risk-free hiring.`,
    `Looking for ${tech} in ${city}, ${country}? Access the top 2% of vetted talent with ${sk.slice(0, 3).join(', ')} expertise. Start risk-free.`,
    `${city}-based ${tech} available for freelance or full-time. Specialized in ${sk[0]}, ${sk[1]}, and ${sk[2]}. Matched within 48h.`,
    `Connect with top ${tech} in ${city}. Pre-screened for ${sk.slice(0, 4).join(', ')} and more. Flexible hiring for ${country} businesses.`,
    `Hire expert ${tech} from ${city}, ${region}. Vetted ${sk[0]} and ${sk[1]} professionals. $0 upfront — pay only when you hire.`,
    `Need ${tech} in ${city}? Browse our vetted talent pool specializing in ${sk.slice(0, 3).join(', ')}. Interview top candidates within days.`,
  ];

  const title = titles[h % titles.length];
  const description = descriptions[(h + 3) % descriptions.length];

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.ae/hire-developers/${slug}/${citySlug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function TechCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const sub = getSubcategoryBySlug(slug);
  const cityCtx = findCityBySlug(citySlug);
  if (!sub || !cityCtx) notFound();

  const { city, region, country } = cityCtx;
  const populationFormatted = city.population.toLocaleString('en-US');
  const populationFormattedAr = city.population.toLocaleString('ar-SA');
  const pop = city.population;

  const isLargeCity = pop > 500000;
  const isMediumCity = pop > 100000 && pop <= 500000;

  // Sub name Arabic fallback (use metaTitleAr pattern or generic)
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
    url: `https://hiredeveloper.ae/hire-developers/${slug}/${city.slug}`,
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
      a: `With HireDeveloper.ae, you can access vetted ${sub.name} in ${city.name} within 48 hours. Our platform provides access to the top 2% of ${sub.name} specializing in ${sub.skills.slice(0, 3).join(', ')} and other technologies.`,
      aAr: `مع HireDeveloper.ae، يمكنك الوصول إلى ${subNameAr} معتمدين في ${city.nameAr} خلال 48 ساعة. توفر منصتنا الوصول إلى أفضل 2% من ${subNameAr} المتخصصين في ${sub.skills.slice(0, 3).join(' و')} وتقنيات أخرى.`,
    },
    {
      q: `How much does a freelance ${sub.name.replace(' Developers', '').replace(' Engineers', '')} developer cost in ${city.name}?`,
      qAr: `كم تكلفة مطور ${subNameAr} مستقل في ${city.nameAr}؟`,
      a: `Costs vary depending on experience level and specialization. Freelance ${sub.name} in ${city.name} typically charge between $50\u2013$150 per hour. Through HireDeveloper.ae, you can save up to 58% compared to traditional hiring methods.`,
      aAr: `تختلف التكاليف حسب مستوى الخبرة والتخصص. عادةً ما يتقاضى ${subNameAr} المستقلون في ${city.nameAr} بين 50-150 دولاراً في الساعة. من خلال HireDeveloper.ae، يمكنك توفير حتى 58% مقارنة بطرق التوظيف التقليدية.`,
    },
    {
      q: `Which ${sub.skills[0]} skills are most in demand in ${city.name}?`,
      qAr: `ما هي مهارات ${sub.skills[0]} الأكثر طلباً في ${city.nameAr}؟`,
      a: `In ${city.name}, ${sub.name} with expertise in ${sub.skills.slice(0, 5).join(', ')} are in high demand. ${isLargeCity ? `As a major city, ${city.name} offers a wide range of projects, from startups to large enterprises.` : `${city.name} has a growing tech scene with increasing demand for specialized developers.`}`,
      aAr: `في ${city.nameAr}، يزداد الطلب على ${subNameAr} ذوي الخبرة في ${sub.skills.slice(0, 5).join(' و')}. ${isLargeCity ? `كمدينة كبرى، توفر ${city.nameAr} مجموعة واسعة من المشاريع، من الشركات الناشئة إلى المؤسسات الكبيرة.` : `تشهد ${city.nameAr} نمواً في المشهد التقني مع طلب متزايد على المطورين المتخصصين.`}`,
    },
    {
      q: `Can I hire ${sub.name} in ${city.name} for remote work?`,
      qAr: `هل يمكنني توظيف ${subNameAr} في ${city.nameAr} للعمل عن بعد؟`,
      a: `Yes, all ${sub.name} on HireDeveloper.ae specialize in remote work. Developers based in ${city.name} operate in the UTC+4 timezone, are fluent in English, and have experience working with distributed teams and modern collaboration tools.`,
      aAr: `نعم، جميع ${subNameAr} على HireDeveloper.ae متخصصون في العمل عن بعد. يعمل المطورون المقيمون في ${city.nameAr} في المنطقة الزمنية UTC+4، ويجيدون اللغة الإنجليزية، ولديهم خبرة في العمل مع فرق موزعة وأدوات تعاون حديثة.`,
    },
    {
      q: `How quickly can I hire a ${sub.name.replace(' Developers', '').replace(' Engineers', '')} specialist in ${city.name}?`,
      qAr: `ما مدى سرعة توظيف متخصص ${subNameAr} في ${city.nameAr}؟`,
      a: `With HireDeveloper.ae, you receive vetted ${sub.name} profiles from ${city.name} within 48 hours. After the interview process, you can often hire the developer within a week and start collaborating immediately.`,
      aAr: `مع HireDeveloper.ae، تحصل على ملفات ${subNameAr} المعتمدين من ${city.nameAr} خلال 48 ساعة. بعد عملية المقابلة، يمكنك غالباً توظيف المطور خلال أسبوع والبدء بالتعاون فوراً.`,
    },
  ];

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hiredeveloper.ae' },
      { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://hiredeveloper.ae/hire-developers' },
      { '@type': 'ListItem', position: 3, name: sub.name, item: `https://hiredeveloper.ae/hire-developers/${slug}` },
      { '@type': 'ListItem', position: 4, name: city.name, item: `https://hiredeveloper.ae/hire-developers/${slug}/${city.slug}` },
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
          text: `With a population of ${populationFormatted}, ${city.name} is one of the largest cities in the Gulf region. The city is home to numerous tech companies and startups leveraging ${sub.skills.slice(0, 3).join(', ')} \u2014 an ideal breeding ground for top-tier ${sub.name}.`,
          textAr: `بعدد سكان يبلغ ${populationFormattedAr}، تعد ${city.nameAr} واحدة من أكبر المدن في منطقة الخليج. تضم المدينة العديد من شركات التقنية والشركات الناشئة التي تستفيد من ${sub.skills.slice(0, 3).join(' و')} \u2014 بيئة مثالية لتنشئة أفضل ${subNameAr}.`,
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
          text: `In a global hub like ${city.name}, many ${sub.name} work in international teams. They are proficient in agile methodologies, communicate confidently in English, and bring best practices from global projects.`,
          textAr: `في مركز عالمي مثل ${city.nameAr}، يعمل العديد من ${subNameAr} في فرق دولية. يتقنون منهجيات Agile، ويتواصلون بثقة بالإنجليزية، ويجلبون أفضل الممارسات من المشاريع العالمية.`,
        },
      ]
    : isMediumCity
    ? [
        {
          title: `Regional ${sub.skills[0]} Expertise`,
          titleAr: `خبرة إقليمية في ${sub.skills[0]}`,
          text: `With a population of ${populationFormatted}, ${city.name} is an important economic hub in ${region.name}. The local tech community offers specialized ${sub.name} who combine regional market knowledge with modern ${sub.skills[0]} skills.`,
          textAr: `بعدد سكان يبلغ ${populationFormattedAr}، تعد ${city.nameAr} مركزاً اقتصادياً مهماً في ${region.nameAr}. يقدم المجتمع التقني المحلي ${subNameAr} متخصصين يجمعون بين معرفة السوق الإقليمية ومهارات ${sub.skills[0]} الحديثة.`,
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
          text: `Compared to major metropolises, ${sub.name} in ${city.name} often offer excellent value for money while maintaining consistently high technical quality in ${sub.skills[0]} and related technologies.`,
          textAr: `مقارنة بالمدن الكبرى، غالباً ما يقدم ${subNameAr} في ${city.nameAr} قيمة ممتازة مقابل المال مع الحفاظ على جودة تقنية عالية باستمرار في ${sub.skills[0]} والتقنيات ذات الصلة.`,
        },
      ]
    : [
        {
          title: `${sub.skills[0]} Expertise on the Ground`,
          titleAr: `خبرة ${sub.skills[0]} على أرض الواقع`,
          text: `Even in a city like ${city.name} (population ${populationFormatted}), you can find highly qualified ${sub.name} who know the local market in ${country.name} and build modern ${sub.skills[0]} solutions.`,
          textAr: `حتى في مدينة مثل ${city.nameAr} (عدد السكان ${populationFormattedAr})، يمكنك العثور على ${subNameAr} مؤهلين تأهيلاً عالياً يعرفون السوق المحلي في ${country.nameAr} ويبنون حلول ${sub.skills[0]} حديثة.`,
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
  const relatedTechs = getAllSubcategories()
    .filter((s) => s.slug !== slug)
    .slice(0, 12);

  const specLinks = relatedTechs.map((s) => {
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

  // ---- Cross-links: same tech in other cities ----
  const topCities = getAllCitiesSorted()
    .filter((c) => c.city.slug !== city.slug)
    .slice(0, 12);

  const sameTechOtherCities = topCities.map((c) => ({
    label: `${sub.name} in ${c.city.name}`,
    labelAr: `${subNameAr} في ${c.city.nameAr}`,
    href: `/hire-developers/${slug}/${c.city.slug}`,
  }));

  // ---- Cross-links: other techs in same city ----
  const otherTechsSameCity = relatedTechs.slice(0, 8).map((s) => {
    const sNameAr = s.metaTitleAr
      ? s.metaTitleAr.replace(' | HireDeveloper.ae', '').replace('توظيف ', '')
      : s.name;
    return {
      label: `${s.name} in ${city.name}`,
      labelAr: `${sNameAr} في ${city.nameAr}`,
      href: `/hire-developers/${s.slug}/${city.slug}`,
    };
  });

  // ---- Breadcrumb items (bilingual) ----
  const breadcrumbItems = [
    { label: 'Home', labelAr: 'الرئيسية', href: '/' },
    { label: 'Hire Developers', labelAr: 'وظّف مطورين', href: '/hire-developers' },
    { label: sub.name, labelAr: subNameAr, href: `/hire-developers/${slug}` },
    {
      label: city.name,
      labelAr: city.nameAr,
      href: `/hire-developers/${slug}/${city.slug}`,
    },
  ];

  // ---- Hero subtitle (bilingual) ----
  const heroSubtitle = `Find vetted freelance ${sub.name} in ${city.name}, ${region.name}. Our experts in ${sub.skills.slice(0, 3).join(', ')} combine local market insight with first-class technical competence. ${
    isLargeCity
      ? `As a major city, ${city.name} provides access to a diverse pool of ${sub.name} with international project experience.`
      : isMediumCity
      ? `${city.name} is a growing tech hub in ${region.name} with dedicated ${sub.name} who value long-term partnerships.`
      : `${sub.name} from ${city.name} are known for personalized attention and high reliability.`
  }`;

  const heroSubtitleAr = `اعثر على ${subNameAr} مستقلين معتمدين في ${city.nameAr}، ${region.nameAr}. خبراؤنا في ${sub.skills.slice(0, 3).join(' و')} يجمعون بين معرفة السوق المحلي والكفاءة التقنية المتميزة. ${
    isLargeCity
      ? `كمدينة كبرى، توفر ${city.nameAr} الوصول إلى مجموعة متنوعة من ${subNameAr} ذوي خبرة في المشاريع الدولية.`
      : isMediumCity
      ? `${city.nameAr} مركز تقني متنامٍ في ${region.nameAr} مع ${subNameAr} متفانين يقدرون الشراكات طويلة الأمد.`
      : `يُعرف ${subNameAr} من ${city.nameAr} بالاهتمام الشخصي والموثوقية العالية.`
  }`;

  // ---- Skills description (bilingual) ----
  const skillsDescription = `Our ${sub.name} in ${city.name} are proficient in these and many other technologies. Every candidate has been rigorously tested through a multi-step process for technical skills and communication ability.`;
  const skillsDescriptionAr = `${subNameAr} لدينا في ${city.nameAr} يتقنون هذه التقنيات والعديد غيرها. تم اختبار كل مرشح بدقة من خلال عملية متعددة المراحل للمهارات التقنية والقدرة على التواصل.`;

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

      <DeveloperCityPageContent
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
        sameTechOtherCities={sameTechOtherCities}
        otherTechsSameCity={otherTechsSameCity}
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
