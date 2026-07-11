import { useRouter } from 'next/navigation';
import { RedirectService } from '@/services/redirect.service';

interface IRedirectHook {
	redirectTo: (url: string) => void;
};

export const useRedirect = (): IRedirectHook => {
	const router = useRouter();
	const { redirectTo } = RedirectService();

	return {
		redirectTo: (url: string): void => redirectTo(router, url),
	};
};
