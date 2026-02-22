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

export const metadata: Metadata = {
  title: 'Hire Project Managers | HireDeveloper.ae',
  description: 'Hire experienced remote project managers, Scrum Masters, and program managers in Dubai and Abu Dhabi. Over 6,700 vetted experts with proven track records. Start risk-free today.',
};

export default function HireProjectManagersPage() {
  const profiles = [
    {
      name: "David K.",
      location: "Australia (UTC+10)",
      badge: "Vetted Project Manager",
      bio: "Certified PMP with 12+ years of experience managing complex technical projects. Expert in agile and waterfall methodologies, risk management, and stakeholder communication. Delivered 50+ projects on time and within budget.",
      skills: ["PMP", "Agile", "Scrum", "Jira", "Risk Management", "Stakeholder Management", "Waterfall", "+9"],
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
      quote: "Our HireDeveloper.ae project manager kept our complex project on track and delivered on time.",
      author: "Susan Miller",
      title: "Director of Operations",
      company: "EnterpriseInc",
      avatar: ""
    },
    {
      quote: "We found a certified PMP who understood our project requirements immediately.",
      author: "John Davis",
      title: "VP of Engineering",
      company: "TechCorp",
      avatar: ""
    },
    {
      quote: "The Scrum Master we hired transformed our agile processes.",
      author: "Maria Garcia",
      title: "CTO",
      company: "AgileTeam",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote project managers by specialization",
      items: [
        { name: "Project Managers", icon: "pm-plain.svg", url: "/hire-project-managers" },
        { name: "Scrum Masters", icon: "scrum-plain.svg", url: "/hire-project-managers/scrum-masters" },
        { name: "Program Managers", icon: "program-plain.svg", url: "/hire-project-managers/program-managers" },
        { name: "Agile Coaches", icon: "agile-plain.svg", url: "/hire-project-managers/agile-coaches" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Your Request",
      description: "Describe the ideal project manager you're looking for.",
      subtext: "Tell us about the role, project requirements, and budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted project manager profiles that match your requirements.",
      subtext: "Select the project manager you'd like to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When you're ready, hire your preferred project manager.",
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
        category="project-managers"
        count={6789}
        description="HireDeveloper.ae has 6,789 vetted remote project managers ready for interviews. Find experienced project managers, Scrum Masters, program managers, and more to lead your projects to success."
        descriptionAr="يضم HireDeveloper.ae أكثر من 6,789 مدير مشاريع معتمدًا عن بعد جاهزين للمقابلات. اعثر على مدراء مشاريع ذوي خبرة وخبراء Scrum ومدراء برامج لقيادة مشاريعك نحو النجاح."
      />
      <TalentShowcase heading="6,789 remote project managers available:" profiles={profiles} category="project managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top remote project managers are just a few clicks away" subheading="HireDeveloper.ae offers pre-vetted project managers with proven track records." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="project managers" />
      <FAQSection category="project managers" />
      <ResourcesSection heading="Resources for hiring project management experts" subheading="Learn more about how to hire remote project managers and deliver projects successfully!" articles={articles} />
      <FinalCTA
        heading="Your future project manager is just around the corner!"
        subheading="Start risk-free."
        ctaText="Hire Talent"
      />
      <Footer />
    </div>
  );
}
