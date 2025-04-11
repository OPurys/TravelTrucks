import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/slice';
import favoritesReducer from './favorites/slice';
import scrollReducer from './scrollUp/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FavoritesState } from '../../types/favoritesState';

const persistConfig = {
  key: 'favorites',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: persistReducer<FavoritesState>(persistConfig, favoritesReducer),
    scroll: scrollReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
