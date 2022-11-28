const PlanetStructure = (props) => {
    return (
        <div className={"planet-top-container"}>
            <div>
                <img src={"." + props.data ? props.data.images.internal : ""} />
            </div>
            <div>
                <p className={"planet-name"}>{props.data ? props.data.name : ""}</p>
                <p className={"planet-description"}>{props.data ? props.data.structure.content : ""}</p>
                <p className={"planet-source"}></p>
                <div>
                    <button value={"overview"} onClick={props.handleClickView}>OVERVIEW</button>
                    <button value={"structure"} onClick={props.handleClickView}>INTERNAL STRUCTURE</button>
                    <button value={"geology"}>SURFACE GEOLOGY</button>
                </div>
            </div>
        </div>
    )
}

export default PlanetStructure