import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { getMovieBySearch } from '../../services/api';
import SearchForm from '../../components/SearchForm';
import noImage from '../../image/placeholder.png';
import css from './Movies.module.css';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null || query === '') return;

    const getSearchedMovie = async query => {
      try {
        const movies = await getMovieBySearch(query);
        setSearch(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchedMovie(query);
  }, [query]);

  const onFormSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    console.log(form.elements.query.value);

    if (form.elements.query.value === '') {
      alert('Please enter search word!');
      return setSearchParams({});
    }

    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      <ul className={css.searchedMoviesList}>
        {search.map(movie => (
          <li key={movie.id} className={css.searchedMovieItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.searchedMovieTitle}
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className={css.searchedMovieImg}
                />
              ) : (
                <img
                  src={noImage}
                  alt={movie.title}
                  className={css.searchedMovieImg}
                />
              )}
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
