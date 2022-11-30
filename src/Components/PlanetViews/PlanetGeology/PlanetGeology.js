import Links from "../../Links/Links";
import MobileLinks from "../../MobileLinks/MobileLinks";

const PlanetGeology = (props) => {
    return (
        <div className={"planet-sub-container"}>
            <MobileLinks className={"mobile-link-container"} planetData={props.planetData}/>
            <div className={"planet-image-container"}>
                <img className={"planet-image"} src={process.env.PUBLIC_URL + props.planetData.images.planet}
                     alt={`${props.planetData.name} overview`}/>
                <img className={"geology-image"} src={process.env.PUBLIC_URL + props.planetData.images.geology}
                     alt={`${[props.planetData.name]}'s geology`}/>
            </div>
            <div className={"planet-text-container"}>
                <div className={"planet-info-container"}>
                    <p className={"planet-name"}>{props.planetData.name.toUpperCase()}</p>
                    <p className={"planet-text"}>{props.planetData.geology.content}</p>
                    <p className={"source-text"}>Source : <a className={"source-link"}
                                                             href={props.planetData.geology.source}
                                                             target={"_blank"}>Wikipedia<img
                        src={process.env.PUBLIC_URL + "/imgs/icon-source.svg"}
                        alt={"source icon"}/></a></p>
                </div>
                <Links className={"internal-link-container"} planetData={props.planetData}/>
            </div>
        </div>

    )
}

export default PlanetGeology;