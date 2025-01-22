import CreativeProcess from "@/components/CreativeProcess";
import { Testimonials } from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
import Guarantees from "@/components/Guarantees";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import WorkingLogo from "@/components/WorkingLogo";
import { testimonials } from "@/utils/data";

export default function Home() {
  return (
    <>
      <div className="background-gradient" />

      <div className="px-4 lg:px-8 space-y-14 pb-10">
        <HeroSection />
        <AboutUs />
        <WorkingLogo />
        <CreativeProcess />
        <Guarantees />
        <Testimonials speed="slow" items={testimonials} direction="right" />
        <ContactUs />
      </div>
    </>
  );
}
