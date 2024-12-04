"use client";

import React from "react";
import { PiCheckBold } from "react-icons/pi";
import BoxReveal from "@/components/magicui/box-reveal";

const ServiceItem = ({ text }: { text: string }) => (
  <BoxReveal boxColor={"#ff851a"} duration={0.5}>
    <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
      <PiCheckBold className="text-xl text-blue-500" />
      {text}
    </p>
  </BoxReveal>
);

export const ServiceCard = () => {
  const services = ["Design", "Development", "Marketing", "Strategy"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
      {services.map((service, index) => (
        <ServiceItem key={index} text={service} />
      ))}
    </div>
  );
};

export default ServiceCard;
