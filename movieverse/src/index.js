import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './context/ThemeContext';
import WatchlistProvider from './context/WatchlistContext';
import 'react-loading-skeleton/dist/skeleton.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WatchlistProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </WatchlistProvider>
);
