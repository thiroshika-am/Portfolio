"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import TerminalPrompt from "./TerminalPrompt";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="projects" className="py-28 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Terminal Command Input */}
        <TerminalPrompt command="projects" />

        {/* Large Premium Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
        >
          {portfolioConfig.projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-[#0E0E0E] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top indicator bar (Terminal hybrid details) */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#121212] font-mono text-[10px] sm:text-xs text-slate-500 select-none">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-slate-400 transition-colors" />
                  <span>0{idx + 1}_exec.bin</span>
                </span>
                <span className="text-slate-600">[SYS_REG_0{idx + 1}]</span>
              </div>

              {/* Main Card Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  {/* Category/Path */}
                  <div className="text-xs font-mono text-slate-400 select-none">
                    path: /projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
                  </div>
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-none border border-white/5 bg-white/5 text-slate-350 select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between font-mono text-xs select-none">
                {/* Code link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors duration-150 py-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>[ code ]</span>
                </a>

                {/* Demo link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors duration-150 py-2 font-bold"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>[ launch_demo ]</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
