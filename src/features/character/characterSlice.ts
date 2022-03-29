import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRandomName } from '../../data/names';

export type Hero = 'amazon' /* | 'assassin' */;

export interface CharacterState {
  hero: Hero;
  name: string;
  namePerm: boolean;
  level: number;
  displayLevel: string;
}

const initialState: CharacterState = {
  hero: 'amazon',
  name: getRandomName(),
  namePerm: false,
  level: 2,
  displayLevel: '2',
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
      state.level = action.payload
      state.displayLevel = action.payload.toString()
    },
    updateDisplayLevel: (state, action: PayloadAction<string>) => {
      state.displayLevel = action.payload
    },
  }
});

export const { updateHero, updateName, updateLevel, updateDisplayLevel} = characterSlice.actions;

export default characterSlice.reducer;