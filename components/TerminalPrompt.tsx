"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TerminalPromptProps {
  command: string;
}

export default function TerminalPrompt({ command }: TerminalPromptProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const intervalTime = 60;

    const typingTimer = setInterval(() => {
      if (index < command.length) {
        const char = command.charAt(index);
        setDisplayedText((prev) => prev + char);
        index++;
      } else {
        clearInterval(typingTimer);
        setIsTypingComplete(true);
      }
    }, intervalTime);

    return () => {
      clearInterval(typingTimer);
      setDisplayedText("");
      setIsTypingComplete(false);
    };
  }, [command, isInView]);

  return (
    <div
      ref={containerRef}
      className="font-mono text-xs sm:text-sm mb-6 flex items-center select-none"
    >
      <span className="text-slate-300 font-bold">thiroshika@portfolio</span>
      <span className="text-slate-500 font-bold">:</span>
      <span className="text-slate-400 font-bold">~$</span>
      <span className="text-slate-100 font-bold ml-2">
        {displayedText}
      </span>
      {/* Blinking grey terminal cursor */}
      <span
        className={`inline-block w-2.5 h-4 bg-slate-400 ml-1.5 ${
          isTypingComplete ? "animate-pulse" : ""
        }`}
        style={{
          animationDuration: "1s",
          opacity: isTypingComplete ? undefined : 1
        }}
      />
    </div>
  );
}
