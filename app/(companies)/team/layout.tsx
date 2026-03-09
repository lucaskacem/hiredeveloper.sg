import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Expert Team | HireDeveloper.sg',
  description:
    'Meet our 25 verified marketing specialists covering A/B testing, analytics, SEO, content strategy, paid ads, email marketing, CRO, and more. Based in Singapore, and Jurong East.',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
