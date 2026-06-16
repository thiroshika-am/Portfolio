export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    tagline: string;
    subTagline: string;
    email: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
  };
  skills: SkillCategory[];
  projects: Project[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Thiroshika",
    title: "AI & Data Science Student",
    tagline: "Welcome to my terminal! Exploring technology through projects, experimentation, and continuous learning. Every build is a step toward becoming a better engineer.",
    subTagline: "Focusing on systems, algorithms, and full-stack machine learning tooling.",
    email: "thiroshikaam@gmail.com",
    linkedin: "https://www.linkedin.com/in/thiroshika-a-m/",
    github: "https://github.com/thiroshika-am",
    resumeUrl: "#resume",
  },
  skills: [
    {
      category: "Languages",
      skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"]
    },
    {
      category: "Data Science",
      skills: ["NumPy", "Pandas", "Matplotlib", "Machine Learning"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Linux"]
    }
  ],
  projects: [
    {
      title: "Resume Analyzer",
      description: "An AI-powered ATS resume parsing tool that evaluates compliance, matches core keywords with job descriptions, and provides detailed suggestions for improvement.",
      tags: ["Python", "NLP", "React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/thiroshika-am/resume-analyzer",
      liveUrl: "https://resume-analyzer.example.com"
    },
    {
      title: "AI Career Coach",
      description: "An intelligent guidance platform offering mock interview simulations, customized roadmap suggestions, and skill gap analysis for engineering aspirants.",
      tags: ["Next.js", "TypeScript", "OpenAI API", "LangChain", "Tailwind CSS"],
      githubUrl: "https://github.com/thiroshika-am/ai-career-coach",
      liveUrl: "https://career-coach.example.com"
    },
    {
      title: "LeetCode Time Tracker",
      description: "A developer tool designed to track coding speeds, compile patterns of completed problems, and map progress against average benchmark times.",
      tags: ["React", "JavaScript", "Chrome Extension API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/thiroshika-am/leetcode-tracker",
      liveUrl: "https://leetcode-tracker.example.com"
    },
    {
      title: "Portfolio Website",
      description: "A premium, terminal-inspired developer portfolio designed to present clean, structured software engineering achievements.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/thiroshika-am/portfolio",
      liveUrl: "https://portfolio.example.com"
    }
  ]
};
