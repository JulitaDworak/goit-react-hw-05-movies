

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews'
 
const moviesURL = `https://api.themoviedb.org/3/movie/`;
const apiKey = `9cd3003f00fa34df086a65205d0cd538`;
const imagesURL = `https://image.tmdb.org/t/p/w500/`;

const Movie = ({ showLink = true }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showReview, setShowReview]  = useState(false);
  const [showCast, setShowCast]  = useState(false);


  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (data) {
      setMovie(data);
    }
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      <p>{movie.overview}</p>

      {showLink && (
        <>
          <Link to="#" onClick={() => setShowCast(true)}>Cast</Link>
          <Link to="#" onClick={() => setShowReview(true)}>Review</Link>
        </>
      )}

      {showCast && <Cast />}
      {showReview && <Reviews />}
    </div>
  );
};

export default Movie;
