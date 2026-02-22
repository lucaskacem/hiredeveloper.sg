'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { translations, supportedLanguages, type Language } from './translations';

interface LanguageContextValue {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const validLanguages = supportedLanguages.map((l) => l.code);

function isValidLanguage(lang: string | null): lang is Language {
  return lang !== null && validLanguages.includes(lang as Language);
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (isValidLanguage(saved)) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const langConfig = supportedLanguages.find((l) => l.code === language);
    html.setAttribute('dir', langConfig?.dir ?? 'ltr');
    html.setAttribute('lang', language);
    localStorage.setItem('lang', language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  // Keep toggleLanguage for backwards compatibility (cycles through all languages)
  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const currentIndex = validLanguages.indexOf(prev);
      const nextIndex = (currentIndex + 1) % validLanguages.length;
      return validLanguages[nextIndex];
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] ?? key;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
