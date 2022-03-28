import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Hero = 'amazon' | 'assassin';

export interface CharacterState {
  hero: Hero;
  level: number;
  displayLevel: string;
}

const initialState: CharacterState = {
  hero: 'amazon',
  level: 1,
  displayLevel: '1',
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    updateHero: (state, action: PayloadAction<Hero>) => {
      state.hero = action.payload
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

export const { updateHero, updateLevel, updateDisplayLevel} = characterSlice.actions;

export default characterSlice.reducer;