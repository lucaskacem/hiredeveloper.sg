'use client';

import { createContext, useContext, useCallback, type ReactNode } from 'react';
import { translations, type Language } from './translations';

interface LanguageContextValue {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language: Language = 'en';

  const setLanguage = useCallback((_lang: Language) => {
    // English-only — no-op
  }, []);

  const toggleLanguage = useCallback(() => {
    // English-only — no-op
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
