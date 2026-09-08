export type Language = 'en' | 'ar';

export interface SceneInfo {
  id: number;
  code: string;
  slug: string;
  title: { en: string; ar: string };
  category: { en: string; ar: string };
}

export interface CapabilitySystem {
  id: string;
  code: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  description: { en: string; ar: string };
  metrics: { value: string; label: { en: string; ar: string } }[];
  technologies: string[];
  evidence: {
    badge: string;
    text: { en: string; ar: string };
  };
  highlights: { en: string; ar: string }[];
}

export interface Project {
  id: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  category: 'cross-platform' | 'flutter' | 'web';
  clientOrOrg: string;
  year: string;
  role: { en: string; ar: string };
  description: { en: string; ar: string };
  challenge: { en: string; ar: string };
  solution: { en: string; ar: string };
  metrics: { label: { en: string; ar: string }; value: string }[];
  technologies: string[];
  features: { en: string[]; ar: string[] };
  architectureNotes: { en: string; ar: string };
  link?: string;
  github?: string;
  accentColor: string;
  webPreview: {
    url: string;
    headline: { en: string; ar: string };
    subtext: { en: string; ar: string };
    stats: { label: string; value: string }[];
  };
  mobilePreview: {
    screenTitle: { en: string; ar: string };
    items: { title: string; subtitle: string; tag: string }[];
  };
}

export interface Review {
  id: string;
  clientName: string;
  clientRole: { en: string; ar: string };
  company: string;
  companyDomain: string;
  projectName: { en: string; ar: string };
  platform: 'Flutter & Web' | 'Flutter Native' | 'Enterprise Web' | 'Laravel & React' | 'Full-Stack & Mobile';
  reviewText: { en: string; ar: string };
  avatarInitials: string;
  verified: boolean;
  date: string;
  rating?: number;
}

export interface SkillCategory {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  iconName: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    description: { en: string; ar: string };
    featured?: boolean;
  }[];
  architecturalPillars: { en: string[]; ar: string[] };
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: { en: string; ar: string };
  company: { en: string; ar: string };
  location: { en: string; ar: string };
  type: 'Full-time' | 'Contract' | 'Lead';
  achievements: { en: string[]; ar: string[] };
  technologies: string[];
}
