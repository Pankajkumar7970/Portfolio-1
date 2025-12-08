import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  features: string[];
}

export interface Experience {
  year: string;
  title: string;
  subtitle: string;
  description: string[];
  category: 'Education' | 'Experience' | 'Milestone';
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}
