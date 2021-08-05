import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/planet.scss";
import  PlanetCard from "../component/planetcard.js";
export const Demo = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="container">
			<PlanetCard/>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
