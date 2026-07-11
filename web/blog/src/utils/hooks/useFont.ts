import { NextFont } from 'next/dist/compiled/@next/font';
import { FontHelper } from '@/helpers/font.helper';

interface IFontHook {
	getInterFont: () => NextFont;
	getNotoFont: () => NextFont;
	getRobotoFont: () => NextFont;
	getNunitoFont: () => NextFont;
	getFigtreeFont: () => NextFont;
	getUrbanistFont: () => NextFont;
};

export const useFont = (): IFontHook => {
	const { getInterFont, getNotoFont, getRobotoFont, getNunitoFont, getFigtreeFont, getUrbanistFont } = FontHelper();

	return {
		getInterFont,
		getNotoFont,
		getRobotoFont,
		getNunitoFont,
		getFigtreeFont,
		getUrbanistFont,
	};
};
