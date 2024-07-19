"use client";
import Link from "next/link";
import * as S from "./styles";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

const Footer: React.FC = () => {
	const i18n = useTranslations("General");
	const router = useRouter();

	return (
		<>
			<S.FooterContainer>
				<S.Container>
					<S.FooterColumn>
						<S.Image src="/images/OPEN-Solutions.png" alt="Logo" />
						<S.Subtitle>{i18n("followUs")}</S.Subtitle>
						<S.FlagContainer>
							<Link
								href="https://www.instagram.com/opensolutions.sistema/"
								target="_blank"
							>
								<S.Instagram />
							</Link>
							<Link
								href="https://www.linkedin.com/company/open-solutions-br/"
								target="_blank"
							>
								<S.LinkedIn />
							</Link>
						</S.FlagContainer>
					</S.FooterColumn>
					<S.FooterColumnLeft>
						<S.ColumnHeader
							onClick={() => router.push("/solutions")}
						>
							{i18n("solutions")}
						</S.ColumnHeader>
						<S.Text
							onClick={() =>
								router.push("/solutions/production-order")
							}
						>
							{i18n("productionOrder")}
						</S.Text>
						<S.Text
							onClick={() =>
								router.push("/solutions/precificacao-1")
							}
						>
							{i18n("pricing")}
						</S.Text>
						<S.Text
							onClick={() =>
								router.push("/solutions/controle-de-qualidade")
							}
						>
							{i18n("qualityControl")}
						</S.Text>
						<S.Text
							onClick={() => router.push("/solutions/logistica")}
						>
							{i18n("logistics")}
						</S.Text>
						<S.Text
							onClick={() =>
								router.push("/solutions/maintenance")
							}
						>
							{i18n("maintenance")}
						</S.Text>
						<S.Text onClick={() => router.push("/solutions/ggf")}>
							{i18n("ggf")}
						</S.Text>
						<S.Text
							onClick={() => router.push("/solutions/aps-mrp-ii")}
						>
							{i18n("aps")}
						</S.Text>
						<S.Text
							onClick={() => router.push("/solutions/budget")}
						>
							{i18n("budget")}
						</S.Text>
						<S.Text onClick={() => router.push("/solutions/mes")}>
							{i18n("mes")}
						</S.Text>
						<S.Text
							onClick={() =>
								router.push("/solutions/industria-4-0")
							}
						>
							{i18n("industry4")}
						</S.Text>
					</S.FooterColumnLeft>
					<S.FooterColumnLeft>
						<S.ColumnHeader>
							{i18n("contactWithLocation")}
						</S.ColumnHeader>
						<S.TextContainer>
							<S.WhatsApp />
							<S.Text>{i18n("whatsapp")}</S.Text>
						</S.TextContainer>
						<S.TextContainer>
							<S.Pin />
							<S.TextLeft>{i18n("location")}</S.TextLeft>
						</S.TextContainer>
						<S.DemoButton onClick={() => router.push("/contacts")}>
							{i18n("scheduleADemo")}
						</S.DemoButton>
					</S.FooterColumnLeft>
				</S.Container>
			</S.FooterContainer>
			<S.CopyrightContainer>
				<S.Text>{i18n("copyright")}</S.Text>
			</S.CopyrightContainer>
		</>
	);
};

export default Footer;
