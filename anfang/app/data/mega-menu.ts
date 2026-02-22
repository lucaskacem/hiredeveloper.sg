export interface MegaMenuItem {
  label: string;
  slug: string;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface StandortCity {
  label: string;
  slug: string;
}

export interface StandortCountry {
  name: string;
  slug: string;
  cities: StandortCity[];
}

export type CategoryKey =
  | 'entwickler'
  | 'designer'
  | 'marketer'
  | 'produktmanager'
  | 'projektmanager'
  | 'assistenten'
  | 'standorte';

export interface CategoryConfig {
  key: CategoryKey;
  label: string;
  href: string;
}

export const categories: CategoryConfig[] = [
  { key: 'entwickler', label: 'Entwickler', href: '/hire-developers' },
  { key: 'designer', label: 'Designer', href: '/hire-designers' },
  { key: 'marketer', label: 'Marketer', href: '/hire-marketers' },
  { key: 'produktmanager', label: 'Produktmanager', href: '/hire-product-managers' },
  { key: 'projektmanager', label: 'Projektmanager', href: '/hire-project-managers' },
  { key: 'assistenten', label: 'Assistenten', href: '/hire-assistants' },
  { key: 'standorte', label: 'Standorte', href: '/standorte' },
];

// ── Entwickler (8-column grid) ──────────────────────────────────────────

export const megaMenuColumns: MegaMenuColumn[] = [
  {
    title: 'KI-Dienste',
    items: [
      { label: 'KI-Entwickler', slug: 'ai' },
      { label: 'OpenAI-Entwickler', slug: 'openai' },
      { label: 'ChatGPT API-Entwickler', slug: 'chatgpt-api' },
      { label: 'LLM-Entwickler', slug: 'llm' },
      { label: 'NLP-Entwickler', slug: 'nlp' },
      { label: 'Data Scientists', slug: 'data-science' },
      { label: 'Data Engineers', slug: 'data-engineering' },
      { label: 'Machine-Learning-Entwickler', slug: 'machine-learning' },
      { label: 'LangChain-Entwickler', slug: 'langchain' },
      { label: 'RAG-Entwickler', slug: 'rag' },
      { label: 'Computer Vision-Entwickler', slug: 'computer-vision' },
      { label: 'TensorFlow-Entwickler', slug: 'tensorflow' },
      { label: 'PyTorch-Entwickler', slug: 'pytorch' },
    ],
  },
  {
    title: 'Programmiersprachen',
    items: [
      { label: 'JavaScript-Entwickler', slug: 'javascript' },
      { label: 'Java-Entwickler', slug: 'java' },
      { label: 'Python-Entwickler', slug: 'python' },
      { label: 'TypeScript-Entwickler', slug: 'typescript' },
      { label: 'C#-Entwickler', slug: 'csharp' },
      { label: 'Golang-Entwickler', slug: 'golang' },
      { label: 'Rust-Entwickler', slug: 'rust' },
      { label: 'Kotlin-Entwickler', slug: 'kotlin' },
      { label: 'PHP-Entwickler', slug: 'php' },
      { label: 'Ruby-Entwickler', slug: 'ruby' },
      { label: 'Scala-Entwickler', slug: 'scala' },
      { label: 'SQL-Entwickler', slug: 'sql' },
      { label: 'C++-Entwickler', slug: 'cpp' },
      { label: 'Dart-Entwickler', slug: 'dart' },
      { label: 'Elixir-Entwickler', slug: 'elixir' },
      { label: '.Net-Entwickler', slug: 'dotnet' },
      { label: 'R-Entwickler', slug: 'r' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { label: 'React-Entwickler', slug: 'reactjs' },
      { label: 'Next.js-Entwickler', slug: 'nextjs' },
      { label: 'Node.js-Entwickler', slug: 'nodejs' },
      { label: 'Angular-Entwickler', slug: 'angular' },
      { label: 'Vue.js-Entwickler', slug: 'vuejs' },
      { label: 'Svelte-Entwickler', slug: 'svelte' },
      { label: 'Django-Entwickler', slug: 'django' },
      { label: 'Laravel-Entwickler', slug: 'laravel' },
      { label: 'Spring Boot-Entwickler', slug: 'spring-boot' },
      { label: 'NestJS-Entwickler', slug: 'nestjs' },
      { label: 'FastAPI-Entwickler', slug: 'fastapi' },
      { label: 'Express.js-Entwickler', slug: 'expressjs' },
      { label: 'Ruby on Rails-Entwickler', slug: 'ruby-on-rails' },
    ],
  },
  {
    title: 'Web-Entwicklung',
    items: [
      { label: 'Web-Entwickler', slug: 'web-development' },
      { label: 'Frontend-Entwickler', slug: 'front-end' },
      { label: 'Backend-Entwickler', slug: 'back-end' },
      { label: 'Full-Stack-Entwickler', slug: 'full-stack' },
      { label: 'HTML/CSS-Entwickler', slug: 'html-css' },
      { label: 'Tailwind CSS-Entwickler', slug: 'tailwind-css' },
      { label: 'GraphQL-Entwickler', slug: 'graphql' },
      { label: 'RESTful API-Entwickler', slug: 'restful-api' },
      { label: 'WordPress-Entwickler', slug: 'wordpress' },
      { label: 'Three.js-Entwickler', slug: 'threejs' },
      { label: 'PWA-Entwickler', slug: 'pwa' },
    ],
  },
  {
    title: 'Mobile App-Entwicklung',
    items: [
      { label: 'Mobile-App-Entwickler', slug: 'mobile-app-development' },
      { label: 'Swift-Entwickler', slug: 'swift' },
      { label: 'SwiftUI-Entwickler', slug: 'swiftui' },
      { label: 'Android-Entwickler', slug: 'android' },
      { label: 'iOS-Entwickler', slug: 'ios' },
      { label: 'React Native-Entwickler', slug: 'react-native' },
      { label: 'Flutter-Entwickler', slug: 'flutter' },
      { label: 'Jetpack Compose-Entwickler', slug: 'jetpack-compose' },
      { label: 'Expo-Entwickler', slug: 'expo' },
      { label: 'Ionic-Entwickler', slug: 'ionic' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { label: 'DevOps-Ingenieure', slug: 'devops' },
      { label: 'AWS-Entwickler', slug: 'aws' },
      { label: 'Azure-Entwickler', slug: 'azure' },
      { label: 'Google Cloud-Entwickler', slug: 'google-cloud' },
      { label: 'Kubernetes-Entwickler', slug: 'kubernetes' },
      { label: 'Docker-Entwickler', slug: 'docker' },
      { label: 'Terraform-Entwickler', slug: 'terraform' },
      { label: 'GitHub Actions-Entwickler', slug: 'github-actions' },
      { label: 'Cloud-Entwickler', slug: 'cloud' },
      { label: 'Vercel-Entwickler', slug: 'vercel' },
      { label: 'Security-Entwickler', slug: 'security' },
      { label: 'SRE-Ingenieure', slug: 'site-reliability' },
    ],
  },
  {
    title: 'Datenbank',
    items: [
      { label: 'Datenbankadministratoren', slug: 'database-admin' },
      { label: 'PostgreSQL-Entwickler', slug: 'postgresql' },
      { label: 'MySQL-Entwickler', slug: 'mysql' },
      { label: 'MongoDB-Entwickler', slug: 'mongodb' },
      { label: 'Redis-Entwickler', slug: 'redis' },
      { label: 'Elasticsearch-Entwickler', slug: 'elasticsearch' },
      { label: 'Supabase-Entwickler', slug: 'supabase' },
      { label: 'Firebase-Entwickler', slug: 'firebase' },
      { label: 'Prisma-Entwickler', slug: 'prisma' },
      { label: 'BigQuery-Entwickler', slug: 'bigquery' },
      { label: 'Neo4j-Entwickler', slug: 'neo4j' },
    ],
  },
  {
    title: 'E-Commerce',
    items: [
      { label: 'E-Commerce-Entwickler', slug: 'e-commerce' },
      { label: 'Shopify-Entwickler', slug: 'shopify' },
      { label: 'WooCommerce-Entwickler', slug: 'woocommerce' },
      { label: 'Magento-Entwickler', slug: 'magento' },
      { label: 'Stripe-Entwickler', slug: 'stripe' },
      { label: 'BigCommerce-Entwickler', slug: 'bigcommerce' },
    ],
  },
  {
    title: 'Testing & QA',
    items: [
      { label: 'QA-Ingenieure', slug: 'qa' },
      { label: 'Cypress-Entwickler', slug: 'cypress' },
      { label: 'Playwright-Entwickler', slug: 'playwright' },
      { label: 'Jest-Entwickler', slug: 'jest' },
      { label: 'Selenium-Entwickler', slug: 'selenium' },
      { label: 'Storybook-Entwickler', slug: 'storybook' },
    ],
  },
  {
    title: 'Andere',
    items: [
      { label: 'Software-Entwickler', slug: 'software-development' },
      { label: 'Fractional CTOs', slug: 'fractional-cto' },
      { label: 'Engineering Manager', slug: 'engineering-manager' },
      { label: 'Tech Leads', slug: 'tech-lead' },
      { label: 'Architekten', slug: 'architect' },
      { label: 'Blockchain-Entwickler', slug: 'blockchain' },
      { label: 'Salesforce-Entwickler', slug: 'salesforce' },
      { label: 'Unity-Entwickler', slug: 'unity' },
      { label: 'Datenanalysten', slug: 'data-analyst' },
      { label: 'CMS-Entwickler', slug: 'cms' },
      { label: 'FinTech-Entwickler', slug: 'fintech' },
      { label: 'SAP ABAP-Entwickler', slug: 'sap-abap' },
      { label: 'Electron-Entwickler', slug: 'electron' },
      { label: 'IoT-Entwickler', slug: 'iot' },
    ],
  },
];

// ── Designer ────────────────────────────────────────────────────────────

export const designerItems: MegaMenuItem[] = [
  { label: 'Product Designer', slug: 'product-designer' },
  { label: 'Web Designer', slug: 'web-designer' },
  { label: 'UI Designer', slug: 'ui-designer' },
  { label: 'UX Designer', slug: 'ux-designer' },
  { label: 'Mobile App Designer', slug: 'mobile-app-designer' },
  { label: 'Grafik Designer', slug: 'grafik-designer' },
  { label: 'Brand Designer', slug: 'brand-designer' },
  { label: 'Illustrator', slug: 'illustrator' },
  { label: 'Motion Designer', slug: 'motion-designer' },
  { label: '3D Designer', slug: '3d-designer' },
];

// ── Marketer ────────────────────────────────────────────────────────────

export const marketerItems: MegaMenuItem[] = [
  { label: 'SEO-Experten', slug: 'seo-experten' },
  { label: 'Content Writer', slug: 'content-writer' },
  { label: 'Growth Marketer', slug: 'growth-marketer' },
  { label: 'Social Media Manager', slug: 'social-media-manager' },
  { label: 'Email Marketing', slug: 'email-marketing' },
  { label: 'PPC-Spezialist', slug: 'ppc-spezialist' },
  { label: 'Marketing Analyst', slug: 'marketing-analyst' },
  { label: 'Brand Strategist', slug: 'brand-strategist' },
  { label: 'Fractional CMOs', slug: 'fractional-cmos' },
  { label: 'Performance Marketing', slug: 'performance-marketing' },
];

// ── Produktmanager ──────────────────────────────────────────────────────

export const produktmanagerItems: MegaMenuItem[] = [
  { label: 'Product Owner', slug: 'product-owner' },
  { label: 'Scrum Master', slug: 'scrum-master' },
  { label: 'Technical PM', slug: 'technical-pm' },
  { label: 'Digital PM', slug: 'digital-pm' },
  { label: 'Agile Coach', slug: 'agile-coach' },
];

// ── Projektmanager ──────────────────────────────────────────────────────

export const projektmanagerItems: MegaMenuItem[] = [
  { label: 'IT-Projektmanager', slug: 'it-projektmanager' },
  { label: 'Scrum Master', slug: 'scrum-master' },
  { label: 'Agile PM', slug: 'agile-pm' },
  { label: 'Programm-Manager', slug: 'programm-manager' },
  { label: 'Portfolio Manager', slug: 'portfolio-manager' },
];

// ── Assistenten ─────────────────────────────────────────────────────────

export const assistentenItems: MegaMenuItem[] = [
  { label: 'Virtuelle Assistenten', slug: 'virtuelle-assistenten' },
  { label: 'Executive Assistant', slug: 'executive-assistant' },
  { label: 'Admin Assistant', slug: 'admin-assistant' },
  { label: 'Projekt-Assistent', slug: 'projekt-assistent' },
  { label: 'Daten-Assistent', slug: 'daten-assistent' },
];

// ── Standorte ───────────────────────────────────────────────────────────

export const standorteData: StandortCountry[] = [
  {
    name: 'Deutschland',
    slug: 'deutschland',
    cities: [
      { label: 'Berlin', slug: 'berlin' },
      { label: 'M\u00fcnchen', slug: 'muenchen' },
      { label: 'Hamburg', slug: 'hamburg' },
      { label: 'Frankfurt', slug: 'frankfurt' },
      { label: 'K\u00f6ln', slug: 'koeln' },
      { label: 'D\u00fcsseldorf', slug: 'duesseldorf' },
      { label: 'Stuttgart', slug: 'stuttgart' },
    ],
  },
  {
    name: '\u00d6sterreich',
    slug: 'oesterreich',
    cities: [
      { label: 'Wien', slug: 'wien' },
      { label: 'Graz', slug: 'graz' },
      { label: 'Linz', slug: 'linz' },
      { label: 'Salzburg', slug: 'salzburg' },
      { label: 'Innsbruck', slug: 'innsbruck' },
    ],
  },
  {
    name: 'Schweiz',
    slug: 'schweiz',
    cities: [
      { label: 'Z\u00fcrich', slug: 'zuerich' },
      { label: 'Bern', slug: 'bern' },
      { label: 'Basel', slug: 'basel' },
      { label: 'Genf', slug: 'genf' },
      { label: 'Lausanne', slug: 'lausanne' },
    ],
  },
  {
    name: 'Liechtenstein',
    slug: 'liechtenstein',
    cities: [
      { label: 'Vaduz', slug: 'vaduz' },
      { label: 'Schaan', slug: 'schaan' },
    ],
  },
  {
    name: 'Luxemburg',
    slug: 'luxemburg',
    cities: [
      { label: 'Luxemburg-Stadt', slug: 'luxemburg-stadt' },
      { label: 'Esch-sur-Alzette', slug: 'esch-sur-alzette' },
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
