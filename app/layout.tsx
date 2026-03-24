import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import SkipLink from "@/components/global/SkipLink";
import NewsletterPopup from "@/components/global/NewsletterPopup";
import Analytics from "@/components/global/Analytics";
import SchemaOrg from "@/components/global/SchemaOrg";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { getPersonSchema, getOrganizationSchema } from "@/lib/structured-data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s — Eitan Gorodetsky",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: ["Eitan Gorodetsky", "CMO", "COO", "Marketing Director", "VP Marketing", "Operations Executive", "iGaming", "Digital Marketing"],
  authors: [{ name: "Eitan Gorodetsky", url: SITE_URL }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Eitan Gorodetsky",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <Script src="https://agentready.site/api/snippet/cmmfvwpu30001l204eedrvi0l/ar.js" strategy="afterInteractive" />
      </head>
      <body className="antialiased">
        <SchemaOrg data={getPersonSchema()} />
        <SchemaOrg data={getOrganizationSchema()} />
        <SkipLink />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <NewsletterPopup />
        <Analytics />
      </body>
    </html>
  );
}
