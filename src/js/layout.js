import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Demo } from "./views/planet";
import { StarshipsCards_Views } from "./views/starshipsCards_View";
import PeopleCardViews from "./views/peoplecardviews";
import PeopleCardViewsDetail from "./views/peoplecardviews_detail";
import Planet from "./views/planet";
import PlanetInfo from "./views/planetinfo";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planet/">
							<Planet />
						</Route>
						<Route exact path="/planet/:id">
							<PlanetInfo />
						</Route>
						<Route exact path="/starships">
							<StarshipsCards_Views />
						</Route>
						<Route exact path="/people">
							<PeopleCardViews />
						</Route>
						<Route exact path="/people/:id">
							<PeopleCardViewsDetail />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
