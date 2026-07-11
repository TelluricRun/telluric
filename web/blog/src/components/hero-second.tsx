'use client';
import styles from './hero-second.module.css';
import React, { useRef, useCallback, useEffect, useState } from 'react';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Toast, { ToastVariant } from '@/components/ui/toast';
import { IconAdd, IconArrowBottom } from '@/components/ui/icons';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IHeroSecondProps {
    scrollToExplore: () => void;
	scrollToAnalyze: () => void;
};

const HeroSecond: React.FC<IHeroSecondProps> = ({ scrollToExplore, scrollToAnalyze }: IHeroSecondProps) => {
    const { i18n } = useLocale();
    const { getUrbanistFont } = useFont();
    const urbanistFont = getUrbanistFont();

    const [randomIdx, setRandomIdx] = useState<number | null>(null);
    const [titleSecondaryIndex, setTitleSecondaryIndex] = useState<number>(1);
    const [email, setEmail] = useState<string>('');
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [toastVariant, setToastVariant] = useState<ToastVariant>('success');
    const [toastVisible, setToastVisible] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleEmailChange = (value: string): void => {
        setEmail(value);
    };

    const handleSubmitClick = async (): Promise<void> => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const trimmed = email.trim();

        if (!emailRegex.test(trimmed)) {
            setToastVariant('error');
            setToastMessage('Invalid email format.');
            setToastVisible(true);
            return;
        }

        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            // preserve utm info (if present) so it can be used for attribution
            const utmRaw = typeof window !== 'undefined' ? sessionStorage.getItem('utm') : null;
            const utm = utmRaw ? JSON.parse(utmRaw) : {};
            const referrer = (typeof window !== 'undefined' && sessionStorage.getItem('referrer')) || (typeof document !== 'undefined' ? document.referrer : '') || '';

            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmed, utm, referrer })
            });

            // Some error responses or redirects may return an empty body; guard JSON parsing.
            let json: any = null;
            try {
                const text = await res.text();
                if (text) json = JSON.parse(text);
            } catch (parseErr) {
                // ignore parse errors — we'll handle based on status
            }

            if (!res.ok) {
                console.error('Subscribe error', json ?? `status ${res.status}`);
                setToastVariant('error');
                setToastMessage(json?.error || 'Subscription failed');
                setToastVisible(true);
                return;
            }

            // success: show toast, clear input
            if (json?.duplicate) {
                setToastVariant('info');
                setToastMessage('Email already registered.');
            } else {
                setToastVariant('success');
                setToastMessage("You've been added to the list.");
            }
            setToastVisible(true);
            setEmail('');

            // Send GA4 event for signup (no PII). Include UTM params for attribution.
            try {
                const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XN8ERHVFC9';
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'email_signup', {
                        method: 'hero_form',
                        page_location: typeof window !== 'undefined' ? window.location.href : undefined,
                        utm_source: utm?.utm_source,
                        utm_medium: utm?.utm_medium,
                        utm_campaign: utm?.utm_campaign,
                        send_to: GA_MEASUREMENT_ID,
                    });
                }
            } catch (e) {
                // don't block UI on analytics errors
                // console.warn('GA event send failed', e);
            }
        } catch (err) {
            console.error('Network or unexpected error', err);
            setToastVariant('error');
            setToastMessage('Network error');
            setToastVisible(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const cursorRef = useRef<HTMLDivElement>(null);
    const lastX = useRef(0);
    const lastY = useRef(0);

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
        window.addEventListener('mousemove', handleMouseMove);
        return (): void => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    useEffect((): () => void => {
        setRandomIdx(Math.floor(Math.random() * (5 + 1)));
        const interval = setInterval(() => {
            setRandomIdx(Math.floor(Math.random() * (5 + 1)));
        }, Math.floor(Math.random() * (15000 - 10000) + 10000));

        return (): void => clearInterval(interval);
    }, []);

	useEffect((): () => void => {
        const interval = setInterval(() => {
			setTitleSecondaryIndex(prev => (prev === 3 ? 1 : prev + 1));
        }, 3000);

        return (): void => clearInterval(interval);
    }, []);

        // Auto-hide toast after 4 seconds — first hide (trigger exit animation),
        // then clear the message after the animation completes (300ms).
        useEffect(() => {
            if (!toastMessage) return;
            setToastVisible(true);
            const hideTimer = setTimeout(() => setToastVisible(false), 4000);
            const clearTimer = setTimeout(() => setToastMessage(null), 4300);
            return () => {
                clearTimeout(hideTimer);
                clearTimeout(clearTimer);
            };
        }, [toastMessage]);

    return (
        <>
            {toastMessage && <Toast message={toastMessage} variant={toastVariant} visible={toastVisible} />}
            <div className={ styles.heroContentWrapper }>
                <div
                    ref={ cursorRef }
                    className={ styles['hover-effect'] }
                />
                {
                    Array.from(Array(6).keys()).map((_, idx) => (
                        <div
                            className={ `${ styles['row'] } ${ styles.rowAppear } ${ randomIdx === idx ? styles.rowFill : '' }` }
                            key={ idx }
                        >
                            <div className={ styles.rowMeld }>
                                <IconAdd size={ '15px' } color={ 'var(--text-primary)' } />
                            </div>
                        </div>
                    ))
                }
                <div className={ styles.heroContentAbsolute }>
                	<div className={ styles.heroContentAbsoluteSmall }></div>
                    <div className={ `${ styles.heroContentSection } ${ urbanistFont.className }` }>
                        {/* <div className={ styles.animatedText }>
                            <Title render={ () => <h4>{ i18n('components.hero.description-secondary') }</h4> }/>
                        </div> */}
                        <div className={ styles.animatedText }>
                            <Title render={ (): React.ReactNode => <h1>{ i18n('components.hero.title-primary-first') }</h1> } />
                        </div>
						<div className={ styles.animatedText }>
                            <Title render={ (): React.ReactNode => <h1>{ i18n('components.hero.title-primary-second') }</h1> } />
                        </div>
                        {/*<div className={ styles.animatedText } key={ titleSecondaryIndex }>*/}
                        {/*    <Title render={ (): React.ReactNode => <h2>{ i18n(`components.hero.title-secondary-${ titleSecondaryIndex }`) }</h2> } />*/}
                        {/*</div>*/}
                    </div>
                    <div className={ styles.heroContentText }>
                        <div className={ styles.heroContentTextSmall }>
                            <Title render={ () => <h3>{ i18n('components.hero.description-primary') }</h3> }/>
                        </div>
                        <div className={ styles.heroContentButtons }>
							<div>
                                {/* <Input
                                    size={ 'medium' }
                                    type={ 'primary' }
                                    content={ 'email' }
                                    placeholder={ 'Enter your email' }
                                    onChange={ handleEmailChange }
                                    value={ email }
                                    disabled={ isSubmitting }
                                /> */}
                                <Button
                                    size={ 'medium' }
                                    type={ 'primary' }
                                    text={ i18n('components.hero.button-primary') }
                                    onClick={ handleSubmitClick }
                                    onMouseOverAnimation={ false }
                                    loading={ isSubmitting }
                                    disabled={ isSubmitting }
                                />
								<Button
									size={ 'medium' }
									type={ 'tertiary' }
									text={ i18n('components.hero.button-secondary') }
									iconRight={ <IconArrowBottom /> }
									onClick={ scrollToAnalyze }
								/>
							</div>
							<span>* No credit card required.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSecond;
