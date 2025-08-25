
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return res.data.results;
};

export const fetchGenres = async () => {
  const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return res.data.genres;
};

