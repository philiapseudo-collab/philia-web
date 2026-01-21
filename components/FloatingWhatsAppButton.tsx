"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/254708116809?text=I%20am%20interested%20in%20a%20Philia%20Sales%20Agent";

export default function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (approximated by viewport height)
      // Show button after scrolling past ~80% of viewport height
      const heroThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroThreshold);
    };

    // Check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 shadow-xl flex items-center justify-center text-white transition-all hover:scale-110 animate-fade-up"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
