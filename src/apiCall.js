import {TMDB,API_KEY} from './const'
import { debounce } from 'lodash';

export const makeApiCall = debounce((movieName) => {
    const url =  `${TMDB}search/movie?api_key=${API_KEY}&query=`;
    const res = fetch(url + movieName);
    res.then(response => response.json())
      .then(data => this.setState({ movieList: data.results }, () => { console.log(this.state.movieList); }))
  }, 2000);

  // Moview = {
  //   getList: () => fetch(url).then(data => data),
  //   getDetails: (id) =>  fetch(url+id).then(data => data), 
  // }