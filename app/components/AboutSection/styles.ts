import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	background-color: #d6d4d0;
`;

export const SubSection = styled.div`
	display: flex;
	flex-wrap: nowrap;
	max-width: 1200px;
	height: 25rem;
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 0;
	margin: 0;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex: 2;
	padding: 4rem;
	margin-right: 1rem;
`;

export const ImageContainer = styled.div`
	flex: 1;
	text-align: center;
	padding: 0;
	margin: 0;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 0 0.5rem 0.5rem 0;
	padding: 0;
	margin: 0;
`;

export const Title = styled.h2`
	color: #173e64;
	font-size: 2.5rem;
`;

export const Description = styled.p`
	color: #333;
	font-size: 1.15rem;
`;

export const Button = styled.button`
	padding: 1rem 2rem;
	background-color: #ff5700;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 600;
	margin-top: 1rem;
	width: 21.875rem;
`;

export const OrangeBar = styled.div`
	background-color: var(--orange-700);
	height: 0.25rem;
	width: 30%;
	margin: 1rem 0;
	align-self: flex-start;
`;
