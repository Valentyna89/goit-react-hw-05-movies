import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImg from '../../image/placeholder.png';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title, poster_path }) => (
        <li className={css.movieItem} key={id}>
          <Link to={`/movies/${id}`} className={css.movieTitle}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noImg
              }
              alt={title}
              className={css.movieImg}
            />
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default MovieList;
