import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {SearchInput} from "./SearchInput";
import {Link} from "react-router-dom";

export function MovieList(){
    const movies = useSelector(state => state.movieReducer.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1', {})
            .then(response => {
                console.log(response.data.results)
                const action = {type: "SET", payload: response.data.results};
                dispatch(action);
            }).catch(error => {
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

    return (
        <>
            <h1>MovieList</h1>
            <SearchInput/>
            <br/>
            <br/>
            {
                movies ?
                    <div>
                        {
                            movies.map(movie => {
                                return(
                                    <a style={{
                                        width: '20%'
                                    }}
                                        href={'/details/' + movie.id}>
                                        <div>
                                            <Poster
                                                poster_path={movie.poster_path}
                                            />
                                        </div>
                                        <h4>{movie.original_title}</h4>
                                    </a>
                                )
                            })
                        }
                    </div>
                    :
                    null
            }
        </>
    )
}