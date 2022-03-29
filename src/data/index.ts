import { Hero } from '../features/character/characterSlice';
import { amazonSkills } from './amazon';


export interface Skill {
  readonly name: string;
  readonly requiredLevel: number;
  readonly requiredSkills: string[];
  readonly image: string;
}

export type SkillArray = Array<[string, Skill]>;

export * from './amazon';

export const allSkills: Record<Hero, Record<string, Skill>> = {
  amazon: amazonSkills,
  
}