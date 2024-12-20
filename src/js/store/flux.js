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
					console.log("Fetch");
					localStorage.setItem("resources", JSON.stringify(Object.keys(data.result)));
					setStore({resources: Object.keys(data.result)});
				})
				.catch(err => console.error(err));
			},
			getNames: async (resource) => {
				fetch(getStore().baseURL+resource)
					.then(res => res.json())
					.then(data => {
						resource !== "films" ? localStorage.setItem([`${resource}`],JSON.stringify(data.results)) : localStorage.setItem([`${resource}`],JSON.stringify(data.result));
						resource !== "films" ? setStore({[`${resource}`]: data.results}) : setStore({[`${resource}`]: data.result});
						console.log(getStore()[resource]);
					})
					.catch(err => console.error(err));
			},
			handleFav: (fav, item) => {
				console.log(fav, item.name);
				fav ? getActions().deleteFav(item) : getActions().addFav(item);
				return !fav;
			},
			addFav: (item) => {
				setStore({favourites: getStore().favourites.concat(item.name)});
			},
			deleteFav: (item) => {
				let aux = [...getStore().favourites];
				let index = aux.findIndex((name)=>name === item.name)
				aux.splice(index, 1);
				setStore({favourites: aux});
			},
			deleteFavBox: (index) => {
				let aux = [...getStore().favourites];
				aux.splice(index, 1);
				setStore({favourites: aux});
			},
			loadData: (data) => {
				console.log("Carga de local store");
				setStore({[`${data}`]: JSON.parse(localStorage.getItem(data))});
			}
		}
	};
};

export default getState;
