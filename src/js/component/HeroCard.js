import React, { useState, useContext } from "react";
import Context from "../store/Context";
import styled from "styled-components";

const Card = styled.div`
	margin: 10px 10px;
	width: 260px;
	height: 380px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
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
`;

export const HeroCard = () => {
	return (
		<Card>
			<Image
				src="https://res.cloudinary.com/duu99bl6f/image/upload/v1597508080/Phinx/marvel-logo.png"
				alt="Marvel logo"
			/>
			<Text right>
				<i className="far fa-star" />
			</Text>
			<Text>Name</Text>
		</Card>
	);
};
