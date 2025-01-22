"use client";

import { PiCheckBold } from "react-icons/pi";
import BoxReveal from "@/components/magicui/box-reveal";
import { TextShimmerWave } from "../ui/text-shimmer-wave";

const ServiceItem = ({ text }: { text: string }) => (
  <BoxReveal boxColor={"#ff851a"} duration={0.5}>
    <div className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
      <PiCheckBold className="text-xl text-blue-500" />
      <TextShimmerWave
        duration={3}
        spread={1}
        zDistance={1}
        scaleDistance={1.1}
        rotateYDistance={20}
      >
        {text}
      </TextShimmerWave>
    </div>
  </BoxReveal>
);

export default ServiceItem;
