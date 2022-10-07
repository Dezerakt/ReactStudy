import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import React from "react";

export function SearchComponent(){
    const [ searchParams ]  = useSearchParams();
    const [page, setPage] = useState(0);

    const [universities, setUniversities] = useState();

    const name = searchParams.get('name');
    const country = searchParams.get('country');

    const getURI = useMemo(() => {
        if(name !== null && country !== null){
            return 'name='+name+' '+'country='+country;
        } else if(name !== null){
            return 'name='+name;
        } else if(country !== null){
            return 'country='+country;
        }
    }, [name, country])

    const url ='http://universities.hipolabs.com/search?' + getURI;

    useEffect(() => {
        axios.get(url, {})
            .then(response => {
                console.log('url' + url)
                console.log(response.data)
                setUniversities(response.data)
            }).catch(error => {
            console.log(error)
        })
    }, [])

    console.log(searchParams.get('name'))

    return (
        <>
            {
                universities ?
                    <>

                            {
                                universities.slice(page, page + 10).map(unic => {
                                    return(
                                        <p
                                        >
                                        <div
                                            style={{
                                                border: "solid 2px gray",
                                                paddingLeft: '10px'
                                            }}
                                        >
                                            <a
                                                style={{
                                                    width: '20%'
                                                }}
                                                href={'/details/' + unic.name}>

                                                <h4>{unic.name}</h4>
                                            </a>
                                            <text>Country: {unic.country}</text>
                                            <br/>
                                            <text>Site: {unic.web_pages[0]}</text>
                                            <br/>
                                        </div>

                                        </p>
                                    )
                                })
                            }

                        </>
                    :
                    null
            }
        </>
    )
}