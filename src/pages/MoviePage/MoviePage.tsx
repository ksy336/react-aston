import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import moviesApi from '../../api/movies-api';
import { MovieItem } from './MoviePage-Types';

const MoviePage = () => {
  const [listMovies, setListMovies] = useState<MovieItem>();
  const [page, setPage] = useState(1);
  // TODO сделать пагинацию
  const fetchDataFromApi = async () => {
    const movieData = await moviesApi.getAllMovies(page);
    setListMovies(movieData);
  }
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default MoviePage;