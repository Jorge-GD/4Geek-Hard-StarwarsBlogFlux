import React from "react";
import "../../styles/peoplecardstyles.scss";
import PropTypes from "prop-types";

const PeopleCard = props => {
	return (
		<div className="peopleCardContainer">
			<div className="peopleCardContent">
				<h1 className="peopleCardName">{props.name}</h1>
				<p className="peopleDescription" />
				<button className="peopleButton" />
			</div>
		</div>
	);
};

export default PeopleCard;

PeopleCard.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string
};
