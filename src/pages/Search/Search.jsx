import React, { useState } from "react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "components/MovieCard"


// const searchURL = `https://api.themoviedb.org/3/search/movie`
const apiKey = `9cd3003f00fa34df086a65205d0cd538`

const Search =()=> {

    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query= searchParams.get("q")

    const getSearchMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results); 
        console.log(data);
      };
    
      useEffect(() => {
        const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`; 
        getSearchMovies(searchWithQueryURL);
      }, [query]);

    return (
        <div className="container">
      <h2 className="title"> Wyniki wyszukowania <span className="query-text"></span> {query} </h2>
      <div className="movies-container">
        {movies.length ===0 && <p> not found...</p> }
         {movies.length >0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>    
    </div>
    )
}

export default Search