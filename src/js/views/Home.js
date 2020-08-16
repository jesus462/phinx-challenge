import React, { useState, useContext } from "react";
import { Context } from "../store/Context";
import styled from "styled-components";

import { Navbar } from "../component/Navbar";
import { HeroCard } from "../component/HeroCard";

const ContainerCards = styled.div`
	width: 93%;
	margin: 52px auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

export const Home = () => {
	const { store, actions } = useContext(Context);

	// filtering the cards that the image is not available
	let charactersWithImage = store.characters.filter(character => {
		return character.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
	});

	let mappedHeroCard = charactersWithImage.map(character => {
		return <HeroCard key={character.id} character={character} />;
	});

	return (
		<div>
			<Navbar />
			<ContainerCards>{mappedHeroCard}</ContainerCards>
		</div>
	);
};
