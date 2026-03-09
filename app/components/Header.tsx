'use client';

import { useState } from 'react';
import MegaMenu from './MegaMenu';
import { useLeadFormModal } from '../(companies)/components/LeadFormModalProvider';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useLeadFormModal();
  const { t } = useLanguage();

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-[1000] bg-black flex flex-col justify-center border-b border-gray-800">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-[60px] md:h-[70px] px-4 md:px-6 lg:px-12 relative max-w-[1440px] mx-auto w-full">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <a href="/" className="text-white text-xl md:text-3xl font-bold font-mono tracking-tighter whitespace-nowrap">
            🇸🇬 HireDeveloper.sg
          </a>

          {/* Primary Navigation - Dropdowns (desktop only) */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* For companies dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('companies')}
                className="flex items-center gap-1.5 text-white text-[15px] font-medium hover:opacity-80 transition-opacity"
              >
                {t('nav.forCompanies')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'companies' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800 border border-gray-100">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{t('nav.hire')}</div>
                  <a href="/hire-developers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.hireDevelopers')}</a>
                  <a href="/hire-designers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.hireDesigners')}</a>
                  <a href="/hire-marketers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.hireMarketers')}</a>
                  <a href="/hire-product-managers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.hireProductManagers')}</a>
                  <a href="/hire-project-managers" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.hireProjectManagers')}</a>
                  <a href="/hire-assistants" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.hireAssistants')}</a>

                  <div className="my-1 border-t border-gray-100"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{t('nav.learn')}</div>
                  <a href="/how-it-works" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.howItWorks')}</a>
                  <a href="/calculate-savings" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.calculateSavings')}</a>
                  <a href="/case-studies" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.caseStudies')}</a>
                  <a href="/pricing" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.pricing')}</a>
                  <div className="relative group/submenu">
                    <a href="/resources" className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">
                      {t('nav.resources')}
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
                {t('nav.forTalent')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'talent' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800 border border-gray-100">
                  <a href="/for-talent" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.overview')}</a>
                  <a href="/remote-jobs" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.remoteJobs')}</a>
                  <a href="/remote-companies" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">{t('nav.remoteCompanies')}</a>
                  <div className="relative group/submenu">
                    <a href="/resources" className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 hover:text-blue-600">
                      {t('nav.resources')}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right: CTA Buttons + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Log In button - desktop only */}
          <button
            onClick={openModal}
            className="hidden md:block text-white text-[15px] hover:text-gray-300 font-medium transition-colors"
          >
            {t('cta.logIn')}
          </button>

          {/* Find jobs button - desktop only */}
          <button
            onClick={openModal}
            className="hidden lg:block px-4 py-2 text-white text-[15px] font-medium border border-white rounded hover:bg-white/10 transition-colors"
          >
            {t('cta.findJobs')}
          </button>

          {/* Hire talent button - always visible */}
          <button
            onClick={openModal}
            className="px-4 py-2 md:px-5 text-sm md:text-[15px] font-bold text-black bg-white rounded hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
          >
            {t('cta.hireTalent')}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 max-h-[70vh] overflow-y-auto">
          <nav className="px-4 py-4 space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">{t('nav.hire')}</div>
            <a href="/hire-developers" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.hireDevelopers')}</a>
            <a href="/hire-designers" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.hireDesigners')}</a>
            <a href="/hire-marketers" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.hireMarketers')}</a>
            <a href="/hire-product-managers" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.hireProductManagers')}</a>
            <a href="/hire-project-managers" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.hireProjectManagers')}</a>
            <a href="/hire-assistants" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.hireAssistants')}</a>

            <div className="h-px bg-white/10 my-2"></div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">{t('nav.learn')}</div>
            <a href="/how-it-works" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.howItWorks')}</a>
            <a href="/pricing" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.pricing')}</a>
            <a href="/case-studies" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.caseStudies')}</a>
            <a href="/locations" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">Locations</a>

            <div className="h-px bg-white/10 my-2"></div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">{t('nav.forTalent')}</div>
            <a href="/for-talent" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.overview')}</a>
            <a href="/remote-jobs" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.remoteJobs')}</a>
            <a href="/remote-companies" className="block px-3 py-2.5 text-[15px] text-white hover:bg-white/5 rounded-lg">{t('nav.remoteCompanies')}</a>
          </nav>
        </div>
      )}

      {/* Secondary Navigation - horizontal scrollable on mobile */}
      <div className="h-[46px] border-t border-gray-800 flex items-center bg-black/95 backdrop-blur-sm overflow-hidden">
        <nav className="flex items-center gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 max-w-[1440px] w-full overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <MegaMenu />
        </nav>
      </div>

      {/* Mega menu panel renders here via portal */}
      <div id="mega-panel-root" />
    </header>
  );
}
