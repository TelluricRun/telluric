import styles from './steps.module.css';
import React from 'react';
import Image from 'next/image';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { Spacer } from '@/components/ui/spacer';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IStep {
	name: string;
	description: string;
	icon: string;
};

interface IStepsProps {
	items: IStep[];
};

const Steps: React.FC<IStepsProps> = ({ items }: IStepsProps) => {
	const { getAppUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { i18n } = useLocale();
	const { APP_SIGNUP_URL } = getAppUrls();
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();
	const firstTwoItems = items.slice(0, 2);
	const lastTwoItems = items.slice(2);

	return (
		<>
			<Spacer position={ 'bottom' } />
			<div className={ styles.stepsContentWrapper }>
				<div className={ styles.stepsContentContainer }>
					<div className={ styles.stepsContentSection }>
						<div className={ `${ styles.stepsContentSectionColumnTitle }` }>
							<div className={ figtreeFont.className }>
								<Title render={ () => <h2>{ i18n('components.steps.title-primary') }</h2> } />
							</div>
							<Title render={ () => <h3>{ i18n('components.steps.title-secondary') }</h3> } />
						</div>
						<Button
							size={ 'medium' }
							text={ i18n('components.steps.button-primary') }
							onClick={ () => redirectTo(APP_SIGNUP_URL) }
							onMouseOverAnimation={ false }
						/>
					</div>
					<div className={ styles.stepsContentSection }>
						<div className={ styles.stepsContentRow }>
							{
								firstTwoItems.map(({ name, description, icon }: IStep, idx: number) => (
									<div
										key={ idx }
										className={ styles.stepsContentRowItem }
									>
										<div className={ styles.stepsContentRowItemImage }>
											<Image
												src={ `/assets/img/steps/${ icon }.svg` }
												width={ 66 }
												height={ 66 }
												alt={ icon }
												unoptimized
											/>
										</div>
										<div className={ styles.stepsContentRowItemText }>
											<div className={ styles.stepsContentRowItemName }>
												<Title render={ () => <h3>{ i18n(name) }</h3> }/>
											</div>
											<div className={ styles.stepsContentRowItemDescription }>
												<Title render={ () => <h4>{ i18n(description) }</h4> }/>
											</div>
											<div className={ styles.stepsContentRowItemStep }>
												<Title render={ () => <h1>{ idx + 1 }</h1> }/>
											</div>
										</div>
									</div>
								))
							}
						</div>
						<div className={ styles.stepsContentRow }>
							{
								lastTwoItems.map(({ name, description, icon }: IStep, idx: number) => (
									<div
										key={ idx }
										className={ styles.stepsContentRowItem }
									>
										<div className={ styles.stepsContentRowItemImage }>
											<Image
												src={ `/assets/img/steps/${ icon }.svg` }
												width={ 66 }
												height={ 66 }
												alt={ icon }
												unoptimized
											/>
										</div>
										<div className={ styles.stepsContentRowItemText }>
											<div className={ styles.stepsContentRowItemName }>
												<Title render={ () => <h3>{ i18n(name) }</h3> }/>
											</div>
											<div className={ styles.stepsContentRowItemDescription }>
												<Title render={ () => <h4>{ i18n(description) }</h4> }/>
											</div>
											<div className={ styles.stepsContentRowItemStep }>
												<Title render={ () => <h1>{ idx + 3 }</h1> }/>
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
			<Spacer position={ 'top' } />
		</>
	);
};

export default Steps;
