import {Link} from "react-router-dom";

const Links = (props) => {
    return (
        <div className={"internal-link-container"}>
            <Link className={"internal-link"}
                  to={"/" + props.planetData.name.toLowerCase() + "/overview"}><span>01</span>Overview</Link>
            <Link className={"internal-link"}
                  to={"/" + props.planetData.name.toLowerCase() + "/structure"}><span>02</span>Structure</Link>
            <Link className={"internal-link"}
                  to={"/" + props.planetData.name.toLowerCase() + "/geology"}><span>03</span>Geology</Link>
        </div>
    )
}

export default Links