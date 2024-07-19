import styled from "styled-components";

export const MainContainer = styled.div`
	text-align: center;
	margin: 4rem 0;
`;

export const Banner = styled.div`
	background-size: cover;
	background-position: center;
	height: 18.75rem;
	position: relative;
	display: none;

	@media screen and (min-width: 768px) {
	 display: block;
	}
`;

export const Title = styled.h1`
	font-size: 2.18rem;
	margin: 1.25rem 0;
	color: var(--blue-500);
	font-weight: 700;

	@media screen and (min-width: 768px) {
		font-size: 2.5rem;
	}
`;

export const Subtitle = styled.h5`
	font-size: 1.25rem;
	margin: 1.25rem;
	padding: 1.25rem;
	color: #f37021;
	font-weight: 600;

	@media screen and (min-width: 768px) {
		font-size: 1,5rem;
	}
`;

export const FormContainer = styled.div`
	border-radius: 8px;
	max-width: 600px;
	margin: 20px auto;
	gap: 1rem;
	padding: 2rem;

	@media screen and (min-width: 768px) {
		padding: 1rem;
	}
`;


export const ContentCaptcha = styled.div`
	margin:0 auto;
	margin-bottom: 2rem;
`;


export const FormColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;

export const FormRowContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	gap: 1rem;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const FormTitle = styled.h2`
	font-size: 1.5rem;
	padding: 1.5rem;
	margin-bottom: 20px;
	color: var(--orange-600);
	font-weight: 600;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 1rem;
`;

export const Input = styled.input`
	padding: 0.75rem;
	font-size: 1rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	width: 100%;
	margin-bottom: 0.8rem;
`;

export const FullInput = styled.input`
	padding: 0.75rem;
	font-size: 1rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	margin-right: 2%;
	width: 100%;
`;

export const Label = styled.label`
	font-size: 1.13rem;
	margin: 0.5rem 0;
	font-weight: 600;
	color: var(--blue-500);
`;

export const FileInput = styled.input`
	font-size: 1rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	width: 100%;
	flex: display;
	padding: 0.75rem;
	margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
	background-color: #f37021;
	color: #fff;
	padding: 15px;
	border: none;
	border-radius: 4px;
	font-size: 1rem;
	cursor: pointer;
	width: 100%;

	&:hover {
		background-color: #e3601a;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: relative;
`;

export const ErrorMessage = styled.p`
	color: red;
	font-size: 0.9rem;
	margin-top: 0.2rem;
`;
