"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";
import CustomButton from "./CustomButton";

const skillPills = [
  "iOS Development",
  "Android Development",
  "React Native",
  "Web Development",
];

const stackItems = [
  { label: "iOS", value: "SwiftUI", icon: Smartphone },
  { label: "Android", value: "Kotlin", icon: Smartphone },
  { label: "React Native", value: "Expo", icon: Code2 },
  { label: "Web", value: "Next.js / TypeScript", icon: Monitor },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + index * 0.07,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.85, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative overflow-hidden pb-14 pt-18 md:pb-20 md:pt-24"
    >
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: textY, opacity: textOpacity, willChange: "transform, opacity" }}
            className="relative"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm font-medium text-[#C5D0FF] shadow-inner-glow backdrop-blur-md">
              <Sparkles size={16} className="text-[#8C9EFF]" />
              Junior App & Web Developer aus NRW
            </div>

            <h1 className="gradient-text max-w-4xl text-[3.5rem] font-medium tracking-tighter sm:text-7xl lg:text-[6.4rem] lg:leading-[0.95]">
              Feras Hababa
            </h1>

            <h2 className="mt-6 max-w-3xl text-[2.2rem] font-medium tracking-tight text-[#E2E8FF] sm:text-[2.6rem] lg:text-[3rem] lg:leading-[1.1]">
              Moderne Apps für iOS, Android und Web.
            </h2>

            <p className="mt-6 max-w-2xl text-[1.1rem] leading-[1.7] text-[#8F99C2] md:text-[1.2rem]">
              Ich entwickle moderne Apps und Webanwendungen mit Fokus auf iOS,
              Android, React Native und TypeScript. Mein Ziel ist es, saubere,
              praktische und benutzerfreundliche Lösungen zu bauen.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {skillPills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#E3E8FF] backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CustomButton href="#projects" label="Projekte ansehen" />
              <CustomButton
                href="https://github.com/FerasHB"
                label="GitHub"
                external
                variant="secondary"
              />
              <CustomButton href="#contact" label="Kontakt" variant="ghost" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-10 flex items-center gap-3 text-sm text-[#B8C0E5]"
            >
              <ChevronDown size={16} />
              Scroll für Projekte, Skills und Kontakt
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ y: cardY, scale: cardScale, willChange: "transform" }}
            className="relative"
          >
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_25%_20%,rgba(124,140,255,0.18),transparent_30%),radial-gradient(circle_at_75%_30%,rgba(168,120,255,0.10),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(93,211,255,0.08),transparent_24%)] blur-3xl will-change-transform"
            />

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 110, damping: 18 }}
              className="relative mx-auto max-w-[540px]"
            >
              <div className="glass-surface p-2.5">
                <div className="overflow-hidden rounded-[20px] bg-[#0A0B10]">
                  <div className="flex items-center justify-between border-b border-white/8 px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-[#8EA0FF33] bg-[#8EA0FF14] px-3 py-1 text-[11px] text-[#BFCBFF]">
                        Open to Work
                      </span>
                    </div>
                  </div>

                  <div className="relative p-4 sm:p-4.5">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,140,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(110,89,255,0.10),transparent_25%)]" />

                    <div className="relative space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="rounded-[20px] border border-white/[0.04] bg-white/[0.02] p-5 shadow-inner-glow"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#7A85B3]">
                              Schwerpunkt
                            </p>
                            <h3 className="mt-3 max-w-sm text-[1.4rem] font-medium leading-[1.25] text-white">
                              Moderne Entwicklung für iOS, Android, React Native
                              und Web.
                            </h3>
                          </div>

                          <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                            className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3 shadow-inner-glow"
                          >
                            <Smartphone className="text-[#A2B4FF]" size={20} />
                          </motion.div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {["SwiftUI", "Kotlin", "React Native", "Next.js"].map(
                            (item) => (
                              <motion.span
                                key={item}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -1.5 }}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[#E3E8FF]"
                              >
                                {item}
                              </motion.span>
                            ),
                          )}
                        </div>
                      </motion.div>

                      <div className="grid gap-3.5 sm:grid-cols-2">
                        {stackItems.map((item, index) => {
                          const Icon = item.icon;

                          return (
                            <motion.div
                              key={item.label}
                              custom={index}
                              variants={cardVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover={{ y: -3, scale: 1.01 }}
                              className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300"
                            >
                              <div className="w-fit rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                                <Icon size={18} className="text-[#B9C5FF]" />
                              </div>

                              <p className="mt-4 text-sm text-[#98A3CC]">
                                {item.label}
                              </p>
                              <p className="mt-1 text-lg font-medium text-white">
                                {item.value}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.4 }}
                        className="grid gap-3.5 sm:grid-cols-[1.12fr_0.88fr]"
                      >
                        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                          <p className="text-sm text-[#98A3CC]">Arbeitsweise</p>
                          <p className="mt-2 text-base font-medium text-white">
                            Strukturierte Entwicklung mit Fokus auf echte,
                            nutzbare Produkte.
                          </p>
                        </div>

                        <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(129,140,255,0.14),rgba(129,140,255,0.05))] p-4">
                          <p className="text-sm text-[#C5CEFF]">Standort</p>
                          <p className="mt-2 text-base font-semibold text-white">
                            NRW, Germany
                          </p>
                          <p className="mt-1 text-sm text-[#D4DAFF]">
                            App & Web Developer
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
