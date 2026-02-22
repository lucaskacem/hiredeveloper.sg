import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import DeveloperSubcategoryPageContent from '../../components/DeveloperSubcategoryPageContent';
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
  const year = new Date().getFullYear();
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
  const showYear = Math.abs(h) % 100 < 30;
  return {
    title: showYear ? `Hire ${data.name} in UAE - ${year} | HireDeveloper.ae` : `Hire ${data.name} in UAE | HireDeveloper.ae`,
    description: showYear ? `${data.metaDescription} Updated for ${year}.` : data.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://hiredeveloper.ae/hire-developers/${slug}`,
    },
  };
}

export default async function DeveloperSubcategoryPage({ params }: Props) {
  const { slug } = await params;
  const data = getSubcategoryBySlug(slug);
  if (!data) notFound();

  const profiles = generateProfiles(data.name, data.skills);
  const guideSections = generateGuideSections(data.name);
  const related = getRelatedSubcategories(slug, 8);

  // Shuffle profile order monthly using seeded random (year + month + slug)
  const now = new Date();
  const shuffleSeed = `${now.getFullYear()}-${now.getMonth()}-${slug}`;
  let seedHash = 0;
  for (let i = 0; i < shuffleSeed.length; i++) {
    seedHash = ((seedHash << 5) - seedHash + shuffleSeed.charCodeAt(i)) | 0;
  }
  seedHash = Math.abs(seedHash);
  const shuffledProfiles = [...profiles].sort((a, b) => {
    const ha = Math.abs(((seedHash << 5) - seedHash + a.name.charCodeAt(0)) | 0);
    const hb = Math.abs(((seedHash << 5) - seedHash + b.name.charCodeAt(0)) | 0);
    return ha - hb;
  });

  // Arabic name derived from metaTitleAr
  const dataNameAr = data.metaTitleAr
    ? data.metaTitleAr.replace(' | HireDeveloper.ae', '').replace('توظيف ', '')
    : data.name;

  // Arabic hero description fallback
  const heroDescriptionAr = data.metaDescriptionAr || data.heroDescription;

  const stats = [
    { prefix: 'Up to', prefixAr: 'حتى', value: '75%', label: 'faster hiring', labelAr: 'توظيف أسرع' },
    { prefix: 'Up to', prefixAr: 'حتى', value: '58%', label: 'cost savings', labelAr: 'توفير في التكاليف' },
    { value: `${data.heroCount.toLocaleString('en-US')}+`, label: `${data.name} available`, labelAr: `${dataNameAr} متاحون` },
  ];

  const testimonials = [
    {
      quote: `The quality of ${data.name} at HireDeveloper.ae is outstanding. We found the perfect candidate in less than a week.`,
      quoteAr: `جودة ${dataNameAr} في HireDeveloper.ae ممتازة. وجدنا المرشح المثالي في أقل من أسبوع.`,
      author: 'M.G.',
      title: 'CEO',
      titleAr: 'الرئيس التنفيذي',
      company: 'SaaS Company',
      avatar: '',
    },
    {
      quote: 'I found former founders, senior engineers, and even CMOs in less than 48 hours.',
      quoteAr: 'وجدت مؤسسين سابقين ومهندسين كبار وحتى مدراء تسويق في أقل من 48 ساعة.',
      author: 'C.B.',
      title: 'Founder & CEO',
      titleAr: 'المؤسس والرئيس التنفيذي',
      company: 'Tech Startup',
      avatar: '',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Request',
      titleAr: 'الطلب',
      description: `Describe the ideal ${data.name} you are looking for.`,
      descriptionAr: `صِف ${dataNameAr} المثاليين الذين تبحث عنهم.`,
      subtext: 'Tell us about the role, technical requirements, and budget.',
      subtextAr: 'أخبرنا عن الدور والمتطلبات التقنية والميزانية.',
      image: 'request.png',
    },
    {
      number: '02',
      title: 'Interview',
      titleAr: 'المقابلة',
      description: `Receive vetted ${data.name} profiles that match your requirements.`,
      descriptionAr: `احصل على ملفات ${dataNameAr} المعتمدين التي تطابق متطلباتك.`,
      subtext: `Select the ${data.name} you would like to interview.`,
      subtextAr: `اختر ${dataNameAr} الذين ترغب في مقابلتهم.`,
      image: 'interview.png',
    },
    {
      number: '03',
      title: 'Hire',
      titleAr: 'التوظيف',
      description: `When you are ready, hire the preferred ${data.name}.`,
      descriptionAr: `عندما تكون جاهزاً، وظّف ${dataNameAr} المفضلين.`,
      subtext: 'Sign an NDA, and we handle the paperwork.',
      subtextAr: 'وقّع اتفاقية عدم إفشاء ونحن نتولى الأوراق.',
      image: 'hire.png',
    },
  ];

  const relatedLinks = related.map((r) => {
    const rNameAr = r.metaTitleAr
      ? r.metaTitleAr.replace(' | HireDeveloper.ae', '').replace('توظيف ', '')
      : r.name;
    return {
      label: r.name,
      labelAr: rNameAr,
      href: `/hire-developers/${r.slug}`,
    };
  });

  const locationNames: Record<string, string> = {
    uae: 'UAE',
    'saudi-arabia': 'Saudi Arabia',
    qatar: 'Qatar',
    bahrain: 'Bahrain',
    kuwait: 'Kuwait',
    oman: 'Oman',
    dubai: 'Dubai',
    'abu-dhabi': 'Abu Dhabi',
    sharjah: 'Sharjah',
    ajman: 'Ajman',
    'ras-al-khaimah': 'Ras Al Khaimah',
    fujairah: 'Fujairah',
    'umm-al-quwain': 'Umm Al Quwain',
    riyadh: 'Riyadh',
    jeddah: 'Jeddah',
    dammam: 'Dammam',
    doha: 'Doha',
    manama: 'Manama',
    muscat: 'Muscat',
    'kuwait-city': 'Kuwait City',
  };

  const locationNamesAr: Record<string, string> = {
    uae: 'الإمارات',
    'saudi-arabia': 'السعودية',
    qatar: 'قطر',
    bahrain: 'البحرين',
    kuwait: 'الكويت',
    oman: 'عُمان',
    dubai: 'دبي',
    'abu-dhabi': 'أبوظبي',
    sharjah: 'الشارقة',
    ajman: 'عجمان',
    'ras-al-khaimah': 'رأس الخيمة',
    fujairah: 'الفجيرة',
    'umm-al-quwain': 'أم القيوين',
    riyadh: 'الرياض',
    jeddah: 'جدة',
    dammam: 'الدمام',
    doha: 'الدوحة',
    manama: 'المنامة',
    muscat: 'مسقط',
    'kuwait-city': 'مدينة الكويت',
  };

  // Map city/country slugs to correct location URLs
  const locationHrefs: Record<string, string> = {
    uae: '/locations/uae',
    'saudi-arabia': '/locations/saudi-arabia',
    qatar: '/locations/qatar',
    bahrain: '/locations/bahrain',
    kuwait: '/locations/kuwait',
    oman: '/locations/oman',
    dubai: '/locations/uae/dubai/dubai',
    'abu-dhabi': '/locations/uae/abu-dhabi/abu-dhabi',
    sharjah: '/locations/uae/sharjah/sharjah',
    ajman: '/locations/uae/ajman/ajman',
    'ras-al-khaimah': '/locations/uae/ras-al-khaimah/ras-al-khaimah',
    fujairah: '/locations/uae/fujairah/fujairah',
    'umm-al-quwain': '/locations/uae/umm-al-quwain/umm-al-quwain',
    riyadh: '/locations/saudi-arabia/riyadh-region/riyadh',
    jeddah: '/locations/saudi-arabia/makkah-region/jeddah',
    dammam: '/locations/saudi-arabia/eastern-province/dammam',
    doha: '/locations/qatar/qatar/doha',
    manama: '/locations/bahrain/bahrain/manama',
    muscat: '/locations/oman/oman/muscat',
    'kuwait-city': '/locations/kuwait/kuwait/kuwait-city',
  };

  // City-level slugs link to tech+city pSEO pages; country-level slugs link to location pages
  const countrySlugs = new Set(['uae', 'saudi-arabia', 'qatar', 'bahrain', 'kuwait', 'oman']);
  const locationLinks = data.relatedLocations.map((loc) => ({
    label: `${data.name} in ${locationNames[loc] || loc}`,
    labelAr: `${dataNameAr} في ${locationNamesAr[loc] || loc}`,
    href: countrySlugs.has(loc)
      ? (locationHrefs[loc] || `/locations/${loc}`)
      : `/hire-developers/${slug}/${loc}`,
  }));

  // Generate city-level cross-links for deep cocoon
  const topCities = countries
    .flatMap((c) =>
      c.regions.flatMap((r) =>
        r.cities.map((city) => ({
          name: city.name,
          nameAr: city.nameAr,
          slug: city.slug,
          population: city.population,
        }))
      )
    )
    .sort((a, b) => b.population - a.population)
    .slice(0, 12);

  const cityLinks = topCities.map((c) => ({
    label: `${data.name} in ${c.name}`,
    labelAr: `${dataNameAr} في ${c.nameAr}`,
    href: `/hire-developers/${slug}/${c.slug}`,
  }));

  const breadcrumbItems = [
    { label: 'Home', labelAr: 'الرئيسية', href: '/' },
    { label: 'Hire Developers', labelAr: 'وظّف مطورين', href: '/hire-developers' },
    { label: data.name, labelAr: dataNameAr, href: `/hire-developers/${slug}` },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Hire ${data.name} in UAE - HireDeveloper.ae`,
    description: data.metaDescription,
    url: `https://hiredeveloper.ae/hire-developers/${slug}`,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.ae',
      url: 'https://hiredeveloper.ae',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
    },
    serviceType: `${data.name} Recruitment`,
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Oman' },
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: '$0 until you hire',
    },
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hiredeveloper.ae' },
      { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://hiredeveloper.ae/hire-developers' },
      { '@type': 'ListItem', position: 3, name: data.name, item: `https://hiredeveloper.ae/hire-developers/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Header />

      <DeveloperSubcategoryPageContent
        dataName={data.name}
        dataNameAr={dataNameAr}
        heroCount={data.heroCount}
        heroDescription={data.heroDescription}
        heroDescriptionAr={heroDescriptionAr}
        slug={slug}
        profiles={shuffledProfiles}
        guideSections={guideSections}
        stats={stats}
        testimonials={testimonials}
        steps={steps}
        relatedLinks={relatedLinks}
        locationLinks={locationLinks}
        cityLinks={cityLinks}
        breadcrumbItems={breadcrumbItems}
      />

      <Footer />
    </div>
  );
}
