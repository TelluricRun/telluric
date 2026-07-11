import styles from './market.module.css';
import React from 'react';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/utils/hooks/useLocale';

const Market: React.FC = () => {
	const { i18n } = useLocale();

	return (
		<>
			<div className={ styles.marketContentWrapper }>
				<div className={ styles.marketContentContainer }>
					<div className={ styles.marketContentSection }>
						<div className={ styles.marketContentRow }>
							<Title render={ () => <h4>{ i18n('components.market.section-tag') }</h4> } />
							<Title render={ () => <h2>{ i18n('components.market.title-primary') }</h2> } />
						</div>
						<div className={ styles.marketContentRow }>
							<div className={ styles.marketContentRowItem }>
								<div className={ styles.marketContentRowItemDescription }>
									<Title render={ () => <h2>01</h2> } />
									<Title render={ () => <h3>Set up your profile</h3> } />
								</div>
								<div className={ styles.marketContentRowItemCount }>
									<Title render={ () => <h4>Add your tax residency, company, and travel preferences.</h4> } />
								</div>
							</div>
							<div className={ styles.marketContentRowItem }>
								<div className={ styles.marketContentRowItemDescription }>
									<Title render={ () => <h2>02</h2> } />
									<Title render={ () => <h3>Plan trips</h3> } />
								</div>
								<div className={ styles.marketContentRowItemCount }>
									<Title render={ () => <h4>See where you can go, track your visa days, and stay compliant.</h4> } />
								</div>
							</div>
							<div className={ styles.marketContentRowItem }>
								<div className={ styles.marketContentRowItemDescription }>
									<Title render={ () => <h2>03</h2> } />
									<Title render={ () => <h3>Optimize taxes</h3> } />
								</div>
								<div className={ styles.marketContentRowItemCount }>
									<Title render={ () => <h4>Set alerts on DTT, tax residency rules, and keep your documents in one place.</h4> } />
								</div>
							</div>
						</div>
						<div className={ styles.marketContentRow }>	
							<Button
								type={ 'primary' }
								size={ 'medium' }
								text={ 'Try portal0 Free for 7 Days' }
								onClick={ (): void => console.log('Button clicked') }
								onMouseOverAnimation={ false }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Market;
