import React, {useRef} from "react";

export function FunctionComponent(props){
    const inputValue = useRef();

    function onClick() {
        props.alertMethod(inputValue.current.value)
    }

    return (
        <>
            <h1>Function Component</h1>
            <input ref={inputValue}/>
            <button onClick={onClick}>
                button
            </button>
            <h5>{props.content}</h5>
        </>
    )
}