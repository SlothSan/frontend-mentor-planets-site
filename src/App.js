import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Data from "./Assets/data/data.json";
import Nav from "./Components/Nav/Nav";
import PlanetContainer from "./Components/PlanetContainer/PlanetContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path={"/"} element={""}/>
                <Route path={"/mercury"} element={<PlanetContainer planetData={Data[0]}/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
