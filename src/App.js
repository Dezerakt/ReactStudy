import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {UniversityList} from "./Components/UniversityList";
import {UniversityDetail} from "./Components/UniversityDetail";
import {SearchComponent} from "./Components/SearchComponent";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<UniversityList/>} />
            <Route path="/details/:name" element={<UniversityDetail/>} />
            <Route path="/search" element={<SearchComponent/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
