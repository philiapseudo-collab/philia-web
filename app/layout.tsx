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
    "Automate sales on WhatsApp, Instagram & TikTok with custom AI agents and M-Pesa integration.",
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
