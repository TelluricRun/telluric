import { Inter, Noto_Sans, Roboto, Nunito, Figtree, Urbanist } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const noto = Noto_Sans({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '900'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['200', '300', '400', '600', '700', '800', '900'] });
const figtree = Figtree({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });
const urbanist = Urbanist({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

interface IFontHelper {
	getInterFont: () => typeof inter;
	getNotoFont: () => typeof noto;
	getRobotoFont: () => typeof roboto;
	getNunitoFont: () => typeof nunito;
	getFigtreeFont: () => typeof figtree;
	getUrbanistFont: () => typeof urbanist;
};

export const FontHelper = (): IFontHelper => {
	return {
		getInterFont,
		getNotoFont,
		getRobotoFont,
		getNunitoFont,
		getFigtreeFont,
		getUrbanistFont,
	};
};

const getInterFont = (): typeof inter => {
	return inter;
};

const getNotoFont = (): typeof noto => {
	return noto;
};

const getRobotoFont = (): typeof roboto => {
	return roboto;
};

const getNunitoFont = (): typeof nunito => {
	return nunito;
};

const getFigtreeFont = (): typeof figtree => {
	return figtree;
};

const getUrbanistFont = (): typeof urbanist => {
	return urbanist;
};
