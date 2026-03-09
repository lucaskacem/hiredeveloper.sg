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

export interface AssistantSubcategory {
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
interface AssistantProfileTemplate {
  name: string;
  location: string;
  company: { name: string; logo: string };
  availability: string;
  gender: 'men' | 'women';
}

const assistantProfilePool: AssistantProfileTemplate[] = [
  { name: 'Michelle T.', location: 'Singapore (UTC+8)', company: { name: 'Top Firm', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'David L.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
  { name: 'Priya N.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Ahmad R.', location: 'Singapore (UTC+8)', company: { name: 'Top Firm', logo: '' }, availability: 'Full-time', gender: 'men' },
  { name: 'Sarah C.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Jason W.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Freelance', gender: 'men' },
  { name: 'Nurul H.', location: 'Singapore (UTC+8)', company: { name: 'Top Firm', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Kevin S.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time', gender: 'men' },
  { name: 'Ling W.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Raj K.', location: 'Singapore (UTC+8)', company: { name: 'Top Firm', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
  { name: 'Emily F.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Marcus T.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
];

const assistantBioTemplates: Record<string, ((n: string, s: string[]) => string)[]> = {
  'Virtual Assistants': [
    (n, s) => `As an experienced ${n.replace(/s$/, '')}, I have spent the past 6 years supporting Singapore-based founders and executives with ${s[0]} and ${s[1]}. I thrive in fast-paced environments and have helped over 30 clients streamline their daily operations across the APAC region.`,
    (n, s) => `With a background in business administration and 8 years of remote support experience, I specialize in ${s[2]} and ${s[3]}. I have supported C-suite leaders at MNCs headquartered in Singapore's CBD, managing communications across multiple time zones from GMT+8 to PST.`,
    (n, s) => `I am a detail-oriented ${n.replace(/s$/, '')} with deep expertise in ${s[0]}, ${s[4]}, and ${s[5]}. My clients value my proactive approach to anticipating needs and my familiarity with Singapore's business culture and APAC coordination requirements.`,
    (n, s) => `After working in-house at two Singapore startups in Block71, I transitioned to freelance virtual assistance. My strengths include ${s[6]} and ${s[7]}, and I bring a startup mindset to every engagement — resourceful, adaptable, and results-driven.`,
  ],
  'Executive Assistants': [
    (n, s) => `As a seasoned ${n.replace(/s$/, '')}, I have provided high-level support to C-suite executives at MNCs and government-linked companies in Singapore for over 10 years. My expertise in ${s[0]} and ${s[1]} ensures that leaders can focus on strategic priorities while I handle the operational details.`,
    (n, s) => `With extensive experience supporting Managing Directors and Regional Heads across Singapore's CBD, I bring polished professionalism to ${s[2]} and ${s[3]}. I have coordinated board meetings at Raffles Place offices and managed complex APAC travel itineraries spanning 12 countries.`,
    (n, s) => `I am an ${n.replace(/s$/, '')} who thrives under pressure. My background includes supporting partners at Big Four firms in Singapore, where ${s[4]} and ${s[5]} were essential daily functions. I understand the discretion and precision that senior leadership demands.`,
    (n, s) => `After 8 years supporting executives at Singapore-based financial institutions in Marina Bay, I now offer my services as a freelance ${n.replace(/s$/, '')}. I excel at ${s[6]} and ${s[7]}, and I bring an intimate understanding of Singapore's corporate etiquette and APAC business protocols.`,
  ],
  'Administrative Assistants': [
    (n, s) => `As a dedicated ${n.replace(/s$/, '')}, I have kept offices running smoothly across Singapore for over 7 years. My expertise in ${s[0]} and ${s[1]} has supported teams ranging from 10-person startups in one-north to 200-person regional offices in Changi Business Park.`,
    (n, s) => `With a diploma in business administration from a Singapore polytechnic and 9 years of hands-on experience, I specialize in ${s[2]} and ${s[3]}. I bring structure and efficiency to every office I support, with a particular talent for implementing systems that reduce operational overhead.`,
    (n, s) => `I am an organized and reliable ${n.replace(/s$/, '')} with a proven track record in ${s[4]} and ${s[5]}. My experience spans SMEs and MNCs across Singapore, and I take pride in being the operational backbone that keeps teams focused on their core business.`,
    (n, s) => `After supporting regional offices in Singapore's CBD for 6 years, I understand the unique administrative needs of businesses operating across APAC. My strengths include ${s[6]} and ${s[7]}, and I am adept at coordinating across departments and time zones.`,
  ],
};

const assistantBadgeVariants = [
  (name: string) => `Verified ${name.replace(/s$/, '')}`,
  (name: string) => `Top-Rated ${name.replace(/s$/, '')}`,
  (name: string) => `Vetted ${name.replace(/s$/, '')}`,
];

// Template profiles generator — with subcategory-specific variation
export function generateAssistantProfiles(name: string, skills: string[]): ProfileData[] {
  const hash = simpleHash(name);

  const idx1 = hash % assistantProfilePool.length;
  const idx2 = (hash + 5) % assistantProfilePool.length;
  const idx3 = (hash + 9) % assistantProfilePool.length;
  const p1 = assistantProfilePool[idx1];
  const p2 = assistantProfilePool[idx2 === idx1 ? (idx2 + 1) % assistantProfilePool.length : idx2];
  const p3Idx = idx3 === idx1 || idx3 === idx2 ? (idx3 + 2) % assistantProfilePool.length : idx3;
  const p3 = assistantProfilePool[p3Idx];

  const avatarNum1 = (hash + idx1) % 100;
  const avatarNum2 = (hash + idx2 + 50) % 100;
  const avatarNum3 = (hash + p3Idx + 25) % 100;

  const bios = assistantBioTemplates[name] || assistantBioTemplates['Virtual Assistants'];
  const bio1 = bios[hash % bios.length];
  const bio2 = bios[(hash + 1) % bios.length];
  const bio3 = bios[(hash + 2) % bios.length];

  const badge1 = assistantBadgeVariants[hash % assistantBadgeVariants.length];
  const badge2 = assistantBadgeVariants[(hash + 1) % assistantBadgeVariants.length];
  const badge3 = assistantBadgeVariants[(hash + 2) % assistantBadgeVariants.length];

  const skillSet1 = skills.slice(0, 7);
  const skillSet2 = [...skills.slice(2), ...skills.slice(0, 2)].slice(0, 7);
  const skillSet3 = [...skills.slice(4), ...skills.slice(0, 4)].slice(0, 7);

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
// Guide section templates — varied by subcategory
// ---------------------------------------------------------------------------
interface AssistantGuideSectionTpl {
  t1: (n: string) => string;
  t2: (n: string) => string;
  t3: (n: string) => string;
  s1: (n: string) => { subtitle: string; content: string }[];
  s2: (n: string) => { subtitle: string; content: string }[];
  s3: (n: string) => { subtitle: string; content: string }[];
}

const assistantGuideTemplates: Record<string, AssistantGuideSectionTpl[]> = {
  'Virtual Assistants': [
    {
      t1: (n) => `Why Singapore Businesses Hire ${n}`,
      t2: (n) => `How to Find the Right ${n.replace(/s$/, '')} for Your Business`,
      t3: (n) => `Getting the Most from Your ${n.replace(/s$/, '')}`,
      s1: (n) => [
        { subtitle: 'Scale Without Overhead', content: `Singapore's office rents in the CBD are among the highest in Asia. Hiring a skilled ${n.replace(/s$/, '')} lets you scale your operational capacity without adding physical headcount, keeping your Raffles Place or Marina Bay office lean while maintaining exceptional productivity across your APAC operations.` },
        { subtitle: 'Focus on What Matters', content: `As a founder or executive in Singapore's fast-moving business environment, your time is your most valuable asset. A ${n.replace(/s$/, '')} handles the operational tasks — email management, scheduling, research, and data entry — so you can focus on strategy, fundraising, and growing your business across Southeast Asia.` },
        { subtitle: 'APAC-Ready Support', content: `Operating across the APAC region means coordinating across time zones from Tokyo to Sydney to Mumbai. A Singapore-based ${n.replace(/s$/, '')} working in GMT+8 provides the perfect hub for managing communications, scheduling meetings across time zones, and ensuring nothing falls through the cracks in your regional operations.` },
      ],
      s2: (n) => [
        { subtitle: 'Define Your Needs Clearly', content: `Before hiring a ${n.replace(/s$/, '')}, document the tasks you want to delegate. Whether it is inbox management, calendar coordination, or research for your Singapore business, a clear scope ensures you find the right match and get productive results from day one.` },
        { subtitle: 'Evaluate Communication Skills', content: `In Singapore's multilingual business environment, strong written and verbal communication is essential. Look for a ${n.replace(/s$/, '')} who can communicate professionally in English and ideally has experience with the cultural nuances of working with diverse teams across the APAC region.` },
        { subtitle: 'Why HireDeveloper.sg', content: `Every ${n.replace(/s$/, '')} on HireDeveloper.sg has been vetted through practical assessments and reference checks. Our candidates are experienced in supporting Singapore-based businesses and are ready to integrate into your workflow within GMT+8 business hours.` },
      ],
      s3: (n) => [
        { subtitle: 'Start with High-Impact Tasks', content: `Begin by delegating the tasks that consume the most time but require the least strategic input. Email triage, meeting scheduling, and travel booking are great starting points for your ${n.replace(/s$/, '')} and deliver immediate time savings for your Singapore leadership team.` },
        { subtitle: 'Establish Clear Processes', content: `Document your preferences for email responses, calendar management, and communication style. A well-briefed ${n.replace(/s$/, '')} becomes an extension of your professional presence, handling interactions with Singapore clients and APAC partners with the polish your brand demands.` },
      ],
    },
  ],
  'Executive Assistants': [
    {
      t1: (n) => `Why Singapore Executives Hire ${n}`,
      t2: (n) => `How to Find the Right ${n.replace(/s$/, '')} in Singapore`,
      t3: (n) => `Maximizing the Value of Your ${n.replace(/s$/, '')}`,
      s1: (n) => [
        { subtitle: 'Elevate Executive Productivity', content: `Singapore's C-suite leaders manage complex responsibilities spanning regional strategy, stakeholder relationships, and board governance. A dedicated ${n.replace(/s$/, '')} anticipates needs, manages competing priorities, and ensures that every minute of an executive's day is optimized for maximum impact across their APAC portfolio.` },
        { subtitle: 'Confidential and Professional Support', content: `Senior leaders deal with sensitive information daily — from M&A discussions to board resolutions and confidential correspondence with MAS or other regulatory bodies. An experienced ${n.replace(/s$/, '')} in Singapore understands the discretion required and maintains the highest standards of confidentiality and professionalism.` },
        { subtitle: 'Seamless Regional Coordination', content: `For executives overseeing operations across Southeast Asia and beyond, an ${n.replace(/s$/, '')} based in Singapore provides a strategic coordination hub. From arranging multi-city travel itineraries to preparing briefing documents for regional board meetings, they keep complex APAC operations running smoothly from the GMT+8 timezone.` },
      ],
      s2: (n) => [
        { subtitle: 'Prioritize Experience and Judgement', content: `When hiring an ${n.replace(/s$/, '')} for a Singapore-based role, look beyond technical skills. The best candidates demonstrate strong judgement, the ability to prioritize under pressure, and experience supporting senior leaders in corporate environments such as Raffles Place, Marina Bay Financial Centre, or one-north.` },
        { subtitle: 'Assess Cultural Fit', content: `An ${n.replace(/s$/, '')} represents you in every interaction. Ensure candidates understand Singapore's business culture, including formality expectations with government stakeholders, and can navigate the multicultural dynamics of APAC business relationships with poise and professionalism.` },
        { subtitle: 'Why HireDeveloper.sg', content: `Our ${n.replace(/s$/, '')} candidates have been vetted through scenario-based assessments and reference checks with previous executives. We verify their ability to handle high-pressure situations, maintain confidentiality, and deliver the caliber of support that Singapore's senior leaders expect.` },
      ],
      s3: (n) => [
        { subtitle: 'Build Trust Progressively', content: `Start with structured tasks like calendar management and travel booking, then gradually expand your ${n.replace(/s$/, '')}'s responsibilities to include stakeholder communication, board preparation, and project coordination. Trust built through consistent performance unlocks the full strategic value of the role.` },
        { subtitle: 'Invest in Onboarding', content: `Take the time to share your preferences, communication style, and key relationships. An ${n.replace(/s$/, '')} who understands your priorities and the way you work becomes exponentially more effective, anticipating needs before you articulate them and representing you flawlessly across your Singapore and APAC network.` },
      ],
    },
  ],
  'Administrative Assistants': [
    {
      t1: (n) => `Why Singapore Offices Need ${n}`,
      t2: (n) => `How to Hire the Right ${n.replace(/s$/, '')}`,
      t3: (n) => `Setting Your ${n.replace(/s$/, '')} Up for Success`,
      s1: (n) => [
        { subtitle: 'Keep Your Office Running Smoothly', content: `From SME offices in Ubi to regional headquarters in Changi Business Park, every Singapore business relies on strong administrative support. A skilled ${n.replace(/s$/, '')} manages the operational backbone of your office — filing systems, scheduling, inventory, and document processing — so your team can focus on revenue-generating activities.` },
        { subtitle: 'Reduce Operational Bottlenecks', content: `When administrative tasks pile up, the whole team slows down. A dedicated ${n.replace(/s$/, '')} prevents bottlenecks by maintaining organized filing systems, processing documents promptly, and coordinating meetings efficiently. For Singapore businesses managing multiple projects across APAC, this operational discipline is essential.` },
        { subtitle: 'Support Business Compliance', content: `Singapore businesses operate within a well-regulated environment. An experienced ${n.replace(/s$/, '')} helps maintain proper record keeping, document processing, and filing systems that support compliance with ACRA, IRAS, and other regulatory requirements, reducing the administrative burden on your core team.` },
      ],
      s2: (n) => [
        { subtitle: 'Look for Organizational Excellence', content: `The best ${n.replace(/s$/, '')} candidates demonstrate exceptional organizational skills. During interviews, ask about their approach to managing competing priorities, maintaining filing systems, and handling high-volume document processing in fast-paced Singapore office environments.` },
        { subtitle: 'Verify Technical Proficiency', content: `Modern administrative work requires proficiency with office software, scheduling tools, and document management systems. Ensure your ${n.replace(/s$/, '')} is comfortable with the tools your Singapore office uses, from Microsoft 365 and Google Workspace to industry-specific platforms.` },
        { subtitle: 'Why HireDeveloper.sg', content: `Every ${n.replace(/s$/, '')} on HireDeveloper.sg has been assessed for organizational skills, technical proficiency, and reliability. Our candidates have experience supporting Singapore businesses and are ready to contribute from their first day, working within standard Singapore business hours.` },
      ],
      s3: (n) => [
        { subtitle: 'Provide Clear Systems and Expectations', content: `Document your office procedures, filing conventions, and communication protocols. A well-onboarded ${n.replace(/s$/, '')} integrates faster and maintains the consistency your Singapore office depends on, especially when coordinating with teams across APAC.` },
        { subtitle: 'Empower Ownership of Administrative Functions', content: `Give your ${n.replace(/s$/, '')} ownership over specific administrative functions like supply management, meeting coordination, or record keeping. When they own a domain end-to-end, they become proactive problem-solvers who anticipate office needs and keep operations running seamlessly.` },
      ],
    },
  ],
};

export function generateAssistantGuideSections(name: string): GuideSection[] {
  const hash = simpleHash(name);
  const templates = assistantGuideTemplates[name] || assistantGuideTemplates['Virtual Assistants'];
  const tpl = templates[hash % templates.length];

  return [
    { title: tpl.t1(name), subsections: tpl.s1(name) },
    { title: tpl.t2(name), subsections: tpl.s2(name) },
    { title: tpl.t3(name), subsections: tpl.s3(name) },
  ];
}


// ---------------------------------------------------------------------------
// Subcategory data
// ---------------------------------------------------------------------------
const assistantSubcategories: Record<string, AssistantSubcategory> = {
  'virtual-assistants': {
    slug: 'virtual-assistants',
    name: 'Virtual Assistants',
    metaTitle: 'Hire Virtual Assistants in Singapore',
    metaDescription: 'Hire pre-vetted Virtual Assistants in Singapore who manage your email, calendar, research, and daily operations remotely. Ideal for founders and teams coordinating across APAC time zones from Singapore. Get matched in 48 hours.',
    heroCount: 2680,
    heroDescription: 'Our 2,680 Virtual Assistants support Singapore-based founders, executives, and growing teams with email management, calendar coordination, research, data entry, and customer support — keeping your APAC operations running smoothly from the GMT+8 timezone.',
    skills: ['Email Management', 'Calendar Management', 'Data Entry', 'Research', 'Social Media', 'Customer Support', 'Bookkeeping', 'Travel Planning', 'CRM Management', 'Document Preparation'],
    relatedSlugs: ['executive-assistants', 'administrative-assistants'],
  },
  'executive-assistants': {
    slug: 'executive-assistants',
    name: 'Executive Assistants',
    metaTitle: 'Hire Executive Assistants in Singapore',
    metaDescription: 'Hire pre-vetted Executive Assistants in Singapore who provide high-level support to C-suite leaders and senior management. Experienced with board preparation, confidential correspondence, and APAC regional coordination. Get matched in 48 hours.',
    heroCount: 1520,
    heroDescription: 'Our 1,520 Executive Assistants provide polished, high-level support to Singapore-based C-suite leaders and senior executives — from board meeting preparation and stakeholder communication to complex APAC travel management and strategic calendar coordination.',
    skills: ['Executive Support', 'Board Meeting Preparation', 'Travel Management', 'Expense Reports', 'Confidential Correspondence', 'Event Planning', 'Stakeholder Communication', 'Project Coordination', 'Presentation Design', 'Strategic Calendar Management'],
    relatedSlugs: ['virtual-assistants', 'administrative-assistants'],
  },
  'administrative-assistants': {
    slug: 'administrative-assistants',
    name: 'Administrative Assistants',
    metaTitle: 'Hire Administrative Assistants in Singapore',
    metaDescription: 'Hire pre-vetted Administrative Assistants in Singapore who keep your office organized and efficient. Skilled in filing systems, scheduling, record keeping, and document processing for Singapore CBD offices and regional teams. Get matched in 48 hours.',
    heroCount: 1890,
    heroDescription: 'Our 1,890 Administrative Assistants provide reliable office support for Singapore businesses — managing filing systems, scheduling, data entry, inventory, record keeping, and document processing to keep your operations running efficiently across the region.',
    skills: ['Office Administration', 'Filing Systems', 'Data Entry', 'Scheduling', 'Inventory Management', 'Record Keeping', 'Reception Duties', 'Document Processing', 'Supply Management', 'Meeting Coordination'],
    relatedSlugs: ['virtual-assistants', 'executive-assistants'],
  },
};


// ====== Helper Functions ======

export function getAssistantSubcategoryBySlug(slug: string): AssistantSubcategory | undefined {
  return assistantSubcategories[slug];
}

export function getAllAssistantSubcategorySlugs(): string[] {
  return Object.keys(assistantSubcategories);
}

export function getRelatedAssistantSubcategories(slug: string, limit: number = 8): AssistantSubcategory[] {
  const sub = assistantSubcategories[slug];
  if (!sub) return [];
  return sub.relatedSlugs
    .map(s => assistantSubcategories[s])
    .filter(Boolean)
    .slice(0, limit);
}

export { assistantSubcategories, generateAssistantProfiles, generateAssistantGuideSections };
