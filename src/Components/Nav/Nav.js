import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={"desktop-nav"}>
            <div>
                <h1 className={"nav-title"}>THE PLANETS</h1>
            </div>
            <div>
                <Link to={"/mercury"}>MERCURY</Link>
                <Link to={"/venus"}>VENUS</Link>
                <Link to={"/earth"}>EARTH</Link>
                <Link to={"/mars"}>MARS</Link>
                <Link to={"/jupiter"}>JUPITER</Link>
                <Link to={"/saturn"}>SATURN</Link>
                <Link to={"/uranus"}>URANUS</Link>
                <Link to={"/neptune"}>NEPTUNE</Link>
            </div>
        </nav>
    )
}

export default Nav;