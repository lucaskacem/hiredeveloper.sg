import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entwickler-Gehaltsrechner | Kostenlose Tools | Programmier-Anfang',
  description: 'Berechnen Sie Gehälter und Stundensätze für Entwickler nach Technologie, Erfahrung und Standort. Kostenlos und ohne Anmeldung.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
