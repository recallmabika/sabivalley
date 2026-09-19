import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Chipinge Safari Area",
  description: "Official visitor terms, entry conditions, conservation rules, and booking policies for Chipinge Safari Area under ZIMPARKS regulations.",
};

export default function TermsPage() {
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
            <Shield className="w-6 h-6 text-[#1B3B2B]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#1B3B2B]">
              ZIMPARKS Protected Area Regulations
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#1B3B2B] mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-600">
            Last Updated: January 2026 • Governed by the Parks and Wild Life Act [Chapter 20:14] of Zimbabwe
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-gray-800 leading-relaxed text-base">
          
          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              1. Statutory Jurisdiction & Governance
            </h2>
            <p className="mb-3">
              Chipinge Safari Area is a state-gazetted protected wildlife conservation sanctuary administered under the authority of the Zimbabwe Parks and Wildlife Management Authority (ZIMPARKS), pursuant to the Parks and Wild Life Act [Chapter 20:14].
            </p>
            <p>
              By accessing, booking, or entering Chipinge Safari Area, all visitors, tour operators, researchers, and educational delegations unconditionally agree to abide by statutory park regulations, conservation decrees, and directives issued by authorized park rangers and administrative wardens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              2. Park Entry Permits & Reservation Inquiries
            </h2>
            <p className="mb-3">
              Entry into the safari area is restricted to holders of valid entry permits issued by ZIMPARKS SELR offices or authorized park gates.
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#1B3B2B] shrink-0 mt-0.5" />
                <span>All visitors must register their identification and official vehicle details at the entry reception.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#1B3B2B] shrink-0 mt-0.5" />
                <span>Inquiry submissions via this website serve as preliminary booking requests and are finalized upon formal permit issuance and fee clearance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#1B3B2B] shrink-0 mt-0.5" />
                <span>Operating hours for day visitors are strictly 06:00 to 18:00 daily unless specialized overnight camping or research authorization has been granted in writing.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              3. Guided Activities & Ranger Escort Mandatory Policy
            </h2>
            <p className="mb-3">
              Given the presence of free-roaming wildlife—including elephants, leopards, buffaloes, and diverse reptiles—walking safaris, botanical field tours, and educational trail expeditions require accompaniment by an armed professional park ranger.
            </p>
            <p>
              Unaccompanied pedestrian exploration beyond designated education base camps is strictly unlawful and endangers personal safety and conservation operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              4. Prohibited Conduct & Environmental Protection
            </h2>
            <p className="mb-3">
              To safeguard the delicate Sabi Valley Lowveld ecosystem, the following prohibitions are enforced under criminal penalty:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#1B3B2B] mb-1">Wildlife Harassment</h3>
                <p className="text-sm text-gray-600">Feeding, calling, pursuing, or disturbing any wildlife, bird species, or nesting areas is strictly prohibited.</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#1B3B2B] mb-1">Anti-Littering Policy</h3>
                <p className="text-sm text-gray-600">All non-biodegradable waste must be packed out. Dumping or discarding refuse carries immediate on-the-spot fines.</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#1B3B2B] mb-1">Flora Extraction</h3>
                <p className="text-sm text-gray-600">Collecting plant species, bark, timber, seeds, or medicinal specimens from the botanical reserve without a research permit is forbidden.</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#1B3B2B] mb-1">Fire Safety</h3>
                <p className="text-sm text-gray-600">Open campfires are restricted solely to designated braai areas at gazetted campsites. Discarded cigarette butts are strictly banned.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              5. Vehicle & Driving Regulations
            </h2>
            <p className="mb-2">
              Self-driving is permitted exclusively on demarcated tracks and public transit roads. Off-road driving destroys fragile riverine flora and is strictly forbidden.
            </p>
            <p className="text-sm text-gray-600">
              The maximum speed limit throughout the safari area is 40 km/h, and 20 km/h in animal transit corridors. Animals consistently have the right of way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              6. Limitation of Liability & Wilderness Risk Acknowledgement
            </h2>
            <p className="mb-3">
              Visits to natural wilderness reserves involve inherent risks associated with wild animals, uneven terrain, natural bodies of water, and changing weather conditions.
            </p>
            <p>
              Visitors enter the Chipinge Safari Area entirely at their own risk. Neither the Zimbabwe Parks and Wildlife Management Authority nor partnering educational bodies accept liability for personal injury, illness, property damage, loss of gear, or unforeseen natural occurrences. Comprehensive personal travel and medical evacuation insurance is strongly advised.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              7. Contact & Official Inquiries
            </h2>
            <p>
              For formal clarification on regulatory terms, research permits, educational group waivers, or institutional agreements, please contact the ZIMPARKS South East Lowveld Regional Office via email at{" "}
              <a href="mailto:info@chipingesafari.co.zw" className="text-[#1B3B2B] font-semibold underline">
                info@chipingesafari.co.zw
              </a>.
            </p>
          </section>

        </div>

        {/* Footer info link */}
        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-600">
          <Link href="/privacy" className="hover:text-[#1B3B2B] underline">
            Privacy Policy
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
