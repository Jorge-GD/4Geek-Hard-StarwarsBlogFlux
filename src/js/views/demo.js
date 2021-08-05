import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/planet.scss";
import PlanetCard from "/workspace/react-hello-webapp/src/js/component/planetcard.js";
export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [cardPlanet, setcardPlanet] = useState(store.planets);

	useEffect(
		() => {
			setcardPlanet(
				store.planets.map((inside, ind) => {
					return <PlanetCard name={inside.name} url={inside.url} key={ind + 1} iam={ind} />;
				})
			);
		},
		[store.planets]
	);

	return (
		<Fragment>
			<div className="planetcontainer">
				<div className="styleCardPlanet">{cardPlanet}</div>
				<div className="planet">
					<div className="wrap">
						<div className="background" />
						<div className="clouds" />
					</div>
					<div className="mask" />
				</div>

				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</Fragment>
	);
};
