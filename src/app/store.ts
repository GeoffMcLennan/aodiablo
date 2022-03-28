import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from '../features/character/character';
import randomizerReducer from '../features/randomizer/randomizerSlice';
import historyReducer from '../features/history/historySlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    randomizer: randomizerReducer,
    history: historyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
