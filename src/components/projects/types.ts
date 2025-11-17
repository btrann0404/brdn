export interface Project {
  name: string;
  logo: string;
  alt: string;
  year: string;
  category: string;
  description: string;
}

export interface ProjectPosition {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  width: number;
  height: number;
}

export type ViewMode = 'experimental' | 'default';

