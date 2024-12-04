import WordPullUp from "@/components/magicui/word-pull-up";

export function WordPullUpDemo() {
  return (
    <>
      <WordPullUp
        className="text-3xl md:text-5xl md:text-center font-medium"
        words="Design & Code That Helps Your Business Grow"
      />

      <p className="text-center text-xl md:text-2xl text-gray-500 pt-2 lg:pt-4">
        All of our services are designed to help your business stand out
      </p>
    </>
  );
}
