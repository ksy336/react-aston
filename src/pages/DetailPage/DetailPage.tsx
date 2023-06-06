import React, { useEffect, useState } from 'react';
import { RootState } from '../../../store/store-types';
import { useSelector } from 'react-redux';
import { MovieItem } from '../MoviePage/MoviePage-Types';
import moviesApi from '../../api/movies-api';
import DetailMovie from '../../components/DetailMovie/DetailMovie';

const DetailPage = () => {
  const {movieId} = useSelector((state: RootState) => state.movies);
  const [movies, setMovies] = useState<MovieItem>();

  const fetchingMovieById = async () => {
    const movieByIdData = await moviesApi.getMovieById(movieId);
    setMovies([movieByIdData])
  };

  useEffect(() => {
    fetchingMovieById();
  }, []);

  return (
    <div className="detail-container">
      {movies?.map((movie) => (
        <DetailMovie
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default DetailPage;