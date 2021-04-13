import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchMovie, fetchMovie } from '../action/Action'
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../style/NavbarComponent.css';
import { debounce } from 'lodash';

class NavbarComponent extends Component {
  searchMovieDebouncer = (value) => {
    this.props.searchMovie(value);
  }

  render() {

    return (
      <div className='search'>
        <input
          type='text'
          className='form-control'
          placeholder='search movie titles'
          value={this.props.data}
          onChange={(event) => this.searchMovieDebouncer(event.target.value)}
        />
        {/* <button onClick={ ()=> this.props.fetchMovie(this.props.data)}>Search</button> */}
      </div>
    );
  }
}

const StateToProps = state => {
  // console.log('name',state.movieName);
  return {
    data: state.movies.movieName
  }
}
const DispatchToPros = dispatch => {
  return bindActionCreators({
    searchMovie, fetchMovie
  }, dispatch)
}

export default connect(StateToProps, DispatchToPros)(NavbarComponent);
