import styled from "styled-components";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
	height: 50px;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export const NavLink = styled.span`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: black;
	font-weight: bold;
	position: relative;
	cursor: pointer;

	&:hover {
		color: orange;
	}

	&:hover > ul {
		display: block;
	}
`;

export const Dropdown = styled.ul`
	display: none;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	list-style: none;
	padding: 0;
	margin: 0;
	min-width: 200px;
`;

export const DropdownItem = styled.li`
	padding: 0.5rem 1rem;

	&:hover {
		background-color: #f0f0f0;
	}
`;

export const FlagContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const Flag = styled.img`
	height: 20px;
`;

export const ContactButton = styled.button`
	background-color: orange;
	color: white;
	border: none;
	padding: 0.5rem 1rem;
	cursor: pointer;

	&:hover {
		background-color: darkorange;
	}
`;

export const Instagram = styled(IoLogoInstagram)`
	color: white;
	background-color: var(--blue-500);
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0.25rem;
`;

export const LinkedIn = styled(IoLogoLinkedin)`
	color: white;
	background-color: var(--blue-500);
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0.25rem;
`;
