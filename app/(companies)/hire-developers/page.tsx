import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import CompaniesTestimonials from '../components/CompaniesTestimonials';
import DedicatedTeamSection from '../components/DedicatedTeamSection';
import HiringGuideSection from '../components/HiringGuideSection';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import Breadcrumb from '../components/Breadcrumb';
import LeadForm from '../components/LeadForm';
import InlineCTABanner from '../components/InlineCTABanner';

const year = new Date().getFullYear();
export const metadata: Metadata = {
  title: `Hire Top Remote Developers - ${year} | HireDeveloper.ae`,
  description: `Hire the best remote developers, engineers, and programmers. Over 90,000 vetted freelance and full-time experts ready for interviews. Updated for ${year}.`,
  alternates: {
    canonical: 'https://hiredeveloper.ae/hire-developers',
  },
};

export default function HireDevelopersPage() {
  // Sample data - in production, this would come from an API or CMS
  const profiles = [
    {
      name: "Aksel .",
      location: "United Arab Emirates (UTC+4)",
      badge: "Vetted Developer",
      bio: "With over 15 years of extensive experience in Staff Software Engineering and Architecture, I have a proven track record of building highly scalable, compute-intensive workflows. My areas of focus include Fintech, E-Commerce/Retail, and Data Processing & Management across private and public clouds.",
      skills: ["AWS", "Python", "Java", "Cloud", "Google Cloud Platform", "SQL", "NoSQL", "+17"],
      availability: "Full-Time & Freelance",
      previousCompany: {
        name: "Top Company",
        logo: ""
      },
      avatar: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      name: "Nathaniel H.",
      location: "United Arab Emirates (UTC+4)",
      badge: "Vetted Developer",
      bio: "AI and Software Engineer with over 14 years of experience, specializing in building scalable, AI-driven applications. Proficient in Node.js, Python, MySQL/MSSQL, JavaScript frameworks, Linux, AWS, and Azure Cloud. Skilled in MVC/Microservice architecture, Docker CI/CD, agile methodologies, and test-driven development.",
      skills: ["Python", "AWS", "SQL", "JavaScript", "Ruby on Rails", "Node.js", "ETL", "+10"],
      availability: "Full-Time & Freelance",
      previousCompany: {
        name: "Top Company",
        logo: ""
      },
      avatar: "https://randomuser.me/api/portraits/men/28.jpg"
    }
  ];

  const stats = [
    { prefix: "Up to", value: "75%", label: "faster hiring" },
    { prefix: "Up to", value: "58%", label: "cost savings" },
    { value: "800+", label: "hires completed" }
  ];

  const testimonials = [
    {
      quote: "We previously tried hiring through traditional platforms, but the quality of developers at HireDeveloper.ae is far superior.",
      author: "M.G.",
      title: "CEO",
      company: "SaaS Company",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "I found former founders, senior engineers, and even CMOs in less than 48 hours.",
      author: "C.B.",
      title: "Founder & CEO",
      company: "Tech Startup",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      quote: "Highly qualified and diverse talent pool at affordable rates!",
      author: "K.H.",
      title: "Lead Recruiter",
      company: "E-Commerce Firm",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and Hire Remote Developers by Role",
      items: [
        { name: "AI Developers", icon: "ai-plain.svg", url: "/hire-developers/ai" },
        { name: "Data Scientists", icon: "data-science-plain.svg", url: "/hire-developers/data-science" },
        { name: "Machine Learning Experts", icon: "machine-learning-plain.svg", url: "/hire-developers/machine-learning" },
        { name: "Software Developers", icon: "software-plain.svg", url: "/hire-developers/software-development" },
        { name: "Frontend Developers", icon: "frontend-plain.svg", url: "/hire-developers/front-end" },
        { name: "Backend Developers", icon: "backend-plain.svg", url: "/hire-developers/back-end" },
        { name: "Full-Stack Developers", icon: "full-stack-plain.svg", url: "/hire-developers/full-stack" },
        { name: "DevOps Engineers", icon: "devops-plain.svg", url: "/hire-developers/devops" },
        { name: "Mobile App Developers", icon: "mobile-development-plain.svg", url: "/hire-developers/mobile-app-development" },
        { name: "Web Developers", icon: "web-plain.svg", url: "/hire-developers/web-development" }
      ]
    },
    {
      id: "skills",
      title: "Find and Hire Remote Engineers by Skill",
      items: [
        { name: "JavaScript Developers", icon: "javascript-plain.svg", url: "/hire-developers/javascript" },
        { name: "TypeScript Developers", icon: "typescript-plain.svg", url: "/hire-developers/typescript" },
        { name: "React Developers", icon: "reactjs-plain.svg", url: "/hire-developers/reactjs" },
        { name: "Node.js Developers", icon: "nodejs-plain.svg", url: "/hire-developers/nodejs" },
        { name: "Python Developers", icon: "python-plain.svg", url: "/hire-developers/python" },
        { name: "Java Developers", icon: "java-plain.svg", url: "/hire-developers/java" },
        { name: "PHP Developers", icon: "php-plain.svg", url: "/hire-developers/php" },
        { name: "Ruby Developers", icon: "ruby-plain.svg", url: "/hire-developers/ruby" },
        { name: "AWS Developers", icon: "aws-plain.svg", url: "/hire-developers/aws" },
        { name: "MongoDB Developers", icon: "mongodb-plain.svg", url: "/hire-developers/mongodb" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Request",
      description: "Describe the ideal full-time or freelance developer you are looking for.",
      subtext: "Tell us about the role, technical requirements, and budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted candidate profiles that match your technical requirements.",
      subtext: "Select the full-time or freelance engineer you would like to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When you are ready, hire the preferred full-time or freelance developer.",
      subtext: "Sign an NDA with your new engineer, and we handle the paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    {
      title: "Finding Freelance Developers: 21+ Expert Tips & Strategies",
      image: "/images/blog/people-search.svg",
      url: "/employer-blog/how-to-find-developers"
    },
    {
      title: "Is Your Developer Ready for Remote Work?",
      image: "/images/blog/remote-team.svg",
      url: "/employer-blog/remote-ready-interview-questions"
    },
    {
      title: "Interview Questions for Remote Developers & Potential Freelancers",
      image: "/images/blog/online-test.svg",
      url: "/employer-blog/software-engineer-interview-questions"
    },
    {
      title: "How to Successfully Conduct a Remote Technical Interview",
      image: "/images/blog/code-review.svg",
      url: "/employer-blog/how-to-conduct-a-remote-technical-interview"
    },
    {
      title: "How to Build & Maintain a Remote Engineering Team",
      image: "/images/blog/team-collaboration.svg",
      url: "/employer-blog/distributed-software-engineering-team"
    },
    {
      title: "How to Manage Remote Development Teams",
      image: "/images/blog/project-completed.svg",
      url: "/employer-blog/how-to-manage-developers-remote-team"
    }
  ];

  const companiesTestimonials = [
    {
      quote: "We previously tried hiring through traditional platforms, but the quality of developers at HireDeveloper.ae is far superior.",
      author: "M.G.",
      title: "CEO",
      company: "SaaS Company",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "I found former founders, senior engineers, and even CMOs in less than 48 hours.",
      author: "C.B.",
      title: "Founder & CEO",
      company: "Tech Startup",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg"
    },
  ];

  const dedicatedTeamFeatures = [
    {
      title: "Pre-Vetted Developers",
      description: "Every developer is tested for technical skills and communication."
    },
    {
      title: "Fast Matching",
      description: "Get matched with qualified developers in 48 hours or less."
    },
    {
      title: "Quality Guarantee",
      description: "Risk-free trial period. Only pay when you are 100% satisfied."
    }
  ];


  const guideSections = [
    {
      title: "Why Should You Hire a Freelance Developer in Dubai & Abu Dhabi?",
      subsections: [
        {
          subtitle: "Cost-Effective for UAE Businesses",
          content: "For companies operating in Dubai's DIFC, DIC, or Abu Dhabi's ADGM and Hub71, hiring freelance developers is significantly more cost-effective than full-time hires. You pay only for the work delivered, without additional overheads such as visa sponsorship, Emirates ID processing, health insurance, or office space in expensive UAE free zones."
        },
        {
          subtitle: "Global Talent, UAE Timezone Compatibility",
          content: "The freelance market gives you access to a global pool of talented developers, many of whom are already aligned with the UAE's GMT+4 timezone and Sunday-to-Thursday work week. This means seamless real-time collaboration during your business hours, whether your team sits in Dubai Marina or Abu Dhabi's Reem Island."
        },
        {
          subtitle: "Specialization for the UAE Tech Ecosystem",
          content: "The UAE's booming fintech, e-commerce, proptech, and government digital transformation sectors require niche expertise. Freelancers who specialize in technologies like blockchain, AI, or cloud infrastructure bring exactly the skills that Dubai and Abu Dhabi's startup and enterprise ecosystems demand."
        },
        {
          subtitle: "Flexibility for a Fast-Moving Market",
          content: "The UAE business landscape moves fast, from Expo-scale initiatives to rapid startup growth in Hub71 and DTEC. Freelance developers let you scale your team up or down based on project requirements without the long-term commitments that UAE labor law requires for full-time employees."
        }
      ]
    },
    {
      title: "When Should You Hire a Freelance Developer?",
      subsections: [
        {
          subtitle: "When You Are Short on Time",
          content: "UAE companies often operate on ambitious timelines. Whether you are launching for Gitex, preparing for a government RFP, or racing to meet investor milestones, freelance developers can start working on your project immediately without the weeks-long visa and onboarding process that in-house hires require."
        },
        {
          subtitle: "When You Are Missing Certain Skills",
          content: "Dubai and Abu Dhabi's tech talent pool is growing but still competitive for specialized roles. If your in-house team lacks expertise in areas like AI, blockchain, or specific cloud platforms, freelancers can fill those gaps quickly while you continue recruiting locally."
        },
        {
          subtitle: "When You Want to Optimize Your Budget",
          content: "With office rents in DIFC and ADGM among the highest in the region, keeping a lean remote team is a smart strategy. Freelance developers deliver high-quality work at competitive rates, letting you reinvest savings into growth while staying compliant with UAE remote work regulations."
        }
      ]
    },
    {
      title: "How to Find a Top Freelance Developer for Your UAE Business",
      subsections: [
        {
          subtitle: "Define Your Requirements for the UAE Market",
          content: "Clearly define the skills, experience level, and project requirements before you begin your search. Consider whether your project involves UAE-specific needs like Arabic language support, regional payment gateways, or compliance with UAE data residency regulations.",
          questions: [
            "What is your project about? What are the required technical skills?",
            "Do you need timezone overlap with UAE business hours (GMT+4, Sunday-Thursday)?",
            "Does your project require knowledge of UAE regulations, Arabic localization, or regional payment systems?",
            "What is your budget range in AED or USD?",
            "Do you need someone for a short-term sprint or a long-term engagement?"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Hire Developers', href: '/hire-developers' },
        ]}
      />

      <HireHero
        category="developers"
        count={90921}
        description="HireDeveloper.ae has 90,921 full-time and freelance developers, engineers, programmers, coders, contractors, and tech experts ready for interviews and available to hire immediately. Our global developer network can help with staff augmentation or scaling your engineering team. Simply tell us what you need, and we will help you find the developers who are the best fit."
        descriptionAr="يضم HireDeveloper.ae أكثر من 90,921 مطورًا بدوام كامل ومستقل ومهندسين ومبرمجين وخبراء تقنية جاهزين للمقابلات ومتاحين للتوظيف فورًا. يمكن لشبكتنا العالمية من المطورين المساعدة في تعزيز فريقك أو توسيع فريق الهندسة لديك. أخبرنا بما تحتاج وسنساعدك في إيجاد المطورين الأنسب."
      />

      {/* Hero Video Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg hidden md:block">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/videos/hero.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>
      </section>

      <TalentShowcase
        heading="90,921 remote developers and experts available:"
        profiles={profiles}
        category="developers"
      />

      <StatsTestimonials
        stats={stats}
        testimonials={testimonials}
      />

      <InlineCTABanner
        headline="Ready to strengthen your team?"
        subtext="Receive vetted candidate profiles within 48 hours — free and with no obligation."
      />

      <CategoriesGrid
        heading="Top remote developers are just a few clicks away"
        subheading="HireDeveloper.ae offers pre-vetted full-time and freelance developers proficient in every programming language, framework, and technology. Browse our popular remote engineer specializations below."
        sections={categorySections}
      />

      <HowItWorksSteps
        steps={steps}
        category="developers"
      />

      <InlineCTABanner
        headline="Top developers are waiting for you"
        subtext="Save up to 58% on staffing costs with vetted remote talent."
      />

      <CompaniesTestimonials testimonials={companiesTestimonials} />

      <DedicatedTeamSection
        heading="Build your dedicated team of remote developers"
        description="HireDeveloper.ae helps you build your team with our global network of software developers, available for freelance contracts or full-time remote positions."
        features={dedicatedTeamFeatures}
      />

      <WhyChooseArc />

      <HiringGuideSection
        heading="How to Hire Top Freelance Developers"
        sections={guideSections}
      />

      <FAQSection category="developers" />

      <ResourcesSection
        heading="Resources for Hiring Engineering Experts"
        subheading="Learn more about how to hire remote developers, key interview questions for freelance developers, and much more!"
        articles={articles}
      />

      <RelatedLinks
        title="Popular Specializations"
        links={[
          { label: 'JavaScript Developers', href: '/hire-developers/javascript' },
          { label: 'Python Developers', href: '/hire-developers/python' },
          { label: 'React Developers', href: '/hire-developers/reactjs' },
          { label: 'Node.js Developers', href: '/hire-developers/nodejs' },
          { label: 'AI Developers', href: '/hire-developers/ai' },
          { label: 'Full-Stack Developers', href: '/hire-developers/full-stack' },
          { label: 'DevOps Engineers', href: '/hire-developers/devops' },
          { label: 'Mobile App Developers', href: '/hire-developers/mobile-app-development' },
          { label: 'TypeScript Developers', href: '/hire-developers/typescript' },
          { label: 'Java Developers', href: '/hire-developers/java' },
          { label: 'PHP Developers', href: '/hire-developers/php' },
          { label: 'AWS Developers', href: '/hire-developers/aws' },
        ]}
      />

      <RelatedLinks
        title="Developers by Location"
        links={[
          { label: 'Developers in the UAE', href: '/locations/uae' },
          { label: 'Developers in Saudi Arabia', href: '/locations/saudi-arabia' },
          { label: 'Developers in Qatar', href: '/locations/qatar' },
          { label: 'Developers in Dubai', href: '/locations/uae/dubai/dubai' },
          { label: 'Developers in Abu Dhabi', href: '/locations/uae/abu-dhabi/abu-dhabi' },
          { label: 'Developers in Sharjah', href: '/locations/uae/sharjah/sharjah' },
          { label: 'Developers in Riyadh', href: '/locations/saudi-arabia/riyadh-region/riyadh' },
          { label: 'Developers in Doha', href: '/locations/qatar/qatar/doha' },
        ]}
      />

      <RelatedLinks
        title="Compare Providers"
        links={[
          { label: 'vs Toptal', href: '/compare/toptal' },
          { label: 'vs Upwork', href: '/compare/upwork' },
          { label: 'vs Fiverr', href: '/compare/fiverr' },
          { label: 'vs Turing', href: '/compare/turing' },
          { label: 'vs Andela', href: '/compare/andela' },
          { label: 'vs Arc.dev', href: '/compare/arc-dev' },
          { label: 'vs Hired', href: '/compare/hired' },
          { label: 'All Comparisons', href: '/compare' },
        ]}
      />

      <RelatedLinks
        title="Also Hire Marketing Experts"
        links={[
          { label: 'SEO Audit Specialists', href: '/hire-marketers/seo-audit' },
          { label: 'Content Strategists', href: '/hire-marketers/content-strategy' },
          { label: 'Paid Ads Experts', href: '/hire-marketers/paid-ads' },
          { label: 'Copywriters', href: '/hire-marketers/copywriting' },
          { label: 'A/B Testing Experts', href: '/hire-marketers/ab-test-setup' },
          { label: 'All 25 Marketing Specializations', href: '/hire-marketers' },
        ]}
      />

      <RelatedLinks
        title="Useful Hiring Tools"
        links={[
          { label: 'Developer Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'Technology Comparison', href: '/tools/technology-comparison' },
          { label: 'All Tools', href: '/tools' },
        ]}
      />

      <section className="bg-gray-50 py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <LeadForm />
        </div>
      </section>

      <FinalCTA
        heading="Your future remote developer is just around the corner!"
        subheading="Start risk-free."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
