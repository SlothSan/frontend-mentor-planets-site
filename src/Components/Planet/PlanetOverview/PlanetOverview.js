const PlanetOverview = (props) => {
    return (
            <div className={"planet-top-container"}>
                <div>
                    <img src={"." + props.data ? props.data.images.planet : ""} />
                </div>
                <div>
                    <p className={"planet-name"}>{props.data ? props.data.name : ""}</p>
                    <p className={"planet-description"}>{props.data ? props.data.overview.content : ""}</p>
                    <p className={"planet-source"}></p>
                    <div>
                        <button className={"active link-button"} value={"overview"} onClick={props.handleClickView}>OVERVIEW</button>
                        <button className={"link-button"} value={"structure"} onClick={props.handleClickView}>INTERNAL STRUCTURE</button>
                        <button className={"link-button"} value={"geology"} onClick={props.handleClickView}>SURFACE GEOLOGY</button>
                    </div>
                </div>
            </div>
    )
}

export default PlanetOverview;
