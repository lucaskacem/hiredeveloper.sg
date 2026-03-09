import { Metadata } from 'next';
import Image from 'next/image';
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
import HiringProcessFlowchart from '../components/HiringProcessFlowchart';
import RelatedLinks from '../components/RelatedLinks';
import Breadcrumb from '../components/Breadcrumb';
import LeadForm from '../components/LeadForm';
import InlineCTABanner from '../components/InlineCTABanner';

const year = new Date().getFullYear();
export const metadata: Metadata = {
  title: `Hire Top Developers in Singapore - ${year} | HireDeveloper.sg`,
  description: `Hire the best developers, engineers, and programmers in Singapore. Over 90,000 vetted freelance and full-time experts ready for interviews. Updated for ${year}.`,
  alternates: {
    canonical: 'https://hiredeveloper.sg/hire-developers',
  },
};

export default function HireDevelopersPage() {
  // Sample data - in production, this would come from an API or CMS
  const profiles = [
    {
      name: "Aksel .",
      location: "Singapore (UTC+8)",
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
      location: "Singapore (UTC+8)",
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
      quote: "We previously tried hiring through traditional platforms, but the quality of developers at HireDeveloper.sg is far superior.",
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
      title: "Find and Hire Developers by Role",
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
      title: "Find and Hire Engineers by Skill",
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
      quote: "We previously tried hiring through traditional platforms, but the quality of developers at HireDeveloper.sg is far superior.",
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
      title: "Why Should You Hire a Freelance Developer in Singapore?",
      subsections: [
        {
          subtitle: "Cost-Effective for Singapore Businesses",
          content: "For companies operating in Singapore's CBD, one-north, or Changi Business Park, hiring freelance developers is significantly more cost-effective than full-time hires. You pay only for the work delivered, without additional overheads such as Employment Pass sponsorship, CPF contributions, health insurance, or office space in Singapore's prime business districts."
        },
        {
          subtitle: "Global Talent, Singapore Timezone Compatibility",
          content: "The freelance market gives you access to a global pool of talented developers, many of whom are already aligned with Singapore's GMT+8 timezone and Monday-to-Friday work week. This means seamless real-time collaboration during your business hours, whether your team sits in Raffles Place or one-north."
        },
        {
          subtitle: "Specialization for Singapore Tech Ecosystem",
          content: "Singapore's booming fintech, e-commerce, proptech, and government digital transformation sectors require niche expertise. Freelancers who specialize in technologies like blockchain, AI, or cloud infrastructure bring exactly the skills that Singapore's startup and enterprise ecosystems demand."
        },
        {
          subtitle: "Flexibility for a Fast-Moving Market",
          content: "The Singapore business landscape moves fast, from Smart Nation initiatives to rapid startup growth in Block71 and one-north. Freelance developers let you scale your team up or down based on project requirements without the long-term commitments that Singapore employment law requires for full-time employees."
        }
      ]
    },
    {
      title: "When Should You Hire a Freelance Developer?",
      subsections: [
        {
          subtitle: "When You Are Short on Time",
          content: "Singapore companies often operate on ambitious timelines. Whether you are launching for Singapore Tech Week, preparing for a government RFP, or racing to meet investor milestones, freelance developers can start working on your project immediately without the weeks-long Employment Pass and onboarding process that in-house hires require."
        },
        {
          subtitle: "When You Are Missing Certain Skills",
          content: "Singapore's tech talent pool is growing but still competitive for specialized roles. If your in-house team lacks expertise in areas like AI, blockchain, or specific cloud platforms, freelancers can fill those gaps quickly while you continue recruiting locally."
        },
        {
          subtitle: "When You Want to Optimize Your Budget",
          content: "With office rents in the CBD and one-north among the highest in the region, keeping a lean remote team is a smart strategy. Freelance developers deliver high-quality work at competitive rates, letting you reinvest savings into growth while staying compliant with Singapore remote work regulations."
        }
      ]
    },
    {
      title: "How to Find a Top Freelance Developer for Your Singapore Business",
      subsections: [
        {
          subtitle: "Define Your Requirements for Singapore Market",
          content: "Clearly define the skills, experience level, and project requirements before you begin your search. Consider whether your project involves Singapore-specific needs like multilingual support, regional payment gateways, or compliance with PDPA data protection regulations.",
          questions: [
            "What is your project about? What are the required technical skills?",
            "Do you need timezone overlap with Singapore business hours (GMT+8, Monday-Friday)?",
            "Does your project require knowledge of Singapore regulations, multilingual localization, or regional payment systems?",
            "What is your budget range in SGD or USD?",
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
        description="HireDeveloper.sg has 90,921 full-time and freelance developers, engineers, programmers, coders, contractors, and tech experts ready for interviews and available to hire immediately. Our global developer network can help with staff augmentation or scaling your engineering team. Simply tell us what you need, and we will help you find the developers who are the best fit."
      />

      {/* Singapore skyline decorative divider */}
      <div className="bg-black relative h-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 opacity-[0.07] pointer-events-none">
          <Image
            src="/images/singapore/skyline.svg"
            alt=""
            width={1920}
            height={120}
            className="w-full h-auto"
            aria-hidden="true"
          />
        </div>
      </div>

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
        heading="90,921 developers and experts available:"
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
        heading="Top developers are just a few clicks away"
        subheading="HireDeveloper.sg offers pre-vetted full-time and freelance developers proficient in every programming language, framework, and technology. Browse our popular engineer specializations below."
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
        heading="Build your dedicated team of developers"
        description="HireDeveloper.sg helps you build your team with our global network of software developers, available for freelance contracts or full-time positions."
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
        subheading="Learn more about how to hire developers, key interview questions for freelance developers, and much more!"
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
          { label: 'Developers in Singapore', href: '/locations/singapore' },
          { label: 'Developers in Marina Bay', href: '/locations/singapore/central-region/marina-bay' },
          { label: 'Developers in one-north', href: '/locations/singapore/central-region/one-north' },
          { label: 'Developers in Jurong East', href: '/locations/singapore/west-region/jurong-east' },
          { label: 'Developers in Tampines', href: '/locations/singapore/east-region/tampines' },
          { label: 'Developers in Woodlands', href: '/locations/singapore/north-region/woodlands' },
          { label: 'Developers in Punggol', href: '/locations/singapore/north-east-region/punggol' },
        ]}
      />

      <RelatedLinks
        title="Compare Providers"
        links={[
          { label: 'vs Toptal', href: '/comparison/toptal' },
          { label: 'vs Upwork', href: '/comparison/upwork' },
          { label: 'vs Fiverr', href: '/comparison/fiverr' },
          { label: 'vs Turing', href: '/comparison/turing' },
          { label: 'vs Andela', href: '/comparison/andela' },
          { label: 'vs Arc.dev', href: '/comparison/arc-dev' },
          { label: 'vs Hired', href: '/comparison/hired' },
          { label: 'All Comparisons', href: '/comparison' },
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

      <HiringProcessFlowchart industry="your development project" />

      <FinalCTA
        heading="Your future developer is just around the corner!"
        subheading="Start risk-free."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
