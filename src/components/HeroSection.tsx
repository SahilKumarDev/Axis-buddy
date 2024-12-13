import CustomButton from "./_components/CustomButton";
import ServiceItem from "./_components/ServiceCard";
import { Cover } from "./ui/cover";

const services = ["UI/UX", "Development", "Editing", "Graphic"];

const HeroSection = () => {
  return (
    <main className="mt-14 lg:mt-20 space-y-4 lg:space-y-8">
      <h1 className="text-3xl md:text-6xl font-semibold max-w-7xl mx-auto md:text-center relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-10 text-center">
        Elevate your business with <br />{" "}
        <Cover>Villan Creation Services</Cover>
      </h1>

      <p className="text-center text-xl text-gray-500">
        Schedule a call with us to discuss your business and get a quote in
        minutes
      </p>

      <div className="md:flex md:justify-center items-center gap-x-4">
        <CustomButton
          className="py-7 px-10 md:px-16 md:text-xl w-full mb-4 md:mb-0"
          link="tel:89609743119"
        >
          Book a Call
        </CustomButton>
        <CustomButton
          link="/showcase"
          variant={"outline"}
          className="py-7 px-10 md:px-16 md:text-xl w-full"
        >
          Showcase
        </CustomButton>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 items-center text-left md:justify-items-center md:mx-auto pt-6 md:mt-16"
        id="service"
      >
        {services.map((service, index) => (
          <ServiceItem key={index} text={service} />
        ))}
      </div>
    </main>
  );
};

export default HeroSection;
