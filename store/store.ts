import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import moviesReducer from "./movieSlice/movieSlice";
import userReducer from "./userSlice/userSlice";
import historyReducer from "./historySlice/historySlice";
import favoriteMoviesSlice from "./favoriteMoviesSlice/favoriteMoviesSlice";
import { apiSlice } from "./api/apiSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  history: historyReducer,
  favoriteMovies: favoriteMoviesSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
})
const persistConfig = {
  key: "root",
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware)
});

export const persistor = persistStore(store);
export default store;