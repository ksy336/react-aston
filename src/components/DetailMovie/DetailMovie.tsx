import React from 'react';
import { MovieItem } from '../../pages/MoviePage/MoviePage-Types';

type DetailMovieProp = {
  movie: MovieItem
}

const DetailMovie = ({movie}: DetailMovieProp) => {
  return (
    <div>
      <article>{movie.overview}</article>
    </div>
  );
};

export default DetailMovie;