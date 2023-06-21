import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/api';
import css from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(setActors)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={css.actorInfoContainer}>
      {actors &&
        actors.map(({ id, profile_path, name, character }) => (
          <li key={id} className={css.actorCard}>
            <img
              className={css.actorImg}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://via.placeholder.com/395x574?text=No+Image'
              }
              alt=""
            />
            <p className={css.actorName}>{name}</p>
            <p className={css.actorCharacter}>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
