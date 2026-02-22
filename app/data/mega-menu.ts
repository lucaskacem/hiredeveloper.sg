export interface MegaMenuItem {
  label: string;
  slug: string;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface LocationCity {
  label: string;
  slug: string;
  regionSlug: string;
}

export interface LocationCountry {
  name: string;
  slug: string;
  cities: LocationCity[];
}

export type CategoryKey =
  | 'developers'
  | 'designers'
  | 'marketers'
  | 'product-managers'
  | 'project-managers'
  | 'assistants'
  | 'locations';

export interface CategoryConfig {
  key: CategoryKey;
  label: string;
  href: string;
}

export const categories: CategoryConfig[] = [
  { key: 'developers', label: 'Developers', href: '/hire-developers' },
  { key: 'designers', label: 'Designers', href: '/hire-designers' },
  { key: 'marketers', label: 'Marketers', href: '/hire-marketers' },
  { key: 'product-managers', label: 'Product Managers', href: '/hire-product-managers' },
  { key: 'project-managers', label: 'Project Managers', href: '/hire-project-managers' },
  { key: 'assistants', label: 'Assistants', href: '/hire-assistants' },
  { key: 'locations', label: 'Locations', href: '/locations' },
];

// ── Developers (8-column grid) ──────────────────────────────────────────

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'AI Services',
    items: [
      { label: 'AI Developer', slug: 'ai' },
      { label: 'OpenAI Developer', slug: 'openai' },
      { label: 'ChatGPT API Developer', slug: 'chatgpt-api' },
      { label: 'LLM Developer', slug: 'llm' },
      { label: 'NLP Developer', slug: 'nlp' },
      { label: 'Data Scientists', slug: 'data-science' },
      { label: 'Data Engineers', slug: 'data-engineering' },
      { label: 'Machine Learning Developer', slug: 'machine-learning' },
      { label: 'LangChain Developer', slug: 'langchain' },
      { label: 'RAG Developer', slug: 'rag' },
      { label: 'Computer Vision Developer', slug: 'computer-vision' },
      { label: 'TensorFlow Developer', slug: 'tensorflow' },
      { label: 'PyTorch Developer', slug: 'pytorch' },
    ],
  },
  {
    title: 'Languages',
    items: [
      { label: 'JavaScript Developer', slug: 'javascript' },
      { label: 'Java Developer', slug: 'java' },
      { label: 'Python Developer', slug: 'python' },
      { label: 'TypeScript Developer', slug: 'typescript' },
      { label: 'C# Developer', slug: 'csharp' },
      { label: 'Golang Developer', slug: 'golang' },
      { label: 'Rust Developer', slug: 'rust' },
      { label: 'Kotlin Developer', slug: 'kotlin' },
      { label: 'PHP Developer', slug: 'php' },
      { label: 'Ruby Developer', slug: 'ruby' },
      { label: 'Scala Developer', slug: 'scala' },
      { label: 'SQL Developer', slug: 'sql' },
      { label: 'C++ Developer', slug: 'cpp' },
      { label: 'Dart Developer', slug: 'dart' },
      { label: 'Elixir Developer', slug: 'elixir' },
      { label: '.NET Developer', slug: 'dotnet' },
      { label: 'R Developer', slug: 'r' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { label: 'React Developer', slug: 'reactjs' },
      { label: 'Next.js Developer', slug: 'nextjs' },
      { label: 'Node.js Developer', slug: 'nodejs' },
      { label: 'Angular Developer', slug: 'angular' },
      { label: 'Vue.js Developer', slug: 'vuejs' },
      { label: 'Svelte Developer', slug: 'svelte' },
      { label: 'Django Developer', slug: 'django' },
      { label: 'Laravel Developer', slug: 'laravel' },
      { label: 'Spring Boot Developer', slug: 'spring-boot' },
      { label: 'NestJS Developer', slug: 'nestjs' },
      { label: 'FastAPI Developer', slug: 'fastapi' },
      { label: 'Express.js Developer', slug: 'expressjs' },
      { label: 'Ruby on Rails Developer', slug: 'ruby-on-rails' },
    ],
  },
  {
    title: 'Web Development',
    items: [
      { label: 'Web Developer', slug: 'web-development' },
      { label: 'Frontend Developer', slug: 'front-end' },
      { label: 'Backend Developer', slug: 'back-end' },
      { label: 'Full-Stack Developer', slug: 'full-stack' },
      { label: 'HTML/CSS Developer', slug: 'html-css' },
      { label: 'Tailwind CSS Developer', slug: 'tailwind-css' },
      { label: 'GraphQL Developer', slug: 'graphql' },
      { label: 'RESTful API Developer', slug: 'restful-api' },
      { label: 'WordPress Developer', slug: 'wordpress' },
      { label: 'Three.js Developer', slug: 'threejs' },
      { label: 'PWA Developer', slug: 'pwa' },
    ],
  },
  {
    title: 'Mobile Development',
    items: [
      { label: 'Mobile App Developer', slug: 'mobile-app-development' },
      { label: 'Swift Developer', slug: 'swift' },
      { label: 'SwiftUI Developer', slug: 'swiftui' },
      { label: 'Android Developer', slug: 'android' },
      { label: 'iOS Developer', slug: 'ios' },
      { label: 'React Native Developer', slug: 'react-native' },
      { label: 'Flutter Developer', slug: 'flutter' },
      { label: 'Jetpack Compose Developer', slug: 'jetpack-compose' },
      { label: 'Expo Developer', slug: 'expo' },
      { label: 'Ionic Developer', slug: 'ionic' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { label: 'DevOps Engineers', slug: 'devops' },
      { label: 'AWS Developer', slug: 'aws' },
      { label: 'Azure Developer', slug: 'azure' },
      { label: 'Google Cloud Developer', slug: 'google-cloud' },
      { label: 'Kubernetes Developer', slug: 'kubernetes' },
      { label: 'Docker Developer', slug: 'docker' },
      { label: 'Terraform Developer', slug: 'terraform' },
      { label: 'GitHub Actions Developer', slug: 'github-actions' },
      { label: 'Cloud Developer', slug: 'cloud' },
      { label: 'Vercel Developer', slug: 'vercel' },
      { label: 'Security Developer', slug: 'security' },
      { label: 'SRE Engineers', slug: 'site-reliability' },
    ],
  },
  {
    title: 'Database',
    items: [
      { label: 'Database Administrators', slug: 'database-admin' },
      { label: 'PostgreSQL Developer', slug: 'postgresql' },
      { label: 'MySQL Developer', slug: 'mysql' },
      { label: 'MongoDB Developer', slug: 'mongodb' },
      { label: 'Redis Developer', slug: 'redis' },
      { label: 'Elasticsearch Developer', slug: 'elasticsearch' },
      { label: 'Supabase Developer', slug: 'supabase' },
      { label: 'Firebase Developer', slug: 'firebase' },
      { label: 'Prisma Developer', slug: 'prisma' },
      { label: 'BigQuery Developer', slug: 'bigquery' },
      { label: 'Neo4j Developer', slug: 'neo4j' },
    ],
  },
  {
    title: 'E-Commerce',
    items: [
      { label: 'E-Commerce Developer', slug: 'e-commerce' },
      { label: 'Shopify Developer', slug: 'shopify' },
      { label: 'WooCommerce Developer', slug: 'woocommerce' },
      { label: 'Magento Developer', slug: 'magento' },
      { label: 'Stripe Developer', slug: 'stripe' },
      { label: 'BigCommerce Developer', slug: 'bigcommerce' },
    ],
  },
  {
    title: 'Testing & QA',
    items: [
      { label: 'QA Engineers', slug: 'qa' },
      { label: 'Cypress Developer', slug: 'cypress' },
      { label: 'Playwright Developer', slug: 'playwright' },
      { label: 'Jest Developer', slug: 'jest' },
      { label: 'Selenium Developer', slug: 'selenium' },
      { label: 'Storybook Developer', slug: 'storybook' },
    ],
  },
  {
    title: 'Other',
    items: [
      { label: 'Software Developer', slug: 'software-development' },
      { label: 'Fractional CTOs', slug: 'fractional-cto' },
      { label: 'Engineering Manager', slug: 'engineering-manager' },
      { label: 'Tech Leads', slug: 'tech-lead' },
      { label: 'Architects', slug: 'architect' },
      { label: 'Blockchain Developer', slug: 'blockchain' },
      { label: 'Salesforce Developer', slug: 'salesforce' },
      { label: 'Unity Developer', slug: 'unity' },
      { label: 'Data Analysts', slug: 'data-analyst' },
      { label: 'CMS Developer', slug: 'cms' },
      { label: 'FinTech Developer', slug: 'fintech' },
      { label: 'SAP ABAP Developer', slug: 'sap-abap' },
      { label: 'Electron Developer', slug: 'electron' },
      { label: 'IoT Developer', slug: 'iot' },
    ],
  },
];

// ── Designers ────────────────────────────────────────────────────────────

export const designerItems: MegaMenuItem[] = [
  { label: 'Product Designer', slug: 'product-designer' },
  { label: 'Web Designer', slug: 'web-designer' },
  { label: 'UI Designer', slug: 'ui-designer' },
  { label: 'UX Designer', slug: 'ux-designer' },
  { label: 'Mobile App Designer', slug: 'mobile-app-designer' },
  { label: 'Graphic Designer', slug: 'grafik-designer' },
  { label: 'Brand Designer', slug: 'brand-designer' },
  { label: 'Illustrator', slug: 'illustrator' },
  { label: 'Motion Designer', slug: 'motion-designer' },
  { label: '3D Designer', slug: '3d-designer' },
];

// ── Marketers ────────────────────────────────────────────────────────────

export const marketerItems: MegaMenuItem[] = [
  { label: 'SEO Experts', slug: 'seo-experten' },
  { label: 'Content Writer', slug: 'content-writer' },
  { label: 'Growth Marketer', slug: 'growth-marketer' },
  { label: 'Social Media Manager', slug: 'social-media-manager' },
  { label: 'Email Marketing', slug: 'email-marketing' },
  { label: 'PPC Specialist', slug: 'ppc-spezialist' },
  { label: 'Marketing Analyst', slug: 'marketing-analyst' },
  { label: 'Brand Strategist', slug: 'brand-strategist' },
  { label: 'Fractional CMOs', slug: 'fractional-cmos' },
  { label: 'Performance Marketing', slug: 'performance-marketing' },
];

export const marketerMenuColumns: MegaMenuColumn[] = [
  {
    title: 'CRO & Optimization',
    items: [
      { label: 'A/B Testing Expert', slug: 'ab-test-setup' },
      { label: 'Form CRO Specialist', slug: 'form-cro' },
      { label: 'Onboarding CRO Expert', slug: 'onboarding-cro' },
      { label: 'Page CRO Specialist', slug: 'page-cro' },
      { label: 'Paywall & Upsell Specialist', slug: 'paywall-upgrade-cro' },
      { label: 'Popup Conversion Expert', slug: 'popup-cro' },
      { label: 'Signup Flow Optimizer', slug: 'signup-flow-cro' },
    ],
  },
  {
    title: 'Content & Copy',
    items: [
      { label: 'Content Strategist', slug: 'content-strategy' },
      { label: 'Copy Editor', slug: 'copy-editing' },
      { label: 'Copywriter', slug: 'copywriting' },
      { label: 'Social Media Creator', slug: 'social-content' },
    ],
  },
  {
    title: 'SEO & Technical',
    items: [
      { label: 'Analytics & Tracking Specialist', slug: 'analytics-tracking' },
      { label: 'Programmatic SEO Expert', slug: 'programmatic-seo' },
      { label: 'Schema Markup Specialist', slug: 'schema-markup' },
      { label: 'SEO Audit Specialist', slug: 'seo-audit' },
    ],
  },
  {
    title: 'Growth & Strategy',
    items: [
      { label: 'Free Tool Strategist', slug: 'free-tool-strategy' },
      { label: 'Launch Strategist', slug: 'launch-strategy' },
      { label: 'Marketing Ideation Expert', slug: 'marketing-ideas' },
      { label: 'Marketing Psychology Expert', slug: 'marketing-psychology' },
      { label: 'Pricing Strategist', slug: 'pricing-strategy' },
    ],
  },
  {
    title: 'Acquisition & Retention',
    items: [
      { label: 'Competitor Analysis Specialist', slug: 'competitor-alternatives' },
      { label: 'Email Marketing Specialist', slug: 'email-sequence' },
      { label: 'Paid Advertising Expert', slug: 'paid-ads' },
      { label: 'Product Marketing Manager', slug: 'product-marketing-context' },
      { label: 'Referral Program Specialist', slug: 'referral-program' },
    ],
  },
];

// ── Product Managers ──────────────────────────────────────────────────────

export const productManagerItems: MegaMenuItem[] = [
  { label: 'Product Owner', slug: 'product-owner' },
  { label: 'Scrum Master', slug: 'scrum-master' },
  { label: 'Technical PM', slug: 'technical-pm' },
  { label: 'Digital PM', slug: 'digital-pm' },
  { label: 'Agile Coach', slug: 'agile-coach' },
];

// ── Project Managers ──────────────────────────────────────────────────────

export const projectManagerItems: MegaMenuItem[] = [
  { label: 'IT Project Manager', slug: 'it-projektmanager' },
  { label: 'Scrum Master', slug: 'scrum-master' },
  { label: 'Agile PM', slug: 'agile-pm' },
  { label: 'Program Manager', slug: 'programm-manager' },
  { label: 'Portfolio Manager', slug: 'portfolio-manager' },
];

// ── Assistants ─────────────────────────────────────────────────────────

export const assistantItems: MegaMenuItem[] = [
  { label: 'Virtual Assistants', slug: 'virtuelle-assistenten' },
  { label: 'Executive Assistant', slug: 'executive-assistant' },
  { label: 'Admin Assistant', slug: 'admin-assistant' },
  { label: 'Project Assistant', slug: 'projekt-assistent' },
  { label: 'Data Assistant', slug: 'daten-assistent' },
];

// ── Locations ───────────────────────────────────────────────────────────

export const locationsData: LocationCountry[] = [
  {
    name: 'UAE',
    slug: 'uae',
    cities: [
      { label: 'Dubai', slug: 'dubai', regionSlug: 'dubai' },
      { label: 'Abu Dhabi', slug: 'abu-dhabi', regionSlug: 'abu-dhabi' },
      { label: 'Sharjah', slug: 'sharjah', regionSlug: 'sharjah' },
      { label: 'Ajman', slug: 'ajman', regionSlug: 'ajman' },
      { label: 'Ras Al Khaimah', slug: 'ras-al-khaimah', regionSlug: 'ras-al-khaimah' },
      { label: 'Fujairah', slug: 'fujairah', regionSlug: 'fujairah' },
      { label: 'Umm Al Quwain', slug: 'umm-al-quwain', regionSlug: 'umm-al-quwain' },
    ],
  },
  {
    name: 'Saudi Arabia',
    slug: 'saudi-arabia',
    cities: [
      { label: 'Riyadh', slug: 'riyadh', regionSlug: 'riyadh-region' },
      { label: 'Jeddah', slug: 'jeddah', regionSlug: 'makkah-region' },
      { label: 'Dammam', slug: 'dammam', regionSlug: 'eastern-province' },
    ],
  },
  {
    name: 'Qatar',
    slug: 'qatar',
    cities: [
      { label: 'Doha', slug: 'doha', regionSlug: 'qatar' },
    ],
  },
  {
    name: 'Bahrain',
    slug: 'bahrain',
    cities: [
      { label: 'Manama', slug: 'manama', regionSlug: 'bahrain' },
    ],
  },
  {
    name: 'Oman',
    slug: 'oman',
    cities: [
      { label: 'Muscat', slug: 'muscat', regionSlug: 'oman' },
    ],
  },
  {
    name: 'Kuwait',
    slug: 'kuwait',
    cities: [
      { label: 'Kuwait City', slug: 'kuwait-city', regionSlug: 'kuwait' },
    ],
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────

// Helper to get all slugs for generateStaticParams
export function getAllMegaMenuSlugs(): string[] {
  return megaMenuColumns.flatMap(col => col.items.map(item => item.slug));
}

// Helper to find a subcategory by slug
export function findMegaMenuItem(slug: string): { column: MegaMenuColumn; item: MegaMenuItem } | null {
  for (const column of megaMenuColumns) {
    const item = column.items.find(i => i.slug === slug);
    if (item) return { column, item };
  }
  return null;
}
