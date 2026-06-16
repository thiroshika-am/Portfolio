"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";

export default function Hero() {
  const asciiBanner = `
██████╗  ██████╗ ██████╗████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
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
      {/* Centered background glow colors - Greyish/monochromatic style */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,163,175,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center z-10">

        {/* ASCII Art Banner - Centered and colored slate-300 */}
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[1.3vw] md:text-[0.75vw] leading-none text-slate-300 font-bold select-none mb-12 overflow-x-auto whitespace-pre scrollbar-none font-mono text-center mx-auto"
        >
          {asciiBanner}
        </motion.pre>

        {/* Main Typographic Column - Centered layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-4xl flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] font-mono">
              Thiroshika
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3 flex flex-col items-center">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 font-mono tracking-tight">
              AI & Data Science Student
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl font-mono">
              Welcome to my terminal! Exploring technology through projects, experimentation, and continuous learning. Every build is a step toward becoming a better engineer.
            </p>
          </motion.div>

          {/* Action Row - Centered greyish buttons matching terminal aesthetic */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex flex-row items-center justify-center gap-4 text-xs font-mono select-none"
          >
            {/* Primary Action Button */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-slate-200 hover:bg-white text-[#0B0B0B] font-bold transition-all duration-200 tracking-wider shadow-sm"
            >
              View Projects
            </a>

            {/* Resume Button */}
            <a
              href={portfolioConfig.personal.resumeUrl}
              className="px-6 py-3 rounded-md bg-transparent hover:bg-white/5 text-slate-200 font-bold border border-white/25 hover:border-white/40 transition-all duration-200 tracking-wider"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
