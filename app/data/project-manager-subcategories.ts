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

export interface ProjMSubcategory {
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
interface ProjMProfileTemplate {
  name: string;
  location: string;
  company: { name: string; logo: string };
  availability: string;
  gender: 'men' | 'women';
}

const projMProfilePool: ProjMProfileTemplate[] = [
  { name: 'Wei Lin T.', location: 'Singapore (UTC+8)', company: { name: 'GovTech', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Rahul S.', location: 'Singapore (UTC+8)', company: { name: 'DBS Bank', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
  { name: 'Ai Ling C.', location: 'Singapore (UTC+8)', company: { name: 'Grab', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Arjun P.', location: 'Singapore (UTC+8)', company: { name: 'Shopee', logo: '' }, availability: 'Full-time', gender: 'men' },
  { name: 'Mei Xian L.', location: 'Singapore (UTC+8)', company: { name: 'Stripe', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Daniel K.', location: 'Singapore (UTC+8)', company: { name: 'JP Morgan', logo: '' }, availability: 'Freelance', gender: 'men' },
  { name: 'Siti N.', location: 'Singapore (UTC+8)', company: { name: 'Sea Group', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Jonathan W.', location: 'Singapore (UTC+8)', company: { name: 'Visa', logo: '' }, availability: 'Full-time', gender: 'men' },
  { name: 'Priya M.', location: 'Singapore (UTC+8)', company: { name: 'Carousell', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Marcus T.', location: 'Singapore (UTC+8)', company: { name: 'ByteDance', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
  { name: 'Li Wen H.', location: 'Singapore (UTC+8)', company: { name: 'Lazada', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Ryan G.', location: 'Singapore (UTC+8)', company: { name: 'Ant Group', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
];

const projMBioTemplates: ((role: string, skills: string[]) => string)[] = [
  (role, s) => `As a certified ${role} based in Singapore, I have led cross-functional teams across fintech, e-commerce, and Smart Nation initiatives for over 8 years. My expertise in ${s[0]} and ${s[1]} has enabled me to deliver complex programmes on time and within budget for clients ranging from MAS-regulated institutions in the CBD to high-growth startups at Block71.`,
  (role, s) => `With 10 years of experience as a ${role} in Singapore's tech ecosystem, I have driven digital transformation programmes across Marina Bay's financial district and one-north's innovation hub. My deep skills in ${s[0]}, ${s[2]}, and ${s[3]} have helped organisations navigate complexity and deliver measurable business outcomes.`,
  (role, s) => `I am a Singapore-based ${role} specialising in scaling agile practices for enterprises. From Changi Business Park to Mapletree Business City, I have coached teams and managed programmes that span multiple business units. My focus on ${s[1]} and ${s[4]} ensures sustainable delivery improvements that outlast any single engagement.`,
  (role, s) => `After leading delivery teams at two of Singapore's largest banks and a Smart Nation programme at GovTech, I now work as a freelance ${role}. My strengths in ${s[0]}, ${s[5]}, and ${s[2]} allow me to bridge the gap between strategic vision and day-to-day execution for organisations across the APAC region.`,
];

const projMBadgeVariants = [
  (name: string) => `Verified ${name}`,
  (name: string) => `Top-Rated ${name}`,
  (name: string) => `Certified ${name}`,
];

// ---------------------------------------------------------------------------
// Profile generator — returns 3 profiles per subcategory
// ---------------------------------------------------------------------------
export function generateProjMProfiles(name: string, skills: string[]): ProfileData[] {
  const hash = simpleHash(name);

  const idx1 = hash % projMProfilePool.length;
  const idx2 = (hash + 4) % projMProfilePool.length;
  const idx3 = (hash + 8) % projMProfilePool.length;

  const p1 = projMProfilePool[idx1];
  const p2 = projMProfilePool[idx2 === idx1 ? (idx2 + 1) % projMProfilePool.length : idx2];
  const rawIdx3 = idx3 === idx1 || idx3 === idx2 ? (idx3 + 2) % projMProfilePool.length : idx3;
  const p3 = projMProfilePool[rawIdx3];

  const avatarNum1 = (hash + idx1) % 100;
  const avatarNum2 = (hash + idx2 + 33) % 100;
  const avatarNum3 = (hash + rawIdx3 + 67) % 100;

  const bio1 = projMBioTemplates[hash % projMBioTemplates.length];
  const bio2 = projMBioTemplates[(hash + 1) % projMBioTemplates.length];
  const bio3 = projMBioTemplates[(hash + 2) % projMBioTemplates.length];

  const badge1 = projMBadgeVariants[hash % projMBadgeVariants.length];
  const badge2 = projMBadgeVariants[(hash + 1) % projMBadgeVariants.length];
  const badge3 = projMBadgeVariants[(hash + 2) % projMBadgeVariants.length];

  const skillSet1 = skills.slice(0, 7);
  const skillSet2 = [...skills.slice(3), ...skills.slice(0, 3)].slice(0, 7);
  const skillSet3 = [...skills.slice(5), ...skills.slice(0, 5)].slice(0, 7);

  return [
    {
      name: p1.name,
      location: p1.location,
      badge: badge1(name),
      bio: bio1(name, skills),
      skills: skillSet1,
      availability: p1.availability,
      previousCompany: p1.company,
      avatar: `https://randomuser.me/api/portraits/${p1.gender}/${avatarNum1}.jpg`,
    },
    {
      name: p2.name,
      location: p2.location,
      badge: badge2(name),
      bio: bio2(name, skills),
      skills: skillSet2,
      availability: p2.availability,
      previousCompany: p2.company,
      avatar: `https://randomuser.me/api/portraits/${p2.gender}/${avatarNum2}.jpg`,
    },
    {
      name: p3.name,
      location: p3.location,
      badge: badge3(name),
      bio: bio3(name, skills),
      skills: skillSet3,
      availability: p3.availability,
      previousCompany: p3.company,
      avatar: `https://randomuser.me/api/portraits/${p3.gender}/${avatarNum3}.jpg`,
    },
  ];
}

// ---------------------------------------------------------------------------
// Guide section templates — project management focused
// ---------------------------------------------------------------------------
interface ProjMGuideSectionTpl {
  t1: (n: string) => string;
  t2: (n: string) => string;
  t3: (n: string) => string;
  s1: (n: string) => { subtitle: string; content: string }[];
  s2: (n: string) => { subtitle: string; content: string }[];
  s3: (n: string) => { subtitle: string; content: string }[];
}

const projMGuideTemplates: ProjMGuideSectionTpl[] = [
  {
    t1: (n) => `Why Your Singapore Business Needs a ${n}`,
    t2: (n) => `How to Find the Right ${n} in Singapore`,
    t3: (n) => `Working Effectively with a ${n}`,
    s1: (n) => [
      { subtitle: 'Accelerate Delivery in a Competitive Market', content: `Singapore's tech ecosystem moves fast. From fintech startups in Block71 to Smart Nation initiatives across government agencies, the ability to ship quality products on time is a strategic advantage. A skilled ${n} ensures your teams deliver consistently, removing blockers and aligning stakeholders so engineers can focus on building rather than coordinating.` },
      { subtitle: 'Bridge Business and Technology', content: `In Singapore's diverse business landscape — spanning MAS-regulated financial institutions in the CBD, logistics hubs in Tuas, and innovation labs at one-north — a ${n} translates business objectives into actionable delivery plans. They ensure that what gets built actually solves the problems that matter, reducing costly rework and misalignment.` },
      { subtitle: 'Navigate Cross-Cultural Teams', content: `Singapore's workforce is uniquely multicultural. A ${n} experienced in the local market understands how to facilitate collaboration across diverse teams, bridge communication styles, and build the psychological safety needed for high-performing agile teams. This cultural fluency is especially critical for companies scaling across APAC from their Singapore headquarters.` },
    ],
    s2: (n) => [
      { subtitle: 'Key Skills to Evaluate', content: `When hiring a ${n} for your Singapore business, look beyond certifications. Prioritise candidates who demonstrate strong facilitation skills, a track record of delivering in complex environments, and experience working with distributed teams across the GMT+8 timezone. Ask for specific examples of how they have handled scope creep, stakeholder conflicts, or team scaling challenges in the APAC region.` },
      { subtitle: 'Assess Real-World Experience', content: `The best ${n} candidates can walk you through specific projects: what went well, what went wrong, and how they adapted. For Singapore roles, experience with government digital services, fintech compliance requirements, or large-scale e-commerce platforms signals the ability to handle the unique demands of the local market.` },
      { subtitle: 'Why HireDeveloper.sg', content: `Every ${n} on HireDeveloper.sg has been vetted through structured interviews and real-world case study assessments. Our candidates are ready to work within Singapore business hours and understand the local regulatory, cultural, and business landscape. Get matched with a pre-vetted ${n} in 48 hours.` },
    ],
    s3: (n) => [
      { subtitle: 'Set Clear Expectations', content: `Define success metrics, reporting cadence, and decision-making authority upfront. A ${n} delivers the most value when empowered to own the delivery process end-to-end. For Singapore businesses, align on working hours, public holiday schedules, and escalation paths to avoid friction.` },
      { subtitle: 'Provide Organisational Context', content: `Share your company's strategic goals, team dynamics, and any legacy processes or tools. The more context your ${n} has about how your Singapore organisation operates — from budget cycles to vendor relationships — the faster they can deliver meaningful impact.` },
      { subtitle: 'Trust the Process', content: `Meaningful delivery improvements take time. Give your ${n} at least 2-3 sprints to assess the current state, implement changes, and demonstrate measurable improvements. Quick wins exist, but sustainable transformation requires patience and commitment from leadership.` },
    ],
  },
  {
    t1: (n) => `The Strategic Value of Hiring a ${n}`,
    t2: (n) => `Best Practices for Engaging a ${n}`,
    t3: (n) => `Maximising ROI from Your ${n}`,
    s1: (n) => [
      { subtitle: 'Reduce Time-to-Market in Southeast Asia', content: `In Singapore's competitive tech landscape, speed matters. Whether you are launching a fintech product under MAS guidelines, rolling out a Smart Nation initiative, or scaling an e-commerce platform across APAC, a ${n} ensures your delivery pipeline runs efficiently. They identify bottlenecks early, keep teams aligned, and ensure that your product reaches the market before the window of opportunity closes.` },
      { subtitle: 'Protect Your Investment', content: `Software projects are expensive, and failed projects are even more so. A ${n} provides the governance, risk management, and stakeholder alignment needed to protect your investment. For Singapore businesses managing budgets in SGD while coordinating with offshore teams, this oversight is critical to avoiding costly overruns and scope creep.` },
      { subtitle: 'Scale Delivery Capacity', content: `As your Singapore business grows, your delivery capacity needs to scale with it. A ${n} builds the processes, rituals, and team structures that allow you to add engineers, designers, and product managers without losing velocity. From Marina Bay offices to distributed teams across APAC, they ensure that growth does not come at the cost of quality.` },
    ],
    s2: (n) => [
      { subtitle: 'Define the Engagement Model', content: `Clarify whether you need a full-time embedded ${n}, a fractional engagement, or project-based support. For Singapore startups at Block71 or LaunchPad, a fractional model often provides the expertise you need without the overhead of a full-time hire. Larger enterprises in the CBD may benefit from a dedicated, embedded ${n}.` },
      { subtitle: 'Align on Tools and Methodology', content: `Ensure your ${n} is comfortable with your existing toolchain — whether that is JIRA, Confluence, Linear, or Notion. Discuss methodology preferences early: Scrum, Kanban, SAFe, or a hybrid approach. The best ${n} professionals adapt their methods to your context rather than forcing a rigid framework.` },
      { subtitle: 'Why HireDeveloper.sg', content: `Our ${n} professionals have been assessed through practical case studies, methodology deep-dives, and reference checks with Singapore-based clients. We verify their ability to deliver results in the APAC market, with candidates ready to start within days. Get matched in 48 hours.` },
    ],
    s3: (n) => [
      { subtitle: 'Invest in Team Health', content: `A great ${n} does not just manage tasks — they build high-performing teams. Support their efforts to run retrospectives, address team morale, and create psychological safety. For Singapore teams navigating the pressures of a demanding work culture, this investment in team health pays dividends in retention and productivity.` },
      { subtitle: 'Measure Outcomes, Not Outputs', content: `Track delivery metrics that matter: cycle time, deployment frequency, lead time, and customer satisfaction. Avoid vanity metrics like velocity in isolation. A skilled ${n} will help you build dashboards and reporting that connect delivery performance to business outcomes for your Singapore operation.` },
      { subtitle: 'Enable Continuous Improvement', content: `The best ${n} professionals build self-improving teams. Support their efforts to run experiments, adjust processes, and evolve ways of working. For Singapore companies scaling from startup to enterprise, this culture of continuous improvement is what separates sustainable growth from chaotic expansion.` },
    ],
  },
];

export function generateProjMGuideSections(name: string): GuideSection[] {
  const hash = simpleHash(name);
  const tpl = projMGuideTemplates[hash % projMGuideTemplates.length];

  const sections: GuideSection[] = [
    { title: tpl.t1(name), subsections: tpl.s1(name) },
    { title: tpl.t2(name), subsections: tpl.s2(name) },
    { title: tpl.t3(name), subsections: tpl.s3(name) },
  ];

  // Return 3 or 4 sections depending on hash for variety
  if (hash % 3 === 0) {
    sections.push({
      title: `${name} Demand in Singapore's Tech Ecosystem`,
      subsections: [
        { subtitle: 'Growing Demand Across Industries', content: `Singapore's push toward becoming a global Smart Nation has fuelled demand for experienced ${name} professionals across every sector. From government digital services to fintech unicorns along Shenton Way, organisations are competing for talent that can drive agile delivery at scale. The concentration of regional headquarters in Singapore means that ${name} roles here often carry APAC-wide scope and responsibility.` },
        { subtitle: 'Competitive Compensation and Career Growth', content: `The Singapore market offers competitive compensation for ${name} professionals, particularly those with experience in financial services, government technology, or enterprise SaaS. With the city-state's position as APAC's premier tech hub — home to over 4,000 startups, 80 of the top 100 tech firms, and a thriving ecosystem stretching from one-north to Changi Business Park — career growth opportunities are abundant.` },
      ],
    });
  }

  return sections;
}


// ---------------------------------------------------------------------------
// Subcategory data
// ---------------------------------------------------------------------------
export const projMSubcategories: ProjMSubcategory[] = [
  {
    slug: 'scrum-masters',
    name: 'Scrum Masters',
    metaTitle: 'Hire Scrum Masters in Singapore',
    metaDescription: 'Hire pre-vetted Scrum Masters in Singapore who drive sprint delivery, facilitate agile ceremonies, and remove impediments for high-performing teams across fintech, e-commerce, and Smart Nation projects. Get matched in 48 hours.',
    heroCount: 2150,
    heroDescription: 'Our 2,150 Scrum Masters in Singapore facilitate agile ceremonies, protect sprint commitments, and coach development teams across the CBD, one-north, and Block71 — enabling faster delivery cycles for fintech platforms, government digital services, and high-growth startups.',
    skills: ['Scrum Framework', 'Sprint Planning', 'Retrospectives', 'Kanban', 'JIRA', 'Agile Metrics', 'Team Facilitation', 'Impediment Removal', 'Backlog Refinement', 'Continuous Improvement'],
    relatedSlugs: ['program-managers', 'agile-coaches'],
  },
  {
    slug: 'program-managers',
    name: 'Program Managers',
    metaTitle: 'Hire Program Managers in Singapore',
    metaDescription: 'Hire pre-vetted Program Managers in Singapore who coordinate complex, multi-team initiatives across fintech, logistics, and government sectors. Experienced with MAS compliance, Smart Nation programmes, and APAC-wide delivery. Get matched in 48 hours.',
    heroCount: 1780,
    heroDescription: 'Our 1,780 Program Managers in Singapore orchestrate large-scale initiatives spanning multiple teams and business units — from MAS-regulated fintech programmes in Marina Bay to cross-border e-commerce platforms and Smart Nation digital transformation projects.',
    skills: ['Program Management', 'Portfolio Management', 'Risk Management', 'Stakeholder Management', 'Budgeting', 'Resource Allocation', 'PMO', 'Strategic Planning', 'Cross-functional Leadership', 'Governance'],
    relatedSlugs: ['scrum-masters', 'agile-coaches'],
  },
  {
    slug: 'agile-coaches',
    name: 'Agile Coaches',
    metaTitle: 'Hire Agile Coaches in Singapore',
    metaDescription: 'Hire pre-vetted Agile Coaches in Singapore who drive enterprise agile transformations, mentor teams, and embed lean practices across organisations in the CBD, one-north, and Changi Business Park. Get matched in 48 hours.',
    heroCount: 1340,
    heroDescription: 'Our 1,340 Agile Coaches in Singapore guide organisations through agile transformations at every level — from coaching individual Scrum teams at Block71 startups to implementing SAFe across enterprise programmes for banks along Shenton Way and government agencies driving Smart Nation initiatives.',
    skills: ['Agile Transformation', 'SAFe', 'Lean', 'Coaching', 'Change Management', 'Team Building', 'Mentoring', 'Organizational Design', 'Agile Metrics', 'DevOps Culture'],
    relatedSlugs: ['scrum-masters', 'program-managers'],
  },
];


// ---------------------------------------------------------------------------
// Helper / lookup functions
// ---------------------------------------------------------------------------

export function getProjMSubcategoryBySlug(slug: string): ProjMSubcategory | undefined {
  return projMSubcategories.find((s) => s.slug === slug);
}

export function getAllProjMSubcategorySlugs(): string[] {
  return projMSubcategories.map((s) => s.slug);
}

export function getRelatedProjMSubcategories(slug: string, limit: number = 3): ProjMSubcategory[] {
  const sub = projMSubcategories.find((s) => s.slug === slug);
  if (!sub) return [];
  return sub.relatedSlugs
    .map((rs) => projMSubcategories.find((s) => s.slug === rs))
    .filter((s): s is ProjMSubcategory => Boolean(s))
    .slice(0, limit);
}
