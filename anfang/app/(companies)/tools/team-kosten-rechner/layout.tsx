import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team-Kosten-Rechner | Kostenlose Tools | Programmier-Anfang',
  description: 'Kalkulieren Sie die monatlichen Kosten für Ihr Entwicklungsteam und entdecken Sie Einsparpotenziale mit Programmier-Anfang.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
