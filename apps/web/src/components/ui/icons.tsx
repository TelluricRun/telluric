/**
 * Icons Component
 * A collection of icons components that can be customized via type and size properties.

 * Icon
 * @param { string } color - The color of the icon -- defaults to ['#000000'].
 * @param { string } size - The size of the icon -- defaults to ['24px'].
 *  * DuoIcon
 * @param { string } primaryColor - The primary color of the icon -- defaults to ['#FFFFFF'].
 * @param { string } secondaryColor - The secondary color of the icon -- defaults to ['#1CCA3D'].
 * @param { string } size - The size of the icon -- defaults to ['30px'].
*/

import React from 'react';
import styles from './icons.module.css';

export interface IIconProps {
	color?: string;
	size?: string;
}

export interface IDuoIconProps {
	primaryColor?: string;
	secondaryColor?: string;
	size?: string;
}

const defaultIconColor = '#000000';
const defaultIconSize = '24px';
const defaultDuoIconPrimaryColor = '#FFFFFF';
const defaultDuoIconSecondaryColor = '#1CCA3D';
const defaultDuoIconSize = '30px';

export const IconZero: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } xmlns="http://www.w3.org/2000/svg" width={ size} height={ size } viewBox="0 0 24 24" fill="none" stroke={ color } strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M16 16v-8" />
				<path d="M12 20a4 4 0 0 0 4 -4v-8a4 4 0 1 0 -8 0v8a4 4 0 0 0 4 4" />
			</svg>
		</div>
	);
};

export const IconCircles: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path d='M15,2A7,7,0,0,0,8.12,7.74,6,6,0,0,0,5,12.41,5,5,0,1,0,11.59,19a6,6,0,0,0,4.67-3.09A7,7,0,0,0,15,2ZM10,17.43c0,.1,0,.2-.07.31h0a3,3,0,1,1-3.64-3.64h0L6.57,14A2.94,2.94,0,0,1,10,17.43Zm5-3.67a1.8,1.8,0,0,1-.05.19,3.74,3.74,0,0,1-.17.54,4,4,0,0,1-2.7,2.4c0-.18,0-.35-.06-.53s0-.27,0-.4-.12-.38-.18-.57-.07-.24-.12-.36a4.21,4.21,0,0,0-.3-.55c0-.09-.09-.19-.15-.28a5.3,5.3,0,0,0-.6-.73l-.2-.17a5.52,5.52,0,0,0-.53-.43,2.9,2.9,0,0,0-.34-.19,4,4,0,0,0-.5-.27,2.34,2.34,0,0,0-.4-.13,3.13,3.13,0,0,0-.52-.16c-.14,0-.29,0-.44-.06L7.13,12A4,4,0,0,1,9.52,9.3a3.27,3.27,0,0,1,.53-.17l.2-.05A3.74,3.74,0,0,1,11,9a4,4,0,0,1,4,4A3.84,3.84,0,0,1,14.92,13.76Zm2-.16q0-.3,0-.6a6,6,0,0,0-6-6q-.3,0-.6,0A5,5,0,1,1,17,13.6Z' />
			</svg>
		</div>
	);
};

export const IconSpinner: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } version='1.1' id='L9' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enableBackground='new 0 0 0 0' xmlSpace='preserve'>
				<path fill={ color } d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'>
					<animateTransform
						attributeName='transform'
						attributeType='XML'
						type='rotate'
						dur='1s'
						from='0 50 50'
						to='360 50 50'
						repeatCount='indefinite'
					/>
				</path>
			</svg>
		</div>
	);
};

export const IconIphone: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' version='1.1' fill='none'>
 				<path d='M12 17.5H12.01M8.2 22H15.8C16.9201 22 17.4802 22 17.908 21.782C18.2843 21.5903 18.5903 21.2843 18.782 20.908C19 20.4802 19 19.9201 19 18.8V5.2C19 4.07989 19 3.51984 18.782 3.09202C18.5903 2.71569 18.2843 2.40973 17.908 2.21799C17.4802 2 16.9201 2 15.8 2H8.2C7.0799 2 6.51984 2 6.09202 2.21799C5.71569 2.40973 5.40973 2.71569 5.21799 3.09202C5 3.51984 5 4.0799 5 5.2V18.8C5 19.9201 5 20.4802 5.21799 20.908C5.40973 21.2843 5.71569 21.5903 6.09202 21.782C6.51984 22 7.07989 22 8.2 22ZM12.5 17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5C11.5 17.2239 11.7239 17 12 17C12.2761 17 12.5 17.2239 12.5 17.5Z' stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
 			</svg>
		</div>
	);
};

export const IconAppRankLeft: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg" height="46"><g clipPath="url(#clip0_5880_37773)"><path fillRule="evenodd" clipRule="evenodd" d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z" fill="var(--glacier-darker)"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z" fill="var(--glacier-darker)"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z" fill="var(--glacier-darker)"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z" fill="var(--glacier-darker)"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z" fill="var(--glacier-darker)"></path></g><defs><clipPath id="clip0_5880_37773"><rect width="18.8235" height="32" fill="white" transform="translate(0.453125 0.000488281)"></rect></clipPath></defs></svg>
		</div>
	);
};

export const IconAppRankRight: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" fill="none" height="46"><g clipPath="url(#clip0_5880_37786)"><path fillRule="evenodd" clipRule="evenodd" d="M4.06516 25.417L4.72713 24.4547L3.02437 23.6492L2.3624 24.6116L3.21378 25.0143L2.3624 24.6116C0.890857 26.751 1.60381 29.3868 3.95483 30.4989C4.69986 30.8513 5.55423 31.0196 6.43257 30.987L6.75025 30.9752L6.82494 29.2305L6.50726 29.2423C5.98026 29.2618 5.46764 29.1608 5.02062 28.9494C3.61001 28.2821 3.18223 26.7007 4.06516 25.417Z" fill="var(--glacier-darker)"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.2303 10.235C9.47283 8.96204 8.62998 7.4878 8.70171 5.81232C8.77344 4.13685 9.7454 2.59524 11.6176 1.18749C13.375 2.46049 14.2179 3.93473 14.1462 5.6102C14.0744 7.28568 13.1025 8.82729 11.2303 10.235Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.3604 0.489275C11.9975 0.226387 11.4472 0.246818 11.0605 0.537533C9.01618 2.07473 7.84763 3.84975 7.76242 5.84026C7.6772 7.83076 8.69724 9.52453 10.6163 10.9146C10.9792 11.1775 11.5296 11.157 11.9162 10.8663C13.9605 9.32914 15.1291 7.55411 15.2143 5.56361C15.2995 3.57311 14.2795 1.87933 12.3604 0.489275ZM11.6311 2.3684C12.7748 3.38355 13.2568 4.47199 13.2069 5.63813C13.157 6.80428 12.5801 7.93203 11.3456 9.03547C10.2019 8.02032 9.71991 6.93187 9.76983 5.76573C9.81975 4.59959 10.3966 3.47184 11.6311 2.3684Z" fill="var(--glacier-darker)"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.87411 24.0529C5.42328 22.353 7.12208 21.4688 8.97051 21.4001C10.8189 21.3315 12.4473 22.0923 13.8556 23.6824C12.3065 25.3823 10.6077 26.2666 8.75924 26.3352C6.9108 26.4038 5.28243 25.6431 3.87411 24.0529Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.6494 24.1787C14.9466 23.8526 14.9656 23.4097 14.6954 23.1046C13.1648 21.3765 11.2793 20.4331 9.03368 20.5164C6.78805 20.5998 4.81561 21.6864 3.13199 23.5339C2.83478 23.86 2.81582 24.303 3.08601 24.608C4.61655 26.3361 6.50208 27.2795 8.74771 27.1962C10.9933 27.1128 12.9658 26.0262 14.6494 24.1787ZM12.5669 23.7198C11.3316 24.8808 10.0869 25.4045 8.82241 25.4515C7.55791 25.4984 6.35415 25.0656 5.21452 23.9928C6.44977 22.8318 7.69449 22.3081 8.95899 22.2611C10.2235 22.2142 11.4272 22.6471 12.5669 23.7198Z" fill="var(--glacier-darker)"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.87809 20.7043C9.34099 18.5957 10.3908 17.0928 12.0274 16.1956C13.6641 15.2984 15.5603 15.1864 17.716 15.8596C17.2531 17.9683 16.2033 19.4712 14.5667 20.3684C12.93 21.2656 11.0338 21.3775 8.87809 20.7043Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M18.7627 15.9443C18.8516 15.5393 18.6104 15.1569 18.1814 15.023C15.821 14.2859 13.5833 14.3695 11.6022 15.4554C9.6302 16.5364 8.45336 18.3139 7.95247 20.5956C7.86356 21.0006 8.10482 21.3829 8.5338 21.5169C10.8942 22.254 13.1319 22.1704 15.113 21.0844C17.085 20.0034 18.2618 18.226 18.7627 15.9443ZM16.6012 16.4656C16.1209 17.9951 15.2748 19.007 14.1415 19.6282C13.0241 20.2407 11.7105 20.4286 10.114 20.0743C10.5943 18.5448 11.4404 17.5329 12.5737 16.9116C13.6911 16.2991 15.0047 16.1113 16.6012 16.4656Z" fill="var(--glacier-darker)"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.6456 15.6267C10.8982 13.6743 11.0176 11.9555 12.004 10.4702C12.9903 8.98484 14.6462 8.03014 16.9718 7.60605C17.7192 9.55846 17.5997 11.2773 16.6134 12.7626C15.6271 14.2479 13.9711 15.2026 11.6456 15.6267Z" fill="none"></path><path fillRule="evenodd" clipRule="evenodd" d="M17.8943 7.28295C17.7454 6.89397 17.2889 6.67525 16.8087 6.76282C14.2562 7.22831 12.291 8.31371 11.1107 10.0911C9.93513 11.8614 9.84602 13.854 10.6566 15.9715C10.8055 16.3605 11.262 16.5792 11.7422 16.4916C14.2947 16.0261 16.26 14.9407 17.4402 13.1634C18.6158 11.393 18.7049 9.40048 17.8943 7.28295ZM16.2162 8.6613C16.6143 10.1267 16.4088 11.3465 15.7201 12.3835C15.0407 13.4067 13.9538 14.1584 12.3348 14.5931C11.9366 13.1278 12.1421 11.9079 12.8308 10.8709C13.5102 9.84774 14.5972 9.09607 16.2162 8.6613Z" fill="var(--glacier-darker)"></path></g><defs><clipPath id="clip0_5880_37786"><rect width="18.8235" height="32" fill="white" transform="matrix(-1 0 0 1 19.1016 0.000488281)"></rect></clipPath></defs></svg>
		</div>
	);
};

export const IconArrowTopRight: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' version='1.1' fill={ color }>
				<path d='M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z' />
			</svg>
		</div>
	);
};

export const IconArrowRight: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' version='1.1' fill={ color }>
				<path d='M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z' />
			</svg>
		</div>
	);
};

export const IconArrowBottomRight: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlnsXlink='http://www.w3.org/1999/xlink'
					 xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' version='1.1' fill={ color }>
				<path d="M4.2216 5.63589L5.63562 4.22168L17.0709 15.6569V10.0712H19.0709L19.0709 19.0712L10.0709 19.0712L10.0709 17.0712L15.6567 17.0712L4.2216 5.63589Z"></path>
			</svg>
		</div>
	);
};

export const IconArrowBottom: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' version='1.1' fill='none' stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<path d="M12 5l0 14" />
				<path d="M16 15l-4 4" />
				<path d="M8 15l4 4" />
			</svg>
		</div>
	);
};

export const IconBankCard: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill={ color } d='M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 11.9998H4.00488V18.9998H20.0049V11.9998ZM20.0049 7.99979V4.99979H4.00488V7.99979H20.0049Z' />
			</svg>
		</div>
	);
};

export const IconSearch: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z' />
			</svg>
		</div>
	);
};

export const IconGoogleDocs: React.FC<IIconProps> = ({
    color = defaultIconColor,
    size = defaultIconSize,
}) => {
    return (
        <div>
            <svg className={ styles.svg } xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } viewBox="0, 0, 400,400">
                <g>
                    <path d="M71.209 1.561 C 61.922 4.902,55.012 11.158,50.558 20.258 L 48.047 25.391 48.047 200.000 L 48.047 374.609 50.558 379.742 C 55.116 389.054,62.079 395.252,71.591 398.465 C 76.120 399.994,78.198 400.016,201.573 399.814 L 326.953 399.609 332.422 396.937 C 339.577 393.441,345.785 387.234,349.281 380.078 L 351.953 374.609 352.158 245.898 L 352.362 117.187 312.314 117.163 C 259.404 117.132,256.350 116.632,246.031 106.313 C 235.712 95.994,235.212 92.939,235.180 40.039 L 235.156 0.000 155.273 0.028 C 78.428 0.055,75.232 0.114,71.209 1.561 M258.594 46.004 C 258.594 100.017,252.447 93.905,306.448 93.590 L 346.099 93.359 302.347 49.612 L 258.594 5.865 258.594 46.004 M275.511 166.583 C 283.023 170.694,283.174 181.580,275.781 186.187 L 273.047 187.891 200.000 187.891 C 128.338 187.891,126.904 187.861,124.360 186.328 C 115.351 180.899,117.425 168.072,127.718 165.560 C 133.362 164.182,272.889 165.148,275.511 166.583 M275.511 213.458 C 283.023 217.569,283.174 228.455,275.781 233.062 L 273.047 234.766 200.000 234.766 C 128.338 234.766,126.904 234.736,124.360 233.203 C 115.351 227.774,117.425 214.947,127.718 212.435 C 133.362 211.057,272.889 212.023,275.511 213.458 M275.511 260.333 C 283.023 264.444,283.174 275.330,275.781 279.937 L 273.047 281.641 200.000 281.641 C 128.338 281.641,126.904 281.611,124.360 280.078 C 115.351 274.649,117.425 261.822,127.718 259.310 C 133.362 257.932,272.889 258.898,275.511 260.333 M228.636 307.208 C 236.184 311.339,236.257 322.439,228.765 326.953 C 226.244 328.472,224.787 328.516,176.563 328.516 C 128.338 328.516,126.881 328.472,124.360 326.953 C 115.350 321.524,117.421 308.712,127.718 306.180 C 133.242 304.822,226.002 305.767,228.636 307.208" stroke="none" fill={ color } fillRule="evenodd" />
                </g>
            </svg>
        </div>
    );
};

export const IconGoogleSheets: React.FC<IIconProps> = ({
    color = defaultIconColor,
    size = defaultIconSize,
}) => {
    return (
        <div>
            <svg className={ styles.svg } xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } viewBox="0, 0, 400,400">
                <g>
                    <path d="M71.209 1.561 C 61.922 4.902,55.012 11.158,50.558 20.258 L 48.047 25.391 48.047 200.000 L 48.047 374.609 50.558 379.742 C 55.116 389.054,62.079 395.252,71.591 398.465 C 76.120 399.994,78.198 400.016,201.573 399.814 L 326.953 399.609 332.422 396.937 C 339.577 393.441,345.785 387.234,349.281 380.078 L 351.953 374.609 352.158 245.898 L 352.362 117.187 312.314 117.163 C 259.404 117.132,256.350 116.632,246.031 106.313 C 235.712 95.994,235.212 92.939,235.180 40.039 L 235.156 0.000 155.273 0.028 C 78.428 0.055,75.232 0.114,71.209 1.561 M258.594 46.004 C 258.594 100.017,252.447 93.905,306.448 93.590 L 346.099 93.359 302.347 49.612 L 258.594 5.865 258.594 46.004 M275.511 166.583 C 276.866 167.324,278.799 169.258,279.807 170.879 L 281.641 173.828 281.641 246.875 C 281.641 329.062,282.094 322.878,275.781 326.812 L 273.047 328.516 200.000 328.516 C 117.813 328.516,123.997 328.969,120.063 322.656 L 118.359 319.922 118.359 247.266 C 118.359 163.309,117.832 167.955,127.629 165.578 C 133.357 164.188,272.867 165.136,275.511 166.583 M141.406 200.000 L 141.406 211.719 164.844 211.719 L 188.281 211.719 188.281 200.000 L 188.281 188.281 164.844 188.281 L 141.406 188.281 141.406 200.000 M211.719 200.000 L 211.719 211.719 235.156 211.719 L 258.594 211.719 258.594 200.000 L 258.594 188.281 235.156 188.281 L 211.719 188.281 211.719 200.000 M141.406 246.875 L 141.406 258.594 164.844 258.594 L 188.281 258.594 188.281 246.875 L 188.281 235.156 164.844 235.156 L 141.406 235.156 141.406 246.875 M211.719 246.875 L 211.719 258.594 235.156 258.594 L 258.594 258.594 258.594 246.875 L 258.594 235.156 235.156 235.156 L 211.719 235.156 211.719 246.875 M141.406 293.750 L 141.406 305.469 164.844 305.469 L 188.281 305.469 188.281 293.750 L 188.281 282.031 164.844 282.031 L 141.406 282.031 141.406 293.750 M211.719 293.750 L 211.719 305.469 235.156 305.469 L 258.594 305.469 258.594 293.750 L 258.594 282.031 235.156 282.031 L 211.719 282.031 211.719 293.750 " stroke="none" fill={ color } fillRule="evenodd"></path>
                </g>
            </svg>
        </div>
    );
};

export const IconHamburger: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } stroke={ color } width={ size } height={ size } viewBox='0 0 24 24' fill='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
				<line x1='3' y1='12' x2='21' y2='12'></line>
				<line x1='3' y1='6' x2='21' y2='6'></line>
				<line x1='3' y1='18' x2='21' y2='18'></line>
			</svg>
		</div>
	);
};

export const IconClose: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } stroke={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
				<line x1='18' y1='6' x2='6' y2='18'></line>
				<line x1='6' y1='6' x2='18' y2='18'></line>
			</svg>
		</div>
	);
};

export const IconDashboard: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6.4 6.4'>
				<g transform='translate(0,-2.1166667)'>
					<path fill={ color } d='M 0.79278098,2.1166666 C 0.35758461,2.1166666 -2.5000002e-8,2.4742513 -2.5000002e-8,2.9094476 V 4.2319552 C -2.5000002e-8,4.6671515 0.35758461,5.0273202 0.79278098,5.0273202 H 2.1173558 c 0.4351963,0 0.792781,-0.3601687 0.792781,-0.795365 V 2.9094476 c 0,-0.4351963 -0.3575847,-0.792781 -0.792781,-0.792781 z m 3.43986342,0 c -0.4351965,0 -0.7927811,0.3575847 -0.7927811,0.792781 v 1.3225076 c 0,0.4351963 0.3575846,0.795365 0.7927811,0.795365 H 5.557219 c 0.4351965,0 0.7927811,-0.3601687 0.7927811,-0.795365 V 2.9094476 c 0,-0.4351963 -0.3575846,-0.792781 -0.7927811,-0.792781 z M 0.79278098,2.6458763 H 2.1173558 c 0.151168,0 0.2635712,0.1124032 0.2635712,0.2635713 v 1.3225076 c 0,0.151168 -0.1124032,0.2656385 -0.2635712,0.2656385 H 0.79278098 c -0.15116802,0 -0.26357127,-0.1144705 -0.26357127,-0.2656385 V 2.9094476 c 0,-0.1511681 0.11240325,-0.2635713 0.26357127,-0.2635713 z m 3.43986342,0 H 5.557219 c 0.151168,0 0.2635714,0.1124032 0.2635714,0.2635713 v 1.3225076 c 0,0.151168 -0.1124034,0.2656385 -0.2635714,0.2656385 H 4.2326444 c -0.151168,0 -0.2635713,-0.1144705 -0.2635713,-0.2656385 V 2.9094476 c 0,-0.1511681 0.1124033,-0.2635713 0.2635713,-0.2635713 z M 0.79278098,5.55653 C 0.35758461,5.55653 -2.5000002e-8,5.9141146 -2.5000002e-8,6.349311 V 7.6738857 C -2.5000002e-8,8.1090822 0.35758461,8.4666669 0.79278098,8.4666669 H 2.1173558 c 0.4351963,0 0.792781,-0.3575847 0.792781,-0.7927812 V 6.349311 c 0,-0.4351964 -0.3575847,-0.792781 -0.792781,-0.792781 z m 3.43986342,0 c -0.4351965,0 -0.7927811,0.3575846 -0.7927811,0.792781 v 1.3245747 c 0,0.4351965 0.3575846,0.7927812 0.7927811,0.7927812 H 5.557219 c 0.4351965,0 0.7927811,-0.3575847 0.7927811,-0.7927812 V 6.349311 C 6.3500001,5.9141146 5.9924155,5.55653 5.557219,5.55653 Z M 0.79278098,6.0857397 H 2.1173558 c 0.151168,0 0.2635712,0.1124033 0.2635712,0.2635713 v 1.3245747 c 0,0.151168 -0.1124032,0.2635714 -0.2635712,0.2635714 H 0.79278098 c -0.15116802,0 -0.26357127,-0.1124034 -0.26357127,-0.2635714 V 6.349311 c 0,-0.151168 0.11240325,-0.2635713 0.26357127,-0.2635713 z m 3.43986342,0 H 5.557219 c 0.151168,0 0.2635714,0.1124033 0.2635714,0.2635713 v 1.3245747 c 0,0.151168 -0.1124034,0.2635714 -0.2635714,0.2635714 H 4.2326444 c -0.151168,0 -0.2635713,-0.1124034 -0.2635713,-0.2635714 V 6.349311 c 0,-0.151168 0.1124033,-0.2635713 0.2635713,-0.2635713 z' />
				</g>
			</svg>
		</div>
	);
};

export const IconUser: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill='none' d='M0 0h24v24H0z' />
				<path d='M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' />
			</svg>
		</div>
	);
};

export const IconTimeline: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
				<g id='web-app' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
					<g id='timeline' fill={ color }>
						<path d='M9.17070571,17 C9.58254212,15.8348076 10.6937812,15 12,15 C13.3062188,15 14.4174579,15.8348076 14.8292943,17 L20,17 L21,18 L20,19 L14.8292943,19 C14.4174579,20.1651924 13.3062188,21 12,21 C10.6937812,21 9.58254212,20.1651924 9.17070571,19 L3,19 L4,18 L3,17 L9.17070571,17 Z M12,19 C12.5522847,19 13,18.5522847 13,18 C13,17.4477153 12.5522847,17 12,17 C11.4477153,17 11,17.4477153 11,18 C11,18.5522847 11.4477153,19 12,19 Z M14,12 L12,14 L10,12 L7,12 C5.8954305,12 5,11.1045695 5,10 L5,5 C5,3.8954305 5.8954305,3 7,3 L17,3 C18.1045695,3 19,3.8954305 19,5 L19,10 C19,11.1045695 18.1045695,12 17,12 L14,12 Z M7,5 L7,10 L11,10 L12,11 L13,10 L17,10 L17,5 L7,5 Z' id='Shape' />
					</g>
				</g>
			</svg>
		</div>
	);
};

export const IconAnalytics: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill={ color } d='M16 16C17.6569 16 19 17.3431 19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19C13 17.3431 14.3431 16 16 16ZM6 12C8.20914 12 10 13.7909 10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 13.7909 3.79086 12 6 12ZM16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18ZM6 14C4.89543 14 4 14.8954 4 16C4 17.1046 4.89543 18 6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14ZM14.5 2C17.5376 2 20 4.46243 20 7.5C20 10.5376 17.5376 13 14.5 13C11.4624 13 9 10.5376 9 7.5C9 4.46243 11.4624 2 14.5 2ZM14.5 4C12.567 4 11 5.567 11 7.5C11 9.433 12.567 11 14.5 11C16.433 11 18 9.433 18 7.5C18 5.567 16.433 4 14.5 4Z' />
			</svg>
		</div>
	);
};

export const IconAt: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
				<path fill={ color } strokeWidth='0' d='M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z' />
			</svg>
		</div>
	);
};

export const IconOrigin: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z' />
			</svg>
		</div>
	);
};

export const IconDestination: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z' />
			</svg>
		</div>
	);
};

export const IconCalendar: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } stroke={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
				<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
			</svg>
		</div>
	);
};

export const IconDone: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill='none' d='M0 0h24v24H0z' />
				<path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z' />
			</svg>
		</div>
	);
};

export const IconDoubleDone: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill={ color } d='M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z' />
			</svg>
		</div>
	);
};

export const IconCircleDone: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke={ color } strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
				<path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
				<polyline points='22 4 12 14.01 9 11.01' />
			</svg>
		</div>
	);
};

export const IconEmail: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill='none' d='M0 0h24v24H0z' />
				<path d='M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8H17v5.5a1.5 1.5 0 0 0 3 0V12zm-8-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' />
			</svg>
		</div>
	);
};

export const IconPassword: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill='none' d='M0 0h24v24H0z' />
				<path d='M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z' />
			</svg>
		</div>
	);
};

export const IconClear: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill='none' d='M0 0h24v24H0z' />
				<path d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z' />
			</svg>
		</div>
	);
};

export const IconEyeClosed: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill='none' d='M0 0h24v24H0z' />
				<path d='M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z' />
			</svg>
		</div>
	);
};

export const IconEyeOpen: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill='none' d='M0 0h24v24H0z' />
				<path d='M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
			</svg>
		</div>
	);
};

export const IconTwoStars: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z' />
			</svg>
		</div>
	);
};

export const IconThreeStars: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325 10.6673 9.33325ZM11.4173 11.9999 9.18905 10.8115 8.00065 8.58325 6.81224 10.8115 4.58398 11.9999 6.81224 13.1883 8.00065 15.4166 9.18905 13.1883 11.4173 11.9999ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z' />
			</svg>
		</div>
	);
};

export const IconSmileStar: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M11.9996 0.5L16.2256 6.68342L23.4123 8.7918L18.8374 14.7217L19.053 22.2082L11.9996 19.6897L4.94617 22.2082L5.16179 14.7217L0.586914 8.7918L7.7736 6.68342L11.9996 0.5ZM11.9996 4.044L9.02186 8.40151L3.95659 9.887L7.18152 14.0655L7.02859 19.34L11.9996 17.566L16.9696 19.34L16.8177 14.0655L20.0416 9.887L14.9773 8.40151L11.9996 4.044ZM9.99959 12C9.99959 13.1046 10.895 14 11.9996 14C13.1042 14 13.9996 13.1046 13.9996 12H15.9996C15.9996 14.2091 14.2087 16 11.9996 16C9.79045 16 7.99959 14.2091 7.99959 12H9.99959Z' />
			</svg>
		</div>
	);
};

export const IconVerify: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z' />
			</svg>
		</div>
	);
};

export const IconVerifyEmpty: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M10.0073 2.10365C8.60568 1.64993 7.08206 2.28104 6.41181 3.59294L5.60603 5.17011C5.51029 5.35751 5.35787 5.50992 5.17048 5.60566L3.5933 6.41144C2.2814 7.08169 1.6503 8.60532 2.10401 10.0069L2.64947 11.6919C2.71428 11.8921 2.71428 12.1077 2.64947 12.3079L2.10401 13.9929C1.6503 15.3945 2.28141 16.9181 3.5933 17.5883L5.17048 18.3941C5.35787 18.4899 5.51029 18.6423 5.60603 18.8297L6.41181 20.4068C7.08206 21.7187 8.60569 22.3498 10.0073 21.8961L11.6923 21.3507C11.8925 21.2859 12.108 21.2859 12.3082 21.3507L13.9932 21.8961C15.3948 22.3498 16.9185 21.7187 17.5887 20.4068L18.3945 18.8297C18.4902 18.6423 18.6426 18.4899 18.83 18.3941L20.4072 17.5883C21.7191 16.9181 22.3502 15.3945 21.8965 13.9929L21.351 12.3079C21.2862 12.1077 21.2862 11.8921 21.351 11.6919L21.8965 10.0069C22.3502 8.60531 21.7191 7.08169 20.4072 6.41144L18.83 5.60566C18.6426 5.50992 18.4902 5.3575 18.3945 5.17011L17.5887 3.59294C16.9185 2.28104 15.3948 1.64993 13.9932 2.10365L12.3082 2.6491C12.108 2.71391 11.8925 2.71391 11.6923 2.6491L10.0073 2.10365ZM8.19283 4.50286C8.41624 4.06556 8.92412 3.8552 9.39132 4.00643L11.0763 4.55189C11.6769 4.74632 12.3236 4.74632 12.9242 4.55189L14.6092 4.00643C15.0764 3.8552 15.5843 4.06556 15.8077 4.50286L16.6135 6.08004C16.9007 6.64222 17.3579 7.09946 17.9201 7.38668L19.4973 8.19246C19.9346 8.41588 20.145 8.92375 19.9937 9.39095L19.4483 11.076C19.2538 11.6766 19.2538 12.3232 19.4483 12.9238L19.9937 14.6088C20.145 15.076 19.9346 15.5839 19.4973 15.8073L17.9201 16.6131C17.3579 16.9003 16.9007 17.3576 16.6135 17.9197L15.8077 19.4969C15.5843 19.9342 15.0764 20.1446 14.6092 19.9933L12.9242 19.4479C12.3236 19.2535 11.6769 19.2535 11.0763 19.4479L9.39132 19.9933C8.92412 20.1446 8.41624 19.9342 8.19283 19.4969L7.38705 17.9197C7.09983 17.3576 6.64258 16.9003 6.08041 16.6131L4.50323 15.8073C4.06593 15.5839 3.85556 15.076 4.0068 14.6088L4.55226 12.9238C4.74668 12.3232 4.74668 11.6766 4.55226 11.076L4.0068 9.39095C3.85556 8.92375 4.06593 8.41588 4.50323 8.19246L6.0804 7.38668C6.64258 7.09946 7.09983 6.64222 7.38705 6.08004L8.19283 4.50286ZM6.75984 11.7573L11.0025 15.9999L18.0736 8.92885L16.6594 7.51464L11.0025 13.1715L8.17406 10.343L6.75984 11.7573Z' />
			</svg>
		</div>
	);
};

export const IconArrowDown: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z' />
			</svg>
		</div>
	);
};

export const IconInbox: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M4.02381 3.78307C4.12549 3.32553 4.5313 3 5 3H19C19.4687 3 19.8745 3.32553 19.9762 3.78307L21.9762 12.7831C21.992 12.8543 22 12.927 22 13V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13C2 12.927 2.00799 12.8543 2.02381 12.7831L4.02381 3.78307ZM5.80217 5L4.24662 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H19.7534L18.1978 5H5.80217ZM16.584 14C15.8124 15.7659 14.0503 17 12 17C9.94968 17 8.1876 15.7659 7.41604 14H4V19H20V14H16.584Z' />
			</svg>
		</div>
	);
};

export const IconAdd: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z' />
			</svg>
		</div>
	);
};

export const IconSubtract: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M5 11V13H19V11H5Z' />
			</svg>
		</div>
	);
};

export const IconDownload: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M13 13V18.585L14.8284 16.7574L16.2426 18.1716L12 22.4142L7.75736 18.1716L9.17157 16.7574L11 18.585V13H13ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z' />
			</svg>
		</div>
	);
};

export const IconUpload: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z' />
			</svg>
		</div>
	);
};

export const IconDonut: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M10.9999 2.04938L11 5.07088C7.6077 5.55612 5 8.47352 5 12C5 15.866 8.13401 19 12 19C13.5723 19 15.0236 18.4816 16.1922 17.6064L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L17.6064 16.1922C18.2926 15.2759 18.7595 14.1859 18.9291 13L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L18.9291 10.9998C18.4905 7.93452 16.0661 5.50992 13.001 5.07103L13.0011 2.04948Z' />
			</svg>
		</div>
	);
};

export const IconGlobe: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill={ color } width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z' />
			</svg>
		</div>
	);
};

export const IconSidebar: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill='none' width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path fill={ color } fillRule='evenodd' clipRule='evenodd' d='M6 4C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17V7C21 5.34315 19.6569 4 18 4H6ZM5 7C5 6.44772 5.44772 6 6 6H9V18H6C5.44772 18 5 17.5523 5 17V7ZM11 18H18C18.5523 18 19 17.5523 19 17V7C19 6.44772 18.5523 6 18 6H11V18Z' />
			</svg>
		</div>
	);
};

export const IconSidebarDots: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } fill='none' width={ size } height={ size } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
				<g>
					<path fill={ color } d='M36.357,86.817l0.007,0.001l0.007-0.001h43.145C88.069,86.814,94.998,79.886,95,71.332V28.666 c-0.002-8.555-6.932-15.484-15.485-15.485h-59.03C11.931,13.183,5.002,20.112,5,28.666v42.666   c0.002,8.553,6.93,15.484,15.485,15.485H36.357z M86.819,28.666v42.666c-0.007,4.032-3.272,7.296-7.304,7.304h-39.06V21.362h39.06   C83.548,21.37,86.811,24.633,86.819,28.666z M13.181,71.332V28.666c0.007-4.034,3.271-7.296,7.304-7.304h11.788v57.274H20.485   C16.453,78.629,13.189,75.365,13.181,71.332z' />
					<path fill={ color } d='M21.638,34.997h2.236c2.259,0,4.091-1.832,4.091-4.091c0-2.26-1.832-4.091-4.091-4.091h-2.236 c-2.26,0-4.091,1.831-4.091,4.091C17.547,33.165,19.378,34.997,21.638,34.997z' />
					<path fill={ color } d='M21.638,47.867h2.236c2.259,0,4.091-1.832,4.091-4.091c0-2.26-1.832-4.091-4.091-4.091h-2.236 c-2.26,0-4.091,1.831-4.091,4.091C17.547,46.034,19.378,47.867,21.638,47.867z' />
					<path fill={ color } d='M23.874,60.736c2.259,0,4.091-1.832,4.091-4.091c0-2.26-1.832-4.091-4.091-4.091h-2.236 c-2.26,0-4.091,1.831-4.091,4.091c0,2.259,1.831,4.091,4.091,4.091H23.874z' />
				</g>
			</svg>
		</div>
	);
};

export const IconObjectScan: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } xmlns='http://www.w3.org/2000/svg' width={ size } height={ size } viewBox='0 0 24 24' fill='none' stroke={ color } strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M4 8v-2a2 2 0 0 1 2 -2h2' />
				<path d='M4 16v2a2 2 0 0 0 2 2h2' />
				<path d='M16 4h2a2 2 0 0 1 2 2v2' />
				<path d='M16 20h2a2 2 0 0 0 2 -2v-2' />
				<path d='M8 8m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z' />
			</svg>
		</div>
	);
};

export const IconFileExport: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } xmlns='http://www.w3.org/2000/svg' width={ size } height={ size } viewBox='0 0 24 24' fill='none' stroke={ color } strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3" />
			</svg>
		</div>
	);
};


export const DuoIconSearch: React.FC<IDuoIconProps> = ({
	primaryColor = defaultDuoIconPrimaryColor,
	secondaryColor = defaultDuoIconSecondaryColor,
	size = defaultDuoIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<g clipPath='url(#clip0_4115_32727)'>
					<path stroke={ primaryColor } d='M33.5 28.4736L36.959 31.9326C38.347 33.3206 38.347 35.571 36.9591 36.959C35.5711 38.347 33.3207 38.347 31.9327 36.959L28.4736 33.5M2 17.3C2 8.85004 8.85004 2 17.3 2C25.75 2 32.6 8.85004 32.6 17.3C32.6 25.75 25.75 32.6 17.3 32.6C8.85004 32.6 2 25.75 2 17.3Z' strokeWidth='2.79574' strokeLinecap='round' />
					<path stroke={ secondaryColor } d='M33.5 28.4736L36.959 31.9326C38.347 33.3206 38.347 35.571 36.9591 36.959C35.5711 38.347 33.3207 38.347 31.9327 36.959L28.4736 33.5' strokeWidth='2.79574' strokeLinecap='round' />
				</g>
				<defs>
					<clipPath id='clip0_4115_32727'>
						<rect width='40' height='40' fill='white'/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

export const DuoIconPie: React.FC<IDuoIconProps> = ({
	primaryColor = defaultDuoIconPrimaryColor,
	secondaryColor = defaultDuoIconSecondaryColor,
	size = defaultDuoIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path stroke={ primaryColor } d='M15 7.03835C8.32005 8.55412 3.33334 14.528 3.33334 21.6667C3.33334 29.9509 10.0491 36.6667 18.3333 36.6667C25.472 36.6667 31.4459 31.68 32.9617 25M23.3121 3.6624C29.8597 4.98258 35.0174 10.1403 36.3376 16.6879C36.7015 18.4926 35.1743 20 33.3333 20H23.3333C21.4924 20 20 18.5076 20 16.6666V6.66665C20 4.8257 21.5074 3.29854 23.3121 3.6624Z' strokeWidth='3' strokeLinecap='round' />
				<path stroke={ secondaryColor } d='M36.3376 16.6879C35.0174 10.1403 29.8597 4.98258 23.3121 3.6624C21.5074 3.29854 20 4.8257 20 6.66665V16.6666C20 18.5076 21.4924 20 23.3334 20H33.3334C35.1743 20 36.7015 18.4926 36.3376 16.6879Z' strokeWidth='3' strokeLinecap='round' />
			</svg>
		</div>
	);
};

export const DuoIconDocument: React.FC<IDuoIconProps> = ({
	primaryColor = defaultDuoIconPrimaryColor,
	secondaryColor = defaultDuoIconSecondaryColor,
	size = defaultDuoIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path stroke={ primaryColor } d='M33.3333 36.6668H8.33331C5.57189 36.6668 3.33331 34.4283 3.33331 31.6668V8.3335C3.33331 5.57207 5.57189 3.3335 8.33331 3.3335H25C27.7614 3.3335 30 5.57207 30 8.3335V13.3335M33.3333 36.6668C31.4924 36.6668 30 35.1744 30 33.3335V13.3335M33.3333 36.6668C35.1743 36.6668 36.6666 35.1744 36.6666 33.3335V16.6668C36.6666 14.8259 35.1743 13.3335 33.3333 13.3335H30M9.99998 11.6668H23.3333M9.99998 20.0002H23.3333M9.99998 28.3335H16.6666' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
				<path stroke={ secondaryColor } d='M9.97945 11.667H23.3128M9.97945 20.0003H23.3128M9.97945 28.3337H16.6461' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		</div>
	);
};

export const DuoIconLetter: React.FC<IDuoIconProps> = ({
	primaryColor = defaultDuoIconPrimaryColor,
	secondaryColor = defaultDuoIconSecondaryColor,
	size = defaultDuoIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path stroke={ primaryColor } d='M10 13.3333L16.302 17.5347C18.5413 19.0276 21.4587 19.0276 23.698 17.5347L30 13.3333M10 35H30C33.6819 35 36.6667 32.0152 36.6667 28.3333V11.6667C36.6667 7.98477 33.6819 5 30 5H10C6.31811 5 3.33334 7.98477 3.33334 11.6667V28.3333C3.33334 32.0152 6.31811 35 10 35Z' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
				<path stroke={ secondaryColor } d='M10 13.3335L16.302 17.5348C18.5413 19.0277 21.4587 19.0277 23.698 17.5348L30 13.3335' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		</div>
	);
};

export const DuoIconFilter: React.FC<IDuoIconProps> = ({
	primaryColor = defaultDuoIconPrimaryColor,
	secondaryColor = defaultDuoIconSecondaryColor,
	size = defaultDuoIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path stroke={ primaryColor } d='M30.5985 3.89844H8.94834C6.18737 3.89844 4.54055 6.93942 6.07206 9.20973L15.1554 21.0873C15.9125 22.2097 16.3166 23.5284 16.3166 24.8773V33.9374C16.3166 35.4592 18.1783 36.2213 19.2672 35.1453L22.724 31.729C23.0482 31.4086 23.2303 30.9742 23.2303 30.5212V24.8773C23.2303 23.5284 23.6343 22.2097 24.3914 21.0873L33.4748 9.20973C35.0063 6.93942 33.3595 3.89844 30.5985 3.89844Z' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
				<path stroke={ secondaryColor } d='M23.2303 24.8774V30.5213C23.2303 30.9743 23.0482 31.4088 22.724 31.7291L19.2672 35.1454C18.1783 36.2215 16.3166 35.4593 16.3166 33.9375V24.8774' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		</div>
	);
};

export const DuoIconCalendar: React.FC<IDuoIconProps> = ({
	primaryColor = defaultDuoIconPrimaryColor,
	secondaryColor = defaultDuoIconSecondaryColor,
	size = defaultDuoIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path stroke={ primaryColor } d='M13.3333 3.3335V8.3335' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
				<path stroke={ primaryColor } d='M26.6667 3.3335V8.3335' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
				<path stroke={ primaryColor } d='M5 9.8335C5 7.62436 6.79086 5.8335 9 5.8335H31C33.2091 5.8335 35 7.62436 35 9.8335V32.6668C35 34.876 33.2091 36.6668 31 36.6668H9C6.79086 36.6668 5 34.876 5 32.6668V9.8335Z' strokeWidth='3' />
				<path stroke={ secondaryColor } d='M15 24.9998L18.4195 27.7354C18.8374 28.0697 19.4444 28.0158 19.7968 27.6131L25 21.6665' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
				<path stroke={ primaryColor } d='M5 15H35' strokeWidth='3' strokeLinecap='round' />
			</svg>
		</div>
	);
};

export const IconGift: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 				<path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7ZM12 7L12 22M2 14H22M2 10.2L2 18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22L18.8 22C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V10.2C22 9.0799 22 8.51984 21.782 8.09202C21.5903 7.7157 21.2843 7.40974 20.908 7.21799C20.4802 7 19.9201 7 18.8 7L5.2 7C4.0799 7 3.51984 7 3.09202 7.21799C2.7157 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2Z" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 			</svg>
		</div>
	);
};

		export const IconRocket: React.FC<IIconProps> = ({
			color = defaultIconColor,
			size = defaultIconSize,
		}) => {
			return (
				<div>
					<svg className={ styles.svg } width={ size } height={ size } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						 <path d="M12 14.9998L9 11.9998M12 14.9998C13.3968 14.4685 14.7369 13.7985 16 12.9998M12 14.9998V19.9998C12 19.9998 15.03 19.4498 16 17.9998C17.08 16.3798 16 12.9998 16 12.9998M9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998M9 11.9998H4C4 11.9998 4.55 8.96976 6 7.99976C7.62 6.91976 11 7.99976 11 7.99976M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0044 5.97223 15.9878C5.43516 15.9712 4.91088 16.1535 4.5 16.4998Z" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 					</svg>
				</div>
			);
		};

export const IconBriefcase: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 				<path d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 			</svg>
		</div>
	);
};

export const IconShield: React.FC<IIconProps> = ({
	color = defaultIconColor,
	size = defaultIconSize,
}) => {
	return (
		<div>
			<svg className={ styles.svg } width={ size } height={ size } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 				<path d="M9 11.4999L11 13.4999L15.5 8.99987M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 			</svg>
		</div>
	);
};

export default IconCircles;
