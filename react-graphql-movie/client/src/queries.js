import gql from 'graphql-tag';

 export const HOME_PAGE = gql`
    query {
        movies(limit: 50, rating: 7){
            id
            title
            genres
            rating
        }
    }
 `;

 //apollo위한 변수
 export const MOVIE_DETAILS = gql`
    query getMovie($movieId: Int!){
        movie(id: $movieId){
            medium_cover_image
            title
            rating
            description_intro
            language
            genres
        }
        suggestions(id: $movieId){
            medium_cover_image
            title
            rating
        }
    }
 `;

 