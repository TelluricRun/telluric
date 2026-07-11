"use client";
import React, { Suspense } from 'react';
import Script from 'next/script';
import Gtag from '../components/gtag';
import CookieConsent from '../components/cookie-consent';
import { GoogleTagManager } from '@next/third-parties/google';
import { useState, useEffect } from 'react';
import '@/styles/globals.css';
import styles from './layout.module.css';
import { Dock } from '@/components/ui/dock';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
// import { AdaptiveMenu } from '@/components/adaptive-menu';
import { IconClose, IconHamburger, IconArrowRight } from '@/components/ui/icons';
import { ChevronToggle } from '@/components/ui/chevron-toggle';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/footer';
import FooterReveal from '@/components/footer-reveal';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';
import { useAuth } from '@/utils/hooks/useAuth';
import { useFont } from '@/utils/hooks/useFont';
import { useScroll } from '@/utils/hooks/useScroll';
import componentsData from '@/data/components.json';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XN8ERHVFC9';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	const { getInterFont } = useFont();
	const interFont = getInterFont();
	const { getPageUrls, getAppUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { LocaleContext, locale, locales, changeLocale, translate } = useLocale();
	const { isAuthenticated } = useAuth();
	const { PAGE_BASE_URL } = getPageUrls();
	const { APP_BASE_URL, APP_SIGNUP_URL, APP_SIGNIN_URL } = getAppUrls();
	const auth = isAuthenticated();
	const { ScrollContext, registerRef } = useScroll();

	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);


	const renderAppropriateButtons = () => {
		if (authenticated) {
			return (
				<Button
					size={ 'small' }
					text={ translate('components.dock.button-tertiary') }
					onClick={ (): void => redirectTo(APP_BASE_URL) }
					onMouseOverAnimation={ false }
				/>
			);
		}

		return (
			<>
				<Button
					size={ 'small' }
					type={ 'tertiary' }
					text={ translate('components.dock.button-secondary') }
					onClick={ (): void => redirectTo(APP_SIGNIN_URL) }
					onMouseOverAnimation={ false }
				/>
				<Button
					size={ 'small' }
					type={ 'primary' }
					text={ translate('components.dock.button-primary') }
					onClick={ (): void => redirectTo(APP_SIGNUP_URL) }
					onMouseOverAnimation={ false }
					iconRight={ <IconArrowRight /> }
				/>
			</>
		);
	};

	const renderAppropriateToggleIcon = () => {
		return sidebarVisible ? <IconClose size={ '24px' } color={ '#000000' } /> : <IconHamburger size={ '24px' } color={ '#000000' } />;
	};

	const toggleSidebar: () => void = (): void => {
		setSidebarVisible(previousSidebarState => !previousSidebarState);
	};

	useEffect((): void => {
		if (sidebarVisible) {
			document.body.style.overflow = 'hidden';
		}
		else {
			document.body.style.overflow = 'auto';
		}
	}, [sidebarVisible]);

	// Capture UTM params and referrer on first load and persist for the session.
	useEffect(() => {
		if (typeof window === 'undefined') return;
		try {
			const params = new URLSearchParams(window.location.search);
			const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid'];
			const utm: Record<string, string> = {};
			utmKeys.forEach((k) => {
				const v = params.get(k);
				if (v) utm[k] = v;
			});
			if (Object.keys(utm).length > 0) {
				sessionStorage.setItem('utm', JSON.stringify(utm));
			}
			if (document.referrer) {
				sessionStorage.setItem('referrer', document.referrer);
			}
		} catch (e) {
			// noop
		}
	}, []);

	// page view events are handled by a dedicated client component (`src/components/gtag.tsx`)

	useEffect((): () => void => {
		const handleEsc = (event: KeyboardEvent): void => {
			if (event.key === 'Escape') {
				setSidebarVisible(false);
			}
		};

		document.addEventListener('keydown', handleEsc);

		return (): void => document.removeEventListener('keydown', handleEsc);
	}, []);

	useEffect((): void => {
		setAuthenticated(auth);
	}, [auth]);

	const {
		['adaptive-menu']: adaptiveMenu,
	} = componentsData;

	return (
		<LocaleContext.Provider value={ translate }>
			<html lang='en'>
				<head>
					<title>{ translate('layouts.root.metadata.title') }</title>
					<meta name='description' content='Tropical helps you plan your travels, track your stays, and optimize taxes — all in one end-to-end experience, easy-to-use app.'></meta>
					<meta name='author' content='Tropical'></meta>
					{ /* change keywords, adsense, facebook */ }
					<meta name='keywords' content='AI, artificial intelligence, models, agents, AI models, AI agents, LLM, LLMs, agentic AI, large language model, large language models, carbon, carbon footprint, carbon aware, carbon tracking, carbon monitoring, carbon observability, carbon accountability, tech, technology, SaaS'></meta>
					<meta name="google-adsense-account" content="ca-pub-4422796457783119" />
					<meta name="facebook-domain-verification" content="yqq139nb4862m0hywift5z576fehej" />
				</head>
				{/* Google Analytics 4 (gtag.js) */}
				{GA_MEASUREMENT_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
							strategy='afterInteractive'
						/>
						<Script id='gtag-init' strategy='afterInteractive'>
						{`\nwindow.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
`}
						</Script>
					</>
				)}
				<GoogleTagManager gtmId='G-4TWX0ZB2DR'/>
				<body className={ `${ interFont.className } ${ styles['layout-wrapper'] }` }>
					<>
						{GA_MEASUREMENT_ID && (
							<Suspense fallback={null}>
								<Gtag measurementId={GA_MEASUREMENT_ID} />
							</Suspense>
						)}
						<CookieConsent />
						<Dock smart={ false }>
							<div className={ styles['dock-content-wrapper'] }>
								<div className={ styles['dock-content-section'] }>
									<Logo onClick={ (): void => redirectTo(PAGE_BASE_URL) } contrastColor={ '#000000' } />
									<ChevronToggle />
									<div className={ styles['dock-content-section-menu'] }>
										{/* <AdaptiveMenu items={ adaptiveMenu.items } /> */}
										{/* <AdaptiveMenu /> */}
									</div>
								</div>
								<div className={ styles['dock-content-section'] }>
									<div className={ styles['dock-content-section-button-wrapper'] }>
										{ renderAppropriateButtons() }
										{/* <div className={ styles.languageSwitchWrapper }>
											<div className={ styles.languageSwitch }>
												<div className={ `${ styles.languageItem } ${ styles.languageItemSelected }` }>
													List Your Café
													<IconCircleDone size={ '18px' } color={ '#000000' } />
												</div>
												<div className={ styles.languageItem }>Malay</div>
											</div>
										</div> */}
									</div>
									<div
										className={ styles['dock-content-section-sidebar-toggle'] }
										onClick={ (): void => toggleSidebar() }
									>
										{ renderAppropriateToggleIcon() }
									</div>
								</div>
							</div>
						</Dock>
						<div className={ styles['main-content-wrapper'] }>
							<ScrollContext value={ registerRef }>
								{ children }
							</ScrollContext>
						</div>
						<Sidebar sidebarVisible={ sidebarVisible }>
							{/* <div className={ styles['dock-content-sidebar-menu'] }> */}
								{/* <AdaptiveMenu items={ adaptiveMenu.items } /> */}
								{/*<AdaptiveMenu />*/}
							{/* </div> */}
							{ renderAppropriateButtons() }
						</Sidebar>
						<Footer />
						<FooterReveal />
					</>
				</body>
			</html>
		</LocaleContext.Provider>
	);
};

export default RootLayout;
