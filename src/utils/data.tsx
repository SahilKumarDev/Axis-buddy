import { BiSupport } from "react-icons/bi";
import { FaCode, FaHandshake, FaStopwatch, FaTools } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDynamicForm, MdOutlineSecurity } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

export const services = [
  {
    icon: "/service/ui.png",
    title: "UI Design",
    description:
      "Craft visually stunning and user-friendly interfaces for your digital products with our UI design services.",
  },
  {
    icon: "/service/ux.png",
    title: "UX Design",
    description:
      "Enhance user satisfaction by improving usability and accessibility through our UX design services.",
  },
  {
    icon: "/service/dev.png",
    title: "Web Development",
    description:
      "Bring your ideas to life with our top-notch web development services tailored to your business needs.",
  },
  {
    icon: "/service/graphic.png",
    title: "Graphic Design",
    description:
      "Elevate your brand with eye-catching visuals created through our professional graphic design services.",
  },
  {
    icon: "/service/logo-design.png",
    title: "Logo Design",
    description:
      "Create a memorable brand identity with a unique and impactful logo designed just for you.",
  },
  {
    icon: "/service/video.png",
    title: "Video Editing",
    description:
      "Engage your audience with high-quality videos edited to perfection with our video editing services.",
  },
];

export const features = [
  {
    image: "/check/delivery.svg",
    icon: <FaStopwatch size={24} />,
    title: "Rapid Project Delivery",
    description:
      "Achieve faster go-to-market with delivery timelines of just 1-2 weeks for most projects. Contact us.",
  },
  {
    image: "/check/dev.svg",
    icon: <FaCode size={28} />,
    title: "Innovative Design & Development",
    description:
      "Leverage cutting-edge technologies and design trends for websites that captivate and perform.",
  },
  {
    image: "/check/maintenance.svg",
    icon: <FaTools size={24} />,
    title: "Scalability & Maintenance",
    description:
      "Ensure seamless growth and reliability with our comprehensive scalability and maintenance services.",
  },
  {
    image: "/check/team.svg",
    icon: <FaHandshake size={28} />,
    title: "Expert Team Support",
    description:
      "Work with a highly skilled team of professionals, available to guide and assist you every step of the way.",
  },
  {
    image: "/check/security.svg",
    icon: <MdOutlineSecurity size={28} />,
    title: "Robust Security Standards",
    description:
      "Adopt secure development practices that safeguard your data and ensure operational integrity.",
  },
  {
    image: "/check/analytics.svg",
    icon: <TbReportAnalytics size={32} />,
    title: "Integrated Analytics Solutions",
    description:
      "Monitor performance and make data-driven decisions with our advanced analytics tools.",
  },
  {
    image: "/check/dynamic.svg",
    icon: <MdDynamicForm size={28} />,
    title: "Dynamic & Adaptable Websites",
    description:
      "Create versatile, easy-to-manage websites that evolve with your business needs.",
  },
  {
    image: "/check/support.svg",
    icon: <BiSupport size={28} />,
    title: "Round-the-Clock Support",
    description:
      "Experience peace of mind with 24/7 customer support, ensuring uninterrupted operations.",
  },
  {
    image: "/check/cost.svg",
    icon: <GiTakeMyMoney size={28} />,
    title: "Cost-Effective Solutions",
    description:
      "Benefit from premium services at competitive pricing, designed to suit businesses of all sizes.",
  },
];

export const creatorProfile = [
  {
    name: "Sahil Kumar Dev",
    img: "/images/owner.png",
  },
  {
    name: "Abhishek Goswami",
    img: "/images/abhishek-go.jpg",
  },
];

export const creationTopic = [
  { topic: "banner-editing" },
  { topic: "video-editing" },
  { topic: "website" },
];

export const works = [
  {
    title: "Shadwui Library",
    link: "https://shadwui.com",
    description: "Elements UI components for seamless web and app development.",
    imageUrl: "/showcase/shadwui.png",
    createrDetails: creatorProfile[0],
    value: creationTopic[2].topic,
  },
  {
    title: "Portfolio Website",
    link: "https://sahilkumardev.netlify.app",
    description: "A modern and responsive personal portfolio website.",
    imageUrl: "/showcase/mainport.png",
    createrDetails: creatorProfile[0],
    value: creationTopic[2].topic,
  },
  {
    title: "Zee Movies Hub",
    link: "https://zeemoviehub.netlify.app",
    description: "A dynamic movie streaming and discovery platform for free.",
    imageUrl: "/showcase/mainzee.png",
    createrDetails: creatorProfile[0],
    value: creationTopic[2].topic,
  },
  {
    title: "Case Cobra",
    link: "https://casecobracase.vercel.app/",
    description:
      "Customizable iPhone covers with unique designs and quality materials.",
    imageUrl: "/showcase/case.png",
    createrDetails: creatorProfile[0],
    value: creationTopic[2].topic,
  },
  {
    title: "Portfolio Website",
    link: "https://sahilkumardev.vercel.app/",
    description: "A sleek and professional personal branding platform.",
    imageUrl: "/showcase/port.png",
    createrDetails: creatorProfile[0],
    value: creationTopic[2].topic,
  },
  {
    title: "Zee Movies Hub Dashboard",
    link: "https://zeemovieshubdashboard.netlify.app",
    description: "An intuitive admin dashboard for managing movie content.",
    imageUrl: "/showcase/zeedash.png",
    createrDetails: creatorProfile[0],
    value: creationTopic[2].topic,
  },

  {
    title: "Invitation Design",
    link: "",
    description: "A captivating banner design for a digital marketing campaign.",
    imageUrl: "/data/1.svg",
    createrDetails: creatorProfile[1],
    value: creationTopic[0].topic,
  },
  {
    title: "Invitation Design",
    link: "",
    description: "A captivating banner design for a digital marketing campaign.",
    imageUrl: "/data/2.svg",
    createrDetails: creatorProfile[1],
    value: creationTopic[0].topic,
  },
  {
    title: "Invitation Design",
    link: "",
    description: "A captivating banner design for a digital marketing campaign.",
    imageUrl: "/data/3.svg",
    createrDetails: creatorProfile[1],
    value: creationTopic[0].topic,
  },
  {
    title: "Video Thumbnail",
    link: "",
    description: "A captivating video thumbnail for a YouTube channel.",
    imageUrl: "/data/video-thumb.svg",
    createrDetails: creatorProfile[1],
    value: creationTopic[1].topic,
  },
];
