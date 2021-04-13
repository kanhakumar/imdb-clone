import {FETCH_MOVIE, SEARCH_MOVIE, SET_FAV_MOVIE, SET_MOVIE, SET_POPULAR_MOVIE} from '../const'

const initialState = {
    selectedMovieId:'1771',
    movieName: '',
    movieList:[],
    selectedMovie:{},
    favMoviesList:[]
}

export default function Reducer(state = initialState,action){
    switch(action.type){
        case SEARCH_MOVIE:
            return Object.assign({},state, {
                movieList:action.payload.moviesList,
                movieName:action.payload.movieName
            })
        case SET_MOVIE:
            return Object.assign({},state,{
                selectedMovie:action.movie
            })
        case FETCH_MOVIE:
            return Object.assign({},state,{
                movieList: action.moviesList
            })
        case SET_POPULAR_MOVIE:
            return Object.assign({},state,{
                movieList:action.movie
            })
        case SET_FAV_MOVIE:
            return Object.assign({},state,{
                favMoviesList:action.movie
            })
        default:
            return state;
    }
    return state;
}