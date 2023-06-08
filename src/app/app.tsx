import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import MoviePage from '../pages/MoviePage/MoviePage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import { RequireAuth } from "../hoc/RequireAuth";
import SearchPage from '../pages/SearchPage/SearchPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';

export function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/favorites" element={
            <RequireAuth>
              <FavoritesPage />
            </RequireAuth>
          } />
          <Route path="/history" element={
            <RequireAuth>
              <HistoryPage />
            </RequireAuth>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
