import React from "react";

import { CoverDemo } from "./demos/cover-demo";
import CustomButton from "./_components/CustomButton";

import { InfiniteMovingLogos } from "./ui/infinite-moving-logos";
import ServiceCard from "./_components/ServiceCard";
import Image from "next/image";
import { WordPullUpDemo } from "./demos/word-pull-up-demo";
import { services } from "@/utils/data";
import { Card, CardContent } from "./ui/card";
import { AnimatedBeamMultipleOutputDemo } from "./demos/animated-beam-demo";
import BoxRevealDemo from "./demos/box-reveal-demo";
import { ShootingStarsAndStarsBackgroundDemo } from "./demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "./ui/lets-make-things-happen";

const HeroSection = () => {
  return (
    <main className="md:pb-10">
      <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-24">
        {/* <AnimatedShinyTextDemo /> */}

        <CoverDemo />

        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
          Schedule a call with us to discuss your project and get a quote in
          minutes
        </p>

        <div className="flex md:justify-center items-center gap-x-4">
          <CustomButton className="py-7 px-10 md:px-16 md:text-xl">
            Book a Call
          </CustomButton>
          <CustomButton
            variant={"outline"}
            className="py-7 px-10 md:px-16 md:text-xl"
          >
            Showcase
          </CustomButton>
        </div>

        <ServiceCard />

        <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
          {/* <div className="md:w-2/5">
            <h1 className="text-2xl font-medium text-gray-600 w-4/5">
              Trusted by fast moving brands worldwide
            </h1>

            <div className="flex my-6 gap-x-5 w-full">
              <div>
                <h1 className="text-blue-500 text-3xl md:text-5xl">
                  <NumberTicker value={1000} /> +
                  <p className="text-gray-500 text-sm md:text-md">
                    Happy Clients
                  </p>
                </h1>
              </div>

              <div className="w-px bg-gray-300 self-stretch"></div>

              <div className="flex-1 min-w-0">
                <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                  <NumberTicker value={100} /> +
                  <p className="text-gray-500 text-sm md:text-md">
                    Projects Completed
                  </p>
                </h1>
              </div>
            </div>
          </div> */}
        </div>

        <div className="mt-10">
          <div className="md:px-0 mx-6 md:mx-auto ">
            <WordPullUpDemo />

            <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
              All of our services are designed to help your business stand out
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="bg-gray-100 dark:bg-gray-500"
                >
                  <CardContent className="">
                    <Image
                      src={service.icon}
                      width={10000}
                      height={10000}
                      className="object-contain p-4 w-full h-40 rounded-md"
                      alt="image"
                    />
                    <h1 className="text-xl font-medium">{service.title}</h1>
                    <p className="">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <section id="guarantees" className="overflow-hidden mt-10 ">
          <InfiniteMovingLogos
            speed="slow"
            direction="left"
            items={[
              {
                logo: "/logo/logo.webp",
                name: "Logo",
              },
              {
                logo: "/logo/logo.webp",
                name: "Logo",
              },
            ]}
          />
        </section>

        <div className="mt-10">
          <main className="md:px-0 mx-6 md:mx-auto">
            <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
              Our{" "}
              <span className="text-blue-500 flex gap-x-1 items-center">
                {" "}
                <Image
                  src={"/icons/squiggle.svg"}
                  width={10000}
                  height={10000}
                  className="w-6"
                  alt="image"
                />
                Creative
                <Image
                  src={"/icons/star.svg"}
                  width={10000}
                  height={10000}
                  className="w-6 mb-8"
                  alt="image"
                />
              </span>{" "}
              Process
            </h1>

            <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
              All of our services are designed to help your business to get
              noticed.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <AnimatedBeamMultipleOutputDemo />
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
                <BoxRevealDemo />
              </div>
            </div>
          </main>
        </div>

        <h1 className="my-10 bg-red-500">Testinomial</h1>

        <div>
          <ShootingStarsAndStarsBackgroundDemo />
        </div>

        <section className="my-10 md:py-20  md:mx-auto">
          <LetsMakeThingsHappenSection />
        </section>
      </div>
    </main>
  );
};

export default HeroSection;
