"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Code2, Play } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);

  // Subtle Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const yParallaxSpring = useSpring(yParallax, { stiffness: 100, damping: 40 });

  // Hover 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1.5deg", "-1.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1.5deg", "1.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        y: yParallaxSpring,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="glass-surface group relative flex flex-col overflow-hidden p-3 transition-colors duration-300 will-change-transform"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.06),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative mb-4 flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[20px] bg-gradient-to-br ${project.gradient} p-6 shadow-inner-glow`}
      >
        <div className="absolute inset-0 bg-[#06070B]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35 }}
          className="relative flex h-full flex-col justify-between"
        >
          <div>
            <span className="inline-flex rounded-full border border-white/[0.08] bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C5CEFF] shadow-inner-glow backdrop-blur-md">
              Project Preview
            </span>

            <h3 className="mt-6 text-[2.2rem] font-medium leading-[1.1] tracking-tight text-white drop-shadow-lg">
              {project.title}
            </h3>

            <p className="mt-2 text-[1.05rem] leading-snug text-[#E2E8FF] drop-shadow-md">
              {project.subtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.features.slice(0, 2).map((feature) => (
              <motion.div
                key={feature}
                className="min-w-[120px] flex-1 break-words rounded-2xl border border-white/[0.05] bg-black/30 px-4 py-2.5 text-[0.85rem] font-medium leading-relaxed text-[#D4DBFF] shadow-inner-glow backdrop-blur-md"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative px-3 pb-3 pt-2">
        <p className="text-[1.05rem] leading-[1.65] text-[#8F99C2]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/[0.04] bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-[#C5D0FF] shadow-inner-glow"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-3.5">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#69749C]">
            Features
          </p>

          <ul className="space-y-3 text-[0.95rem] text-[#A5B2D9]">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C8CFF]" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white shadow-inner-glow transition hover:bg-white/[0.06]"
          >
            <Code2 size={16} />
            Code ansehen
            <ArrowUpRight size={15} />
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#7C8CFF]/20 bg-[#7C8CFF]/10 px-5 py-2.5 text-sm font-medium text-[#D4DBFF] shadow-inner-glow transition hover:bg-[#7C8CFF]/20"
            >
              <Play size={16} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
