'use client';
import styles from './hero.module.css';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { IconArrowRight } from '@/components/ui/icons';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IHeroProps {
	scrollToExplore: () => void;
};

const Hero: React.FC<IHeroProps> = ({ scrollToExplore }: IHeroProps) => {
	const { getAppsWebUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { i18n } = useLocale();
	const { APPS_WEB_SIGNUP_URL } = getAppsWebUrls();
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();

	const [contentWidth, setContentWidth] = useState<number>(0);
	const [contentHeight, setContentHeight] = useState<number>(0);
	const [randomIndices, setRandomIndices] = useState<number[]>([]);

	const contentRef = useRef<HTMLDivElement | null>(null);
	const cursorRef = useRef<HTMLDivElement>(null);
	const lastX = useRef(0);
	const lastY = useRef(0);

	const squareSize = 35;
	const numberOfSquareRows: number = Math.round(contentHeight / squareSize);
	const numberOfSquaresOnRow: number = Math.round(contentWidth / squareSize);

	const generateRandomIndices = useCallback(() => {
		return Array.from({ length: numberOfSquareRows }, () =>
			Math.floor(Math.random() * numberOfSquaresOnRow)
		);
	}, [numberOfSquareRows, numberOfSquaresOnRow]);

	const handleMouseMove = useCallback((event: MouseEvent) => {
		lastX.current = event.clientX;
		lastY.current = event.clientY;

		requestAnimationFrame(() => {
			if (cursorRef.current) {
				cursorRef.current.style.marginLeft = `calc(${ lastX.current }px - 50px)`;
				cursorRef.current.style.marginTop = `calc(${ lastY.current }px - 50px)`;
			}
		});
	}, []);

	useEffect((): () => void => {
		const observer = new ResizeObserver(entries => {
			for (let entry of entries) {
				setContentWidth(entry.contentRect.width);
				setContentHeight(entry.contentRect.height);
			}
		});

		if (contentRef.current) {
			observer.observe(contentRef.current);
		}

		return (): void => observer.disconnect();
	}, []);

	useEffect((): void => {
		setRandomIndices(generateRandomIndices());
	}, [generateRandomIndices]);

	useEffect((): () => void => {
		const interval = setInterval(() => {
			setRandomIndices(generateRandomIndices());
		}, Math.floor(Math.random() * (15000 - 10000) + 10000));

		return (): void => clearInterval(interval);
	}, [generateRandomIndices]);

	useEffect((): () => void => {
		window.addEventListener('mousemove', handleMouseMove);
		return (): void => window.removeEventListener('mousemove', handleMouseMove);
	}, [handleMouseMove]);

	return (
		<>
			<div ref={ contentRef } className={ styles.heroContentWrapper }>
				<div
					ref={ cursorRef }
					className={ styles['hover-effect'] }
				/>
				{
					Array.from(Array(numberOfSquareRows).keys()).map((_, idx) => (
						<div className={ `${ styles['row'] } ${ styles.rowAppear }` } key={ idx }>
							{
								Array.from(Array(numberOfSquaresOnRow).keys()).map((_, index) => (
									<div
										className={ `${ styles['square'] } ${ styles.squareAppear }` }
										key={ index }
									>
										<div className={ `${ styles.squareFill } ${ randomIndices[idx] === index ? styles.squareFillInner : '' }` }></div>
									</div>
								))
							}
						</div>
					))
				}
				<div className={ styles.heroContentAbsolute }>
					<div className={ `${ styles.heroContentSection } ${ figtreeFont.className }` }>
						<div className={ styles.animatedText }>
						<Title render={ (): React.ReactNode => <h1>{ i18n('components.hero.title-primary') }</h1> }/>
							</div>
						<div className={ styles.animatedText }>
							<Title render={ (): React.ReactNode => <h2>{ i18n('components.hero.title-secondary') }</h2> }/>
						</div>
					</div>
					<div className={ styles.heroContentText }>
						<div className={ styles.heroContentTextSmall }>
							<Title render={ () => <h3>{ i18n('components.hero.description-primary') }</h3> }/>
						</div>
						<div className={ styles.heroContentButtons }>
							<Button
								size={ 'small' }
								text={ i18n('components.hero.button-primary') }
								onClick={ (): void => redirectTo(APPS_WEB_SIGNUP_URL) }
								iconRight={ <IconArrowRight/> }
								onMouseOverAnimation={ false }
							/>
							<Button
								size={ 'small' }
								type={ 'secondary' }
								text={ i18n('components.hero.button-secondary') }
								onClick={ (): void => redirectTo(APPS_WEB_SIGNUP_URL) }
								iconRight={ <IconArrowRight/> }
								onMouseOverAnimation={ false }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
