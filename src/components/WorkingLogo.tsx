import React from "react";
import { InfiniteMovingLogos } from "./ui/infinite-moving-logos";

const WorkingLogo = () => {
  return (
    <div id="process" className="overflow-hidden mt-5">
      <InfiniteMovingLogos
        direction="left"
        speed="slow"
        items={[
          {
            logo: "/yt.png",
            name: "Logo",
          },
          {
            logo: "/netflix.png",
            name: "Logo",
          },
        ]}
      />
    </div>
  );
};

export default WorkingLogo;
