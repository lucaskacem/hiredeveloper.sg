import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interview-Fragen-Generator | Kostenlose Tools | Programmier-Anfang',
  description: 'Generieren Sie technische Interviewfragen für Entwickler nach Technologie und Schwierigkeitsgrad. Kostenlos und sofort nutzbar.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
