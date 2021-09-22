import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/infoplanet.scss";

import { useParams } from "react-router-dom";

const PlanetInfo = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [infoPlanet, setInfoPlanet] = useState("");

	useEffect(() => {
		actions.getInfoPlanets(params.id);
	}, []);
	useEffect(
		() => {
			setInfoPlanet(store.nextInfoPlanet);
			console.log("Soy pietro", store.nextInfoPlanet.name);
		},
		[store.nextInfoPlanet]
	);

	return (
		<Fragment>
			<div className="containerInfoPlanet">
				<div className="headerInfoPlanet">
					<img
						src="https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						className="image"
					/>
				</div>
				<h2 className="divider line glow">{infoPlanet.name}</h2>
				<div className="boardInfoPlanet">
					<div className="propertie">
						<div className="subPropertie">Clima:</div>
						<div>{infoPlanet.climate}</div>
					</div>
					<div className="propertie">
						<div className="subPropertie">Terreno:</div>
						<div>{infoPlanet.terrain}</div>
					</div>
					<div className="propertie">
						<div className="subPropertie">Superficie acuatica:</div>
						<div>{infoPlanet.surface_water}</div>
					</div>
					<div className="propertie">
						<div className="subPropertie">Gravedad:</div>
						<div>{infoPlanet.gravity}</div>
					</div>
					<div className="propertie">
						<div className="subPropertie">Diameter:</div>
						<div>{infoPlanet.diameter}</div>
					</div>

					<div className="propertie">
						<div className="subPropertie">Periodo orbital:</div>
						<div>{infoPlanet.orbital_period}</div>
					</div>
					<div className="propertie">
						<div className="subPropertie">Periodo de Rotacion:</div>
						<div>{infoPlanet.rotation_period}</div>
					</div>
					<div className="propertie">
						<div className="subPropertie">Poblacion:</div>
						<div>{infoPlanet.population}</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PlanetInfo;
