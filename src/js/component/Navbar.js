import React, { useState, useContext } from "react";
import Context from "../store/Context";
import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	justify-content: space-evenly;
	padding: 12px 12px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.11);
`;
const Logo = styled.img`
	width: 70px;
	margin-right: 10px;
`;
const SearchBar = styled.input`
	width: 80%;
	border: none;
	outline: none;
	font-size: 20px;

	:active {
		border: none;
	}
	::-webkit-input-placeholder {
		font-size: 20px;
		color: lightgrey;
	}
`;
const Icon = styled.i`
	margin: auto 0;
	color: #a8a8a8;
	font-size: 20px;
`;

export const Navbar = () => {
	return (
		<Nav>
			<Logo
				src="https://res.cloudinary.com/duu99bl6f/image/upload/v1597508080/Phinx/marvel-logo.png"
				alt="Marvel logo"
			/>
			<SearchBar className="fas fa-search" placeholder="&#xf002; Buscar" />
			<Icon className="far fa-star" />
		</Nav>
	);
};
