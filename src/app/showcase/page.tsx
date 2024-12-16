import ContactUs from "@/components/ContactUs";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
 

const Showcase = () => {
  return (
    <section className="px-4 lg:px-8 pb-10 mt-14">
      <WordPullUpDemo
        heading="Showcase My Current Work"
        description="Here is the project that we work until now."
      />

      <BlurFadeDemo />

      <ContactUs />
    </section>
  );
};

export default Showcase;
