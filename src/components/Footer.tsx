"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { activities as activityData } from "@/data/content";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim()) {
      setNewsletterError("Email address is required.");
      return;
    }
    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }
    setNewsletterError("");
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => {
      setNewsletterSuccess(false);
    }, 5000);
  };
  return (
    <footer className="bg-[#0F2A1D] text-[#F4EFEA] border-t border-[#1B3B2B]">
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Conservation Partners Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Chipinge Safari Area Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-2xl font-heading font-bold text-white tracking-wide group-hover:text-[#C27D38] transition-colors">
                Chipinge Safari Area
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience the untamed beauty of the South East Lowveld. A pristine wilderness dedicated to conservation and sustainable eco-tourism.
            </p>
            
            {/* Partners Logos */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                Official Conservation Partners
              </p>
              <div className="flex items-center gap-6 py-1">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/partners/zimparks-logo.png"
                    alt="ZIMPARKS Official Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-32 h-14 shrink-0">
                  <Image
                    src="/images/partners/aware-logo.png"
                    alt="AWARE Germany e.V. Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-[#52b788] tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="#experiences" className="hover:text-[#52b788] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-[#52b788] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded">
                  Education Centre
                </Link>
              </li>
              <li>
                <Link href="#garden" className="hover:text-[#52b788] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded">
                  Medicinal Garden
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#52b788] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded">
                  Safari Gallery
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-[#52b788] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#52b788] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded">
                  Plan Your Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-[#52b788] tracking-wide">Experiences</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {activityData.map((activity) => (
                <li key={activity.id}>
                  <Link href="#experiences" className="hover:text-[#52b788] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded">
                    {activity.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-[#52b788] tracking-wide">Contact Us</h4>
            <address className="not-italic space-y-3 text-sm text-gray-300">
              <p>Chipinge Safari Area<br/>South East Lowveld Region<br/>Zimbabwe</p>
              <p className="pt-2">
                <span className="text-gray-400">Phone:</span> Contact ZIMPARKS SELR Office
              </p>
              <p>
                <a href="mailto:info@chipingesafari.co.zw" className="hover:text-[#52b788] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded">
                  Email: info@chipingesafari.co.zw
                </a>
              </p>
            </address>
          </div>

        </div>

        {/* Newsletter Subscribe with Floating Label, Clean Border Focus & Validation */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="text-lg font-heading font-semibold text-white tracking-wide mb-1">
                Stay Connected
              </h4>
              <p className="text-sm text-gray-400">
                Subscribe to receive updates on conservation efforts, upcoming events, and seasonal highlights.
              </p>
            </div>

            {newsletterSuccess ? (
              <div className="bg-[#C27D38]/15 border border-[#C27D38]/40 px-5 py-3 rounded-lg text-sm text-[#FDFCFA] font-medium flex items-center gap-2">
                <span>✓</span> Thank you for subscribing to our newsletter!
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                noValidate
                className="flex flex-col sm:flex-row w-full md:w-auto gap-3"
              >
                <div className="flex flex-col">
                  <div className="relative">
                    <input
                      type="email"
                      id="newsletter-email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (newsletterError) setNewsletterError("");
                      }}
                      placeholder=" "
                      className={`peer w-full sm:w-72 px-4 pt-5 pb-2 bg-white/5 border rounded-lg text-sm text-white placeholder-transparent outline-none transition-colors ${
                        newsletterError 
                          ? "border-red-400 focus:border-red-500" 
                          : "border-white/15 focus:border-[#C27D38]"
                      }`}
                    />
                    <label
                      htmlFor="newsletter-email"
                      className={`absolute left-4 top-3.5 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs ${
                        newsletterError
                          ? "text-red-400 peer-focus:text-red-400"
                          : "text-gray-400 peer-focus:text-[#C27D38]"
                      }`}
                    >
                      Email Address
                    </label>
                  </div>
                  {newsletterError && (
                    <span className="text-xs text-red-400 mt-1 pl-1">
                      {newsletterError}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="h-[46px] px-6 bg-[#C27D38] hover:bg-[#8C4F2B] text-white text-sm font-semibold rounded-lg transition-colors shadow-md shrink-0 self-start sm:self-auto"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar - Two Clean, Spacious Tiers */}
        <div className="mt-16 pt-8 border-t border-white/10 space-y-4 text-xs sm:text-sm text-gray-400">
          {/* Tier 1: Copyright & Legal Policies */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-gray-300">
              &copy; 2026 Chipinge Safari Area. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-300">
              <Link 
                href="/terms" 
                className="whitespace-nowrap hover:text-[#52b788] transition-colors underline underline-offset-4"
              >
                Terms &amp; Conditions
              </Link>
              <span className="text-white/20">•</span>
              <Link 
                href="/privacy" 
                className="whitespace-nowrap hover:text-[#52b788] transition-colors underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link 
                href="/park-rules" 
                className="whitespace-nowrap hover:text-[#52b788] transition-colors underline underline-offset-4"
              >
                Park Rules &amp; Wildlife Code
              </Link>
            </div>
          </div>

          {/* Tier 2: Conservation Partners & Credits */}
          <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
            <p className="text-center md:text-left">
              In partnership with <span className="text-white font-medium">ZIMPARKS</span> &amp; <span className="text-white font-medium">AWARE Germany e.V.</span>
            </p>
            <p className="text-center md:text-right pr-0 lg:pr-24">
              Web design and development by{" "}
              <a 
                href="https://zitrac.co.zw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#52b788] hover:text-white font-semibold underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#52b788] rounded"
              >
                ZITRAC
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
