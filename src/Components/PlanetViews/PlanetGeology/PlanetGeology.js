import Links from "../../Links/Links";

const PlanetGeology = (props) => {
    return (
        <div className={"planet-sub-container"}>
            <div className={"planet-image-container"}>
                <img className={"planet-image"} src={props.planetData.images.planet}
                     alt={`${props.planetData.name} overview`}/>
                <img className={"geology-image"} src={props.planetData.images.geology}
                     alt={`${[props.planetData.name]}'s geology`}/>
            </div>
            <div className={"planet-text-container"}>
                <div className={"planet-info-container"}>
                    <p className={"planet-name"}>{props.planetData.name.toUpperCase()}</p>
                    <p className={"planet-text"}>{props.planetData.geology.content}</p>
                    <p className={"source-text"}>Source : <a className={"source-link"}
                                                             href={props.planetData.geology.source}
                                                             target={"_blank"}>Wikipedia<img
                        src={"../imgs/icon-source.svg"}
                        alt={"source icon"}/></a></p>
                </div>
                <Links planetData={props.planetData}/>
            </div>
        </div>

    )
}

export default PlanetGeology;