import * as S from "./styles";
import { useTranslations } from "next-intl";
import {  useRouter } from "@/navigation";

const InfoSection = () => {
	const router = useRouter();
	const i18n = useTranslations("General");

	return (
		<>
			<S.Section>
				<S.Container>
					<S.Title>
						{i18n("meetThe")}{" "}
						<S.Highlight>{i18n("openManufacturing")}</S.Highlight>,{" "}
						{i18n("openManufacturingDescription")}
					</S.Title>
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
						<S.Card onClick={() => router.push("/solutions/logistica") }>
							<S.CardTitle>{i18n("logistics")}</S.CardTitle>
							<S.ListCheck />
						</S.Card>
						<S.Card>
							<S.CardTitle>{i18n("maintenance")}</S.CardTitle>
							<S.Wrench />
						</S.Card>
						<S.Card onClick={() => router.push("/solutions/ggf")}>
							<S.CardTitle>{i18n("ggf")}</S.CardTitle>
							<S.Calculator />
						</S.Card>
						<S.Card onClick={() => router.push("/solutions/aps-mrp-ii") }>
							<S.CardTitle>{i18n("aps")}</S.CardTitle>
							<S.Gantt />
						</S.Card>
						<S.Card onClick={() => router.push("/solutions/budget") }>
							<S.CardTitle>{i18n("budget")}</S.CardTitle>
							<S.MoneyMagnifyingGlass />
						</S.Card>
						<S.Card onClick={() => router.push("/solutions/mes") }>
							<S.CardTitle>{i18n("mes")}</S.CardTitle>
							<S.Cogs />
						</S.Card>
						<S.Card onClick={() => router.push("/solutions/industria-4-0")}>
							<S.CardTitle>{i18n("industry4")}</S.CardTitle>
							<S.UserCogs />
						</S.Card>
					</S.Grid>
				</S.Container>
			</S.Section>
			<S.BottomLine />
		</>
	);
};

export default InfoSection;
