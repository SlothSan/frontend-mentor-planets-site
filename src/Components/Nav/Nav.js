import {Link} from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <nav className={"desktop-nav"}>
            <div>
                <h1 className={"nav-title"}>THE PLANETS</h1>
            </div>
            <div>
                <Link className={"nav-planet-link"} to={"/mercury/overview"}>MERCURY</Link>
                <Link className={"nav-planet-link"} to={"/venus/overview"}>VENUS</Link>
                <Link className={"nav-planet-link"} to={"/earth/overview"}>EARTH</Link>
                <Link className={"nav-planet-link"} to={"/mars/overview"}>MARS</Link>
                <Link className={"nav-planet-link"} to={"/jupiter/overview"}>JUPITER</Link>
                <Link className={"nav-planet-link"} to={"/saturn/overview"}>SATURN</Link>
                <Link className={"nav-planet-link"} to={"/uranus/overview"}>URANUS</Link>
                <Link className={"nav-planet-link"} to={"/neptune/overview"}>NEPTUNE</Link>
            </div>
        </nav>
    )
}

export default Nav;