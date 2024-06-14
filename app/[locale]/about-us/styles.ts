import Slider from "react-slick";
import styled from "styled-components";

export const MainContainer = styled.div`
	text-align: center;
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const Section = styled.section`
	padding: 40px 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
`;

export const SubSection = styled.section`
	padding: 40px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	color: #1d3c6e;
	margin-bottom: 20px;
`;

export const Subtitle = styled.p`
	font-size: 1.5rem;
	margin-bottom: 20px;
	color: #f37021;
`;

export const Image = styled.img`
	width: 100%;
	max-width: 31.25rem;
	height: auto;
	border-radius: 8px;
	margin-bottom: 20px;
`;

export const Text = styled.p`
	font-size: 1rem;
	color: #333;
	line-height: 1.6;
	text-align: left;
`;

export const SliderText = styled.p`
	font-size: 1rem;
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
	font-size: 2rem;
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
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
	width: 40%;
	max-width: 1200px;
	height: auto;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
