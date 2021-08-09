const URL_BASE = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			starship: [],
			planets: [],
			infoPlanets: [],
			nextPlanet: "",
			nextInfoPlanet: "",
			nextPeople: ""
		},
		actions: {
			getPlanets: () => {
				let url = getStore().nextPlanet ? getStore().nextPlanet : URL_BASE.concat("planets?page=1&limit=10");

				fetch(url)
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal en Planets");
						}

						return res.json();
					})
					.then(jsonPlanets => {
						setStore({ planets: [...getStore().planets, ...jsonPlanets.results] });
						if (jsonPlanets.next == "null") {
							//Quitar == "null" para que se carguen todas
							setStore({ nextPlanet: jsonPlanets.next });
							getActions().getPlanets();
						}
						console.log("Soy planetas", getStore().planets);
					});
			},
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
							getActions().getPeople();
						}
					})
					.catch(error => {
						console.log(error);
					});
			},

			getInfoPlanets: () => {
				let numberOfPlanet = 1;
				let urlInfoPlanets = URL_BASE.concat("planets/" + numberOfPlanet);
				console.log(urlInfoPlanets);

				fetch(urlInfoPlanets)
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal en infoPlanets");
						}

						return res.json();
					})
					.then(jsonInfoPlanets => {
						setStore({ infoPlanets: [...getStore().infoPlanets, jsonInfoPlanets] });
						if ((jsonInfoPlanets = !null && numberOfPlanet <= 10)) {
							setStore({ nextPlanet: jsonInfoPlanets.next });
							getActions().getInfoPlanets();
							numberOfPlanet = numberOfPlanet + 1;
						}
						console.log("Soy info planets", getStore().infoPlanets);
					});
			}
		}
	};
};
export default getState;
