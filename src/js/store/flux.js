import { useState } from "react";

const URL_BASE = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			starship: [],
			planets: [],
			infoPlanets: [],
			nextPlanet: "",
			nextInfoPeople: "",
			nextInfoPlanet: "",
			nextPeople: ""
		},
		actions: {
			getPeople: () => {
				let url = getStore().nextPeople ? getStore().nextPeople : URL_BASE.concat("people?page=1&limit=10");

				fetch(url)
					.then(res => {
						if (!res.ok) {
							throw new Error("oops");
						}

						return res.json();
					})
					.then(jsonPeople => {
						setStore({ people: [...getStore().people, ...jsonPeople.results] });
						if (jsonPeople.next) {
							setStore({ nextPeople: jsonPeople.next });
						}
					})
					.catch(error => {
						console.log(error);
					});
			},
			getInfoPlanets: numberOfPlanet => {
				let urlInfoPlanets = URL_BASE.concat("planets/" + numberOfPlanet);
				console.log("soy URL info", urlInfoPlanets);

				fetch(urlInfoPlanets)
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal en infoPlanets");
						}

						return res.json();
					})
					.then(jsonInfoPlanets => {
						setStore({ nextInfoPlanet: jsonInfoPlanets.result.properties });
					});
			},
			getPlanets: planet => {
				let url =
					planet == 1
						? URL_BASE.concat("planets?page=1&limit=10")
						: URL_BASE.concat("planets?page=")
								.concat(planet)
								.concat("&limit=10");
				setStore({ planets: [] });
				fetch(url)
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal en Planets");
						}

						return res.json();
					})
					.then(jsonPlanets => {
						localStorage.setItem("planets", jsonPlanets.results);
						setStore({ ...setStore, planets: jsonPlanets.results });
						setStore({ ...setStore, nextPlanet: planet });
					});
			},

			getInfoPeople: numberOfPeople => {
				let urlInfoPeople = URL_BASE.concat("people/" + numberOfPeople);
				console.log("soy URL info", urlInfoPeople);

				fetch(urlInfoPeople)
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal en infoPeople");
						}

						return res.json();
					})
					.then(jsonInfoPeople => {
						setStore({ nextInfoPeople: jsonInfoPeople.result.properties });
					});
			},

			getPeople: people => {
				let url =
					people == 1
						? URL_BASE.concat("people?page=1&limit=10")
						: URL_BASE.concat("people?page=")
								.concat(people)
								.concat("&limit=10");
				setStore({ people: [] });
				fetch(url)
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal en Pipol");
						}

						return res.json();
					})
					.then(jsonPeople => {
						localStorage.setItem("people", jsonPeople.results);
						setStore({ ...setStore, people: jsonPeople.results });
						console.log("Hey", people);
					});
			},
			getPeopleDetails: uid => {
				fetch(URL_BASE.concat("people/", uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ peopleDetails: responseAsJson });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};
export default getState;
