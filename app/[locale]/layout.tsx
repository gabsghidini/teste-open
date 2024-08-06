import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Global } from "../globals";
import { Header } from "../components/Header";

const locales = ["pt-br", "en", "es"];

export default async function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	if (!locales.includes(locale as any)) console.error("Locale not found");

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<title>Open Solutions</title>
				<meta
					name="description"
					content="This is my Next.js app with a custom font."
				/>
				<link rel="icon" href="/icons/favicon.ico" sizes="any" />
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
			</head>
			<body>
				<Global />
				<NextIntlClientProvider messages={messages}>
					<Header/>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
