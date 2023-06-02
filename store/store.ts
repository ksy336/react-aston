import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./movieSlice/movieSlice";
import userReducer from "./userSlice/userSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  }
});