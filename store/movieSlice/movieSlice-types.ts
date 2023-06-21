import { MovieItem } from '../../src/pages/MoviePage/MoviePage-Types';

export type MovieState = {
  favorites: number[];
  numberOfFavorites: number;
  searchQuery: string;
  moviesBySearch: MovieItem[];
  movieId: number | string;
}