const WEB_PAGE_URLS = {
	development: {
		WEB_PAGE_BASE_URL: 'http://localhost:3001',
	},
	staging: {
		WEB_PAGE_BASE_URL: 'https://test.telluric.run',
	},
	production: {
		WEB_PAGE_BASE_URL: 'https://telluric.run',
	},
};

const WEB_BLOG_URLS = {
	development: {
		WEB_BLOG_BASE_URL: 'http://localhost:3002',
	},
	staging: {
		WEB_BLOG_BASE_URL: 'https://test.blog.telluric.run',
	},
	production: {
		WEB_BLOG_BASE_URL: 'https://blog.telluric.run',
	},
};

const APPS_WEB_URLS = {
	development: {
		APPS_WEB_BASE_URL: 'http://localhost:3003',
		APPS_WEB_SIGNUP_URL: 'http://localhost:3003/auth/signup/',
		APPS_WEB_SIGNIN_URL: 'http://localhost:3003/auth/signin/',
	},
	staging: {
		APPS_WEB_BASE_URL: 'https://test.app.telluric.run',
		APPS_WEB_SIGNUP_URL: 'https://test.app.telluric.run/auth/signup/',
		APPS_WEB_SIGNIN_URL: 'https://test.app.telluric.run/auth/signin/',
	},
	production: {
		APPS_WEB_BASE_URL: 'https://app.telluric.run',
		APPS_WEB_SIGNUP_URL: 'https://app.telluric.run/auth/signup/',
		APPS_WEB_SIGNIN_URL: 'https://app.telluric.run/auth/signin/',
	},
};

const API_URLS = {
	development: {
		AUTH_SERVICE_SIGNUP_URL: 'http://localhost:4000/auth/signup',
		AUTH_SERVICE_SIGNIN_URL: 'http://localhost:4000/auth/signin',
		USER_SERVICE_GET_USER_URL: 'http://localhost:4001/user',
	},
	staging: {
		AUTH_SERVICE_SIGNUP_URL: 'https://test.api.telluric.run/auth/signup',
		AUTH_SERVICE_SIGNIN_URL: 'https://test.api.telluric.run/auth/signin',
		USER_SERVICE_GET_USER_URL: 'https://test.api.telluric.run/user',
	},
	production: {
		AUTH_SERVICE_SIGNUP_URL: 'https://api.telluric.run/auth/signup',
		AUTH_SERVICE_SIGNIN_URL: 'https://api.telluric.run/auth/signin',
		USER_SERVICE_GET_USER_URL: 'https://api.telluric.run/user',
	},
};

const environment = process.env.NEXT_PUBLIC_APP_ENV || 'development';

const config = {
	WEB_PAGE_URLS: WEB_PAGE_URLS[environment],
	WEB_BLOG_URLS: WEB_BLOG_URLS[environment],
	APPS_WEB_URLS: APPS_WEB_URLS[environment],
	API_URLS: API_URLS[environment],
};

export default config;
