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
  CheckCheck,
  Plus,
  Mic,
  ImageIcon,
  Heart,
  Send,
  ArrowUp,
} from "lucide-react";

type Platform = "whatsapp" | "instagram" | "tiktok";

interface Message {
  id: string;
  sender: "user" | "bot" | "system";
  type: "text" | "image" | "prompt";
  content: string;
  delay: number; // Time in ms before this message appears
  triggerMpesa?: boolean; // Trigger M-Pesa overlay
}

interface Scenario {
  id: Platform;
  name: string;
  businessName: string;
  avatar: string;
  messages: Message[];
}

interface MpesaDetails {
  amount: string;
  business: string;
}

// Unique Brand Avatars
const WHATSAPP_AVATAR_URL =
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=100&auto=format&fit=crop"; // Hardware/Construction

const INSTAGRAM_AVATAR_URL =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=100&auto=format&fit=crop"; // Sneaker/Fashion

const TIKTOK_AVATAR_URL =
  "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=100&auto=format&fit=crop"; // Tech/Gadget

// Instagram Product Image URL
const INSTAGRAM_PRODUCT_IMAGE_URL =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop";

// WhatsApp Background Pattern (Classic doodle)
const WHATSAPP_BG_PATTERN =
  "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";

// Scenario Data (Updated with Payment Flows)
const scenarios: Scenario[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    businessName: "Jenga Hardware",
    avatar: WHATSAPP_AVATAR_URL,
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
        triggerMpesa: true, // Trigger overlay here
      },
      {
        id: "w5",
        sender: "system",
        type: "prompt",
        content: "✅ Payment Confirmed. Receipt: QDH82KL9M.",
        delay: 6500, // After overlay closes (3s overlay + buffer)
      },
      {
        id: "w6",
        sender: "bot",
        type: "text",
        content: "Order confirmed! ✅ Delivery rider will call you shortly.",
        delay: 7500,
      },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    businessName: "Nairobi Kicks",
    avatar: INSTAGRAM_AVATAR_URL,
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
        sender: "user",
        type: "text",
        content: "I'll take it!",
        delay: 3300, // 1.5s after product shown
      },
      {
        id: "i5",
        sender: "bot",
        type: "text",
        content: "Great! Sending M-Pesa request...",
        delay: 4100, // 0.8s after user
        triggerMpesa: true,
      },
      {
        id: "i6",
        sender: "bot",
        type: "text",
        content: "Paid! We will DM the delivery details. 📦",
        delay: 7700, // After overlay
      },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    businessName: "TechTrend Gadgets",
    avatar: TIKTOK_AVATAR_URL,
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
        content: "KES 3,500. Reply with your number to order.",
        delay: 1000,
      },
      {
        id: "t3",
        sender: "user",
        type: "text",
        content: "0722000000",
        delay: 2500, // 1.5s reading pause
      },
      {
        id: "t4",
        sender: "bot",
        type: "text",
        content: "Sending M-Pesa request...",
        delay: 3500,
        triggerMpesa: true,
      },
      {
        id: "t5",
        sender: "bot",
        type: "text",
        content: "Order placed! 🚚 Shipping now.",
        delay: 7000, // After overlay
      },
    ],
  },
];

// M-Pesa STK Push Overlay Component
function MpesaOverlay({
  details,
  onClose,
}: {
  details: MpesaDetails;
  onClose: () => void;
}) {
  const [pinDigits, setPinDigits] = useState(0);

  useEffect(() => {
    // Auto-fill PIN animation (4 digits at 300ms intervals)
    const pinTimeouts: NodeJS.Timeout[] = [];
    for (let i = 1; i <= 4; i++) {
      const timeout = setTimeout(() => {
        setPinDigits(i);
      }, i * 300);
      pinTimeouts.push(timeout);
    }

    // Auto-click OK after all digits filled + 200ms
    const okTimeout = setTimeout(() => {
      onClose();
    }, 4 * 300 + 200);
    pinTimeouts.push(okTimeout);

    return () => {
      pinTimeouts.forEach(clearTimeout);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      {/* STK Push Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-2xl p-6 w-[280px] border border-gray-300"
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h4 className="text-green-600 font-bold text-lg">M-PESA</h4>
        </div>

        {/* Body */}
        <div className="text-center mb-6">
          <p className="text-gray-800 text-sm leading-relaxed">
            Do you wish to pay{" "}
            <span className="font-semibold">{details.amount}</span> to{" "}
            <span className="font-semibold">{details.business}</span>?
          </p>
          <p className="text-gray-600 text-xs mt-2">Enter PIN:</p>
        </div>

        {/* PIN Input Field (Dummy) */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gray-100 border border-gray-300 rounded px-4 py-2 w-full text-center">
            <span className="text-2xl tracking-widest text-gray-800">
              {"*".repeat(pinDigits)}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded text-sm font-medium hover:bg-gray-300 transition">
            Cancel
          </button>
          <button className="flex-1 bg-green-600 text-white py-2 rounded text-sm font-medium hover:bg-green-700 transition">
            OK
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Fake Input Bar Component
function FakeInputBar({ platform }: { platform: Platform }) {
  if (platform === "whatsapp") {
    return (
      <div className="absolute bottom-0 left-0 right-0 bg-[#f0f0f0] px-4 py-2 flex items-center gap-2">
        <Plus className="h-5 w-5 text-gray-500" />
        <div className="flex-1 bg-white rounded-full px-4 py-2">
          <span className="text-gray-400 text-sm">Message</span>
        </div>
        <div className="bg-green-600 rounded-full p-2">
          <Mic className="h-4 w-4 text-white" />
        </div>
      </div>
    );
  }

  if (platform === "instagram") {
    return (
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex items-center gap-2">
        <ImageIcon className="h-5 w-5 text-gray-500" />
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
          <span className="text-gray-400 text-sm">Message...</span>
        </div>
        <Heart className="h-5 w-5 text-gray-500" />
        <Send className="h-5 w-5 text-gray-500" />
      </div>
    );
  }

  // TikTok
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-zinc-900 px-4 py-2 flex items-center gap-2">
      <div className="flex-1 bg-zinc-800 rounded-full px-4 py-2">
        <span className="text-gray-500 text-sm">Add comment...</span>
      </div>
      <div className="bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full p-2">
        <ArrowUp className="h-4 w-4 text-white" />
      </div>
    </div>
  );
}

// Typing Indicator Component
function TypingIndicator({ platform }: { platform: Platform }) {
  const isDark = platform === "tiktok";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex items-center gap-1 ${isDark ? "bg-zinc-800" : "bg-gray-100"
        } rounded-2xl px-4 py-2 w-fit`}
    >
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`h-2 w-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-gray-500"
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

// Chat Bubble Component (Updated with Blue Ticks & Price Badge)
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

  // System message (Payment confirmation)
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

  // Image message (Instagram Product Card with Price Badge)
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
        {/* Product Image with Price Badge */}
        <div className="rounded-lg overflow-hidden w-48 h-32 relative">
          <Image
            src={INSTAGRAM_PRODUCT_IMAGE_URL}
            alt="Product"
            fill
            className="object-cover"
            sizes="192px"
          />
          {/* Price Badge (Bottom-left with Glassmorphism) */}
          <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            KES 4,500
          </div>
        </div>
      </motion.div>
    );
  }

  // Text message bubbles
  const bubbleClasses = isUser
    ? platform === "whatsapp"
      ? "bg-green-100 text-gray-900"
      : platform === "instagram"
        ? "bg-gray-200 text-gray-900 rounded-full" // Messenger-style
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
        className={`${bubbleClasses} ${platform === "instagram" && isUser ? "" : "rounded-2xl"
          } px-4 py-2 max-w-[75%] ${isUser && platform !== "instagram" ? "rounded-tr-sm" : ""
          } ${!isUser && platform !== "instagram" ? "rounded-tl-sm" : ""}`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
        {/* Blue Ticks (WhatsApp User Messages Only) */}
        {isUser && platform === "whatsapp" && (
          <div className="flex justify-end mt-1">
            <CheckCheck className="h-3 w-3 text-blue-500" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Phone Frame Component (Updated with Background & Input Bar)
function PhoneFrame({
  children,
  platform,
}: {
  children: React.ReactNode;
  platform: Platform;
}) {
  const isDark = platform === "tiktok";
  const bgStyle =
    platform === "whatsapp"
      ? {
        backgroundImage: `url(${WHATSAPP_BG_PATTERN})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px",
      }
      : {};

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
          className={`${isDark ? "bg-black" : "bg-white"
            } px-6 py-2 flex items-center justify-between text-xs z-10 relative`}
        >
          <span className={isDark ? "text-white" : "text-black"}>9:41</span>
          <div className="flex items-center gap-1">
            <Wifi className={`h-3 w-3 ${isDark ? "text-white" : "text-black"}`} />
            <Battery className={`h-3 w-3 ${isDark ? "text-white" : "text-black"}`} />
          </div>
        </div>

        {/* Screen Content */}
        <div
          className={`${bgColor} h-[600px] p-4 pb-16 overflow-y-auto relative`}
          style={bgStyle}
        >
          {children}
        </div>

        {/* Fake Input Bar */}
        <FakeInputBar platform={platform} />
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
    if (platform === "whatsapp") return "bg-green-100 text-green-700";
    if (platform === "instagram") return "bg-pink-100 text-pink-700";
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
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${isActive
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
  const [showMpesaModal, setShowMpesaModal] = useState(false);
  const [mpesaDetails, setMpesaDetails] = useState<MpesaDetails>({
    amount: "",
    business: "",
  });

  const currentScenario = scenarios.find((s) => s.id === activeTab)!;

  useEffect(() => {
    // Reset when tab changes
    setDisplayedMessages([]);
    setIsTyping(false);
    setShowMpesaModal(false);

    const timeouts: NodeJS.Timeout[] = [];

    currentScenario.messages.forEach((message) => {
      if (message.sender === "bot") {
        // Show typing indicator 400ms before bot message
        const typingStartDelay = message.delay - 400;
        const typingTimeout = setTimeout(() => {
          setIsTyping(true);
        }, typingStartDelay);
        timeouts.push(typingTimeout);

        // Hide typing and show bot message at the specified delay
        const messageTimeout = setTimeout(() => {
          setIsTyping(false);
          setDisplayedMessages((prev) => [...prev, message]);

          // Trigger M-Pesa overlay if flagged
          if (message.triggerMpesa) {
            const amount =
              activeTab === "whatsapp"
                ? "KES 7,500"
                : activeTab === "instagram"
                  ? "KES 4,500"
                  : "KES 3,500";
            const business =
              activeTab === "whatsapp"
                ? "JENGA HARDWARE"
                : activeTab === "instagram"
                  ? "NAIROBI KICKS"
                  : "TECHTREND GADGETS";
            setMpesaDetails({ amount, business });
            setShowMpesaModal(true);

            // Auto-close after 3s (handled in overlay component)
            const closeTimeout = setTimeout(() => {
              setShowMpesaModal(false);
            }, 3000);
            timeouts.push(closeTimeout);
          }
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
      <div className="w-full md:w-auto relative">
        <PhoneFrame platform={activeTab}>
          {/* Business Name Header */}
          <div
            className={`mb-4 pb-2 border-b flex items-center gap-3 ${activeTab === "tiktok" ? "border-gray-700" : "border-gray-200"
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
              className={`font-semibold ${activeTab === "tiktok" ? "text-white" : "text-gray-900"
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

          {/* M-Pesa STK Push Overlay */}
          <AnimatePresence>
            {showMpesaModal && (
              <MpesaOverlay
                details={mpesaDetails}
                onClose={() => setShowMpesaModal(false)}
              />
            )}
          </AnimatePresence>
        </PhoneFrame>
      </div>
    </div>
  );
}
