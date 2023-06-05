import React from 'react';
import { MovieItem } from '../../pages/MoviePage/MoviePage-Types';
import image from "../../assets/favourites.svg";
import redHeart from "../../assets/heart2.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoritesList }  from "../../../store/movieSlice/movieSlice";
import { removeFromFavorites } from "../../../store/movieSlice/movieSlice";
import "./Movie.scss";
import { RootState } from '../../../store/store-types';

type MovieProp = {
  movie: MovieItem;
}

const Movie = ({movie}: MovieProp) => {
  const dispatch = useDispatch();
  const {favorites} = useSelector((state: RootState) => state.movies);

  return (
    <article className="movie-container">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-image">
        <img src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} alt="poster" />
      </div>
      <div>Популярность: {movie.popularity?.toFixed(0)}</div>
      <div>Дата релиза: {movie.release_date}</div>
      <div>Средний рейтинг: {movie.vote_average}</div>
      {!favorites?.includes(movie) ? (
        <img
          src={image}
          alt="favorite"
          width="40"
          height="40"
          className="favorite-img"
          onClick={() => dispatch(addToFavoritesList(movie))}
        />
      ) : (
        <img
          src={redHeart}
          alt="favorite"
          width="40"
          height="40"
          className="favorite-img"
          onClick={() => dispatch(removeFromFavorites(movie))}
        />
      )}
    </article>
  );
};
const MovieMemo = React.memo(Movie);
export default MovieMemo;