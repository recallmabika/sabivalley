"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#FDFCFA] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C27D38] mb-3">
            Visitor Information
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#1B3B2B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Essential information regarding visits, activities, educational programs, and wildlife guidelines at Chipinge Safari Area.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-none cursor-pointer"
                >
                  <span className="font-heading font-semibold text-[#1B3B2B] text-base sm:text-lg pr-2">
                    {faq.question}
                  </span>
                  
                  {/* Clean Animated Arrow Indicator without bg-color */}
                  <ChevronDown
                    className={`w-5 h-5 text-[#1B3B2B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100/80">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact prompt */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border-t border-gray-200">
          <div>
            <p className="font-heading font-semibold text-[#1B3B2B] text-lg mb-1">
              Have a question not listed here?
            </p>
            <p className="text-sm text-gray-600">
              Our park rangers and staff are available to assist you with tour planning, school visits, and logistics.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-2.5 bg-[#1B3B2B] hover:bg-[#12281D] text-white text-sm font-medium rounded-lg transition-colors"
          >
            Inquire Directly
          </a>
        </div>

      </div>
    </section>
  );
}
