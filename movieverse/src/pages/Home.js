import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies, fetchGenres } from '../utils/api';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import FeaturedCarousel from '../components/FeaturedCarousel';
import Skeleton from 'react-loading-skeleton';


const Home = () => {
const [movies, setMovies] = useState([]);
const [searchQuery, setSearchQuery] = useState('');    
const [genres, setGenres] = useState([]);
const [selectedGenre, setSelectedGenre] = useState('');
const { addToWatchlist } = useContext(WatchlistContext);
const [loading, setLoading] = useState(true);


useEffect(() => {
  const getMoviesAndGenres = async () => {
    const data = await fetchTrendingMovies();
    const genreData = await fetchGenres();
    setMovies(data);
    setGenres(genreData);
    setTimeout(() => setLoading(false), 2000);
  };
  getMoviesAndGenres();
}, []);

<GenreFilter
  genres={genres}
  selectedGenre={selectedGenre}
  setSelectedGenre={setSelectedGenre}
/>

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter((movie) =>
    selectedGenre ? movie.genre_ids.includes(parseInt(selectedGenre)) : true
  );

  return (
    <div className="home">
      <h2>🔥 Trending Movies</h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FeaturedCarousel />
      <div className="movie-grid">
        {loading
         ? Array.from({ length: 8 }).map((_, idx) => (
        <div className="movie-card" key={idx}>
          <Skeleton height={250} />
          <h4><Skeleton width={120} /></h4>
          <p><Skeleton width={60} /></p>
          <Skeleton width={100} height={30} />
        </div>
      )):filteredMovies.map((movie) => (          
          <motion.div
    key={movie.id}
    className="movie-card"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.title}</h4>
            <p>⭐ {movie.vote_average}</p>
    </Link>
    <button onClick={() => addToWatchlist(movie)}>
        ❤️ Add to Watchlist
    </button>
    </motion.div>           
        ))}
      </div>
    </div>
  );
};

export default Home;
