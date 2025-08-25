import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTopRated = async () => {
      const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
      setMovies(res.data.results);
    };
    getTopRated();
  }, []);

  return (
    <div className="home">
      <h2>🌟 Top Rated Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.title}</h4>
            <p>⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
