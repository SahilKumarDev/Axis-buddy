import React from "react";
import { Cover } from "../ui/cover";

export function CoverDemo() {
  return (
    <h1 className="text-3xl md:text-6xl font-semibold max-w-7xl mx-auto md:text-center relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-10">
      Elevate your brand with <br /> <Cover>Bird Marketing Services</Cover>
    </h1>
  );
}
