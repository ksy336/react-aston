import { MovieItem } from '../../src/pages/MoviePage/MoviePage-Types';

export type MovieState = {
  favorites: MovieItem[];
  numberOfFavorites: number;
}