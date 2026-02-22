import { Metadata } from 'next';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import WhyChooseArc from './components/WhyChooseArc';
import BestFitSection from './components/BestFitSection';
import WhyArcIsDifferent from './components/WhyArcIsDifferent';
import HowToUseArc from './components/HowToUseArc';
import ForTalentSection from './components/ForTalentSection';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Remote-Talente einstellen | Programmier-Anfang",
  description: "Stellen Sie die Top 2% der geprüften Remote-Entwickler, Designer, Marketer und Projektmanager ein. Vorgeprüfte Freelance- und Vollzeittalente bereit für Interviews. Risikofrei starten.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <TrustBadges />
      <WhyChooseArc />
      <BestFitSection />
      <WhyArcIsDifferent />
      <HowToUseArc />
      <ForTalentSection />
      <FooterCTA />
      <Footer />
    </div>
  );
}
