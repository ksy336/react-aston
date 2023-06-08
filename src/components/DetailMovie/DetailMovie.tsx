import React from 'react';
import { MovieItem } from '../../pages/MoviePage/MoviePage-Types';
import "./DetailMovie.scss";

type DetailMovieProp = {
  movie: MovieItem
}

const DetailMovie = ({movie}: DetailMovieProp) => {

  return (
    <>
    <section className="card-movie-container">
      <div className="movie-image">
        <img src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} alt="poster" />
      </div>

      <article className="movie-content">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-description">{movie.overview}</div>
        <div className="movie-item">
          {movie.releaseDate}
        </div>
        <div className="movie-item">Popularity: {movie.popularity?.toFixed(0)}</div>
        <div className="movie-item">Release date: {movie.release_date}</div>
        <div className="movie-item">Rating: {movie.vote_average?.toFixed(0)}</div>
      </article>
    </section>
      </>
  );
};

export default DetailMovie;