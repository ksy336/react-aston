import React from 'react';
import { MovieItem } from '../../pages/MoviePage/MoviePage-Types';

type MovieHistoryProp = {
  movie: MovieItem;
}
const HistoryItem = ({movie}: MovieHistoryProp) => {
  return (
    <>
    <article>
      <div>{movie.title}</div>
      <div>{movie.releaseDate}</div>
    </article>
      </>
  );
};

export default HistoryItem;