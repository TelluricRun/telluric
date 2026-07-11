import styles from './pricing.module.css';
import React from 'react';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { IconDone } from '@/components/ui/icons';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IPricingFeature {
	text: string;
	included: boolean;
};

interface IPricingTier {
	name: string;
	price: string;
	period: string;
	discount: string;
	features: IPricingFeature[];
	buttonText: string;
	popular?: boolean;
};

const Pricing: React.FC = () => {
	const { getAppUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { i18n } = useLocale();
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();
	const { APP_SIGNUP_URL } = getAppUrls();

	const pricingTiers: IPricingTier[] = [
		{
			name: i18n('components.pricing.tier-1-name'),
			price: i18n('components.pricing.tier-1-price'),
			period: i18n('components.pricing.tier-1-period'),
			discount: i18n('components.pricing.tier-1-discount'),
			buttonText: i18n('components.pricing.tier-1-button'),
			features: [
				{ text: i18n('components.pricing.tier-1-feature-1'), included: true },
				{ text: i18n('components.pricing.tier-1-feature-2'), included: true },
				{ text: i18n('components.pricing.tier-1-feature-3'), included: true },
				{ text: i18n('components.pricing.tier-1-feature-4'), included: true },
				{ text: i18n('components.pricing.tier-1-feature-5'), included: true }
			]
		},
		{
			name: i18n('components.pricing.tier-2-name'),
			price: i18n('components.pricing.tier-2-price'),
			period: i18n('components.pricing.tier-2-period'),
			discount: i18n('components.pricing.tier-2-discount'),
			buttonText: i18n('components.pricing.tier-2-button'),
			popular: true,
			features: [
				{ text: i18n('components.pricing.tier-2-feature-1'), included: true },
				{ text: i18n('components.pricing.tier-2-feature-2'), included: true },
				{ text: i18n('components.pricing.tier-2-feature-3'), included: true },
				{ text: i18n('components.pricing.tier-2-feature-4'), included: true },
				{ text: i18n('components.pricing.tier-2-feature-5'), included: true }
			]
		},
		{
			name: i18n('components.pricing.tier-3-name'),
			price: i18n('components.pricing.tier-3-price'),
			period: i18n('components.pricing.tier-3-period'),
			discount: i18n('components.pricing.tier-3-discount'),
			buttonText: i18n('components.pricing.tier-3-button'),
			features: [
				{ text: i18n('components.pricing.tier-3-feature-1'), included: true },
				{ text: i18n('components.pricing.tier-3-feature-2'), included: true },
				{ text: i18n('components.pricing.tier-3-feature-3'), included: true },
				{ text: i18n('components.pricing.tier-3-feature-4'), included: true },
				{ text: i18n('components.pricing.tier-3-feature-5'), included: true }
			]
		},
		{
			name: i18n('components.pricing.tier-4-name'),
			price: i18n('components.pricing.tier-4-price'),
			period: i18n('components.pricing.tier-4-period'),
			discount: i18n('components.pricing.tier-4-discount'),
			buttonText: i18n('components.pricing.tier-4-button'),
			features: [
				{ text: i18n('components.pricing.tier-4-feature-1'), included: true },
				{ text: i18n('components.pricing.tier-4-feature-2'), included: true },
				{ text: i18n('components.pricing.tier-4-feature-3'), included: true },
				{ text: i18n('components.pricing.tier-4-feature-4'), included: true },
				{ text: i18n('components.pricing.tier-4-feature-5'), included: true }
			]
		}
	];

	return (
		<>
			<div className={ styles.pricingContentWrapper }>
				<div className={ styles.pricingContentContainer }>
					<div className={ styles.pricingContentSection }>
						<div className={ `${ styles.pricingContentSectionHeader } ${ figtreeFont.className }` }>
							<Title render={ () => <h2>{ i18n('components.pricing.title-primary') }</h2> } />
							<Title render={ () => <h3>{ i18n('components.pricing.title-secondary') }</h3> } />
						</div>
						<div className={ styles.pricingContentSectionTiers }>
							{
								pricingTiers.map((tier: IPricingTier, idx: number) => (
									<div 
										className={ `${ styles.pricingTier } ${ tier.popular ? styles.pricingTierPopular : '' }` } 
										key={ idx }
									>
										{ tier.popular && <div className={ styles.pricingTierBadge }>Most Popular</div> }
										<div className={ styles.pricingTierHeader }>
											<Title render={ () => <h4>{ tier.name }</h4> } />
											<div className={ styles.pricingTierPrice }>
												<span className={ styles.pricingTierPriceAmount }>{ tier.price }</span>
												<span className={ styles.pricingTierPricePeriod }>{ tier.period }</span>
											</div>
											<div className={ styles.pricingTierDiscount }>
												<Title render={ () => <p>{ tier.discount }</p> } />
											</div>
										</div>
										<div className={ styles.pricingTierFeatures }>
											{
												tier.features.map((feature: IPricingFeature, featureIdx: number) => (
													<div className={ styles.pricingTierFeature } key={ featureIdx }>
														<IconDone size={ '16px' } color={ 'var(--dark-glare)' } />
														<span>{ feature.text }</span>
													</div>
												))
											}
										</div>
										<div className={ styles.pricingTierButton }>
											<Button
												size={ 'small' }
												type={ tier.popular ? 'primary' : 'secondary' }
												text={ tier.buttonText }
												onClick={ () => redirectTo(APP_SIGNUP_URL) }
												onMouseOverAnimation={ false }
											/>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pricing;
