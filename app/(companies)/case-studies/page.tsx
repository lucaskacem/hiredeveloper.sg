import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Case Studies | Client Success Stories | HireDeveloper.sg',
  description:
    'See how companies in Singapore, and across Singapore built their remote teams with HireDeveloper.sg, saved costs, and delivered projects successfully.',
  robots: { index: true, follow: true },
};

function PageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Case Studies - HireDeveloper.sg',
    description:
      'Success stories from companies that hired remote talent through HireDeveloper.sg.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CaseStudy {
  company: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  quoteAuthor: string;
  quoteTitle: string;
  teamSize: string;
  timeToHire: string;
  costSaving: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: 'PayFlow Technologies',
    industry: 'FinTech',
    location: 'CBD, Singapore',
    challenge:
      'PayFlow Technologies, a fast-growing FinTech startup based in the CBD, needed to build a complete backend development team within 6 weeks to launch a new payment platform for the Asia Pacific market. Local developers were scarce and salaries in the Singapore market were extremely high.',
    solution:
      'Through HireDeveloper.sg, PayFlow hired three senior backend developers (Node.js, Python) and a DevOps engineer in just 10 days. All four had FinTech experience and were familiar with Singapore regulatory requirements.',
    results: [
      'Payment platform launched 3 weeks ahead of deadline',
      '52% cost savings compared to local hires',
      'All 4 talents converted to full-time after trial period',
      'Zero downtime since launch (99.99% uptime)',
    ],
    quote: 'HireDeveloper.sg helped us build a strong team in record time. The quality of the candidates exceeded our expectations.',
    quoteAuthor: 'M. Al-Rashid',
    quoteTitle: 'CTO, PayFlow Technologies',
    teamSize: '4 talents',
    timeToHire: '10 days',
    costSaving: '52%',
  },
  {
    company: 'MediBridge Health',
    industry: 'HealthTech',
    location: 'Marina Bay',
    challenge:
      'MediBridge Health develops a telemedicine platform and urgently needed specialized React and React Native developers to build the mobile app and doctor dashboard in parallel. In Marina Bay, the cost for such specialists was prohibitive.',
    solution:
      'HireDeveloper.sg provided two senior React developers and a React Native specialist within 2 weeks. Additionally, a UX designer was brought on to redesign the mobile user experience.',
    results: [
      'Mobile app completed in 4 months (instead of planned 8)',
      '58% cost savings compared to Marina Bay salaries',
      'App Store rating of 4.8 stars after launch',
      'Patient satisfaction increased by 35%',
    ],
    quote: 'The developers from HireDeveloper.sg integrated seamlessly into our team. You can hardly tell they work remotely.',
    quoteAuthor: 'Dr. S. Hassan',
    quoteTitle: 'CEO, MediBridge Health',
    teamSize: '4 talents',
    timeToHire: '14 days',
    costSaving: '58%',
  },
  {
    company: 'ShopAsia LLC',
    industry: 'E-Commerce',
    location: 'one-north, Singapore',
    challenge:
      'ShopAsia, a mid-sized e-commerce company, wanted to completely rebuild its online shop and simultaneously create a data team for personalized product recommendations. The existing team was fully loaded and internal recruiting attempts had been unsuccessful for months.',
    solution:
      'HireDeveloper.sg filled 6 positions progressively: two full-stack developers, a Shopify expert, a data scientist, a UX designer, and a growth marketer. The first candidates were available within 48 hours.',
    results: [
      'Online shop relaunched in 5 months instead of planned 9',
      'Revenue increased by 40% within 6 months of launch',
      'Conversion rate improved from 2.1% to 3.8%',
      '55% total savings on staffing costs',
    ],
    quote: 'From the first inquiry to a productive team, everything ran smoothly. HireDeveloper.sg is now our go-to partner for all hiring.',
    quoteAuthor: 'L. Ahmed',
    quoteTitle: 'Managing Director, ShopAsia LLC',
    teamSize: '6 talents',
    timeToHire: '3 weeks',
    costSaving: '55%',
  },
  {
    company: 'GreenRoute Logistics',
    industry: 'Logistics & Sustainability',
    location: 'Marina Bay',
    challenge:
      'GreenRoute develops AI-powered route optimization software for sustainable logistics. The company needed AI specialists with experience in machine learning and optimization algorithms. In Marina Bay: virtually impossible to find locally.',
    solution:
      'HireDeveloper.sg found two experienced machine learning engineers and an AI architect specializing in optimization within 8 days. All three had relevant industry experience in logistics or supply chain.',
    results: [
      'AI model achieved 94% accuracy in route predictions',
      'Customer CO2 emissions reduced by an average of 23%',
      'Development time shortened by 4 months',
      '48% cost savings compared to Marina Bay salaries',
    ],
    quote: 'We could never have found this AI expertise locally. HireDeveloper.sg delivered world-class talent who understood our vision.',
    quoteAuthor: 'T. Kapoor',
    quoteTitle: 'Head of AI, GreenRoute Logistics',
    teamSize: '3 talents',
    timeToHire: '8 days',
    costSaving: '48%',
  },
  {
    company: 'LearnStar Education',
    industry: 'EdTech',
    location: 'Changi Business Park, Singapore',
    challenge:
      'LearnStar develops an interactive learning platform for schools across Singapore and APAC. After a funding round, the team needed to quickly grow from 5 to 15 developers to execute an ambitious product roadmap -- in Singapore, one of the most expensive tech markets in the region.',
    solution:
      'In 4 weeks, HireDeveloper.sg built a complete remote team: 5 frontend developers (React/TypeScript), 3 backend developers (Python/Django), a mobile developer (Flutter), and a project manager. A dedicated account manager coordinated the entire process.',
    results: [
      '10 new team members hired in under 4 weeks',
      'MVP completed 6 weeks ahead of schedule',
      '60% cost savings compared to Singapore salaries',
      'Platform used by over 200 schools across Singapore and APAC',
    ],
    quote: 'Without HireDeveloper.sg we could never have built our team this fast. The quality of talent is impressive, and the process was straightforward.',
    quoteAuthor: 'A. Mahmoud',
    quoteTitle: 'Co-Founder & CEO, LearnStar Education',
    teamSize: '10 talents',
    timeToHire: '4 weeks',
    costSaving: '60%',
  },
];

export default function CaseStudiesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
  ];

  const relatedLinks = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Calculate Savings', href: '/calculate-savings' },
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'Hire Designers', href: '/hire-designers' },
    { label: 'Hire Marketers', href: '/hire-marketers' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageJsonLd />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-10 md:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              How do companies in Singapore build their
              remote teams with HireDeveloper.sg? Here are real examples with concrete numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats overview */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">800+</div>
              <p className="text-sm text-gray-600 mt-1">Successful hires</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">60%</div>
              <p className="text-sm text-gray-600 mt-1">Average savings</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">48h</div>
              <p className="text-sm text-gray-600 mt-1">To first profile</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[rgb(0,159,255)]">96%</div>
              <p className="text-sm text-gray-600 mt-1">Client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 w-full">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <article key={study.company} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gray-900 text-white p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-sm text-[rgb(0,159,255)] font-semibold mb-1">Case Study #{index + 1}</p>
                      <h2 className="text-2xl font-bold">{study.company}</h2>
                      <p className="text-white/70 mt-1">{study.industry} | {study.location}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[rgb(23,162,69)]">{study.costSaving}</div>
                        <p className="text-xs text-white/60">Savings</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[rgb(0,159,255)]">{study.timeToHire}</div>
                        <p className="text-xs text-white/60">Time-to-Hire</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{study.teamSize}</div>
                        <p className="text-xs text-white/60">Team size</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Results</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-gray-600">
                          <span className="text-[rgb(23,162,69)] font-bold mt-0.5">&#10003;</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[rgb(0,159,255)]">
                    <p className="text-gray-700 italic leading-relaxed mb-3">
                      &ldquo;{study.quote}&rdquo;
                    </p>
                    <p className="text-sm text-gray-500 font-semibold">
                      -- {study.quoteAuthor}, {study.quoteTitle}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks title="Related Pages" links={relatedLinks} />

      <FinalCTA
        heading="Become Our Next Success Story"
        subheading="Start risk-free and receive vetted candidate profiles within 48 hours."
        ctaText="Get Started"
      />

      <Footer />
    </div>
  );
}
