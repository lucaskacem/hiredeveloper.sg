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
  title: `Hire Project Managers - ${year} | HireDeveloper.sg`,
  description: `Hire experienced remote project managers, Scrum Masters, and program managers in Singapore. Over 6,700 vetted experts with proven track records. Updated for ${year}.`,
};

export default function HireProjectManagersPage() {
  const profiles = [
    {
      name: "David K.",
      location: "Marina Bay, Singapore (UTC+8)",
      badge: "Vetted Project Manager",
      bio: "Certified PMP with 12+ years of experience managing complex technical projects. Expert in agile and waterfall methodologies, risk management, and stakeholder communication. Delivered 50+ projects on time and within budget.",
      skills: ["PMP", "Agile", "Scrum", "Jira", "Risk Management", "Stakeholder Management", "Waterfall", "+9"],
      availability: "Full-Time & Freelance",
      previousCompany: { name: "Top Company", logo: "" },
      avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  const stats = [
    { prefix: "Up to", value: "75%", label: "faster hiring" },
    { prefix: "Up to", value: "58%", label: "cost savings" },
    { value: "800+", label: "hires made" }
  ];

  const testimonials = [
    {
      quote: "Our HireDeveloper.sg project manager kept our complex project on track and delivered on time.",
      author: "Susan Miller",
      title: "Director of Operations",
      company: "EnterpriseInc",
      avatar: "https://randomuser.me/api/portraits/women/51.jpg"
    },
    {
      quote: "We found a certified PMP who understood our project requirements immediately.",
      author: "John Davis",
      title: "VP of Engineering",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
      quote: "The Scrum Master we hired transformed our agile processes.",
      author: "Maria Garcia",
      title: "CTO",
      company: "AgileTeam",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
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
    { title: "Finding Freelance Project Managers: 21+ Tips & Strategies", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
    { title: "Is Your Candidate Ready for Remote Work?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
    { title: "Interview Questions for Remote Project Managers", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
    { title: "How to Conduct a Remote Project Manager Interview", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
    { title: "Building & Maintaining a Remote Project Team", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
    { title: "Managing Remote Project Teams Across Timezones", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" }
  ];

  const guideSections = [
    {
      title: "Why hire remote project managers in Singapore?",
      subsections: [
        {
          subtitle: "Navigate Complex Multi-Team Projects",
          content: "Singapore's tech industry — from CBD-based enterprises to Block71 startups — runs increasingly complex, multi-team projects that span APAC time zones. Experienced remote project managers from HireDeveloper.sg bring PMP, PRINCE2, and Agile certifications combined with cross-cultural communication skills essential for managing distributed teams across Singapore, India, and Southeast Asia."
        },
        {
          subtitle: "Cost-Effective Project Leadership",
          content: "Senior project managers in Singapore command SGD 100,000–180,000 annually. Remote PMs through HireDeveloper.sg offer the same caliber of leadership at 40-60% lower cost, with the flexibility to engage on a per-project basis. No Employment Pass sponsorship, no long-term office lease commitments."
        }
      ]
    },
    {
      title: "Key project management skills in demand across Singapore",
      subsections: [
        {
          subtitle: "Agile & Scrum Mastery",
          content: "Singapore's tech companies overwhelmingly use Agile methodologies. Scrum Masters and Agile coaches who can facilitate sprint ceremonies, remove impediments, and drive continuous improvement are among the most sought-after project management professionals in the region."
        },
        {
          subtitle: "Program & Portfolio Management",
          content: "Enterprises in Singapore's financial district and Changi Business Park need program managers who can orchestrate multiple concurrent projects, manage budgets exceeding SGD 5M, and ensure strategic alignment with business objectives across complex stakeholder landscapes."
        },
        {
          subtitle: "Risk Management & Compliance",
          content: "Singapore's heavily regulated industries — banking (MAS), healthcare (MOH), and government (GovTech) — require project managers with deep experience in regulatory compliance, risk mitigation, and audit-ready documentation. Remote PMs vetted through HireDeveloper.sg bring this specialized knowledge."
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
          { label: 'Hire Project Managers', href: '/hire-project-managers' },
        ]}
      />

      <HireHero
        category="project-managers"
        count={6789}
        description="HireDeveloper.sg has 6,789 vetted project managers ready for interviews. Find experienced project managers, Scrum Masters, program managers, and Agile coaches to lead your projects in Singapore."
      />
      <TalentShowcase heading="6,789 project managers available:" profiles={profiles} category="project managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Hire Project Managers in Singapore by Specialization" subheading="HireDeveloper.sg offers pre-vetted project managers with PMP, PRINCE2, and Agile certifications." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="project managers" />

      <WhyChooseArc />

      <HiringGuideSection
        heading="How to Hire Top Project Managers in Singapore"
        sections={guideSections}
      />

      <FAQSection category="project managers" />

      <HiringProcessFlowchart industry="your project management team" />

      <ResourcesSection heading="Resources for hiring project management experts" subheading="Learn more about how to hire project managers and deliver projects successfully!" articles={articles} />

      <RelatedLinks
        title="Also Hire"
        links={[
          { label: 'Software Developers', href: '/hire-developers' },
          { label: 'Product Managers', href: '/hire-product-managers' },
          { label: 'UX/UI Designers', href: '/hire-designers' },
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
        heading="Hire Project Managers in Singapore — Start Risk-Free"
        subheading="4 specializations. Pre-vetted candidates in 48 hours. $0 until you hire."
        ctaText="Hire Talent"
      />
      <Footer />
    </div>
  );
}
