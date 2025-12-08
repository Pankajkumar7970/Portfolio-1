import { Code2, Database, Globe, Layers, Server, Shield, Smartphone, Terminal, Trophy, Users, Award, PenTool } from 'lucide-react';
import { Project, Experience, Skill, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Pankaj Kumar",
  role: "React & React Native Developer",
  tagline: "Building digital experiences with precision and creativity.",
  email: "kansalpankaj465@gmail.com",
  phone: "8054447340",
  linkedin: "https://www.linkedin.com/in/pankaj-kumar-539498264/",
  location: "Mohali, India"
};

export const TIMELINE_DATA: Experience[] = [
  {
    year: "1st Year",
    title: "Foundation Building",
    subtitle: "B.Tech CSE Start",
    category: "Education",
    description: [
      "Mastered Fundamentals: HTML, CSS, JavaScript Basics",
      "Data Structures & Algorithms in C++",
      "Built first static web pages"
    ]
  },
  {
    year: "2nd Year",
    title: "MERN Stack & Growth",
    subtitle: "Skill Expansion",
    category: "Education",
    description: [
      "Deep dive into MongoDB, Express, React, Node.js",
      "Started Competitive Programming",
      "GATE Preparation basics"
    ]
  },
  {
    year: "June 2024",
    title: "React Development Intern",
    subtitle: "Solitaire Infosys",
    category: "Experience",
    description: [
      "Implemented reusable components using React.js and Hooks",
      "Managed global state with Context API/Redux",
      "Integrated RESTful APIs with Axios",
      "Designed responsive layouts using Tailwind CSS & Material UI"
    ]
  },
  {
    year: "3rd Year",
    title: "Major Projects & Awards",
    subtitle: "Application",
    category: "Milestone",
    description: [
      "Developed GameVerse PWA with Socket.io",
      "Created FinEduGuard for financial literacy",
      "Secured 7th Rank in PSB Hackathon Series",
      "Won Best Intern Award at Solitaire Infosys"
    ]
  },
  {
    year: "Present",
    title: "Career Preparation",
    subtitle: "Looking Forward",
    category: "Milestone",
    description: [
      "Refining Full Stack Skills",
      "Advanced System Design",
      "Preparing for major industry roles"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "GameVerse App",
    description: "A Progressive Web App (PWA) multiplayer game platform built with React Native and Expo.",
    tags: ["React Native", "Node.js", "Socket.io", "Expo"],
    link: "https://pankaj465-sample--vtc0aekorw.expo.app/",
    features: [
      "Real-time multiplayer gaming (Rock Paper Scissors, Tic-Tac-Toe)",
      "Room management via Socket.io",
      "Cross-platform compatibility (Web & Mobile)"
    ]
  },
  {
    title: "FinEduGuard",
    description: "Financial education and security app promoting fraud awareness.",
    tags: ["React Native", "Express.js", "MongoDB", "Security"],
    features: [
      "Gamified financial quizzes",
      "Real-life fraud scenario simulations",
      "Secure coding: Encryption, SSL pinning, Root detection"
    ]
  },
  {
    title: "Wanderers Webpage",
    description: "A modern, responsive travel agency website providing immersive tour previews.",
    tags: ["React.js", "Swiper.js", "Tailwind"],
    link: "https://wanderers-self.vercel.app/",
    features: [
      "Immersive UI with Swiper.js animations",
      "Responsive tour package showcases",
      "Modern booking interface"
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", icon: Code2, category: "Frontend" },
  { name: "React Native", icon: Smartphone, category: "Mobile" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "Socket.io", icon: Globe, category: "Real-time" },
  { name: "Tailwind CSS", icon: Layers, category: "Styling" },
  { name: "Python", icon: Terminal, category: "Language" },
  { name: "Security", icon: Shield, category: "Concepts" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Best Intern Award",
    description: "Recognized for outstanding performance during internship at Solitaire Infosys.",
    icon: Award
  },
  {
    title: "Hackathon Winner",
    description: "Placed 7th in the PSB's Hackathon Series among hundreds of participants.",
    icon: Trophy
  },
  {
    title: "Aptitude Topper",
    description: "Secured first place in the college-wide aptitude test.",
    icon: Users
  },
  {
    title: "Story Writer",
    description: "Won Story Writing Competition twice at the college level.",
    icon: PenTool
  }
];
