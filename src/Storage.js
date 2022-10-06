import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createStore} from "redux";

function Storage(){

    const dispatch = useDispatch();
    const movies = useSelector(state => state.movieReducer.movies)
    const movie = useSelector(state => state.oneMovieReducer.movie)
    const searchmovies = useSelector(state => state.searchMovieReducer.searchmovie)

    const setmovies = (payload) => {
        const action = {type: 'SET', payload: payload}
        dispatch(payload);
    }

    const setmovie = (payload) => {
        const action = {type: 'SET', payload: payload}
        dispatch(payload);
    }

    const setsearchmovie = (payload) => {
        const action = {type: 'SET', payload: payload}
        dispatch(payload);
    }
}