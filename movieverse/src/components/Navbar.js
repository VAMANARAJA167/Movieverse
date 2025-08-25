import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="navbar">
      <h1 className="logo">🎬 MovieVerse</h1>
      <ul className="nav-links">
        <li><Link to="/">Trending</Link></li>
        <li><Link to="/top-rated">Top Rated</Link></li>
        <li><Link to="/watchlist">❤️ Watchlist</Link></li>
        <li>
          <button onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
