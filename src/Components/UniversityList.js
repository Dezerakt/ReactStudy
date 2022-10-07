import {useEffect, useMemo, useRef, useState} from "react";
import axios from "axios";
import React from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
import {SearchComponent} from "./SearchComponent";

export function UniversityList(){
    const [universities, setUniversities] = useState(null);
    const [page, setPage] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://universities.hipolabs.com/search', {})
            .then(response => {
                console.log(response.data)
                setUniversities(response.data)
            }).catch(error => {
            console.log(error)
        })
    }, [])

    const SearchInput = () => {
        const nameValue = useRef();
        const countryValue = useRef();

        const toSearch = () => {
            const name = nameValue.current.value ? nameValue.current.value : null;
            const country = countryValue.current.value ? countryValue.current.value : null;

            const searchParams = {
              name: name !== null ? name : ''
            };

            const getParams = () => {
                if(name !== null && country != null){
                    return createSearchParams(
                        {
                            name: name,
                            country: country
                        }
                    ).toString();
                } else if (name !== null){
                    return createSearchParams(
                        {
                            name: name
                        }
                    ).toString();
                } else if(country !== null){
                    return createSearchParams(
                        {
                            country: country
                        }
                    ).toString()
                }
            }

            navigate({
                pathname: '/search',
                search: getParams()
            })
        }

        return (
           <>
               <div
                    style={{
                        marginLeft: '10px'
                    }}
               >
                   <input
                       style={{
                           marginRight: '10px'
                       }}
                       ref={nameValue}
                       placeholder={'название'}
                   />
                   <select ref={countryValue}>
                       <option>{null}</option>
                       <option>USA</option>
                       <option>Canada</option>
                       <option>India</option>
                   </select>
                   <br/>
                   <br/>
                   <button onClick={toSearch}>искать</button>
               </div>
           </>
        )
    }

    return(
       <>
           <h1
            style={{
                textAlign: "center"
            }}
           >UnicList</h1>
           <SearchInput/>
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