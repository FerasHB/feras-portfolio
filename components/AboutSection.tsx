"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { fadeInUp } from "@/styles/animations";
import SectionWrapper from "./SectionWrapper";

const infoCards = [
  ["Standort", "NRW, Germany"],
  ["Fokus", "iOS, Android & Web"],
  ["Arbeitsweise", "Strukturiert und praktisch"],
  ["Ziel", "Nutzbare Produkte bauen"],
];

const codeLines = [
  { indent: "", text: "const developer = {", color: "text-[#E8ECFF]" },
  { indent: "ml-4", text: 'name: "Feras Hababa",', color: "text-[#B7C3FF]" },
  {
    indent: "ml-4",
    text: 'focus: ["iOS", "Android", "React Native", "Web"],',
    color: "text-[#8EE6FF]",
  },
  {
    indent: "ml-4",
    text: 'mindset: "clean, practical, structured",',
    color: "text-[#C8B8FF]",
  },
  {
    indent: "ml-4",
    text: 'goal: "build real products"',
    color: "text-[#9FE3B0]",
  },
  { indent: "", text: "};", color: "text-[#E8ECFF]" },
];

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="Über mich"
      title="Ich entwickle Apps und Webprojekte, die klar aufgebaut sind und im Alltag wirklich Sinn machen."
      description="Mir ist wichtig, dass ein Produkt nicht nur modern aussieht, sondern auch sauber funktioniert und für Nutzer einfach zu verstehen ist."
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="surface-card relative overflow-hidden p-8 md:p-10"
      >
        <motion.div
          animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.03, 1] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(142,92,255,0.20),transparent_65%)] blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.25, 0.45, 0.25], y: [0, 10, 0] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(93,211,255,0.12),transparent_65%)] blur-3xl"
        />

        <div className="relative grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg leading-8 text-[#DDE2F9] md:text-xl">
              Ich komme aus NRW und entwickle Apps und Webprojekte mit Fokus auf
              klare Struktur, moderne Oberflächen und saubere Umsetzung. Mir
              gefällt es, wenn aus einer Idee etwas entsteht, das im Alltag
              wirklich nutzbar ist. Genau deshalb lege ich Wert darauf, nicht
              einfach nur etwas Schönes zu bauen, sondern etwas, das logisch
              aufgebaut ist und für Nutzer gut funktioniert.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {infoCards.map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300"
                >
                  <p className="text-sm text-[#98A3CB]">{label}</p>
                  <p className="mt-2 text-base font-medium text-white">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,120,255,0.10),transparent_30%)] blur-2xl"
            />

            <motion.div
              whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
              transition={{ type: "spring", stiffness: 110, damping: 18 }}
              className="relative [transform-style:preserve-3d]"
            >
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0B0D14]">
                  <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#C7CEEA]">
                      <Code2 size={14} className="text-[#AEBBFF]" />
                      Developer Notes
                    </div>
                  </div>

                  <div className="relative p-5 sm:p-6">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,140,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(110,89,255,0.10),transparent_25%)]" />

                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.15 }}
                      className="relative rounded-[22px] border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-[#8F99C2]">
                            About me
                          </p>
                          <p className="mt-2 text-base font-medium text-white">
                            So würde ich meine Arbeit beschreiben
                          </p>
                        </div>

                        <motion.div
                          animate={{ rotate: [0, 8, 0, -8, 0] }}
                          transition={{
                            duration: 6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                        >
                          <Sparkles size={18} className="text-[#B8C4FF]" />
                        </motion.div>
                      </div>

                      <div className="space-y-2 font-mono text-[13px] leading-7 sm:text-sm">
                        {codeLines.map((line, index) => (
                          <motion.div
                            key={line.text}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.35,
                              delay: 0.22 + index * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`${line.indent} ${line.color} break-words`}
                          >
                            {line.text}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {[
                        [
                          "Was mir wichtig ist",
                          "Klare Struktur statt unnötiger Komplexität",
                        ],
                        [
                          "Woran ich gern arbeite",
                          "Apps und Webprojekte mit echtem Nutzen",
                        ],
                      ].map(([title, text], index) => (
                        <motion.div
                          key={title}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.45,
                            delay: 0.45 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          whileHover={{ y: -3 }}
                          className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300"
                        >
                          <p className="text-sm text-[#98A3CC]">{title}</p>
                          <p className="mt-2 text-base font-medium text-white">
                            {text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
