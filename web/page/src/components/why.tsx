import styles from './why.module.css';
import React from 'react';
import { Title } from '@/components/ui/title';
import { IconDone, IconDoubleDone } from '@/components/ui/icons';
import { Logo } from '@/components/ui/logo';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IWhyItem {
	name: string;
	agency: boolean;
	noLowCode: boolean;
	readySoftware: boolean;
};

interface IWhyCategory {
	name: string;
	items: IWhyItem[];
};

interface IWhyProps {
	providers: string[];
	categories: IWhyCategory[];
};

const Why: React.FC<IWhyProps> = ({ providers, categories }) => {
	const { i18n } = useLocale();
	const { getRobotoFont } = useFont();
	const robotoFont = getRobotoFont();

	return (
		<>
			<div className={ `${ robotoFont.className } ${ styles.whyContentWrapper }` }>
				<div className={ styles.whyContentContainer }>
					<div className={ styles.whyContentSection }>
						<Title render={ () => <h2>{ i18n('components.why.title-primary') }</h2> } />
						<Title render={ () => <h2>{ i18n('components.why.title-secondary') }</h2> } />
					</div>
				</div>
				<div className={ styles.whyContentContainer }>
					<div className={ styles.whyTable }>
						<div className={ styles.whyTableRow }>
							<div className={ styles.whyTableRowItem }></div>
							{
								providers.map((provider: string, idx: number) => (
									<div className={ styles.whyTableRowItem } key={ idx }>
										{ i18n(provider) }
									</div>
								))
							}
							<div className={ styles.whyTableRowItem }>
								<Logo />
							</div>
						</div>
						{
							categories.map(({ name, items }: IWhyCategory, idx: number) => 
								<div className={ styles.whyTableRowCategory } key={ idx }>
									<div className={ styles.whyTableRow }>
										<div className={ styles.whyTableRowItem }>
											{ i18n(name) }
										</div>
									</div>
									{
										items.map(({ name, agency, noLowCode, readySoftware }: IWhyItem, itemIdx: number) =>
											<div key={ itemIdx } className={ styles.whyTableRow }>
												<div className={ styles.whyTableRowItem }>
													{ i18n(name) }
												</div>
												<div className={ styles.whyTableRowItem }>
													{ agency ? <IconDone /> : '—' }
												</div>
												<div className={ styles.whyTableRowItem }>
													{ noLowCode ? <IconDone /> : '—' }
												</div>
												<div className={ styles.whyTableRowItem }>
													{ readySoftware ? <IconDoubleDone color={ 'var(--amethyst-dark)' } /> : '—' }
												</div>
											</div>
										)
									}
								</div>
							)
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default Why;
