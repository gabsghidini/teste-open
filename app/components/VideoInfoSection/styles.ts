import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	background-color: #fff;
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	width: 100%;
	height: 25rem;
`;

export const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding: 1rem;
`;

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	flex: 1;
	padding: 1rem;
	text-align: left;
	height: 80%;
`;

export const Video = styled.video`
	width: 100%;
	height: auto;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
	color: #173e64;
	font-size: 2.5rem;
`;

export const Description = styled.p`
	color: #333;
	font-size: 1.15rem;
`;

export const OrangeBar = styled.div`
	background-color: var(--orange-700);
	height: 0.25rem;
	width: 30%;
	margin: 1rem 0;
	align-self: flex-start;
`;
