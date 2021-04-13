import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {POSTER} from '../../const'

export class FabMoviesComponent extends Component {
    showFabMoviesList = (movieList) => {
        console.log('fablist',movieList);
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

                        </div>
                    </div>
                )
            })
        }
    }


    render() {
        return (
            <div className='list row'>
                {this.showFabMoviesList(this.props.favMoviesList)}
            </div>
        )
    }
}
const MapStateToProps = state =>{
    return{
        favMoviesList:state.movies.favMoviesList
    }
}
export default connect(MapStateToProps,null)(FabMoviesComponent)
