import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import CustomButton from "./_components/CustomButton";

const ContactUs = () => {
  return (
    <>
      <Card className="dark:bg-accent bg-gray-100">
        <CardContent className="py-6 flex gap-10 items-center">
          <div>
            <p className="text-3xl font-medium">
              Let&apos;s make things happen
            </p>

            <p className="text-xl py-4">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <CustomButton className="w-full md:w-fit py-6" link={"/meeting"}>
              Book a Call
            </CustomButton>
          </div>
          <div className="w-1/3 hidden md:block">
            <Image
              src="https://n1edx68t7x.ufs.sh/f/dXpVSNsUdw3TtSogCmrpdA5EUkeXqzFu4JZbfr8gonK7iG0c"
              alt="proposal illustration"
              width={300}
              height={300}
              className="h-4/6 w-4/6"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactUs;
