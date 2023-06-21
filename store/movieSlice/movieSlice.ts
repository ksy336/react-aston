import { createSlice } from '@reduxjs/toolkit';
import { MovieState } from './movieSlice-types';

const initialState: MovieState = {
  favorites: [],
  numberOfFavorites: 0,
  searchQuery: "",
  moviesBySearch: [],
  movieId: '',
}
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavoritesList(state, { payload }) {
      state.favorites.push(payload.id);
      state.numberOfFavorites += 1;
    },
    removeFromFavorites(state, action ) {
      state.favorites = state.favorites.filter((id) => id !== action.payload.id);
      if (state.numberOfFavorites < 1) return;
      state.numberOfFavorites -= 1;
    },
    findMovieBySearchQuery(state, { payload }) {
      state.searchQuery = payload;
    },
    setMoviesBySearch(state, { payload }) {
      state.moviesBySearch = payload;
    },
    setMovieId(state, {payload}) {
      state.movieId = payload;
    }
  }
});

export const { removeFromFavorites, addToFavoritesList, findMovieBySearchQuery, setMoviesBySearch, setMovieId} = movieSlice.actions;

export default movieSlice.reducer;