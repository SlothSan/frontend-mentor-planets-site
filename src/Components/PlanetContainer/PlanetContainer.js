import {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import PlanetOverview from "../PlanetViews/PlanetOverview/PlanetOverview";
import PlanetStructure from "../PlanetViews/PlanetStructure/PlanetStructure";

const PlanetContainer = (props) => {

    const [planetData, setPlanetData] = useState();

    const setPlanetDataFromSource = async () => {
        await (setPlanetData(props.planetData))
    }

    useEffect(() => {
     setPlanetDataFromSource();
    }, [props.planetData])

    return (
        <section className={"planet-container"}>
            <Link to={"overview"}>Overview</Link>
            <Link to={"structure"}>Structure</Link>
            <Routes>
                <Route path={"*"} element={""} />
                <Route path={planetData ? planetData.name : "" + "/structure"} element={<PlanetStructure />}/>
                <Route path={"overview"} element={<PlanetOverview />}/>
            </Routes>
        </section>
    )
}

export default PlanetContainer;