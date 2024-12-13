import { Card, CardContent, CardTitle } from "./ui/card";
import Link from "next/link";

const Footer = () => {
  return (
    <Card className="rounded-none bg-opacity-80 border-none outline outline-[0.1px] md:px-0 md:mx-auto outline-gray-100/40 ">
      <CardContent className="flex flex-col gap-2 md:flex-row md:justify-between py-6 items-center  ">
        <CardTitle className="flex md:justify-center gap-x-1 font-normal">
          © 2024 Villan Creation. All Rights Reserved.
        </CardTitle>

        <CardTitle className="flex md:justify-center gap-x-1 font-normal">
          Design and developed by
          <Link href={"https://sahilkumardev.netlify.app"} target="_blank">
            <span className="text-chai font-semibold">Sahil Kumar Dev</span>
          </Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default Footer;
