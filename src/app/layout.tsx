import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { siteContent } from "@/data/siteContent";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const { business, seo } = siteContent;

export const metadata: Metadata = {
  metadataBase: new URL(business.websiteUrl),
  title: {
    default: seo.title,
    template: `%s | ${business.name}`,
  },
  description: seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: business.websiteUrl,
    siteName: business.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={seo.language} className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
