import Image from "next/image";
import { WordPullUpDemo } from "./demos/word-pull-up-demo";
import { services } from "@/utils/data";
import { Card, CardContent } from "./ui/card";

const AboutUs = () => {
  return (
    <section>
      <WordPullUpDemo
        heading="Design & Code That Helps Your Business Grow"
        description="All of our services are designed to help your business stand out"
      />

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <Card key={service.title} className="bg-gray-100 dark:bg-accent">
            <CardContent>
              <Image
                src={service.icon}
                width={1000}
                height={1000}
                className="h-52 rounded-b-lg w-full object-cover  "
                alt="image"
              />
              <h1 className="text-xl font-medium mt-2">{service.title}</h1>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
