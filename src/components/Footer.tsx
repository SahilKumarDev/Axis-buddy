import Link from "next/link";
import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <Card className="rounded-none bg-opacity-80 border-none outline outline-[0.1px] py-6 px-6 md:px-0 md:mx-auto outline-gray-100/40">
      <CardTitle className="flex md:justify-center gap-x-1 font-normal">
        © 2025 Doc Creation. All Rights Reserved.
        <span className="text-light-chai">Privacy Policy</span>
      </CardTitle>
    </Card>
  );
};

export default Footer;
