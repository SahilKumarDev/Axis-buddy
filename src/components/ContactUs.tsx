import React from "react";
// import LetsMakeThingsHappenSection from "./ui/lets-make-things-happen";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import CustomButton from "./_components/CustomButton";

const ContactUs = () => {
  return (
    <>
      <Card className="dark:bg-accent bg-gray-100">
        <CardContent className="py-6">
          <p className="text-3xl font-medium">Let&apos;s make things happen</p>

          <p className="text-xl py-4">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <CustomButton className="w-full md:w-fit py-6" link={"/meeting"}>
            Book a Call
          </CustomButton>
          <div className="absolute -top-8 right-8 hidden md:block">
            <Image
              src="/images/proposal_illustration.png"
              alt="proposal illustration"
              width={300}
              height={300}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactUs;
