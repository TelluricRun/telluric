import React, { ComponentType, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AuthService } from '@/services/auth.service';
import { ConfigService } from '@/services/config.service';
import { RedirectService } from '@/services/redirect.service';

enum RouteTypes {
	PROTECTED = 'protected',
	PUBLIC = 'public',
	NONE = 'none',
};

const routesConfig: Record<string, RouteTypes> = {
	'/': RouteTypes.PROTECTED,
	'/auth/signup': RouteTypes.PUBLIC,
	'/auth/signin': RouteTypes.PUBLIC,
};

const getRouteType = (path: string): RouteTypes => {
	return routesConfig[path] || RouteTypes.NONE;
};

interface IAuthHoc {};

const WithAuth = <T extends IAuthHoc>(WrappedComponent: ComponentType<T>): React.FC<Omit<T, keyof IAuthHoc>> => {
	return function WithAuth (props: Omit<T, keyof IAuthHoc>) {
		const { isAuthenticated } = AuthService();
		const { getAppUrls } = ConfigService();
		const { redirectTo } = RedirectService();
		const { APP_BASE_URL, APP_SIGNIN_URL } = getAppUrls();
		const router = useRouter();
		const path = usePathname();

		useEffect(() => {
			if (path) {
				const routeType = getRouteType(path);

				try {
					switch (routeType) {
						case RouteTypes.PROTECTED:
							if (!isAuthenticated()) {
								redirectTo(router, APP_SIGNIN_URL);
							}
							break;
						case RouteTypes.PUBLIC:
							if (isAuthenticated()) {
								if (path.startsWith('/auth/signup') || path.startsWith('/auth/signin')) {
									redirectTo(router, APP_BASE_URL);
								}
							}
							break;
						default:
							break;
					}
				}
				catch (error) {
					console.error('Authorization error: ', error);
				}
			}
		});

		return <WrappedComponent { ...props as T } />;
	};
};

export default WithAuth;
