import React, { useEffect, useState } from 'react';
import { RootState } from '../../../store/store-types';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMovieByIdQuery } from "../../../store/api/apiSlice";
import Layout from '../../components/Layout/Layout';
import DetailMovie from '../../components/DetailMovie/DetailMovie';
import { MovieItem } from '../MoviePage/MoviePage-Types';

const DetailPage = () => {
  const {movieId} = useSelector((state: RootState) => state.movies);
  const [movies, setMovies] = useState<MovieItem>();
  const {data: movieByIdData} = useGetMovieByIdQuery(movieId);

  useEffect(() => {
    setMovies([movieByIdData]);
  }, []);


  return (
    <>
     <Layout />
    <div className="detail-container">
      {movies?.map((movie) => (
        <DetailMovie
          key={movie?.id}
          movie={movie}
        />
      ))}
    </div>
      </>
  );
};

export default DetailPage;