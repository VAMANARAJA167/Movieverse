import React, { createContext, useEffect, useState } from 'react';

export const WatchlistContext = createContext();

const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  // Load from localStorage on first load
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedList);
  }, []);

  // Update localStorage whenever watchlist changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((m) => m.id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;
