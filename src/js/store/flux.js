const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api/",
			resources: [],
			films: [],
			people: [],
			planets: [],
			species: [],
			starships: [],
			vehicles: [],
			favourites: []
		},
		actions: {
			getResources: async () => {
				fetch(getStore().baseURL)
				.then(res => res.json())
				.then(data => {
					setStore({resources: Object.keys(data.result)});
					console.log(getStore().resources.slice(1));
					
				})
				.catch(err => console.error(err));
			},
			getNames: async (resource) => {
				fetch(getStore().baseURL+resource)
					.then(res => res.json())
					.then(data => {
						resource !== "films" ? setStore({[`${resource}`]: data.results}) : setStore({[`${resource}`]: data.result});
						console.log(getStore()[resource]);
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
