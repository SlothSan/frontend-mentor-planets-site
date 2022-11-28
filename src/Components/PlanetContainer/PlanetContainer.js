import {Link, Outlet} from "react-router-dom";

const PlanetContainer = (props) => {
    return (
        <section className={"planet-container"}>
            <Link to={"/" + props.planetData.name.toLowerCase() + "/overview"}>Overview</Link>
            <Link to={"/" + props.planetData.name.toLowerCase() + "/structure"}>Structure</Link>
            <Link to={"/" + props.planetData.name.toLowerCase() + "/geology"}>Geology</Link>
            <Outlet/>
        </section>
    )
}

export default PlanetContainer;