import axios from 'axios';
const KEY = '0fd9891b8c0278b88b0a2b325b6369a1';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
export const getTrandingMovies = async () => {
  const res = await axios.get(`3/trending/all/day?api_key=${KEY}`);
  const movies = res.data;
  return movies;
};

export const getMovieById = async movie_id => {
  const res = await axios.get(`3/movie/${movie_id}?api_key=${KEY}`);
  const movie = res.data;
  return movie;
};

export const getCastOfTheMovie = async movie_id => {
  const res = await axios.get(`3/movie/${movie_id}/credits?api_key=${KEY}`);
  const cast = res.data;
  return cast;
};

export const getReviewsOfTheMovie = async movie_id => {
  const res = await axios.get(`3/movie/${movie_id}/reviews?api_key=${KEY}`);
  const reviews = res.data;
  return reviews;
};
