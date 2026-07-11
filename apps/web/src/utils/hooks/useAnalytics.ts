import { sendGTMEvent } from '@next/third-parties/google';
import { useCallback } from 'react';

interface IAnalyticsHook {
  (eventName: string, callback?: () => void): void;
};

export const useAnalytics = (): IAnalyticsHook => {
	const trackEvent = useCallback<IAnalyticsHook>((eventName, callback) => {
		sendGTMEvent({ event: eventName });

		if (callback) {
			callback();
		}
	}, []);

	return trackEvent;
};
