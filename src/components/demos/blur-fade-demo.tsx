import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ShineBorder from "../ui/shine-border";

const works = [  
  {  
    title: "Shadwui Library",  
    link: "https://shadwui.com",  
    description: "Elements UI components for seamless web and app development.",  
    imageUrl: "/showcase/shadwui.png",  
  },  
  {  
    title: "Portfolio Website",  
    link: "https://sahilkumardev.netlify.app",  
    description: "A modern and responsive personal portfolio website.",  
    imageUrl: "/showcase/mainport.png",  
  },  
  {  
    title: "Zee Movies Hub",  
    link: "https://zeemoviehub.netlify.app",  
    description: "A dynamic movie streaming and discovery platform for free.",  
    imageUrl: "/showcase/mainzee.png",  
  },  
  {  
    title: "Case Cobra",  
    link: "https://casecobracase.vercel.app/",  
    description: "Customizable iPhone covers with unique designs and quality materials.",  
    imageUrl: "/showcase/case.png",  
  },    
  {  
    title: "Portfolio Website",  
    link: "https://sahilkumardev.vercel.app/",  
    description: "A sleek and professional personal branding platform.",  
    imageUrl: "/showcase/port.png",  
  },  
  {  
    title: "Zee Movies Hub Dashboard",  
    link: "https://zeemovieshubdashboard.netlify.app",  
    description: "An intuitive admin dashboard for managing movie content.",  
    imageUrl: "/showcase/zeedash.png",  
  },  
];


export function BlurFadeDemo() {
  return (
    <section className="grid md:grid-cols-3 gap-8 justify-items-center py-10">
      {works.map(({ imageUrl, title, link, description }, idx) => (
        <BlurFade
          key={idx}
          delay={0.25 + idx * 0.05}
          inView
          className="bg-transparent"
        >
          <Link href={link} target="_blank" rel="noreferrer">
            <ShineBorder
              borderRadius={10}
              className="md:shadow-xl p-0"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <Card className="bg-neutral-800">
                <CardContent className="px-4 pb-2">
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-56 object-cover rounded-b-lg bg-[#FFFFFF]"
                    src={imageUrl}
                    alt={`${title} project preview`}
                  />
                </CardContent>
                <CardFooter className="px-4 pb-0 flex-col">
                  <CardContent className="flex items-center justify-between w-full p-0">
                    <CardTitle className="flex items-center gap-2 text-gray-200 text-xl font-medium line-clamp-1">
                      {title}
                    </CardTitle>
                    <Button className="group text-light-chai" variant="link">
                      Live
                      <ArrowRight
                        className="hover:opacity-60 underline transition-transform group-hover:translate-x-0.5"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Button>
                  </CardContent>
                  <CardFooter className="w-full px-0 line-clamp-2 text-gray-300">
                    {description}
                  </CardFooter>
                </CardFooter>
              </Card>
            </ShineBorder>
          </Link>
        </BlurFade>
      ))}
    </section>
  );
}
