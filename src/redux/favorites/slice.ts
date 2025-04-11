import { FavoritesState } from './../../../types/favoritesState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      state.favorites = state.favorites.includes(id)
        ? state.favorites.filter(item => item !== id)
        : [...state.favorites, id];
    },
  },
});

export const { setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
