import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

import { Carrousel } from "../component/carrousel.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<Carrousel />
		</Fragment>
	);
};
