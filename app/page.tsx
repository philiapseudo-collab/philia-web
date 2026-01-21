import {
  MessageCircle,
  CheckCircle2,
  Smartphone,
  Zap,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ChatSimulator from "@/components/ChatSimulator";

const WHATSAPP_URL =
  "https://wa.me/254708115809?text=I%20am%20interested%20in%20a%20Philia%20Sales%20Agent";
const DASHBOARD_IMAGE_URL =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 md:flex-row md:px-8 md:py-24">
        {/* Radial Gradient Background - Purple glow at top fading to white */}
        <div
          className="absolute inset-0 bg-white"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(76, 29, 149, 0.1) 0%, rgba(255, 255, 255, 0.5) 50%, #ffffff 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          {/* Text Content */}
          <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
            <h1 className="animate-fade-up text-3xl font-bold leading-tight text-philia-purple md:text-4xl lg:text-5xl">
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
                More Than Just a Chatbot.
              </h2>
              <p className="text-lg text-gray-700">
                Every agent comes with a Merchant Portal to manage your business.
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-philia-purple flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Live Inventory Sync across WhatsApp & Instagram.
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
                STK Pushes and Paybill verification built-in. No manual checking.
              </p>
            </div>

            {/* Card 2: Instant Speed */}
            <div className="p-8 rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg hover:border-philia-purple/30 h-full flex flex-col">
              <Zap className="h-10 w-10 text-philia-accent mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Instant Speed
              </h3>
              <p className="text-gray-600">
                Hosted on edge servers for 0.2s response times on 4G.
              </p>
            </div>

            {/* Card 3: We Handle The Code */}
            <div className="p-8 rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg hover:border-philia-purple/30 h-full flex flex-col">
              <ShieldCheck className="h-10 w-10 text-philia-accent mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                We Handle The Code
              </h3>
              <p className="text-gray-600">
                You focus on sales. We ensure the bot runs 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-philia-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
            {/* Logo/Brand */}
            <div className="text-lg font-bold">Philia Technologies</div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
              <Link
                href="#"
                className="text-purple-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-purple-200 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-purple-200 text-center md:text-right">
              © 2026 Philia Technologies. Built in Juja.
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 shadow-xl flex items-center justify-center text-white transition-transform hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Link>
    </main>
  );
}
