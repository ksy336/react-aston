import React, { useState } from 'react';
import { RootState } from '../../../store/store-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../../components/Header/Header';
import MovieMemo from '../../components/Movie/Movie';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { setMoviesBySearch } from '../../../store/movieSlice/movieSlice';
import {saveMoviesForHistory} from "../../../store/historySlice/historySlice";
import Button from "../../components/Button/Button";
import { useGetAllMoviesQuery, useSearchMoviesQuery } from "../../../store/api/apiSlice";
import "./MoviePage.scss";

const MoviePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {searchQuery} = useSelector((state: RootState) => state.movies);
  const [visible, setVisible] = useState(20);

  const {data: movies} = useGetAllMoviesQuery(page);
  const {data: searchMovies } = useSearchMoviesQuery(searchQuery);
  const showMoreMovies = async () => {
    setPage((prev: number) => {
      return prev + 1;
    })

    setVisible((prev: number) => {
      return prev + 20;
    })
  }

  const fetchMoviesBySearchParameter = async () => {
    dispatch(setMoviesBySearch(searchMovies?.results));
    dispatch(saveMoviesForHistory(searchMovies?.results));
    navigate(`/search?${searchQuery}`);
  }

  return (
    <>
      <Header />
      <div className="input-for-search">
        <SearchComponent fetchMovies={fetchMoviesBySearchParameter} />
      </div>
      <section className="movies-block">
        {movies?.results?.map((movie) => (
          <MovieMemo
            key={movie.id}
            movie={movie}
          />
        ))}
      </section>
      <div className="button-toloadmore-movies">
        <Button
          onClick={showMoreMovies}
        >
          Показать больше фильмов
        </Button>
      </div>
      </>
  );
};

export default MoviePage;