import logo from './logo.svg';
import './App.css';
import {ClassComponent} from "./Components/ClassComponent";
import {FunctionComponent} from "./Components/FunctionComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    const alertIt = (content) => {
        alert(content)
    }

  return (
    <div className="App">
        {/*<ClassComponent
            alertMethod={alertIt}
            content={'ContentForClassComponent'}
            />
        <FunctionComponent
            alertMethod={alertIt}
            content={'ContentForFunctionComponent'}
        />*/}

        <Router>
            <Routes>
                <Route path={'/'} element={
                    <ClassComponent
                        alertMethod={alertIt}
                        content={'ContentForClassComponent'}
                    />
                }/>
                <Route path={'/function'} element={
                    <FunctionComponent
                        alertMethod={alertIt}
                        content={'ContentForFunctionComponent'}
                    />
                }/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
