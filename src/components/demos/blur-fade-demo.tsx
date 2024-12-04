import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Rubbish Brothers",
    link: "https://www.rubbishbrothers.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Atlas Massage",
    link: "https://www.atlasmassage.ca",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Canadian Security Solutions",
    link: "https://www.canadiansecuritysolutions.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Flight 9",
    link: "https://www.flight9.art",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Canadian Security Solutions",
    link: "https://www.canadiansecuritysolutions.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.webp",
    title: "Flight 9",
    link: "https://www.flight9.art",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-3 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={idx}
            delay={0.25 + idx * 0.05}
            inView
            className={` ${works[idx].background} bg-transparent `}
          >
            <Card className="bg-gray-100 dark:bg-current p-0 overflow-hidden">
              <CardContent className="p-0">
                <Link href={"#"} target="_blank" rel="noreferrer">
                  <Image
                    height={10000}
                    width={10000}
                    className="h-5/6 w-full object-cover"
                    src={imageUrl}
                    alt={`Random stock image ${idx + 1}`}
                  />

                  <CardFooter className="p-4 justify-between">
                    <CardTitle className="text-lg font-semibold dark:text-black">
                      {title}
                    </CardTitle>
                    <Button className="group">
                      View
                      <ArrowRight
                        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Button>
                  </CardFooter>
                </Link>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
