import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Salary Calculator | Free Tools | HireDeveloper.sg',
  description: 'Calculate salaries and hourly rates for developers by technology, experience, and location in Singapore and Singapore. Free and no registration required.',
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
