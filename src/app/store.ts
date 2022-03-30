import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { 
  persistReducer, 
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import characterReducer from '../features/character/characterSlice';
import randomizerReducer from '../features/randomizer/randomizerSlice';
import historyReducer from '../features/history/historySlice';
import persistorReducer from '../features/persistor/persistorSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  character: characterReducer,
  randomizer: randomizerReducer,
  history: historyReducer,
  persistor: persistorReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
