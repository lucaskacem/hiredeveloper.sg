import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skill Assessment Quiz | Free Tools | HireDeveloper.ae',
  description: 'Test your knowledge of various technologies with an interactive quiz and get an instant assessment.',
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
