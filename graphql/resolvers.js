import { getMovie, getMovies, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating, sort_by }) => getMovies(limit, rating, sort_by),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
