import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/utils/data"; 

const Guarantees = () => {
  return (
    <Card className="mt-20 py-8 md:py-10 bg-neutral-900 relative">
      <h2 className="relative flex-col  text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our guarantees to you.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-auto px-8 ">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col bg-neutral-800 ">
            <CardContent className="py-4">
              <div className="w-16 p-4 animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br from-neutral-700 to-neutral-800 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <Image
                  src={feature.icon}
                  width={100}
                  height={100}
                  alt="icon"
                  className="w-8 h-8"
                />
              </div>

              <h3 className="text-xl font-bold mt-4 text-white">
                {feature.title}
              </h3>
              <p className=" text-gray-200">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </Card>
  );
};

export default Guarantees;
