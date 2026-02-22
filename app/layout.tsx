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
    default: "Hire Top Remote Talent | HireDeveloper.ae",
    template: "%s",
  },
  description: "Hire the top 2% of vetted remote developers, designers, marketers and more in Dubai & Abu Dhabi. Pre-screened talent ready for interviews. Start risk-free.",
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
      'en': 'https://hiredeveloper.ae',
      'ar': 'https://hiredeveloper.ae',
      'fr': 'https://hiredeveloper.ae',
      'zh': 'https://hiredeveloper.ae',
      'ru': 'https://hiredeveloper.ae',
      'x-default': 'https://hiredeveloper.ae',
    },
  },
  other: {
    'msapplication-TileColor': '#009FFF',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://hiredeveloper.ae'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_AE', 'fr_FR', 'zh_CN', 'ru_RU'],
    url: 'https://hiredeveloper.ae',
    siteName: 'HireDeveloper.ae',
    title: 'Hire Top Remote Talent | HireDeveloper.ae',
    description: 'Hire the top 2% of vetted remote developers, designers, marketers and more in Dubai & Abu Dhabi. Pre-screened talent ready for interviews. Start risk-free.',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'HireDeveloper.ae - Hire Top Remote Talent in Dubai & UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Top Remote Talent | HireDeveloper.ae',
    description: 'Hire the top 2% of vetted remote developers, designers, marketers and more in Dubai & Abu Dhabi. Start risk-free.',
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
