import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { features } from "@/utils/data";
import Image from "next/image";

const Guarantees = () => {
  return (
    <Card className="mt-20 py-8 md:py-10 bg-neutral-900 relative">
      <h2 className="relative flex-col text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our guarantees to you
        <p className="md:text-center mx-auto text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-auto px-8 ">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col bg-neutral-800   ">
            <CardContent>
              <Image
                width={200}
                height={200}
                alt="guarantees"
                src={feature.image}
                className="w-full h-56 object-cover rounded-b-lg bg-[#FFFFFF]"
              />
              <CardTitle className="flex items-center gap-2 text-gray-200 text-xl font-medium mt-2">
                <span className="text-light-chai">{feature.icon}</span>{" "}
                {feature.title}
              </CardTitle>

              <p className=" text-gray-200 line-clamp-3">
                {feature.description}
              </p>
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
