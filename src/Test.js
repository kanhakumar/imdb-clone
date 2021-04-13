import React, { Component } from 'react'
import store from './store'
import { searchMovie } from './action/Action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

class Test extends Component {
    render() {
        return (
            <div>
                <h3>hi</h3>
                <p>{this.props.movieName}</p>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    bindActionCreators({
        searchMovie
    }, dispatch)
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        movieName: state.movieName
    }
}
export default connect(mapStateToProps,null)(Test);
