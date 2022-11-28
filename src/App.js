import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Data from "./Assets/data/data.json";
import Nav from "./Components/Nav/Nav";
import PlanetContainer from "./Components/PlanetContainer/PlanetContainer";
import PlanetOverview from "./Components/PlanetViews/PlanetOverview/PlanetOverview";
import PlanetStructure from "./Components/PlanetViews/PlanetStructure/PlanetStructure";
import PlanetGeology from "./Components/PlanetViews/PlanetGeology/PlanetGeology";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path={"*"} element={<PlanetContainer planetData={Data[0]}/>}>
                        <Route path={"*"} element={<PlanetOverview planetData={Data[0]}/>}/>
                    </Route>
                    <Route path={"/mercury"} element={<PlanetContainer planetData={Data[0]}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={Data[0]}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={Data[0]}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={Data[0]}/>}/>
                    </Route>
                    <Route path={"/venus"} element={<PlanetContainer planetData={Data[1]}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={Data[1]}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={Data[1]}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={Data[1]}/>}/>
                    </Route>
                    <Route path={"/earth"} element={<PlanetContainer planetData={Data[2]}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={Data[2]}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={Data[2]}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={Data[2]}/>}/>
                    </Route>
                    <Route path={"/mars"} element={<PlanetContainer planetData={Data[3]}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={Data[3]}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={Data[3]}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={Data[3]}/>}/>
                    </Route>
                    <Route path={"/jupiter"} element={<PlanetContainer planetData={Data[4]}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={Data[4]}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={Data[4]}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={Data[4]}/>}/>
                    </Route>
                    <Route path={"/saturn"} element={<PlanetContainer planetData={Data[5]}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={Data[5]}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={Data[5]}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={Data[5]}/>}/>
                    </Route>
                    <Route path={"/uranus"} element={<PlanetContainer planetData={Data[6]}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={Data[6]}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={Data[6]}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={Data[6]}/>}/>
                    </Route>
                    <Route path={"/neptune"} element={<PlanetContainer planetData={Data[7]}/>}>
                        <Route path={"overview"} element={<PlanetOverview planetData={Data[7]}/>}/>
                        <Route path={"structure"} element={<PlanetStructure planetData={Data[7]}/>}/>
                        <Route path={"geology"} element={<PlanetGeology planetData={Data[7]}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
