import { useState } from "react";

const URL_BASE = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			starships: [],
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
			getStarhips: (page = 1) => {
				fetch(URL_BASE.concat(`starships?page=${page}&limit=10`), {
					method: "GET",
					mode: "cors",
					redirect: "follow"
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Somethin is wrong", response.status);
						}
						return resp.json();
					})
					.then(starshipJSON => {
						console.log(starshipJSON);
						setStore({ starships: starshipJSON.results });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
	//
};

export default getState;
