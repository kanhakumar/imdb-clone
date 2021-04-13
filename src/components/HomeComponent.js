import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/HomeComponent.css';
import {POSTER} from '../const';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFavMovie } from '../action/Action'


class HomeComponent extends Component {

    showMovieList = (movieList) => {
        console.log('getting movies data',this.props.movieList)
        if (movieList) {
            return movieList.map(movie => {
                return (
                    <div className='card col-md-4' key={movie.id}>
                        <div className='movie-card'>
                            <Link to={"/movie/"+movie.id}>
                                <img src={ POSTER + movie.poster_path}
                                    width='300' height='300'
                                    onClick={() => {
                                        this.props.setSelectedMovie(movie.id);
                                    }}
                                />
                            </Link>
                            <p className='movie-name'>{movie.title}</p>
                            <p className='movie-rating'>{'Rating:' + movie.vote_average}</p>
                            {/* <button onClick={()=>this.props.setFavMovie(movie)}>Like</button> */}
                        </div>
                    </div>
                )
            })
        }
    }


    render() {
        return (
            <div className='list row'>
                {this.showMovieList(this.props.movieList)}
            </div>
        )
    }
}

const MapStateToProps = state =>{
    return{
        movieList:state.movies.movieList
    }
}
const MapDispatchToProps = dispatch => {
    return bindActionCreators({
        setFavMovie
    }, dispatch)
  }
export default connect(MapStateToProps,MapDispatchToProps)(HomeComponent);