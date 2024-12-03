import Link from "next/link";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <Card className="rounded-none bg-opacity-80 border-none outline outline-[0.1px] py-6 px-6 md:px-0 md:mx-auto outline-gray-100/40">
      <CardContent className="flex-between">
        <Link href={"/"}>
          <h1 className="font-light">Doc Creation</h1>
        </Link>

        <div className="flex gap-4">
          {" "}
          <p className="text-left text-xl text-gray-500">8960-9731-19</p>
          <p className="text-left text-xl text-gray-500">
            admin@Doccreariotnsoftware.ca
          </p>
        </div>
      </CardContent>

      <Separator className="my-5 w-10/12 mx-auto" />

      <div className="flex md:justify-center gap-x-4">
        © 2025 Doc Creation. All Rights Reserved.
        <Link href="/" className="text-blue-500">
          Privacy Policy
        </Link>
      </div>
    </Card>
  );
};

export default Footer;
