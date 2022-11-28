import {useEffect, useState} from "react";
import './Planet.css';
import planet from "./Planet";

const Planet = (props) => {

    const [planetData, setPlanetData] = useState();
    const [viewSelected, setViewSelected] = useState("overview");


    const addPlanetData = async () => {
        await setPlanetData(props.data);
    }

    const handleClickView = (event) => {
        setViewSelected(event.target.value)
        console.log(viewSelected)
    }


    useEffect(() => {
        addPlanetData()
    }, [props.data])

    return (
        <div className={"planet-container"}>
            {planetData ? console.log(planetData) : ""}
            <div className={"planet-top-container"}>
                <div>
                    {viewSelected === "overview" || viewSelected === "geology" ?
                        <img src={planetData ? planetData.images.planet : ""}/>  :
                        viewSelected === "structure" ? <img src={planetData ? planetData.images.internal : ""} /> : ""}
                    {viewSelected === "geology" ? <img src={planetData ? planetData.images.geology : ""}/> : ""}

                </div>
                <div>
                    <p className={"planet-name"}>{planetData ? planetData.name : ""}</p>
                    <p className={"planet-description"}>{planetData ? planetData.overview.content : ""}</p>
                    <p className={"planet-source"}>Source : <a href={planetData ? planetData.overview.source : ""}>Wikipedia <img src={"./imgs/icon-source.svg"}/></a></p>
                    <div>
                        <button value={"overview"} onClick={handleClickView}>OVERVIEW</button>
                        <button value={"structure"} onClick={handleClickView}>INTERNAL STRUCTURE</button>
                        <button value={"geology"} onClick={handleClickView}>SURFACE GEOLOGY</button>
                    </div>
                </div>
            </div>
            <div className={"planet-bottom-container"}>
                <div className={"information-container"}>
                    <p>ROTATION TIME</p>
                    <p>{planetData ? planetData.rotation : ''}</p>
                </div>
                <div className={"information-container"}>
                    <p>REVOLUTION TIME</p>
                    <p>{planetData ? planetData.revolution : ''}</p>
                </div>
                <div className={"information-container"}>
                    <p>RADIUS</p>
                    <p>{planetData ? planetData.radius : ''}</p>
                </div>
                <div className={"information-container"}>
                    <p>AVERAGE TEMP</p>
                    <p>{planetData ? planetData.temperature : ''}</p>
                </div>
            </div>
        </div>
    )
}

export default Planet