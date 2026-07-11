import { AuthService } from '@/services/auth.service';
import { ConfigService } from '@/services/config.service';

interface IAuthHook {
	signUp: (email: string, password: string) => Promise<any>;
	signIn: (email: string, password: string) => Promise<any>;
	isAuthenticated: () => boolean;
};

export const useAuth = (): IAuthHook => {
	const { signUp, signIn, isAuthenticated } = AuthService();
	const { getApiUrls } = ConfigService();
	const { AUTH_SERVICE_SIGNUP_URL, AUTH_SERVICE_SIGNIN_URL } = getApiUrls();

	return {
		signUp: async (email: string, password: string): Promise<any> => await signUp(AUTH_SERVICE_SIGNUP_URL, email, password),
		signIn: async (email: string, password: string): Promise<any> => await signIn(AUTH_SERVICE_SIGNIN_URL, email, password),
		isAuthenticated,
	};
};
