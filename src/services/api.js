import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6032bd49d9b9d4473281ff3897c51bb3';

export const getTrendingMovies = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    const trendingMovies = data.results;

    return trendingMovies;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCast = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&languages=en-US`
    );
    return data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const getReviews = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
