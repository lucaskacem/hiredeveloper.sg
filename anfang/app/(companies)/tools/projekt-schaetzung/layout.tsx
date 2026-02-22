import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projekt-Schätzung | Kostenlose Tools | Programmier-Anfang',
  description: 'Schätzen Sie Zeit und Kosten für Ihr Softwareprojekt basierend auf Typ, Komplexität und gewünschten Features.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
