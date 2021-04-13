import React, { Component } from 'react'
import '../../style/MovieItemComponent.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { API_KEY, POSTER, TMDB } from '../../const';
import { bindActionCreators } from 'redux'

class MovieItemComponent extends Component {
    state = {
        movieDetails: {}
    }
    static propTypes = {
        location: PropTypes.object.isRequired
    };

    async componentDidMount() {
        const { location } = this.props;
        console.log(location.pathname)
        const url = `${TMDB}${location.pathname}?api_key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ movieDetails: data })
        console.log(this.state.movieDetails)
    }
    
    render() {
        return (
            <div>
                <div className='container center'>
                    <h1>{this.state.movieDetails.title}</h1>
                    <h4>{this.state.movieDetails.tagline}</h4>
                    <h3>Rating:{this.state.movieDetails.vote_average}</h3>
                    <div className='row'>
                        <div>
                            <img src={POSTER + this.state.movieDetails.poster_path}
                                width='500' height='500'
                            />
                        </div>
                        <div className='overview'>
                            <p>{this.state.movieDetails.overview}</p>
                        </div>
                        <div>
                            <p className='additionalInfo'>Additional Info:</p>
                            <p>Release Date : {this.state.movieDetails.release_date}</p>
                            <p>Run time : {this.state.movieDetails.runtime} minutes</p>
                            <p>Original Language : {this.state.movieDetails.original_language}</p>
                            <p>Budget : {this.state.movieDetails.budget}</p>
                            <p>Revenue : {this.state.movieDetails.revenue}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
// const StateToProps = state =>{
//     return{
//         data:state.movieName
//     }
// }
// const DispatchToPros = dispatch =>{
//     bindActionCreators({
//         searchMovie
//     },dispatch)
// }
export default withRouter(MovieItemComponent);