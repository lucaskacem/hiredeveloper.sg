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
  title: 'Top-Remote-Projektmanager einstellen | Programmier-Anfang',
  description: 'Stellen Sie erfahrene Remote-Projektmanager, Scrum Master und Programm-Manager ein. Über 6.700 geprüfte Experten mit nachweislicher Erfolgsbilanz. Jetzt risikofrei starten.',
};

export default function HireProjectManagersPage() {
  const profiles = [
    {
      name: "David K.",
      location: "Australien (UTC+10)",
      badge: "Geprüfter Projektmanager",
      bio: "Zertifizierter PMP mit 12+ Jahren Erfahrung im Management komplexer technischer Projekte. Experte für agile und Wasserfall-Methoden, Risikomanagement und Stakeholder-Kommunikation. 50+ Projekte zeit- und budgetgerecht geliefert.",
      skills: ["PMP", "Agile", "Scrum", "Jira", "Risikomanagement", "Stakeholder-Management", "Wasserfall", "+9"],
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
      quote: "Unser Programmier-Anfang Projektmanager hielt unser komplexes Projekt auf Kurs und lieferte pünktlich.",
      author: "Susan Miller",
      title: "Director of Operations",
      company: "EnterpriseInc",
      avatar: ""
    },
    {
      quote: "Wir fanden einen zertifizierten PMP, der unsere Projektanforderungen sofort verstand.",
      author: "John Davis",
      title: "VP of Engineering",
      company: "TechCorp",
      avatar: ""
    },
    {
      quote: "Der Scrum Master, den wir eingestellt haben, transformierte unsere agilen Prozesse.",
      author: "Maria Garcia",
      title: "CTO",
      company: "AgileTeam",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Finden und stellen Sie Remote-Projektmanager nach Spezialisierung ein",
      items: [
        { name: "Projektmanager", icon: "pm-plain.svg", url: "/hire-project-managers" },
        { name: "Scrum Masters", icon: "scrum-plain.svg", url: "/hire-project-managers/scrum-masters" },
        { name: "Programm-Manager", icon: "program-plain.svg", url: "/hire-project-managers/program-managers" },
        { name: "Agile Coaches", icon: "agile-plain.svg", url: "/hire-project-managers/agile-coaches" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Beschreiben Sie den idealen Projektmanager, den Sie suchen.",
      subtext: "Erzählen Sie uns von der Rolle, den Projektanforderungen und dem Budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Erhalten Sie geprüfte Projektmanager-Profile, die zu Ihren Anforderungen passen.",
      subtext: "Wählen Sie den Projektmanager aus, den Sie interviewen möchten.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Einstellen",
      description: "Wenn Sie bereit sind, stellen Sie den bevorzugten Projektmanager ein.",
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
        category="project-managers"
        count={6789}
        description="Programmier-Anfang verfügt über 6.789 geprüfte Remote-Projektmanager, die bereit für Interviews sind. Finden Sie erfahrene Projektmanager, Scrum Master, Programm-Manager und mehr, um Ihre Projekte zum Erfolg zu führen."
      />
      <TalentShowcase heading="6.789 Remote-Projektmanager verfügbar:" profiles={profiles} category="project managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top-Remote-Projektmanager sind nur wenige Klicks entfernt" subheading="Programmier-Anfang bietet vorgeprüfte Projektmanager mit nachweislicher Erfolgsbilanz." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="project managers" />
      <FAQSection category="project managers" />
      <ResourcesSection heading="Ressourcen für die Einstellung von Projektmanagement-Experten" subheading="Erfahren Sie mehr darüber, wie Sie Remote-Projektmanager einstellen und Projekte erfolgreich liefern!" articles={articles} />
      <FinalCTA
        heading="Ihr zukünftiger Projektmanager ist gleich um die Ecke!"
        subheading="Risikofrei starten."
        ctaText="Talente einstellen"
      />
      <Footer />
    </div>
  );
}

