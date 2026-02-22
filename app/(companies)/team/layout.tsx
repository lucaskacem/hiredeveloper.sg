import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Expert Team | HireDeveloper.ae',
  description:
    'Meet our 25 verified marketing specialists covering A/B testing, analytics, SEO, content strategy, paid ads, email marketing, CRO, and more. Based in Dubai, Abu Dhabi, and Sharjah.',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
