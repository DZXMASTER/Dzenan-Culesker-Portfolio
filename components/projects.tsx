"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <motion.p 
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ delay: 5 }}
        className="flex w-full justify-center"
        >
          (Hint: Click Card for Project)
      </motion.p>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
                <Project {...project} />
            </React.Fragment>
          ))}
        </div>
    </section>
  );
}