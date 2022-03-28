import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import characterReducer from '../features/character/character';
import randomizerReducer from '../features/randomizer/randomizerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    character: characterReducer,
    randomizer: randomizerReducer,
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
