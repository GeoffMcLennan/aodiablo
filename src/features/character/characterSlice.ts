import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRandomName } from '../../data/names';

export type Hero = 'amazon' | 'assassin' | 'barbarian' | 'druid' | 'necromancer' | 'paladin' | 'sorceress';

export interface CharacterState {
  hero: Hero;
  name: string;
  namePerm: boolean;
  level: number;
}

const initialState: CharacterState = {
  hero: 'amazon',
  name: getRandomName(),
  namePerm: false,
  level: 2,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    updateHero: (state, action: PayloadAction<Hero>) => {
      state.hero = action.payload
      if (!state.namePerm) {
        state.name = getRandomName();
      }
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.namePerm = true;
    },
    updateLevel: (state, action: PayloadAction<number>) => {
      if (action.payload > 2 && action.payload < 99)
      state.level = action.payload;
    },
    loadSavedCharacter: (state, action: PayloadAction<CharacterState | undefined>) => {
      if (action.payload) {
        state.hero = action.payload.hero;
        state.name = action.payload.name;
        state.namePerm = action.payload.namePerm;
        state.level = action.payload.level;
      } else {
        state.hero = initialState.hero;
        state.name = getRandomName();
        state.namePerm = initialState.namePerm;
        state.level = initialState.level;
      }
    },
  }
});

export const { updateHero, updateName, updateLevel, loadSavedCharacter } = characterSlice.actions;

export default characterSlice.reducer;