/**
 * Logo Component
 * A custom logo component that can be used on both light and dark themes.

 * @param { string } contrastColor - Whether the logo should render light or dark themed.
 * @param { () => void } onClick - Optional onClick handler for the logo click event.
 */

import React, { useEffect, useState } from 'react';
import styles from './logo.module.css';
import { useFont } from '@/utils/hooks/useFont';

export interface ILogoProps {
	contrastColor?: string;
	onClick?: () => void;
}

export const Logo: React.FC<ILogoProps> = ({
	contrastColor = '#000000',
	onClick = () => { return; },
}) => {
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();
	const appliedContrastColor = (contrastColor === '#FFFFFF' || contrastColor === '#000000') ? contrastColor : '#000000';

	const [visiblePaths, setVisiblePaths] = useState(0);

	useEffect(() => {
		for (let i = 1; i <= 11; i++) {
			setTimeout(() => {
				setVisiblePaths(i);
			}, i * 66);
		}
	}, []);

	return (
		<div
			className={ `${ styles.logoWrapper } ${ figtreeFont.className }` }
			onClick={() => onClick()}
			data-testid="logo-wrapper"
		>
			<div className={styles.logo} data-testid="logo">
			<div
				className={styles.logoText}
				style={{ color: appliedContrastColor }}
				data-testid="logo-text"
			>
				<div>
					{
						'telluric'.split('').map((char, index) => (
							<span
								key={ index }
								style={{
									opacity: visiblePaths >= index + 1 ? 1 : 0,
									transition: 'all ease-in-out .2s',
								}}
							>
								{ char }
							</span>
						))
					}
					<span style={{ opacity: visiblePaths >= 9 ? 1 : 0, transition: 'all ease-in-out .2s', color: 'royalblue' }}>:</span>
					<span style={{ opacity: visiblePaths >= 10 ? 1 : 0, transition: 'all ease-in-out .2s', color: 'royalblue' }}>/</span>
					<span style={{ opacity: visiblePaths >= 11 ? 1 : 0, transition: 'all ease-in-out .2s', color: 'royalblue' }}>/</span>
				</div>
			</div>
			</div>
		</div>
    );
};

export default Logo;
