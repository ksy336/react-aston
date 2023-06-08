import React, { useEffect, useState } from 'react';
import { RootState } from '../../../store/store-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../../components/Header/Header';
import moviesApi from '../../api/movies-api';
import { MovieItem } from './MoviePage-Types';
import MovieMemo from '../../components/Movie/Movie';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { setMoviesBySearch } from '../../../store/movieSlice/movieSlice';
import {saveMoviesForHistory} from "../../../store/historySlice/historySlice";
import "./MoviePage.scss";

const MoviePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listMovies, setListMovies] = useState<MovieItem>();
  const [page, setPage] = useState(1);
  const {searchQuery} = useSelector((state: RootState) => state.movies);

  // TODO сделать пагинацию
  const fetchDataFromApi = async () => {
    const movieData = await moviesApi.getAllMovies(page);
    setListMovies(movieData);
  }
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchMoviesBySearchParameter = async () => {
    const movies = await moviesApi.searchMovies(searchQuery);
    dispatch(setMoviesBySearch(movies));
    dispatch(saveMoviesForHistory(movies));
    navigate(`/search?${searchQuery}`);
  }

  return (
    <>
      <Header />
      <div className="input-for-search">
        <SearchComponent fetchMovies={fetchMoviesBySearchParameter} />
      </div>
      <section className="movies-block">
        {listMovies?.map((movie) => (
          <MovieMemo
            key={movie.id}
            movie={movie}
          />
        ))}
      </section>
    </>
  );
};

export default MoviePage;