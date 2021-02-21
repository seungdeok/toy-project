export let movies = [
    {
        id: 1,
        name: "김철수",
        score: 10
    },
    {
        id: 2,
        name: "정철수",
        score: 20
    },
    {
        id: 3,
        name: "조철수",
        score: 30
    },
    {
        id: 4,
        name: "장철수",
        score: 40
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovies = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}