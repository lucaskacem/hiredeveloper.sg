import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import LeadFormModalProvider from "./(companies)/components/LeadFormModalProvider";
import StickyLeadWidget from "./(companies)/components/StickyLeadWidget";
import ExitIntentTrigger from "./(companies)/components/ExitIntentTrigger";
import ScrollProgressCTA from "./(companies)/components/ScrollProgressCTA";
import { LanguageProvider } from "./i18n/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hire Top Talent in Singapore | HireDeveloper.sg",
    template: "%s",
  },
  description: "Hire the top 2% of vetted developers, designers, and marketers in Singapore. Pre-screened talent ready for interviews in 48h. $0 until you hire.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    languages: {
      'en': 'https://hiredeveloper.sg',
      'zh': 'https://hiredeveloper.sg',
      'ms': 'https://hiredeveloper.sg',
      'ta': 'https://hiredeveloper.sg',
      'x-default': 'https://hiredeveloper.sg',
    },
  },
  other: {
    'msapplication-TileColor': '#009FFF',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://hiredeveloper.sg'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_SG', 'ms_SG', 'ta_SG'],
    url: 'https://hiredeveloper.sg',
    siteName: 'HireDeveloper.sg',
    title: 'Hire Top Talent in Singapore | HireDeveloper.sg',
    description: 'Hire the top 2% of vetted developers, designers, marketers and more in Singapore. Pre-screened talent ready for interviews. Start risk-free.',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HireDeveloper.sg - Hire Top Talent in Singapore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Top Talent in Singapore | HireDeveloper.sg',
    description: 'Hire the top 2% of vetted developers, designers, marketers and more in Singapore. Start risk-free.',
    images: ['/images/og-default.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HireDeveloper.sg',
              url: 'https://hiredeveloper.sg',
              logo: 'https://hiredeveloper.sg/favicon.svg',
              description: 'Hire the top 2% of vetted developers, designers, marketers and more in Singapore. Pre-screened talent ready for interviews.',
              email: 'hello@hiredeveloper.sg',
              areaServed: {
                '@type': 'Country',
                name: 'Singapore',
              },
              sameAs: [
                'https://www.linkedin.com/company/hiredeveloper-sg',
                'https://x.com/hiredevelopersg',
                'https://www.youtube.com/@hiredevelopersg',
                'https://www.facebook.com/hiredevelopersg',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansArabic.variable} ${notoSansSC.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <LeadFormModalProvider>
            <ScrollProgressCTA />
            {children}
            <StickyLeadWidget />
            <ExitIntentTrigger />
          </LeadFormModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
