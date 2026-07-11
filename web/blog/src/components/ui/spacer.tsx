/**
 * Spacer Component
 * A spacer component that supports a [position] prop to determine its position in the layout.

 * @param { string } position - The position of the spacer. Can be 'top' or 'bottom'. Defaults to 'bottom'.
*/

import styles from './spacer.module.css';
import React from 'react';

export interface ISpacerProps {
	position?: 'top' | 'bottom';
};

export const Spacer: React.FC<ISpacerProps> = ({ position = 'bottom' }) => {
	const spacerClass = `${ styles.spacerWrapper } ${ position === 'top' ? styles.topSpacer : styles.bottomSpacer }`;

	return (
		<>
			<div className={ spacerClass }></div>
		</>
	);
};

export default Spacer;
