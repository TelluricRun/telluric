import { ConfigService } from '@/services/config.service';

interface IConfigHook {
	getWebPageUrls: () => { [key: string]: string };
	getWebBlogUrls: () => { [key: string]: string };
	getAppsWebUrls: () => { [key: string]: string };
	getApiUrls: () => { [key: string]: string };
};

export const useConfig = (): IConfigHook => {
	const { getWebPageUrls, getWebBlogUrls, getAppsWebUrls, getApiUrls } = ConfigService();

	return {
		getWebPageUrls,
		getWebBlogUrls,
		getAppsWebUrls,
		getApiUrls,
	};
};
