"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import TerminalPrompt from "./TerminalPrompt";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="skills" className="py-28 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Terminal Command Input */}
        <TerminalPrompt command="skills --list" />

        {/* Modern Categorized Panels Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {portfolioConfig.skills.map((category, idx) => {
            // Map "Web Development" to "Frontend" as requested by user
            const displayName = category.category === "Web Development" ? "Frontend" : category.category;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-[#0E0E0E] p-6 border border-white/5 flex flex-col hover:border-white/10 transition-colors duration-200"
              >
                {/* Category Header */}
                <h3 className="text-xs font-bold text-white uppercase tracking-widest font-sans border-b border-white/5 pb-4 mb-4 select-none">
                  {displayName}
                </h3>

                {/* Skill Badges Container */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono font-medium text-slate-350 bg-white/5 border border-white/5 hover:border-emerald-500/20 hover:text-emerald-400 transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
