const URL_BASE = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			starship: [],
			planets: [],
			nextPlanet: ""
		},
		actions: {
			getPlanets: () => {
				let url = getStore().nextPlanet ? getStore().nextPlanet : URL_BASE.concat("planets?page=1&limit=10");

				fetch(url)
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal");
						}

						return res.json();
					})
					.then(jsonPlanets => console.log(jsonPlanets));
			},
			//
			getStarhips: () => {
				fetch(URL_BASE.concat("starship"))
					.then(response => {
						if (!response.ok) {
							throw new Error("Something is wrong");
						}
						return response.json();
					})
					.then(jsonStarships => startship[jsonStarships])
				//console.log(jsonStarships);
					.then(jsonPlanets => {
						setStore({ planets: [...getStore().planets, ...jsonPlanets.results].flat() });
						if (jsonPlanets.next == "null") {
							//Quitar == "null" para que se carguen todas
							setStore({ nextPlanet: jsonPlanets.next });
							getActions().getPlanets();
						}
						console.log(getStore().planets);
					});
			}
		}
	};
};

export default getState;
