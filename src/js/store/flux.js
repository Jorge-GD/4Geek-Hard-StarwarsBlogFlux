const URL_BASE = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			starship: [],
			planets: []
		},
		actions: {
			getPlanets: () => {
				let allPlanets = [];

				fetch(URL_BASE.concat("planets?page=1&limit=10"))
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
						jsonPlanets.results.map((planets, index) => {
							allPlanets.push(planets);
						});

						setStore({ planets: allPlanets });
					});
			}
		}
	};
};

export default getState;
