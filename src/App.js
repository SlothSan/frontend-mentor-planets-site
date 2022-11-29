import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Data from "./Assets/data/data.json";
import Nav from "./Components/Nav/Nav";
import PlanetContainer from "./Components/PlanetContainer/PlanetContainer";
import PlanetOverview from "./Components/PlanetViews/PlanetOverview/PlanetOverview";
import PlanetStructure from "./Components/PlanetViews/PlanetStructure/PlanetStructure";
import PlanetGeology from "./Components/PlanetViews/PlanetGeology/PlanetGeology";
import {useEffect, useState} from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(true);
    const [mercuryData, setMercuryData] = useState();
    const [venusData, setVenusData] = useState();
    const [earthData, setEarthData] = useState();
    const [marsData, setMarsData] = useState();
    const [jupiterData, setJupiterData] = useState();
    const [saturnData, setSaturnData] = useState();
    const [uranusData, setUranusData] = useState();
    const [neptuneData, setNeptuneData] = useState();

    useEffect(() => {
        setMercuryData(Data[0]);
        setVenusData(Data[1]);
        setEarthData(Data[2]);
        setMarsData(Data[3]);
        setJupiterData(Data[4]);
        setSaturnData(Data[5]);
        setUranusData(Data[6]);
        setNeptuneData(Data[7]);
        setIsLoading(false);
    }, [Data])
    return (
        <div className="App">
            {isLoading === true ? '' : <BrowserRouter>
                <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Routes>
                    <Route path={"*"} element={<PlanetContainer planetData={mercuryData} menuOpen={menuOpen}
                                                                setMenuOpen={setMenuOpen}/>}>
                        <Route path={"*"} element={<PlanetOverview planetData={mercuryData}/>}/>
                    </Route>
                    <Route path={"/mercury"} element={<PlanetContainer planetData={mercuryData} menuOpen={menuOpen}
                                                                       setMenuOpen={setMenuOpen}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={mercuryData} menuOpen={menuOpen}
                                                                          setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={mercuryData} menuOpen={menuOpen}
                                                                            setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={mercuryData} menuOpen={menuOpen}
                                                                        setMenuOpen={setMenuOpen}/>}/>
                    </Route>
                    <Route path={"/venus"} element={<PlanetContainer planetData={venusData}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={venusData}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={venusData}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={venusData}/>}/>
                    </Route>
                    <Route path={"/earth"} element={<PlanetContainer planetData={earthData}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={earthData}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={earthData}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={earthData}/>}/>
                    </Route>
                    <Route path={"/mars"} element={<PlanetContainer planetData={marsData}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={marsData}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={marsData}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={marsData}/>}/>
                    </Route>
                    <Route path={"/jupiter"} element={<PlanetContainer planetData={jupiterData}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={jupiterData}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={jupiterData}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={jupiterData}/>}/>
                    </Route>
                    <Route path={"/saturn"} element={<PlanetContainer planetData={saturnData}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={saturnData}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={saturnData}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={saturnData}/>}/>
                    </Route>
                    <Route path={"/uranus"} element={<PlanetContainer planetData={uranusData}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={uranusData}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={uranusData}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={uranusData}/>}/>
                    </Route>
                    <Route path={"/neptune"} element={<PlanetContainer planetData={neptuneData}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={neptuneData}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={neptuneData}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={neptuneData}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>}
        </div>
    );
}

export default App;
