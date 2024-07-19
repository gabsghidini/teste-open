import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Slider from "react-slick";
import * as S from "./styles";
import { useTranslations } from "next-intl";

const About = () => {
	const i18n = useTranslations("General");

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: true,
	};

	const handleButtonClick = () => {
		window.open(
			"/certificates/Certificate-SAP-Integration-Certification.pdf",
			"_blank"
		);
	};
    const renderDescription = (description: string) => {
        const parts = description.split(/(\*\*.*?\*\*)/g); 

        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>; 
            }
            return part; 
        });
    };
	return (
		<>
			<S.MainContainer>
				<S.Container>
					<S.Section>

						<S.BgImage	/>

						<S.TextContainer>
							<S.Title>{i18n("aboutUs")}</S.Title>
							<S.OrangeBar />
							<S.Text>{renderDescription(i18n("aboutUsDescription"))}</S.Text>

							<S.Text>{renderDescription(i18n("bestSAPSolutions"))}</S.Text>
							<S.Text>{renderDescription(i18n("ourClientsVAR"))}</S.Text>
							<S.Highlight>
								{i18n("checkOutCertificate")}
							</S.Highlight>
							<S.SAPSeal
								onClick={handleButtonClick}
								src="/images/certificate.png"
								alt="SAP Certification"
							/>
						</S.TextContainer>
					</S.Section>
				</S.Container>
				<S.SliderContainer>
					<S.Container>
						<Slider {...settings}>
							<S.VisionSection>
								<S.VisionContainer>
									<S.VisionTitle>
										{i18n("mission")}
									</S.VisionTitle>
									<S.SliderText>
										{i18n("missionDescription")}
									</S.SliderText>
								</S.VisionContainer>
							</S.VisionSection>
							<S.VisionSection>
								<S.VisionContainer>
									<S.VisionTitle>
										{i18n("vision")}
									</S.VisionTitle>
									<S.SliderText>
										{i18n("visionDescription")}
									</S.SliderText>
								</S.VisionContainer>
							</S.VisionSection>
							<S.VisionSection>
								<S.VisionContainer>
									<S.VisionTitle>
										{i18n("values")}
									</S.VisionTitle>
									<S.SliderText>
										{i18n("valuesDescription")}
									</S.SliderText>
								</S.VisionContainer>
							</S.VisionSection>
						</Slider>
					</S.Container>
				</S.SliderContainer>

				 <S.SubSectionImage>
					<S.Image
						src="/images/Clientes-Open.png"
						alt="Open Solutions on Tablet"
					/>
				</S.SubSectionImage>
				<S.VideoContainer>
					<S.Video controls autoPlay muted>
						<source
							height={400}
							width={600}
							src="/videos/Open-Solutions-II.mp4"
							type="video/mp4"
						/>
						{i18n("videoNotSupported")}
					</S.Video>
				</S.VideoContainer>
			</S.MainContainer>
			<Footer />
		</>
	);
};

export default About;
