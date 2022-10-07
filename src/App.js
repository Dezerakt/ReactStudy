import logo from './logo.svg';
import './App.css';
import {ClassComponent} from "./Components/ClassComponent";
import {FunctionComponent} from "./Components/FunctionComponent";

function App() {
    const alertIt = (content) => {
        alert(content)
    }

  return (
    <div className="App">
        <ClassComponent
            alertMethod={alertIt}
            content={'ContentForClassComponent'}
            />
        <br/>
        <FunctionComponent
            alertMethod={alertIt}
            content={'ContentForFunctionComponent'}
        />
    </div>
  );
}

export default App;
