import { Button } from "@/components/ui/button";
import React from "react";

const CustomButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className="
      -mt-1 hover:bg-chai border-2 transition duration-200 
      hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
      hover:dark:shadow-[1px_1px_rgba(255,255,255),1px_1px_rgba(255,255,255),1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_0px_0px_rgba(255,255,255)]
    "
    >
      {children}
    </Button>
  );
};

export default CustomButton;
