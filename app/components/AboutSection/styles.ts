import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d6d4d0;
`;

export const SubSection = styled.span`
	display: flex;
	max-width: 75rem;
	width: 100%;
	background-color: #fff;
	margin: 0;
	padding: 2rem 3rem;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		border-radius: 0.5rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		height: 25rem;
		padding: 0;
		margin: 2rem;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: 768px) {
		flex: 2;
		padding: 2rem;
	}
`;

export const ImageContainer = styled.div`
	text-align: center;
	padding: 0;
	margin: 0;
	display: none;

	@media screen and (min-width: 768px) {
		display: flex;
		flex: 1;
	}
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
	line-height: 1.5;
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
`;

export const OrangeBar = styled.div`
	background-color: var(--orange-700);
	height: 0.25rem;
	width: 30%;
	margin: 1rem 0;
	align-self: flex-start;
`;
