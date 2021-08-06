import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="socialmediaLogos">
				<Link to="/">
					<img
						className="sWLogo"
						src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-png-transparent.png"
					/>
				</Link>
				<div className="socialMedia">
					<a href="https://www.facebook.com/StarWars/">
						<i className="fab fa-facebook-f" />
					</a>
					<a href="https://twitter.com/starwars?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
						<i className="fab fa-twitter" />
					</a>
					<a href="https://www.instagram.com/starwars/?hl=en">
						<i className="fab fa-instagram" />
					</a>
				</div>
			</div>

			<div className=" div_buttons ">
				<div className="ml-auto">
					<Link to="/">
						<button className="btn  ">People</button>
					</Link>
					<div className="ml-auto">
						<Link to="/">
							<button className="btn">Ships</button>
						</Link>
						<div className="ml-auto">
							<Link to="/">
								<button className="btn">Planets</button>
							</Link>
							<div className="ml-auto">
								<Link to="/">
									<button className="btn">Species</button>
								</Link>
								<div className="ml-auto">
									<Link to="/">
										<button className="btn">Favorites</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
