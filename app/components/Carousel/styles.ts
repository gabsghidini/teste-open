import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	padding: 2rem;
	background: #5d9abc;
`;

export const CarouselWrapper = styled.div`
	width: 100%;
	max-width: 75rem;

	.slick-track {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slick-slide img {
		display: block;
		margin: auto;
	}
	.slick-dots li button:before {
		font-size: 0.75rem;
	}
	.slick-dots li.slick-active button:before {
		color: #000;
	}
`;

export const CarouselItem = styled.div`
	text-align: center;
	padding: 1.25rem;
`;

export const Logo = styled.img`
	object-fit: cover;
	max-width: 100%;
	margin: 0.625rem auto;
`;


export const Description = styled.p`
	font-size: 1.125rem;
	font-weight: bold;
	color: #333;
	margin-bottom: 2rem;

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const BlueBar = styled.div`
	background-color: #032f47;
	height: 6.25rem;
	width: 100%;
	color: #fff;

	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: bold;
	
	@media screen and (max-width: 768px) {
		text-align: center;
		padding: 0 2rem;
		font-size: 1.5rem;
	}
`;

export const WhiteBar = styled.div`
	background-color: #fff;
	height: 100%;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: bold;
	padding: 2rem 0;
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

	max-width: 21.875rem;
	width: 80%;
`;
