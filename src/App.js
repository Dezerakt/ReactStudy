import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {MovieList} from "./Component/MovieList";
import {MovieDetails} from "./Component/MovieDetails";
import {useDispatch, useSelector} from "react-redux";
import {SearchList} from "./Component/SearchList";

function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<MovieList/>} />
                <Route path="/details/:id"  element={<MovieDetails/>} />
                <Route path="/search/:query" element={<SearchList/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
