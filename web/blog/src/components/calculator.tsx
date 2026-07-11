import styles from './calculator.module.css';
import React, { useState } from 'react';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface ICountryInput {
	country: string;
	days: string;
};

const Calculator: React.FC = () => {
	const { getAppsWebUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { i18n } = useLocale();
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();
	const { APPS_WEB_SIGNUP_URL } = getAppsWebUrls();

	const [homeCountry, setHomeCountry] = useState<string>('');
	const [countries, setCountries] = useState<ICountryInput[]>([
		{ country: '', days: '' }
	]);
	const [result, setResult] = useState<string | null>(null);
	const [showResult, setShowResult] = useState<boolean>(false);

	const addCountry = () => {
		setCountries([...countries, { country: '', days: '' }]);
	};

	const updateCountry = (index: number, field: 'country' | 'days', value: string) => {
		const updated = countries.map((item, idx) => 
			idx === index ? { ...item, [field]: value } : item
		);
		setCountries(updated);
	};

	const calculateRisk = () => {
		const totalDays = countries.reduce((sum, country) => {
			const days = parseInt(country.days) || 0;
			return sum + days;
		}, 0);

		const riskCountries = countries.filter(c => c.country && parseInt(c.days) > 90);
		
		if (totalDays > 180 || riskCountries.length > 0) {
			setResult(`Based on your travels, you have spent ${totalDays} days in high-risk tax zones. You may be at risk of triggering tax residency.`);
		} else {
			setResult(`You have spent ${totalDays} days traveling. Your current travel pattern appears to have low tax residency risk.`);
		}
		
		setShowResult(true);
	};

	return (
		<>
			<div className={ styles.calculatorContentWrapper }>
				<div className={ styles.calculatorContentContainer }>
					<div className={ styles.calculatorContentSection }>
						<div className={ `${ styles.calculatorContentSectionHeader } ${ figtreeFont.className }` }>
							<Title render={ () => <h2>{ i18n('components.calculator.title-primary') }</h2> } />
							<Title render={ () => <h3>{ i18n('components.calculator.description-primary') }</h3> } />
						</div>
						<div className={ styles.calculatorContentSectionForm }>
							<div className={ styles.calculatorFormGroup }>
								<Title render={ () => <label>{ i18n('components.calculator.home-country-label') }</label> } />
								<Input
									content={ 'text' }
									value={ homeCountry }
									placeholder={ i18n('components.calculator.home-country-placeholder') }
									onChange={ setHomeCountry }
									name={ 'homeCountry' }
									autoComplete={ 'on' }
								/>
							</div>
							<div className={ styles.calculatorFormGroup }>
								<Title render={ () => <label>{ i18n('components.calculator.countries-label') }</label> } />
								{
									countries.map((country: ICountryInput, idx: number) => (
										<div className={ styles.calculatorCountryRow } key={ idx }>
											<Input
												content={ 'text' }
												value={ country.country }
												placeholder={ i18n('components.calculator.country-placeholder') }
												onChange={ (value) => updateCountry(idx, 'country', value) }
												name={ `country-${ idx }` }
												autoComplete={ 'on' }
											/>
											<Input
												content={ 'text' }
												value={ country.days }
												placeholder={ i18n('components.calculator.days-placeholder') }
												onChange={ (value) => updateCountry(idx, 'days', value) }
												name={ `days-${ idx }` }
												autoComplete={ 'off' }
											/>
										</div>
									))
								}
								<div className={ styles.calculatorAddCountry }>
									<Button
										size={ 'small' }
										type={ 'tertiary' }
										text={ i18n('components.calculator.add-country') }
										onClick={ addCountry }
										onMouseOverAnimation={ false }
									/>
								</div>
							</div>
							<div className={ styles.calculatorFormSubmit }>
								<Button
									size={ 'medium' }
									type={ 'primary' }
									text={ i18n('components.calculator.calculate-button') }
									onClick={ calculateRisk }
									onMouseOverAnimation={ false }
								/>
							</div>
						</div>
						{
							showResult && result && (
								<div className={ styles.calculatorResult }>
									<div className={ styles.calculatorResultContent }>
										<Title render={ () => <p>{ result }</p> } />
										<div className={ styles.calculatorResultCta }>
											<Button
												size={ 'medium' }
												type={ 'primary' }
												text={ i18n('components.calculator.cta-button') }
												onClick={ () => redirectTo(APPS_WEB_SIGNUP_URL) }
												onMouseOverAnimation={ false }
											/>
										</div>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default Calculator;
