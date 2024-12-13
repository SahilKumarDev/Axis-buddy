import CreativeProcess from "@/components/CreativeProcess";
import { Testimonials } from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
import Guarantees from "@/components/Guarantees";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import WorkingLogo from "@/components/WorkingLogo";

const testimonials = [
  {
    imageUrl: "/profile-1.png",
    name: "Sahil Kumar Dev",
    title: "Founder, CEO",
    quote:
      "As the founder, I value creativity and innovation. Villan Creation's designs have elevated our projects and impressed our clients every time.",
  },
  {
    imageUrl: "/profile-2.png",
    name: "Riya Verma",
    title: "Product Manager",
    quote:
      "Managing products requires attention to detail, and Villan Creation's solutions streamline our workflow and exceed expectations.",
  },
  {
    imageUrl: "/profile-2.png",
    name: "Arjun Singh",
    title: "Client",
    quote:
      "Working with Villan Creation has been a game-changer. Their designs perfectly align with our brand's vision and goals.",
  },
  {
    imageUrl: "/profile-3.png",
    name: "Jenny Wilson",
    title: "Abhishek Singh",
    quote:
      "Villan Creation is a trusted partner for innovative design. They consistently deliver top-notch quality that drives results.",
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
