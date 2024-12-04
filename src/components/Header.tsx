"use client";

import CustomButton from "@/components/_components/CustomButton";
import { TheamToggler } from "@/components/TheamToggler";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  const NAV_ITEM = [
    { label: "Showcase", href: "/showcase" },
    { label: "Service", href: "services" },
    { label: "Process", href: "process" },
    { label: "Guarantee", href: "guarantees" },
  ];
  return (
    <Card className="top-5 sticky md:mx-auto z-10 xl:w-10/12 flex-between py-4 px-4 md:px-8 mx-6">
      <Link href={"/"}>
        <h1 className="font-light">Doc Creation</h1>
      </Link>

      <CardContent className="py-0 px-0 hidden gap-x-4 md:flex items-center">
        {NAV_ITEM.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <Button variant={"ghost"} className="hover:text-light-chai">
                {item.label}
              </Button>
            </Link>
          );
        })}
        <CustomButton>Book a Call</CustomButton>
      </CardContent>
      <TheamToggler />
    </Card>
  );
};

export default Header;
