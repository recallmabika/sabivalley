import Link from "next/link";
import Image from "next/image";
import { activities as activityData } from "@/data/content";

export default function Footer() {
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
            <h4 className="text-lg font-heading font-semibold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="#experiences" className="hover:text-[#C27D38] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C27D38] rounded">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-[#C27D38] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C27D38] rounded">
                  Education Centre
                </Link>
              </li>
              <li>
                <Link href="#garden" className="hover:text-[#C27D38] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C27D38] rounded">
                  Medicinal Garden
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#C27D38] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C27D38] rounded">
                  Safari Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#C27D38] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C27D38] rounded">
                  Plan Your Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white tracking-wide">Experiences</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {activityData.map((activity) => (
                <li key={activity.id}>
                  <Link href="#experiences" className="hover:text-[#C27D38] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C27D38] rounded">
                    {activity.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white tracking-wide">Contact Us</h4>
            <address className="not-italic space-y-3 text-sm text-gray-300">
              <p>Chipinge Safari Area<br/>South East Lowveld Region<br/>Zimbabwe</p>
              <p className="pt-2">
                <span className="text-gray-400">Phone:</span> Contact ZIMPARKS SELR Office
              </p>
              <p>
                <a href="mailto:info@chipingesafari.co.zw" className="hover:text-[#C27D38] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C27D38] rounded">
                  Email: info@chipingesafari.co.zw
                </a>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            &copy; 2026 Chipinge Safari Area. All rights reserved.
          </p>
          <p className="text-center">
            In partnership with ZIMPARKS & AWARE Germany e.V.
          </p>
          <p>
            Web design and development by{" "}
            <a 
              href="https://zitrac.co.zw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#C27D38] hover:text-white font-semibold underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C27D38] rounded"
            >
              ZITRAC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
