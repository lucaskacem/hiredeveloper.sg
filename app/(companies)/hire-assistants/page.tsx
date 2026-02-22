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
  title: `Hire Assistants - ${year} | HireDeveloper.ae`,
  description: `Hire vetted virtual assistants, executive assistants, and administrative assistants in Dubai and Abu Dhabi. Over 4,500 remote experts ready for interviews. Updated for ${year}.`,
};

export default function HireAssistantsPage() {
  const profiles = [
    {
      name: "Maria R.",
      location: "Dubai, UAE (UTC+4)",
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
      quote: "Our virtual assistant from HireDeveloper.ae was a game-changer for our productivity.",
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
    { title: "Finding Freelance Experts: 21+ Expert Tips & Strategies", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
    { title: "Is Your Candidate Ready for Remote Work?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
    { title: "Interview Questions for Remote Experts", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
    { title: "How to Conduct a Remote Technical Interview", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
    { title: "Building & Maintaining a Remote Team", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
    { title: "Managing Remote Teams", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero
        category="assistants"
        count={4532}
        description="HireDeveloper.ae has 4,532 vetted remote assistants ready for interviews. Find virtual assistants, executive assistants, administrative assistants, and more to support your business operations in Dubai and Abu Dhabi."
        descriptionAr="يضم HireDeveloper.ae أكثر من 4,532 مساعدًا معتمدًا عن بعد جاهزين للمقابلات. اعثر على مساعدين افتراضيين وتنفيذيين وإداريين لدعم عمليات أعمالك في دبي وأبوظبي."
      />
      <TalentShowcase heading="4,532 remote assistants available:" profiles={profiles} category="assistants" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top remote assistants are just a few clicks away" subheading="HireDeveloper.ae offers pre-vetted assistants ready to support your business needs." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="assistants" />
      <FAQSection category="assistants" />
      <ResourcesSection heading="Resources for hiring remote assistants" subheading="Learn more about how to hire remote assistants and maximize productivity!" articles={articles} />
      <FinalCTA
        heading="Your new assistant is just a click away!"
        subheading="Start risk-free."
        ctaText="Hire Talent"
      />
      <Footer />
    </div>
  );
}
