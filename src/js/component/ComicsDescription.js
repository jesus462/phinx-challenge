import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/Context";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	width: 100%;
`;
const ComicImage = styled.img`
	height: 100px;
	width: 30%;
	border-radius: 10px;
	padding: 5px;
	margin: auto 0;
`;
const ComicInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 5px;
`;
const Info = styled.div`
	font-size: 12px;
	font-weight: ${props => (props.title ? "bold" : "regular")};
	text-align: ${props => (props.justify ? "justify" : "")};
`;

export const ComicsDescription = ({ comic }) => {
	return (
		<Container>
			<ComicImage src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
			<ComicInfo>
				<Info title>
					{comic.title}{" "}
					<span>
						<i className="far fa-star" />
					</span>
				</Info>
				<Info justify>{comic.description}</Info>
			</ComicInfo>
		</Container>
	);
};

ComicsDescription.propTypes = {
	comic: PropTypes.object
};
