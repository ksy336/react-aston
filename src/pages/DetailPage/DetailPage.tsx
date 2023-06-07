import React, { useEffect, useState } from 'react';
import { RootState } from '../../../store/store-types';
import { useDispatch, useSelector } from 'react-redux';
import { MovieItem } from '../MoviePage/MoviePage-Types';
import moviesApi from '../../api/movies-api';
import DetailMovie from '../../components/DetailMovie/DetailMovie';
import Header from '../../components/Header/Header';
import { Breadcrumb } from 'antd';

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
      <Header />
      <div className="border-breadcrumb">
        <Breadcrumb
          items={[
            {
              title: <a href="/">Home</a>,
            },
          ]}
        />
      </div>
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