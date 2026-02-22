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
  title: 'Top-Remote-Assistenten einstellen | Programmier-Anfang',
  description: 'Stellen Sie geprüfte virtuelle Assistenten, Executive Assistants und administrative Assistenten ein. Über 4.500 Remote-Experten bereit für Interviews. Jetzt risikofrei starten.',
};

export default function HireAssistantsPage() {
  const profiles = [
    {
      name: "Maria R.",
      location: "Philippinen (UTC+8)",
      badge: "Geprüfter Assistent",
      bio: "Hochorganisierte Executive Assistant mit 7+ Jahren Erfahrung in der Unterstützung von C-Level-Führungskräften. Expertin für Kalendermanagement, Reiseplanung, E-Mail-Management und Projektkoordination. Ausgezeichnete Kommunikationsfähigkeiten und Liebe zum Detail.",
      skills: ["Executive Support", "Kalendermanagement", "Reiseplanung", "E-Mail-Management", "Dateneingabe", "Recherche", "+6"],
      availability: "Vollzeit & Freelance",
      previousCompany: { name: "Top-Unternehmen", logo: "" },
      avatar: ""
    }
  ];

  const stats = [
    { prefix: "Bis zu", value: "75%", label: "schneller eingestellt" },
    { prefix: "Bis zu", value: "58%", label: "Kostenersparnis" },
    { value: "800+", label: "Einstellungen vorgenommen" }
  ];

  const testimonials = [
    {
      quote: "Unser virtueller Assistent von Programmier-Anfang war ein Wendepunkt für unsere Produktivität.",
      author: "Robert Johnson",
      title: "CEO",
      company: "StartupCo",
      avatar: ""
    },
    {
      quote: "Fand eine außergewöhnliche Executive Assistant, die alles fehlerfrei erledigt.",
      author: "Amanda Smith",
      title: "Gründerin",
      company: "GrowthVentures",
      avatar: ""
    },
    {
      quote: "Der Assistent, den wir eingestellt haben, ist professionell, effizient und unglaublich organisiert.",
      author: "Chris Lee",
      title: "COO",
      company: "BusinessInc",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Finden und stellen Sie Remote-Assistenten nach Spezialisierung ein",
      items: [
        { name: "Virtuelle Assistenten", icon: "va-plain.svg", url: "/hire-assistants/virtual-assistants" },
        { name: "Executive Assistants", icon: "ea-plain.svg", url: "/hire-assistants/executive-assistants" },
        { name: "Administrative Assistenten", icon: "admin-plain.svg", url: "/hire-assistants/administrative-assistants" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Beschreiben Sie den idealen Assistenten, den Sie suchen.",
      subtext: "Erzählen Sie uns von der Rolle, den Unterstützungsbedürfnissen und dem Budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Erhalten Sie geprüfte Assistenten-Profile, die zu Ihren Anforderungen passen.",
      subtext: "Wählen Sie den Assistenten aus, den Sie interviewen möchten.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Einstellen",
      description: "Wenn Sie bereit sind, stellen Sie den bevorzugten Assistenten ein.",
      subtext: "Unterschreiben Sie eine NDA, und wir kümmern uns um den Papierkram.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "Freelance-Experten finden: 21+ Expertentipps & Strategien", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
    { title: "Ist Ihr Kandidat bereit für Remote-Arbeit?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
    { title: "Interviewfragen für Remote-Experten", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
    { title: "Technisches Remote-Interview durchführen", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
    { title: "Remote-Team aufbauen & pflegen", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
    { title: "Remote-Teams managen", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero
        category="assistants"
        count={4532}
        description="Programmier-Anfang verfügt über 4.532 geprüfte Remote-Assistenten, die bereit für Interviews sind. Finden Sie virtuelle Assistenten, Executive Assistants, administrative Assistenten und mehr, um Ihre Geschäftsabläufe zu unterstützen."
      />
      <TalentShowcase heading="4.532 Remote-Assistenten verfügbar:" profiles={profiles} category="assistants" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top-Remote-Assistenten sind nur wenige Klicks entfernt" subheading="Programmier-Anfang bietet vorgeprüfte Assistenten, die bereit sind, Ihre Geschäftsanforderungen zu unterstützen." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="assistants" />
      <FAQSection category="assistants" />
      <ResourcesSection heading="Ressourcen für die Einstellung von Remote-Assistenten" subheading="Erfahren Sie mehr darüber, wie Sie Remote-Assistenten einstellen und die Produktivität maximieren!" articles={articles} />
      <FinalCTA
        heading="Ihr neuer Assistent ist nur einen Klick entfernt!"
        subheading="Risikofrei starten."
        ctaText="Talente einstellen"
      />
      <Footer />
    </div>
  );
}

