import WordPullUp from "@/components/magicui/word-pull-up";

interface WordPullUpDemoProps {
  heading: string;
  description: string;
}

export function WordPullUpDemo({ heading, description }: WordPullUpDemoProps) {
  return (
    <>
      <WordPullUp
        className="text-3xl md:text-5xl md:text-center font-medium"
        words={heading}
      />

      <p className="text-center text-xl md:text-2xl text-gray-500 pt-2 lg:pt-4">
       {description}
      </p>
    </>
  );
}
