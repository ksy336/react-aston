import React, { useEffect, useState } from 'react';
import { RootState } from '../../../store/store-types';
import { useDispatch, useSelector } from 'react-redux';
import { MovieItem } from '../MoviePage/MoviePage-Types';
import moviesApi from '../../api/movies-api';
import Layout from '../../components/Layout/Layout';
import DetailMovie from '../../components/DetailMovie/DetailMovie';

const DetailPage = () => {
  const {movieId} = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState<MovieItem>();

  useEffect(() => {
    fetchingMovieById();
  }, []);

  const fetchingMovieById = async () => {
    const movieByIdData = await moviesApi.getMovieById(movieId);
    setMovies([movieByIdData])
  };


  return (
    <>
     <Layout />
    <div className="detail-container">
      {movies?.map((movie) => (
        <DetailMovie
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
      </>
  );
};

export default DetailPage;