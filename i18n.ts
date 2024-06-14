import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["pt-br", "en", "es"];

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid

	return {
		messages: (await import(`./messages/${locale}.json`)).default,
	};
});
