import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../../services/api';
import MovieList from 'components/MovieList';

import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
