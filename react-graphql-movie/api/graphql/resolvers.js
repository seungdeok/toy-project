//query를 해결하는 것
import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
    Query: {
       movies: (_, { rating, limit }) => getMovies(limit, rating),
       movie: (_, { id }) => getMovie(id),
       suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers; 