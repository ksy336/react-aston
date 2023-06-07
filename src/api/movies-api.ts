import axios from 'axios';
const BASE_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

class MoviesApi {
  async getAllMovies(page) {
    const options = {
      headers: {
        Authorization: `Bearer ${BASE_API_KEY}`,
        Accept: 'application/json',
      }
    }
    const response = await axios.get(`${BASE_URL}/movie/now_playing?language=en-US&page=${page}`, options);
    const data = response?.data?.results;

    return data;
  }

  async searchMovies(query) {
    const options = {
      headers: {
        Authorization: `Bearer ${BASE_API_KEY}`,
        Accept: 'application/json',
      }
    }
    const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US`, options);
    const data = response?.data?.results;

    return data;
  }

  async getMovieById(id) {
    const options = {
      headers: {
        Authorization: `Bearer ${BASE_API_KEY}`,
        Accept: 'application/json',
      }
    }
    const response = await axios.get(`${BASE_URL}/movie/${id}?language=en-US`, options);
    const data = response.data;

    return data;
  }
}
const moviesApi = new MoviesApi()
export default moviesApi;