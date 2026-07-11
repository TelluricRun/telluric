import styles from './standards.module.css';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IStandard {
	id: string;
	name: string;
	description: string;
};

interface IStandardsProps {
	items: IStandard[];
};

const Standards: React.FC<IStandardsProps> = ({ items }) => {
	const { getAppsWebUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { i18n } = useLocale();
	const { APPS_WEB_SIGNUP_URL } = getAppsWebUrls();
	const { getRobotoFont } = useFont();
	const robotoFont = getRobotoFont();

	return (
		<>
			<div className={ `${ robotoFont.className } ${ styles.standardsContentWrapper }` }>
				<div className={ styles.standardsContentSection }>
					<div className={ styles.standardsContentSectionColumn }>
						<div className={ styles.standardsContentSectionColumnTitle }>
							<Title render={ () => <h2>{ i18n('components.standards.title-primary') }</h2> } />
							<Title render={ () => <h2>{ i18n('components.standards.title-secondary') }</h2> } />
						</div>
						<Button
							type={ 'secondary' }
							text={ i18n('components.standards.button-primary') }
							onClick={ () => redirectTo(APPS_WEB_SIGNUP_URL) }
						/>
					</div>
					<div className={ styles.standardsContentSectionColumn }>
						{
							items.map(({ id, name, description }: IStandard, idx: number) => (
								<div
									key={ idx }
									className={ styles.standardsContentSectionColumnItem }
								>
									<div className={ styles.standardsContentSectionColumnItemImage }>
										<Image
											src={ `/assets/img/standards/${ id }.svg` }
											width={ 60 }
											height={ 60 }
											alt={ id }
											unoptimized
										/>
									</div>
									<div className={ styles.standardsContentSectionColumnItemText }>
										<Title render={ () => <h3>{ i18n(name) }</h3> } />
										<Title render={ () => <h3>{ i18n(description) }</h3> } />
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

export default Standards;
