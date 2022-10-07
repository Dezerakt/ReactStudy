import logo from './logo.svg';
import './App.css';
import {ClassComponent} from "./Components/ClassComponent";
import {FunctionComponent} from "./Components/FunctionComponent";

function App() {
  return (
    <div className="App">
        <ClassComponent
            content={'ContentForClassComponent'}
            />
        <br/>
        <FunctionComponent
            content={'ContentForFunctionComponent'}
        />
    </div>
  );
}

export default App;
