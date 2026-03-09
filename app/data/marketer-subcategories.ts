export interface MarketingProfileData {
  name: string;
  location: string;
  badge: string;
  bio: string;
  skills: string[];
  availability: string;
  previousCompany: { name: string; logo: string };
  avatar: string;
}

export interface MarketingGuideSection {
  title: string;
  subsections: {
    subtitle: string;
    content: string;
  }[];
}

export interface MarketingSubcategory {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroCount: number;
  heroDescription: string;
  parentCategory: string;
  relatedSlugs: string[];
  relatedLocations: string[];
  skills: string[];
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
interface MarketingProfileTemplate {
  name: string;
  location: string;
  company: { name: string; logo: string };
  availability: string;
  gender: 'men' | 'women';
}

const marketerProfilePool: MarketingProfileTemplate[] = [
  { name: 'Layla K.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Omar B.', location: 'Singapore (UTC+8)', company: { name: 'Top Brand', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
  { name: 'Priya D.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Khalid M.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Full-time', gender: 'men' },
  { name: 'Sophie W.', location: 'Singapore (UTC+8)', company: { name: 'Top Brand', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'Rashed A.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Freelance', gender: 'men' },
  { name: 'Nadia S.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Full-time & Freelance', gender: 'women' },
  { name: 'James C.', location: 'Singapore (UTC+8)', company: { name: 'Top Brand', logo: '' }, availability: 'Full-time', gender: 'men' },
  { name: 'Fatima H.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Vikram R.', location: 'Singapore (UTC+8)', company: { name: 'Top Company', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
  { name: 'Sara T.', location: 'Singapore (UTC+8)', company: { name: 'Top Brand', logo: '' }, availability: 'Freelance', gender: 'women' },
  { name: 'Alex M.', location: 'Singapore (UTC+8)', company: { name: 'Top Agency', logo: '' }, availability: 'Full-time & Freelance', gender: 'men' },
];

const marketingBioTemplatesByCategory: Record<string, ((n: string, s: string[]) => string)[]> = {
  'CRO & Optimization': [
    (n, s) => `As an experienced ${n}, I have spent the past 7 years helping SaaS companies and e-commerce brands increase their conversion rates. My expertise in ${s[0]} and ${s[1]} has driven measurable revenue growth for over 40 clients across the APAC region.`,
    (n, s) => `With a data-driven approach to ${s[0]}, I have optimized hundreds of funnels, pages, and user flows. As a ${n}, I combine quantitative analysis with UX intuition to deliver results that compound over time.`,
    (n, s) => `I specialize as a ${n} in turning traffic into revenue. My work with ${s[1]} and ${s[2]} has helped startups and enterprises alike achieve double-digit conversion improvements within weeks of engagement.`,
    (n, s) => `After leading CRO teams at two high-growth startups, I now consult as a freelance ${n}. My focus areas include ${s[0]}, ${s[3]}, and building experimentation cultures that drive continuous improvement.`,
  ],
  'Content & Copy': [
    (n, s) => `As a ${n}, I craft compelling narratives that drive action. Over 10 years, I have written for brands across SaaS, fintech, and e-commerce, with expertise in ${s[0]} and ${s[1]} that consistently outperforms benchmarks.`,
    (n, s) => `Words are my currency. As a ${n} with deep expertise in ${s[0]} and ${s[2]}, I have helped over 50 brands find their voice, sharpen their messaging, and connect authentically with their audiences.`,
    (n, s) => `I bring a strategic lens to every piece of content I create. As a ${n}, my work in ${s[1]} and ${s[3]} is grounded in audience research, SEO best practices, and a relentless focus on measurable outcomes.`,
    (n, s) => `After leading content teams at agencies in Singapore and London, I now work as a freelance ${n}. I specialize in ${s[0]} and ${s[4]}, creating content that ranks, converts, and builds lasting brand equity.`,
  ],
  'SEO & Technical': [
    (n, s) => `As a ${n}, I have helped over 60 websites achieve page-one rankings and significant organic traffic growth. My expertise spans ${s[0]}, ${s[1]}, and the technical foundations that search engines reward.`,
    (n, s) => `With 9 years of experience in technical SEO and analytics, I bring a systematic approach to ${s[0]} and ${s[2]}. As a ${n}, I turn data into actionable insights that drive measurable organic growth.`,
    (n, s) => `I combine deep technical knowledge with strategic thinking. As a ${n}, my work in ${s[1]} and ${s[3]} has helped clients across Southeast Asia region dominate their search verticals and outpace competitors.`,
    (n, s) => `From site audits to schema implementation, I handle the full spectrum of ${s[0]} as a ${n}. My data-first approach and expertise in ${s[4]} ensure that every optimization is backed by evidence.`,
  ],
  'Growth & Strategy': [
    (n, s) => `As a ${n}, I have helped launch over 30 products and campaigns across the APAC region. My strategic approach to ${s[0]} and ${s[1]} consistently delivers results that exceed client expectations.`,
    (n, s) => `I think in systems, not tactics. As a ${n} with expertise in ${s[0]} and ${s[2]}, I build marketing strategies that create compounding growth and sustainable competitive advantages.`,
    (n, s) => `With a background in both marketing and product management, I bring a unique perspective as a ${n}. My focus on ${s[1]} and ${s[3]} bridges the gap between business strategy and execution.`,
    (n, s) => `After scaling two startups from zero to seven-figure revenue, I now consult as a freelance ${n}. I specialize in ${s[0]}, ${s[4]}, and the strategic frameworks that turn ideas into traction.`,
  ],
  'Acquisition & Retention': [
    (n, s) => `As a ${n}, I have managed over $5M in ad spend and built retention systems that dramatically reduce churn. My expertise in ${s[0]} and ${s[1]} delivers measurable ROI for every dollar invested.`,
    (n, s) => `I specialize in the full customer lifecycle. As a ${n} with deep skills in ${s[0]} and ${s[2]}, I build acquisition engines and retention loops that drive sustainable, profitable growth.`,
    (n, s) => `With 8 years of experience in performance marketing and lifecycle optimization, I bring a data-driven approach to ${s[1]} and ${s[3]}. As a ${n}, I focus on metrics that matter: CAC, LTV, and net revenue retention.`,
    (n, s) => `After leading growth teams at agencies serving Fortune 500 clients, I now work as a freelance ${n}. My focus areas include ${s[0]}, ${s[4]}, and building scalable acquisition channels in competitive markets.`,
  ],
};

const marketingBadgeVariants = [
  (name: string) => `Verified ${name}`,
  (name: string) => `Top-Rated ${name}`,
  (name: string) => `Certified ${name}`,
];

// Template profiles generator — with category-specific variation
function generateMarketingProfiles(name: string, skills: string[]): MarketingProfileData[] {
  const sub = marketingSubcategories[Object.keys(marketingSubcategories).find(k => marketingSubcategories[k].name === name) || ''];
  const parentCategory = sub?.parentCategory || 'Growth & Strategy';
  const hash = simpleHash(name);

  const idx1 = hash % marketerProfilePool.length;
  const idx2 = (hash + 5) % marketerProfilePool.length;
  const p1 = marketerProfilePool[idx1];
  const p2 = marketerProfilePool[idx2 === idx1 ? (idx2 + 1) % marketerProfilePool.length : idx2];

  const avatarNum1 = (hash + idx1) % 100;
  const avatarNum2 = (hash + idx2 + 50) % 100;

  const bios = marketingBioTemplatesByCategory[parentCategory] || marketingBioTemplatesByCategory['Growth & Strategy'];
  const bio1 = bios[hash % bios.length];
  const bio2 = bios[(hash + 2) % bios.length];

  const badge1 = marketingBadgeVariants[hash % marketingBadgeVariants.length];
  const badge2 = marketingBadgeVariants[(hash + 1) % marketingBadgeVariants.length];

  const skillSet1 = skills.slice(0, 7);
  const skillSet2 = [...skills.slice(2), ...skills.slice(0, 2)].slice(0, 7);

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
  ];
}

// ---------------------------------------------------------------------------
// Guide section templates — varied by parent category
// ---------------------------------------------------------------------------
interface MarketingGuideSectionTpl {
  t1: (n: string) => string;
  t2: (n: string) => string;
  s1: (n: string) => { subtitle: string; content: string }[];
  s2: (n: string) => { subtitle: string; content: string }[];
}

const marketingGuideTemplatesByCategory: Record<string, MarketingGuideSectionTpl[]> = {
  'CRO & Optimization': [
    {
      t1: (n) => `Why Your Singapore Business Needs a ${n}`,
      t2: (n) => `How to Find the Right ${n} for Your Project`,
      s1: (n) => [
        { subtitle: 'Turn Existing Traffic into Revenue', content: `Most Singapore businesses focus on driving more traffic through paid ads, but the fastest path to growth is optimizing what you already have. A skilled ${n} identifies friction points in your funnel and systematically eliminates them, delivering ROI without increasing your already-competitive digital ad spend.` },
        { subtitle: 'Data-Driven Decision Making', content: `Gut feelings are not a growth strategy, especially in Singapore's fast-paced digital market. A ${n} brings rigorous testing methodologies and statistical analysis to your marketing efforts, ensuring every change is validated with real user data before scaling across your Singapore, and wider APAC audience.` },
        { subtitle: 'Compound Growth Through Experimentation', content: `Small improvements compound dramatically over time. A dedicated ${n} builds an experimentation culture where continuous testing across your funnel drives consistent, measurable revenue growth month after month. For Singapore startups in Block71, LaunchPad, or one-north, this disciplined approach is what separates the companies that scale from those that stall.` },
      ],
      s2: (n) => [
        { subtitle: 'Key Skills to Look For', content: `When hiring a ${n} for your Singapore business, prioritize candidates who demonstrate proficiency in statistical analysis, A/B testing tools, and user behavior analytics. Look for a track record of measurable conversion improvements, ideally with experience optimizing for multilingual audiences and regional buying behaviors.` },
        { subtitle: 'Evaluating Past Results', content: `Ask candidates to walk through a specific optimization project: what they tested, why, how they measured success, and what they learned. Strong ${n} candidates can articulate both wins and failures with equal clarity. Experience with APAC or APAC market projects is a meaningful bonus.` },
        { subtitle: 'Why HireDeveloper.sg', content: `Every ${n} on HireDeveloper.sg has been vetted through real-world case study reviews and technical assessments. Our candidates work seamlessly within Singapore's GMT+8 timezone and Monday-to-Friday schedule, so you can hire with confidence.` },
      ],
    },
    {
      t1: (n) => `The Strategic Value of Hiring a ${n}`,
      t2: (n) => `Best Practices for Working with a ${n}`,
      s1: (n) => [
        { subtitle: 'Maximize Return on Marketing Spend', content: `A ${n} ensures that every visitor, click, and impression has the highest possible chance of converting. For Singapore companies where digital ad costs in competitive verticals like fintech, real estate, and e-commerce are among the highest in the region, optimizing your existing assets extracts maximum value from every Singapore dollar invested.` },
        { subtitle: 'Reduce Customer Acquisition Costs', content: `When conversion rates improve, your effective cost per acquisition drops. A skilled ${n} can reduce your CAC by 20-40% through systematic funnel optimization, making your growth more capital-efficient. In Singapore's competitive fundraising environment, lower CAC also makes your metrics more attractive to investors.` },
        { subtitle: 'Build a Culture of Testing', content: `Beyond individual optimizations, a great ${n} helps establish testing frameworks and processes that keep your team improving long after the engagement ends. This is critical for Singapore businesses scaling from startup to enterprise.` },
      ],
      s2: (n) => [
        { subtitle: 'Set Clear Success Metrics', content: `Define what success looks like before starting. Whether it is signup rate, trial-to-paid conversion, or revenue per visitor, give your ${n} a clear north star metric and the autonomy to pursue it. Align these metrics with your business cycle, including seasonal peaks around festive season, GSS, and SWITCH.` },
        { subtitle: 'Provide Access to Data', content: `A ${n} is only as effective as the data they can access. Ensure they have full access to analytics, heatmaps, session recordings, and any other tools needed to diagnose and solve conversion problems. For Singapore businesses serving bilingual audiences, segment data by language to uncover hidden opportunities.` },
        { subtitle: 'Trust the Process', content: `Optimization takes time. Not every test will win. A good ${n} runs disciplined experiments, learns from losses, and compounds gains. Give them the runway to deliver lasting results, typically 2-3 months for meaningful impact.` },
      ],
    },
  ],
  'Content & Copy': [
    {
      t1: (n) => `Why Your Singapore Business Needs a ${n}`,
      t2: (n) => `How to Hire the Right ${n}`,
      s1: (n) => [
        { subtitle: 'Words Drive Revenue', content: `Every touchpoint in your marketing funnel is powered by words. A skilled ${n} crafts messaging that resonates with Singapore's diverse, multilingual audience, builds trust, and compels action. Whether you are targeting Mandarin-speaking consumers, English-speaking expats, or B2B decision-makers in one-north and MAS, the right words make the difference.` },
        { subtitle: 'Brand Voice as Competitive Advantage', content: `In Singapore's crowded digital market, how you say things matters as much as what you say. A ${n} develops and maintains a consistent brand voice that differentiates you from competitors across Singapore, and the wider region, building lasting audience relationships.` },
        { subtitle: 'Content That Compounds', content: `Great content is an investment, not an expense. A strategic ${n} creates assets that drive organic traffic on Google.com.sg, nurture leads, and support sales for months or years after publication. For Singapore companies building long-term brand equity, this compounding effect is a powerful growth engine.` },
      ],
      s2: (n) => [
        { subtitle: 'Evaluate Writing Samples', content: `Review a candidate's portfolio across multiple formats: landing pages, blog posts, email sequences, and ad copy. A strong ${n} adapts their writing style to the medium while maintaining brand consistency. For Singapore projects, check for experience with bilingual content and cultural sensitivity for Southeast Asia audience.` },
        { subtitle: 'Test for Strategic Thinking', content: `Ask candidates how they would approach a content brief for a Singapore-based business. The best ${n} candidates ask clarifying questions about the audience, goals, funnel stage, and regional nuances before writing a single word.` },
        { subtitle: 'Why HireDeveloper.sg', content: `Our vetted ${n} professionals have proven track records in B2B and B2C marketing, including experience with Asia Pacific brands. Each candidate is assessed on writing quality, strategic thinking, and the ability to drive measurable business results for companies in Singapore.` },
      ],
    },
    {
      t1: (n) => `The Business Impact of a Great ${n}`,
      t2: (n) => `Working Effectively with a ${n}`,
      s1: (n) => [
        { subtitle: 'Drive Organic Growth in Singapore', content: `A ${n} who understands SEO creates content that ranks on Google.com.sg and Google.com, drives qualified traffic from across Southeast Asia, and reduces your dependency on expensive paid acquisition channels in Singapore market.` },
        { subtitle: 'Support the Sales Process', content: `From case studies featuring Singapore-based success stories to comparison pages targeting APAC buyers, a ${n} creates the collateral your sales team needs to close deals faster and at higher contract values.` },
        { subtitle: 'Build Thought Leadership', content: `Positioning your brand as an authority in Singapore's tech, fintech, or e-commerce ecosystem requires consistent, high-quality content. A dedicated ${n} transforms your expertise into content that earns trust and mindshare across the region.` },
      ],
      s2: (n) => [
        { subtitle: 'Provide Clear Briefs', content: `The quality of output depends on the quality of input. Give your ${n} detailed briefs that include target audience (Singaporean, expat, B2B), goals, key messages, tone, and competitive context within Singapore market.` },
        { subtitle: 'Share Customer Insights', content: `Your ${n} writes best when they understand your Singapore customers deeply. Share customer interviews, support tickets, reviews, and survey data to fuel authentic, resonant messaging that connects with local and regional audiences.` },
        { subtitle: 'Review Constructively', content: `Feedback should be specific and actionable. Instead of "I do not like it," tell your ${n} what is not working and why. This leads to faster iteration and better results, especially when working remotely across the GMT+8 timezone.` },
      ],
    },
  ],
  'SEO & Technical': [
    {
      t1: (n) => `Why Your Singapore Business Needs a ${n}`,
      t2: (n) => `How to Find the Right ${n}`,
      s1: (n) => [
        { subtitle: 'Own Your Organic Channel in Singapore', content: `Organic search remains the highest-intent, most cost-effective acquisition channel. A ${n} ensures your website is technically sound, content-rich, and optimized to capture the searches that matter most to your business on Google.com.sg and across Southeast Asia region.` },
        { subtitle: 'Technical Foundation Matters', content: `Beautiful content means nothing if search engines cannot crawl, index, and understand it. A ${n} ensures your technical foundation, including site speed, crawlability, structured data, and Mandarin/English hreflang configuration, supports your content strategy and maximizes visibility in Singapore search results.` },
        { subtitle: 'Measure What Matters', content: `From Google Search Console data for Singapore's market to conversion attribution across bilingual funnels, a ${n} builds the measurement infrastructure needed to understand what is working, what is not, and where to invest next.` },
      ],
      s2: (n) => [
        { subtitle: 'Verify Technical Depth', content: `Ask candidates about their experience with site migrations, Core Web Vitals optimization, and structured data implementation. For Singapore businesses, also verify experience with multilingual SEO, hreflang tags for Mandarin/English content, and Google Business Profile optimization for Singapore locations.` },
        { subtitle: 'Look for Analytical Rigor', content: `SEO and analytics are data disciplines. The best ${n} candidates demonstrate comfort with large datasets, statistical significance, and connecting technical metrics to business outcomes. Experience interpreting search behavior in the APAC market is a meaningful differentiator.` },
        { subtitle: 'Why HireDeveloper.sg', content: `Every ${n} on our platform has been evaluated through technical assessments and real-world case studies. We verify their ability to deliver measurable organic growth and accurate tracking implementations, with candidates ready to work within Singapore business hours.` },
      ],
    },
    {
      t1: (n) => `The Strategic Value of Hiring a ${n}`,
      t2: (n) => `Best Practices for Working with a ${n}`,
      s1: (n) => [
        { subtitle: 'Reduce Paid Acquisition Dependency', content: `In Singapore, where Google Ads CPCs in competitive verticals like real estate, insurance, and fintech are among the highest in the APAC region, every organic visitor is a visitor you did not have to pay for. A ${n} builds sustainable organic traffic that reduces your dependency on paid channels and improves overall marketing efficiency.` },
        { subtitle: 'Competitive Intelligence in Southeast Asia', content: `A skilled ${n} monitors your competitive landscape across Singapore and APAC markets, identifies content gaps, and finds opportunities to outrank competitors on high-value search terms in both English and Mandarin.` },
        { subtitle: 'Future-Proof Your Marketing', content: `Search algorithms evolve, but fundamentals endure. A ${n} builds an SEO and analytics foundation that adapts to algorithm changes rather than being disrupted by them, giving your Singapore business a sustainable competitive advantage in organic search.` },
      ],
      s2: (n) => [
        { subtitle: 'Align on Goals Early', content: `Define target keywords, traffic goals, and conversion metrics upfront. For Singapore businesses, consider both English and Mandarin keyword strategies. A clear plan gives your ${n} direction and makes it easy to measure progress and ROI.` },
        { subtitle: 'Enable Cross-Team Collaboration', content: `SEO and analytics touch every part of marketing. Ensure your ${n} has access to engineering, content, and product teams to implement recommendations effectively. For Singapore companies with distributed teams, schedule regular syncs during GMT+8 business hours.` },
        { subtitle: 'Be Patient with Results', content: `Organic growth takes time, especially when building authority in Singapore market. Give your ${n} at least 3-6 months to show meaningful results. Quick wins exist, but the biggest gains come from sustained, strategic effort.` },
      ],
    },
  ],
  'Growth & Strategy': [
    {
      t1: (n) => `Why Your Singapore Business Needs a ${n}`,
      t2: (n) => `How to Hire the Right ${n}`,
      s1: (n) => [
        { subtitle: 'Strategy Before Tactics', content: `Execution without strategy is noise. A ${n} brings the strategic frameworks needed to identify your highest-leverage growth opportunities and allocate resources where they will have the greatest impact in Singapore's competitive digital landscape.` },
        { subtitle: 'Cross-Functional Impact', content: `Marketing strategy does not exist in a vacuum. A ${n} connects marketing with product, sales, and customer success to create aligned growth motions that compound across the business. For Singapore companies scaling from startup to enterprise, this alignment is what separates sustainable growth from vanity metrics.` },
        { subtitle: "Navigate Singapore's Market", content: `Singapore's market has unique dynamics: a Monday-to-Friday work week, diverse expat and local audiences, business district regulations in one-north, Changi Business Park, MAS, and Block71, and rapidly evolving digital adoption. A ${n} with regional expertise helps you navigate these complexities and find product-market fit faster in Singapore.` },
      ],
      s2: (n) => [
        { subtitle: 'Evaluate Strategic Thinking', content: `Ask candidates to analyze your current marketing and propose a 90-day plan for Singapore's market. The best ${n} candidates demonstrate clarity of thought, prioritization ability, and an understanding of what moves the needle for businesses operating in Southeast Asia.` },
        { subtitle: 'Check for Execution Ability', content: `Strategy without execution is worthless. Ensure your ${n} can not only plan but also roll up their sleeves and implement, or at least manage implementation effectively across your team's Monday-to-Friday schedule.` },
        { subtitle: 'Why HireDeveloper.sg', content: `Our ${n} professionals have been vetted through strategic case studies and real portfolio reviews. We assess their ability to think big, prioritize ruthlessly, and deliver measurable business outcomes for companies in Singapore.` },
      ],
    },
    {
      t1: (n) => `The Business Case for a ${n}`,
      t2: (n) => `Working Effectively with a ${n}`,
      s1: (n) => [
        { subtitle: 'Unlock Growth Levers in Singapore', content: `A ${n} identifies and activates the growth levers specific to your business stage, market, and product. Whether it is pricing strategy for Southeast Asia market, positioning against regional competitors, or channel strategy across Mandarin and English audiences, they find the highest-ROI opportunities.` },
        { subtitle: 'Build Sustainable Moats', content: `Tactics get copied. Strategy creates moats. A ${n} helps you build defensible advantages through brand positioning, network effects, and marketing systems that competitors in Singapore market cannot easily replicate.` },
        { subtitle: 'Accelerate Learning Cycles', content: `The fastest-growing companies in Singapore's startup ecosystem learn faster than their competitors. A ${n} designs experimentation frameworks that accelerate learning and reduce the cost of finding what works in Southeast Asia market.` },
      ],
      s2: (n) => [
        { subtitle: 'Give Strategic Context', content: `Share your business goals, financial constraints, competitive landscape, and customer insights for Singapore's market. The more context your ${n} has about your business district setup, target audience segments, and regional ambitions, the better their strategic recommendations will be.` },
        { subtitle: 'Empower Decision-Making', content: `A ${n} delivers the most value when empowered to make decisions within their domain. Set guardrails, not micromanagement, and trust their expertise. This is especially important when working across timezones with remote talent.` },
        { subtitle: 'Review and Iterate', content: `Strategy is not a one-time exercise. Schedule regular reviews with your ${n} during Singapore business hours to assess progress, learn from results, and adjust course as Southeast Asia market evolves.` },
      ],
    },
  ],
  'Acquisition & Retention': [
    {
      t1: (n) => `Why Your Singapore Business Needs a ${n}`,
      t2: (n) => `How to Find the Right ${n}`,
      s1: (n) => [
        { subtitle: 'Acquire Customers Profitably in Southeast Asia', content: `Growth means nothing if it is not profitable. A ${n} builds acquisition channels that deliver customers at a cost that supports healthy unit economics. In Singapore, where digital ad costs can be high and competition for attention is fierce across Singapore, profitable acquisition is a strategic advantage.` },
        { subtitle: 'Retain and Expand Revenue', content: `Acquiring a new customer costs 5-7x more than retaining an existing one. A ${n} builds the systems, including email sequences, lifecycle campaigns, and loyalty programs, that maximize customer lifetime value. For Singapore businesses with subscription models or repeat-purchase dynamics, retention is where the real profitability lives.` },
        { subtitle: 'Full-Funnel Thinking', content: `The best marketing connects acquisition to retention. A ${n} thinks across the entire customer journey, from first touchpoint through to advocacy, ensuring that what you promise in your Singapore marketing campaigns is delivered in the product experience.` },
      ],
      s2: (n) => [
        { subtitle: 'Assess Channel Expertise', content: `Different channels require different skills. Ensure your ${n} has hands-on experience with the specific channels that matter for your Singapore business, whether that is Google Ads, Meta Ads targeting APAC audiences, LinkedIn for B2B, email marketing, or partnerships with regional platforms.` },
        { subtitle: 'Look for Analytical Skills', content: `Modern acquisition and retention are data disciplines. The best ${n} candidates think in terms of cohort analysis, attribution modeling, and incremental impact. For Singapore businesses, experience measuring performance across multilingual campaigns and regional audience segments is a strong signal.` },
        { subtitle: 'Why HireDeveloper.sg', content: `Every ${n} on HireDeveloper.sg has been vetted through portfolio reviews and performance assessments. We verify their ability to drive profitable customer acquisition and retention for Singapore companies, with candidates ready to collaborate during GMT+8 business hours.` },
      ],
    },
    {
      t1: (n) => `The Strategic Value of a ${n}`,
      t2: (n) => `Best Practices for Working with a ${n}`,
      s1: (n) => [
        { subtitle: 'Scale What Works Across Southeast Asia', content: `A ${n} identifies your best-performing channels and finds ways to scale them across Singapore and APAC, increasing spend efficiency, expanding into new audiences in Malaysia, Indonesia, and beyond, and building repeatable playbooks.` },
        { subtitle: 'Build Customer Loyalty', content: `Beyond the first purchase, a ${n} creates engagement systems that turn customers into advocates. Referral programs, lifecycle emails, and personalized experiences drive repeat revenue and word-of-mouth growth. In Singapore's close-knit business communities, word-of-mouth is an especially powerful channel.` },
        { subtitle: 'Reduce Churn Proactively', content: `A skilled ${n} identifies early warning signs of churn and builds automated interventions that re-engage at-risk customers before they leave. For subscription-based Singapore businesses, every percentage point of churn reduction compounds into significant annual revenue.` },
      ],
      s2: (n) => [
        { subtitle: 'Define Success Metrics', content: `Agree on KPIs upfront: CAC, LTV, ROAS, retention rate, or net revenue retention. Clear metrics give your ${n} focus and make it easy to measure their impact. Align these with your Singapore fiscal year and seasonal business cycles, including festive season and GSS.` },
        { subtitle: 'Share Unit Economics', content: `Your ${n} needs to understand your margins, payback periods, and growth targets to make smart allocation decisions. For Singapore businesses operating in SGD with international cost structures, transparency about currency dynamics and regional pricing enables better strategy.` },
        { subtitle: 'Invest in the Long Game', content: `The most valuable acquisition and retention strategies take time to mature. Give your ${n} the runway to build systems that deliver compounding returns, typically 3-6 months for acquisition channels and 6-12 months for full lifecycle optimization.` },
      ],
    },
  ],
};

function generateMarketingGuideSections(name: string): MarketingGuideSection[] {
  const sub = marketingSubcategories[Object.keys(marketingSubcategories).find(k => marketingSubcategories[k].name === name) || ''];
  const parentCategory = sub?.parentCategory || 'Growth & Strategy';
  const hash = simpleHash(name);

  const templates = marketingGuideTemplatesByCategory[parentCategory] || marketingGuideTemplatesByCategory['Growth & Strategy'];
  const tpl = templates[hash % templates.length];

  return [
    { title: tpl.t1(name), subsections: tpl.s1(name) },
    { title: tpl.t2(name), subsections: tpl.s2(name) },
  ];
}


const marketingSubcategories: Record<string, MarketingSubcategory> = {
  // === CRO & Optimization ===
  'ab-test-setup': {
    slug: 'ab-test-setup',
    name: 'A/B Testing Expert',
    metaTitle: 'Hire Top A/B Testing Experts in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted A/B Testing Experts who design and implement experiments that drive measurable conversion improvements. Get matched in 48 hours.',
    heroCount: 1240,
    heroDescription: 'Our 1,240 A/B Testing Experts design and implement rigorous experiments across your marketing funnel — from landing pages to checkout flows — delivering data-backed conversion improvements.',
    parentCategory: 'CRO & Optimization',
    relatedSlugs: ['page-cro', 'form-cro', 'signup-flow-cro', 'analytics-tracking'],
    relatedLocations: ['singapore'],
    skills: ['A/B Testing', 'Split Testing', 'Multivariate Testing', 'Statistical Analysis', 'Hypothesis Design', 'Conversion Optimization'],
  },
  'form-cro': {
    slug: 'form-cro',
    name: 'Form Optimization Specialist',
    metaTitle: 'Hire Top Form Optimization Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Form Optimization Specialists who increase lead capture and conversion rates through data-driven form design. Get matched in 48 hours.',
    heroCount: 870,
    heroDescription: 'Our 870 Form Optimization Specialists transform your lead capture, contact, and demo request forms into high-converting assets through strategic UX improvements and systematic testing.',
    parentCategory: 'CRO & Optimization',
    relatedSlugs: ['page-cro', 'signup-flow-cro', 'ab-test-setup', 'popup-cro'],
    relatedLocations: ['singapore'],
    skills: ['Form Design', 'Conversion Optimization', 'UX Design', 'Lead Capture', 'Multi-Step Forms', 'Validation'],
  },
  'onboarding-cro': {
    slug: 'onboarding-cro',
    name: 'Onboarding Optimization Expert',
    metaTitle: 'Hire Top Onboarding Optimization Experts in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Onboarding Optimization Experts who improve activation rates and first-run experiences. Get matched in 48 hours.',
    heroCount: 920,
    heroDescription: 'Our 920 Onboarding Optimization Experts specialize in post-signup activation, first-run experiences, and user onboarding flows that turn signups into engaged, paying customers.',
    parentCategory: 'CRO & Optimization',
    relatedSlugs: ['signup-flow-cro', 'page-cro', 'ab-test-setup', 'paywall-upgrade-cro'],
    relatedLocations: ['singapore'],
    skills: ['User Onboarding', 'Activation Rate', 'UX Design', 'Product-Led Growth', 'Checklists', 'Empty States'],
  },
  'page-cro': {
    slug: 'page-cro',
    name: 'Page CRO Specialist',
    metaTitle: 'Hire Top Page CRO Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Page CRO Specialists who optimize landing pages and marketing pages for maximum conversions. Get matched in 48 hours.',
    heroCount: 1580,
    heroDescription: 'Our 1,580 Page CRO Specialists optimize landing pages, pricing pages, and every marketing touchpoint for maximum conversion rates using proven frameworks and rigorous testing.',
    parentCategory: 'CRO & Optimization',
    relatedSlugs: ['ab-test-setup', 'form-cro', 'popup-cro', 'copywriting', 'signup-flow-cro'],
    relatedLocations: ['singapore'],
    skills: ['Conversion Rate Optimization', 'Landing Page Optimization', 'CTA Design', 'Visual Hierarchy', 'Trust Signals', 'Objection Handling'],
  },
  'paywall-upgrade-cro': {
    slug: 'paywall-upgrade-cro',
    name: 'Paywall & Upsell Specialist',
    metaTitle: 'Hire Top Paywall & Upsell Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Paywall & Upsell Specialists who optimize upgrade flows, paywalls, and upsell modals for maximum revenue. Get matched in 48 hours.',
    heroCount: 810,
    heroDescription: 'Our 810 Paywall & Upsell Specialists create and optimize paywalls, upgrade screens, and upsell modals that convert free users into paying customers and expand existing accounts.',
    parentCategory: 'CRO & Optimization',
    relatedSlugs: ['onboarding-cro', 'pricing-strategy', 'page-cro', 'ab-test-setup'],
    relatedLocations: ['singapore'],
    skills: ['Paywall Design', 'Upsell Optimization', 'Feature Gating', 'Freemium Conversion', 'Trial Optimization', 'Revenue Growth'],
  },
  'popup-cro': {
    slug: 'popup-cro',
    name: 'Popup Conversion Expert',
    metaTitle: 'Hire Top Popup Conversion Experts in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Popup Conversion Experts who create high-converting popups, modals, and overlays for lead capture and engagement. Get matched in 48 hours.',
    heroCount: 960,
    heroDescription: 'Our 960 Popup Conversion Experts create and optimize exit-intent popups, slide-ins, and modal overlays that capture leads and drive conversions without hurting user experience.',
    parentCategory: 'CRO & Optimization',
    relatedSlugs: ['form-cro', 'page-cro', 'email-sequence', 'ab-test-setup'],
    relatedLocations: ['singapore'],
    skills: ['Exit Intent', 'Popup Design', 'Lead Capture', 'Modal Optimization', 'Slide-Ins', 'Email Collection'],
  },
  'signup-flow-cro': {
    slug: 'signup-flow-cro',
    name: 'Signup Flow Optimizer',
    metaTitle: 'Hire Top Signup Flow Optimizers in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Signup Flow Optimizers who increase registration rates and trial activations through systematic funnel optimization. Get matched in 48 hours.',
    heroCount: 1100,
    heroDescription: 'Our 1,100 Signup Flow Optimizers specialize in registration, trial activation, and signup funnel optimization that turns visitors into activated users with minimal friction.',
    parentCategory: 'CRO & Optimization',
    relatedSlugs: ['onboarding-cro', 'form-cro', 'page-cro', 'ab-test-setup'],
    relatedLocations: ['singapore'],
    skills: ['Signup Optimization', 'Registration Flow', 'Social Auth', 'Multi-Step Forms', 'Mobile Optimization', 'Trial Activation'],
  },

  // === Content & Copy ===
  'content-strategy': {
    slug: 'content-strategy',
    name: 'Content Strategist',
    metaTitle: 'Hire Top Content Strategists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Content Strategists who plan content that drives organic traffic, nurtures leads, and builds brand authority. Get matched in 48 hours.',
    heroCount: 2100,
    heroDescription: 'Our 2,100 Content Strategists plan comprehensive content strategies — from topic clusters and editorial calendars to content audits and SEO-driven content roadmaps — that drive sustainable organic growth.',
    parentCategory: 'Content & Copy',
    relatedSlugs: ['copywriting', 'seo-audit', 'social-content', 'programmatic-seo'],
    relatedLocations: ['singapore'],
    skills: ['Content Planning', 'Topic Clusters', 'Keyword Research', 'Editorial Calendar', 'Content Audit', 'SEO Strategy'],
  },
  'copy-editing': {
    slug: 'copy-editing',
    name: 'Copy Editor',
    metaTitle: 'Hire Top Copy Editors in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Copy Editors who polish your marketing copy, ensure brand consistency, and elevate content quality. Get matched in 48 hours.',
    heroCount: 1340,
    heroDescription: 'Our 1,340 Copy Editors review, refine, and elevate your marketing copy across every channel — ensuring brand voice consistency, clarity, and impact that resonates with your target audience.',
    parentCategory: 'Content & Copy',
    relatedSlugs: ['copywriting', 'content-strategy', 'social-content'],
    relatedLocations: ['singapore'],
    skills: ['Copy Editing', 'Proofreading', 'Brand Voice', 'Content Review', 'Style Guides', 'Quality Assurance'],
  },
  'copywriting': {
    slug: 'copywriting',
    name: 'Copywriter',
    metaTitle: 'Hire Top Copywriters in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Copywriters who write persuasive marketing copy that converts visitors into customers. Get matched in 48 hours.',
    heroCount: 2840,
    heroDescription: 'Our 2,840 Copywriters craft compelling landing pages, headlines, CTAs, and brand messaging that drives action and converts visitors into loyal customers.',
    parentCategory: 'Content & Copy',
    relatedSlugs: ['copy-editing', 'content-strategy', 'page-cro', 'email-sequence', 'social-content'],
    relatedLocations: ['singapore'],
    skills: ['Copywriting', 'Landing Pages', 'Headlines', 'CTAs', 'Brand Messaging', 'Persuasive Writing'],
  },
  'social-content': {
    slug: 'social-content',
    name: 'Social Media Content Creator',
    metaTitle: 'Hire Top Social Media Content Creators in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Social Media Content Creators who build engaged audiences across LinkedIn, Twitter/X, Instagram, and TikTok. Get matched in 48 hours.',
    heroCount: 3200,
    heroDescription: 'Our 3,200 Social Media Content Creators produce scroll-stopping content for LinkedIn, Twitter/X, Instagram, and TikTok that builds brand awareness, drives engagement, and generates leads.',
    parentCategory: 'Content & Copy',
    relatedSlugs: ['copywriting', 'content-strategy', 'copy-editing', 'paid-ads'],
    relatedLocations: ['singapore'],
    skills: ['LinkedIn', 'Twitter/X', 'Instagram', 'TikTok', 'Content Calendar', 'Engagement Strategy'],
  },

  // === SEO & Technical ===
  'programmatic-seo': {
    slug: 'programmatic-seo',
    name: 'Programmatic SEO Expert',
    metaTitle: 'Hire Top Programmatic SEO Experts in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Programmatic SEO Experts who create SEO-driven pages at scale using templates and data. Get matched in 48 hours.',
    heroCount: 1450,
    heroDescription: 'Our 1,450 Programmatic SEO Experts build scalable, data-driven page systems — from directory and location pages to comparison and template pages — that capture long-tail search traffic at scale.',
    parentCategory: 'SEO & Technical',
    relatedSlugs: ['seo-audit', 'schema-markup', 'content-strategy', 'analytics-tracking'],
    relatedLocations: ['singapore'],
    skills: ['Programmatic SEO', 'Template Pages', 'Directory Pages', 'Location Pages', 'Data-Driven Content', 'Technical SEO'],
  },
  'schema-markup': {
    slug: 'schema-markup',
    name: 'Schema Markup Specialist',
    metaTitle: 'Hire Top Schema Markup Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Schema Markup Specialists who implement structured data for rich snippets and enhanced search visibility. Get matched in 48 hours.',
    heroCount: 980,
    heroDescription: 'Our 980 Schema Markup Specialists implement and optimize JSON-LD structured data that earns rich snippets, FAQ carousels, and enhanced search results — driving higher click-through rates from organic search.',
    parentCategory: 'SEO & Technical',
    relatedSlugs: ['seo-audit', 'programmatic-seo', 'analytics-tracking'],
    relatedLocations: ['singapore'],
    skills: ['JSON-LD', 'Schema.org', 'Rich Snippets', 'Structured Data', 'FAQ Schema', 'Technical SEO'],
  },
  'seo-audit': {
    slug: 'seo-audit',
    name: 'SEO Audit Specialist',
    metaTitle: 'Hire Top SEO Audit Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted SEO Audit Specialists who diagnose technical SEO issues and create actionable optimization roadmaps. Get matched in 48 hours.',
    heroCount: 1780,
    heroDescription: 'Our 1,780 SEO Audit Specialists conduct comprehensive technical SEO audits — covering crawlability, Core Web Vitals, on-page optimization, and site architecture — to uncover growth opportunities.',
    parentCategory: 'SEO & Technical',
    relatedSlugs: ['schema-markup', 'programmatic-seo', 'analytics-tracking', 'content-strategy'],
    relatedLocations: ['singapore'],
    skills: ['Technical SEO', 'On-Page SEO', 'Core Web Vitals', 'Site Speed', 'Crawlability', 'SEO Strategy'],
  },
  'analytics-tracking': {
    slug: 'analytics-tracking',
    name: 'Analytics & Tracking Specialist',
    metaTitle: 'Hire Top Analytics & Tracking Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Analytics & Tracking Specialists who set up accurate measurement and attribution for data-driven marketing decisions. Get matched in 48 hours.',
    heroCount: 1620,
    heroDescription: 'Our 1,620 Analytics & Tracking Specialists set up, audit, and optimize your analytics infrastructure — from GA4 and GTM to conversion tracking and custom event architectures — ensuring accurate, actionable data.',
    parentCategory: 'SEO & Technical',
    relatedSlugs: ['seo-audit', 'ab-test-setup', 'schema-markup', 'programmatic-seo'],
    relatedLocations: ['singapore'],
    skills: ['Google Analytics 4', 'GTM', 'Conversion Tracking', 'Event Tracking', 'UTM Parameters', 'Data Analysis'],
  },

  // === Growth & Strategy ===
  'launch-strategy': {
    slug: 'launch-strategy',
    name: 'Launch Strategist',
    metaTitle: 'Hire Top Launch Strategists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Launch Strategists who plan and execute product launches, feature announcements, and go-to-market strategies. Get matched in 48 hours.',
    heroCount: 1150,
    heroDescription: 'Our 1,150 Launch Strategists plan and execute product launches that generate buzz, drive early adoption, and set the foundation for sustained growth — from Product Hunt to enterprise GTM.',
    parentCategory: 'Growth & Strategy',
    relatedSlugs: ['product-marketing-context', 'marketing-ideas', 'pricing-strategy', 'social-content'],
    relatedLocations: ['singapore'],
    skills: ['Product Launch', 'Go-to-Market', 'Product Hunt', 'Beta Testing', 'Early Access', 'Launch Planning'],
  },
  'marketing-ideas': {
    slug: 'marketing-ideas',
    name: 'Marketing Ideation Expert',
    metaTitle: 'Hire Top Marketing Ideation Experts in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Marketing Ideation Experts who generate creative, high-impact marketing strategies across channels. Get matched in 48 hours.',
    heroCount: 1380,
    heroDescription: 'Our 1,380 Marketing Ideation Experts generate and prioritize creative marketing ideas — from guerrilla campaigns to viral loops — drawn from 139+ proven growth approaches.',
    parentCategory: 'Growth & Strategy',
    relatedSlugs: ['launch-strategy', 'marketing-psychology', 'content-strategy', 'free-tool-strategy'],
    relatedLocations: ['singapore'],
    skills: ['Marketing Strategy', 'Creative Ideation', 'Growth Marketing', 'Campaign Planning', 'Channel Strategy', 'Brand Marketing'],
  },
  'marketing-psychology': {
    slug: 'marketing-psychology',
    name: 'Marketing Psychology Expert',
    metaTitle: 'Hire Top Marketing Psychology Experts in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Marketing Psychology Experts who apply behavioral science and persuasion principles to increase conversions. Get matched in 48 hours.',
    heroCount: 890,
    heroDescription: 'Our 890 Marketing Psychology Experts apply behavioral science, persuasion principles, and consumer psychology to your marketing — improving messaging, pricing, and conversion across every touchpoint.',
    parentCategory: 'Growth & Strategy',
    relatedSlugs: ['pricing-strategy', 'copywriting', 'page-cro', 'marketing-ideas'],
    relatedLocations: ['singapore'],
    skills: ['Behavioral Science', 'Persuasion', 'Consumer Psychology', 'Decision Making', 'Pricing Psychology', 'Neuromarketing'],
  },
  'pricing-strategy': {
    slug: 'pricing-strategy',
    name: 'Pricing Strategist',
    metaTitle: 'Hire Top Pricing Strategists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Pricing Strategists who optimize your pricing, packaging, and monetization strategy for maximum revenue. Get matched in 48 hours.',
    heroCount: 1020,
    heroDescription: 'Our 1,020 Pricing Strategists help you find the optimal price point, packaging structure, and monetization model — maximizing revenue while maintaining competitive positioning.',
    parentCategory: 'Growth & Strategy',
    relatedSlugs: ['paywall-upgrade-cro', 'marketing-psychology', 'product-marketing-context', 'launch-strategy'],
    relatedLocations: ['singapore'],
    skills: ['Pricing Models', 'Value-Based Pricing', 'Tiered Pricing', 'Freemium Strategy', 'Price Testing', 'Monetization'],
  },
  'free-tool-strategy': {
    slug: 'free-tool-strategy',
    name: 'Marketing Tool Strategist',
    metaTitle: 'Hire Top Marketing Tool Strategists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Marketing Tool Strategists who plan and build free tools for lead generation, SEO, and brand awareness. Get matched in 48 hours.',
    heroCount: 830,
    heroDescription: 'Our 830 Marketing Tool Strategists plan and build free tools — calculators, generators, and interactive widgets — that drive organic traffic, generate leads, and establish your brand as an industry authority.',
    parentCategory: 'Growth & Strategy',
    relatedSlugs: ['programmatic-seo', 'marketing-ideas', 'content-strategy', 'launch-strategy'],
    relatedLocations: ['singapore'],
    skills: ['Lead Generation', 'Engineering as Marketing', 'Interactive Tools', 'Calculators', 'SEO Tools', 'Growth Hacking'],
  },

  // === Acquisition & Retention ===
  'paid-ads': {
    slug: 'paid-ads',
    name: 'Paid Advertising Expert',
    metaTitle: 'Hire Top Paid Advertising Experts in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Paid Advertising Experts who manage profitable campaigns on Google, Meta, LinkedIn, and Twitter/X. Get matched in 48 hours.',
    heroCount: 3480,
    heroDescription: 'Our 3,480 Paid Advertising Experts manage high-performance campaigns across Google Ads, Meta Ads, LinkedIn Ads, and Twitter/X — delivering profitable customer acquisition at scale.',
    parentCategory: 'Acquisition & Retention',
    relatedSlugs: ['analytics-tracking', 'page-cro', 'copywriting', 'social-content', 'ab-test-setup'],
    relatedLocations: ['singapore'],
    skills: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'PPC', 'Retargeting', 'ROAS Optimization'],
  },
  'email-sequence': {
    slug: 'email-sequence',
    name: 'Email Marketing Specialist',
    metaTitle: 'Hire Top Email Marketing Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Email Marketing Specialists who create automated sequences, drip campaigns, and lifecycle emails that convert and retain. Get matched in 48 hours.',
    heroCount: 2260,
    heroDescription: 'Our 2,260 Email Marketing Specialists build automated email sequences, drip campaigns, and lifecycle programs that nurture leads, convert trials, and reduce churn across the customer journey.',
    parentCategory: 'Acquisition & Retention',
    relatedSlugs: ['copywriting', 'popup-cro', 'referral-program', 'ab-test-setup'],
    relatedLocations: ['singapore'],
    skills: ['Email Automation', 'Drip Campaigns', 'Lifecycle Marketing', 'Welcome Sequences', 'Segmentation', 'A/B Testing'],
  },
  'referral-program': {
    slug: 'referral-program',
    name: 'Referral Program Specialist',
    metaTitle: 'Hire Top Referral Program Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Referral Program Specialists who create viral loops, affiliate programs, and word-of-mouth growth engines. Get matched in 48 hours.',
    heroCount: 1050,
    heroDescription: 'Our 1,050 Referral Program Specialists design and optimize referral programs, affiliate partnerships, and viral loops that turn your best customers into your most effective acquisition channel.',
    parentCategory: 'Acquisition & Retention',
    relatedSlugs: ['email-sequence', 'marketing-ideas', 'launch-strategy', 'onboarding-cro'],
    relatedLocations: ['singapore'],
    skills: ['Referral Marketing', 'Affiliate Programs', 'Viral Loops', 'Word of Mouth', 'Partner Programs', 'Growth Marketing'],
  },
  'competitor-alternatives': {
    slug: 'competitor-alternatives',
    name: 'Competitor Analysis Specialist',
    metaTitle: 'Hire Top Competitor Analysis Specialists in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Competitor Analysis Specialists who create comparison pages and alternative content that captures high-intent search traffic. Get matched in 48 hours.',
    heroCount: 1180,
    heroDescription: 'Our 1,180 Competitor Analysis Specialists create compelling comparison pages, alternative content, and competitive positioning that captures high-intent buyers actively evaluating solutions.',
    parentCategory: 'Acquisition & Retention',
    relatedSlugs: ['content-strategy', 'seo-audit', 'copywriting', 'product-marketing-context'],
    relatedLocations: ['singapore'],
    skills: ['Competitive Analysis', 'Comparison Pages', 'SEO', 'Sales Enablement', 'Market Research', 'Content Strategy'],
  },
  'product-marketing-context': {
    slug: 'product-marketing-context',
    name: 'Product Marketing Manager',
    metaTitle: 'Hire Top Product Marketing Managers in Singapore | HireDeveloper.sg',
    metaDescription: 'Hire pre-vetted Product Marketing Managers who define positioning, messaging frameworks, and go-to-market strategies. Get matched in 48 hours.',
    heroCount: 1920,
    heroDescription: 'Our 1,920 Product Marketing Managers craft product positioning, messaging frameworks, and go-to-market strategies that align your product story with what your target buyers actually care about.',
    parentCategory: 'Acquisition & Retention',
    relatedSlugs: ['launch-strategy', 'competitor-alternatives', 'pricing-strategy', 'copywriting', 'content-strategy'],
    relatedLocations: ['singapore'],
    skills: ['Product Positioning', 'Messaging Framework', 'Buyer Personas', 'Competitive Intelligence', 'Market Research', 'GTM Strategy'],
  },
};

// ====== Helper Functions ======

export function getMarketingSubcategoryBySlug(slug: string): MarketingSubcategory | undefined {
  return marketingSubcategories[slug];
}

export function getAllMarketingSubcategorySlugs(): string[] {
  return Object.keys(marketingSubcategories);
}

export function getAllMarketingSubcategories(): MarketingSubcategory[] {
  return Object.values(marketingSubcategories);
}

export function getMarketingSubcategoriesByCategory(category: string): MarketingSubcategory[] {
  return Object.values(marketingSubcategories).filter(s => s.parentCategory === category);
}

export function getRelatedMarketingSubcategories(slug: string, limit: number = 8): MarketingSubcategory[] {
  const sub = marketingSubcategories[slug];
  if (!sub) return [];
  return sub.relatedSlugs
    .map(s => marketingSubcategories[s])
    .filter(Boolean)
    .slice(0, limit);
}

export { generateMarketingProfiles, generateMarketingGuideSections };
