import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const MobileLinks = (props) => {

    const [currentPath, setCurrentPath] = useState('');

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location])

    return (
        <div className={props.className}>
            <Link
                className={currentPath.includes("overview") ? `${props.planetData.name.toLowerCase()}-active mobile-link` : `mobile-link`}
                to={"/" + props.planetData.name.toLowerCase() + "/overview"}>OVERVIEW</Link>
            <Link
                className={currentPath.includes("structure") ? `${props.planetData.name.toLowerCase()}-active mobile-link` : `mobile-link`}
                to={"/" + props.planetData.name.toLowerCase() + "/structure"}>STRUCTURE</Link>
            <Link
                className={currentPath.includes("geology") ? `${props.planetData.name.toLowerCase()}-active mobile-link` : `mobile-link`}
                to={"/" + props.planetData.name.toLowerCase() + "/geology"}>SURFACE</Link>
        </div>
    )
}

export default MobileLinks;
