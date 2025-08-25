import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import MovieDetails from './pages/MovieDetails';
import Watchlist from './pages/Watchlist';


function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>
  );
}

export default App;
