import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App  from 'components/App';
import Movie from 'pages/Movie/Movie';
import Search from 'pages/Search/Search';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import MovieDetails from 'pages/MovieDetails/MovieDetails'
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies" >
<Routes>
  <Route element = {<App/>}> 
  <Route path='/' element = {<Home/>}></Route>
  <Route path='movies' element = {<Movie/>}>
    <Route path='movie/:id' element={<MovieDetails/>}>
    <Route path='cast' element={<Cast/>}></Route>
    <Route path='reviews'element={<Reviews/>}></Route>
    </Route>
    <Route path='movie/:id'></Route>
  </Route>
  <Route path='search' element = {<Search/>}></Route>
  </Route>
  <Route path='*' elemenet={<NotFound/>}></Route>
</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
