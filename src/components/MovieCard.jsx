import { Link } from 'react-router-dom'
import React from 'react'



const imagesURL= `https://image.tmdb.org/t/p/w500/`

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
      {showLink && <Link to={`/movie/${movie.id}`}><h2>{movie.title}</h2></Link>}
    </div>
  )
}

export default MovieCard