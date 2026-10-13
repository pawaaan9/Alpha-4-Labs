import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiAnthropic,
  SiDocker,
  SiExpo,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiKotlin,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSwift,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export type Tech = {
  name: string;
  icon: IconType;
  color: string; // brand color shown on hover
};

export type TechGroup = {
  title: string;
  description: string;
  items: Tech[];
};

// Edit this list to match the technologies the team actually works with.
export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    description: "Fast, accessible interfaces",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Backend",
    description: "Secure, scalable APIs",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    title: "Mobile",
    description: "Native-quality apps",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#FFFFFF" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Swift", icon: SiSwift, color: "#F05138" },
    ],
  },
  {
    title: "Data",
    description: "Reliable storage at any size",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Automated, observable infrastructure",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Azure", icon: VscAzure, color: "#0078D4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
  {
    title: "AI & ML",
    description: "Practical, production AI",
    items: [
      { name: "Claude", icon: SiAnthropic, color: "#D97757" },
      { name: "LangChain", icon: SiLangchain, color: "#4FB79D" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    ],
  },
];

// Flat, de-duplicated list for the scrolling logo strip.
export const allTech: Tech[] = techGroups
  .flatMap((g) => g.items)
  .filter((t, i, arr) => arr.findIndex((x) => x.name === t.name) === i);

export function findTech(name: string): Tech | undefined {
  return allTech.find((t) => t.name === name);
}
