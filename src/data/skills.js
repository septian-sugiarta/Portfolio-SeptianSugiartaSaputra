import {
  SiAngular,
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbMessage2, TbPresentationAnalytics, TbUsers } from "react-icons/tb";

export const skillGroups = [
  {
    title: "Frontend Development",
    description: "Developing modern, responsive, and accessible user interfaces with clean component architectures, Design Systems, and 90+ Lighthouse optimization standards.",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "AngularJS", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn/ui", icon: SiShadcnui },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Backend Development",
    description: "Architecting modular backend services, scalable microservices, RESTful API controllers, and secure data pipelines.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "RESTful API", icon: TbApi },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Database & ORM",
    description: "Designing normalized relational schemas, managing complex entity relationships, and executing efficient queries across enterprise databases.",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Version control, comprehensive API testing, interactive UI prototyping, and collaborative sprint delivery within Agile frameworks.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "Agile / Scrum", icon: TbUsers },
    ],
  },
  {
    title: "System Analysis & Languages",
    description: "BNSP-certified expertise in translating business requirements into technical solutions, paired with professional bilingual communication.",
    skills: [
      { name: "BNSP System Analyst", icon: TbPresentationAnalytics },
      { name: "Indonesian (Native)", icon: TbMessage2 },
      { name: "English (Professional)", icon: TbMessage2 },
    ],
  },
];
