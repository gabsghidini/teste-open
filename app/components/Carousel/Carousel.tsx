import Slider from "react-slick";
import * as S from "./styles";

import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

const Carousel = () => {
	const i18n = useTranslations("General");
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 3,
	};

	const router = useRouter();

	const imageUrls = [
		"/clients/alestis.png",
		"/clients/biometrix.png",
		"/clients/boticario.png",
		"/clients/convencao.png",
		"/clients/drpeanut.png",
		"/clients/duasrodas.png",
		"/clients/duxteno.png",
		"/clients/elinox.png",
		"/clients/f2j.png",
		"/clients/fermentech.png",
		"/clients/forjasul.png",
		"/clients/kasvi.png",
		"/clients/login.png",
		"/clients/max.png",
		"/clients/metinjo.png",
		"/clients/nacon.png",
		"/clients/probiotica.png",
		"/clients/sooro.png",
		"/clients/tecnosil.png",
		"/clients/vansil.png",
	];

	return (
		<>
			<S.Container>
				<S.Description>{i18n("carouselDescription")}</S.Description>
				<S.CarouselWrapper>
					<Slider {...settings}>
						{imageUrls.map((imageUrl, index) => (
							<S.CarouselItem key={index}>
								<S.Logo src={imageUrl} alt={`Image ${index}`} />
							</S.CarouselItem>
						))}
					</Slider>
				</S.CarouselWrapper>
			</S.Container>
			<S.BlueBar>{i18n("opportunity")}</S.BlueBar>
			<S.WhiteBar>
				<S.Button onClick={() => router.push("/contacts")}>
					{i18n("freeDemo")}
				</S.Button>
			</S.WhiteBar>
		</>
	);
};

export default Carousel;
