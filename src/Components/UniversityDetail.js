import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function UniversityDetail(){
    const [university, setUniversity] = useState();

    let { name } = useParams();

    useEffect(() => {
        axios.get("http://universities.hipolabs.com/search?name=" + name, {})
            .then(response => {
                console.log(response.data['0'])
                setUniversity(response.data['0'])
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
                src={'https://logo.clearbit.com/' + props.domains}
                alt={"something went wrong"}/>
        )
    }

    return(
        <div
            style={{
                textAlign: "center",
            }}
        >
            {
                university ?
                    <>
                        <Poster
                            domains={university.domains[0]}
                        />
                        <h5>Alpha Two Code: {university.alpha_two_code}</h5>
                        <h5>Country: {university.country}</h5>
                        <h5>Domains: {university.domains[0]}</h5>
                        <h5>Links: {university.web_pages.map(pages => {
                            return <a href={pages}>{pages}</a>
                        })}</h5>
                    </> :
                    null
            }

        </div>
    )
}