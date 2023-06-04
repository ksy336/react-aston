import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import MoviePage from '../pages/MoviePage/MoviePage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import { RequireAuth } from "../hoc/RequireAuth";

export function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/favorites" element={
            <RequireAuth>
              <FavoritesPage />
            </RequireAuth>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
