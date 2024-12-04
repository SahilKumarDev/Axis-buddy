"use client";

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

export default ServiceItem;
