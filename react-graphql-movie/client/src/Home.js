import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import { Link } from 'react-router-dom';

const Home = () => (
    <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
            if(loading) return "loading";
            if(error) return "something happened";
            return data.movies.map(movie => (
                <h2 key={movie.id}>
                    <Link to={`/details/${movie.id}`}>
                        {movie.title} / {movie.rating}
                    </Link>
                </h2>
            ));
        }}
    </Query>
);

export default Home;