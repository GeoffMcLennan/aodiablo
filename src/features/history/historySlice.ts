import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RandomizerState } from "../randomizer/randomizerSlice";

export interface HistoryState {
  rolls: Array<RandomizerState>;
  skillLevels: Record<string, number>;
}

const initialState: HistoryState = {
  rolls: [],
  skillLevels: {},
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, roll: PayloadAction<RandomizerState>) => {
      state.rolls.push(roll.payload);
      const skill = roll.payload.skill;
      if (state.skillLevels[skill]) {
        state.skillLevels[skill]++;
      } else {
        state.skillLevels[skill] = 1;
      }
    },
    popLastRoll: (state) => {
      const lastRoll = state.rolls.pop();
      if (lastRoll) {
        state.skillLevels[lastRoll.skill]--;
      }
    },
  }
});

export const { addToHistory, popLastRoll } = historySlice.actions;

export default historySlice.reducer;