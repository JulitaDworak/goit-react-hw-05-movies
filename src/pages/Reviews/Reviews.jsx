import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

const getReviews = async movieId => {
    const reviews = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      {
        params: {
          api_key: '9cd3003f00fa34df086a65205d0cd538',
        },
      }
    );
  
    return reviews.data.results;
  };
  
  export const searchMovies = async query => {
    const search = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '9cd3003f00fa34df086a65205d0cd538',
        query: query,
      },
    });
  
    return search.data.results;
  };



const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {id} =useParams()

    useEffect(() => {
        const asyncFunc = async () => {
          try {
            setReviews(await getReviews(id));
          } catch (error) {
            console.log(error);
          }
        };
        asyncFunc();
      }, [id]);
    
      return (
        <ul>
          {reviews.length === 0 ? (
            <li style={{ listStyle: 'none' }}>
              We dont have any reviews for this movie
            </li>
          ) : (
            reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))
          )}
        </ul>
      );
    };
    
    export default Reviews;


