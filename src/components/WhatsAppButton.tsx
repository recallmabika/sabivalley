"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  // Official Zimbabwe WhatsApp number (+263 77 123 4567) or customizable prompt message
  const phoneNumber = "263771234567";
  const defaultMessage = encodeURIComponent(
    "Hello Chipinge Safari Area, I would like to inquire about booking a safari visit."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Chipinge Safari Area on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
    >
      {/* Official WhatsApp Logo SVG */}
      <svg
        className="w-6 h-6 fill-current shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.176.201-.351.226-.653.076-.301-.15-1.272-.469-2.424-1.497-.897-.799-1.502-1.787-1.678-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527-.075-.15-.678-1.635-.929-2.238-.244-.588-.493-.508-.678-.518-.175-.009-.376-.01-.577-.01s-.527.075-.803.376c-.276.301-1.055 1.03-1.055 2.512s1.08 2.914 1.231 3.115c.15.201 2.126 3.246 5.15 4.553.719.311 1.28.497 1.718.636.723.23 1.381.197 1.901.12.579-.086 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351z" />
        <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.552 4.179 1.602 6.002L.055 24l6.168-1.502c1.758.96 3.757 1.506 5.781 1.506 6.626 0 12.004-5.378 12.004-12.004C24.008 5.378 18.63 0 12.004 0zm0 21.996c-1.859 0-3.682-.5-5.275-1.451l-.378-.225-3.659.892.909-3.565-.246-.392c-1.045-1.662-1.599-3.585-1.599-5.551 0-5.513 4.483-9.996 9.998-9.996 5.514 0 9.998 4.483 9.998 9.996 0 5.513-4.484 9.996-9.998 9.996z" />
      </svg>
      <span className="text-sm font-semibold tracking-wide pr-1">
        Chat with us
      </span>
    </motion.a>
  );
}
