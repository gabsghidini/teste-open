import styled from "styled-components";
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
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	margin: 20px 0;
	color: var(--blue-500);
	text-align: center;
`;

export const OrangeTitle = styled.h1`
	font-size: 1.5rem;
	margin: 20px 0;
	color: var(--orange-500);
	text-align: center;
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
	justify-content: center;
	flex-wrap: wrap;
	max-width: 1200px;
	gap: 1rem;
	margin: 2rem 0;
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
	width: 20%;
	max-width: 12.5rem;

	&:hover {
		transform: scale(1.1);
		transition: transform 0.5s;
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
	justify-content: center;
	margin: 2rem 0;
`;

export const Image = styled.img`
	width: 100%;
	max-width: 400px;
	height: auto;
	object-fit: contain;
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

export const ProductContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0;
	gap: 1rem;
`;
