/**
 * Input Component
 * An input component that supports various types, colors, sizes, styles, and states.

 * @param { string } type - The type of the input (primary, secondary) defaults to [primary].
 * @param { string } size - The size of the input (small, medium, big) defaults to [medium].
 * @param { string } content - The type of the input's content (text, email, password) defaults to [text].
 * @param { string } value - The value of the input, defaults to [undefined].
 * @param { string } placeholder - The text to be rendered inside the input, when the value is undefined, defaults to [undefined].
 * @param { boolean } disabled - An input disabled state which changes the appearance to a 'faded/inactive' style and prevents focus and value change events from being fired -- defaults to [false].
 * @param { (value: string) => void } onChange - A function to be executed when onChange event is fired defaults to [undefined].
 * @param { string } name - The name of the input, defaults to [email].
 * @param { string } autoComplete - The autoComplete attribute for the input, defaults to [off].
 */

import React from 'react';
import styles from './input.module.css';

export interface IInputProps {
	type?: string;
	size?: string;
	content?: string;
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	onChange?: (value: string) => void;
	name?: string;
	autoComplete?: string;
};

export const Input: React.FC<IInputProps> = ({
		type = 'primary',
		size = 'medium',
		content = 'text',
		value = '',
		placeholder = '',
		disabled = false,
		onChange = (value: string) => { return; },
		name = 'email',
		autoComplete = 'off',
}: IInputProps) => {
		const inputTypes = ['primary', 'secondary'];
		const inputSizes = ['small', 'medium', 'big'];
		const inputType = inputTypes.includes(type) ? type : 'primary';
		const inputSize = inputSizes.includes(size) ? size : 'medium';
		const disabledInputClass = disabled ? 'disabledInput' : '';
		const inputClass = `${ styles.input } ${ styles[inputType] } ${ styles[inputSize] } ${ styles[disabledInputClass] }`;

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			if (!disabled) {
				onChange(event.target.value);
			}
		};

		return (
			<input
				className={ inputClass }
				onChange={ handleChange }
				disabled={ disabled }
				data-testid='input'
				type={ content }
				value={ value }
				placeholder={ placeholder }
				name={ name }
				autoComplete={ autoComplete }
			/>
		);
};

export default Input;
