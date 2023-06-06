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

    try {
      const data = response.data.results;
      return data;
    } catch(e) {
      throw new Error();
    }
  }

  async searchMovies(query) {
    const options = {
      headers: {
        Authorization: `Bearer ${BASE_API_KEY}`,
        Accept: 'application/json',
      }
    }
    const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US`, options);

    try {
      const data = response.data.results;
      return data;
    } catch(e) {
      throw new Error();
    }
  }

  async getMovieById(id) {
    const options = {
      headers: {
        Authorization: `Bearer ${BASE_API_KEY}`,
        Accept: 'application/json',
      }
    }
    const response = await axios.get(`${BASE_URL}/movie/${id}?language=en-US`, options);
    try {
      const data = response.data;
      console.log(data);
      return data;
    } catch(e) {
      throw new Error(e);
    }
  }
}
const moviesApi = new MoviesApi()
export default moviesApi;