"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Experiences", href: "#experiences", sectionId: "experiences" },
  { name: "Education", href: "#education", sectionId: "education" },
  { name: "Herbal Garden", href: "#garden", sectionId: "garden" },
  { name: "Gallery", href: "#gallery", sectionId: "gallery" },
  { name: "Plan Your Visit", href: "#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        // Navbar bg-color should be visible exactly after hero section
        setIsPastHero(heroBottom <= 80);
      } else {
        setIsPastHero(window.scrollY > window.innerHeight - 80);
      }

      // If scrolled back near top / on hero, clear active section
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["experiences", "education", "garden", "gallery", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Only set active section if we are past the top
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
      animate={{
        backgroundColor: isPastHero ? "rgba(27, 59, 43, 0.96)" : "rgba(0, 0, 0, 0)",
        backdropFilter: isPastHero ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-300 ${
        isPastHero ? "border-b border-white/10 shadow-lg" : "border-b border-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand with Official Chipinge Safari Area Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C27D38] rounded-lg p-1" 
            onClick={closeMobileMenu}
          >
            <div className="relative w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Chipinge Safari Area Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider leading-tight text-white group-hover:text-[#C27D38] transition-colors">
                Chipinge Safari Area
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#F4EFEA]/70 font-sans">
                ZIMPARKS • South East Lowveld
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — active indicator only active after hero */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = isPastHero && activeSection === link.sectionId;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C27D38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B3B2B] rounded-md ${
                    isActive 
                      ? "text-[#C27D38] font-semibold" 
                      : "text-white/90 hover:text-[#C27D38] font-medium"
                  }`}
                >
                  {link.name}
                  {/* Underline Indicator: active only after hero, hover always */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C27D38] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 hover:w-full group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            
            <Link
              href="#contact"
              className="bg-[#C27D38] hover:bg-[#8C4F2B] text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B3B2B]"
            >
              Plan Visit
            </Link>
          </div>

          {/* Clean Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-white hover:text-[#C27D38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C27D38] rounded-md p-2 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#1B3B2B]/98 backdrop-blur-xl md:hidden overflow-hidden shadow-2xl"
          >
            <div className="px-5 pt-3 pb-8 space-y-2 flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = isPastHero && activeSection === link.sectionId;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 text-base rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C27D38] ${
                      isActive
                        ? "bg-white/10 text-[#C27D38] font-semibold"
                        : "text-white/90 hover:text-[#C27D38] hover:bg-white/5 font-medium"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-2">
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-[#C27D38] hover:bg-[#8C4F2B] text-white px-5 py-3 rounded-lg text-base font-semibold transition-all shadow-md"
                >
                  Plan Visit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
