export interface AboutAI {
  title: string;
  skills: string[];
}

export interface SkillsAI {
  title: string;
  about?: string;
}

export interface ProjectAI {
  title: string;
  technologies: string[];
  features: string[];
}

export interface ImproveAI {
  text: string;
}

export interface ResumeAI {
  title: string;
  experience: string;
  skills: string[];
}

export interface CoverAI {
  company: string;
  title: string;
  skills: string[];
}

export interface ATSAI {
  text: string;
}

export type AIRequest =
  | AboutAI
  | SkillsAI
  | ProjectAI
  | ImproveAI
  | ResumeAI
  | CoverAI
  | ATSAI;

export type AIType =
  | "about"
  | "project"
  | "improve"
  | "skills"
  | "resume"
  | "cover"
  | "ats";