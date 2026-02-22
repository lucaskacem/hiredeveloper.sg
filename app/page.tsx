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
import SchemaMarkup, { organizationSchema, webSiteSchema } from './components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Hire Top Remote Talent in Dubai & Abu Dhabi | HireDeveloper.ae",
  description: "Hire the top 2% of vetted remote developers, designers, marketers, and project managers in Dubai & Abu Dhabi. Pre-screened freelance and full-time talent ready for interviews. Start risk-free.",
  alternates: {
    canonical: 'https://hiredeveloper.ae',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SchemaMarkup schemas={[organizationSchema(), webSiteSchema()]} />
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
