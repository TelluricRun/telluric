interface IAuthService {
	signUp: (url: string, email: string, password: string) => Promise<any>;
	signIn: (url: string, email: string, password: string) => Promise<any>;
	signOut: () => void;
	isAuthenticated: () => boolean;
	getAccessToken: () => (string | null);
	getRefreshToken: () => void;
};

export const AuthService = (): IAuthService => {
	return {
		signUp,
		signIn,
		signOut,
		isAuthenticated,
		getAccessToken,
		getRefreshToken,
	};
};

const signUp = async (url: string, email: string, password: string): Promise<any> => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	};

	try {
		const response = await fetch(url, options);

		const {
			message,
		}: any = await response.json();

		return {
			message,
		};
	}
	catch (error) {
		console.error(error);

		return error as any;
	}
};

const signIn = async (url: string, email: string, password: string): Promise<any> => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	};

	try {
		const response = await fetch(url, options);

		const {
			message,
			token,
		}: any = await response.json();

		if (token) {
			localStorage.setItem('access_token', token);
		}
		
		if (isAuthenticated()) {
			// if authenticated (meaning if token is found)
			// check if valid (do NOT decrypt on client)
			// check validity by sanitizing (has to have 3 parts separated by 2 dots)
			window.location.href = '/dashboard';
		}

		return {
			message,
		};
	}
	catch (error) {
		console.error(error);

		return error as any;
	}
};

const signOut = (): void => {
	if (typeof window === 'undefined') {
		return;
	}

	document.cookie = 'token' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

const isAuthenticated = (): boolean => {
	if (typeof window === 'undefined') {
		return false;
	}

	return getAccessToken() !== null;
};

const getAccessToken = (): (string | null) => {
	if (typeof window === 'undefined') {
		return null;
	}

	const cookies = document.cookie.split(';');

	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();

		if (cookie.startsWith('token=')) {
			return cookie.substring('token='.length, cookie.length);
		}
	}

	return null;
};

const getRefreshToken = (): void => {

};

//	auth service returns ACCESS_TOKEN and REFRESH_TOKEN

//	we store ACCESS_TOKEN in STATE and REFRESH_TOKEN in cookie

//	we store userINFO in STATE

//	check if user exists in UserStore

//	if logged in we show info

//	if NOT logged in we show buttons
