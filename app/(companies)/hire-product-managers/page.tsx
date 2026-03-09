import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCTA from '../components/FinalCTA';
import Breadcrumb from '../components/Breadcrumb';
import RelatedLinks from '../components/RelatedLinks';
import HiringProcessFlowchart from '../components/HiringProcessFlowchart';
import HiringGuideSection from '../components/HiringGuideSection';

const year = new Date().getFullYear();
export const metadata: Metadata = {
  title: `Hire Product Managers - ${year} | HireDeveloper.sg`,
  description: `Hire experienced remote product managers, product owners, and technical PMs in Singapore. Over 5,600 vetted experts ready for interviews. Updated for ${year}.`,
};

export default function HireProductManagersPage() {
  const profiles = [
    {
      name: "Jennifer L.",
      location: "Singapore, Singapore (UTC+8)",
      badge: "Vetted Product Manager",
      bio: "Strategic product manager with 8+ years of experience leading cross-functional teams. Expert in product strategy, roadmap planning, and agile methodologies. Successfully launched 15+ products from 0 to 1.",
      skills: ["Product Strategy", "Agile", "Scrum", "Data Analysis", "User Research", "Roadmapping", "Jira", "+10"],
      availability: "Full-Time & Freelance",
      previousCompany: { name: "Top Company", logo: "" },
      avatar: "https://randomuser.me/api/portraits/women/47.jpg"
    }
  ];

  const stats = [
    { prefix: "Up to", value: "75%", label: "faster hiring" },
    { prefix: "Up to", value: "58%", label: "cost savings" },
    { value: "800+", label: "hires made" }
  ];

  const testimonials = [
    {
      quote: "Our HireDeveloper.sg product manager transformed our product strategy and execution.",
      author: "David Park",
      title: "CEO",
      company: "ProductCo",
      avatar: "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
      quote: "We found an incredible technical PM who bridges the gap between engineering and business.",
      author: "Rachel Green",
      title: "CTO",
      company: "TechVenture",
      avatar: "https://randomuser.me/api/portraits/women/39.jpg"
    },
    {
      quote: "The PM we hired helped us prioritize our roadmap and deliver faster.",
      author: "Mark Wilson",
      title: "VP of Engineering",
      company: "FastShip",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote product managers by specialization",
      items: [
        { name: "Product Managers", icon: "pm-plain.svg", url: "/hire-product-managers" },
        { name: "Technical Product Managers", icon: "technical-pm-plain.svg", url: "/hire-product-managers/technical" },
        { name: "Product Owners", icon: "po-plain.svg", url: "/hire-product-managers/product-owners" },
        { name: "AI Product Managers", icon: "ai-pm-plain.svg", url: "/hire-product-managers/ai" },
        { name: "Data Product Managers", icon: "data-pm-plain.svg", url: "/hire-product-managers/data" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Your Request",
      description: "Describe the ideal product manager you're looking for.",
      subtext: "Tell us about the role, product requirements, and budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted product manager profiles that match your requirements.",
      subtext: "Select the product manager you'd like to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When you're ready, hire your preferred product manager.",
      subtext: "Sign an NDA, and we'll handle the paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "Finding Freelance Product Managers: 21+ Tips & Strategies", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
    { title: "Is Your Candidate Ready for Remote Work?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
    { title: "Interview Questions for Remote Product Managers", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
    { title: "How to Conduct a Remote Product Manager Interview", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
    { title: "Building & Maintaining a Remote Product Team", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
    { title: "Managing Remote Product Teams", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" }
  ];

  const guideSections = [
    {
      title: "Why hire remote product managers in Singapore?",
      subsections: [
        {
          subtitle: "Access Singapore's Product Management Talent Pool",
          content: "Singapore's thriving tech ecosystem — from Marina Bay startups to one-north innovation hubs — demands experienced product managers who can navigate the APAC market. Remote hiring through HireDeveloper.sg lets you access pre-vetted PMs who understand the nuances of Southeast Asian markets, multilingual user bases, and the regulatory landscape."
        },
        {
          subtitle: "Scale Your Product Team Cost-Effectively",
          content: "Hiring full-time product managers in Singapore's CBD can cost SGD 120,000–200,000 annually. Remote PMs through HireDeveloper.sg offer the same caliber of talent at 40-60% lower cost, while giving you flexibility to scale up or down based on your product roadmap without long-term employment commitments."
        }
      ]
    },
    {
      title: "Key product management skills in high demand across Singapore",
      subsections: [
        {
          subtitle: "Technical Product Management",
          content: "Singapore's fintech, healthtech, and govtech sectors increasingly require product managers who can bridge the gap between engineering and business. Technical PMs who understand APIs, system architecture, and data pipelines are especially sought after by companies building platforms for the ASEAN market."
        },
        {
          subtitle: "Data-Driven Product Strategy",
          content: "With Singapore's push toward becoming a Smart Nation, product managers with strong analytics skills — A/B testing, cohort analysis, and product-led growth — are in high demand. Companies need PMs who can leverage data to make decisions for diverse, multilingual user bases across the region."
        },
        {
          subtitle: "AI & Machine Learning Product Management",
          content: "As Singapore positions itself as Asia's AI hub, demand for AI product managers has surged. These specialists understand ML model evaluation, AI ethics, and how to translate AI capabilities into user-facing products that comply with Singapore's AI governance framework."
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
          { label: 'Hire Product Managers', href: '/hire-product-managers' },
        ]}
      />

      <HireHero
        category="product-managers"
        count={5678}
        description="HireDeveloper.sg has 5,678 vetted product managers ready for interviews. Find experienced product managers, product owners, technical PMs, and AI product managers to drive your product strategy forward in Singapore."
      />
      <TalentShowcase heading="5,678 product managers available:" profiles={profiles} category="product managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Hire Product Managers in Singapore by Specialization" subheading="HireDeveloper.sg offers pre-vetted product managers with deep experience across fintech, e-commerce, healthtech, and more." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="product managers" />

      <WhyChooseArc />

      <HiringGuideSection
        heading="How to Hire Top Product Managers in Singapore"
        sections={guideSections}
      />

      <FAQSection category="product managers" />

      <HiringProcessFlowchart industry="your product management team" />

      <ResourcesSection heading="Resources for hiring product management experts" subheading="Learn more about how to hire product managers and build exceptional product teams!" articles={articles} />

      <RelatedLinks
        title="Also Hire"
        links={[
          { label: 'Software Developers', href: '/hire-developers' },
          { label: 'UX/UI Designers', href: '/hire-designers' },
          { label: 'Project Managers', href: '/hire-project-managers' },
          { label: 'Marketing Experts', href: '/hire-marketers' },
          { label: 'Virtual Assistants', href: '/hire-assistants' },
        ]}
      />

      <RelatedLinks
        title="Hiring Tools"
        links={[
          { label: 'Salary Calculator', href: '/tools/salary-calculator' },
          { label: 'Team Cost Calculator', href: '/tools/team-cost-calculator' },
          { label: 'Interview Questions Generator', href: '/tools/interview-questions' },
          { label: 'All Tools', href: '/tools' },
        ]}
      />

      <FinalCTA
        heading="Hire Product Managers in Singapore — Start Risk-Free"
        subheading="5 specializations. Pre-vetted candidates in 48 hours. $0 until you hire."
        ctaText="Hire Talent"
      />
      <Footer />
    </div>
  );
}
