import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Attractions from "@/components/Attractions";
import EducationCentre from "@/components/EducationCentre";
import HerbalGarden from "@/components/HerbalGarden";
import Gallery from "@/components/Gallery";
import FAQSection from "@/components/FAQSection";
import BookingInquiry from "@/components/BookingInquiry";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingChatWidget from "@/components/FloatingChatWidget";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Attractions />
        <EducationCentre />

        {/* Shared background wrapper: Botanical Heritage → Gallery */}
        <div className="relative">
          <Image
            src="/images/safari/park-entrance.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#1B3B2B]/80" />
          <div className="relative z-10">
            <HerbalGarden />
            <Gallery />
          </div>
        </div>

        <FAQSection />
        <BookingInquiry />
      </main>
      <Footer />
      <FloatingChatWidget />
      <ScrollToTop />
    </>
  );
}
