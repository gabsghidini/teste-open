import styled from "styled-components";




export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: 768px) {
		flex: 2;
	}
`;

export const Card = styled.div`
	background: #F7F7F7;
	padding: 3.13rem;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	height: auto;
	width: 23rem;
    border-radius: 0.5rem;
	
    @media screen and (min-width: 768px) {
	 	width: 36rem;
	 }
    
     @media screen and (min-width: 1024px) {
        width: 62%;
        margin: 0 auto;
    }



`;



export const CardTitle = styled.h3`
	font-style: normal;
	font-weight: 700;
	text-align: left;
	line-height: 2rem;
	margin: 0;
	align-self: start;
    color: #05537F;
	font-size: 2.5rem;
`;

export const OrangeBar = styled.div`
	background-color: var(--orange-700);
	height: 0.25rem;
	width: 20%;
	margin: 1rem 0;
	align-self: flex-start;

    @media screen and (min-width: 768px) {
        width: 10%;
    }

    @media screen and (min-width: 1024px) {
        width: 5%;
    }
`;


export const Description = styled.p`
	color: #000000;
	font-size: 1.15rem;
    padding: 0.8rem;
    line-height: 1.5;
`;

export const Contact = styled.p`
	color: #000000;
	font-size: 1.15rem;
	line-height: 1.5;
	font-weight: 600;
    padding: 0.8rem;

`;

export const ContactLink = styled.a`
	color: #c36;
	font-size: 1.15rem;
	padding: 1rem;
	line-height: 1.5;
	text-decoration: none;
	transition: color 0.3s;
	cursor: pointer;

	&:hover {
		color: #00000;
	}
`;


export const DescriptionList = styled.ul`
    margin: 20px 20px;
    color: #000000;

  li {

    list-style-type: disc;
        font-size: 1.15rem;
        margin-left: 3rem;
        line-height: 1.5;
        margin-bottom: 0.8rem;
    }
`;

