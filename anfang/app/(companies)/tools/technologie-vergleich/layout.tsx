import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technologie-Vergleich | Kostenlose Tools | Programmier-Anfang',
  description: 'Vergleichen Sie Technologien Seite an Seite: Popularität, Gehälter, Anwendungsfälle, Lernkurve und Arbeitsmarkt.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
