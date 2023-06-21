import React from 'react';
import { RootState } from '../../../store/store-types';
import { useSelector } from 'react-redux';
import MovieMemo from '../../components/Movie/Movie';
import Layout from '../../components/Layout/Layout';
import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const { favorites } = useSelector((state: RootState) => state.movies);

  return (
    <>
      <Layout />
      <h2 className="favorite-text">Избранное</h2>
    <div className="favorite-container">
      {favorites?.map((movie) => (
        <MovieMemo
          key={movie?.id}
          movie={movie}
        />
      ))}
    </div>
      </>
  );
};

export default FavoritesPage;