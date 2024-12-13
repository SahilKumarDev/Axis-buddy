import ContactUs from "@/components/ContactUs";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";

const Showcase = () => {
  return (
    <section className="px-4 lg:px-8 space-y-14 pb-10 mt-14">
      <div>
        <WordPullUpDemo
          heading="Showcase"
          description="Here is the project that we work until now."
        />
      </div>
      <BlurFadeDemo />

      <ContactUs />
    </section>
  );
};

export default Showcase;
