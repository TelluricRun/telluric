import styles from './features.module.css';
import React from 'react';
import { Title } from '@/components/ui/title';
import { IconCircleDone } from '@/components/ui/icons';
import { useLocale } from '@/utils/hooks/useLocale';

interface IFeature {
	name: string;
	description: string;
	icon: string;
};

interface IFeaturesProps {
	items: IFeature[];
};

const Features: React.FC<IFeaturesProps> = ({ items }: IFeaturesProps) => {
	const { i18n } = useLocale();

	return (
		<>
			<div className={ styles.featuresWrapper }>
				<div className={ styles.featuresSection}>
					<div>
						<Title render={ (): React.ReactNode => <h1>{ i18n('components.features.title-primary') }</h1> } />
						<Title render={ (): React.ReactNode => <h1>{ i18n('components.features.title-secondary') }</h1> } />
						<Title render={ (): React.ReactNode => <h1>{ i18n('components.features.title-tertiary') }</h1> } />
					</div>
					<div>
						<Title render={ (): React.ReactNode => <h3>{ i18n('components.features.description-primary') }</h3> } />
					</div>
				</div>
				<div className={ styles.featuresSection}>
					<div>
						{
							items.map(({ name, description, icon }: IFeature, index: number) => (
								<div key={ index } className={ styles.featureItem }>
									<div className={ styles.featureIcon }>
										<IconCircleDone />
									</div>
									<div className={ styles.featureContent }>
										<h4>{ i18n(name) }</h4>
										<h4>{ i18n(description) }</h4>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
