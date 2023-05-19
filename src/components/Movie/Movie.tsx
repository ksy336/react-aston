import React from 'react';
import { MovieItem } from '../../pages/MoviePage/MoviePage-Types';
import "./Movie.scss";

type MovieProp = {
  movie: MovieItem;
}

const Movie = ({movie}: MovieProp) => {

  return (
    <article className="movie-container">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-image">
        <img src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} alt="poster" />
      </div>
      <div className="movie-overview">{movie.overview}</div>
    </article>
  );
};

export default Movie;