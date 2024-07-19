import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
	FaCalculator,
	FaCogs,
	FaIndustry,
	FaMoneyBillWave,
	FaWrench,
} from "react-icons/fa";
import {
	FaListCheck,
	FaMagnifyingGlass,
	FaMagnifyingGlassDollar,
} from "react-icons/fa6";
import { LuGanttChart } from "react-icons/lu";
import { LiaUserCogSolid } from "react-icons/lia";

export const MainContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 4rem;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	margin: 20px 0;
	color: var(--blue-500);
	text-align: center;
`;

export const OrangeTitle = styled.h4`
	font-size: 1.5rem;
	margin: 20px 0;
	color: var(--orange-500);
	text-align: center;
	padding: 0.5rem 2rem;

	@media screen and (min-width: 768px) {
		padding: 0;
	}
`;

export const OrangeBar = styled.div`
	background-color: var(--orange-700);
	height: 0.25rem;
	width: 30%;
	margin: 1rem 0;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	max-width: 37.5rem;
`;

export const Text = styled.p`
	font-size: 1rem;
	color: #333;
	line-height: 1.6;
	text-align: center;
	padding: 2rem;

	@media screen and (min-width: 768px) {
		padding: 0;
	}
`;

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

export const Description = styled.p`
	color: #333;
	font-size: 1.15rem;
`;

export const Highlight = styled.span`
	font-weight: 700;
	color: var(--orange-400);
`;

export const Grid = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 1200px;
	gap: 1rem;
	margin: 2rem 0;

	@media screen and (min-width: 768px) {
	flex-direction: row;
	
	}
`;
export const Card = styled.div`
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	height: 10rem;
	width: 16rem;
	min-height: 16rem;
	cursor: pointer;
	    border: 1px solid #E1E1E1;

	&:hover {
		transform: scale(1.1);
		transition: transform 0.5s;
	}

	
	@media screen and (min-width: 768px) {
		width: 20%;
		max-width: 12.5rem;
	}
`;

export const CardTitle = styled.h3`
	font-style: normal;
	font-weight: 400;
	text-align: left;
	line-height: 2rem;
	margin: 0;
	font-size: 1.25rem;
	align-self: start;
`;

export const Industry = styled(FaIndustry)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const Money = styled(FaMoneyBillWave)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const MagnifyingGlass = styled(FaMagnifyingGlass)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const ListCheck = styled(FaListCheck)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const Wrench = styled(FaWrench)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const Calculator = styled(FaCalculator)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const Gantt = styled(LuGanttChart)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const MoneyMagnifyingGlass = styled(FaMagnifyingGlassDollar)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const Cogs = styled(FaCogs)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const UserCogs = styled(LiaUserCogSolid)`
	font-size: 2rem;
	align-self: flex-end;
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const Image = styled.img`
	width: 50%;
	max-width: 400px;
	height: auto;
	object-fit: contain;

	@media screen and (min-width: 768px) {
		width: 100%;
	}
`;

export const ContentDownloadButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
`;

export const DownloadButton = styled.button`
	background-color: var(--orange-500);
	color: white;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-size: 1rem;
	cursor: pointer;
	margin: 1rem 0;
`;

export const CarouselItem = styled.div`
	text-align: center;
	padding: 20px;
`;

export const Logo = styled.img`
	object-fit: cover;
	max-width: 100%;
	margin: 10px auto;

	@media screen and (min-width: 1024px) {
		width: 1120px;
	}
`;

export const BlueButton = styled.div`
	background-color: #005b85;
	color: white;
	width: 150px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 10px;
	cursor: pointer;
	font-family: Arial, sans-serif;
	font-size: 14px;
	font-weight: bold;

	&:hover {
		background-color: #003f5c;
	}
`;

export const BlueButtonLink = styled.a`
	background-color: #005b85;
	color: white;
	width: 250px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 10px;
	cursor: pointer;
	font-family: Arial, sans-serif;
	font-size: 14px;
	font-weight: bold;

	&:hover {
		background-color: #003f5c;
	}

	
	@media screen and (min-width: 1024px) {
   		width: 150px;
		padding: 1rem;
		gap: 0;
	}
`;

export const ProductContainer = styled.div`
	 display: grid;
	  gap: 1rem;
  	 justify-items: center;
     grid-template-columns: 1fr;
	 margin-bottom: 4rem;

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		margin: 0 auto;
		width: 1200px;

	}
`;


export const SliderContainer = styled.div`
	background-color: #FCFCFF;
	margin: 4rem 0;
	width: 100%;
`;


export const ContainerSlider = styled.div`
	margin: 0 auto;
	width: 80%;
	margin-bottom: 2rem;
	padding: 1rem;
	background-color: transparent;
	border: none;


	@media screen and (min-width: 768px) {
		width:674px;
		padding: 2rem;
	}

	@media screen and (min-width: 1024px) {
		width: 826px;
	}

	@media screen and (min-width: 1440px) {
		width: 1120px;
	}
`;

export const ContainerImage = styled.div`
	width: 300px;

	@media screen and (min-width: 768px) {
		width: 480px;
	}

	@media screen and (min-width: 1024px) {
		width: 674px;
	}
`;

export const ImageSlider = styled.img`
	width: 100%;
	max-width: 100%;
	height: auto;
	object-fit: cover;
	border-radius: 1.5rem;
`;


