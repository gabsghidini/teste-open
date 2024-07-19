import * as S from "./styles";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

import { Footer } from "@/app/components/Footer";

import Slider from "react-slick";

const Solutions = () => {
	const i18n = useTranslations("General");

	const router = useRouter();

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	};

	const imageUrls = [
		"/images/Open-Solutions-1-768x445.png",
		"/images/Open-Solutions-2-768x445.png",
		"/images/Open-Solutions-3-768x445.png",
	];

	return (
		<>
			<S.Container>
				<S.Title>{i18n("solutions")}</S.Title>
				<S.OrangeBar />
				<S.TextContainer>
					<S.Text>{i18n("solutionsDescriptionPage")}</S.Text>
				</S.TextContainer>
				<S.Grid>
					<S.Card onClick={() => router.push("/solutions/production-order")}>
						<S.CardTitle>{i18n("productionOrder")}</S.CardTitle>
						<S.Industry />
					</S.Card>
					<S.Card onClick={() => router.push("/solutions/precificacao-1")}>
						<S.CardTitle>{i18n("pricing")}</S.CardTitle>
						<S.Money />
					</S.Card>
					<S.Card onClick={() => router.push("/solutions/controle-de-qualidade")}>
						<S.CardTitle>{i18n("qualityControl")}</S.CardTitle>
						<S.MagnifyingGlass />
					</S.Card>
					<S.Card onClick={() => router.push("/solutions/logistica")}>
						<S.CardTitle>{i18n("logistics")}</S.CardTitle>
						<S.ListCheck />
					</S.Card>
					<S.Card onClick={() => router.push("/solutions/maintenance")}>
						<S.CardTitle>{i18n("maintenance")}</S.CardTitle>
						<S.Wrench />
					</S.Card>
					<S.Card onClick={() => router.push("/solutions/ggf")}>
						<S.CardTitle >{i18n("ggf")}</S.CardTitle>
						<S.Calculator />
					</S.Card>
					<S.Card onClick={() => router.push("/solutions/aps-mrp-ii")}>
						<S.CardTitle>{i18n("aps")}</S.CardTitle>
						<S.Gantt />
					</S.Card>

					<S.Card onClick={() => router.push("/solutions/budget")}>
						<S.CardTitle>{i18n("budget")}</S.CardTitle>
						<S.MoneyMagnifyingGlass />
					</S.Card>
					<S.Card onClick={() => router.push("/solutions/mes")}>
						<S.CardTitle>{i18n("mes")}</S.CardTitle>
						<S.Cogs />
					</S.Card>

					<S.Card onClick={() => router.push("/solutions/industria-4-0")}>
						<S.CardTitle>{i18n("industry4")}</S.CardTitle>
						<S.UserCogs />
					</S.Card>
				</S.Grid>
				<S.OrangeTitle>{i18n("downloadOurFolder")}</S.OrangeTitle>
				<S.ImageContainer>
					<S.Image src="/images/SAP-B1.png" alt="SAP B1" width={271} height={61} />
					<S.ContentDownloadButton>
						<S.Image
							src="/images/pdf-150x150.png"
							alt="OPEN Manufacturing"
							width={271} height={61}
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
					</S.ContentDownloadButton>
					<S.Image src="/images/Open-Group.png" alt="Open Group" width={271} height={61} />
				</S.ImageContainer>
				<S.Title>{i18n("openModules")}</S.Title>
				<S.OrangeBar />
				<S.TextContainer>
					<S.Text>{i18n("modulesDescription")}</S.Text>
				</S.TextContainer>
			</S.Container>
			<S.SliderContainer>
			<S.ContainerSlider>
			<Slider {...settings}>
					{imageUrls.map((imageUrl, index) => (
						<S.CarouselItem key={index}>
							<S.Logo src={imageUrl} alt={`Image ${index}`} />
						</S.CarouselItem>
					))}
				</Slider>
			    </S.ContainerSlider>
      </S.SliderContainer> 
			<S.ProductContainer>
				<S.BlueButtonLink href="/pdfs/APS MRP.pdf" download>{i18n("aps")}</S.BlueButtonLink>
				<S.BlueButtonLink href="/pdfs/Budget.pdf" download>{i18n("openBudget")}</S.BlueButtonLink>
				<S.BlueButtonLink href="/pdfs/Open.pdf" download>{i18n("openManufacturing")}</S.BlueButtonLink>
				<S.BlueButtonLink href="/pdfs/MES.pdf" download>{i18n("mes")}</S.BlueButtonLink>
				<S.BlueButtonLink href="/pdfs/MES AVANCADO.pdf" download>{i18n("advancedMes")}</S.BlueButtonLink>
				<S.BlueButtonLink href="/pdfs/Qualidade.pdf" download>{i18n("openQuality")}</S.BlueButtonLink>
			</S.ProductContainer>
			<Footer />
		</>
	);
};

export default Solutions;
