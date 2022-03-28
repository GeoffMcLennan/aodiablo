export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly requiredLevel: number;
  readonly requiredSkills: string[];
  readonly image: string;
}

export * from './amazon';