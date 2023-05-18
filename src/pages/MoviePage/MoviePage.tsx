import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import moviesApi from '../../api/movies-api';

const MoviePage = () => {
  const [listMovies, setListMovies] = useState();
  const [page, ]
  // TODO сделать пагинацию
  const fetchDataFromApi = async () => {
    const movieData = await moviesApi.getAllMovies(1);
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