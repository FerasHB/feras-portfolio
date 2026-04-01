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
    <section id={id} className={`relative py-14 md:py-20 ${className}`}>
      <div className="container-main">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 md:mb-10"
        >
          {eyebrow ? (
            <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-[#C9D1F5]">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="section-title">{title}</h2>
          {description ? (
            <p className="section-subtitle mt-4">{description}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
