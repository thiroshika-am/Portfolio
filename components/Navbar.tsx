"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "./about.sh", href: "#home", id: "home" },
    { name: "./projects.sh", href: "#projects", id: "projects" },
    { name: "./skills.sh", href: "#skills", id: "skills" },
    { name: "./contact.sh", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/85 backdrop-blur-md border-b border-white/5 py-4 px-6 font-mono text-xs select-none transition-all duration-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Terminal window mock header path */}
        <div className="flex items-center space-x-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
          <span className="text-slate-200 font-bold">thiroshika@portfolio</span>
          <span className="text-slate-400 font-bold">:~$</span>
        </div>

        {/* Directory links styled as brackets shell executables */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors font-medium ${
                activeSection === link.id ? "text-white font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>



      </div>
    </nav>
  );
}
