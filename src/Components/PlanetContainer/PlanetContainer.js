import {Link, Outlet} from "react-router-dom";
import './PlanetContainer.css'
import Chevron from '../../Assets/imgs/icon-chevron.svg'

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
                      to={"/mercury/overview"}>
                    <div className={"left-container"}>
                        <div className={"mercury-icon"}></div>
                        MERCURY
                    </div>
                    <div className={"right-container"}>
                        <img src={Chevron} alt={"chevron icon"}/>
                    </div>
                </Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/venus/overview"}>
                    <div className={"left-container"}>
                        <div className={"venus-icon"}></div>
                        VENUS
                    </div>
                    <div className={"right-container"}>
                        <img src={Chevron} alt={"chevron icon"}/>
                    </div>
                </Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/earth/overview"}>
                    <div className={"left-container"}>
                        <div className={"earth-icon"}></div>
                        EARTH
                    </div>
                    <div className={"right-container"}>
                        <img src={Chevron} alt={"chevron icon"}/>
                    </div>
                </Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/mars/overview"}>
                    <div className={"left-container"}>
                        <div className={"mars-icon"}></div>
                        MARS
                    </div>
                    <div className={"right-container"}>
                        <img src={Chevron} alt={"chevron icon"}/>
                    </div>
                </Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/jupiter/overview"}>
                    <div className={"left-container"}>
                        <div className={"jupiter-icon"}></div>
                        JUPITER
                    </div>
                    <div className={"right-container"}>
                        <img src={Chevron} alt={"chevron icon"}/>
                    </div>
                </Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/saturn/overview"}>
                    <div className={"left-container"}>
                        <div className={"saturn-icon"}></div>
                        SATURN
                    </div>
                    <div className={"right-container"}>
                        <img src={Chevron} alt={"chevron icon"}/>
                    </div>
                </Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/uranus/overview"}>
                    <div className={"left-container"}>
                        <div className={"uranus-icon"}></div>
                        URANUS
                    </div>
                    <div className={"right-container"}>
                        <img src={Chevron} alt={"chevron icon"}/>
                    </div>
                </Link>
                <Link className={"nav-link-mobile"}
                      onClick={handleClick}
                      to={"/neptune/overview"}>
                    <div className={"left-container"}>
                        <div className={"neptune-icon"}></div>
                        NEPTUNE
                    </div>
                    <div className={"right-container"}>
                        <img src={Chevron} alt={"chevron icon"}/>
                    </div>
                </Link>
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