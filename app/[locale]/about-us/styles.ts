import Slider from "react-slick";
import styled from "styled-components";

export const MainContainer = styled.div`
	text-align: center;
	margin-top: 4rem;

`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	gap: 1rem;

@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const SubSection = styled.section`
	padding: 40px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	color: #1d3c6e;
`;

export const Subtitle = styled.p`
	font-size: 1.5rem;
	margin-bottom: 20px;
	color: #f37021;
	line-height: 2rem;
`;

export const BgImage = styled.div`
	background-image: url("/images/predio.webp");
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	padding: 3rem 0;
    min-height: 573px;
	border-radius: 8px;
	 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

	@media screen and (min-width: 768px) {
		width: 1700px;
    	min-height: 673px;

	}
`;


export const  SubSectionImage = styled.div`
	width: 250px;
	margin: 0 auto;
	margin-top: 3rem;

	@media screen and (min-width: 768px) {
		width: 100%;
	}
`;

export const Image = styled.img`
	width: 600px;
	max-width: 100%;
	height: auto;
	border-radius: 8px;
	margin-bottom: 20px;

	
`;

export const Text = styled.p`
	font-size: 1.12rem;
	color: #333;
	line-height: 1.6;
	text-align: left;
	margin-bottom: 20px;
`;

export const SliderText = styled.p`
	font-size: 1.32rem;
	color: #fff;
	line-height: 1.6;
	text-align: center;
`;

export const Highlight = styled.span`
	color: #f37021;
	font-weight: bold;
`;

export const SliderContainer = styled.div`
	background-color: #f37021;
	width: 100%;


	@media screen and (min-width: 768px) {
		margin-top: 4rem;
		height: 350px;
	}
`;

export const VisionSection = styled.div`
	background-color: #f37021;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 20px;
	color: white;
	width: 50%;
`;

export const VisionTitle = styled.h2`
	font-size: 2.82rem;
	margin-bottom: 20px;
`;

export const StatsSection = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 40px 20px;
	background-color: #f9f9f9;
`;

export const Stat = styled.div`
	text-align: center;
`;

export const StatNumber = styled.div`
	font-size: 2rem;
	color: #1d3c6e;
	font-weight: bold;
`;

export const StatLabel = styled.div`
	font-size: 1rem;
	color: #333;
`;

export const TextContainer = styled.div`
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;
`;

export const OrangeBar = styled.div`
	background-color: var(--orange-700);
	height: 0.25rem;
	width: 30%;
	margin: 1rem 0;
	align-self: flex-start;
`;

export const SAPSeal = styled.img`
	width: 18.75rem;
	height: auto;
	margin-top: 1rem;
	cursor: pointer;
	padding: 1rem;
`;

export const VisionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	padding: 1rem;
	width: 100%;
`;

export const StyledSlider = styled(Slider)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding: 1rem;
`;

export const Video = styled.video`
	
	height: auto;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	width: 70%;
	
	@media screen and (min-width: 768px) {
		width: 40%;
	    max-width: 1200px;
	}
	
	@media screen and (min-width: 1024px) {
		width: 64%;
	}
`;
