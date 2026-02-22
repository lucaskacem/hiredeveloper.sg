import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCTA from '../components/FinalCTA';

const year = new Date().getFullYear();
export const metadata: Metadata = {
  title: `Hire Product Managers - ${year} | HireDeveloper.ae`,
  description: `Hire experienced remote product managers, product owners, and technical PMs in Dubai and Abu Dhabi. Over 5,600 vetted experts ready for interviews. Updated for ${year}.`,
};

export default function HireProductManagersPage() {
  const profiles = [
    {
      name: "Jennifer L.",
      location: "Canada (UTC-4)",
      badge: "Vetted Product Manager",
      bio: "Strategic product manager with 8+ years of experience leading cross-functional teams. Expert in product strategy, roadmap planning, and agile methodologies. Successfully launched 15+ products from 0 to 1.",
      skills: ["Product Strategy", "Agile", "Scrum", "Data Analysis", "User Research", "Roadmapping", "Jira", "+10"],
      availability: "Full-Time & Freelance",
      previousCompany: { name: "Top Company", logo: "" },
      avatar: ""
    }
  ];

  const stats = [
    { prefix: "Up to", value: "75%", label: "faster hiring" },
    { prefix: "Up to", value: "58%", label: "cost savings" },
    { value: "800+", label: "hires made" }
  ];

  const testimonials = [
    {
      quote: "Our HireDeveloper.ae product manager transformed our product strategy and execution.",
      author: "David Park",
      title: "CEO",
      company: "ProductCo",
      avatar: ""
    },
    {
      quote: "We found an incredible technical PM who bridges the gap between engineering and business.",
      author: "Rachel Green",
      title: "CTO",
      company: "TechVenture",
      avatar: ""
    },
    {
      quote: "The PM we hired helped us prioritize our roadmap and deliver faster.",
      author: "Mark Wilson",
      title: "VP of Engineering",
      company: "FastShip",
      avatar: ""
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
    { title: "Finding Freelance Experts: 21+ Expert Tips & Strategies", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
    { title: "Is Your Candidate Ready for Remote Work?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
    { title: "Interview Questions for Remote Experts", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
    { title: "How to Conduct a Remote Technical Interview", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
    { title: "Building & Maintaining a Remote Engineering Team", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
    { title: "Managing Remote Teams", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero
        category="product-managers"
        count={5678}
        description="HireDeveloper.ae has 5,678 vetted remote product managers ready for interviews. Find experienced product managers, product owners, technical PMs, and more to drive your product strategy forward."
        descriptionAr="يضم HireDeveloper.ae أكثر من 5,678 مدير منتجات معتمدًا عن بعد جاهزين للمقابلات. اعثر على مدراء منتجات ذوي خبرة ومالكي منتجات ومدراء تقنيين لدفع استراتيجية منتجك إلى الأمام."
      />
      <TalentShowcase heading="5,678 remote product managers available:" profiles={profiles} category="product managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top remote product managers are just a few clicks away" subheading="HireDeveloper.ae offers pre-vetted product managers with deep experience across various industries." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="product managers" />
      <FAQSection category="product managers" />
      <ResourcesSection heading="Resources for hiring product management experts" subheading="Learn more about how to hire remote product managers and build exceptional product teams!" articles={articles} />
      <FinalCTA
        heading="Your future product manager is just around the corner!"
        subheading="Start risk-free."
        ctaText="Hire Talent"
      />
      <Footer />
    </div>
  );
}
