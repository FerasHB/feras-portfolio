"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projekte"
      title="Ausgewählte Projekte mit Fokus auf Mobile, moderne UI und saubere Umsetzung."
      description="Hier zeige ich Projekte, an denen ich praktisch gearbeitet habe – mit Fokus auf klare Struktur, gute Nutzerführung und moderne Technologien."
    >
      <div className="relative">
        <motion.div
          animate={{ opacity: [0.24, 0.38, 0.24], scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-12 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.14),transparent_65%)] blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.16, 0.28, 0.16], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,120,255,0.10),transparent_65%)] blur-3xl"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
