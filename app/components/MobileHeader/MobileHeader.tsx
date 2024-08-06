import { useState } from "react";
import * as S from "./styles";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@/navigation";

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const i18n = useTranslations("General");
	const router = useRouter();
	const pathname = usePathname();

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<S.MobileNav>
			<S.Logo
				src="/images/OPEN-Solutions.webp"
				alt="Logo da Open Solutions"
			/>
			<S.MenuHamburger onClick={handleOpen} />
			{isOpen && (
				<S.MobileDropdown>
					<button onClick={handleOpen}>X</button>
					<S.MobileDropdownList>
						<S.MobileDropdownItem onClick={() => router.push("/")}>
							{i18n("home")}
						</S.MobileDropdownItem>
						<S.MobileDropdownItem
							onClick={() => router.push("/about-us")}
						>
							{i18n("aboutUs")}
						</S.MobileDropdownItem>
						<S.MobileDropdownItem
							onClick={() => router.push("/solutions")}
						>
							{i18n("solutions")}
						</S.MobileDropdownItem>
						<S.MobileDropdownItem
							onClick={() => router.push("/careers")}
						>
							{i18n("careers")}
						</S.MobileDropdownItem>
						<S.MobileDropdownItem
							onClick={() => router.push("/contacts")}
						>
							{i18n("contact")}
						</S.MobileDropdownItem>
						<S.MobileDropdownItem>
							<S.FlagContainer>
								<S.SocialMediaContainer>
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
									<Link
										href="https://www.youtube.com/@opensolutionsbrasil"
										target="_blank"
									>
										<S.Youtube />
									</Link>
								</S.SocialMediaContainer>
								<Link href={pathname} locale="pt-br">
									<S.Flag
										src="/icons/br.webp"
										alt="Bandeira do Brasil"
									/>
								</Link>
								<Link href={pathname} locale="en">
									<S.Flag
										src="/icons/us.webp"
										alt="Bandeira dos Estados Unidos"
									/>
								</Link>
								<Link href={pathname} locale="es">
									<S.Flag
										src="/icons/es.webp"
										alt="Bandeira da Espanha"
									/>
								</Link>
							</S.FlagContainer>
						</S.MobileDropdownItem>
					</S.MobileDropdownList>
				</S.MobileDropdown>
			)}
		</S.MobileNav>
	);
};

export default MobileHeader;
