"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";

export default function Hero() {
  const asciiBanner = `
████████╗██╗  ██╗██╗██████╗  ██████╗ ███████╗██╗  ██╗██╗██╗  ██╗ █████╗
╚══██╔══╝██║  ██║██║██╔══██╗██╔═══██╗██╔════╝██║  ██║██║██║ ██╔╝██╔══██╗
   ██║   ███████║██║██████╔╝██║   ██║███████╗███████║██║█████╔╝ ███████║
   ██║   ██╔══██║██║██╔══██╗██║   ██║╚════██║██╔══██║██║██╔═██╗ ██╔══██║
   ██║   ██║  ██║██║██║  ██║╚██████╔╝███████║██║  ██║██║██║  ██╗██║  ██╗
   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
  `.trim();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 bg-[#0B0B0B] overflow-hidden"
    >
      {/* Subtle background overlay grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col z-10">
        
        {/* Terminal Header Prompt */}
        <div className="space-y-2 text-xs sm:text-sm text-slate-500 font-mono select-none mb-10">
          <div className="flex items-center space-x-2">
            <span className="text-emerald-500 font-bold">thiroshika@portfolio</span>
            <span className="text-slate-500">:</span>
            <span className="text-blue-400">~$</span>
            <span className="text-slate-200">./about.sh --verbose</span>
          </div>
          <div className="text-[10px] sm:text-xs text-slate-600 font-medium pl-6 leading-relaxed">
            [SYS] Initializing core modules...
            <br />
            [SYS] Rendering ascii_banner.txt
          </div>
        </div>

        {/* ASCII Art Banner - Proportional viewport scaling prevents wrap */}
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[1.5vw] md:text-[0.9vw] leading-none text-emerald-400/90 font-bold select-none mb-12 overflow-x-auto whitespace-pre scrollbar-none font-mono"
        >
          {asciiBanner}
        </motion.pre>

        {/* Main Typographic Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-4xl"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[11px] font-bold text-emerald-400 font-mono tracking-wider uppercase select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Fall Internships</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.15] font-sans">
              Thiroshika A M
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 font-sans tracking-tight">
              AI & Data Science Student
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
              Building AI-powered applications, developer tools, and data-driven solutions.
            </p>
          </motion.div>

          {/* Action Row */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex flex-wrap items-center gap-4 text-xs font-mono select-none"
          >
            {/* Primary Action Button */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-none bg-emerald-500 hover:bg-emerald-400 text-[#0B0B0B] font-bold border border-emerald-500 hover:border-emerald-400 transition-all duration-200 tracking-wider shadow-sm hover:shadow-emerald-500/10"
            >
              [ View Projects ]
            </a>

            {/* Resume Button */}
            <a
              href={portfolioConfig.personal.resumeUrl}
              className="px-6 py-3 rounded-none bg-transparent hover:bg-white/5 text-slate-200 font-bold border border-white/10 hover:border-white/20 transition-all duration-200 tracking-wider"
            >
              [ Resume ]
            </a>

            {/* Separator */}
            <span className="hidden sm:inline text-slate-800 font-bold select-none mx-2">|</span>

            {/* Secondary Actions */}
            <div className="flex items-center space-x-4">
              <a
                href={portfolioConfig.personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-150 py-2"
              >
                GitHub
              </a>
              <a
                href={portfolioConfig.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-150 py-2"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Blink Cursor Prompt */}
        <div className="mt-16 font-mono text-xs text-slate-600 select-none">
          thiroshika@portfolio:~$ <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse align-middle" />
        </div>

      </div>
    </section>
  );
}
