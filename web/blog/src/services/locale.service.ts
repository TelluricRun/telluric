import roTranslations from '@/translations/ro.json';
import enTranslations from '@/translations/en.json';

interface ILocaleService {
	getLocales: () => { value: string; label: string }[];
	getTranslations: () => { [key: string]: any };
};

export const LocaleService = (): ILocaleService => {
	return {
		getLocales,
		getTranslations,
	};
};

const getLocales = () => {
	const locales = [
		{
			value: 'EN',
			label: 'english',
		},
		{
			value: 'RO',
			label: 'română',
		},
	];

	return locales;
};

const getTranslations = () => {
	const translations = {
		'RO': roTranslations,
		'EN': enTranslations,
	};

	return translations;
};
