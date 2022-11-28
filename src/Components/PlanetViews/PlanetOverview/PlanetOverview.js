const PlanetOverview = (props) => {
    return (
        <div className={"planet-sub-container"}>
            {console.log(props.planetData)}
            <div className={"planet-image-container"}>
                <img className={"planet-image"} src={props.planetData.images.planet}
                     alt={`Image of ${props.planetData.name} overview`}/>
            </div>
            <div className={"planet-text-container"}>
                <p className={"planet-name"}>{props.planetData.name}</p>
                <p className={"planet-text"}>{props.planetData.overview.content}</p>

            </div>
        </div>
    )
}

export default PlanetOverview