import Image from "next/image";
import { AnimatedBeamMultipleOutputDemo } from "./demos/animated-beam-demo";
import BoxRevealDemo from "./demos/box-reveal-demo";

const CreativeProcess = () => {
  return (
    <div  >
      <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center ">
        Our
        <span className="text-chai flex gap-x-1 items-center">
          Creative
          <Image
            src={"/icons/star.svg"}
            width={10000}
            height={10000}
            className="w-6 "
            alt="image"
          />
        </span>
        Process
      </h1>

      <p className="text-center mx-auto text-xl md:text-2xl text-gray-500">
        All of our services are designed to help your business to get noticed.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-y-6">
        <div className="w-full order-2 md:order-1">
          <AnimatedBeamMultipleOutputDemo />
        </div>
        <div className="w-full order-1 md:order-2 md:ml-0">
          <BoxRevealDemo />
        </div>
      </div>
    </div>
  );
};

export default CreativeProcess;
