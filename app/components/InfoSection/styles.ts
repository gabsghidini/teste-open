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

export const Section = styled.section`
	background: linear-gradient(to bottom, #5d9abc, #3a8bb7);
	padding: 3rem 0;
	text-align: center;
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	color: white;
	margin-bottom: 1.5rem;
	font-size: 1.5rem;

	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
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
`;

export const BottomLine = styled.div`
	background: var(--blue-400);
	height: 1.5rem;
	width: 100%;
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
	min-width: 10rem;
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
