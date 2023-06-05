import React from 'react';
import { RootState } from '../../../store/store-types';
import { useSelector } from 'react-redux';
import MovieMemo from '../../components/Movie/Movie';
import Header from '../../components/Header/Header';
import {Breadcrumb} from 'antd';
import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const { favorites } = useSelector((state: RootState) => state.movies);

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          {
            title: <a href="/">Home</a>,
          },
        ]}
      />
      <h2 className="favorite-text">Избранное</h2>
    <div className="favorite-container">
      {favorites?.map((movie) => (
        <MovieMemo
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
      </>
  );
};

export default FavoritesPage;