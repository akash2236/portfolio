export type SkillLevel = 'Learning' | 'Proficient' | 'Strong';

export interface Skill {
  name: string;
  icon: string;
  level: SkillLevel;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export type ProjectStatus = 'COMPLETED' | 'IN DEVELOPMENT' | 'DESIGNING';

export interface ArchitectureStep {
  step: string;
  title: string;
  description: string;
  details?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryTags: string[];
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  problem: string;
  approach: string;
  architecture: ArchitectureStep[];
  techStack: string[];
  contributions: string[];
  outcomes?: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  featured: boolean;
  order: number;
  highlightMetric?: string;
  flowDiagram?: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  period: string;
  type: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export type AchievementType = 'AWARD' | 'CERTIFICATION' | 'QUALIFICATION';

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  issuer?: string;
  description: string;
  type: AchievementType;
  year: string;
  highlight?: boolean;
  badgeText?: string;
}

export interface LeadershipRole {
  title: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
  badge?: string;
}

export interface PhilosophyPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  principles: string[];
  icon: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}
