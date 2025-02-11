import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pokedexImg from "@/public/pokedex.png";
import bookTrackerImg from "@/public/bookTrackerPic.png";
import theRoyalBlogImg from "@/public/theRoyalBlog.png";

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
      "Lead developer for this project. Users can search from all pokemon and be able to view their data in the original pokedex design.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "FramerMotion"],
    imageUrl: pokedexImg,
    url: "https://pokedex-og.vercel.app/",
  },
  {
    title: "Book Tracker",
    description:
      "Lead developer for this project. Users can list which books they want to read/are reading/have read in a modern & sleek layout.",
    tags: ["React", "Typescript", "Tailwind", "Firebase"],
    imageUrl: bookTrackerImg,
    url: "https://book-tracker-plum.vercel.app/",
  },
  {
    title: "The Royal Blog",
    description:
      "Lead developer for this project. Users can input their deepest thoughts and desires (or a random shower thought) in a medieval-themed layout.",
    tags: ["React", "Typescript", "Tailwind", "Firebase", "Google Authentication"],
    imageUrl: theRoyalBlogImg,
    url: "https://the-royal-blog.vercel.app/",
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
  "Java",
  "Figma",
  "Firebase",
  "Apollo Client"
] as const;