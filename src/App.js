import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Data from "./Assets/data/data.json";
import Nav from "./Components/Nav/Nav";
import PlanetContainer from "./Components/PlanetContainer/PlanetContainer";
import {useEffect, useState} from "react";

function App() {
    const [planetData, setPlanetData] = useState()

    const setData = async () => {
        await setPlanetData(Data);
    }

    useEffect(() => {
        setData();
    }, [Data])

    return (
        <div className="App">
            {console.log(planetData)}
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<PlanetContainer planetData={planetData[0]}/>}/>
                    <Route path={"/mercury/overview"} element={<PlanetContainer planetData={planetData[0]}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
