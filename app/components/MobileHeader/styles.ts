import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";

export const MenuHamburger = styled(GiHamburgerMenu)`
	color: var(--rose-600);
	width: 1.875rem;
	height: 1.875rem;
`;

export const Logo = styled.img`
	height: 3.125rem;
`;

export const MobileDropdown = styled.div`
	display: flex;
	position: absolute;
	right: 10%;
	top: 2rem;
	margin-left: auto;
	margin-right: auto;
	width: 12.5rem;
	flex-direction: column;
	align-items: flex-end;
	background-color: var(--white);
	border-bottom-left-radius: 4px;
	box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
	padding: 0.625rem;
	z-index: 10;
`;

export const MobileDropdownList = styled.ul`
	list-style: none;
`;

export const MobileDropdownItem = styled.li`
	padding: 0.625rem;
	border-bottom: 1px solid var(--slate-200);
	min-height: 1rem;
	min-width: 1rem;
`;

export const LogoutButton = styled.button`
	margin-top: 0.313rem;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 12.5rem;
	padding: 0.25rem;
	background-color: var(--rose-100);
	color: var(--rose-600);
	font-weight: 500;
	border: 1px solid var(--rose-600);
	border-radius: 4px;
`;

export const Header = styled.header`
	width: 100%;
	display: flex;
	height: 5rem;
	background-color: --var(white);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	align-items: center;
	justify-content: space-around;
	padding: 0.938rem 0;

	@media (max-width: 700px) {
		width: 100%;
		box-sizing: border-box;
		height: 10rem;
		flex-direction: column;
		gap: 1.5rem;
		padding: 0.938rem;
	}

	h2 {
		font-size: 2rem;
		font-family: "Inter";
		color: var(--rose-600);
		font-weight: 900;
		align-items: center;
		text-transform: uppercase;
	}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	max-width: 75rem;

	div {
		display: flex;
		flex-direction: column;
	}
`;

export const MobileNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	gap: 1rem;
	padding: 1rem;
`;

export const Dropdown = styled.ul`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 18.75reem;

	ul > li {
		display: none;
		width: 11.25rem;
	}
`;

export const Span = styled.span`
	display: flex;
	align-items: center;
	gap: 0.625rem;
	cursor: pointer;
	font-weight: 500;

	&:hover ul > li {
		display: block;
	}

	&:hover ul {
		margin-top: 5.625rem;
	}
`;

export const DropdownList = styled.ul`
	position: absolute;
	top: 20px;
	background-color: var(--white);
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	z-index: 1;
`;

export const DropdownItem = styled.li`
	display: flex;
	align-items: center;
	gap: 0.625rem;
	padding: 0.625rem 1.25rem;
	cursor: pointer;

	&:hover {
		background-color: var(--rose-600);
		color: var(--white);
	}
`;

export const User = styled.div`
	display: flex;
	align-items: center;
	gap: 0.625rem;
`;

export const Name = styled.p`
	font-weight: 600;
	color: var(--slack-800);
`;

export const Image = styled.img`
	width: 2.813rem;
	height: 2.813rem;
	border-radius: 50%;
	border: 4px solid var(--rose-600);
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

export const Youtube = styled(IoLogoYoutube)`
	color: white;
	background-color: var(--blue-500);
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0.25rem;
`;

export const FlagContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.125rem;
`;

export const Flag = styled.img`
	width: 100%;
	height: 1.875rem;
`;

export const SocialMediaContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 0.125rem;
	height: 2.125rem;
`;
