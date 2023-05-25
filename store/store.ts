import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./movieSlice/movieSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer
  }
})