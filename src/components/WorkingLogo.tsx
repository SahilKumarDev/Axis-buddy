import { InfiniteMovingLogos } from "./ui/infinite-moving-logos";

const WorkingLogo = () => {
  const data = [
    {
      logo: "/tools/framer.svg",
      name: "Framer",
    },
    {
      logo: "/tools/after-effects.svg",
      name: "After Effect",
    },
    {
      logo: "/tools/adobe-illustrator.svg",
      name: "Illustrator",
    },
    {
      logo: "/tools/figma.svg",
      name: "Figma",
    },
    {
      logo: "/tools/react.svg",
      name: "React",
    },
    {
      logo: "/tools/filmora.svg",
      name: "Filmora",
    },
  ];

  return (
    <div id="process" className="overflow-hidden mt-5">
      <InfiniteMovingLogos direction="left" speed="slow" items={data} />
    </div>
  );
};

export default WorkingLogo;
