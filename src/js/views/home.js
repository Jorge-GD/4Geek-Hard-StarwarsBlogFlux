import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import { Carrousel } from "../component/carrousel.js";
import PeopleCardViews from "./peoplecardviews.js";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<Carrousel />
		</Fragment>
	);
};
