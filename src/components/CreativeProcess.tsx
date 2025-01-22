import Image from "next/image";
import BoxRevealDemo from "./demos/box-reveal-demo";
import ProjectSlider from "./_components/ProjectSlider";
 
const CreativeProcess = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center ">
        Our
        <span className="text-chai flex gap-x-1 items-center">
          Creative
          <Image
            src={"/star.svg"}
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

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-y-6 md:py-10 md:">
        <div className="w-full order-1 ">
          <ProjectSlider speed="normal" />
        </div>

        <div className="order-2 md:min-w-96">
          <BoxRevealDemo />
        </div>
      </div>
    </div>
  );
};

export default CreativeProcess;
