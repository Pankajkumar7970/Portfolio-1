import { Code2, Database, Globe, Layers, Server, Shield, Smartphone, Terminal, Trophy, Users, Award, PenTool, CheckCircle, GraduationCap, Briefcase, Lock, Key } from 'lucide-react';
import { Project, Experience, Skill, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Pankaj Kumar",
  role: "Full-Stack Developer",
  tagline: "GATE 2026 qualified Computer Science undergraduate building secure, production-grade applications.",
  email: "kansalpankaj465@gmail.com",
  phone: "8054447340",
  linkedin: "https://www.linkedin.com/in/pankaj-kumar-539498264/",
  location: "Malout, Punjab, India",
  github: "https://github.com/Pankajkumar7970"
};

export const TIMELINE_DATA: Experience[] = [
  {
    year: "1st Year",
    title: "Foundation Building",
    subtitle: "B.Tech CSE Start",
    category: "Education",
    description: [
      "Got intrested in web development",
      "Mastered Fundamentals: HTML, CSS, JavaScript Basics",
      "Built first static web pages"
    ]
  },
  {
    year: "2nd Year",
    title: "MERN Stack & Growth",
    subtitle: "Skill Expansion",
    category: "Education",
    description: [
      "Started learning MERN stack",
      "Started building projects using MERN stack",
    ]
  },
  {
    year: "June 2024",
    title: "React Development Certification",
    subtitle: "Solitaire Infosys",
    category: "Experience",
    description: [
      "Learnt to implement reusable components using React.js and Hooks",
      "Learnt to manage global state with Context API/Redux",
      "Learnt to integrate RESTful APIs with Axios",
      "Learnt to design responsive layouts using Tailwind CSS & Material UI",
      "Won Best Intern Award at Solitaire Infosys"
    ]
  },
  {
    year: "3rd Year",
    title: "Hackathon & Projects",
    subtitle: "Application",
    category: "Milestone",
    description: [
      "Developed GameVerse PWA with Socket.io",
      "Created FinEduGuard for financial literacy",
      "Secured 7th Rank in PSB Hackathon Series"

    ]
  },
  {
    year: "4th Year",
    title: "Graduation & Gate Exam",
    subtitle: "Acadmic & Career Preparation",
    category: "Milestone",
    description: [
      "Developed VerifiedVote with secure remote voting platform",
      "Cleared GATE 2026 with AIR 6123 and Score: 524",
      "Placement Preparation with Coding Challenges and Interviews"
    ]
  },
  {
    year: "Present",
    title: "Role Seeking",
    subtitle: "Looking Forward",
    category: "Milestone",
    description: [
      "Refining Full Stack Skills",
      "Looking for Software Engineer Roles",
      "Ready to contribute to innovative projects"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "VerifiedVote — Secure Remote Voting Platform",
    description: "Production-grade civic-tech platform supporting end-to-end postal ballot digitisation for verified exceptional-case voters.",
    tags: ["React 19", "Vite", "TypeScript", "Node.js", "Express", "PostgreSQL", "Python", "FastAPI", "DeepFace", "OpenCV"],
    link: "https://verified-vote.vercel.app/",
    image: "/projects/verified-vote.png",
    features: [
      "AI microservice using DeepFace and OpenCV with passive liveness detection.",
      "End-to-end PII encryption via pgcrypto, encrypted MinIO document keys, and role-scoped JWT.",
      "4-stage admin approval state machine with PostgreSQL advisory locks on cron jobs.",
      "OTP authentication, Cloudflare Turnstile bot protection, Zod schema validation, and rate limiting."
    ]
  },
  {
    title: "FinEduGuard",
    description: "Cross-Platform Finance Education App delivering interactive personal finance simulations.",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Render"],
    link: "https://github.com/Pankajkumar7970/FinEduGuard-App",
    image: "/projects/fineduguard.png",
    features: [
      "Interactive simulations (budgeting, tax, investment, fraud detection) with dynamic scenario progression.",
      "Cross-platform parity on Android and iOS.",
      "RESTful backend services with user progress tracking, supporting concurrent session handling."
    ]
  },
  {
    title: "GameVerse",
    description: "Real-Time Multiplayer PWA (Tic-Tac-Toe, Rock-Paper-Scissors).",
    tags: ["React Native", "Node.js", "Expo", "Socket.io", "Render"],
    link: "https://pankaj465-sample--vtc0aekorw.expo.app",
    image: "/projects/gameverse.png",
    features: [
      "Socket.io bi-directional events achieving sub-100 ms move latency under concurrent load.",
      "Progressive Web App support.",
      "Real-time multiplayer game synchronization."
    ]
  },
  {
    title: "Wanderers Webpage",
    description: "Travel Showcase featuring destination carousels and a fully responsive layout.",
    tags: ["React.js", "Bootstrap", "Swiper.js", "Vercel"],
    link: "https://wanderers-self.vercel.app/",
    image: "/projects/wanderers.png",
    features: [
      "Visually rich travel showcase.",
      "Destination carousels using Swiper.js.",
      "Fully responsive layout optimised for all screen sizes."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js / Native", icon: Code2, category: "Frontend" },
  { name: "Node.js / Express", icon: Server, category: "Backend" },
  { name: "PostgreSQL / MongoDB", icon: Database, category: "Database" },
  { name: "TypeScript / JS", icon: Terminal, category: "Language" },
  { name: "Python", icon: Terminal, category: "Language" },
  { name: "Socket.io", icon: Globe, category: "Real-time" },
  { name: "Security / JWT", icon: Lock, category: "Concepts" },
  { name: "Git / Github", icon: CheckCircle, category: "Tools" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "GATE 2026 (CS/IT)",
    description: "AIR 6123 | Score: 524 (top-tier national engineering entrance exam).",
    icon: Award
  },
  {
    title: "7th Place — PSB Hackathon Series",
    description: "Competitive team-based development challenge.",
    icon: Trophy
  },
  {
    title: "1st Place — College Aptitude Test",
    description: "Secured first place in the college-wide aptitude test.",
    icon: Users
  },
  {
    title: "3rd Place — Project Presentation",
    description: "Secured 3rd place in Project Presentation Competition.",
    icon: PenTool
  }
];
