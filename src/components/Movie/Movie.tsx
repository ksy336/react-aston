import React from 'react';
import { MovieItem } from '../../pages/MoviePage/MoviePage-Types';
import image from "../../assets/favourites.svg";
import { useDispatch } from 'react-redux';
import { addToFavoritesList }  from "../../../store/movieSlice/movieSlice";
import "./Movie.scss";

type MovieProp = {
  movie: MovieItem;
}

const Movie = ({movie}: MovieProp) => {
  const dispatch = useDispatch();

  return (
    <article className="movie-container">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-image">
        <img src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} alt="poster" />
      </div>
      <div>Популярность: {movie.popularity}</div>
      <div>Дата релиза: {movie.release_date}</div>
      <div>Средний рейтинг: {movie.vote_average}</div>
      <img
        src={image}
        alt="favorite"
        width="40"
        height="40"
        className="favorite-img"
        onClick={() => dispatch(addToFavoritesList(movie))}
      />
    </article>
  );
};

export default Movie;