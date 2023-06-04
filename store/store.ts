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

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
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
    }),
});

export const persistor = persistStore(store);
export default store;