import { createSlice } from '@reduxjs/toolkit';
import { MovieState } from './movieSlice-types';

const initialState: MovieState = {
  favorites: [],
  numberOfFavorites: 0
}
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavoritesList(state, action) {
      console.log(action)
      state.favorites = [...state.favorites, action.payload];
      state.numberOfFavorites += 1;
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
      if (state.numberOfFavorites < 1) return;
      state.numberOfFavorites -= 1;
    }
  }
});

export const { removeFromFavorites, addToFavoritesList} = movieSlice.actions;

export default movieSlice.reducer;