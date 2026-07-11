import styles from './brand.module.css';
import { Title } from '@/components/ui/title';
import { Link } from '@/components/ui/link';
import { IconArrowRight } from '@/components/ui/icons';
import { useConfig } from '@/utils/hooks/useConfig';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

const Brand: React.FC = () => {
	const { getAppsWebUrls } = useConfig();
	const { i18n } = useLocale();
	const { APPS_WEB_SIGNUP_URL } = getAppsWebUrls();
	const { getRobotoFont } = useFont();
	const robotoFont = getRobotoFont();

	return (
		<>
			<div className={ styles.brandContentWrapper }>
				<div className={ styles.brandContentSection }>
					<Title render={ () => <h2>{ i18n('components.brand.title-primary') }</h2> } />
				</div>
				<div className={ styles.brandContentSection }>
					<Link
						href={ APPS_WEB_SIGNUP_URL }
						type={ 'secondary' }
						size={ 'big' }
						text={ i18n('components.brand.link-primary') }
						iconRight={ <IconArrowRight /> }
					/>
				</div>
			</div>
		</>
	);
};

export default Brand;
