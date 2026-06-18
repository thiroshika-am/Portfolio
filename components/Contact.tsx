"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import TerminalPrompt from "./TerminalPrompt";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const contacts = [
    {
      name: "Email",
      value: portfolioConfig.personal.email,
      href: `mailto:${portfolioConfig.personal.email}`,
      actionText: "Send message",
      color: "hover:border-white/10",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/thiroshika-a-m",
      href: portfolioConfig.personal.linkedin,
      actionText: "Connect now",
      color: "hover:border-blue-500/20",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      value: "github.com/thiroshika-am",
      href: portfolioConfig.personal.github,
      actionText: "Follow profiles",
      color: "hover:border-white/20",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "Resume",
      value: "Download document",
      href: portfolioConfig.personal.resumeUrl,
      actionText: "Download PDF",
      color: "hover:border-white/10",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-28 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Terminal Command Input */}
        <TerminalPrompt command="contact --info" />

        {/* Premium Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {contacts.map((contact, idx) => {
            const isEmail = contact.name === "Email";
            const CardComponent = isEmail ? motion.div : motion.a;

            return (
              <CardComponent
                key={idx}
                {...(isEmail
                  ? {}
                  : {
                      href: contact.href,
                      target: contact.name !== "Resume" ? "_blank" : undefined,
                      rel: contact.name !== "Resume" ? "noreferrer" : undefined,
                      whileHover: { y: -4 },
                    })}
                variants={itemVariants}
                className={`group bg-[#0E0E0E] p-6 border border-white/5 flex flex-col justify-between transition-all duration-300 ${
                  isEmail ? "" : contact.color
                }`}
              >
                <div className="space-y-4">
                  {/* Header Icon + Label */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-slate-500 uppercase select-none">
                      [{contact.name}]
                    </span>
                    {contact.icon}
                  </div>

                  {/* Details */}
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white font-sans truncate select-text">
                      {contact.value}
                    </div>
                    {!isEmail && (
                      <div className="text-[10px] font-mono text-slate-500">
                        action: {contact.actionText.toLowerCase().replace(/\s+/g, "_")}
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow Indicator */}
                {!isEmail && (
                  <div className="mt-6 flex items-center justify-between font-mono text-[10px] text-slate-400 group-hover:text-white transition-colors duration-150 select-none">
                    <span>[ interact ]</span>
                    <span>-&gt;</span>
                  </div>
                )}
              </CardComponent>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
