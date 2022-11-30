import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";

const Links = (props) => {

    const [currentPath, setCurrentPath] = useState('');

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location])

    return (
        <div className={props.className}>
            <Link
                className={currentPath.includes("overview") ? `${props.planetData.name.toLowerCase()}-active internal-link` : `internal-link`}
                to={"/" + props.planetData.name.toLowerCase() + "/overview"}><span>01</span>OVERVIEW</Link>
            <Link
                className={currentPath.includes("structure") ? `${props.planetData.name.toLowerCase()}-active internal-link` : `internal-link`}
                to={"/" + props.planetData.name.toLowerCase() + "/structure"}><span>02</span>INTERNAL STRUCTURE</Link>
            <Link
                className={currentPath.includes("geology") ? `${props.planetData.name.toLowerCase()}-active internal-link` : `internal-link`}
                to={"/" + props.planetData.name.toLowerCase() + "/geology"}><span>03</span>SURFACE GEOLOGY</Link>
        </div>
    )
}

export default Links