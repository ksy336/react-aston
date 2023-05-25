import { createSlice } from '@reduxjs/toolkit';
import { MovieState } from './movieSlice-types';

const initialState: MovieState = {
  favorites: [],
  numberOfFavorites: 0,
}
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites = [...state, action];
      state.numberOfFavorites += 1;
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter((item) => item.id !== action);
      if (state.numberOfFavorites < 0) return;
      state.numberOfFavorites -= 1;
    }
  }
});
export const {addToFavorites, removeFromFavorites} = movieSlice.actions;
export default movieSlice.reducer;