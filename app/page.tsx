import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-[#F1F5F9] font-sans selection:bg-white/10 selection:text-white">
      {/* Interactive Node/Grid Background Canvas */}
      <InteractiveBackground />

      {/* Header Status Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Recruiter-Friendly Footer */}
      <footer className="bg-[#0B0B0B] text-slate-500 border-t border-white/5 py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          
          {/* Echo Command Output */}
          <div className="flex items-center space-x-2 select-none">
            <span className="text-emerald-500 font-bold">thiroshika@portfolio</span>
            <span className="text-slate-500">:</span>
            <span className="text-blue-500 font-bold">~$</span>
            <span className="text-slate-300 font-bold ml-2">
              echo "Thanks for visiting!" && exit
            </span>
          </div>

          {/* System metadata */}
          <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Thiroshika &bull; Shell Exited
          </div>

        </div>
      </footer>
    </div>
  );
}
