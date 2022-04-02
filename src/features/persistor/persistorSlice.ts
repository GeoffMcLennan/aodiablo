import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CharacterState } from '../character/characterSlice';
import { HistoryState } from '../history/historySlice';

export interface PersistedState {
  readonly saves: Array<[string, SaveState]>;
}

export interface SaveState {
  readonly history: HistoryState;
  readonly character: CharacterState;
}

const initialState: PersistedState = {
  saves: []
}

export const persistorSlice = createSlice({
  name: 'persistor',
  initialState,
  reducers: {
    updateSaveState: (state, action: PayloadAction<SaveState>) => {
      const save = state.saves.find(val => val[0] === action.payload.character.name);
      if (save) {
        save[1].character = action.payload.character;
        save[1].history = action.payload.history;
      } else {
        state.saves.push([action.payload.character.name, action.payload]);
      }
    },
    updateSaveName: (state, action: PayloadAction<{ newName: string, oldName: string }>) => {
      const save = state.saves.find(val => val[0] === action.payload.oldName);
      if (save) {
        save[0] = action.payload.newName;
      }
    }
  },
});

export const { updateSaveState, updateSaveName } = persistorSlice.actions; 

export default persistorSlice.reducer;