import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieItem } from '../../pages/MoviePage/MoviePage-Types';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoritesList }  from "../../../store/movieSlice/movieSlice";
import { addFavoriteMovies } from "../../../store/favoriteMoviesSlice/favoriteMoviesSlice";
import { removeFromFavoriteMovies } from "../../../store/favoriteMoviesSlice/favoriteMoviesSlice";
import { removeFromFavorites } from "../../../store/movieSlice/movieSlice";
import { RootState } from '../../../store/store-types';
import { setMovieId } from "../../../store/movieSlice/movieSlice";
import redHeart from "../../assets/heart2.svg";
import image from "../../assets/favourites.svg";
import "./Movie.scss";

type MovieProp = {
  movie: MovieItem;
}

const Movie = ({movie}: MovieProp) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {favorites} = useSelector((state: RootState) => state.movies);
  console.log(favorites, movie)

  const goToDetailPage = () => {
    navigate("/detail");
    dispatch(setMovieId(movie?.id));
  }
  const addToFavorite = () => {
    dispatch(addToFavoritesList(movie));
    dispatch(addFavoriteMovies(movie))
  }
  const removeFromFavorite = () => {
    dispatch(removeFromFavorites(movie));
    dispatch(removeFromFavoriteMovies(movie));
  }

  return (
      <article className="movie-container">
        <section className="movie-container container-without-hover" onClick={goToDetailPage}>
          <div className="movie-title">{movie?.title}</div>
          <div className="movie-image">
            <img src={`https://www.themoviedb.org/t/p/original${movie?.backdrop_path}`} alt="poster" />
          </div>
          <div>Популярность: {movie?.popularity?.toFixed(0)}</div>
          <div>Дата релиза: {movie?.release_date}</div>
          <div>Средний рейтинг: {movie?.vote_average?.toFixed(0)}</div>
        </section>
        {!favorites?.includes(movie?.id) ? (
          <img
            src={image}
            alt="favorite"
            width="40"
            height="40"
            className="favorite-img"
            onClick={addToFavorite}
          />
        ) : (
          <img
            src={redHeart}
            alt="favorite"
            width="40"
            height="40"
            className="favorite-img"
            onClick={removeFromFavorite}
          />
        )}
      </article>
  );
};
const MovieMemo = React.memo(Movie);
export default MovieMemo;