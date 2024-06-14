"use client";
import { Container } from "@/app/globals";
import * as S from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@/navigation";

const Header = () => {
	const i18n = useTranslations("General");
	const pathname = usePathname();
	const router = useRouter();

	return (
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
					<S.NavLink onClick={() => router.push("/solutions")}>
						{i18n("solutions")} <IoIosArrowDown />
						<S.Dropdown>
							<S.DropdownItem>
								{i18n("productionOrder")}
							</S.DropdownItem>
							<S.DropdownItem>{i18n("pricing")}</S.DropdownItem>
							<S.DropdownItem>
								{i18n("qualityControl")}
							</S.DropdownItem>
							<S.DropdownItem>{i18n("logistics")}</S.DropdownItem>
							<S.DropdownItem>
								{i18n("maintenance")}
							</S.DropdownItem>
							<S.DropdownItem>{i18n("ggf")}</S.DropdownItem>
							<S.DropdownItem>{i18n("aps")}</S.DropdownItem>
							<S.DropdownItem>{i18n("budget")}</S.DropdownItem>
							<S.DropdownItem>{i18n("mes")}</S.DropdownItem>
							<S.DropdownItem>{i18n("industry4")}</S.DropdownItem>
						</S.Dropdown>
					</S.NavLink>
					<S.NavLink onClick={() => router.push("/careers")}>
						{i18n("careers")}
					</S.NavLink>
					<S.NavLink onClick={() => router.push("/contacts")}>
						{i18n("contact")}
					</S.NavLink>
				</S.Nav>
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
					<Link href={pathname} locale="pt-br">
						<S.Flag src="/icons/br.png" alt="Bandeira do Brasil" />
					</Link>
					<Link href={pathname} locale="en">
						<S.Flag
							src="/icons/us.png"
							alt="Bandeira dos Estados Unidos"
						/>
					</Link>
					<Link href={pathname} locale="es">
						<S.Flag src="/icons/es.png" alt="Bandeira da Espanha" />
					</Link>
				</S.FlagContainer>
			</Container>
		</S.HeaderContainer>
	);
};

export default Header;
