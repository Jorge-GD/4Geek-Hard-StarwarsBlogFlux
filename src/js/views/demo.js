import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/planet.scss";
import PlanetCard from "/workspace/react-hello-webapp/src/js/component/planetcard.js";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [cardPlanet, setcardPlanet] = useState([]);

	useEffect(() => {
		setcardPlanet(
			store.planets.map((inside, ind) => {
				return (
					<PlanetCard name_Planet={inside.name} url_Planet={inside.url} key={ind} iam_Planet={inside.uid} />
				);
			})
		);
	}, []);

	return (
		<Fragment>
			<div className="planetcontainer">
				<div className="styleCardPlanet">
					{cardPlanet}
					<div className="planet">
						<div className="wrap">
							<div className="background" />
							<div className="clouds" />
						</div>

						<div className="mask" />
					</div>
				</div>
			</div>
		</Fragment>
	);
};
