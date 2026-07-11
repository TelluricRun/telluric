import styles from './final-cta.module.css';
import React from 'react';
import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

const FinalCta: React.FC = () => {
	const { getAppUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { i18n } = useLocale();
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();
	const { APP_SIGNUP_URL } = getAppUrls();

	return (
		<>
			<div className={ styles.finalCtaContentWrapper }>
				<div className={ styles.finalCtaContentContainer }>
					<div className={ styles.finalCtaContentSection }>
						<div className={ `${ styles.finalCtaContentSectionHeader } ${ figtreeFont.className }` }>
							<Title render={ () => <h2>{ i18n('components.finalCta.title-primary') }</h2> } />
							<Title render={ () => <h3>{ i18n('components.finalCta.description-primary') }</h3> } />
						</div>
						<div className={ styles.finalCtaContentSectionButton }>
							<Button
								size={ 'large' }
								type={ 'primary' }
								text={ i18n('components.finalCta.button-primary') }
								onClick={ () => redirectTo(APP_SIGNUP_URL) }
								onMouseOverAnimation={ false }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FinalCta;
