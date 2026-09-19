"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const phoneNumber = "263771234567";
  const defaultMessage = encodeURIComponent(
    "Hello Chipinge Safari Area, I would like to inquire about booking a safari visit."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const scrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={widgetRef} className="fixed bottom-20 right-6 z-40 flex flex-col items-end">
      {/* Options Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2 space-y-1"
          >
            <div className="px-3 py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-[#1B3B2B] uppercase tracking-wider">
                Connect with Us
              </p>
              <p className="text-[11px] text-gray-500">
                Choose your preferred communication channel
              </p>
            </div>

            {/* 1. WhatsApp Chat */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.552 4.179 1.602 6.002L.055 24l6.168-1.502c1.758.96 3.757 1.506 5.781 1.506 6.626 0 12.004-5.378 12.004-12.004C24.008 5.378 18.63 0 12.004 0zm0 21.996c-1.859 0-3.682-.5-5.275-1.451l-.378-.225-3.659.892.909-3.565-.246-.392c-1.045-1.662-1.599-3.585-1.599-5.551 0-5.513 4.483-9.996 9.998-9.996 5.514 0 9.998 4.483 9.998 9.996 0 5.513-4.484 9.996-9.998 9.996z" />
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.176.201-.351.226-.653.076-.301-.15-1.272-.469-2.424-1.497-.897-.799-1.502-1.787-1.678-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527-.075-.15-.678-1.635-.929-2.238-.244-.588-.493-.508-.678-.518-.175-.009-.376-.01-.577-.01s-.527.075-.803.376c-.276.301-1.055 1.03-1.055 2.512s1.08 2.914 1.231 3.115c.15.201 2.126 3.246 5.15 4.553.719.311 1.28.497 1.718.636.723.23 1.381.197 1.901.12.579-.086 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 group-hover:text-[#25D366] transition-colors">
                  WhatsApp Chat
                </p>
                <p className="text-[11px] text-gray-500">Fast replies via WhatsApp</p>
              </div>
            </a>

            {/* 2. Direct Webchat Messaging */}
            <a
              href="#contact"
              onClick={scrollToInquiry}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#C27D38]/15 text-[#C27D38] flex items-center justify-center shrink-0 group-hover:bg-[#C27D38] group-hover:text-white transition-colors">
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 group-hover:text-[#C27D38] transition-colors">
                  Webchat Messaging
                </p>
                <p className="text-[11px] text-gray-500">Send an inquiry directly</p>
              </div>
            </a>

            {/* 3. Direct Phone Call */}
            <a
              href="tel:+263771234567"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#1B3B2B]/15 text-[#1B3B2B] flex items-center justify-center shrink-0 group-hover:bg-[#1B3B2B] group-hover:text-white transition-colors">
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 group-hover:text-[#1B3B2B] transition-colors">
                  Call ZIMPARKS SELR
                </p>
                <p className="text-[11px] text-gray-500">+263 77 123 4567</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Toggle Trigger */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat and contact channels"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#1B3B2B] hover:bg-[#12281D] text-white rounded-full shadow-2xl transition-colors duration-200 border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C27D38]"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
        </span>

        {/* Chat bubble icon */}
        <svg
          className="w-5 h-5 fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>

        <span className="text-sm font-semibold tracking-wide">
          {isOpen ? "Close" : "Chat with us"}
        </span>
      </motion.button>
    </div>
  );
}
