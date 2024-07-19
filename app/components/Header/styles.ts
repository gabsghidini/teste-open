import styled, { css } from "styled-components";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
	height: 2.188rem;

	@media (min-width: 949px) {
		height: 3.125rem;
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export const ContainerDropdown = styled.div`
	width: fit-content;
	position: relative;

	&:hover > ul {
		display: flex;
	}
`;

export const NavLink = styled.span`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: black;
	font-weight: bold;
	cursor: pointer;
	font-size: 0.8rem;

	&:hover {
		color: orange;
	}

	@media (min-width: 949px) {
		font-size: 1rem;
	}
`;

export const Dropdown = styled.ul`
	display: none;
	flex-direction: column;
	justify-content: space-evenly;
	justify-content: space-evenly;
	position: fixed;
	top: 50px;
	background-color: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	list-style: none;
	padding: 0;
	margin: 0;
	width: 13.75rem;
	height: 33.875rem;
	z-index: 1;
`;

export const DropdownItem = styled.li`
	padding: 0.5rem 1rem;

	&:hover {
		background-color: #f0f0f0;
		cursor: pointer;
	}
`;

export const SocialMediasAndFlagsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	height: 2.125rem;
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3rem;
	height: 2.125rem;
`;

export const FlagContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3rem;
	height: 2.125rem;
`;

export const Flag = styled.img`
	height: 1.5rem;
	max-width: fit-content;

	@media (min-width: 949px) {
		height: 1.938rem;
	}
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
	font-size: 1rem;
	cursor: pointer;
	padding: 0.25rem;

	@media (min-width: 949px) {
		font-size: 1.5rem;
	}
`;

export const LinkedIn = styled(IoLogoLinkedin)`
	color: white;
	background-color: var(--blue-500);
	font-size: 1rem;
	cursor: pointer;
	padding: 0.25rem;

	@media (min-width: 949px) {
		font-size: 1.5rem;
	}
`;

export const Youtube = styled(IoLogoYoutube)`
	color: white;
	background-color: var(--blue-500);
	font-size: 1rem;
	cursor: pointer;
	padding: 0.25rem;

	@media (min-width: 949px) {
		font-size: 1.5rem;
	}
`;
