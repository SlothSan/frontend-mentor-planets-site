import {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import PlanetOverview from "../PlanetViews/PlanetOverview/PlanetOverview";
import PlanetStructure from "../PlanetViews/PlanetStructure/PlanetStructure";

const PlanetContainer = (props) => {
    return (
        <section className={"planet-container"}>
            <Link to={props.planetData.name + "/overview"}>Overview</Link>
            <Link to={"/structure"}>Structure</Link>
            <Link to={"/geology"}>Geology</Link>
            <Routes>
                <Route path={"/*"} element={<PlanetOverview/>}/>
                <Route path={props.planetData ? props.planetData.name : "" + "/structure"}
                       element={<PlanetStructure/>}/>
                <Route path={"/overview"} element={<PlanetOverview/>}/>
            </Routes>
        </section>
    )
}

export default PlanetContainer;