import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function App() {
    const [value, setValue] = useState(null);

    const firstInput = useRef();
    const secondInput = useRef();

    function checkSum(){
        console.log('checkSum event')

        const firstNum = parseInt(firstInput.current.value);
        const secondNum = parseInt(secondInput.current.value);

        if( firstNum + secondNum  !== value){
            console.log('setValue event' + "\n" + '---------------------------')
            setValue(firstNum + secondNum)
        }
    }

    return (
        <div className="App">
            <input
                type={"number"}
                ref={firstInput}
            />
            <input
                type={"number"}
                ref={secondInput}
            />
            <button onClick={checkSum}>sum</button>
            <br/>

            <h1>{value}</h1>
        </div>
  );
}

export default App;
