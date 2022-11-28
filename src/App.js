import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Data from "./Assets/data/data.json";
import Nav from "./Components/Nav/Nav";
import Planet from "./Components/Planet/Planet";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path={"/"} element={<Planet data={Data[0]}/>}/>
                <Route path={"/mercury"} element={<Planet data={Data[0]}/>} />
                <Route path={"/venus"} element={<Planet data={Data[1]}/>} />
                <Route path={"/earth"} element={<Planet data={Data[2]}/>} />
                <Route path={"/mars"} element={<Planet data={Data[3]}/>} />
                <Route path={"/jupiter"} element={<Planet data={Data[4]}/>} />
                <Route path={"/saturn"} element={<Planet data={Data[5]}/>} />
                <Route path={"/uranus"} element={<Planet data={Data[6]}/>} />
                <Route path={"/neptune"} element={<Planet data={Data[7]}/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
