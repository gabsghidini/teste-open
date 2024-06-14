import * as S from "./styles";
import { useTranslations } from "next-intl";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

import Slider from "react-slick";

const Solutions = () => {
	const i18n = useTranslations("General");
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const imageUrls = [
		"/images/Open-Solutions-1-768x445.png",
		"/images/Open-Solutions-2-768x445.png",
		"/images/Open-Solutions-3-768x445.png",
	];

	return (
		<>
			<Header />

			<S.Container>
				<S.Title>{i18n("solutions")}</S.Title>
				<S.OrangeBar />
				<S.TextContainer>
					<S.Text>{i18n("solutionsDescriptionPage")}</S.Text>
				</S.TextContainer>
				<S.Grid>
					<S.Card>
						<S.CardTitle>{i18n("productionOrder")}</S.CardTitle>
						<S.Industry />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("pricing")}</S.CardTitle>
						<S.Money />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("qualityControl")}</S.CardTitle>
						<S.MagnifyingGlass />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("logistics")}</S.CardTitle>
						<S.ListCheck />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("maintenance")}</S.CardTitle>
						<S.Wrench />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("ggf")}</S.CardTitle>
						<S.Calculator />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("aps")}</S.CardTitle>
						<S.Gantt />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("budget")}</S.CardTitle>
						<S.MoneyMagnifyingGlass />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("mes")}</S.CardTitle>
						<S.Cogs />
					</S.Card>
					<S.Card>
						<S.CardTitle>{i18n("industry4")}</S.CardTitle>
						<S.UserCogs />
					</S.Card>
				</S.Grid>
				<S.OrangeTitle>{i18n("downloadOurFolder")}</S.OrangeTitle>
				<S.ImageContainer>
					<S.Image src="/images/SAP-B1.png" alt="SAP B1" />
					<div>
						<S.Image
							src="/images/pdf-150x150.png"
							alt="OPEN Manufacturing"
						/>
						<S.DownloadButton
							onClick={() =>
								window.open(
									"/pdfs/537dc1_2a9ee6f4e4f54a178c229ffe925e1866.pdf"
								)
							}
						>
							{i18n("clickToDownload")}
						</S.DownloadButton>
					</div>
					<S.Image src="/images/Open-Group.png" alt="Open Group" />
				</S.ImageContainer>
				<S.Title>{i18n("openModules")}</S.Title>
				<S.OrangeBar />
				<S.TextContainer>
					<S.Text>{i18n("modulesDescription")}</S.Text>
				</S.TextContainer>
			</S.Container>

			<Slider {...settings}>
				{imageUrls.map((imageUrl, index) => (
					<S.CarouselItem key={index}>
						<S.Logo src={imageUrl} alt={`Image ${index}`} />
					</S.CarouselItem>
				))}
			</Slider>

			<S.ProductContainer>
				<S.BlueButton>{i18n("aps")}</S.BlueButton>
				<S.BlueButton>{i18n("openBudget")}</S.BlueButton>
				<S.BlueButton>{i18n("openManufacturing")}</S.BlueButton>
				<S.BlueButton>{i18n("mes")}</S.BlueButton>
				<S.BlueButton>{i18n("advancedMes")}</S.BlueButton>
				<S.BlueButton>{i18n("openQuality")}</S.BlueButton>
			</S.ProductContainer>
			<Footer />
		</>
	);
};

export default Solutions;
