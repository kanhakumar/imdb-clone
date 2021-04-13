import {SEARCH_MOVIE, SET_MOVIE, FETCH_MOVIE, SET_POPULAR_MOVIE,SET_FAV_MOVIE,
        TMDB,API_KEY} from '../const'

// import store from '../store'


// export function searchMovie(movieName) {
//     return(dispatch) =>{
//         dispatch({'type':SEARCH_MOVIE,
//         movieName
//         })
//     }
    
// }

export function searchMovie(movieName) {
    return async (dispatch) =>{
        const url = `${TMDB}search/movie?api_key=${API_KEY}&query=`;
        const moviesList = await fetch(url+movieName)
            .then(response => response.json())
            .then(data => data.results)
        dispatch({'type':SEARCH_MOVIE,
        payload:{
            movieName,
            moviesList
        }
        })
    }
    
}

export function setMovieDetails(movie){
    return(dispatch) => {
        dispatch({
            'type':SET_MOVIE,
            movie
        })
    }
}

export function fetchMovie(movieName){
    console.log(movieName);
    return async (dispatch) => {
        const url = `${TMDB}search/movie?api_key=${API_KEY}&query=`;
        const moviesList = await fetch(url+'avenger')
            .then(response => response.json())
            .then(data => data)
        dispatch({
            'type':FETCH_MOVIE,
            moviesList
        })
    }
}

export function setPopularMovie(movie){
    return(dispatch) => {
        dispatch({
            'type':SET_POPULAR_MOVIE,
            movie
        })
    }
}

export function setFavMovie(movie){
    return(dispatch) => {
        dispatch({
            'type':SET_FAV_MOVIE,
            movie
        })
    }
}