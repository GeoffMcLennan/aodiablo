import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RandomizerState } from "../randomizer/randomizerSlice";

export interface HistoryState {
  rolls: Array<RandomizerState>;
  skillLevels: Record<string, number>;
  promptState: number;
}

const initialState: HistoryState = {
  rolls: [],
  skillLevels: {},
  promptState: 0,
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
    loadSavedHistory: (state, action: PayloadAction<HistoryState | undefined>) => {
      if (action.payload) {
        state.rolls = action.payload.rolls;
        state.skillLevels = action.payload.skillLevels;
      } else {
        state.rolls = initialState.rolls;
        state.skillLevels = initialState.skillLevels;
      }
    },
    incrementPromptState: (state) => {
      if (state.promptState == 4) {
        state.promptState = 0;
      } else {
        state.promptState++;
      }
    },
  }
});

export const { addToHistory, popLastRoll, loadSavedHistory, incrementPromptState } = historySlice.actions;

export default historySlice.reducer;