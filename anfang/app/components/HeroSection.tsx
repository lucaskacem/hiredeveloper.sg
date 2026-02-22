'use client';

import { useLeadFormModal } from '../(companies)/components/LeadFormModalProvider';

export default function HeroSection() {
  const { openModal } = useLeadFormModal();

  return (
    <section className="bg-black py-12 lg:py-0 lg:h-[500px] flex items-center">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full">
        {/* Grid Layout: 45% / 55% */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div>
            {/* Heading */}
            <h1 className="text-[32px] lg:text-[40px] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Stellen Sie die weltweit</span>
              <br />
              <span className="text-[rgb(0,159,255)]">besten Remote-Talente</span>
              <br />
              <span className="text-white">ein ohne lange Suche</span>
            </h1>

            {/* Subheading */}
            <p className="text-base lg:text-lg text-white/85 leading-relaxed max-w-[520px] mb-8">
              Freelance oder Vollzeit-Entwickler, Designer, Marketer, Produktmanager,
              Projektmanager, Assistenten und mehr. Geprüft & bereit für Interviews.
            </p>

            {/* CTA Button */}
            <button
              onClick={openModal}
              className="flex items-center justify-center w-full max-w-[400px] h-14 text-lg font-semibold text-white bg-[#0050ff] rounded-lg hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Talente einstellen
            </button>

            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mt-4 max-w-[400px]">
              <span className="text-sm font-medium text-white">$0 bis zur Einstellung</span>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="hidden lg:block relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.05)] border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero.webm" type="video/webm" />
            </video>

            {/* Overlay to ensure text readability if needed, or visual style matching */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
