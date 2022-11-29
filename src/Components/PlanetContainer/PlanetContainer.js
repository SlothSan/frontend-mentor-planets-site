import {Link, Outlet} from "react-router-dom";
import './PlanetContainer.css'

const PlanetContainer = (props) => {
    return (
        <section>
            <section className={"mobile-nav"}>
                <Link className={"nav-link-mobile"}
                      to={"/mercury/overview"}>MERCURY</Link>
                <Link className={"nav-link-mobile"}
                      to={"/venus/overview"}>VENUS</Link>
                <Link className={"nav-link-mobile"}
                      to={"/earth/overview"}>EARTH</Link>
                <Link className={"nav-link-mobile"}
                      to={"/mars/overview"}>MARS</Link>
                <Link className={"nav-link-mobile"}
                      to={"/jupiter/overview"}>JUPITER</Link>
                <Link className={"nav-link-mobile"}
                      to={"/saturn/overview"}>SATURN</Link>
                <Link className={"nav-link-mobile"}
                      to={"/uranus/overview"}>URANUS</Link>
                <Link className={"nav-link-mobile"}
                      to={"/neptune/overview"}>NEPTUNE</Link>
            </section>
            <section className={"planet-container"}>
                <Outlet/>
                <div className={"info-container"}>
                    <div className={"info-card-container"}>
                        <div className={"info-card"}>
                            <p className={"info-title"}>ROTATION TIME</p>
                            <p className={"info-text"}>{props.planetData.rotation}</p>
                        </div>
                        <div className={"info-card"}>
                            <p className={"info-title"}>REVOLUTION TIME</p>
                            <p className={"info-text"}>{props.planetData.revolution}</p>
                        </div>
                        <div className={"info-card"}>
                            <p className={"info-title"}>RADIUS</p>
                            <p className={"info-text"}>{props.planetData.radius}</p>
                        </div>
                        <div className={"info-card"}>
                            <p className={"info-title"}>AVERAGE TEMP.</p>
                            <p className={"info-text"}>{props.planetData.temperature}</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default PlanetContainer;