"use client";
import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const steps = [
  {
    title: "1. Connect",
    description: (
      <h2 className="text-lg pt-2 text-gray-500">
        Connect with us via
        <Link href={"/meeting"} className="text-[#3b82f6]"> meeting </Link>
      </h2>
    )
  },
  {
    title: "2. Collaborate",
    description: (
      <h2 className="text-lg pt-2 text-gray-500">
        Outline the scope of the project
      </h2>
    )
  },
  {
    title: "3. Create",
    description: (
      <h2 className="text-lg pt-2 text-gray-500">
        Leave the rest to us
      </h2>
    )
  }
];

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full grid items-center justify-center md:px-10 overflow-hidden space-y-8 text-center">
      {steps.map((step, index) => (
        <div key={index} >
          <BoxReveal width="100%" boxColor={"#3b82f6"} duration={0.5}>
            <p className="text-3xl flex-nowrap font-semibold ">{step.title}</p>
          </BoxReveal>
          <BoxReveal width="100%" boxColor={"#3b82f6"} duration={0.5}>
            {step.description}
          </BoxReveal>
        </div>
      ))}
    </div>
  );
};

export default BoxRevealDemo;