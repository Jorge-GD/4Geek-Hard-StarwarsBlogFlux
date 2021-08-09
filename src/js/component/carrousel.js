import React, { useEffect, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/carrouselstyle.scss";

export const Carrousel = () => {
	return (
		<Fragment>
			<section id="slideshow">
				<div className="entire-content">
					<div className="content-carrousel">
						<figure className="shadow ">
							<img
								src="https://media.giphy.com/media/SiEz6hxdcJuOf2n3TE/giphy.gif"
								alt="Naves Spaciales"
							/>
							<h1 className="title_Carrousel">Naves Spaciales</h1>
						</figure>
						<figure className="shadow ">
							<img src="https://media.giphy.com/media/3FQ9mRcb94aogeTvmj/giphy.gif" alt="Species" />
							<h1 className="title_Carrousel">Species</h1>
						</figure>
						<figure className="shadow ">
							<Link to="/Demo">
								<img
									src="https://media.giphy.com/media/3K0D1Dkqh9MOmLSjzW/giphy.gif"
									alt="Death Stars kaboom"
								/>
								<h1 className="title_Carrousel">Planetas</h1>
							</Link>
						</figure>

						<figure className="shadow ">
							<img src="https://media.giphy.com/media/UG2PNPF0N2ro4/giphy.gif" alt="vehicles" />
							<h1 className="title_Carrousel">Vehiculos</h1>
						</figure>
						<figure className="shadow ">
							<img src="https://media.giphy.com/media/5wikad3qSOqAg/giphy.gif" alt="Fims" />
							<h1 className="title_Carrousel">Peliculas</h1>
						</figure>

						<figure className="shadow ">
							<img
								src="https://media.giphy.com/media/3owzVYjZSzuFivWpHi/giphy.gif"
								alt="Luke quitandose la capa"
							/>
							<h1 className="title_Carrousel">People</h1>
						</figure>
					</div>
				</div>
			</section>
		</Fragment>
	);
};
