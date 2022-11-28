import {Link} from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <nav className={"desktop-nav"}>
            <div>
                <h1 className={"nav-title"}>THE PLANETS</h1>
            </div>
            <div>
                <Link className={"nav-planet-link"} to={"/mercury"}>MERCURY</Link>
                <Link className={"nav-planet-link"} to={"/venus"}>VENUS</Link>
                <Link className={"nav-planet-link"} to={"/earth"}>EARTH</Link>
                <Link className={"nav-planet-link"} to={"/mars"}>MARS</Link>
                <Link className={"nav-planet-link"} to={"/jupiter"}>JUPITER</Link>
                <Link className={"nav-planet-link"} to={"/saturn"}>SATURN</Link>
                <Link className={"nav-planet-link"} to={"/uranus"}>URANUS</Link>
                <Link className={"nav-planet-link"} to={"/neptune"}>NEPTUNE</Link>
            </div>
        </nav>
    )
}

export default Nav;