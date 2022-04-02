import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill } from '../../data';
import { HistoryState } from '../history/historySlice';

export interface AttributeState {
  strength: number;
  dexterity: number;
  vitality: number;
  energy: number;
}

export interface RollState {
  attributes: AttributeState;
  skill: string;
  isSkillQuest?: boolean;
  isAttributeQuest?: boolean;
}

export interface AnimationState {
  isAnimating: boolean;
  isAnimatingSkill: boolean;
  isAnimatingAttributes: boolean;
  animationSkill: string;
  animationAttributes: AttributeState;
}

export interface RandomizerState extends RollState {
  animation?: AnimationState;
}

const initialState: RandomizerState = {
  attributes: {
    strength: 0,
    dexterity: 0,
    vitality: 0,
    energy: 0,
  },
  skill: '',
}

export interface RandomizeProps {
  readonly skillCandidates: Array<[string, Skill]>;
}

export const randomizerSlice = createSlice({
  name: 'randomizer',
  initialState,
  reducers: {
    updateAttributes: (state) => {
      state.attributes = generateRandomAttributes();
    },
    randomize: (state, props: PayloadAction<RandomizeProps>) => {
      const attributes = generateRandomAttributes();
      state.attributes = attributes;
      const skill = pickRandomSkill(props.payload.skillCandidates);
      state.skill = skill;
    },
    update: (state, newState: PayloadAction<RandomizerState>) => {
      state.attributes = newState.payload.attributes;
      state.skill = newState.payload.skill;
      if (state.animation) {
        state.animation.isAnimating = false;
        state.animation.isAnimatingSkill = false;
        state.animation.isAnimatingAttributes = false;
      }
    },
    setAnimationFrame: (state, animation: PayloadAction<AnimationState>) => {
      state.animation = animation.payload;
    },
    stopAnimation: (state) => {
      if (state.animation) {
        state.animation.isAnimating = false;
        state.animation.isAnimatingSkill = false;
        state.animation.isAnimatingAttributes = false;
      }
    },
    loadSavedRandomizer: (state, action: PayloadAction<HistoryState | undefined>) => {
      if (action.payload && action.payload.rolls.length) {
        const lastRoll = action.payload.rolls[action.payload.rolls.length - 1];
        state.skill = lastRoll.skill;
        state.attributes = lastRoll.attributes;
      } else {
        state.skill = initialState.skill;
        state.attributes = initialState.attributes;
      }
    },
  }
});

export const { updateAttributes, update, setAnimationFrame, stopAnimation, loadSavedRandomizer } = randomizerSlice.actions;

export const generateRandomAttributes = (suppressLogs?: boolean): AttributeState => {
  let strRand = Math.random();
  let dexRand = Math.random();
  let vitRand = Math.random();
  let ergRand = Math.random();
  let total = strRand + dexRand + vitRand + ergRand;
  strRand *= 5 / total;
  dexRand *= 5 / total;
  vitRand *= 5 / total;
  ergRand *= 5 / total;
  !suppressLogs && console.log(`Str: ${strRand}\nDex: ${dexRand}\nVit: ${vitRand}\nErg: ${ergRand}`)
  strRand = Math.round(strRand);
  dexRand = Math.round(dexRand);
  vitRand = Math.round(vitRand);
  ergRand = Math.round(ergRand);
  total = strRand + dexRand + vitRand + ergRand;
  !suppressLogs && console.log(total)
  if (total < 5) {
    !suppressLogs && console.log('Total less than five');
    const arr = [strRand, dexRand, vitRand, ergRand];
    const num = Math.floor(Math.random() * 4);
    !suppressLogs && console.log(`Adding to index ${num}`);
    arr[num] += 1;
    [strRand, dexRand, vitRand, ergRand] = arr;
  }
  while(total > 5) {
    !suppressLogs && console.log('Total greater than five');
    const arr = [strRand, dexRand, vitRand, ergRand];
    const num = Math.floor(Math.random() * 4);
    !suppressLogs && console.log('Attempting subtract from index ' + num);
    if (arr[num] > 0) {
      arr[num] -= 1;
    } else {
      !suppressLogs && console.log('Can\'t subtract, number already 0');
    }
    [strRand, dexRand, vitRand, ergRand] = arr;
    total = strRand + dexRand + vitRand + ergRand;
  }
  return {
    strength: strRand,
    dexterity: dexRand,
    vitality: vitRand,
    energy: ergRand,
  }
}

export const pickRandomSkill = (skillCandidates: Array<[string, Skill]>): string => {
  console.log(`Picking skill from candidates: ${skillCandidates.map(skill => skill[1].name).join(', ')}`);
  const rand = Math.floor(Math.random() * skillCandidates.length);
  console.log(`Picked ${skillCandidates[rand][1].name}`);
  return skillCandidates[rand][0];
}

export default randomizerSlice.reducer;