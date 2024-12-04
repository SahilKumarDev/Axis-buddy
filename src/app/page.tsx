import CreativeProcess from "@/components/CreativeProcess";
import { Testimonials } from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
import Guarantees from "@/components/Guarantees";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import WorkingLogo from "@/components/WorkingLogo";

const testimonials = [
  {
    imageUrl: "/profile1.jpg",
    name: "Bessie Cooper",
    title: "Co-Founder, CEO",
    quote:
      '"We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."',
  },
  {
    imageUrl: "/profile2.jpg",
    name: "Albert Flores",
    title: "Senior Product Manager",
    quote:
      "\"I didn't know designing in Figma could be this individualized. I'd never considered it before, but Landingfolio changed my mind.",
  },
  {
    imageUrl: "/profile3.jpg",
    name: "Jenny Wilson",
    title: "Head of Marketing",
    quote:
      '"We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it."',
  },
];

export default function Home() {
  return (
    <>
      <div className="background-gradient" />

      <div className="px-4 lg:px-8 space-y-14 pb-10">
        <HeroSection />
        <AboutUs />
        <WorkingLogo />
        <CreativeProcess />
        <Testimonials speed="slow" items={testimonials} />
        <Guarantees />
        <ContactUs />
      </div>
    </>
  );
}
