import * as S from "./styles";
import { useTranslations } from "next-intl";

const InfoSection = () => {
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
				</S.Container>
			</S.Section>
			<S.BottomLine />
		</>
	);
};

export default InfoSection;
