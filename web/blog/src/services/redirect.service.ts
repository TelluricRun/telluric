interface IRedirectService {
	redirectTo: (router: any, url: string) => void;
};

export const RedirectService = (): IRedirectService => {
	return {
		redirectTo,
	};
};

const redirectTo = (router: any, url: string) => {
	router.push(url);
};
