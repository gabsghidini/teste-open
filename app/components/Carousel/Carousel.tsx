import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import * as S from "./styles";

import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import { useEffect, useState } from "react";

const Carousel = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {    
		setIsClient(true);
	}, []);

	const isDesktop = useMediaQuery({ query: '(min-width: 600px)' })

	const isTablet = useMediaQuery({ minWidth: 402, maxWidth: 599 })

	const isMobile = useMediaQuery({ query: '(max-width: 401px)' })

	const i18n = useTranslations("General");

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
			};

	const settingsTablet = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000
		
	};

	const settingsDesktop = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000
	};

	const router = useRouter();

	const imageUrls = [
		"/clients/alestis.webp",
		"/clients/biometrix.webp",
		"/clients/boticario.webp",
		"/clients/convencao.webp",
		"/clients/drpeanut.webp",
		"/clients/duasrodas.webp",
		"/clients/duxteno.webp",
		"/clients/elinox.webp",
		"/clients/f2j.webp",
		"/clients/fermentech.webp",
		"/clients/forjasul.webp",
		"/clients/kasvi.webp",
		"/clients/login.webp",
		"/clients/max.webp",
		"/clients/metinjo.webp",
		"/clients/nacon.webp",
		"/clients/probiotica.webp",
		"/clients/sooro.webp",
		"/clients/tecnosil.webp",
		"/clients/vansil.webp",
	];

	return (
		<>
			<S.Container>
				<S.Description>{i18n("carouselDescription")}</S.Description>
				<S.CarouselWrapper>
					{isDesktop && isClient && <Slider {...settingsDesktop}>
						{imageUrls.map((imageUrl, index) => (
							<S.CarouselItem key={index}>
								<S.Logo src={imageUrl} alt={`Image ${index}`} />
							</S.CarouselItem>
						))}
					</Slider>}
					{isTablet && isClient && <Slider {...settingsTablet}>
						{imageUrls.map((imageUrl, index) => (
							<S.CarouselItem key={index}>
								<S.Logo src={imageUrl} alt={`Image ${index}`} />
							</S.CarouselItem>
						))}
					</Slider>}
					{isMobile && isClient && <Slider {...settings}>
						{imageUrls.map((imageUrl, index) => (
							<S.CarouselItem key={index}>
								<S.Logo src={imageUrl} alt={`Image ${index}`} />
							</S.CarouselItem>
						))}
					</Slider>}
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
