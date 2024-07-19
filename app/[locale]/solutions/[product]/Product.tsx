
import Slider from "react-slick";
import { useTranslations } from "next-intl";
import * as S from "../styles";
import { BannerSolutions } from "@/app/components/BannerSolutions";
import { CardProduct } from "@/app/components/Solutions/product";
import { Footer } from "@/app/components/Footer";
import { PageNotFound } from "@/app/components/PageNotFound";


interface IParams {
  product: string;
  locale: string;
}

interface IProduct {
  title: string;
  image: string[];
  imageBanner: string;
  description: string;
  descriptionTwo?: string;
  descriptionThree?: string;
  descriptionFour?: string;
  descriptionFive?: string;
  descriptionSix?: string;
  descriptionSeven?: string;
  descriptionEight?: string;
  descriptionList?: string[] | any;
  contact?: string;
}

interface IProducts {
  [key: string]: IProduct;
}

const ProductPage = ({ params }: { params: IParams }) => {
  const t = useTranslations("Products");
  const { product } = params;
  
  const products: IProducts = {
    "production-order": {
      title: t("productionOrderTitle"),
      image: [
        "/images/1-Producao-01.webp",
        "/images/2-Producao-02.webp",
        "/images/3-Producao-03.webp",
        "/images/4-Producao-04.webp",
      ],
      imageBanner: "/images/bannerSolutions.webp",
      description: t("productionOrderDescription"),
      descriptionList: t("productionOrderDescriptionList").split("%").filter((description) => description !== ""),

    },
    "precificacao-1": {
      title: t("pricingTitle"),
      image: [
        "/images/1-Precificacao-01.webp",
        "/images/2-Precificacao-02.webp",
        "/images/3-Precificacao-03.webp",
      ],
      imageBanner: "/images/bannerPricing.webp",
      description: t("pricingDescription"),
      descriptionList: t("pricingDescriptionList").split("%").filter((description) => description !== ""),
    },
    "controle-de-qualidade": {
      title: t("qualityControlTitle"),
      image: [
        "/images/1-Qualidade-01.webp",
        "/images/2-Qualidade-02.webp",
        "/images/3-Qualidade-03.webp",
        "/images/4-Qualidade-04.webp",

      ],
      imageBanner: "/images/bannerSolutions.webp",
      description: t("qualityControlDescription"),
      descriptionList: t("qualityControlDescriptionList").split("%").filter((description) => description !== ""),
    },
    "logistica": {
      title: t("logisticsTitle"),
      image: [
        "/images/1-Logistica-01.webp",
        "/images/2-Logistica-02.webp",
        "/images/3-Logistica-03.webp",
        "/images/4-Logistica-04.webp",
      ],
      imageBanner: "/images/bannerSolutions.webp",
      description: t("logisticsDescription"),
      descriptionList: t("logisticsDescriptionList").split("%").filter((description) => description !== ""),
    },
    "budget": {
      title: t("budgetTitle"),
      image: [
        "/images/1-Budget-01.webp",
        "/images/2-Budget-02.webp",
        "/images/3-Budget-03.webp",
        "/images/4-Budget-04.webp",
        "/images/5-Budget-05.webp",
        "/images/6-Budget-06.webp",
        "/images/7-Budget-07.webp",
        "/images/8-Budget-08.webp",
        "/images/9-Budget-09.webp",
      
      ],
      imageBanner: "/images/bannerSolutions.webp",
      description: t("budgetDescription"),
      descriptionTwo: t("budgetDescriptionTwo"),
      descriptionThree: t("budgetDescriptionThree"),
      contact: t("budgetContact"),
      },
      "maintenance": {
          title: t("maintenanceTitle"),
          image: [
              "/images/1-Manutencao-01.webp",
          ],
          imageBanner: "/images/bannerSolutions.webp",
          description: t("maintenanceDescription"),
          descriptionList: t("maintenanceDescriptionList").split(";").filter((description) => description !== ""),
      },
      "mes": {
      title: t("mesTitle"),
      image: [
        "/images/1-MES-01.webp",
        "/images/2-MES-02.webp",
        "/images/3-MES-03.webp",
        "/images/4-MES-04.webp",
        "/images/5-MES-05.webp",
        "/images/6-MES-06.webp",
        "/images/7-MES-07.webp",
        "/images/8-MES-08.webp",
        "/images/9-MES-09.webp",
        "/images/10-MES-10.webp",
      ],
      imageBanner: "/images/bannerSolutions.webp",
      description: t("mesDescription"),
      descriptionTwo: t("mesDescriptionTwo"),
      descriptionThree: t("mesDescriptionThree"),
      descriptionFour: t("mesDescriptionFour"),
      descriptionFive: t("mesDescriptionFive"),
    },
    "ggf": {
      title: t("ggfTitle"),
      image: [
        "/images/1-GGF-01.webp",
        "/images/2-GGF-02.webp",
        "/images/3-GGF-03.webp",
        "/images/4-GGF-04.webp",
      ],
      imageBanner: "/images/bannerSolutions.webp",
      description: t("ggfDescription"),
      descriptionList: t("ggfDescriptionList").split(";").filter((description) => description !== ""),
    },
    "industria-4-0": {
      title: t("industryTitle"),
      image: [
        "/images/Industria-4.0-1-1.webp",
        "/images/Industria-4.0-2-1.webp",
        "/images/Industria-4.0-3-1.webp",
        "/images/Industria-4.0-4-1.webp",
      
      ],
      imageBanner: "/images/bannerSolutions.webp",
      description: t("industryDescription"),
      descriptionTwo: t("industryDescriptionTwo"),
      descriptionList: t("industryDescriptionList").split("%").filter((description) => description !== ""),
    },
    "aps-mrp-ii": {
      title: t("apsTitle"),
      image: [
        "/images/1-APS-MRP-01.webp",
        "/images/2-APS-MRP-02.webp",
        "/images/3-APS-MRP-03.webp",
        "/images/4-APS-MRP-04.webp",
        "/images/5-APS-MRP-05.webp",
        "/images/6-APS-MRP-06.webp",
        "/images/7-APS-MRP-07.webp",
        "/images/8-APS-MRP-08.webp",
        "/images/9-APS-MRP-09.webp",
        "/images/10-APS-MRP-10.webp",
        "/images/11-APS-MRP-11.webp",
      ],
      imageBanner: "/images/bannerSolutions.webp",
      description: t("apsDescription"),
      descriptionTwo: t("apsDescriptionTwo"),
      descriptionThree: t("apsDescriptionThree"),
      descriptionFour: t("apsDescriptionFour"),
      descriptionFive: t("apsDescriptionFive"),
      descriptionSix: t("apsDescriptionSix"),
      descriptionSeven: t("apsDescriptionSeven"),
      descriptionEight: t("apsDescriptionEight"),
      contact: t("apsContact"),
    },
  };

  const productData = products[product as string];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  if (!productData) {
    return <PageNotFound />;
  }

  return (
    <>
      <BannerSolutions imageBanner={productData.imageBanner} />
      <S.Container>
        <CardProduct productData={productData} />
      </S.Container>
      <S.SliderContainer>
        <S.ContainerSlider>
          <Slider {...settings}>
            {productData.image.map((item, index) => (
              <S.ImageSlider key={item} src={productData.image[index]} alt={productData.title}>
              </S.ImageSlider>
            ))}
          </Slider>
        </S.ContainerSlider>
      </S.SliderContainer>
      <Footer />
    </>
  );
};

export default ProductPage;

