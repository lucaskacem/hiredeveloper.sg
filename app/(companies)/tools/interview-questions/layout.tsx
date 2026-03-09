import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interview Questions Generator | Free Tools | HireDeveloper.sg',
  description: 'Generate technical interview questions for developers by technology and difficulty level. Free and ready to use.',
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
