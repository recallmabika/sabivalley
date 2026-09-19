import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Attractions from "@/components/Attractions";
import EducationCentre from "@/components/EducationCentre";
import Gallery from "@/components/Gallery";
import BookingInquiry from "@/components/BookingInquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Attractions />
        <EducationCentre />
        <Gallery />
        <BookingInquiry />
      </main>
      <Footer />
    </>
  );
}
