import {Link, useLocation} from "react-router-dom";
import './Nav.css';
import {useEffect, useState} from "react";

const Nav = () => {
    const [path, setPath] = useState('');

    const location = useLocation();

    useEffect(() => {
        //TODO fix the path on load to display as mercury
        setPath(location.pathname);
    }, [location])


    return (
        <nav className={"desktop-nav"}>
            <div>
                <h1 className={"nav-title"}>THE PLANETS</h1>
            </div>
            <div>
                <Link className={path.includes('mercury') ? "active-mercury nav-planet-link" : "nav-planet-link"}
                      to={"/mercury/overview"}>MERCURY</Link>
                <Link className={path.includes('venus') ? "active-venus nav-planet-link" : "nav-planet-link"}
                      to={"/venus/overview"}>VENUS</Link>
                <Link className={path.includes('earth') ? "active-earth nav-planet-link" : "nav-planet-link"}
                      to={"/earth/overview"}>EARTH</Link>
                <Link className={path.includes('mars') ? "active-mars nav-planet-link" : "nav-planet-link"}
                      to={"/mars/overview"}>MARS</Link>
                <Link className={path.includes('jupiter') ? "active-jupiter nav-planet-link" : "nav-planet-link"}
                      to={"/jupiter/overview"}>JUPITER</Link>
                <Link className={path.includes('saturn') ? "active-saturn nav-planet-link" : "nav-planet-link"}
                      to={"/saturn/overview"}>SATURN</Link>
                <Link className={path.includes('uranus') ? "active-uranus nav-planet-link" : "nav-planet-link"}
                      to={"/uranus/overview"}>URANUS</Link>
                <Link className={path.includes('neptune') ? "active-neptune nav-planet-link" : "nav-planet-link"}
                      to={"/neptune/overview"}>NEPTUNE</Link>
            </div>
        </nav>
    )
}

export default Nav;