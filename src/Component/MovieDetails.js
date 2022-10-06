import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {SearchInput} from "./SearchInput";

export function MovieDetails(){
    let { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.oneMovieReducer.movie)

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU", {})
            .then(response => {
                console.log(response.data)
                const action = {type: "SET", payload: response.data};
                dispatch(action);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const Poster = (props) => {
        return (
            <img
                style={{
                    width: '20%',
                }}
                src={'https://image.tmdb.org/t/p/w500/' + props.poster_path}
                alt={"something went wrong"}/>
        )
    }

    return(
        <>
            <br/>

            <SearchInput/>
            <br/>
            <br/>

            <Poster
                poster_path={movie.poster_path}
            />
            <h1>{movie.original_title}</h1>
            <h5>{movie.overview}</h5>
            <h5>{movie.release_date}</h5>
            <h5>{movie.tagline}</h5>
            <h5>{movie.popularity}</h5>
        </>
    )
}