import {
  CheckCircle2,
  Smartphone,
  Zap,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ChatSimulator from "@/components/ChatSimulator";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const WHATSAPP_URL =
  "https://wa.me/254708116809?text=I%20am%20interested%20in%20a%20Philia%20Sales%20Agent";
const DASHBOARD_IMAGE_URL =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* PT Logo SVG */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              <defs>
                {/* Purple gradient - lighter top-left to darker bottom-right */}
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>

              {/* Purple gradient circle background */}
              <circle cx="24" cy="24" r="22" fill="url(#purpleGradient)" />

              {/* Letter p - vertical stem */}
              <path
                d="M14 16 L14 36"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Letter p - bowl outline */}
              <circle
                cx="20"
                cy="20"
                r="6"
                stroke="white"
                strokeWidth="3.5"
                fill="none"
              />

              {/* Letter T - full horizontal bar */}
              <path
                d="M26 14 L38 14"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Letter T - vertical stem dropping down */}
              <path
                d="M38 14 L38 38"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Brand Name */}
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Philia
            </span>
          </div>

          {/* WhatsApp CTA */}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-philia-purple text-philia-purple font-semibold text-sm transition-colors hover:bg-philia-purple hover:text-white focus:outline-none focus:ring-2 focus:ring-philia-purple focus:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 md:flex-row md:px-8 md:py-24 pt-32">
        {/* Enhanced Background with Gradient and Dot Pattern */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-indigo-50/30"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              radial-gradient(ellipse at top, white 0%, rgb(248, 250, 252) 50%, rgba(238, 242, 255, 0.3) 100%)
            `,
            backgroundSize: '20px 20px, 100% 100%',
            backgroundPosition: '0 0, 0 0',
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          {/* Text Content */}
          <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
            {/* Status Pill */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
              🚀 Now Live in Kenya
            </div>

            <h1 className="animate-fade-up text-3xl font-bold leading-tight text-philia-purple md:text-4xl lg:text-5xl [animation-delay:0.1s]">
              Automate Your Sales on WhatsApp, Instagram & TikTok.
            </h1>
            <p className="animate-fade-up text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl [animation-delay:0.2s]">
              Deploy custom AI Sales Agents that engage customers, sync inventory
              across platforms, and process M-Pesa payments instantly—24/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex animate-fade-up flex-col gap-4 sm:flex-row [animation-delay:0.4s]">
              {/* WhatsApp Us Button - Solid Purple */}
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-philia-purple px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-philia-accent focus:outline-none focus:ring-2 focus:ring-philia-purple focus:ring-offset-2"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Link>

              {/* See Demo Button - Outline */}
              <Link
                href="#demo"
                className="flex min-h-[48px] items-center justify-center rounded-lg border-2 border-philia-purple px-6 py-3 text-base font-semibold text-philia-purple transition-colors hover:bg-philia-purple hover:text-white focus:outline-none focus:ring-2 focus:ring-philia-purple focus:ring-offset-2"
                aria-label="Scroll to demo section"
              >
                See Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Simulator Section */}
      <section id="demo" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-philia-purple mb-12 md:text-4xl">
            See Philia in Action
          </h2>
          <ChatSimulator />
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <section className="bg-philia-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-philia-purple md:text-4xl">
                Your Complete AI Sales Command Center.
              </h2>
              <p className="text-lg text-gray-700">
                Every AI Sales Agent comes with a Merchant Portal to manage your business.
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-philia-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Live Inventory Sync across WhatsApp, Instagram & TikTok.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-philia-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time Sales Reports.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-philia-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Customer CRM & Data Export.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Dashboard Image */}
            <div className="flex items-center justify-center">
              <div className="w-full relative aspect-video rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                <Image
                  src={DASHBOARD_IMAGE_URL}
                  alt="Merchant Dashboard Interface"
                  fill
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Tech Grid Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: M-Pesa Native */}
            <div className="p-8 rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg hover:border-philia-purple/30 h-full flex flex-col">
              <Smartphone className="h-10 w-10 text-philia-accent mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                M-Pesa Native
              </h3>
              <p className="text-gray-600">
                STK Pushes and Paybill verification built-in. No manual checking required.
              </p>
            </div>

            {/* Card 2: Instant Speed */}
            <div className="p-8 rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg hover:border-philia-purple/30 h-full flex flex-col">
              <Zap className="h-10 w-10 text-philia-accent mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Instant Speed
              </h3>
              <p className="text-gray-600">
                Hosted on edge servers for 0.2s response times, ensuring no customer is ever left waiting.
              </p>
            </div>

            {/* Card 3: We Handle The Code */}
            <div className="p-8 rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg hover:border-philia-purple/30 h-full flex flex-col">
              <ShieldCheck className="h-10 w-10 text-philia-accent mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Zero Maintenance Required
              </h3>
              <p className="text-gray-600">
                You focus on growing your brand. We ensure your AI Agent runs flawlessly 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-philia-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 max-w-6xl mx-auto">
            {/* Top Row: Logo */}
            <div className="text-xl font-bold">Philia Technologies</div>

            {/* Bottom Row: Copyright and Links */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              {/* Copyright */}
              <div className="text-purple-200">
                © 2026 Philia Technologies. Built in Kenya.
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-white hover:underline transition-all cursor-pointer"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-white/80 hover:text-white hover:underline transition-all cursor-pointer"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA - Shows after scrolling past hero */}
      <FloatingWhatsAppButton />
    </main>
  );
}

