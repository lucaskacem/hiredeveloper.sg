import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeadFormModalProvider from "./(companies)/components/LeadFormModalProvider";
import StickyLeadWidget from "./(companies)/components/StickyLeadWidget";
import ExitIntentTrigger from "./(companies)/components/ExitIntentTrigger";
import ScrollProgressCTA from "./(companies)/components/ScrollProgressCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Remote-Talente einstellen | Programmier-Anfang",
    template: "%s",
  },
  description: "Stellen Sie die Top 2% der geprüften Remote-Entwickler, Designer, Marketer und mehr ein. Vorgeprüfte Talente bereit für Interviews. Risikofrei starten.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <LeadFormModalProvider>
          <ScrollProgressCTA />
          {children}
          <StickyLeadWidget />
          <ExitIntentTrigger />
        </LeadFormModalProvider>
      </body>
    </html>
  );
}
