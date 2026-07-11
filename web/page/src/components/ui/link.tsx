/**
 * Link Component
 * A link component that supports various types, colors, sizes, styles, states and icons.

 * @param { string } href - The web url/address/link anchor.
 * @param { string } type - The type of the button (primary, secondary, tertiary) defaults to [primary].
 * @param { string } size - The size of the button (small, medium, big) defaults to [medium].
 * @param { string } text - The (call to action) text to be rendered inside the button.
 * @param { React.ReactNode } iconLeft - Displays a supplied icon to the left of the [text] defaults to [undefined].
 * @param { React.ReactNode } iconRight - Displays a supplied icon to the right of the [text] defaults to [undefined].
*/

import React from 'react';
import styles from './link.module.css';

export interface ILinkProps {
	href: string;
	type?: string;
	size?: string;
	text: string;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
};

export interface IIconProps {
	color?: string;
	size?: string;
};

export const Link: React.FC<ILinkProps> = ({
	href,
	type = 'primary',
	size = 'medium',
	text,
	iconLeft = undefined,
	iconRight = undefined,
}) => {
	const linkTypes = ['primary', 'secondary', 'tertiary'];
	const linkSizes = ['small', 'medium', 'big'];
	const linkType = linkTypes.includes(type) ? type : 'primary';
	const linkSize = linkSizes.includes(size) ? size : 'medium';
	const linkClass = `${ styles.link } ${ styles[linkType] } ${ styles[linkSize] }`;
	const iconColor = linkType === 'primary' ? 'var(--emerald-light)' : linkType === 'secondary' ? '#000000' : 'var(--midnight-light)';
	const iconSize = linkSize === 'big' ? '26px' : linkSize === 'medium' ? '22px' : '18px';

	return (
		<a
			href={ href }
			target='_blank'
			rel='noopener noreferrer'
			className={ linkClass }
			data-testid='link'
		>
			{ iconLeft && React.cloneElement<IIconProps>(iconLeft as React.ReactElement<IIconProps>, { color: iconColor, size: iconSize }) }
			{ text }
			{ iconRight && React.cloneElement<IIconProps>(iconRight as React.ReactElement<IIconProps>, { color: iconColor, size: iconSize }) }
		</a>
	);
};

export default Link;
