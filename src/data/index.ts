import { Hero } from '../features/character/characterSlice';
import { amazonSkills } from './amazon';
import { assassinSkills } from './assassin';
import { barbarianSkills } from './barbarian';
import { druidSkills } from './druid';
import { necromancerSkills } from './necromancer';
import { paladinSkills } from './paladin';
import { sorceressSkills } from './sorceress';

export interface Skill {
  readonly name: string;
  readonly requiredLevel: number;
  readonly requiredSkills: string[];
  readonly image: string;
}

export type SkillArray = Array<[string, Skill]>;

export * from './amazon';
export * from './assassin';
export * from './barbarian';
export * from './druid';
export * from './necromancer';
export * from './paladin';
export * from './sorceress';

export const allSkills: Record<Hero, Record<string, Skill>> = {
  amazon: amazonSkills,
  assassin: assassinSkills,
  barbarian: barbarianSkills,
  druid: druidSkills,
  necromancer: necromancerSkills,
  paladin: paladinSkills,
  sorceress: sorceressSkills,
}