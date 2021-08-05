const URL_BASE = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			starship: [],
			planets: []
		},
		actions: {
			getPeople: () => {
				fetch(URL_BASE.concat("people"))
					.then(res => {
						if (!res.ok) {
							throw new Error("Algo ha ido mal");
						}

						return res.json();
					})
					.then(jsonPeople => console.log(jsonPeople));
			}
		}
	};
};
export default getState;
