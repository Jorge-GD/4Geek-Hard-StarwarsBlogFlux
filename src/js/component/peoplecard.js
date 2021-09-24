import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/peoplecardstyles.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PeopleCard = props => {
	const { store, actions } = useContext(Context);
	const [properties, setProperties] = useState("peopleCardContent");
	const URL_People = "/people/".concat(props.id_People);
	console.log(props.id_People);
	return (
		<Link to={URL_People} className="peopleCardContainer">
			<div className={properties}>
				<h3 className="peopleCardName">{props.name_People}</h3>
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

PeopleCard.propTypes = {
	name_People: PropTypes.string,
	url_People: PropTypes.string,
	id_People: PropTypes.string
};

export default PeopleCard;
