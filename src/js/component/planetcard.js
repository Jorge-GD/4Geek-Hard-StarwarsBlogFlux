import React, { useState, useEffect, useContext, Fragment } from "react";

import { Context } from "../store/appContext";
import "../../styles/planetcardstyle.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	const [properties, setProperties] = useState("card-content");
	const URL_Planet = "/planet/".concat(props.iam_Planet);

	return (
		<Link to={URL_Planet} className="card">
			<div className={properties}>
				<h3 className="card-titel">{props.name_Planet}</h3>
				<button
					className="fas fa-heart favIcon"
					onClick={event => {
						event.preventDefault();
					}}
				/>
			</div>
		</Link>
	);
};

PlanetCard.propTypes = {
	name_Planet: PropTypes.string,
	url_Planet: PropTypes.string,
	iam_Planet: PropTypes.string
};

export default PlanetCard;
