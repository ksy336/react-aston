import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./movieSlice/movieSlice";
import userReducer from "./userSlice/userSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  }
});