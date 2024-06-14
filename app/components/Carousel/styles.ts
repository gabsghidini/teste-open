import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
`;

export const CarouselWrapper = styled.div`
	max-width: 1200px;

	.slick-slide img {
		display: block;
		margin: auto;
	}
	.slick-dots li button:before {
		font-size: 12px;
	}
	.slick-dots li.slick-active button:before {
		color: #000;
	}
`;

export const CarouselItem = styled.div`
	text-align: center;
	padding: 20px;
`;

export const Logo = styled.img`
	object-fit: cover;
	max-width: 100%;
	margin: 10px auto;
`;

export const Description = styled.p`
	font-size: 1.125rem;
	font-weight: bold;
	color: #333;
`;

export const BlueBar = styled.div`
	background-color: #032f47;
	height: 100px;
	width: 100%;
	color: #fff;

	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: bold;
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

	width: 21.875rem;
`;
