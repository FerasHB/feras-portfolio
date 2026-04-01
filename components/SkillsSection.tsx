"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Figma,
  GitBranch,
  Layers3,
  Monitor,
  Smartphone,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    description:
      "Mein Hauptfokus liegt auf modernen Apps für iOS, Android und Cross-Platform.",
    skills: ["iOS", "Android", "React Native", "Expo"],
  },
  {
    title: "iOS",
    icon: Layers3,
    description:
      "Entwicklung nativer iOS-Oberflächen mit sauberer Struktur und klarem UI-Fokus.",
    skills: ["Swift", "SwiftUI", "Navigation", "Core Data"],
  },
  {
    title: "Android",
    icon: Smartphone,
    description:
      "Android-Entwicklung mit Kotlin und typischen Architektur- und Datenmustern.",
    skills: ["Kotlin", "Jetpack", "Room", "Coroutines"],
  },
  {
    title: "Frontend / Web",
    icon: Monitor,
    description:
      "Moderne Weboberflächen mit Fokus auf Struktur, Responsiveness und klare Komponenten.",
    skills: ["React", "Next.js", "TypeScript", "Responsive UI"],
  },
  {
    title: "Backend / Data",
    icon: Database,
    description:
      "Arbeiten mit Daten, APIs und App-Logik für echte, nutzbare Produkte.",
    skills: ["Firebase", "REST APIs", "Retrofit", "Netzwerkdienste"],
  },
  {
    title: "Workflow / Design",
    icon: Figma,
    description:
      "Saubere Arbeitsweise von UI-Idee bis Entwicklung und Projektstruktur.",
    skills: ["Figma", "Git", "GitHub", "MVVM", "Repository Pattern"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="Technologien und Arbeitsweisen, mit denen ich moderne Apps und Webprojekte umsetze."
      description="Mein Fokus liegt auf Mobile Development, modernen Weboberflächen und einer sauberen, strukturierten Umsetzung."
    >
      <div className="relative">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.04, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.16),transparent_65%)] blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.18, 0.32, 0.18], y: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,120,255,0.12),transparent_65%)] blur-3xl"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="group surface-card relative overflow-hidden p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.14),transparent_28%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                  >
                    <Icon className="text-[#B9C5FF]" size={22} />
                  </motion.div>

                  <h3 className="mt-5 text-[1.7rem] font-semibold tracking-tight text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#AEB7DA]">
                    {group.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.25,
                          delay: index * 0.04,
                        }}
                        whileHover={{ y: -2, scale: 1.04 }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#E4E9FF] transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.07]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0.65 }}
                    whileHover={{ opacity: 1 }}
                    className="mt-6 flex items-center gap-2 text-sm text-[#8F99C2]"
                  >
                    <GitBranch size={14} />
                    Strukturiert & modern
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
