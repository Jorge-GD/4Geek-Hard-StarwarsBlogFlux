import React, { useContext, useState, useEffect } from "react";
import { link } from "react-router-dom";
import PeopleCard from "../component/peoplecard.js";
import "../../styles/peoplecardstyles.scss";
import { Context } from "../store/appContext.js";

const PeopleCardViews = () => {
	const { store, actions } = useContext(Context);
	const [peopleCardViewTab, setPeopleCardViewTab] = useState([]);

	useEffect(() => {
		console.log("is this shit even working", store.people.length);
		setPeopleCardViewTab(
			store.people.map((element, index) => {
				console.log("is this shit even working", store.people.length);
				return <PeopleCard name={element.name} url={element.url} key={element.uid} />;
			})
		);
	}, []);
	return <div> {peopleCardViewTab} </div>;
};

export default PeopleCardViews;
