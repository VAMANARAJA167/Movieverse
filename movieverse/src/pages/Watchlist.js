import React, { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import { Link } from 'react-router-dom';

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  if (watchlist.length === 0) {
    return <p style={{ textAlign: 'center' }}>No movies in watchlist 😢</p>;
  }

  return (
    <div className="home">
      <h2>🎯 My Watchlist</h2>
      <div className="movie-grid">
        {watchlist.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.title}</h4>
            <button onClick={() => removeFromWatchlist(movie.id)}>❌ Remove</button>
            <Link to={`/movie/${movie.id}`}>
              <p>🔎 View Details</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
