interface IConfigService {
	getWebPageUrls: () => { [key: string]: string };
	getWebBlogUrls: () => { [key: string]: string };
	getAppsWebUrls: () => { [key: string]: string };
	getApiUrls: () => { [key: string]: string };
};

export const ConfigService = (): IConfigService => {
	return {
		getWebPageUrls,
		getWebBlogUrls,
		getAppsWebUrls,
		getApiUrls,
	};
};

const getWebPageUrls = () => {
	const WEB_PAGE_BASE_URL = process.env.WEB_PAGE_BASE_URL!;

	return {
		WEB_PAGE_BASE_URL,
	};
};

const getWebBlogUrls = () => {
	const WEB_BLOG_BASE_URL = process.env.WEB_BLOG_BASE_URL!;

	return {
		WEB_BLOG_BASE_URL,
	};
}

const getAppsWebUrls = () => {
	const APPS_WEB_BASE_URL = process.env.APPS_WEB_BASE_URL!;
	const APPS_WEB_SIGNUP_URL = process.env.APPS_WEB_SIGNUP_URL!;
	const APPS_WEB_SIGNIN_URL = process.env.APPS_WEB_SIGNIN_URL!;

	return {
		APPS_WEB_BASE_URL,
		APPS_WEB_SIGNUP_URL,
		APPS_WEB_SIGNIN_URL,
	};
};

const getApiUrls = () => {
	const AUTH_SERVICE_SIGNUP_URL = process.env.AUTH_SERVICE_SIGNUP_URL!;
	const AUTH_SERVICE_SIGNIN_URL = process.env.AUTH_SERVICE_SIGNIN_URL!;
	const USER_SERVICE_GET_USER_URL = process.env.USER_SERVICE_GET_USER_URL!;

	return {
		AUTH_SERVICE_SIGNUP_URL,
		AUTH_SERVICE_SIGNIN_URL,
		USER_SERVICE_GET_USER_URL,
	};
};
