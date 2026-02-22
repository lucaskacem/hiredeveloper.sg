import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skill-Assessment Quiz | Kostenlose Tools | Programmier-Anfang',
  description: 'Testen Sie Ihr Wissen zu verschiedenen Technologien mit einem interaktiven Quiz und erhalten Sie eine Bewertung.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
