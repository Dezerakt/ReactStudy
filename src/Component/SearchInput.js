import {useRef} from "react";
import { useNavigate } from "react-router-dom";

export function SearchInput(){
    const inputValue = useRef();
    const navigate = useNavigate();

    const onClick = () => {
        console.log(inputValue.current.value)

        navigate('/search/' + formatsString())
        // history.push('/')
    }

    const formatsString = () => {
        const wordsArr = inputValue.current.value.split(' ');
        let formattedString = '';

        wordsArr.map(word => {
            formattedString += word + '+'
        })
        return formattedString.substring(0, formattedString.length - 1);
    }

    return (
        <>
            <input ref={inputValue}/>
            <button
                onClick={() => onClick()}
            >Search</button>
        </>
    )
}