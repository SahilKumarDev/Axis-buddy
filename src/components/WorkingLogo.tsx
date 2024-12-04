import React from "react";
import { InfiniteMovingLogos } from "./ui/infinite-moving-logos";

const WorkingLogo = () => {
  return (
    <div id="guarantees" className="overflow-hidden mt-5">
      <InfiniteMovingLogos
        direction="left"
        speed="slow"
        items={[
          {
            logo: "/logo/logo.webp",
            name: "Logo",
          },
          {
            logo: "/logo/logo.webp",
            name: "Logo",
          },
        ]}
      />
    </div>
  );
};

export default WorkingLogo;
