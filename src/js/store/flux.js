const getState = ({ getStore, getActions, setStore }) => {
	const APIurl = "http://gateway.marvel.com/v1/public/";
	const APIkey = "68ae068a26531d4f74e599e28494d5db";
	const timeStamp = "1";
	const hash = "762b7ecb8ae6158120a012769dfe88fb";

	return {
		store: {
			characters: [],
			loading: true
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
						setStore({
							characters: resources,
							loading: false
						});
						console.log("All Good!!!");
					} else {
						console.log(response.status);
					}
				} catch (err) {
					console.log(err);
				}
			},
			setLoading: value => {
				if (value === true) {
					setStore({ loading: false });
				} else {
					setStore({ loading: true });
				}
			}
		}
	};
};

export default getState;
