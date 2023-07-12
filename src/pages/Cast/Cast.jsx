import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const [cast, setCast] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            params: {
              api_key: '9cd3003f00fa34df086a65205d0cd538',
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    getCast();
  }, [id]);

  return (
    <ul>
      {cast.length === 0 ? (
        <li style={{ listStyle: 'none' }}>
          We don't have cast information for this movie.
        </li>
      ) : (
        cast.map((el) => (
          <li key={el.id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
              }
              width={200}
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
