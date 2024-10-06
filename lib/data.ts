import React from "react";
//import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
//import corpcommentImg from "@/public/corpcomment.png";
//import rmtdevImg from "@/public/rmtdev.png";
//import wordanalyticsImg from "@/public/wordanalytics.png";
import pokedexImg from "@/public/pokedex.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BootCamp",
    location: "Atlanta, GA",
    description:
      "Obtained certifications in Responsive Web Design, JavaScript Algorithms and Data Structures, and Front End Development Libraries.",
    icon: React.createElement(LuGraduationCap),
    date: "11/2023 - 04/2024",
  },
  {
    title: "Front-End Developer",
    location: "Atlanta, GA",
    description:
      "Working on side projects to gain experience and widen my toolset.",
    icon: React.createElement(FaReact),
    date: "05/2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Pokedex",
    description:
      "Front-End developer for this project. Users can input pokemon names from all pokemon and be able to see the attributes of the selected pokemon in the original pokedex design.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "FramerMotion"],
    imageUrl: pokedexImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Python",
  "Framer Motion",
  "C",
  "JQuery",
  "SASS",
  "Bootstrap",
  "Java"
] as const;