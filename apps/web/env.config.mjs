const API_URLS = {
	development: {
		AUTH_SERVICE_SIGNUP_URL: 'http://localhost:4000/auth/signup',
		AUTH_SERVICE_SIGNIN_URL: 'http://localhost:4000/auth/signin',
		USER_SERVICE_GET_USER_URL: 'http://localhost:4001/user',
		USER_SERVICE_UPDATE_USER_ONBOARDING_URL: 'http://localhost:4001/user/onboarding',
		API_WAITLIST_SERVICE_SUBMIT_NUMBER_URL: 'http://localhost:4002/development/api/submit-number',
	},
	staging: {
		AUTH_SERVICE_SIGNUP_URL: 'https://api.readytest.software/auth/signup',
		AUTH_SERVICE_SIGNIN_URL: 'https://api.readytest.software/auth/signin',
		USER_SERVICE_GET_USER_URL: 'https://api.readytest.software/user',
		USER_SERVICE_UPDATE_USER_ONBOARDING_URL: 'https://api.readytest.software/user/onboarding',
		API_WAITLIST_SERVICE_SUBMIT_NUMBER_URL: 'http://localhost:4002/development/api/submit-number',
	},
	production: {
		AUTH_SERVICE_SIGNUP_URL: 'https://api.ready.software/auth/signup',
		AUTH_SERVICE_SIGNIN_URL: 'https://api.ready.software/auth/signin',
		USER_SERVICE_GET_USER_URL: 'https://api.ready.software/user',
		USER_SERVICE_UPDATE_USER_ONBOARDING_URL: 'https://api.ready.software/user/onboarding',
		API_WAITLIST_SERVICE_SUBMIT_NUMBER_URL: 'https://api.transit.expert/api/submit-number',
	},
};

const APP_URLS = {
	development: {
		APP_BASE_URL: 'http://localhost:3002',
		APP_SIGNUP_URL: 'http://localhost:3002/auth/signup/',
		APP_SIGNIN_URL: 'http://localhost:3002/auth/signin/',
	},
	staging: {
		APP_BASE_URL: 'https://app.readytest.software',
		APP_SIGNUP_URL: 'https://app.readytest.software/auth/signup/',
		APP_SIGNIN_URL: 'https://app.readytest.software/auth/signin/',
	},
	production: {
		APP_BASE_URL: 'https://app.ready.software',
		APP_SIGNUP_URL: 'https://app.ready.software/auth/signup/',
		APP_SIGNIN_URL: 'https://app.ready.software/auth/signin/',
	},
};

const PAGE_URLS = {
	development: {
		PAGE_BASE_URL: 'http://localhost:3001',
	},
	staging: {
		PAGE_BASE_URL: 'https://readytest.software',
	},
	production: {
		PAGE_BASE_URL: 'https://ready.software',
	},
};

const environment = process.env.APP_ENV || 'development';

const config = {
	API_URLS: API_URLS[environment],
	APP_URLS: APP_URLS[environment],
	PAGE_URLS: PAGE_URLS[environment],
};

export default config;
