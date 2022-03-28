import { Hero } from '../features/character/character';
import { amazonSkills } from './amazon';


export interface Skill {
  readonly name: string;
  readonly requiredLevel: number;
  readonly requiredSkills: string[];
  readonly image: string;
}

export * from './amazon';

export const allSkills: Record<Hero, Record<string, Skill>> = {
  amazon: amazonSkills,
  
}