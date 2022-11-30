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
    const [menuOpen, setMenuOpen] = useState(false);
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
        <main className="App">
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
                    <Route path={"/venus"} element={<PlanetContainer planetData={venusData} menuOpen={menuOpen}
                                                                     setMenuOpen={setMenuOpen}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={venusData} menuOpen={menuOpen}
                                                                          setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={venusData} menuOpen={menuOpen}
                                                                            setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={venusData} menuOpen={menuOpen}
                                                                        setMenuOpen={setMenuOpen}/>}/>
                    </Route>
                    <Route path={"/earth"} element={<PlanetContainer planetData={earthData} menuOpen={menuOpen}
                                                                     setMenuOpen={setMenuOpen}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={earthData} menuOpen={menuOpen}
                                                                          setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={earthData} menuOpen={menuOpen}
                                                                            setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={earthData}/>} menuOpen={menuOpen}
                               setMenuOpen={setMenuOpen}/>
                    </Route>
                    <Route path={"/mars"} element={<PlanetContainer planetData={marsData} menuOpen={menuOpen}
                                                                    setMenuOpen={setMenuOpen}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={marsData} menuOpen={menuOpen}
                                                                          setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={marsData} menuOpen={menuOpen}
                                                                            setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={marsData} menuOpen={menuOpen}
                                                                        setMenuOpen={setMenuOpen}/>}/>
                    </Route>
                    <Route path={"/jupiter"} element={<PlanetContainer planetData={jupiterData} menuOpen={menuOpen}
                                                                       setMenuOpen={setMenuOpen}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={jupiterData} menuOpen={menuOpen}
                                                                          setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={jupiterData} menuOpen={menuOpen}
                                                                            setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={jupiterData} menuOpen={menuOpen}
                                                                        setMenuOpen={setMenuOpen}/>}/>
                    </Route>
                    <Route path={"/saturn"} element={<PlanetContainer planetData={saturnData} menuOpen={menuOpen}
                                                                      setMenuOpen={setMenuOpen}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={saturnData} menuOpen={menuOpen}
                                                                          setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={saturnData} menuOpen={menuOpen}
                                                                            setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={saturnData} menuOpen={menuOpen}
                                                                        setMenuOpen={setMenuOpen}/>}/>
                    </Route>
                    <Route path={"/uranus"} element={<PlanetContainer planetData={uranusData} menuOpen={menuOpen}
                                                                      setMenuOpen={setMenuOpen}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={uranusData} menuOpen={menuOpen}
                                                                          setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={uranusData} menuOpen={menuOpen}
                                                                            setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={uranusData} menuOpen={menuOpen}
                                                                        setMenuOpen={setMenuOpen}/>}/>
                    </Route>
                    <Route path={"/neptune"} element={<PlanetContainer planetData={neptuneData} menuOpen={menuOpen}
                                                                       setMenuOpen={setMenuOpen}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={neptuneData} menuOpen={menuOpen}
                                                                          setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={neptuneData} menuOpen={menuOpen}
                                                                            setMenuOpen={setMenuOpen}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={neptuneData} menuOpen={menuOpen}
                                                                        setMenuOpen={setMenuOpen}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>}
        </main>
    );
}

export default App;
