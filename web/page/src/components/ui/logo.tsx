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
					</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="42px"
							height="42px"
							fill="none"
							stroke="royalblue"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path style={{ opacity: visiblePaths >= 10 ? 1 : 0, transition: 'all ease-in-out .2s', color: 'royalblue' }} d="M15 6l-7 12" opacity="1" />
							<path style={{ opacity: visiblePaths >= 11 ? 1 : 0, transition: 'all ease-in-out .2s', color: 'royalblue' }} d="M20 6l-7 12" opacity="1" />
							<path style={{ opacity: visiblePaths >= 9 ? 1 : 0, transition: 'all ease-in-out .2s', color: 'royalblue' }} d="M5 14v.015" opacity="1" />
							<path style={{ opacity: visiblePaths >= 9 ? 1 : 0, transition: 'all ease-in-out .2s', color: 'royalblue' }} d="M5 10.015v.015" opacity="1" />
						</svg>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Logo;
