import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevents render blocking - shows fallback font immediately
  preload: true, // Preloads the font for faster rendering
  adjustFontFallback: true, // Reduces layout shift
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.philiatechnologies.com"),
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
        url: "/og-image-optimized.jpg",
        width: 1200,
        height: 630,
        alt: "Philia Technologies - AI Sales Agents for Kenya",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Philia Technologies | AI Sales Agents for Kenya",
    description:
      "Automate WhatsApp, Instagram & TikTok sales with AI + M-Pesa integration.",
    images: ["/og-image-optimized.jpg"],
    creator: "@PhiliaTech",
  },

  // Icons and Theme
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/favicon-32x32.png" },
    ],
  },

  // Web Manifest
  manifest: "/site.webmanifest",

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
};

// Viewport and theme configuration (separate export for Next.js 16)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8B5CF6",
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
