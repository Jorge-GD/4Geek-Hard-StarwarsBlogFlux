import React, { useState, useEffect } from "react";

import "../../styles/planetcardstyle.scss";
import PropTypes from "prop-types";

const PlanetCard = props => {
	const [properties, setProperties] = useState();

	/*	useEffect(() => {
		fetch(props.url)
			.then(res => {
				if (!res.ok) {
					throw new Error("Algo ha ido mal");
				}
				return res.json();
			})
			.then(jsonInfoPlanets => {
				setProperties(jsonInfoPlanets.result);
			});
	}, []);*/

	return (
		<div className="card">
			<div className="card-content">
				<h1 className="card-titel">{props.name}</h1>
				<p className="card-description">Es un planeta</p>
				<a className="card-button">Un planetazo </a>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	iam: PropTypes.number
};

export default PlanetCard;
