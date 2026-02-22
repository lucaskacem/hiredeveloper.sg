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
  title: 'Top-Remote-Produktmanager einstellen | Programmier-Anfang',
  description: 'Stellen Sie erfahrene Remote-Produktmanager, Product Owner und technische PMs ein. Über 5.600 geprüfte Experten, bereit für Interviews. Jetzt risikofrei starten.',
};

export default function HireProductManagersPage() {
  const profiles = [
    {
      name: "Jennifer L.",
      location: "Kanada (UTC-4)",
      badge: "Geprüfter Produktmanager",
      bio: "Strategische Produktmanagerin mit 8+ Jahren Erfahrung in der Leitung funktionsübergreifender Teams. Expertin für Produktstrategie, Roadmap-Planung und agile Methoden. Erfolgreiche Einführung von 15+ Produkten von 0 auf 1.",
      skills: ["Produktstrategie", "Agile", "Scrum", "Datenanalyse", "Nutzerforschung", "Roadmapping", "Jira", "+10"],
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
      quote: "Unser Programmier-Anfang Produktmanager hat unsere Produktstrategie und -umsetzung transformiert.",
      author: "David Park",
      title: "CEO",
      company: "ProductCo",
      avatar: ""
    },
    {
      quote: "Wir haben einen unglaublichen technischen PM gefunden, der die Lücke zwischen Technik und Geschäft schließt.",
      author: "Rachel Green",
      title: "CTO",
      company: "TechVenture",
      avatar: ""
    },
    {
      quote: "Der PM, den wir eingestellt haben, half uns, unsere Roadmap zu priorisieren und schneller zu liefern.",
      author: "Mark Wilson",
      title: "VP of Engineering",
      company: "FastShip",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Finden und stellen Sie Remote-Produktmanager nach Spezialisierung ein",
      items: [
        { name: "Produktmanager", icon: "pm-plain.svg", url: "/hire-product-managers" },
        { name: "Technische Produktmanager", icon: "technical-pm-plain.svg", url: "/hire-product-managers/technical" },
        { name: "Product Owners", icon: "po-plain.svg", url: "/hire-product-managers/product-owners" },
        { name: "KI-Produktmanager", icon: "ai-pm-plain.svg", url: "/hire-product-managers/ai" },
        { name: "Daten-Produktmanager", icon: "data-pm-plain.svg", url: "/hire-product-managers/data" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Beschreiben Sie den idealen Produktmanager, den Sie suchen.",
      subtext: "Erzählen Sie uns von der Rolle, den Produktanforderungen und dem Budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Erhalten Sie geprüfte Produktmanager-Profile, die zu Ihren Anforderungen passen.",
      subtext: "Wählen Sie den Produktmanager aus, den Sie interviewen möchten.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Einstellen",
      description: "Wenn Sie bereit sind, stellen Sie den bevorzugten Produktmanager ein.",
      subtext: "Unterschreiben Sie eine NDA, und wir kümmern uns um den Papierkram.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "Freelance-Experten finden: 21+ Expertentipps & Strategien", image: "/images/blog/people-search.svg", url: "/employer-blog/how-to-find-developers" },
    { title: "Ist Ihr Kandidat bereit für Remote-Arbeit?", image: "/images/blog/remote-team.svg", url: "/employer-blog/remote-ready-interview-questions" },
    { title: "Interviewfragen für Remote-Experten", image: "/images/blog/online-test.svg", url: "/employer-blog/software-engineer-interview-questions" },
    { title: "Technisches Remote-Interview durchführen", image: "/images/blog/code-review.svg", url: "/employer-blog/how-to-conduct-a-remote-technical-interview" },
    { title: "Remote-Engineering-Team aufbauen & pflegen", image: "/images/blog/team-collaboration.svg", url: "/employer-blog/distributed-software-engineering-team" },
    { title: "Remote-Teams managen", image: "/images/blog/project-completed.svg", url: "/employer-blog/how-to-manage-developers-remote-team" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero
        category="product-managers"
        count={5678}
        description="Programmier-Anfang verfügt über 5.678 geprüfte Remote-Produktmanager, die bereit für Interviews sind. Finden Sie erfahrene Produktmanager, Product Owner, technische PMs und mehr, um Ihre Produktstrategie voranzutreiben."
      />
      <TalentShowcase heading="5.678 Remote-Produktmanager verfügbar:" profiles={profiles} category="product managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top-Remote-Produktmanager sind nur wenige Klicks entfernt" subheading="Programmier-Anfang bietet vorgeprüfte Produktmanager mit tiefer Erfahrung in verschiedenen Branchen." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="product managers" />
      <FAQSection category="product managers" />
      <ResourcesSection heading="Ressourcen für die Einstellung von Produktmanagement-Experten" subheading="Erfahren Sie mehr darüber, wie Sie Remote-Produktmanager einstellen und außergewöhnliche Produktteams aufbauen!" articles={articles} />
      <FinalCTA
        heading="Ihr zukünftiger Produktmanager ist gleich um die Ecke!"
        subheading="Risikofrei starten."
        ctaText="Talente einstellen"
      />
      <Footer />
    </div>
  );
}

