import { ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAILS } from "./actionTypes";

export const getMovies = (titulo) => {
    return (dispatch) => {
        return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${titulo}`)
            .then(response => response.json())
            .then(obj => {
                dispatch({ type: GET_MOVIES, payload: obj })
            })
    }
};

export const addMovieFavorite = (movie) => {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload: movie
    }
};

export const getMovieDetails = (id) => {
    return (dispatch) => {
        return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
            .then(response => response.json())
            .then(obj => {
                dispatch({ type: GET_MOVIE_DETAILS, payload: obj })
            })
    }
};

export const removeMovie = (id) => {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
};