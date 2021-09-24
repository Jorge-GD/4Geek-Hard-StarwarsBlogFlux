import React, { useContext, useEffect, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/peopledetailview.scss";

const PlanetInfo = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [infoPeople, setInfoPeople] = useState("");

	useEffect(() => {
		actions.getInfoPeople(params.id);
	}, []);
	useEffect(
		() => {
			actions.getInfoPeople(params.id);
			setInfoPeople(store.nextInfoPeople);
		},
		[store.nextInfoPeople]
	);

	return (
		<Fragment>
			<div className="containerInfoPeople">
				<div className="headerInfoPeople">
					<img
						src="https://www.gannett-cdn.com/-mm-/355c2cd9075cd864d3001e4b6d843f2c3d78291f/c=0-0-2449-1384/local/-/media/2017/05/23/USATODAY/USATODAY/636311489802186136-XXX-PHANTOMMENACE-EP1-IA-71628-R-78032964.JPG"
						className="imagePeople"
					/>
				</div>
				<h2 className="divider line glow">{infoPeople.name} </h2>
				<div className="peopleGeneralInfo">
					<div className="properties">
						<div className="subProperties">Gender:</div>
						<div className="infoForPeople">{infoPeople.gender}</div>
					</div>
					<div className="properties">
						<div className="subProperties">Birth Year:</div>
						<div className="infoForPeople">{infoPeople.birth_year}</div>
					</div>
					<div className="properties">
						<div className="subProperties">Height:</div>
						<div className="infoForPeople">{infoPeople.height} cm</div>
					</div>
					<div className="properties">
						<div className="subProperties">Mass:</div>
						<div className="infoForPeople">{infoPeople.mass}</div>
					</div>

					<div className="properties">
						<div className="subProperties">Skin color:</div>
						<div className="infoForPeople">{infoPeople.skin_color}</div>
					</div>
					<div className="properties">
						<div className="subProperties">Eye color:</div>
						<div className="infoForPeople">{infoPeople.eye_color}</div>
					</div>
					<div className="properties">
						<div className="subProperties">Hair color:</div>
						<div className="infoForPeople">{infoPeople.hair_color}</div>
					</div>
					<div className="properties">
						<div className="subProperties">Description:</div>
						<div className="infoForPeople">{infoPeople.description}</div>
					</div>
					<div className="properties">
						<button
							className="fas fa-heart favIcon"
							onClick={event => {
								event.preventDefault();
							}}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PlanetInfo;
