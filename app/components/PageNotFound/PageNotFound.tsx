import { Header } from "../Header";
import { Footer } from "../Footer";
import * as S from "./styles";
import { useTranslations } from "next-intl";



const PageNotFound = () => {

	const t = useTranslations("Products");

    return (
        <>
			<Header />
            
            <S.Container>
            <S.Title>{t("notFound")}</S.Title>

            <S.Description>{t("notFoundSubtitle")}</S.Description>

            </S.Container>
            <Footer />

		</>

    );
    }

    export default PageNotFound;