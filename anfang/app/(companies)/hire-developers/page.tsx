import { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import CompaniesTestimonials from '../components/CompaniesTestimonials';
import DedicatedTeamSection from '../components/DedicatedTeamSection';
import HiringGuideSection from '../components/HiringGuideSection';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCTA from '../components/FinalCTA';
import RelatedLinks from '../components/RelatedLinks';
import LeadForm from '../components/LeadForm';
import InlineCTABanner from '../components/InlineCTABanner';

export const metadata: Metadata = {
  title: 'Top-Remote-Entwickler einstellen | Programmier-Anfang',
  description: 'Stellen Sie die besten Remote-Entwickler, Ingenieure und Programmierer ein. Über 90.000 geprüfte Freelance- und Vollzeit-Experten, bereit für Interviews. Jetzt risikofrei starten.',
};

export default function HireDevelopersPage() {
  // Sample data - in production, this would come from an API or CMS
  const profiles = [
    {
      name: "Aksel .",
      location: "Vereinigte Staaten (UTC-4)",
      badge: "Geprüfter Entwickler",
      bio: "Mit über 15 Jahren umfassender Erfahrung in Staff Software Engineering und Architektur verfüge ich über eine nachweisliche Erfolgsbilanz bei der Entwicklung hochskalierbarer, rechenintensiver Workflows. Meine Schwerpunkte liegen in den Bereichen Fintech, E-Commerce/Einzelhandel sowie Datenverarbeitung und -management in privaten/öffentlichen Clouds.",
      skills: ["AWS", "Python", "Java", "Cloud", "Google Cloud Platform", "SQL", "NoSQL", "+17"],
      availability: "Vollzeit & Freelance",
      previousCompany: {
        name: "Top-Unternehmen",
        logo: ""
      },
      avatar: ""
    },
    {
      name: "Nathaniel H.",
      location: "Vereinigte Staaten (UTC-5)",
      badge: "Geprüfter Entwickler",
      bio: "KI- und Softwareingenieur mit über 14 Jahren Erfahrung, spezialisiert auf die Entwicklung skalierbarer, KI-gesteuerter Anwendungen. Versiert in Node.js, Python, MySQL/MSSQL, JavaScript-Frameworks, Linux, AWS und Azure Cloud. Kompetent in MVC/Microservice-Architektur, Docker CI/CD, agilen Methoden und testgetriebener Entwicklung.",
      skills: ["Python", "AWS", "SQL", "JavaScript", "Ruby on Rails", "Node.js", "ETL", "+10"],
      availability: "Vollzeit & Freelance",
      previousCompany: {
        name: "Top-Unternehmen",
        logo: ""
      },
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
      quote: "Wir haben zuvor versucht, über traditionelle Plattformen einzustellen, aber die Qualität der Entwickler bei Programmier-Anfang ist weitaus besser.",
      author: "M.G.",
      title: "CEO",
      company: "SaaS-Unternehmen",
      avatar: ""
    },
    {
      quote: "Ich habe ehemalige Gründer, Senior Engineers und sogar CMOs in weniger als 72 Stunden gefunden.",
      author: "C.B.",
      title: "Gründer & CEO",
      company: "Tech-Startup",
      avatar: ""
    },
    {
      quote: "Hochqualifizierter und vielfältiger Talentpool zu erschwinglichen Kosten!",
      author: "K.H.",
      title: "Lead Recruiter",
      company: "E-Commerce-Firma",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Finden und stellen Sie Remote-Entwickler nach Rollen ein",
      items: [
        { name: "KI-Entwickler", icon: "ai-plain.svg", url: "/hire-developers/ai" },
        { name: "Data Scientists", icon: "data-science-plain.svg", url: "/hire-developers/data-science" },
        { name: "Machine Learning Experten", icon: "machine-learning-plain.svg", url: "/hire-developers/machine-learning" },
        { name: "Softwareentwickler", icon: "software-plain.svg", url: "/hire-developers/software-development" },
        { name: "Frontend-Entwickler", icon: "frontend-plain.svg", url: "/hire-developers/front-end" },
        { name: "Backend-Entwickler", icon: "backend-plain.svg", url: "/hire-developers/back-end" },
        { name: "Full-Stack-Entwickler", icon: "full-stack-plain.svg", url: "/hire-developers/full-stack" },
        { name: "DevOps-Ingenieure", icon: "devops-plain.svg", url: "/hire-developers/devops" },
        { name: "Mobile-App-Entwickler", icon: "mobile-development-plain.svg", url: "/hire-developers/mobile-app-development" },
        { name: "Web-Entwickler", icon: "web-plain.svg", url: "/hire-developers/web-development" }
      ]
    },
    {
      id: "skills",
      title: "Finden und stellen Sie Remote-Ingenieure nach Fähigkeiten ein",
      items: [
        { name: "JavaScript-Entwickler", icon: "javascript-plain.svg", url: "/hire-developers/javascript" },
        { name: "TypeScript-Entwickler", icon: "typescript-plain.svg", url: "/hire-developers/typescript" },
        { name: "React-Entwickler", icon: "reactjs-plain.svg", url: "/hire-developers/reactjs" },
        { name: "Node.js-Entwickler", icon: "nodejs-plain.svg", url: "/hire-developers/nodejs" },
        { name: "Python-Entwickler", icon: "python-plain.svg", url: "/hire-developers/python" },
        { name: "Java-Entwickler", icon: "java-plain.svg", url: "/hire-developers/java" },
        { name: "PHP-Entwickler", icon: "php-plain.svg", url: "/hire-developers/php" },
        { name: "Ruby-Entwickler", icon: "ruby-plain.svg", url: "/hire-developers/ruby" },
        { name: "AWS-Entwickler", icon: "aws-plain.svg", url: "/hire-developers/aws" },
        { name: "MongoDB-Entwickler", icon: "mongodb-plain.svg", url: "/hire-developers/mongodb" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Beschreiben Sie den idealen Vollzeit- & Freelance-Entwickler, den Sie suchen.",
      subtext: "Erzählen Sie uns von der Rolle, den technischen Anforderungen und dem Budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Erhalten Sie geprüfte Kandidatenprofile, die zu Ihren technischen Anforderungen passen.",
      subtext: "Wählen Sie den Vollzeit- & Freelance-Ingenieur aus, den Sie interviewen möchten.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Einstellen",
      description: "Wenn Sie bereit sind, stellen Sie den bevorzugten Vollzeit- & Freelance-Entwickler ein.",
      subtext: "Unterschreiben Sie eine NDA mit Ihrem neuen Ingenieur, und wir kümmern uns um den Papierkram.",
      image: "hire.png"
    }
  ];

  const articles = [
    {
      title: "Freelance-Entwickler finden: 21+ Expertentipps & Strategien",
      image: "/images/blog/people-search.svg",
      url: "/employer-blog/how-to-find-developers"
    },
    {
      title: "Ist Ihr Entwickler bereit für Remote-Arbeit?",
      image: "/images/blog/remote-team.svg",
      url: "/employer-blog/remote-ready-interview-questions"
    },
    {
      title: "Interviewfragen für Remote-Entwickler für potenzielle Freelancer",
      image: "/images/blog/online-test.svg",
      url: "/employer-blog/software-engineer-interview-questions"
    },
    {
      title: "Wie man ein technisches Remote-Interview erfolgreich durchführt",
      image: "/images/blog/code-review.svg",
      url: "/employer-blog/how-to-conduct-a-remote-technical-interview"
    },
    {
      title: "Wie man ein Remote-Engineering-Team aufbaut & pflegt",
      image: "/images/blog/team-collaboration.svg",
      url: "/employer-blog/distributed-software-engineering-team"
    },
    {
      title: "Wie man Remote-Entwicklungsteams managt",
      image: "/images/blog/project-completed.svg",
      url: "/employer-blog/how-to-manage-developers-remote-team"
    }
  ];

  const companiesTestimonials = [
    {
      quote: "Wir haben zuvor versucht, über traditionelle Plattformen einzustellen, aber die Qualität der Entwickler bei Programmier-Anfang ist weitaus besser.",
      author: "M.G.",
      title: "CEO",
      company: "SaaS-Unternehmen",
      avatar: ""
    },
    {
      quote: "Ich habe ehemalige Gründer, Senior Engineers und sogar CMOs in weniger als 72 Stunden gefunden.",
      author: "C.B.",
      title: "Gründer & CEO",
      company: "Tech-Startup",
      avatar: ""
    },
  ];

  const dedicatedTeamFeatures = [
    {
      title: "Vorgeprüfte Entwickler",
      description: "Jeder Entwickler wird auf technische Fähigkeiten und Kommunikation getestet."
    },
    {
      title: "Schnelles Matching",
      description: "Werden Sie in 72 Stunden oder weniger mit qualifizierten Entwicklern gematcht."
    },
    {
      title: "Qualitätsgarantie",
      description: "Risikofreie Probezeit. Zahlen Sie nur, wenn Sie zu 100% zufrieden sind."
    }
  ];


  const guideSections = [
    {
      title: "Warum sollten Sie einen Freelance-Entwickler einstellen?",
      subsections: [
        {
          subtitle: "Erschwinglichkeit",
          content: "Die Einstellung von Freelance-Entwicklern kann kostengünstiger sein als Vollzeitmitarbeiter, da Sie nur für die geleistete Arbeit bezahlen, ohne zusätzliche Gemeinkosten wie Sozialleistungen, Büroraum und Ausrüstung."
        },
        {
          subtitle: "Globaler Markt & Zugang zu Talenten",
          content: "Der Freelance-Markt bietet Ihnen Zugang zu einem globalen Pool talentierter Entwickler mit vielfältigen Fähigkeiten und Erfahrungen."
        },
        {
          subtitle: "Spezialisierung",
          content: "Freelancer spezialisieren sich oft auf bestimmte Technologien oder Domänen, sodass Sie Experten für Ihre speziellen Bedürfnisse finden können."
        },
        {
          subtitle: "Flexibilität",
          content: "Skalieren Sie Ihr Team je nach Projektanforderungen nach oben oder unten, ohne langfristige Verpflichtungen."
        }
      ]
    },
    {
      title: "Wann sollten Sie einen Freelance-Entwickler einstellen?",
      subsections: [
        {
          subtitle: "Wenn Sie wenig Zeit haben",
          content: "Freelancer können sofort mit der Arbeit an Ihrem Projekt beginnen und Ihnen helfen, enge Fristen einzuhalten."
        },
        {
          subtitle: "Wenn Ihnen bestimmte Fähigkeiten fehlen",
          content: "Wenn Ihrem Team spezifisches technisches Fachwissen fehlt, können Freelancer diese Lücken schnell schließen."
        },
        {
          subtitle: "Wenn Sie ein knappes Budget haben",
          content: "Freelance-Entwickler können qualitativ hochwertige Arbeit zu wettbewerbsfähigen Preisen liefern, ohne die Gemeinkosten von Vollzeitmitarbeitern."
        }
      ]
    },
    {
      title: "Wie man einen Top-Freelance-Entwickler findet",
      subsections: [
        {
          subtitle: "Denken Sie über Ihre Stellenbeschreibung für Softwareentwickler nach",
          content: "Definieren Sie die Fähigkeiten, das Erfahrungsniveau und die Projektanforderungen klar, bevor Sie mit der Suche beginnen.",
          questions: [
            "Worum geht es in Ihrem Projekt? Was sind einige der erforderlichen Fähigkeiten?",
            "Haben Sie eine geografische Präferenz?",
            "Wie hoch ist Ihr Budgetrahmen?",
            "Benötigen Sie jemanden für ein kurz- oder langfristiges Projekt?"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HireHero
        category="developers"
        count={90921}
        description="Programmier-Anfang verfügt über 90.921 Vollzeit- und Freelance-Entwickler, Ingenieure, Programmierer, Coder, Auftragnehmer und Technikexperten, die bereit für Interviews sind und sofort eingestellt werden können. Unser globales Entwicklernetzwerk kann bei der Personalverstärkung oder Skalierung Ihres Engineering-Teams helfen. Sagen Sie uns einfach, was Sie brauchen, und wir helfen Ihnen, die Entwickler zu finden, die am besten passen."
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

      <TalentShowcase
        heading="90.921 Remote-Entwickler und Experten verfügbar:"
        profiles={profiles}
        category="developers"
      />

      <StatsTestimonials
        stats={stats}
        testimonials={testimonials}
      />

      <InlineCTABanner
        headline="Bereit, Ihr Team zu verstarken?"
        subtext="Erhalten Sie innerhalb von 72 Stunden gepruefte Kandidatenprofile -- kostenlos und unverbindlich."
      />

      <CategoriesGrid
        heading="Top-Remote-Entwickler sind nur wenige Klicks entfernt"
        subheading="Programmier-Anfang bietet vorgeprüfte Vollzeit- und Freelance-Entwickler, die in jeder Programmiersprache, jedem Framework und jeder Technologie versiert sind. Durchsuchen Sie unsere beliebten Remote-Ingenieur-Spezialisierungen unten."
        sections={categorySections}
      />

      <HowItWorksSteps
        steps={steps}
        category="developers"
      />

      <InlineCTABanner
        headline="Top-Entwickler warten auf Sie"
        subtext="Sparen Sie bis zu 58% der Personalkosten mit geprueften Remote-Talenten."
      />

      <CompaniesTestimonials testimonials={companiesTestimonials} />

      <DedicatedTeamSection
        heading="Bauen Sie Ihr dediziertes Team von Remote-Entwicklern auf"
        description="Programmier-Anfang hilft Ihnen, Ihr Team mit unserem globalen Netzwerk von Softwareentwicklern aufzubauen, verfügbar für Freelance-Verträge oder Vollzeit-Remote-Positionen."
        features={dedicatedTeamFeatures}
      />

      <WhyChooseArc />

      <HiringGuideSection
        heading="Wie man Top-Freelance-Entwickler einstellt"
        sections={guideSections}
      />

      <FAQSection category="developers" />

      <ResourcesSection
        heading="Ressourcen für die Einstellung von Engineering-Experten"
        subheading="Erfahren Sie mehr darüber, wie Sie Remote-Entwickler einstellen, wichtige Interviewfragen für Freelance-Entwickler und vieles mehr!"
        articles={articles}
      />

      <RelatedLinks
        title="Beliebte Spezialisierungen"
        links={[
          { label: 'JavaScript-Entwickler', href: '/hire-developers/javascript' },
          { label: 'Python-Entwickler', href: '/hire-developers/python' },
          { label: 'React-Entwickler', href: '/hire-developers/reactjs' },
          { label: 'Node.js-Entwickler', href: '/hire-developers/nodejs' },
          { label: 'KI-Entwickler', href: '/hire-developers/ai' },
          { label: 'Full-Stack-Entwickler', href: '/hire-developers/full-stack' },
          { label: 'DevOps-Ingenieure', href: '/hire-developers/devops' },
          { label: 'Mobile-App-Entwickler', href: '/hire-developers/mobile-app-development' },
          { label: 'TypeScript-Entwickler', href: '/hire-developers/typescript' },
          { label: 'Java-Entwickler', href: '/hire-developers/java' },
          { label: 'PHP-Entwickler', href: '/hire-developers/php' },
          { label: 'AWS-Entwickler', href: '/hire-developers/aws' },
        ]}
      />

      <RelatedLinks
        title="Entwickler nach Standort"
        links={[
          { label: 'Entwickler in Deutschland', href: '/standorte/deutschland' },
          { label: 'Entwickler in Österreich', href: '/standorte/oesterreich' },
          { label: 'Entwickler in der Schweiz', href: '/standorte/schweiz' },
          { label: 'Entwickler in Berlin', href: '/standorte/deutschland/berlin/berlin' },
          { label: 'Entwickler in München', href: '/standorte/deutschland/bayern/muenchen' },
          { label: 'Entwickler in Wien', href: '/standorte/oesterreich/wien/wien' },
          { label: 'Entwickler in Zürich', href: '/standorte/schweiz/zuerich/zuerich' },
          { label: 'Entwickler in Hamburg', href: '/standorte/deutschland/hamburg/hamburg' },
        ]}
      />

      <RelatedLinks
        title="Anbietervergleich"
        links={[
          { label: 'vs Toptal', href: '/vergleich/toptal' },
          { label: 'vs Upwork', href: '/vergleich/upwork' },
          { label: 'vs Fiverr', href: '/vergleich/fiverr' },
          { label: 'vs Turing', href: '/vergleich/turing' },
          { label: 'vs Andela', href: '/vergleich/andela' },
          { label: 'vs Arc.dev', href: '/vergleich/arc-dev' },
          { label: 'vs Hired', href: '/vergleich/hired' },
          { label: 'Alle Vergleiche', href: '/vergleich' },
        ]}
      />

      <section className="bg-gray-50 py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <LeadForm />
        </div>
      </section>

      <FinalCTA
        heading="Ihr zukünftiger Remote-Entwickler ist gleich um die Ecke!"
        subheading="Risikofrei starten."
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}

