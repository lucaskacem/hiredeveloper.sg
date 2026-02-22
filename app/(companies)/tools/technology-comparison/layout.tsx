import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Comparison | Free Tools | HireDeveloper.ae',
  description: 'Compare technologies side by side: popularity, salaries, use cases, learning curve, and job market.',
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
