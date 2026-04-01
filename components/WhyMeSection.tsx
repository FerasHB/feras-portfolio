"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Smartphone } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import SectionWrapper from "./SectionWrapper";

const highlights = ["Praktische Projekte", "Mobile & Web", "Saubere Umsetzung"];

const points = [
  {
    title: "Praktische Projekte",
    text: "Ich arbeite gern an echten Projekten, bei denen am Ende etwas Nutzbares entsteht – nicht nur eine schöne Oberfläche.",
    icon: Rocket,
  },
  {
    title: "Mobile Fokus",
    text: "Ein großer Teil meiner Arbeit liegt im Mobile-Bereich – mit Fokus auf iOS, Android und moderne App-Interfaces.",
    icon: Smartphone,
  },
  {
    title: "Schnelles Lernen",
    text: "Ich arbeite mich schnell in neue Themen ein und setze neue Anforderungen strukturiert und Schritt für Schritt um.",
    icon: Lightbulb,
  },
  {
    title: "Sauberer Code",
    text: "Mir ist wichtig, verständlichen Code zu schreiben, der klar aufgebaut ist und sich später gut weiterentwickeln lässt.",
    icon: Code2,
  },
];

export default function WhyMeSection() {
  return (
    <SectionWrapper
      id="why-me"
      eyebrow="Warum ich"
      title="Ich arbeite gern praktisch, denke in klaren Strukturen und lege Wert auf saubere Umsetzung."
      description="Mir ist wichtig, nicht nur moderne Oberflächen zu bauen, sondern Lösungen, die klar aufgebaut und im Alltag wirklich nutzbar sind."
    >
      <div className="relative">
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.04, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-12 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.14),transparent_65%)] blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.14, 0.28, 0.14], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,120,255,0.10),transparent_65%)] blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-6 flex flex-wrap gap-3"
        >
          {highlights.map((item) => (
            <motion.span
              key={item}
              whileHover={{ y: -2, scale: 1.03 }}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#DDE2F9]"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="group surface-card relative overflow-hidden p-6"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.12),transparent_30%)]" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <Icon className="text-[#B9C5FF]" size={22} />
                  </motion.div>

                  <h3 className="mt-5 text-[1.8rem] font-semibold tracking-tight text-white">
                    {point.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#B2BCDF]">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
