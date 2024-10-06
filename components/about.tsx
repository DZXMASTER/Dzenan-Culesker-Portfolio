"use client";

import React from 'react';
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            After graduating with a degree in{" "}
            <span className="font-medium">Mechanical Engineering</span> and gained two years of experience, 
            I decided to switch to programming. I enrolled in the FreeCodeCamp online coding bootcamp and learned{" "}
            <span className="font-medium">Front-End Web Development</span>.{" "}
            Creating an <span className="underline">easy-to-navigate website</span> hits home for me. I dispise when
            a website feels like a labyrinth. My current arsenal
            consists of{" "}
            <span className="font-medium">
            React, Next.js, TypeScript, JavaScript, Python, C, and more 
            </span>
            {" "}{"(on my resume)"} as of now as I'm constantly learning new technologies. I am also familiar with Java and GitHub. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
        </p>

        <p>
            <span className="italic">In my spare time</span>, I enjoy playing
            a rousing game of Dungeons and Dragons with friends, and going to the gym.{" "}
            <span className="font-medium">Avid learner</span> are my middle names. Right now I'm
            learning about{" "}
            <span className="font-medium">nutrition and anatomy</span>. I do also plan on learning
            to play the violin.
        </p>
        </motion.section>
    )
}