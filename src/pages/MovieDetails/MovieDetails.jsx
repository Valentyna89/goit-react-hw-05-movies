import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Link to={goBackRef.current} className={css.goBackButton}>
        Go back
      </Link>
      <div className={css.movieDetailsContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          className={css.moviePoster}
        />
        <div className={css.movieInfo}>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}</p>
          <h5>Overview</h5>
          <p>{movie.overview}</p>
          <h5>Genres</h5>
          <ul className={css.movieGenresList}>
            {movie.genres &&
              movie.genres.map(genre => (
                <li key={genre.id} className={css.movieGenres}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className={css.additionalInfo}>
        <h5 className={css.addInfo}>Aditional information:</h5>
        <Link to="cast" className={css.addLink}>
          Cast
        </Link>
        <Link to="reviews" className={css.addLink}>
          Reviews
        </Link>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
