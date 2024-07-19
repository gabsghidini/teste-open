import * as S from "./styles";
import { useTranslations } from "next-intl";

const VideoInfoSection = () => {
		const i18n = useTranslations("General");

		return (
			<S.Section>
				<S.Container>
					<S.VideoContainer>
						<S.Video controls autoPlay muted>
							<source
								height={400}
								src="/videos/Open-Solutions.mp4"
								type="video/mp4"
							/>
							{i18n("videoNotSupported")}
						</S.Video>
					</S.VideoContainer>
					<S.InfoContainer>
						<div>
							<S.Title>{i18n("mainFunctionalities")}</S.Title>
							<S.OrangeBar />
						</div>
						<S.Description>{i18n("watchOurVideo")}</S.Description>
						<S.Description>{i18n("solutionsDescription")}
						</S.Description>
					</S.InfoContainer>
				</S.Container>
			</S.Section>
	);
};

export default VideoInfoSection;