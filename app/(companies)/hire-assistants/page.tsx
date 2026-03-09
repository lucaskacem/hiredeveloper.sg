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
  title: `Hire Assistants - ${year} | HireDeveloper.sg`,
  description: `Hire vetted virtual assistants, executive assistants, and administrative assistants in Singapore. Over 4,500 remote experts ready for interviews. Updated for ${year}.`,
};

export default function HireAssistantsPage() {
  const profiles = [
    {
      name: "Maria R.",
      location: "Singapore, Singapore (UTC+8)",
      badge: "Vetted Assistant",
      bio: "Highly organized executive assistant with 7+ years of experience supporting C-level executives. Expert in calendar management, travel planning, email management, and project coordination. Excellent communication skills and attention to detail.",
      skills: ["Executive Support", "Calendar Management", "Travel Planning", "Email Management", "Data Entry", "Research", "+6"],
      availability: "Full-Time & Freelance",
      previousCompany: { name: "Top Company", logo: "" },
      avatar: "https://randomuser.me/api/portraits/women/38.jpg"
    }
  ];

  const stats = [
    { prefix: "Up to", value: "75%", label: "faster hiring" },
    { prefix: "Up to", value: "58%", label: "cost savings" },
    { value: "800+", label: "hires made" }
  ];

  const testimonials = [
    {
      quote: "Our virtual assistant from HireDeveloper.sg was a game-changer for our productivity.",
      author: "Robert Johnson",
      title: "CEO",
      company: "StartupCo",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
      quote: "Found an exceptional executive assistant who handles everything flawlessly.",
      author: "Amanda Smith",
      title: "Founder",
      company: "GrowthVentures",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
      quote: "The assistant we hired is professional, efficient, and incredibly organized.",
      author: "Chris Lee",
      title: "COO",
      company: "BusinessInc",
      avatar: "https://randomuser.me/api/portraits/men/74.jpg"
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote assistants by specialization",
      items: [
        { name: "Virtual Assistants", icon: "va-plain.svg", url: "/hire-assistants/virtual-assistants" },
        { name: "Executive Assistants", icon: "ea-plain.svg", url: "/hire-assistants/executive-assistants" },
        { name: "Administrative Assistants", icon: "admin-plain.svg", url: "/hire-assistants/administrative-assistants" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Your Request",
      description: "Describe the ideal assistant you're looking for.",
      subtext: "Tell us about the role, support needs, and budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted assistant profiles that match your requirements.",
      subtext: "Select the assistant you'd like to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When you're ready, hire your preferred assistant.",
      subtext: "Sign an NDA, and we'll handle the paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "Finding Remote Assistants: 21+ Tips & Strategies", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
    { title: "Is Your Candidate Ready for Remote Work?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
    { title: "Interview Questions for Remote Assistants", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
    { title: "How to Conduct a Remote Assistant Interview", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
    { title: "Building a Remote Operations Team", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
    { title: "Managing Remote Assistants Effectively", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" }
  ];

  const guideSections = [
    {
      title: "Why hire remote assistants in Singapore?",
      subsections: [
        {
          subtitle: "Free Up Your Time to Focus on Growth",
          content: "Singapore founders and executives juggle an extraordinary workload — from investor meetings in Marina Bay to conferences at Suntec City. Remote assistants handle email management, scheduling, research, and administrative tasks so you can focus on strategic decisions that grow your business. HireDeveloper.sg pre-vets every assistant for English proficiency, professionalism, and reliability."
        },
        {
          subtitle: "Cost Savings Without Compromising Quality",
          content: "Full-time administrative staff in Singapore cost SGD 36,000–72,000 annually plus CPF contributions and office space. Remote assistants through HireDeveloper.sg offer the same quality of support at 50-70% lower cost, with the flexibility to hire part-time (20 hrs/week) or full-time based on your current needs."
        }
      ]
    },
    {
      title: "Types of remote assistants available in Singapore",
      subsections: [
        {
          subtitle: "Virtual Assistants (VAs)",
          content: "General-purpose remote professionals who handle email management, data entry, research, social media scheduling, customer support, and more. Ideal for startups and SMEs across Singapore who need flexible, multi-skilled support without hiring full-time staff."
        },
        {
          subtitle: "Executive Assistants (EAs)",
          content: "Experienced professionals who support C-suite executives with complex calendar management, board meeting preparation, confidential correspondence, travel planning, and stakeholder communication. Perfect for busy founders and directors across Singapore's CBD and tech hubs."
        },
        {
          subtitle: "Administrative Assistants",
          content: "Organized professionals who manage office administration, document processing, filing systems, inventory management, and meeting coordination. Essential for Singapore companies scaling operations across multiple offices or coworking spaces."
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
          { label: 'Hire Assistants', href: '/hire-assistants' },
        ]}
      />

      <HireHero
        category="assistants"
        count={4532}
        description="HireDeveloper.sg has 4,532 vetted assistants ready for interviews. Find virtual assistants, executive assistants, and administrative assistants to support your business operations in Singapore."
      />
      <TalentShowcase heading="4,532 assistants available:" profiles={profiles} category="assistants" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Hire Assistants in Singapore by Specialization" subheading="HireDeveloper.sg offers pre-vetted assistants ready to support your business needs." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="assistants" />

      <WhyChooseArc />

      <HiringGuideSection
        heading="How to Hire Top Assistants in Singapore"
        sections={guideSections}
      />

      <FAQSection category="assistants" />

      <HiringProcessFlowchart industry="your support team" />

      <ResourcesSection heading="Resources for hiring assistants" subheading="Learn more about how to hire assistants and maximize productivity!" articles={articles} />

      <RelatedLinks
        title="Also Hire"
        links={[
          { label: 'Software Developers', href: '/hire-developers' },
          { label: 'Product Managers', href: '/hire-product-managers' },
          { label: 'Project Managers', href: '/hire-project-managers' },
          { label: 'Marketing Experts', href: '/hire-marketers' },
          { label: 'UX/UI Designers', href: '/hire-designers' },
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
        heading="Hire Assistants in Singapore — Start Risk-Free"
        subheading="3 specializations. Pre-vetted candidates in 48 hours. $0 until you hire."
        ctaText="Hire Talent"
      />
      <Footer />
    </div>
  );
}
