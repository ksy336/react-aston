import { createSlice } from '@reduxjs/toolkit';
import { FavoriteState } from './favoriteState-types';

const initialState:FavoriteState = {
  favoriteMoviesList: []
}
const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    addFavoriteMovies(state, {payload}) {
      state.favoriteMoviesList.push(payload);
    },
    removeFromFavoriteMovies(state, {payload}) {
      state.favoriteMoviesList = state.favoriteMoviesList.filter((movie) => movie.id !== payload.id);
    }
  }
})
export const {addFavoriteMovies, removeFromFavoriteMovies} = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;