"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/styles/animations";

interface SectionWrapperProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      {/* Premium subtle glowing divider */}
      <div className="absolute left-0 right-0 top-0 flex justify-center opacity-70">
        <div className="h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
        <div className="absolute top-0 h-[1px] w-1/4 max-w-md bg-gradient-to-r from-transparent via-[#7C8CFF]/40 to-transparent blur-[1.5px]" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 md:mb-14 max-w-3xl"
        >
          {eyebrow ? (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-[0.85rem] font-medium uppercase tracking-[0.2em] text-[#A5B2D9] shadow-inner-glow backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C8CFF]" />
              {eyebrow}
            </span>
          ) : null}
          <h2 className="section-title mt-2 drop-shadow-md">{title}</h2>
          {description ? (
            <p className="section-subtitle mt-5">{description}</p>
          ) : null}
        </motion.div>
        
        {children}
      </div>
    </section>
  );
}
