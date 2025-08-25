import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const FeaturedCarousel = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
      setFeatured(res.data.results.slice(0, 5));
    };
    fetchFeatured();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {featured.map((movie) => (
          <div key={movie.id} className="carousel-slide">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h2>{movie.title}</h2>
              <p>{movie.overview.slice(0, 150)}...</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedCarousel;
