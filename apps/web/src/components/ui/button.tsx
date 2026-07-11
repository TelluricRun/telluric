/**
 * Button Component
 * A button component that supports various types, colors, sizes, styles, states and icons.

 * @param { string } type - The type of the button (primary, secondary, tertiary, success, failure) defaults to [primary].
 * @param { string } size - The size of the button (small, medium, big) defaults to [medium].
 * @param { string } text - The (call to action) text to be rendered inside the button.
 * @param { boolean } onMouseOverAnimation - Whether the button should animate @ onMouseOver event -- defaults to [true].
 * @param { boolean } loading - A button loading state replacing everything rendered (text and/or iconLeft/iconRight) with a loading supplied icon -- defaults to [false].
 * @param { boolean } disabled - A button disabled state which changes the appearance to a 'faded/inactive' style and prevents onClick events from being fired -- defaults to [false].
 * @param { React.ReactNode } iconLeft - Displays a supplied icon to the left of the [text] defaults to [undefined].
 * @param { React.ReactNode } iconRight - Displays a supplied icon to the right of the [text] defaults to [undefined].
 * @param { () => void } onClick - A function to be executed when onClick event is fired defaults to [undefined].
 */

import React from 'react';
import { IconSpinner } from '@/components/ui/icons';
import styles from './button.module.css';

export interface IButtonProps {
	type?: string;
	size?: string;
	text: string;
	onMouseOverAnimation?: boolean;
	loading?: boolean;
	disabled?: boolean;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	onClick?: () => void;
};

export interface IIconProps {
	color?: string;
	size?: string;
};

export const Button: React.FC<IButtonProps> = ({
		type = 'primary',
		size = 'medium',
		text,
		onMouseOverAnimation = true,
		loading = false,
		disabled = false,
		iconLeft = undefined,
		iconRight = undefined,
		onClick = () => { return; },
}: IButtonProps) => {
		const buttonTypes = ['primary', 'secondary', 'tertiary', 'success', 'failure'];
		const buttonSizes = ['small', 'medium', 'big'];
		const buttonType = buttonTypes.includes(type) ? type : 'primary';
		const buttonSize = buttonSizes.includes(size) ? size : 'medium';
		const buttonAnimation = (disabled || !onMouseOverAnimation) ? '' : 'animation';
		const disabledButtonClass = disabled ? 'disabledButton' : '';
		const buttonClass = `${ styles.button } ${ styles[buttonType] } ${ styles[buttonSize] } ${ styles[buttonAnimation] } ${ styles[disabledButtonClass] }`;
		const spinnerSize = buttonSize === 'big' ? 'calc(calc(66px / 3) * 2)' : buttonSize === 'medium' ? 'calc(calc(54px / 3) * 2)' : 'calc(calc(42px / 3) * 2)';
		const iconColor = disabled ? 'var(--cinder-dark)' : buttonType === 'primary' ? '#FFFFFF' : buttonType === 'secondary' ? '#FFFFFF' : '#000000';
		const iconSize = buttonSize === 'big' ? '30px' : buttonSize === 'medium' ? '24px' : '18px';

		const handleClick = () => {
			if (!disabled && !loading) {
				onClick();
			}
		};

		return (
			<button
				className={ buttonClass }
				onClick={ handleClick }
				disabled={ disabled || loading }
				data-testid='button'
			>
				{
					loading
						? <IconSpinner color={ iconColor } size={ spinnerSize } />
						: <>
							{ iconLeft && React.cloneElement<IIconProps>(iconLeft as React.ReactElement<IIconProps>, { color: iconColor, size: iconSize }) }
							{ text }
							{ iconRight && React.cloneElement<IIconProps>(iconRight as React.ReactElement<IIconProps>, { color: iconColor, size: iconSize }) }
						</>
				}
			</button>
		);
};

export default Button;
