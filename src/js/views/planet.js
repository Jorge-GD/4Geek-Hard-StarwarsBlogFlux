import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/planet.scss";
import PlanetCard from "../component/planetcard.js";

const Planet = () => {
	const { store, actions } = useContext(Context);
	const [cardPlanet, setcardPlanet] = useState([]);
	const [arrow, setArrow] = useState("");
	const [page, setPage] = useState(1);

	useEffect(
		() => {
			console.log("Soy store planet", store.planets);
			setcardPlanet(
				store.planets.map((inside, ind) => {
					console.log("Soy inside", inside);
					return (
						<PlanetCard
							name_Planet={inside.name}
							url_Planet={inside.url}
							key={ind}
							iam_Planet={inside.uid}
							className={"plt"}
						/>
					);
				})
			);
		},
		[store.planets]
	);
	useEffect(
		() => {
			console.log("Soy page", page);
			actions.getPlanets(page);
			page > 1
				? setArrow(
						<button
							className="arrow left"
							onClick={() => {
								setPage(page - 1);
							}}
						/>
				  )
				: setArrow("");
		},
		[page]
	);

	return (
		<Fragment>
			<div className="planetcontainer">
				<div className="planetBoard">
					{cardPlanet}
					<button
						className="arrow right"
						onClick={() => {
							setPage(page + 1);
						}}
					/>

					{arrow}
				</div>
				<div className="planet">
					<div className="wrap">
						<div className="background" />
						<div className="clouds" />
					</div>
					<div className="mask" />
				</div>
			</div>
		</Fragment>
	);
};
export default Planet;
