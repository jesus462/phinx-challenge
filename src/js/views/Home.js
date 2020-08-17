import React, { useState, useContext } from "react";
import { Context } from "../store/Context";
import styled from "styled-components";

import { Navbar } from "../component/Navbar";
import { HeroCard } from "../component/HeroCard";

const ContainerCards = styled.div`
	width: 93%;
	margin: 0 auto;
	padding: 52px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 605px) {
		width: 97%;
	}
`;
const TextLoading = styled.h2`
	transition: opacity 04s ease-in-out;
	transition-property: opacity;
	animation-name: loading;
	animation-duration: 0.6s;
	animation-iteration-count: infinite;

	@keyframes loading {
		0% {
			color: #212529;
		}
		50% {
			color: #737373;
		}
		100% {
			color: #212529;
		}
	}
`;
const TextMatch = styled.h2`
	text-align: center;
`;

export const Home = () => {
	const { store, actions } = useContext(Context);

	// filtering the cards that the image is not available, to then map it.
	let charactersWithImage = store.characters.filter(character => {
		const noImageUrl = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

		return character.thumbnail.path != noImageUrl;
	});
	let mappedHeroCard = charactersWithImage.map(character => {
		return <HeroCard key={character.id} character={character} />;
	});

	const noMatchConditionalRender = () => {
		if (store.noMatchCharacter && !store.loadingCharacters) {
			return (
				<TextMatch>
					No match found, try again <i className="far fa-smile-wink" />
				</TextMatch>
			);
		} else {
			return;
		}
	};

	return (
		<div>
			<Navbar />
			<ContainerCards>
				{noMatchConditionalRender()}
				{store.loadingCharacters ? <TextLoading>loading...</TextLoading> : mappedHeroCard}
			</ContainerCards>
		</div>
	);
};
