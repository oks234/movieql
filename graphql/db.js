import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

const getMovies = (limit, rating) => {
  fetch(`${API_URL}?limit=50&minimum_rating=9`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getById = (id) => movies.find((movie) => movie.id === id);

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: getMovies().length,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
