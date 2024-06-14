import * as S from "./styles";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

const AboutSection = () => {
	const i18n = useTranslations("General");
	const router = useRouter();

	return (
		<S.Section>
			<S.SubSection>
				<S.TextContainer>
					<S.Title>{i18n("aboutUs")}</S.Title>
					<S.OrangeBar />
					<S.Description>{i18n("aboutUsDescription")}</S.Description>
					<S.Button onClick={() => router.push("/contacts")}>
						{i18n("freeDemo")}
					</S.Button>
				</S.TextContainer>
				<S.ImageContainer>
					<S.Image
						src="/images/predio.png"
						alt="Imagem do prédio da empresa"
					/>
				</S.ImageContainer>
			</S.SubSection>
		</S.Section>
	);
};

export default AboutSection;
