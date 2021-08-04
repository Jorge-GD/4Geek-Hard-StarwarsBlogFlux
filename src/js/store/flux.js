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
				fetch(URL_BASE.concat("planets"))
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal");
						}

						return res.json();
					})
					.then(jsonPlanets => console.log(jsonPlanets));
			}
		}
	};
};

export default getState;
