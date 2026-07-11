interface IConfigService {
	getApiUrls: () => { [key: string]: string };
	getAppUrls: () => { [key: string]: string };
	getPageUrls: () => { [key: string]: string };
};

export const ConfigService = (): IConfigService => {
	return {
		getApiUrls,
		getAppUrls,
		getPageUrls,
	};
};

const getApiUrls = () => {
	const AUTH_SERVICE_SIGNUP_URL = process.env.AUTH_SERVICE_SIGNUP_URL!;
	const AUTH_SERVICE_SIGNIN_URL = process.env.AUTH_SERVICE_SIGNIN_URL!;
	const USER_SERVICE_GET_USER_URL = process.env.USER_SERVICE_GET_USER_URL!;
	const USER_SERVICE_UPDATE_USER_ONBOARDING_URL = process.env.USER_SERVICE_UPDATE_USER_ONBOARDING_URL!;
	const API_WAITLIST_SERVICE_SUBMIT_NUMBER_URL = process.env.API_WAITLIST_SERVICE_SUBMIT_NUMBER_URL!;

	return {
		AUTH_SERVICE_SIGNUP_URL,
		AUTH_SERVICE_SIGNIN_URL,
		USER_SERVICE_GET_USER_URL,
		USER_SERVICE_UPDATE_USER_ONBOARDING_URL,
		API_WAITLIST_SERVICE_SUBMIT_NUMBER_URL,
	};
};

const getAppUrls = () => {
	const APP_BASE_URL = process.env.APP_BASE_URL!;
	const APP_SIGNUP_URL = process.env.APP_SIGNUP_URL!;
	const APP_SIGNIN_URL = process.env.APP_SIGNIN_URL!;

	return {
		APP_BASE_URL,
		APP_SIGNUP_URL,
		APP_SIGNIN_URL,
	};
};

const getPageUrls = () => {
	const PAGE_BASE_URL = process.env.PAGE_BASE_URL!;

	return {
		PAGE_BASE_URL,
	};
};
