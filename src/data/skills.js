import {
  SiExpress,
  SiFigma,
  SiGit,
  SiMysql,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { TbApi, TbMessage2, TbPresentationAnalytics, TbUsers } from "react-icons/tb";

export const skillGroups = [
  {
    title: "Frontend Development",
    description: "Developing responsive interfaces and structured user flows for academic, organizational, and independent web projects.",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Development",
    description: "Implementing application logic, API integration, and backend foundations for full-stack web applications.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: TbApi },
    ],
  },
  {
    title: "Database",
    description: "Managing relational data and ORM-based workflows for features that depend on consistent, well-structured information.",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    title: "UI/UX Design",
    description: "Preparing interface concepts, user flows, and interactive prototypes based on product requirements and usability considerations.",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Prototype", icon: TbPresentationAnalytics },
    ],
  },
  {
    title: "Soft Skills",
    description: "Communication and collaboration practices developed through teamwork, presentations, organizational work, and project delivery.",
    skills: [
      { name: "Communication", icon: TbMessage2 },
      { name: "Adaptive", icon: TbUsers },
      { name: "Public Speaking", icon: TbPresentationAnalytics },
    ],
  },
];
