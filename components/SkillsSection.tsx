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
        <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.16),transparent_65%)] blur-3xl opacity-40 will-change-transform" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,120,255,0.12),transparent_65%)] blur-3xl opacity-30 will-change-transform" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            // Create a pseudo-bento layout by making the first item span wider
            const isWide = i === 0 || i === 3;

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`group glass-surface relative flex flex-col justify-between overflow-hidden p-7 ${
                  isWide ? "md:col-span-2" : ""
                }`}
              >
                {/* Massive decorative background icon */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.06]">
                  <Icon size={180} />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.06),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div>
                    <motion.div
                      whileHover={{ rotate: 4, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      className="inline-flex rounded-[14px] border border-white/[0.08] bg-white/[0.02] p-3 shadow-inner-glow"
                    >
                      <Icon className="text-[#A2B4FF]" size={22} />
                    </motion.div>

                    <h3 className="mt-5 text-[1.8rem] font-medium tracking-tight text-white drop-shadow-md">
                      {group.title}
                    </h3>

                    <p className="mt-2.5 text-[1.05rem] leading-[1.65] text-[#8F99C2]">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2.5">
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
                        className="rounded-full border border-white/[0.06] bg-black/20 px-3.5 py-1.5 text-[0.85rem] font-medium text-[#D4DBFF] shadow-inner-glow backdrop-blur-md transition-all duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.04]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
