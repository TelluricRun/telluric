import { ConfigService } from '@/services/config.service';

interface IConfigHook {
	getApiUrls: () => { [key: string]: string };
	getAppUrls: () => { [key: string]: string };
	getPageUrls: () => { [key: string]: string };
};

export const useConfig = (): IConfigHook => {
	const { getApiUrls, getAppUrls, getPageUrls } = ConfigService();

	return {
		getApiUrls,
		getAppUrls,
		getPageUrls,
	};
};
