import Links from "../../Links/Links";

const PlanetStructure = (props) => {
    return (
        <div className={"planet-sub-container"}>
            <div className={"planet-image-container"}>
                <img className={"planet-image"} src={props.planetData.images.internal}
                     alt={`${props.planetData.name} structure`}/>
            </div>
            <div className={"planet-text-container"}>
                <div className={"planet-info-container"}>
                    <p className={"planet-name"}>{props.planetData.name.toUpperCase()}</p>
                    <p className={"planet-text"}>{props.planetData.structure.content}</p>
                    <p className={"source-text"}>Source : <a className={"source-link"}
                                                             href={props.planetData.structure.source}
                                                             target={"_blank"}>Wikipedia<img
                        src={"../imgs/icon-source.svg"}
                        alt={"source icon"}/></a></p>
                </div>
                <Links planetData={props.planetData}/>
            </div>
        </div>

    )
}

export default PlanetStructure