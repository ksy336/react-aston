import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const BASE_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ['Movies'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers => {
      headers.set('Authorization',`Bearer ${BASE_API_KEY}`),
        headers.set('accept', 'application/json')
      return headers;
    })
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: (page: string) => `/movie/now_playing?language=en-US&page=${page}`,
      providesTags: result => result
        ? [
          ...result?.results.map(({id}) => ({type: 'Movies', id })),
          {type: 'Movies', id: 'LIST'},
          ]
        : [{type: 'Movies', id: 'LIST'}],
    }),
    searchMovies: builder.query({
      query: (query: string) => `/search/movie?query=${query}&include_adult=false&language=en-US`
    }),
    getMovieById: builder.query({
      query: (id: string) => `/movie/${id}?language=en-US`
    })
  })
});

export const {useGetAllMoviesQuery, useSearchMoviesQuery, useGetMovieByIdQuery } = apiSlice;