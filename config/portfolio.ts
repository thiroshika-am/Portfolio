export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
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
    title: "",
    tagline: "Welcome to my terminal! From ambitious ideas to working products, I enjoy building software, exploring new technologies, and learning through every challenge.",
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
      category: "Frontend",
      skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Database & Tools",
      skills: ["Git", "GitHub", "SQL", "MySQL", "Docker", "VS Code"]
    },
    {
      category: "Data Science",
      skills: ["Data Wrangling", "Exploratory Data Analysis (EDA)", "NumPy", "Pandas", "Matplotlib", "Seaborn"]
    }
  ],
  projects: [
    {
      title: "Resume Analyzer",
      description: "An AI-powered ATS resume parsing tool that evaluates compliance, matches core keywords with job descriptions, and provides detailed suggestions for improvement.",
      tags: ["Python", "NLP", "React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/thiroshika-am/resume-analyzer"
    },
    {
      title: "VisionX – Smart AI guide",
      description: "An assistive wearable device designed to improve navigation and accessibility through real-time obstacle detection and intelligent feedback.",
      tags: ["Python", "Computer Vision", "IoT", "Embedded Systems"],
      githubUrl: "https://github.com/thiroshika-am/blind_obstacle-_dection"
    },
    {
      title: "AI Career Coach",
      description: "An intelligent guidance platform offering mock interview simulations, customized roadmap suggestions, and skill gap analysis for engineering aspirants.",
      tags: ["Next.js", "TypeScript", "OpenAI API", "LangChain", "Tailwind CSS"]
    },
    {
      title: "Portfolio Website",
      description: "A premium, terminal-inspired developer portfolio designed to present clean, structured software engineering achievements.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    }
  ]
};
