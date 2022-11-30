import Links from "../../Links/Links";
import MobileLinks from "../../MobileLinks/MobileLinks";

const PlanetStructure = (props) => {
    return (
        <section className={"planet-sub-container"}>
            <MobileLinks className={"mobile-link-container"} planetData={props.planetData}/>
            <section className={"planet-image-container"}>
                <img className={"planet-image"} src={process.env.PUBLIC_URL + props.planetData.images.internal}
                     alt={`${props.planetData.name} structure`}/>
            </section>
            <section className={"planet-text-container"}>
                <div className={"planet-info-container"}>
                    <p className={"planet-name"}>{props.planetData.name.toUpperCase()}</p>
                    <p className={"planet-text"}>{props.planetData.structure.content}</p>
                    <p className={"source-text"}>Source : <a className={"source-link"}
                                                             href={props.planetData.structure.source}
                                                             target={"_blank"}>Wikipedia<img
                        src={process.env.PUBLIC_URL + "/imgs/icon-source.svg"}
                        alt={"source icon"}/></a></p>
                </div>
                <Links className={"internal-link-container"} planetData={props.planetData}/>
            </section>
        </section>

    )
}

export default PlanetStructure