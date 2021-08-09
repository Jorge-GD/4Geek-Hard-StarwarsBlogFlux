import React, { useState, useEffect, useContext, Fragment } from "react";

import { Context } from "../store/appContext";
import "../../styles/planetcardstyle.scss";
import PropTypes from "prop-types";

const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	const [properties, setProperties] = useState("card-content");
	const [infoPlanet, setInfoPlanet] = useState(store.infoPlanet);

	return (
		<div className="card">
			<div className={properties}>
				<h1 className="card-titel">{props.name_Planet}</h1>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name_Planet: PropTypes.string,
	url_Planet: PropTypes.string,
	iam_Planet: PropTypes.string
};

export default PlanetCard;
