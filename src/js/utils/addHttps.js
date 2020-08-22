export const addHttps = url => {
	let splitURL = url.split(":")[1];
	return `https:${splitURL}`;
};
