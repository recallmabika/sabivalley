"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TreePine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Experiences", href: "#experiences" },
  { name: "Education", href: "#education" },
  { name: "Herbal Garden", href: "#garden" },
  { name: "Gallery", href: "#gallery" },
  { name: "Plan Your Visit", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Initial check in case the page is already scrolled
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(27, 59, 43, 0)", backdropFilter: "blur(0px)" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(27, 59, 43, 0.95)" : "rgba(27, 59, 43, 0)",
        backdropFilter: isScrolled ? "blur(8px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 text-white"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
            <TreePine className="h-8 w-8 text-[#C27D38]" aria-hidden="true" />
            <span className="font-[var(--font-heading)] text-xl font-bold tracking-wide">
              Chipinge Safari Area
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[#C27D38] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C27D38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B3B2B] rounded-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#book"
              className="bg-[#C27D38] hover:bg-[#8C4F2B] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B3B2B]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-white hover:text-[#C27D38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C27D38] rounded-md p-2 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle main menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#1B3B2B] border-t border-[#1B3B2B]/20 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-[#C27D38] hover:bg-black/10 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 px-3">
                <Link
                  href="#book"
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-[#C27D38] hover:bg-[#8C4F2B] text-white px-5 py-3 rounded-md text-base font-semibold transition-colors shadow-md"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
