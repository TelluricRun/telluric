'use client';
import styles from './incentive.module.css';
import React, { useEffect } from 'react';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

const Incentive = () => {
	const { getAppsWebUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { i18n } = useLocale();
	const { APPS_WEB_SIGNUP_URL } = getAppsWebUrls();
	const { getRobotoFont, getFigtreeFont } = useFont();
	const robotoFont = getRobotoFont();
	const figtreeFont = getFigtreeFont();

	useEffect(() => {
		const observer: IntersectionObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry, idx) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add(styles.isVisible);
					}, idx * 300);

					observer.unobserve(entry.target);
				}
			});
		});

		const fadeElements = document.querySelectorAll(`.${ styles.fadeIn }`);

		fadeElements.forEach(element => {
			observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<div className={ `${ robotoFont.className } ${ styles.incentiveContentWrapper }` }>
				<div className={ styles.incentiveContentContainer }>
					<div className={ styles.incentiveContentSection }>
						<div className={ `${ styles.incentiveContentSectionColumnTitle }` }>
							<div className={ figtreeFont.className }>
								<Title render={ () => <h2>{ i18n('components.incentive.title-primary') }</h2> } />
							</div>
							<Title render={ () => <h3>{ i18n('components.incentive.title-secondary') }</h3> } />
						</div>
						<Button
							size={ 'medium' }
							text={ i18n('components.incentive.button-primary') }
							onClick={ () => redirectTo(APPS_WEB_SIGNUP_URL) }
							onMouseOverAnimation={ false }
						/>
					</div>
					
					<div className={ styles.incentiveContentSection }>
						<div className={ styles.incentiveContentRow }>
							<div className={ `${ styles.incentiveContentRowItem } ${ styles.fadeIn }` }>
								<div className={ styles.incentiveContentRowItemIcon }>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill='#000000' width='42px' height='42px' focusable="false">
										<g>
											<path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z" />
										</g>
									</svg>
								</div>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-one.title') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-one.description') }</h4> } />
								</div>
							</div>
							<div className={ `${ styles.incentiveContentRowItem } ${ styles.fadeIn }` }>
								<div className={ styles.incentiveContentRowItemIcon }>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill='#000000' width='42px' height='42px' focusable="false">
										<g>
											<path d="M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z" />
										</g>
									</svg>
								</div>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-two.title') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-two.description') }</h4> } />
								</div>
							</div>
							<div className={ `${ styles.incentiveContentRowItem } ${ styles.fadeIn }` }>
								<div className={ styles.incentiveContentRowItemIcon }>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill='#000000' width='42px' height='42px' focusable="false">
										<g>
											<path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z" />
										</g>
									</svg>
								</div>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-three.title') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-three.description') }</h4> } />
								</div>
							</div>
							<div className={ `${ styles.incentiveContentRowItem } ${ styles.fadeIn }` }>
								<div className={ styles.incentiveContentRowItemIcon }>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill='#000000' width='42px' height='42px' focusable="false">
										<g>
											<path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z" />
										</g>
									</svg>
								</div>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-four.title') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-four.description') }</h4> } />
								</div>
							</div>
							<div className={ `${ styles.incentiveContentRowItem } ${ styles.fadeIn }` }>
								<div className={ styles.incentiveContentRowItemIcon }>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill='#000000' width='42px' height='42px' focusable="false">
										<g>
											<path d="M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z" />
										</g>
									</svg>
								</div>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-five.title') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-five.description') }</h4> } />
								</div>
							</div>
						</div>
					</div>

					<div className={ styles.incentiveContentSection }>
						<div className={ styles.incentiveContentRow }>
							<div className={ `${ styles.incentiveContentRowItem } ${ styles.fadeIn }` }>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-extra.title1') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-extra.description1') }</h4> } />
								</div>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-extra.title2') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-extra.description2') }</h4> } />
								</div>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-extra.title3') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-extra.description3') }</h4> } />
								</div>
								<div className={ styles.incentiveContentRowItemCount }>
									<Title render={ () => <h3>{ i18n('components.incentive.incentive-extra.title4') }</h3> } />
								</div>
								<div className={ styles.incentiveContentRowItemDescription }>
									<Title render={ () => <h4>{ i18n('components.incentive.incentive-extra.description4') }</h4> } />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Incentive;
