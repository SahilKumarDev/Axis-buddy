import ServiceCard from "@/components/_components/ServiceCard";
import CreativeProcess from "@/components/CreativeProcess";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
import Guarantees from "@/components/Guarantees";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <div className="background-gradient" />

      <div className="px-4 space-y-14">
        <HeroSection />
        <AboutUs />
        <CreativeProcess />
        {/* <Testimonials /> */}
        {/* <Guarantees /> */}
        {/* <ContactUs /> */}
      </div>
    </>
  );
}
