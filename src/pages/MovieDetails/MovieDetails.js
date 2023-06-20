import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  // const location = useLocation();

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  // const releaseYear = new Date(movie?.release_date).getFullYear();

  return (
    <>
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
          <p></p>
        </div>
      </div>

      <div className={css.additionalInfo}>
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
