/** @type {import('next').NextConfig} */

import config from './env.config.mjs';

const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	trailingSlash: true,

	allowedDevOrigins: [
		'unchromed-saltishly-kimber.ngrok-free.dev',
	],

	env: {
		...config.WEB_PAGE_URLS,
		...config.WEB_BLOG_URLS,
		...config.APPS_WEB_URLS,
		...config.API_URLS,
	},
};

export default nextConfig;
