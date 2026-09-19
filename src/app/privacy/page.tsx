import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Chipinge Safari Area",
  description: "Official privacy and data protection policy for visitors, educational institutions, and travelers interacting with Chipinge Safari Area digital services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFA] text-[#1B3B2B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-[#1B3B2B] hover:text-[#52b788] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Homepage
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 pb-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="w-6 h-6 text-[#1B3B2B]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#1B3B2B]">
              Information Governance & Data Protection
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#1B3B2B] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600">
            Last Updated: January 2026 • Compliant with Zimbabwe Data Protection Principles
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-gray-800 leading-relaxed text-base">
          
          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              1. Our Commitment to Privacy
            </h2>
            <p>
              Chipinge Safari Area respects your personal privacy. This statement explains how we gather, process, and protect information submitted when you interact with our website, request safari bookings, inquire about environmental education tours, or subscribe to conservation updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information that you deliberately provide when completing inquiries or coordinating park logistics:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-gray-700">
              <li>
                <strong>Contact Details:</strong> Full name, email address, telephone contact number.
              </li>
              <li>
                <strong>Visit Logistics:</strong> Group visitor count, preferred arrival dates, and requested primary safari activities (walking safaris, education centre tours, birding expeditions, botanical research).
              </li>
              <li>
                <strong>Inquiry Communications:</strong> Any specific notes, accessibility requests, or school curriculum details submitted in form messages.
              </li>
              <li>
                <strong>Newsletter Subscription:</strong> Email address for our occasional conservation bulletin.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              3. Purpose & Use of Collected Data
            </h2>
            <p className="mb-3">
              Data collected through this platform is utilized exclusively for genuine park operations and visitor coordination:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#1B3B2B] mb-1">Permit Preparation</h3>
                <p className="text-sm text-gray-600">Facilitating entry reservations with ZIMPARKS South East Lowveld regional rangers and scheduling professional guides.</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#1B3B2B] mb-1">Safety & Emergency Protocols</h3>
                <p className="text-sm text-gray-600">Maintaining accurate visitor manifests required for field safety, search-and-rescue, and ranger logs within the reserve.</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#1B3B2B] mb-1">Direct Correspondence</h3>
                <p className="text-sm text-gray-600">Responding directly to your queries regarding road conditions, accommodation, or educational workshops.</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#1B3B2B] mb-1">Conservation Bulletins</h3>
                <p className="text-sm text-gray-600">Distributing occasional newsletters regarding lowveld conservation programs and community botanical initiatives.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              4. Non-Disclosure & Third-Party Sharing
            </h2>
            <p className="mb-3">
              We never sell, rent, monetize, or trade your personal information with third-party advertisers or commercial entities.
            </p>
            <p>
              Information is solely shared with authorized statutory bodies (such as ZIMPARKS administrative personnel or emergency medical responders) when required by national law or for urgent visitor safety in the field.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              5. Data Security & Storage
            </h2>
            <p>
              All digital submissions are transmitted using industry-standard Transport Layer Security (TLS/HTTPS) encryption. Access to inquiry databases is restricted strictly to authorized park administration staff and verified rangers coordinating reservations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              6. Your Rights
            </h2>
            <p className="mb-3">
              Under applicable data protection statutes, you retain the right to:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-gray-700">
              <li>Request verification or a copy of any personal details held on record.</li>
              <li>Request amendment, correction, or deletion of your contact history.</li>
              <li>Unsubscribe from our newsletter at any time via written notice or direct reply.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              7. Privacy Contact
            </h2>
            <p>
              If you have any questions or requests concerning our handling of your personal data, please contact our administration at:
            </p>
            <div className="mt-3 p-4 rounded-lg bg-gray-50 border border-gray-200 inline-block">
              <p className="font-semibold text-[#1B3B2B]">Chipinge Safari Area Administration</p>
              <p className="text-sm text-gray-600">ZIMPARKS South East Lowveld Region, Zimbabwe</p>
              <p className="text-sm text-gray-600">
                Email:{" "}
                <a href="mailto:info@chipingesafari.co.zw" className="text-[#1B3B2B] underline font-medium">
                  info@chipingesafari.co.zw
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Footer info link */}
        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-600">
          <Link href="/terms" className="hover:text-[#1B3B2B] underline">
            Terms & Conditions
          </Link>
          <Link href="/park-rules" className="hover:text-[#1B3B2B] underline">
            Park Rules & Wildlife Code
          </Link>
          <Link href="/" className="hover:text-[#1B3B2B] underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
