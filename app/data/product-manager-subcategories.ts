export interface ProfileData {
  name: string;
  location: string;
  badge: string;
  bio: string;
  skills: string[];
  availability: string;
  previousCompany: { name: string; logo: string };
  avatar: string;
}

export interface GuideSection {
  title: string;
  subsections: {
    subtitle: string;
    content: string;
  }[];
}

export interface PMSubcategory {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroCount: number;
  heroDescription: string;
  skills: string[];
  relatedSlugs: string[];
}

// ---------------------------------------------------------------------------
// Deterministic hash for consistent per-subcategory variation
// ---------------------------------------------------------------------------
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

// ---------------------------------------------------------------------------
// Profile pools — varied names, locations, companies, and bio templates
// ---------------------------------------------------------------------------
interface ProfileTemplate {
  name: string;
  location: string;
  company: { name: string; logo: string };
  availability: string;
  gender: 'men' | 'women';
}

const profilePool: ProfileTemplate[] = [
  { name: 'Wei Lin C.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Arjun N.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time', gender: 'men' },
  { name: 'Michelle T.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Ravi K.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
  { name: 'Siti H.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time', gender: 'women' },
  { name: 'Daniel L.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Freelance', gender: 'men' },
  { name: 'Priya M.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Jason W.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time', gender: 'men' },
  { name: 'Nurul A.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Kevin S.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
];

const bioTemplates: Record<string, ((n: string, s: string[]) => string)[]> = {
  'technical': [
    (n, s) => `With 9 years leading product development across Singapore's fintech and SaaS landscape, I bridge the gap between engineering teams and business stakeholders. My expertise in ${s[0]} and ${s[1]} enables me to translate complex technical requirements into clear product roadmaps that drive measurable outcomes.`,
    (n, s) => `As a ${n} based in Singapore's one-north tech hub, I have shipped enterprise platforms serving millions of users across Southeast Asia. My strength lies in ${s[2]} and ${s[3]}, ensuring products are architecturally sound and commercially viable.`,
    (n, s) => `I specialise in building B2B products for Singapore's financial services and government sectors. My deep understanding of ${s[0]} and ${s[4]} allows me to collaborate effectively with engineering teams while keeping product strategy aligned with market demand.`,
  ],
  'product-owners': [
    (n, s) => `Over 7 years as a ${n} in Singapore, I have managed backlogs for cross-functional teams delivering digital products across banking, logistics, and e-commerce. My approach to ${s[0]} and ${s[1]} ensures that every sprint delivers maximum business value.`,
    (n, s) => `Working from Marina Bay, I lead agile product teams building platforms for Southeast Asian markets. My expertise in ${s[2]} and ${s[3]} helps teams maintain velocity while staying aligned with strategic objectives and customer needs.`,
    (n, s) => `As a certified ${n} with experience at Singapore-based scale-ups, I focus on ${s[4]} and ${s[5]} to keep development cycles efficient. I have a track record of reducing time-to-market by 40% through disciplined backlog management and clear acceptance criteria.`,
  ],
  'ai': [
    (n, s) => `I lead AI product initiatives at the intersection of ${s[0]} and ${s[1]}, working with research teams and business stakeholders across Singapore's Smart Nation ecosystem. My focus is on turning cutting-edge AI capabilities into products that solve real-world problems.`,
    (n, s) => `Based in Singapore's Launchpad at one-north, I have built AI-powered products for healthcare, finance, and logistics. My understanding of ${s[2]} and ${s[3]} enables me to define product requirements that are both technically feasible and commercially impactful.`,
    (n, s) => `With a background in data science and 6 years in product management, I specialise in bringing ${s[0]} and ${s[4]} products to market. I work closely with Singapore's AI research community and have launched products adopted by enterprises across APAC.`,
  ],
  'data': [
    (n, s) => `I have spent 8 years building data products for Singapore's banking and insurance sectors. My expertise in ${s[0]} and ${s[1]} allows me to define data strategies that transform raw information into actionable business intelligence and competitive advantage.`,
    (n, s) => `Operating from Changi Business Park, I manage data platforms that process billions of events daily for Southeast Asian enterprises. My command of ${s[2]} and ${s[3]} ensures products are scalable, compliant with Singapore's PDPA, and deliver clear ROI.`,
    (n, s) => `As a ${n} with deep SQL and analytics expertise, I bridge the gap between data engineering teams and business users. I have built self-service ${s[4]} platforms and ${s[5]} dashboards that empower decision-making across organisations in Singapore's financial district.`,
  ],
  'growth': [
    (n, s) => `With 7 years driving product-led growth for Singapore startups, I specialise in ${s[0]} and ${s[1]}. I have scaled products from 10K to 2M users by combining rigorous experimentation with deep customer understanding in Southeast Asian markets.`,
    (n, s) => `Based in Singapore, I focus on ${s[2]} and ${s[3]} to unlock sustainable growth for B2C and B2B SaaS products. My data-driven approach to experimentation has generated over $15M in incremental revenue for companies across the APAC region.`,
    (n, s) => `As a ${n} at Singapore-based scale-ups, I have built growth engines powered by ${s[4]} and ${s[7]}. My strength is identifying high-impact growth levers through quantitative analysis and rapid experimentation across acquisition, activation, and retention.`,
  ],
};

const badgeVariants = [
  (name: string) => `Verified ${name.replace(' Product Managers', '').replace(' Product Owners', '')} Expert`,
  (name: string) => `Top ${name.replace(' Product Managers', '').replace(' Product Owners', '')} Talent`,
  (name: string) => `Vetted ${name.replace(' Product Managers', '').replace(' Product Owners', '')} Pro`,
];

// ---------------------------------------------------------------------------
// Template profiles generator
// ---------------------------------------------------------------------------
export function generatePMProfiles(name: string, skills: string[]): ProfileData[] {
  const sub = pmSubcategories.find(s => s.name === name);
  const slug = sub?.slug || 'technical';
  const hash = simpleHash(name);

  const idx1 = hash % profilePool.length;
  const idx2 = (hash + 4) % profilePool.length;
  const idx3 = (hash + 7) % profilePool.length;
  const indices = [idx1, idx2, idx3];
  // Ensure unique indices
  if (indices[1] === indices[0]) indices[1] = (indices[1] + 1) % profilePool.length;
  if (indices[2] === indices[0] || indices[2] === indices[1]) indices[2] = (indices[2] + 2) % profilePool.length;

  const bios = bioTemplates[slug] || bioTemplates['technical'];

  return indices.map((idx, i) => {
    const p = profilePool[idx];
    const avatarNum = (hash + idx + i * 17) % 100;
    const bio = bios[i % bios.length];
    const badge = badgeVariants[(hash + i) % badgeVariants.length];
    const skillSet = [...skills.slice(i), ...skills.slice(0, i)].slice(0, 7);

    return {
      name: p.name,
      location: p.location,
      badge: badge(name),
      bio: bio(name, skills),
      skills: skillSet,
      availability: p.availability,
      previousCompany: p.company,
      avatar: `https://randomuser.me/api/portraits/${p.gender}/${avatarNum}.jpg`,
    };
  });
}

// ---------------------------------------------------------------------------
// Guide section templates
// ---------------------------------------------------------------------------
interface GuideTemplate {
  titles: ((n: string) => string)[];
  sections: ((n: string) => { subtitle: string; content: string }[])[];
}

const guideTemplates: Record<string, GuideTemplate> = {
  'technical': {
    titles: [
      (n: string) => `Why Hire ${n} Through HireDeveloper.sg`,
      (n: string) => `Key Skills to Look for in ${n}`,
      (n: string) => `Managing Remote ${n} from Singapore`,
    ],
    sections: [
      (n: string) => [
        { subtitle: 'Bridge Engineering and Business in Singapore', content: `Singapore's tech ecosystem demands product leaders who can speak both the language of engineering and business. A skilled ${n} understands API design, system architecture, and data modelling while keeping sight of commercial objectives. For companies operating in one-north, Marina Bay, or Changi Business Park, this dual fluency accelerates product delivery and reduces costly miscommunication between departments.` },
        { subtitle: 'Navigate Singapore\'s Regulated Industries', content: `From MAS-regulated fintech to GovTech digital services, Singapore's key growth sectors require product managers who understand technical constraints within regulatory frameworks. Experienced ${n} bring the ability to design compliant product architectures while maintaining the agility needed to compete in Southeast Asia's fast-moving markets.` },
        { subtitle: 'Accelerate Time to Market', content: `With Singapore's position as APAC's startup hub, speed matters. A ${n} with hands-on technical knowledge makes faster, better-informed decisions about scope, trade-offs, and technical debt. This translates directly into shorter development cycles and quicker market entry for your products.` },
      ],
      (n: string) => [
        { subtitle: 'Technical Fluency and Architecture Understanding', content: `Look for ${n} who can discuss system design, database schemas, and API contracts with your engineering team. In Singapore's competitive talent market, the best technical PMs have prior engineering experience or strong computer science foundations that allow them to evaluate technical proposals critically and write meaningful PRDs.` },
        { subtitle: 'Stakeholder Management Across Cultures', content: `Singapore's multicultural business environment requires ${n} who can communicate effectively with diverse teams spanning local enterprises, MNCs, and government agencies. The ability to manage stakeholders across different cultural contexts and organisational structures is essential for product success in APAC.` },
        { subtitle: 'Data-Driven Decision Making', content: `Top ${n} in Singapore leverage product analytics, A/B testing, and SQL to validate hypotheses before committing engineering resources. Look for candidates who demonstrate a track record of using quantitative evidence to drive product decisions, not just intuition.` },
      ],
      (n: string) => [
        { subtitle: 'Structured Communication Cadence', content: `Establish clear rituals: daily standups during Singapore business hours (GMT+8), weekly roadmap reviews, and monthly strategy sessions. Remote ${n} should maintain a product wiki or Confluence space that keeps all stakeholders aligned regardless of time zones.` },
        { subtitle: 'Shared Tooling and Visibility', content: `Ensure your remote ${n} use the same project management tools as your Singapore team: JIRA for sprint management, Figma for design reviews, and Notion or Confluence for documentation. Transparency in task status and decision rationale builds trust across distributed teams.` },
      ],
    ],
  },
  'product-owners': {
    titles: [
      (n: string) => `Why Hire ${n} Through HireDeveloper.sg`,
      (n: string) => `Essential Qualities of Great ${n}`,
      (n: string) => `Interview Tips for ${n} in Singapore`,
    ],
    sections: [
      (n: string) => [
        { subtitle: 'Maximise Agile Team Output in Singapore', content: `Singapore's tech companies increasingly operate in agile environments where ${n} play a critical role in maximising team velocity. A skilled PO ensures every sprint delivers features that move business metrics, eliminating waste and keeping development teams focused on what matters most to customers in Southeast Asian markets.` },
        { subtitle: 'Clear Backlog, Clear Direction', content: `In Singapore's fast-paced startup ecosystem, product backlogs can quickly become unwieldy. Experienced ${n} bring disciplined prioritisation frameworks, well-crafted user stories, and crystal-clear acceptance criteria that reduce ambiguity and rework, saving your engineering team valuable time and budget.` },
        { subtitle: 'Scale Without Bureaucracy', content: `Whether you are a Series A startup in Block71 or an MNC in Raffles Place, ${n} from HireDeveloper.sg integrate seamlessly into your existing agile workflows. They bring process maturity without unnecessary overhead, adapting their approach to your team's size and stage.` },
      ],
      (n: string) => [
        { subtitle: 'Backlog Mastery and Prioritisation', content: `The best ${n} maintain a well-groomed backlog that balances customer needs, technical debt, and business goals. In Singapore's competitive market, look for POs who use frameworks like RICE or WSJF to make transparent prioritisation decisions that the entire team can understand and support.` },
        { subtitle: 'Strong Communication with Distributed Teams', content: `Many Singapore companies work with engineering teams across multiple time zones. Effective ${n} write user stories that are self-explanatory, define acceptance criteria that leave no room for interpretation, and facilitate refinement sessions that bring clarity even when participants are remote.` },
        { subtitle: 'Metrics-Driven Mindset', content: `Top ${n} in Singapore track sprint velocity, cycle time, and customer satisfaction metrics to continuously improve team performance. They use retrospective data to identify bottlenecks and make evidence-based adjustments to sprint planning and release cadence.` },
      ],
      (n: string) => [
        { subtitle: 'Scenario-Based Interviews', content: `Present candidates with real-world scenarios common in Singapore's tech scene: conflicting stakeholder priorities, scope creep during a sprint, or a critical production bug mid-release. How they navigate these situations reveals their decision-making process and communication style.` },
        { subtitle: 'Assess Collaboration Skills', content: `Ask ${n} candidates to walk through how they run sprint planning, refinement, and reviews. The best POs for Singapore teams demonstrate cultural sensitivity, an ability to manage up and down, and experience working with diverse engineering teams across APAC.` },
      ],
    ],
  },
  'ai': {
    titles: [
      (n: string) => `Why Hire ${n} Through HireDeveloper.sg`,
      (n: string) => `Key Skills to Evaluate in ${n}`,
      (n: string) => `Building AI Products in Singapore's Smart Nation`,
      (n: string) => `Managing ${n} Remotely`,
    ],
    sections: [
      (n: string) => [
        { subtitle: 'Lead Singapore\'s AI Transformation', content: `Singapore's National AI Strategy and Smart Nation initiative have created enormous demand for ${n} who can translate AI capabilities into viable products. From IMDA-backed accelerators to enterprise AI adoption across banking, healthcare, and logistics, skilled AI PMs are essential for companies looking to capitalise on Singapore's position as APAC's AI innovation hub.` },
        { subtitle: 'Bridge Research and Commercial Reality', content: `The gap between AI research and production-ready products is where ${n} create the most value. They work with data scientists and ML engineers to define feasible product requirements, manage model performance expectations with stakeholders, and ensure AI solutions comply with Singapore's evolving AI governance framework.` },
        { subtitle: 'Responsible AI by Design', content: `Singapore's Model AI Governance Framework sets high standards for AI ethics and transparency. Experienced ${n} build responsible AI principles into the product development lifecycle from day one, ensuring your AI products meet regulatory expectations while maintaining user trust across diverse APAC markets.` },
      ],
      (n: string) => [
        { subtitle: 'ML Literacy and Model Evaluation', content: `Strong ${n} understand the fundamentals of machine learning: training vs inference, precision vs recall, overfitting, and data bias. In Singapore, where AI products serve multilingual, multicultural populations, look for PMs who can evaluate model performance across diverse user segments and edge cases.` },
        { subtitle: 'Data Strategy and Pipeline Understanding', content: `${n} should be able to define data requirements, assess data quality, and collaborate with data engineers on pipeline architecture. For Singapore companies dealing with PDPA compliance and cross-border data flows in ASEAN, this skill is particularly critical.` },
        { subtitle: 'Experimentation and Iteration', content: `AI products require continuous experimentation. The best ${n} design A/B tests that isolate model impact, define meaningful success metrics beyond accuracy, and build feedback loops that improve model performance over time.` },
      ],
      (n: string) => [
        { subtitle: 'Singapore\'s AI Ecosystem Advantage', content: `Singapore offers a unique concentration of AI talent, research institutions like A*STAR, and government support through AISG. ${n} who understand this ecosystem can leverage local partnerships, grants, and talent pools to accelerate your AI product development.` },
        { subtitle: 'Cross-Functional Alignment', content: `AI products touch every part of the organisation. Effective ${n} in Singapore facilitate alignment between data science teams, engineering, legal, compliance, and business units, ensuring that AI initiatives deliver measurable business outcomes while meeting regulatory standards.` },
      ],
      (n: string) => [
        { subtitle: 'Asynchronous Knowledge Sharing', content: `AI product development involves complex decisions about model architecture, data strategy, and evaluation criteria. Remote ${n} should maintain comprehensive documentation of decisions and trade-offs, using tools like Notion or Confluence to keep Singapore-based stakeholders informed.` },
        { subtitle: 'Regular Model Review Cadence', content: `Schedule weekly model performance reviews and bi-weekly product demos during Singapore business hours (GMT+8). This ensures your remote ${n} stays aligned with business objectives and model performance expectations.` },
      ],
    ],
  },
  'data': {
    titles: [
      (n: string) => `Why Hire ${n} Through HireDeveloper.sg`,
      (n: string) => `Core Competencies of ${n}`,
      (n: string) => `Data Product Strategy for Singapore Companies`,
    ],
    sections: [
      (n: string) => [
        { subtitle: 'Turn Data Into Competitive Advantage', content: `Singapore's position as a financial and logistics hub generates massive volumes of data. ${n} help organisations transform this raw data into products, dashboards, and insights that drive revenue and operational efficiency. From DBS to Grab, Singapore's most successful companies treat data as a product, and they need skilled PMs to lead that transformation.` },
        { subtitle: 'Navigate Singapore\'s Data Regulations', content: `With PDPA requirements, cross-border data transfer rules, and industry-specific regulations from MAS and IMDA, Singapore companies need ${n} who understand the regulatory landscape. Experienced data PMs build compliance into the product architecture from day one, avoiding costly retrofits and ensuring user trust.` },
        { subtitle: 'Democratise Data Across the Organisation', content: `The best ${n} build self-service analytics platforms that empower business users to access insights without bottlenecking the data engineering team. In Singapore's competitive hiring market, this approach scales better than hiring analysts for every department.` },
      ],
      (n: string) => [
        { subtitle: 'SQL and Analytics Proficiency', content: `${n} must be hands-on with SQL and analytics tools. In Singapore's data-driven industries, PMs who can write queries, build dashboards in Tableau or Mixpanel, and analyse funnel metrics independently make faster decisions and earn credibility with their engineering teams.` },
        { subtitle: 'Data Pipeline and Architecture Awareness', content: `While ${n} do not need to build pipelines, they should understand ETL processes, data warehousing, and streaming architectures. This knowledge is critical when defining data product requirements and evaluating technical trade-offs for Singapore enterprises processing high-volume transactional data.` },
        { subtitle: 'Business Intelligence and Storytelling', content: `The ability to translate complex data into clear business narratives is what separates good ${n} from great ones. In Singapore's multilingual business environment, look for PMs who can present data insights to C-suite executives, regional managers, and technical teams with equal clarity.` },
      ],
      (n: string) => [
        { subtitle: 'Data Mesh and Ownership Models', content: `Singapore enterprises are increasingly adopting data mesh architectures that distribute data ownership across domain teams. ${n} who understand this paradigm can design governance frameworks and data contracts that maintain quality while enabling team autonomy.` },
        { subtitle: 'Real-Time Analytics for APAC Markets', content: `With Singapore serving as APAC headquarters for many MNCs, ${n} often need to build real-time dashboards and alerting systems that monitor business performance across multiple time zones and markets. Experience with streaming data and real-time analytics platforms is highly valued.` },
      ],
    ],
  },
  'growth': {
    titles: [
      (n: string) => `Why Hire ${n} Through HireDeveloper.sg`,
      (n: string) => `Essential Growth PM Skills`,
      (n: string) => `Growth Strategies for Singapore's Market`,
    ],
    sections: [
      (n: string) => [
        { subtitle: 'Drive Sustainable Growth in Southeast Asia', content: `Singapore is the launchpad for Southeast Asian expansion, and ${n} are the catalysts that turn promising products into market leaders. With expertise in funnel optimisation, experimentation, and user acquisition, growth PMs identify the highest-leverage opportunities to scale your product across Singapore and the broader APAC region.` },
        { subtitle: 'Experimentation at Scale', content: `The best ${n} run dozens of experiments simultaneously, using rigorous statistical methods to identify what works. In Singapore's competitive consumer and B2B markets, where customer acquisition costs are rising, this scientific approach to growth is the difference between burning cash and building a sustainable business.` },
        { subtitle: 'Product-Led Growth Expertise', content: `Singapore's SaaS ecosystem is shifting toward product-led growth models where the product itself drives acquisition, activation, and retention. Experienced ${n} design viral loops, optimise onboarding flows, and build features that turn users into advocates, reducing dependence on paid marketing channels.` },
      ],
      (n: string) => [
        { subtitle: 'Quantitative Analysis and Experimentation', content: `${n} must be fluent in A/B testing methodology, statistical significance, and cohort analysis. In Singapore, where user bases span diverse demographics and multiple languages, the ability to segment experiments and interpret results accurately across different user groups is critical.` },
        { subtitle: 'Funnel Optimisation and User Psychology', content: `Look for ${n} who can map the entire user journey and identify drop-off points with surgical precision. The best growth PMs in Singapore combine quantitative funnel analysis with qualitative user research to understand not just where users churn, but why.` },
        { subtitle: 'Go-to-Market and Channel Strategy', content: `Singapore's compact but sophisticated market requires nuanced channel strategies. Effective ${n} know how to balance organic search, paid acquisition, partnerships, and community-driven growth to maximise reach while maintaining unit economics.` },
      ],
      (n: string) => [
        { subtitle: 'Localisation for APAC Expansion', content: `${n} working from Singapore often lead growth across multiple APAC markets. Understanding cultural nuances, payment preferences, and regulatory differences between Singapore, Malaysia, Indonesia, and the Philippines is essential for scaling growth playbooks across the region.` },
        { subtitle: 'Retention and Monetisation in Singapore', content: `In Singapore's mature digital economy, acquisition costs are high and retention is king. ${n} should focus on building engagement loops, optimising pricing strategies, and developing referral programmes that leverage Singapore's dense, well-connected professional networks.` },
        { subtitle: 'Leveraging Singapore\'s Startup Ecosystem', content: `From LaunchPad at one-north to BLOCK71 and Plug and Play, Singapore offers a vibrant startup ecosystem. Savvy ${n} tap into these networks for partnership opportunities, co-marketing initiatives, and distribution channels that accelerate growth without proportional increases in spend.` },
      ],
    ],
  },
};

export function generatePMGuideSections(name: string): GuideSection[] {
  const sub = pmSubcategories.find(s => s.name === name);
  const slug = sub?.slug || 'technical';
  const templates = guideTemplates[slug] || guideTemplates['technical'];

  return templates.titles.map((titleFn, i) => ({
    title: titleFn(name),
    subsections: templates.sections[i](name),
  }));
}

// ---------------------------------------------------------------------------
// PM Subcategories Data
// ---------------------------------------------------------------------------
export const pmSubcategories: PMSubcategory[] = [
  {
    slug: 'technical',
    name: 'Technical Product Managers',
    metaTitle: 'Hire Technical Product Managers in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Technical Product Managers in Singapore. Experts in system design, APIs, and agile delivery for fintech, SaaS, and enterprise products.',
    heroCount: 1890,
    heroDescription: 'Our 1,890 Technical Product Managers combine deep engineering knowledge with strategic product thinking. They bridge the gap between your Singapore development teams and business stakeholders, ensuring technically sound products reach market faster.',
    skills: ['Technical Architecture', 'API Design', 'System Design', 'Agile/Scrum', 'SQL', 'Data Modeling', 'JIRA', 'Confluence', 'Stakeholder Management', 'Roadmapping'],
    relatedSlugs: ['product-owners', 'ai', 'data'],
  },
  {
    slug: 'product-owners',
    name: 'Product Owners',
    metaTitle: 'Hire Product Owners in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire experienced Product Owners in Singapore. Certified Scrum POs skilled in backlog management, sprint planning, and agile delivery for APAC teams.',
    heroCount: 2340,
    heroDescription: 'Our 2,340 Product Owners are agile specialists who maximise your development team\'s output. From startups in Block71 to enterprises in Raffles Place, they bring disciplined backlog management and clear sprint execution to Singapore teams.',
    skills: ['Backlog Management', 'User Stories', 'Sprint Planning', 'Scrum', 'Acceptance Criteria', 'Stakeholder Management', 'JIRA', 'Prioritization', 'Release Planning', 'Agile Metrics'],
    relatedSlugs: ['technical', 'growth', 'data'],
  },
  {
    slug: 'ai',
    name: 'AI Product Managers',
    metaTitle: 'Hire AI Product Managers in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire AI Product Managers in Singapore. Experts in ML, NLP, and computer vision product strategy aligned with Singapore\'s Smart Nation AI initiatives.',
    heroCount: 1120,
    heroDescription: 'Our 1,120 AI Product Managers specialise in turning machine learning capabilities into market-ready products. They navigate Singapore\'s AI governance framework and Smart Nation ecosystem to deliver responsible, impactful AI solutions.',
    skills: ['Machine Learning', 'NLP', 'Computer Vision', 'Data Strategy', 'AI Ethics', 'Python', 'Model Evaluation', 'Product Strategy', 'A/B Testing', 'MLOps'],
    relatedSlugs: ['technical', 'data', 'growth'],
  },
  {
    slug: 'data',
    name: 'Data Product Managers',
    metaTitle: 'Hire Data Product Managers in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire Data Product Managers in Singapore. Skilled in SQL, analytics, BI, and data pipelines for Singapore\'s banking, logistics, and enterprise sectors.',
    heroCount: 1560,
    heroDescription: 'Our 1,560 Data Product Managers transform raw data into strategic business assets. They build analytics platforms and data products for Singapore\'s data-intensive industries, from financial services in the CBD to logistics hubs across the island.',
    skills: ['SQL', 'Data Analytics', 'Business Intelligence', 'Tableau', 'Data Pipelines', 'A/B Testing', 'Statistical Analysis', 'Product Analytics', 'Mixpanel', 'Data Governance'],
    relatedSlugs: ['ai', 'technical', 'growth'],
  },
  {
    slug: 'growth',
    name: 'Growth Product Managers',
    metaTitle: 'Hire Growth Product Managers in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire Growth Product Managers in Singapore. Experts in funnel optimisation, A/B testing, and product-led growth for startups scaling across APAC.',
    heroCount: 980,
    heroDescription: 'Our 980 Growth Product Managers are specialists in scaling products through experimentation and data-driven optimisation. They help Singapore startups and scale-ups unlock sustainable growth across Southeast Asian markets.',
    skills: ['Growth Strategy', 'Funnel Optimization', 'A/B Testing', 'User Acquisition', 'Retention', 'Analytics', 'SEO', 'Product-Led Growth', 'Pricing Strategy', 'Go-to-Market'],
    relatedSlugs: ['data', 'product-owners', 'ai'],
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------
export function getPMSubcategoryBySlug(slug: string): PMSubcategory | undefined {
  return pmSubcategories.find(s => s.slug === slug);
}

export function getAllPMSubcategorySlugs(): string[] {
  return pmSubcategories.map(s => s.slug);
}

export function getRelatedPMSubcategories(slug: string, limit: number = 3): PMSubcategory[] {
  const sub = pmSubcategories.find(s => s.slug === slug);
  if (!sub) return [];
  return sub.relatedSlugs
    .map(rs => pmSubcategories.find(s => s.slug === rs))
    .filter((s): s is PMSubcategory => Boolean(s))
    .slice(0, limit);
}
