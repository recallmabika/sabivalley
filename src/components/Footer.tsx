import Link from "next/link";
import { TreePine, Facebook, Twitter, Instagram, Heart } from "lucide-react";
import { siteInfo, activities as activityData } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0F2A1D] text-[#F4EFEA] border-t border-[#1B3B2B]">
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-[#C27D38]">
              <TreePine className="w-8 h-8" />
              <span className="text-xl font-heading font-bold text-white tracking-wide">Chipinge Safari</span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience the untamed beauty of the South East Lowveld. A pristine wilderness dedicated to conservation and sustainable eco-tourism.
            </p>
            <div className="pt-4 border-t border-[#1B3B2B]/50">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">In Proud Partnership With</p>
              <div className="flex gap-4 items-center">
                <span className="font-semibold text-sm">ZIMPARKS</span>
                <span className="text-[#1B3B2B]">|</span>
                <span className="font-semibold text-sm">AWARE Trust</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#experiences" className="hover:text-[#C27D38] transition-colors">Experiences</Link></li>
              <li><Link href="#education" className="hover:text-[#C27D38] transition-colors">Education</Link></li>
              <li><Link href="#gallery" className="hover:text-[#C27D38] transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-[#C27D38] transition-colors">Plan Your Visit</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white">Experiences</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {activityData.map((activity) => (
                <li key={activity.id}><Link href="#experiences" className="hover:text-[#C27D38] transition-colors">{activity.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white">Contact Us</h4>
            <address className="not-italic space-y-3 text-sm text-gray-300">
              <p>Chipinge Safari Area<br/>South East Lowveld Region<br/>Zimbabwe</p>
              <p className="pt-2">
                <a href="tel:+263000000000" className="hover:text-[#C27D38] transition-colors">Phone: Contact ZIMPARKS SELR Office</a>
              </p>
              <p>
                <a href="mailto:info@chipingesafari.co.zw" className="hover:text-[#C27D38] transition-colors">Email: info@chipingesafari.co.zw</a>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#1B3B2B] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2026 Chipinge Safari Area. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            In partnership with ZIMPARKS & AWARE Trust <Heart className="w-3 h-3 text-[#C27D38]" />
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#C27D38] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#C27D38] transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#C27D38] transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
