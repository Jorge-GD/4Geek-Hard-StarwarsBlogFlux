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
				<h2 className="divider line glow">{infoPlanet.name} </h2>

				<div className="boardInfoPlanet">
					<div className="headerInfoPlanet">
						<img
							src="https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							className="image"
						/>
					</div>
					<div className="propertiesInfoPlanet">
						<h3 className="divider">Propiedades</h3>
						<div className="propertie">
							<div className="subPropertie">Clima:</div>
							<div>{infoPlanet.climate}</div>
						</div>
						<hr />
						<div className="propertie">
							<div className="subPropertie">Terreno:</div>
							<div>{infoPlanet.terrain}</div>
						</div>
						<hr />
						<div className="propertie">
							<div className="subPropertie">Superficie acuatica:</div>
							<div>{infoPlanet.surface_water}</div>
						</div>
						<hr />
						<div className="propertie">
							<div className="subPropertie">Gravedad:</div>
							<div>{infoPlanet.gravity}</div>
						</div>
						<hr />
						<div className="propertie">
							<div className="subPropertie">Diameter:</div>
							<div>{infoPlanet.diameter}</div>
						</div>
						<hr />

						<div className="propertie">
							<div className="subPropertie">Periodo orbital:</div>
							<div>{infoPlanet.orbital_period}</div>
						</div>
						<hr />
						<div className="propertie">
							<div className="subPropertie">Periodo de Rotacion:</div>
							<div>{infoPlanet.rotation_period}</div>
						</div>
						<hr />
						<div className="propertie">
							<div className="subPropertie">Poblacion:</div>
							<div>{infoPlanet.population}</div>
						</div>
						<hr />
						<div className="propertie">
							<button
								className="fas fa-heart favIcon"
								onClick={event => {
									event.preventDefault();
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PlanetInfo;
