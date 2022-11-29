import {Link, Outlet} from "react-router-dom";
import './PlanetContainer.css'

const PlanetContainer = (props) => {

    const handleClick = () => {
        props.setMenuOpen(false)
        console.log(props.menuOpen);
    }

    return (
        <section>
            <section className={props.menuOpen ? "mobile-nav" : "hidden-menu mobile-nav"}>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/mercury/overview"}>MERCURY</Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/venus/overview"}>VENUS</Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/earth/overview"}>EARTH</Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/mars/overview"}>MARS</Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/jupiter/overview"}>JUPITER</Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/saturn/overview"}>SATURN</Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/uranus/overview"}>URANUS</Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/neptune/overview"}>NEPTUNE</Link>
            </section>
            <section className={props.menuOpen ? "hidden" : "planet-container"}>
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