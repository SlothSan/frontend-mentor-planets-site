import {useEffect, useState} from "react";
import './Planet.css';
import planet from "./Planet";
import PlanetOverview from "./PlanetOverview/PlanetOverview";
import PlanetStructure from "./PlanetStructure/PlanetStructure";

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
            { console.log(planetData) }
            {viewSelected === "overview" ?
                <PlanetOverview data={planetData} handleClickView={handleClickView}/>  : ""}
            {viewSelected === "structure" ?
                <PlanetStructure data={planetData} handleClickView={handleClickView}/> : ""}

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