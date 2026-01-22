import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philia Technologies | AI Sales Agents for Kenya",
  description:
    "Automate sales on WhatsApp, Instagram & TikTok with custom AI agents and M-Pesa integration. 24/7 automated customer engagement.",

  // Open Graph for WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.philiatechnologies.com",
    siteName: "Philia Technologies",
    title: "Philia Technologies | AI Sales Agents for Kenya",
    description:
      "Automate WhatsApp, Instagram & TikTok sales with AI + M-Pesa integration. 24/7 automated customer engagement.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Philia Technologies - AI Sales Agents for Kenya",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Philia Technologies | AI Sales Agents for Kenya",
    description:
      "Automate WhatsApp, Instagram & TikTok sales with AI + M-Pesa integration.",
    images: ["/og-image.png"],
    creator: "@PhiliaTech",
  },

  // Icons and Theme
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
  },

  // Additional SEO
  keywords: [
    "AI Sales Agents",
    "WhatsApp Automation",
    "M-Pesa Integration",
    "Instagram Sales",
    "TikTok Commerce",
    "Kenya AI",
    "Automated Sales",
    "Customer Engagement",
  ],
  authors: [{ name: "Philia Technologies" }],
  creator: "Philia Technologies",
  publisher: "Philia Technologies",

  // Theme colors for mobile browsers
  themeColor: "#8B5CF6",

  // Viewport and mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-white`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
      </body>
    </html>
  );
}
