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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Attractions />
        <EducationCentre />
        <HerbalGarden />
        <Gallery />
        <FAQSection />
        <BookingInquiry />
      </main>
      <Footer />
      <FloatingChatWidget />
      <ScrollToTop />
    </>
  );
}
