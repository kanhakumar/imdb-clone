import React, { Component } from 'react';
import { debounce } from 'lodash';  
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import MovieItemComponent from './components/movie/MovieItemComponent';
import { makeApiCall, popularMovieCall } from './apiCall'
import { SEARCH_MOVIE, TMDB, API_KEY } from './const'
import { searchMovie, setPopularMovie } from './action/Action'

import store from './store';
import './App.css'
import { Provider } from 'react-redux';
import { FabMoviesComponent } from './components/movie/FabMoviesComponent';

export default class App extends Component {
  state = {
    movieName: '',
    movieList: [],
    selectedMovie: null
  }

  componentDidMount() {
    const url = `${TMDB}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const res = fetch(url);
    res.then(response => response.json())
      .then(data => store.dispatch(setPopularMovie(data.results)))
  }

  // searchMovie = (movie) => {
  //   this.setState({ movieName: movie },
  //     () => {
  //       this.makeApiCall();
  //     });
  // }


  // makeApiCall = debounce(() => {
  //   const url = `${TMDB}search/movie?api_key=${API_KEY}&query=`;
  //   const res = fetch(url + this.state.movieName);
  //   res.then(response => response.json())
  //     .then(data => this.setState({ movieList: data.results }, () => { console.log(this.state.movieList); }))
  // }, 2000);


  setSelectedMovie = (movieId) => {
    // console.log(movieId);
    this.setState({ selectedMovie: this.state.movieList.filter(movie => movie.id === movieId)[0] });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Link to='/'>
            <h2 className='home'>IMDB Clone</h2>
          </Link>
          {/* <Link to='/liked'>
            <button>favourite</button>
          </Link> */}
          <Switch>
            <Route path='/' exact>
              <div className='container'>
                <NavbarComponent movieName={this.state.movieName} searchMovie={this.searchMovie} />
                <HomeComponent setSelectedMovie={this.setSelectedMovie} />
              </div>
            </Route>
            <Route path='/movie/:mid' >
              <MovieItemComponent selectedMovie={this.state.selectedMovie} />
            </Route>
            {/* <Route path='/liked' exact>
              <FabMoviesComponent />
            </Route> */}
          </Switch>
        </Router>
      </Provider>
    )
  }
}
