import { useState, useEffect } from 'react';

interface INavigatorHook extends Navigator {
	userAgentData?: {
		brands: { brand: string; version: string; }[];
		mobile: boolean;
		platform: string;
	};
};

export const useNavigator = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const ExtendedNavigator: INavigatorHook = navigator as INavigatorHook;

		if (ExtendedNavigator && ExtendedNavigator.userAgentData) {
			setIsMobile(ExtendedNavigator.userAgentData.mobile);
		}
	}, []);

	return {
		isMobile,
	};
};

// TODO add more interfaces/contracts
