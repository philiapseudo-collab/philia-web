"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  Instagram,
  Music2,
  Wifi,
  Battery,
  CheckCircle2,
} from "lucide-react";

type Platform = "whatsapp" | "instagram" | "tiktok";

interface Message {
  id: string;
  sender: "user" | "bot" | "system";
  type: "text" | "image" | "prompt";
  content: string;
  delay: number; // Time in ms before this message appears
}

interface Scenario {
  id: Platform;
  name: string;
  businessName: string;
  avatar: string;
  messages: Message[];
}

// Avatar URL
const BUSINESS_AVATAR_URL =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop";

// Instagram Product Image URL
const INSTAGRAM_PRODUCT_IMAGE_URL =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop";

// Scenario Data
const scenarios: Scenario[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    businessName: "Jenga Hardware",
    avatar: BUSINESS_AVATAR_URL,
    messages: [
      {
        id: "w1",
        sender: "user",
        type: "text",
        content: "Do you have Simba Cement?",
        delay: 0,
      },
      {
        id: "w2",
        sender: "bot",
        type: "text",
        content: "Yes! 50kg bag is KES 750. We have 40 bags left.",
        delay: 1000,
      },
      {
        id: "w3",
        sender: "user",
        type: "text",
        content: "I need 10 bags.",
        delay: 1800,
      },
      {
        id: "w4",
        sender: "bot",
        type: "text",
        content: "Total: KES 7,500. Sending M-Pesa prompt...",
        delay: 2800,
      },
      {
        id: "w5",
        sender: "system",
        type: "prompt",
        content: "M-Pesa Prompt Sent",
        delay: 3200,
      },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    businessName: "Nairobi Kicks",
    avatar: BUSINESS_AVATAR_URL,
    messages: [
      {
        id: "i1",
        sender: "user",
        type: "text",
        content: "Size 42 available?",
        delay: 0,
      },
      {
        id: "i2",
        sender: "bot",
        type: "text",
        content: "Yes! 2 pairs left in Size 42. Check them out:",
        delay: 1000,
      },
      {
        id: "i3",
        sender: "bot",
        type: "image",
        content: "Product Card",
        delay: 1800,
      },
      {
        id: "i4",
        sender: "bot",
        type: "text",
        content: "Tap here to buy.",
        delay: 2800,
      },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    businessName: "TechTrend Gadgets",
    avatar: BUSINESS_AVATAR_URL,
    messages: [
      {
        id: "t1",
        sender: "user",
        type: "text",
        content: "Price?",
        delay: 0,
      },
      {
        id: "t2",
        sender: "bot",
        type: "text",
        content: "Hey! The SmartWatch is KES 3,500. It tracks HR and Sleep.",
        delay: 1000,
      },
      {
        id: "t3",
        sender: "bot",
        type: "text",
        content: "Here is the checkout link.",
        delay: 2800,
      },
    ],
  },
];

// Typing Indicator Component
function TypingIndicator({ platform }: { platform: Platform }) {
  const isDark = platform === "tiktok";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex items-center gap-1 ${
        isDark ? "bg-zinc-800" : "bg-gray-100"
      } rounded-2xl px-4 py-2 w-fit`}
    >
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`h-2 w-2 rounded-full ${
              isDark ? "bg-cyan-400" : "bg-gray-500"
            }`}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Chat Bubble Component
function ChatBubble({
  message,
  platform,
  avatarUrl,
}: {
  message: Message;
  platform: Platform;
  avatarUrl: string;
}) {
  const isUser = message.sender === "user";
  const isSystem = message.sender === "system";
  const isDark = platform === "tiktok";

  // System message (M-Pesa prompt)
  if (isSystem) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-2 py-2"
      >
        <CheckCircle2 className="h-4 w-4 text-green-500" />
        <span className="text-xs text-gray-500">{message.content}</span>
      </motion.div>
    );
  }

  // Image message (Instagram) - always from bot
  if (message.type === "image") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="flex justify-start items-end gap-2 mb-2"
      >
        {/* Bot Avatar */}
        <Image
          src={avatarUrl}
          alt="Business avatar"
          width={24}
          height={24}
          className="rounded-full w-6 h-6 flex-shrink-0"
        />
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden w-48 h-32 relative">
          <Image
            src={INSTAGRAM_PRODUCT_IMAGE_URL}
            alt="Product"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>
      </motion.div>
    );
  }

  // Text message bubbles
  const bubbleClasses = isUser
    ? platform === "whatsapp"
      ? "bg-green-100 text-gray-900"
      : platform === "instagram"
        ? "bg-gray-200 text-gray-900"
        : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
    : platform === "whatsapp"
      ? "bg-white text-gray-900"
      : platform === "instagram"
        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        : "bg-zinc-800 text-gray-100";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} items-end gap-2 mb-2`}
    >
      {/* Bot Avatar - Only show for bot messages */}
      {!isUser && (
        <Image
          src={avatarUrl}
          alt="Business avatar"
          width={24}
          height={24}
          className="rounded-full w-6 h-6 flex-shrink-0"
        />
      )}
      <div
        className={`${bubbleClasses} rounded-2xl px-4 py-2 max-w-[75%] ${
          isUser ? "rounded-tr-sm" : "rounded-tl-sm"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
    </motion.div>
  );
}

// Phone Frame Component
function PhoneFrame({
  children,
  platform,
}: {
  children: React.ReactNode;
  platform: Platform;
}) {
  const isDark = platform === "tiktok";
  const bgColor =
    platform === "whatsapp"
      ? "bg-[#e5ddd5]"
      : platform === "instagram"
        ? "bg-white"
        : "bg-black";

  return (
    <div className="relative w-[320px] mx-auto">
      {/* Phone Frame */}
      <div className="relative border-4 border-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
        {/* Status Bar */}
        <div
          className={`${
            isDark ? "bg-black" : "bg-white"
          } px-6 py-2 flex items-center justify-between text-xs`}
        >
          <span className={isDark ? "text-white" : "text-black"}>9:41</span>
          <div className="flex items-center gap-1">
            <Wifi className={`h-3 w-3 ${isDark ? "text-white" : "text-black"}`} />
            <Battery className={`h-3 w-3 ${isDark ? "text-white" : "text-black"}`} />
          </div>
        </div>

        {/* Screen Content */}
        <div className={`${bgColor} h-[600px] p-4 overflow-y-auto`}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Platform Tabs Component
function PlatformTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: Platform;
  onTabChange: (platform: Platform) => void;
}) {
  const tabs = [
    { id: "whatsapp" as Platform, icon: MessageCircle, label: "WhatsApp" },
    { id: "instagram" as Platform, icon: Instagram, label: "Instagram" },
    { id: "tiktok" as Platform, icon: Music2, label: "TikTok" },
  ];

  const getActiveClasses = (platform: Platform) => {
    if (platform === "whatsapp")
      return "bg-green-100 text-green-700";
    if (platform === "instagram")
      return "bg-pink-100 text-pink-700";
    return "bg-gray-100 text-black";
  };

  return (
    <div className="flex flex-row gap-2 mb-6 md:flex-col md:mb-0 md:gap-4">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? getActiveClasses(tab.id)
                : "text-gray-500 hover:text-gray-900"
            }`}
            aria-label={`Switch to ${tab.label} demo`}
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Main ChatSimulator Component
export default function ChatSimulator() {
  const [activeTab, setActiveTab] = useState<Platform>("whatsapp");
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const currentScenario = scenarios.find((s) => s.id === activeTab)!;

  useEffect(() => {
    // Reset when tab changes
    setDisplayedMessages([]);
    setIsTyping(false);

    const timeouts: NodeJS.Timeout[] = [];

    currentScenario.messages.forEach((message) => {
      if (message.sender === "bot") {
        // Show typing indicator 400ms before bot message (600ms duration)
        const typingStartDelay = message.delay - 400;
        const typingTimeout = setTimeout(() => {
          setIsTyping(true);
        }, typingStartDelay);
        timeouts.push(typingTimeout);

        // Hide typing and show bot message at the specified delay
        const messageTimeout = setTimeout(() => {
          setIsTyping(false);
          setDisplayedMessages((prev) => [...prev, message]);
        }, message.delay);
        timeouts.push(messageTimeout);
      } else {
        // User or system messages appear directly
        const messageTimeout = setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, message]);
        }, message.delay);
        timeouts.push(messageTimeout);
      }
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [activeTab, currentScenario]);

  // Typing indicator visibility
  const showTyping = isTyping;

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-center px-4 py-12">
      {/* Tabs - Mobile: Above, Desktop: Left */}
      <div className="w-full md:w-auto">
        <PlatformTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Phone Frame - Mobile: Below, Desktop: Right */}
      <div className="w-full md:w-auto">
        <PhoneFrame platform={activeTab}>
          {/* Business Name Header */}
          <div
            className={`mb-4 pb-2 border-b flex items-center gap-3 ${
              activeTab === "tiktok"
                ? "border-gray-700"
                : "border-gray-200"
            }`}
          >
            <Image
              src={currentScenario.avatar}
              alt={`${currentScenario.businessName} avatar`}
              width={40}
              height={40}
              className="rounded-full w-10 h-10"
            />
            <h3
              className={`font-semibold ${
                activeTab === "tiktok" ? "text-white" : "text-gray-900"
              }`}
            >
              {currentScenario.businessName}
            </h3>
          </div>

          {/* Messages */}
          <div className="space-y-1">
            <AnimatePresence>
              {displayedMessages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message}
                  platform={activeTab}
                  avatarUrl={currentScenario.avatar}
                />
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {showTyping && (
              <AnimatePresence>
                <TypingIndicator platform={activeTab} />
              </AnimatePresence>
            )}
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
