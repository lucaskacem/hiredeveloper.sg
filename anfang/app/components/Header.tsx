'use client';

import { useState } from 'react';
import MegaMenu from './MegaMenu';
import { useLeadFormModal } from '../(companies)/components/LeadFormModalProvider';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { openModal } = useLeadFormModal();

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-[1000] bg-black flex flex-col justify-center border-b border-gray-800">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-[70px] px-6 lg:px-12 relative max-w-[1440px] mx-auto w-full">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="text-white text-3xl font-bold font-mono tracking-tighter">
            programmier-anfang()
          </a>

          {/* Primary Navigation - Dropdowns */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* For companies dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('companies')}
                className="flex items-center gap-1.5 text-white text-[15px] font-medium hover:opacity-80 transition-opacity"
              >
                Für Unternehmen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'companies' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800 border border-gray-100">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Einstellen</div>
                  <a href="/hire-developers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Entwickler einstellen</a>
                  <a href="/hire-designers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Designer einstellen</a>
                  <a href="/hire-marketers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Marketer einstellen</a>
                  <a href="/hire-product-managers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Produktmanager einstellen</a>
                  <a href="/hire-project-managers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Projektmanager einstellen</a>
                  <a href="/hire-assistants" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Assistenten einstellen</a>

                  <div className="my-1 border-t border-gray-100"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Lernen</div>
                  <a href="/so-funktionierts" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">So funktioniert's</a>
                  <a href="/ersparnis-berechnen" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Ersparnis berechnen</a>
                  <a href="/fallstudien" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Fallstudien</a>
                  <a href="/preise" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Preise</a>
                  <div className="relative group/submenu">
                    <a href="/ressourcen" className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">
                      Ressourcen
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* For talent dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('talent')}
                className="flex items-center gap-1.5 text-white text-[15px] font-medium hover:opacity-80 transition-opacity"
              >
                Für Talente
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              {openDropdown === 'talent' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800 border border-gray-100">
                  <a href="/fuer-talente" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Übersicht</a>
                  <a href="/remote-jobs" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Remote-Jobs</a>
                  <a href="/remote-unternehmen" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">Remote-Unternehmen</a>
                  <div className="relative group/submenu">
                    <a href="/talent-ressourcen" className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">
                      Ressourcen
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-4">
          {/* Log In button */}
          <button
            onClick={openModal}
            className="hidden sm:block text-white text-[15px] hover:text-gray-300 font-medium transition-colors"
          >
            Einloggen
          </button>

          {/* Find jobs button - outline */}
          <button
            onClick={openModal}
            className="hidden sm:block px-4 py-2 text-white text-[15px] font-medium border border-white rounded hover:bg-white/10 transition-colors"
          >
            Jobs finden
          </button>

          {/* Hire talent button - filled */}
          <button
            onClick={openModal}
            className="px-5 py-2 text-[15px] font-bold text-black bg-white rounded hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
          >
            Talente einstellen
          </button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="h-[46px] border-t border-gray-800 flex items-center justify-center bg-black/95 backdrop-blur-sm">
        <nav className="flex items-center gap-6 lg:gap-8 px-6 max-w-[1440px] w-full">
          <MegaMenu />
        </nav>
      </div>

      {/* Mega menu panel renders here via portal - directly in header flow, no gap */}
      <div id="mega-panel-root" />
    </header>
  );
}

