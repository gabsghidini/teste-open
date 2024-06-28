import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram, IoLogoLinkedin, IoMdPin } from "react-icons/io";
import styled from "styled-components";

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	background-color: #002940;
`;

export const Container = styled.div`
	display: flex;
	flex-wrap: nowrap;
	max-width: 1200px;
	height: 25rem;
	border-radius: 0.5rem;
	padding: 1rem 0;
	margin: 0;
`;

export const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	flex: 1;
	gap: 1rem;
`;

export const FooterColumnLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 1rem;
	flex: 1;
	gap: 1rem;

	@media screen and (max-width: 768px) {
		align-items: center;
	}
`;

export const Image = styled.img`
	width: 50%;
	object-fit: cover;
	border-radius: 0 0.5rem 0.5rem 0;
	padding: 0;
	margin: 1rem;
`;

export const Subtitle = styled.h3`
	color: #fff;
	font-size: 1.25rem;
	text-align: center;
	font-weight: 500;
	margin-bottom: 1rem;

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
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

export const FlagContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const ColumnHeader = styled.h6`
	color: var(--orange-600);
	font-size: 1.25rem;
	text-align: center;
	font-weight: 600;

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
	}
`;

export const Text = styled.p`
	color: white;
	font-size: 1rem;
	text-align: center;
	font-weight: 500;

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
	}
`;

export const TextLeft = styled.p`
	color: white;
	font-size: 1rem;
	font-weight: 500;

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
`;

export const WhatsApp = styled(FaWhatsapp)`
	color: var(--orange-500);
	font-size: 1rem;
`;

export const Pin = styled(IoMdPin)`
	color: var(--orange-500);
	font-size: 1.5rem;
`;

export const DemoButton = styled.button`
	background-color: var(--orange-500);
	color: white;
	font-size: 0.9rem;
	font-weight: 400;
	padding: 1rem 2rem;
	border-radius: 0.25rem;

	@media screen and (max-width: 768px) {
		font-size: 0.75rem;
		padding: 0.5rem 1rem;
	}
`;

export const CopyrightContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--blue-800);
	color: white;
	font-size: 0.75rem;
	padding: 0.5rem;

	width: 100%;
`;
