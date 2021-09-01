import React from "react";
import "../../styles/startshipsCards.scss";
import PropTypes from "prop-types";

export const StarshipsCards = ({ name }, { iam }) => {
	return (
		<div className="card_ships middle">
			<div className="card_front" />

			<div className="card_back">
				<div className="back-content middle">
					<h2 className="startship_name">{name}</h2>
					<span className="starship_type">{iam}</span>
					<p className="starship_information">
						X-wing starfighters were a type of starfighter marked by their distinctive S-foils that
						resembled the High Galactic script&apos;s character &quot;X&quot; in attack
						<a href="https://starwars.fandom.com/wiki/X-wing_starfighter"> formation</a>
					</p>
					<div className="starships_rrss">
						<a href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699">
							<i className="fab fa-facebook-f" />
						</a>
						<a href="https://twitter.com/starwars">
							<i className="fab fa-twitter" />
						</a>
						<a href="https://www.youtube.com/watch?v=YJL49bjGi5U">
							<i className="fab fa-youtube" />
						</a>
						<a href="https://www.instagram.com/starwars/">
							<i className="fab fa-instagram" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
StarshipsCards.propTypes = {
	name: PropTypes.string
};
