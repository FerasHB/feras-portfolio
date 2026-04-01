"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Play } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="surface-card group relative overflow-hidden p-6 shadow-soft transition-all duration-300"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.12),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative mb-6 overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br ${project.gradient} p-6`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.12))]" />

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35 }}
          className="relative flex min-h-[210px] flex-col justify-between"
        >
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
              Project Preview
            </span>

            <h3 className="mt-5 text-[1.9rem] font-semibold leading-tight tracking-tight text-white">
              {project.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/75">
              {project.subtitle}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.features.slice(0, 2).map((feature) => (
              <motion.div
                key={feature}
                whileHover={{ y: -2 }}
                className="min-w-[140px] flex-1 break-words rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-6 text-white/85 backdrop-blur-sm"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <p className="text-base leading-7 text-[#D8DDF5]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {project.tech.map((item) => (
            <motion.span
              key={item}
              whileHover={{ y: -2, scale: 1.03 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-[#E2E7FF]"
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#91A0D0]">
            Features
          </p>

          <ul className="space-y-2.5 text-sm text-[#BCC4E6]">
            {project.features.map((feature) => (
              <motion.li
                key={feature}
                whileHover={{ x: 2 }}
                className="flex items-start gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#91A0FF]" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Code2 size={16} />
            Code ansehen
            <ArrowUpRight size={15} />
          </motion.a>

          {project.liveUrl ? (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#8EA0FF2E] bg-[#8EA0FF12] px-4 py-2.5 text-sm font-medium text-[#D7DEFF] transition hover:bg-[#8EA0FF20]"
            >
              <Play size={16} />
              Live Demo
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
