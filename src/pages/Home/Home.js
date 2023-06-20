import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { getTrendingMovies } from '../../services/api';
import MovieList from 'components/MovieList';
import queryString from 'query-string';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const { page } = queryString.parse(location.search);

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  useEffect(() => {
    getTrendingMovies(page).then(movies => {
      setMovies(movies);
    });
  }, [page]);

  return (
    <div>
      <h1 className={css.title}>Trending movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
