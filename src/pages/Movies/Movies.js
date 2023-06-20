import css from './Movies.module.css';

const Movies = () => {
  return (
    <div className={css.inputContainer}>
      <input className={css.input} type="text" />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </div>
  );
};

export default Movies;

// import MovieList from 'components/MovieList/MovieList';
// import { getTrendingMovies } from '../services/api';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const trendingMovies = await getTrendingMovies();
//       setMovies(trendingMovies);
//     };

//     fetchMovies();
//   }, []);

//   console.log(movies);

//   return (
//     <>
//       <form>
//         <input type="text" name="search" />
//         <button type="submit">Search</button>
//       </form>
//       <MovieList movies={movies} />
//       <ul>
//         <li>
//           <Link to="cast">Cast</Link>
//         </li>
//         <li>
//           <Link to="reviews">Reviews</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </>
//   );
// };

// export default Movies;
