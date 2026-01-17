export enum ProfileType {
  A = 'A', // Sanguíneo/Influente
  B = 'B', // Colérico/Dominante
  C = 'C', // Melancólico/Conforme
  D = 'D', // Fleumático/Estável
}

export interface Option {
  id: string;
  text: string;
  type: ProfileType;
}

export interface Question {
  id: number;
  category: string;
  text: string;
  options: Option[];
}

export interface Keyword {
  id: string;
  text: string;
  type: ProfileType;
}

export interface ProfileResult {
  type: ProfileType;
  name: string;
  alias: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  color: string;
}

export type ScoreMap = Record<ProfileType, number>;