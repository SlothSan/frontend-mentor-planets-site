import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Data from "./Assets/data/data.json";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path={"/"} element={""}/>
                <Route path={"/mercury/overview"} element={""} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
