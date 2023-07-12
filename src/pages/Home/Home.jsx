import MovieCard from "components/MovieCard";
import React, { useState, useEffect } from "react";

// const moviesURL = `https://api.themoviedb.org/3/movie/`;
const apiKey = `9cd3003f00fa34df086a65205d0cd538`;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results); 
  
  };

  useEffect(() => {
    const topRatedUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; 
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title"> Trending Title</h2>
      <div className="movies-container">
        {topMovies.length ===0 && <p> not found...</p> }
         {topMovies.length >0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>    
    </div>
  );
};

export default Home;
