"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Copy, Check } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { fadeInUp } from "@/styles/animations";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = "ferashababa@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    {
      label: "E-Mail",
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/FerasHB",
      href: "https://github.com/FerasHB",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/feras-hababa-a9227b337",
      href: "https://www.linkedin.com/in/feras-hababa-a9227b337/",
      icon: Linkedin,
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Kontakt"
      title="Lass uns über Projekte, Jobs oder eine Zusammenarbeit sprechen."
      description="Wenn du ein Projekt hast oder Unterstützung brauchst, schreib mir einfach – ich melde mich so schnell wie möglich zurück."
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-10"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -left-10 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.15),transparent_70%)] blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#D7DEFF]">
              Open to Work
            </span>

            <p className="mt-6 max-w-xl text-[1.1rem] leading-8 text-[#DDE2F9]">
              Wenn du an einer Zusammenarbeit interessiert bist oder einfach
              über ein Projekt sprechen möchtest, melde dich gerne bei mir.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#7C8CFF] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                E-Mail schreiben
                <Send size={16} />
              </a>

              {/* Copy fallback */}
              <button
                onClick={handleCopy}
                className="inline-flex w-fit items-center gap-2 text-sm text-[#AAB6E8] hover:text-white transition"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    E-Mail kopiert
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    E-Mail kopieren
                  </>
                )}
              </button>

              <p className="text-sm text-[#9AA5D1]">
                Antwort in der Regel innerhalb von 24 Stunden.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4 md:translate-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                      <Icon size={20} className="text-[#B9C5FF]" />
                    </div>

                    <div>
                      <p className="text-sm text-[#98A3CC]">{item.label}</p>
                      <p className="mt-1 text-white font-medium break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <Send
                    className="text-[#AAB6E8] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={18}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
