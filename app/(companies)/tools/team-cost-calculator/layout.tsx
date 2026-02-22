import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team Cost Calculator | Free Tools | HireDeveloper.ae',
  description: 'Estimate the cost of building your remote development team in Dubai & Abu Dhabi. Compare rates across roles, experience levels, and engagement types.',
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
