import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto  text-center ">
		<div className="footer_div1">
			<ul className="galaxies">
				<h3 className="galaxies_title">Visit our galaxies</h3>
				<li>
					<a href="https://github.com/Azumydori">Victoria Laplana</a>
				</li>
				<li>
					<a href="https://github.com/Jorge-GD">Jorge G</a>
				</li>
				<li>
					<a href="https://github.com/fernandoavilesrosado">Fernando Avilés</a>
				</li>
			</ul>
		</div>

		<div className="footer_div2" />

		<div className="footer_div3">
			<ul className="galaxies">
				<h3 className="galaxies_title">Visit our galaxies</h3>
				<li>
					<a href="https://github.com/fernandoavilesrosado">characters</a>
				</li>
				<li>
					<a href="https://github.com/Azumydori">Planets</a>
				</li>
				<li>
					<a href="https://github.com/Jorge-GD">Starships</a>
				</li>
			</ul>
		</div>
	</footer>
);
