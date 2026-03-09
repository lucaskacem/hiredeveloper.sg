interface SchemaMarkupProps {
  schemas: Record<string, unknown>[];
}

export default function SchemaMarkup({ schemas }: SchemaMarkupProps) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// ---------------------------------------------------------------------------
// Pre-built schema generators for each page type
// ---------------------------------------------------------------------------

const BASE_URL = 'https://hiredeveloper.sg';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HireDeveloper.sg',
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.svg`,
    description:
      'Premium talent marketplace connecting Singapore/APAC companies with the top 2% of vetted remote developers, designers, marketers, and more.',
    foundingDate: '2024',
    email: 'hello@hiredeveloper.sg',
    areaServed: [
      { '@type': 'Country', name: 'Singapore' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Chinese', 'Malay'],
    },
    sameAs: [
      'https://www.linkedin.com/company/hiredeveloper-sg',
      'https://x.com/hiredevelopersg',
      'https://www.youtube.com/@hiredevelopersg',
      'https://www.facebook.com/hiredevelopersg',
    ],
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HireDeveloper.sg',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/hire-developers/{search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'Organization',
      name: 'HireDeveloper.sg',
      url: BASE_URL,
    },
    serviceType: opts.serviceType,
    areaServed: [
      'Singapore',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: '$0 until you hire',
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function itemListSchema(opts: {
  name: string;
  description: string;
  items: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: opts.name,
    description: opts.description,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function localBusinessSchema(opts: {
  city: string;
  region: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `HireDeveloper.sg - ${opts.city}`,
    description: `Hire top remote developers, designers, and marketers in ${opts.city}, ${opts.country}. Pre-vetted talent available within 48 hours.`,
    url: opts.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: opts.city,
      addressRegion: opts.region,
      addressCountry: opts.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: opts.lat,
      longitude: opts.lng,
    },
    priceRange: '$$',
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: opts.image || `${BASE_URL}/images/og-default.png`,
    author: {
      '@type': 'Organization',
      name: 'HireDeveloper.sg',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HireDeveloper.sg',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.svg`,
      },
    },
  };
}

export function softwareAppSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}
