import React, { useContext, useState, useEffect } from "react";
import { link } from "react-router-dom";
import PeopleCard from "../component/peoplecard.js";
import "../../styles/peoplecardstyles.scss";
import "../../styles/peoplecardviewstyles.scss";
import { Context } from "../store/appContext.js";

const PeopleCardViews = () => {
	const { store, actions } = useContext(Context);
	const [peopleCardViewTab, setPeopleCardViewTab] = useState([]);
	const [arrow, setArrow] = useState("");
	const [page, setPage] = useState(1);

	useEffect(
		() => {
			console.log(store.people);
			setPeopleCardViewTab(
				store.people.map((element, index) => {
					console.log(element, "Hoi");
					return (
						<PeopleCard
							name_People={element.name}
							url_People={element.url}
							id_People={element.uid}
							key={index.toString()}
							description="a star wars character"
						/>
					);
				})
			);

			console.log(peopleCardViewTab);
		},
		[store.people]
	);
	useEffect(
		() => {
			console.log("Soy page", page);
			actions.getPeople(page);
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
		<div>
			<button
				className="arrow right"
				onClick={() => {
					setPage(page + 1);
				}}
			/>
			<div className="cardsizingcontainer">
				{" "}
				{peopleCardViewTab}
				<button
					className="arrow left"
					onClick={() => {
						setPage(page - 1);
					}}
				/>
			</div>
		</div>
	);
};

export default PeopleCardViews;
