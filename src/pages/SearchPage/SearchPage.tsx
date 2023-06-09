import React from 'react';
import Header from '../../components/Header/Header';
import { Breadcrumb } from 'antd';
import MovieMemo from '../../components/Movie/Movie';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store-types';
import Layout from '../../components/Layout/Layout';
import "./SearchPage.scss";


const SearchPage = () => {
  const {moviesBySearch} = useSelector((state: RootState) => state.movies);

  return (
    <>
    <Layout />
    <h2 className="search-text">Результаты поиска</h2>
    <div className="search-container">
      {moviesBySearch?.map((movie) => (
        <MovieMemo
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
    </>
  );
};

export default SearchPage;