import Links from "../../Links/Links";

const PlanetOverview = (props) => {
    return (
        <div className={"planet-sub-container"}>
            <div className={"planet-image-container"}>
                <img className={"planet-image"} src={props.planetData.images.planet}
                     alt={`Image of ${props.planetData.name} overview`}/>
            </div>
            <div className={"planet-text-container"}>
                <div className={"planet-info-container"}>
                    <p className={"planet-name"}>{props.planetData.name.toUpperCase()}</p>
                    <p className={"planet-text"}>{props.planetData.overview.content}</p>
                    <p className={"source-text"}>Source : <a className={"source-link"}
                                                             href={props.planetData.overview.source}
                                                             target={"_blank"}>Wikipedia<img
                        src={"../imgs/icon-source.svg"}
                        alt={"source icon"}/></a></p>
                </div>
                <Links planetData={props.planetData}/>
            </div>
        </div>
    )
}

export default PlanetOverview