"use client";

import { Container } from "@/app/globals";
import * as S from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@/navigation";
import { MobileHeader } from "../MobileHeader";
import { useMediaQuery } from "react-responsive";

const Header = () => {
	const i18n = useTranslations("General");
	const pathname = usePathname();
	const router = useRouter();

	const isMobileOrTablet = useMediaQuery({ query: "(max-width: 769px)" });

	return (
		<>
			{isMobileOrTablet ? (
				<MobileHeader />
			) : (
				<S.HeaderContainer>
					<Container>
						<S.Logo
							src="/images/OPEN-Solutions.png"
							alt="Logo da Open Solutions"
						/>
						<S.Nav>
							<S.NavLink onClick={() => router.push("/")}>
								{i18n("home")}
							</S.NavLink>
							<S.NavLink onClick={() => router.push("/about-us")}>
								{i18n("aboutUs")}
							</S.NavLink>
							<S.ContainerDropdown>
								<S.NavLink
									onClick={() => router.push("/solutions")}
								>
									{i18n("solutions")} <IoIosArrowDown />
								</S.NavLink>
								<S.Dropdown>
									<S.DropdownItem
										onClick={() =>
											router.push(
												"/solutions/production-order"
											)
										}
									>
										{i18n("productionOrder")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push(
												"/solutions/precificacao-1"
											)
										}
									>
										{i18n("pricing")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push(
												"/solutions/controle-de-qualidade"
											)
										}
									>
										{i18n("qualityControl")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push("/solutions/logistica")
										}
									>
										{i18n("logistics")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push(
												"/solutions/maintenance"
											)
										}
									>
										{i18n("maintenance")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push("/solutions/ggf")
										}
									>
										{i18n("ggf")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push("/solutions/aps-mrp-ii")
										}
									>
										{i18n("aps")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push("/solutions/budget")
										}
									>
										{i18n("budget")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push("/solutions/mes")
										}
									>
										{i18n("mes")}
									</S.DropdownItem>
									<S.DropdownItem
										onClick={() =>
											router.push(
												"/solutions/industria-4-0"
											)
										}
									>
										{i18n("industry4")}
									</S.DropdownItem>
								</S.Dropdown>
							</S.ContainerDropdown>
							<S.NavLink onClick={() => router.push("/careers")}>
								{i18n("careers")}
							</S.NavLink>
							<S.NavLink onClick={() => router.push("/contacts")}>
								{i18n("contact")}
							</S.NavLink>
						</S.Nav>

						<S.SocialMediasAndFlagsContainer>
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
							<S.FlagContainer>
								<Link href={pathname} locale="pt-br">
									<S.Flag
										src="/icons/br.png"
										alt="Bandeira do Brasil"
									/>
								</Link>

								<Link href={pathname} locale="en">
									<S.Flag
										src="/icons/us.png"
										alt="Bandeira dos Estados Unidos"
									/>
								</Link>

								<Link href={pathname} locale="es">
									<S.Flag
										src="/icons/es.png"
										alt="Bandeira da Espanha"
									/>
								</Link>
							</S.FlagContainer>
						</S.SocialMediasAndFlagsContainer>
					</Container>
				</S.HeaderContainer>
			)}
		</>
	);
};

export default Header;
