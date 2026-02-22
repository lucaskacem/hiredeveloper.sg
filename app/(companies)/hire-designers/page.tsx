import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import HowItWorksSteps from '../components/HowItWorksSteps';
import CompaniesTestimonials from '../components/CompaniesTestimonials';
import DedicatedTeamSection from '../components/DedicatedTeamSection';
import HiringGuideSection from '../components/HiringGuideSection';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCTA from '../components/FinalCTA';
import LeadForm from '../components/LeadForm';

const year = new Date().getFullYear();
export const metadata: Metadata = {
  title: `Hire Designers - ${year} | HireDeveloper.ae`,
  description: `Hire the best freelance and full-time product designers in Dubai and Abu Dhabi. Vetted UX/UI designers ready for interviews. Updated for ${year}.`,
};

export default function HireDesignersPage() {
  const profiles = [
    {
      name: "Soheil O.",
      location: "United States (UTC-7)",
      badge: "Vetted",
      bio: "Experienced Product Design Leader with over 20 years of experience crafting user-centric solutions that drive significant results. Successfully led groundbreaking GenAI projects at leading tech companies, consistently delivering scalable products that increased user engagement by up to 15% and improved conversion rates by 8%. Expertise in data-driven design, user research, and A/B testing, paired with a proven track record of building design teams from a few members to over 50.",
      primarySkill: { name: "Product Design", experience: "10 years" },
      skills: ["UI Design", "Branding", "Visual Design", "Figma", "Team Collaboration", "User Testing", "+13"],
      availability: "Full-Time & Freelance",
      previousCompany: { name: "Top Company", logo: "" },
      avatar: ""
    },
    {
      name: "Audrey W.",
      location: "United States (UTC+8)",
      badge: "Vetted",
      bio: "I am a product designer with a background in cognitive science and human-centered design, fascinated by how we think and interact with the world around us. I enjoy breaking down complex problems and collaborating on design solutions. With 7+ years of experience, I have led products in both large enterprises and early-stage teams, and am currently open to part-time freelance work.",
      primarySkill: { name: "Product Design", experience: "6 years" },
      skills: ["User Research", "Wireframing/Prototyping", "Figma", "Design Systems", "Strategy", "Branding", "+3"],
      availability: "Full-Time & Freelance",
      previousCompany: { name: "Top Company", logo: "" },
      avatar: ""
    },
    {
      name: "Vincent B.",
      location: "United States (UTC-4)",
      badge: "Vetted",
      bio: "Vincent Boutaud is an experienced agile Product Owner, project manager, and technology specialist with 17+ years of experience driving innovation at the intersection of 3D visualization, Building Information Modeling, and software development. Brings leadership-level expertise in product strategy, quality operations, and cross-functional leadership.",
      primarySkill: { name: "Product Management", experience: "17+ years" },
      skills: ["CRM Systems", "Jira/Confluence", "Figma", "UI Design", "UX/UI Design", "Design Systems", "+3"],
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
      quote: "We previously tried hiring through traditional platforms, but the quality of developers at HireDeveloper.ae is far superior.",
      author: "M.G.",
      title: "CEO",
      company: "SaaS Company",
      avatar: ""
    },
    {
      quote: "I found former founders, senior engineers, and even CMOs in less than 48 hours.",
      author: "C.B.",
      title: "Founder & CEO",
      company: "Tech Startup",
      avatar: ""
    },
    {
      quote: "Highly qualified and diverse talent pool at affordable rates!",
      author: "K.H.",
      title: "Lead Recruiter",
      company: "E-Commerce Company",
      avatar: ""
    }
  ];

  const companiesTestimonials = [
    {
      avatar: "/images/testimonials/sarah-thompson.png",
      quote: "HireDeveloper.ae's designers brought our product vision to life. Their expertise in UX and attention to detail exceeded our expectations.",
      author: "S.T.",
      title: "Head of Design",
      company: "SaaS Company"
    },
    {
      avatar: "",
      quote: "Finding top designers has never been easier. HireDeveloper.ae's vetting process ensures we only interview the best.",
      author: "M.C.",
      title: "Product Director",
      company: "FinTech Startup"
    },
    {
      avatar: "",
      quote: "We built our entire design team through HireDeveloper.ae. The quality and speed of hiring was a game-changer for us.",
      author: "J.M.",
      title: "VP of Product",
      company: "E-Commerce Company"
    }
  ];

  const hiringGuideSections = [
    {
      title: "What does a product designer do and why do UAE businesses need one?",
      subsections: [
        {
          subtitle: "Overview",
          content: "A product designer helps create and develop both digital and physical products, ensuring they are functional, easy to use, and visually appealing. For businesses in Dubai and Abu Dhabi, where the digital economy is growing rapidly, product designers are essential for building the apps, platforms, and software that power everything from fintech solutions in DIFC to e-government services. They use UX and UI skills to create layouts, menus, and interactive features that feel intuitive to diverse, multilingual audiences across the UAE."
        }
      ]
    },
    {
      title: "Types of product designers",
      subsections: [
        {
          subtitle: "UX Designers",
          content: "UX designers focus on how users interact with a product, ensuring a smooth and enjoyable experience. In the UAE market, this often includes designing for bilingual (Arabic/English) interfaces, right-to-left layouts, and the cultural expectations of a diverse user base spanning Emirati nationals, expat communities, and international visitors."
        },
        {
          subtitle: "UI Designers",
          content: "UI designers specialize in the visual aspects of a product, designing interfaces that are appealing and easy to navigate. For Dubai and Abu Dhabi businesses, UI designers often work on premium brand experiences that reflect the region's high standards, from luxury e-commerce platforms to sophisticated fintech dashboards."
        },
        {
          subtitle: "Interaction Designers",
          content: "Interaction designers work on how users interact with digital products at a detailed level. They design interactive elements such as animations, transitions, and responses to user input, which are especially important for mobile-first markets like the UAE, where smartphone penetration exceeds 90%."
        },
        {
          subtitle: "Visual Designers",
          content: "Visual designers focus on the overall look and brand identity of digital products. In the UAE's competitive business landscape, they help companies stand out by creating designs that align with brand identity while respecting the aesthetic preferences and cultural sensitivities of the region."
        }
      ]
    },
    {
      title: "Key skills to look for in product designers",
      subsections: [
        {
          subtitle: "Technical Skills",
          content: "UX/UI Design: Product designers must create user-friendly and visually appealing interfaces, including RTL support for Arabic-speaking users. Wireframing and Prototyping: Must be proficient in tools like Figma, Adobe XD, or InVision. Basic Coding: Knowledge of HTML, CSS, and JavaScript helps with developer collaboration. User Research: Experience in interviews, surveys, and usability testing, ideally with exposure to MENA user behavior patterns."
        },
        {
          subtitle: "Soft Skills",
          content: "Communication: Ability to present ideas and collaborate with distributed teams across UAE business hours (GMT+4, Sunday-Thursday). Problem-Solving: Identifying issues and creating solutions that satisfy both users and business goals. Cultural Sensitivity: Understanding the nuances of designing for the UAE's multicultural population. Adaptability: Accepting feedback and adjusting designs in the fast-paced UAE startup environment. Time Management: Delivering work on time, especially when coordinating across the region's time zones."
        }
      ]
    },
    {
      title: "How much does it cost to hire product designers in the UAE?",
      subsections: [
        {
          subtitle: "Pricing Overview",
          content: "The cost of hiring a freelance product designer for UAE projects varies. Most freelance product designers charge between $25 and $200 per hour. For simpler tasks like wireframing or basic UI design, rates typically range from $25 to $80 per hour. More complex work such as full product design systems, bilingual (Arabic/English) interface design, or in-depth user research for the GCC market can push rates to $150 to $200 per hour."
        },
        {
          subtitle: "Factors Affecting Pricing",
          content: "Experience Level: Senior designers (5+ years) charge $100-200/hr, junior designers (1-3 years) $25-50/hr. Location: Hiring remote designers through HireDeveloper.ae can save UAE companies 40-60% compared to local agency rates in Dubai or Abu Dhabi, while accessing the same caliber of talent. Project Complexity: Bilingual designs, RTL support, and compliance with UAE accessibility standards add complexity and may require higher rates."
        }
      ]
    },
    {
      title: "Common mistakes to avoid when hiring product designers",
      subsections: [
        {
          subtitle: "Not clearly defining your project needs",
          content: "One of the biggest mistakes is starting the hiring process without clearly understanding your project goals. UAE companies should specify upfront whether the product needs Arabic localization, multi-currency support, or compliance with local regulations."
        },
        {
          subtitle: "Focusing too much on aesthetics",
          content: "While a designer's portfolio may look visually appealing, do not overlook functionality and user experience. In the UAE, where mobile usage is among the highest globally, a beautiful design that performs poorly on mobile devices will fail."
        },
        {
          subtitle: "Ignoring regional experience",
          content: "It is easy to be impressed by a designer's general skills, but experience with the UAE and GCC market is valuable. Designers who understand Arabic typography, local payment flows, and regional user expectations will deliver stronger results."
        },
        {
          subtitle: "Overlooking communication and timezone fit",
          content: "Product designers often work closely with developers, product managers, and stakeholders. For UAE teams working Sunday to Thursday on GMT+4, ensure your remote designer can maintain reliable overlap during your business hours for effective collaboration."
        }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Share Your Requirements",
      description: "Tell us about the role and project, the required skills, your hiring budget, and the preferred location for your freelance designers.",
      subtext: "We'll match you with the right designers",
      image: "step-1.png"
    },
    {
      number: "02",
      title: "Start Interviews",
      description: "We connect you with pre-vetted remote designers who perfectly match your requirements and are ready for interviews.",
      subtext: "Interview only the best candidates",
      image: "step-2.png"
    },
    {
      number: "03",
      title: "Make a Hire",
      description: "When you're ready, hire a remote freelance designer, sign an NDA, and we'll take care of the rest.",
      subtext: "We handle all the paperwork",
      image: "step-3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HireHero
        category="designers"
        count={2005}
        description="Your vision deserves a great product designer to bring it to life. Finding the right fit on your own is challenging, but HireDeveloper.ae makes hiring the best freelance or full-time remote product designers easy. Save time by connecting directly with vetted product designers who are ready for interviews."
        descriptionAr="رؤيتك تستحق مصمم منتجات متميز لتحقيقها. إيجاد المناسب بنفسك أمر صعب، لكن HireDeveloper.ae يسهّل توظيف أفضل مصممي المنتجات المستقلين أو بدوام كامل عن بعد. وفّر وقتك بالتواصل مباشرة مع مصممين معتمدين جاهزين للمقابلات."
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

      {/* Talent Showcase */}
      <TalentShowcase
        heading="2,005 remote product designers and experts available:"
        profiles={profiles}
        category="designers"
      />

      {/* Stats & Testimonials */}
      <StatsTestimonials
        stats={stats}
        testimonials={testimonials}
      />

      {/* Why Choose Arc - Reuse from home page */}
      <WhyChooseArc />

      {/* How It Works */}
      <HowItWorksSteps
        steps={steps}
        category="designers"
      />

      {/* Companies Testimonials */}
      <CompaniesTestimonials
        testimonials={companiesTestimonials}
      />

      {/* Dedicated Team Section */}
      <DedicatedTeamSection
        heading="Build your dedicated team of product designers"
        description="Collaborate seamlessly with your team using HireDeveloper.ae's project management tools, time tracking, and more."
        features={[
          { title: "Time Tracking", description: "Monitor work hours and productivity" },
          { title: "Project Management", description: "Keep your team organized and on track" },
          { title: "Secure Payments", description: "Simple and secure payment processing" }
        ]}
      />

      {/* Hiring Guide */}
      <HiringGuideSection
        heading="How to hire top product designers"
        sections={hiringGuideSections}
      />

      {/* FAQs */}
      <FAQSection
        category="product designers"
      />

      <ResourcesSection
        heading="Resources for hiring design experts"
        subheading="Learn more about how to hire remote designers and creative experts!"
        articles={[
          { title: "Finding Freelance Developers: 21+ Expert Tips & Strategies", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
          { title: "Is Your Developer Ready for Remote Work?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
          { title: "Interview Questions for Remote Developers", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
          { title: "How to Conduct a Remote Technical Interview", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
          { title: "Building & Maintaining a Remote Engineering Team", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
          { title: "Managing Remote Development Teams", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" },
        ]}
      />

      <section className="bg-gray-50 py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <LeadForm />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        heading="Your future product designer is just around the corner!"
        subheading="Start risk-free."
        ctaText="Hire Talent"
      />

      <Footer />
    </div>
  );
}
