import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass, ShieldAlert, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Park Rules & Wildlife Code | Chipinge Safari Area",
  description: "Official visitor code of conduct, wildlife safety distances, conservation guidelines, and environmental rules for Chipinge Safari Area.",
};

export default function ParkRulesPage() {
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
            <Compass className="w-6 h-6 text-[#1B3B2B]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#1B3B2B]">
              Conservation Protocol & Field Guidelines
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#1B3B2B] mb-4">
            Park Rules & Wildlife Code
          </h1>
          <p className="text-sm text-gray-600">
            Mandatory guidelines to preserve the Sabi Valley Lowveld ecosystem and ensure visitor safety under ZIMPARKS stewardship.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-800 leading-relaxed text-base">

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-3">
              The Golden Rule of the Wilderness
            </h2>
            <p className="italic text-lg text-[#1B3B2B] bg-[#1B3B2B]/5 p-4 rounded-xl border border-[#1B3B2B]/15">
              &ldquo;Take only photographs, leave only footprints, kill nothing but time, and respect every creature that calls this sanctuary home.&rdquo;
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-4">
              1. Wildlife Safety & Observation Distances
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200">
                <CheckCircle className="w-5 h-5 text-[#1B3B2B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1B3B2B]">Safe Wildlife Distances</h3>
                  <p className="text-sm text-gray-600">Maintain at least 30 meters from elephant herds, buffalo, and carnivores when in vehicles. Never position vehicles in a way that blocks an animal&apos;s natural exit path or access to waterholes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200">
                <CheckCircle className="w-5 h-5 text-[#1B3B2B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1B3B2B]">Never Alight from Vehicles</h3>
                  <p className="text-sm text-gray-600">Visitors on game drives must remain inside the vehicle at all times unless authorized by an armed ranger at designated picnic sites or vantage lookout points.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200">
                <CheckCircle className="w-5 h-5 text-[#1B3B2B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1B3B2B]">Silent Observation</h3>
                  <p className="text-sm text-gray-600">Loud noises, honking, music players, and shouting are strictly forbidden. Quiet observation ensures animals remain calm and behavior remains unhindered.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-4">
              2. Driving & Track Protocol
            </h2>
            <ul className="space-y-3 pl-4 list-disc text-gray-700">
              <li><strong>4x4 Vehicle Requirement:</strong> Interior safari tracks require high-clearance four-wheel-drive vehicles with low-range capability, especially during seasonal rains.</li>
              <li><strong>Strict Speed Restrictions:</strong> 40 km/h on main access tracks; 20 km/h in riverine and waterhole zones.</li>
              <li><strong>No Off-Road Driving:</strong> Deviating from designated tracks causes irreversible soil compaction and damages endangered indigenous flora.</li>
              <li><strong>Curfew:</strong> Gate curfews are active from 18:00 to 06:00. Night driving is only authorized during official ranger-guided nocturnal patrols.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-4">
              3. Unmanned Aerial Vehicles (Drones) & Specialized Photography
            </h2>
            <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900">Drone Flights are Strictly Regulated</h3>
                <p className="text-sm text-red-800">
                  Unlicensed drone operation is an offense across all national wildlife estates under Civil Aviation and ZIMPARKS statutory laws. Drones can induce stampedes and disturb birds of prey. Special permits must be secured 30 days in advance via ZIMPARKS headquarters.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-[#1B3B2B] mb-4">
              4. Environmental Care & Leave No Trace
            </h2>
            <ul className="space-y-3 pl-4 list-disc text-gray-700">
              <li><strong>Pack It In, Pack It Out:</strong> Bring your own trash bags and carry all waste back to main gate sorting bins.</li>
              <li><strong>Zero Specimen Harvesting:</strong> Collecting river stones, medicinal roots, wild seeds, or animal bones is strictly illegal.</li>
              <li><strong>Fire Discipline:</strong> Extinguish all campsite cooking fires with water before sleeping or vacating camps. Wildfires represent the gravest threat to lowveld habitats.</li>
            </ul>
          </section>

        </div>

        {/* Footer info link */}
        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-600">
          <Link href="/terms" className="hover:text-[#1B3B2B] underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-[#1B3B2B] underline">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-[#1B3B2B] underline">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
