'use client';
import { useState } from 'react';
import styles from './solutions.module.css';
import { Title } from '@/components/ui/title';
import { IconAdd, IconSubtract, IconArrowRight } from '@/components/ui/icons';
import { Link } from '@/components/ui/link';
import { useConfig } from '@/utils/hooks/useConfig';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface ISolution {
	name: string;
	description: string;
	features: string[];
};

interface ISolutionsProps {
	items: ISolution[];
};

const Solutions: React.FC<ISolutionsProps> = ({ items }) => {
	const { getAppUrls } = useConfig();
	const { i18n } = useLocale();
	const { APP_SIGNUP_URL } = getAppUrls();
	const { getRobotoFont } = useFont();
	const robotoFont = getRobotoFont();

	const [selectedItem, setSelectedItem] = useState<number>(0);

	const handleSelectedItem = (idx: number) => {
		setSelectedItem(selectedItem === idx ? -1 : idx);
	};

	return (
		<>
			<div className={ `${ robotoFont.className } ${ styles.solutionsContentWrapper }` }>
				<div className={ styles.solutionsContentContainer }>
					<div className={ styles.solutionsContentSection }>
						<Title render={ () => <h2>{ i18n('components.solutions.title-primary') }</h2> } />
						<Title render={ () => <h2>{ i18n('components.solutions.title-secondary') }</h2> } />
					</div>
					<div className={ styles.solutionsContentSection }>
						<div className={ styles.solutionsContentRow }>
							{
								items.map(({ name, description, features }: ISolution, idx: number) => (
									<div
										key={ idx }
										className={ styles.solutionsContentRowItem }
										onClick={ () => handleSelectedItem(idx) }
									>
										<div className={ styles.solutionsContentRowItemContent }>
											<div
												className={
													`
														${ styles.solutionsContentRowItemTitle }
														${ selectedItem === idx ? styles.solutionsContentRowItemTitleSelected : '' }
													`
												}
											>
												<Title render={ () => <h2>{ i18n(name) }</h2> } />
												{
													selectedItem === idx
													? <Title render={ () => <h4>{ i18n(description) }</h4> } />
													: ''
												}
											</div>
											<div
												className={
													`
														${ styles.solutionsContentRowItemFeaturesList }
														${ selectedItem === idx ? styles.solutionsContentRowItemFeaturesListVisible : '' }
													`
												}
											>
												{
													features.map((feature, idx) => (
														<div
															key={ idx }
														>
															<Title render={ () => <h3>{ i18n(feature) }</h3> } />
														</div>
													))
												}
												<div onClick={ e => e.stopPropagation() }>
													<Link
														href={ APP_SIGNUP_URL }
														type={ 'secondary' }
														size={ 'big' }
														text={ i18n('components.solutions.link-primary') }
														iconRight={ <IconArrowRight /> }
													/>
												</div>
											</div>
										</div>
										<div className={ styles.solutionsContentRowItemToggle }>
											{
												selectedItem === idx
													? <IconSubtract size={ '40' } />
													: <IconAdd size={ '40' } />
											}
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

export default Solutions;
