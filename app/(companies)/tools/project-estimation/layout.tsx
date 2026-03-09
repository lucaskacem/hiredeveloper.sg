import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Estimation | Free Tools | HireDeveloper.sg',
  description: 'Estimate time and cost for your software project based on type, complexity, and desired features.',
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
