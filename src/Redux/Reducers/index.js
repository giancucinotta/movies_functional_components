import { ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAILS } from "../Actions/actionTypes";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE_FAVORITE:
            return { 
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            }
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search // POR LA API
            }
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetail: action.payload
            }
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
            }
        default: { 
            return state
        }
    }
};

export default rootReducer;