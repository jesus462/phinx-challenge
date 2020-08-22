const getState = ({ getStore, getActions, setStore }) => {
	const APIurl = "https://gateway.marvel.com/v1/public/";
	const APIkey = "68ae068a26531d4f74e599e28494d5db";
	const timeStamp = "1";
	const hash = "762b7ecb8ae6158120a012769dfe88fb";

	return {
		store: {
			characters: [],
			loadingCharacters: true,
			noMatchCharacter: false,
			characterComics: [],
			loadingComics: true,
			comic: [],
			favorites: {
				characters: [],
				comics: []
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchCharacters: async (characterName = "") => {
				let resources = [];
				let resourceType = "characters";

				try {
					let response = await fetch(
						`${APIurl}${resourceType}?${
							characterName != "" ? "nameStartsWith=" + characterName + "&" : ""
						}ts=${timeStamp}&apikey=${APIkey}&hash=${hash}`,
						{
							method: "GET",
							headers: {
								"Content-Type": "application/JSON"
							}
						}
					);
					if (response.ok) {
						let JSONresponse = await response.json();
						resources = JSONresponse.data.results;
						if (resources.length > 0) {
							setStore({
								characters: resources,
								loadingCharacters: false,
								noMatchCharacter: false
							});
						} else {
							setStore({
								characters: resources,
								loadingCharacters: false,
								noMatchCharacter: true
							});
						}
						console.log("All Good!!!");
					} else {
						console.log(response.status);
					}
				} catch (err) {
					console.log(err);
				}
			},
			fetchCharacterComic: async APIComicsUrl => {
				let resources = [];

				try {
					let response = await fetch(`${APIComicsUrl}?ts=${timeStamp}&apikey=${APIkey}&hash=${hash}`, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						let JSONresponse = await response.json();
						resources = JSONresponse.data.results;
						setStore({
							characterComics: resources,
							loadingComics: false
						});
						console.log("Good, comics!!!");
					} else {
						console.log(response.status);
					}
				} catch (err) {
					console.log(err);
				}
			},
			setLoadingCharacters: value => {
				setStore({ loadingCharacters: !value });
			},
			setLoadingComics: value => {
				setStore({ loadingComics: !value });
			},
			setComic: value => {
				setStore({ comic: [value] });
			}
		}
	};
};

export default getState;
