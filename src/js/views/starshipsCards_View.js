import React, { useContext } from "react";
import { StarshipsCards } from "../component/starshipsCards";
import { Context } from "../store/appContext";

export const StarshipsCards_Views = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="startships_view_container">
				{store.starships.map((starship, index) => {
					return <StarshipsCards key={`starship-${index}`} name={starship.name} iam={starship.ind} />;
				})}
			</div>
			<section className="section_ships_btn">
				<button
					className="nextShips_btn"
					onClick={() => {
						actions.getStarhips(1);
					}}>
					1
				</button>
				<button
					className="nextShips_btn"
					onClick={() => {
						actions.getStarhips(2);
					}}>
					2
				</button>
				<button
					className="nextShips_btn"
					onClick={() => {
						actions.getStarhips(3);
					}}>
					3
				</button>
				<button
					className="nextShips_btn"
					onClick={() => {
						actions.getStarhips(4);
					}}>
					4
				</button>
			</section>
		</div>
	);
};
