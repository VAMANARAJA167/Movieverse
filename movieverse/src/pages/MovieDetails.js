import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';


const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
      <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
      <ReviewForm movieId={movie.id} />

    </div>
  );
};

export default MovieDetails;
