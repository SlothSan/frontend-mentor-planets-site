import {Link, Outlet} from "react-router-dom";
import './PlanetContainer.css'

const PlanetContainer = (props) => {
    return (
        <section className={"planet-container"}>
            <Outlet/>
            <div className={"info-container"}>
                <div className={"info-card-container"}>
                    <div className={"info-card"}>
                        <p className={"info-title"}>ROTATION TIME</p>
                        <p className={"info-text"}>{props.planetData.rotation}</p>
                    </div>
                    <div className={"info-card"}>
                        <p className={"info-title"}>REVOLUTION TIME</p>
                        <p className={"info-text"}>{props.planetData.revolution}</p>
                    </div>
                    <div className={"info-card"}>
                        <p className={"info-title"}>RADIUS</p>
                        <p className={"info-text"}>{props.planetData.radius}</p>
                    </div>
                    <div className={"info-card"}>
                        <p className={"info-title"}>AVERAGE TEMP.</p>
                        <p className={"info-text"}>{props.planetData.temperature}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlanetContainer;