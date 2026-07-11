'use client';
import styles from './scroll-text.module.css';
import React, { useRef, useEffect, useState } from 'react';
import { Title } from '@/components/ui/title';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IScrollTextProps {};

const ScrollText: React.FC<IScrollTextProps> = ({}) => {
	const { i18n } = useLocale();
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();
	
	const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
	const [firstQuoteActive, setFirstQuoteActive] = useState<boolean>(false);
	const [lastQuoteActive, setLastQuoteActive] = useState<boolean>(false);
	const [h3Active, setH3Active] = useState<boolean>(false);
	const [h4Active, setH4Active] = useState<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);
	
	const h1text = i18n('components.scroll-text.quote');
	const h3text = i18n('components.scroll-text.author');
	const h4text = i18n('components.scroll-text.position');
	const words = h1text.split(' ');
	const totalAnimationSteps = words.length + 5;

	useEffect(() => {
		const calculateWordProgress = () => {
			if (!wrapperRef.current) return;

			const wrapperRect = wrapperRef.current.getBoundingClientRect();
			const wrapperHeight = wrapperRef.current.offsetHeight;
			const viewportHeight = window.innerHeight;
			
			let scrolledPixels = 0;
			
			if (wrapperRect.top <= 0 && wrapperRect.bottom >= viewportHeight) {
				scrolledPixels = Math.abs(wrapperRect.top);
			}
			else if (wrapperRect.bottom < viewportHeight) {
				scrolledPixels = wrapperHeight - viewportHeight;
			}
			
			const totalScrollableDistance = wrapperHeight - viewportHeight;
			const pixelsPerStep = totalScrollableDistance / totalAnimationSteps;
			const currentStep = Math.floor(scrolledPixels / pixelsPerStep);
			
			const newFirstQuoteActive = currentStep >= 1;
			setFirstQuoteActive(newFirstQuoteActive);
			
			const newActiveWordIndex = Math.max(0, Math.min(currentStep - 2, words.length));
			setActiveWordIndex(newActiveWordIndex);
			
			const newLastQuoteActive = currentStep >= words.length + 2;
			setLastQuoteActive(newLastQuoteActive);
			
			const h3Step = words.length + 3;
			const newH3Active = currentStep >= h3Step;
			setH3Active(newH3Active);
			
			const h4Step = words.length + 4;
			const newH4Active = currentStep >= h4Step;
			setH4Active(newH4Active);
		};

		if (wrapperRef.current) {
			observerRef.current = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						window.addEventListener('scroll', calculateWordProgress);
						calculateWordProgress();
					}
					else {
						window.removeEventListener('scroll', calculateWordProgress);
					}
				});
			}, { rootMargin: '0px 0px 0px 0px', threshold: [0] });

			observerRef.current.observe(wrapperRef.current);
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
			window.removeEventListener('scroll', calculateWordProgress);
		};
	}, [totalAnimationSteps, words.length]);
	
	return (
		<div className={ styles.scrollTextOuterWrapper } ref={ wrapperRef }>
			<div 
				className={ `${ styles.scrollTextWrapper } ${ figtreeFont.className }` }
			>
				<div className={ styles.scrollTextContainer }>
					<div className={ styles.scrollTextSection }></div>
					<div className={ styles.scrollTextSection }>
						<div className={ styles.scrollTextRow }>
							<Title render={ () => (
								<h2>
									<span className={ `${ styles.scrollTextQuote } ${ firstQuoteActive ? styles.scrollTextQuoteActive : '' }` }>{ `"` }</span>
									{' '}
									{
										words.map((word: string, index: number) => (
											<span
												key={ index }
												className={ `${ styles.scrollTextWord } ${ index < activeWordIndex ? styles.scrollTextWordActive : '' }` }
											>
												{ word }{ index < words.length - 1 ? ' ' : '' }
											</span>
										))
									}
									{' '}
									<span className={ `${ styles.scrollTextQuote } ${ lastQuoteActive ? styles.scrollTextQuoteActive : '' }` }>{ `"` }</span>
								</h2>
							) } />
							<div>
								<h3 className={ `${ styles.scrollTextWord } ${ h3Active ? styles.scrollTextWordActive : '' }` }>{ h3text }</h3>
								<h4 className={ `${ styles.scrollTextWord } ${ h4Active ? styles.scrollTextWordActive : '' }` }>{ h4text }</h4>
							</div>
						</div>
					</div>
					<div className={ styles.scrollTextSection }></div>
				</div>
			</div>
		</div>
	);
};

export default ScrollText;
