export interface TechStackItem {
  name: string;
  icon: string;
  link: string;
}

export interface Project {
  name: string;
  desc: string;
  img: string;
  link: string;
  github: string;
  tech: string[];
}

export interface Certificate {
  name: string;
  desc: string;
  img: string;
  link: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  points: string[];
}
