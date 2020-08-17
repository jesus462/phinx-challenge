import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/Context";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ComicsModal } from "./ComicsModal";
import { useModal } from "../utils/useModal";

const Card = styled.div`
	margin: 15px;
	width: 240px;
	height: 340px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	@media (max-width: 605px) {
		width: 140px;
		height: 240px;
		margin: 10px 5px;
	}
`;
const Image = styled.img`
	height: 100%;
	width: 100%;
	pointer-events: none;
	position: absolute;
	z-index: -1;
`;
const Text = styled.p`
	margin: 15px;
	color: white;
	text-align: ${props => (props.right ? "right" : "left")};
	font-size: 20px;

	span {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 14px;
		padding: 2px;
	}
`;

export const HeroCard = ({ character }) => {
	const { store, actions } = useContext(Context);

	const { show, toggle } = useModal();
	const handleShow = () => {
		actions.fetchCharacterComic(character.comics.collectionURI);
		toggle();
	};

	return (
		<React.Fragment>
			<Card onClick={handleShow}>
				<Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
				<Text right>
					<span>
						<i className="far fa-star" />
					</span>
				</Text>
				<Text>
					<span>{character.name}</span>
				</Text>
			</Card>
			<ComicsModal character={character} show={show} hide={toggle} />
		</React.Fragment>
	);
};

HeroCard.propTypes = {
	character: PropTypes.object
};
