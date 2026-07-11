import styles from './footer.module.css';
import React from 'react';
import { Logo } from '@/components/ui/logo';
import { Title } from '@/components/ui/title';
import Image from 'next/image';
import { useRedirect } from '@/utils/hooks/useRedirect';
import { useLocale } from '@/utils/hooks/useLocale';

const Footer: React.FC = () => {
	const { redirectTo } = useRedirect();
	const { i18n } = useLocale();
	const getYear = () => new Date().getFullYear();
	const xURL = 'https://x.com/RusuTCristian';
	const linkedinURL = 'https://www.linkedin.com/company/readysoftware';
	const facebookURL = 'https://www.facebook.com/61560383606079';

	return (
		<>
			<div className={ styles.footerContentWrapper }>
				<div className={ styles.footerContentSection }>
					<div className={ styles.footerContentSectionRow }>
						<Logo />
						<h4>Add delightful UIs over your data.</h4>
						<div className={ styles.footerContentSectionRowItem }>
							<div onClick={ () => redirectTo(xURL) }>
								<Image
									src={ '/assets/img/social/x.svg' }
									width={ 26 }
									height={ 26 }
									alt={ 'x' }
									unoptimized
								/>
							</div>
							<div onClick={ () => redirectTo(linkedinURL) }>
								<Image
									src={ '/assets/img/social/linkedin.svg' }
									width={ 24 }
									height={ 24 }
									alt={ 'linkedin' }
									unoptimized
								/>
							</div>
							<div onClick={ () => redirectTo(facebookURL) }>
								<Image
									src={ '/assets/img/social/facebook.svg' }
									width={ 28 }
									height={ 28 }
									alt={ 'facebook' }
									unoptimized
								/>
							</div>
						</div>
					</div>
					<div className={ styles.footerContentSectionRow }>
						<div className={ styles.footerContentSectionRowItem }>
							<Title render={ () => <h4>{ i18n('components.footer.column-one.company') }</h4> } />
							<Title render={ () => <p>{ i18n('components.footer.column-one.about') }</p> } />
							<Title render={ () => <p>{ i18n('components.footer.column-one.careers') }</p> } />
							<Title render={ () => <p>{ i18n('components.footer.column-one.faq') }</p> } />
						</div>
						<div className={ styles.footerContentSectionRowItem }>
							<Title render={ () => <h4>{ i18n('components.footer.column-two.social') }</h4> } />
							<Title render={ () => <p>Github</p> } />
							<Title render={ () => <p>X</p> } />
							<Title render={ () => <p>LinkedIn</p> } />
							<Title render={ () => <p>Facebook</p> } />
							<Title render={ () => <p>Instagram</p> } />
							<Title render={ () => <p>TikTok</p> } />
						</div>
						<div className={ styles.footerContentSectionRowItem }>
							<Title render={ () => <h4>{ i18n('components.footer.column-three.contact') }</h4> } />
							<Title render={ () => <p>{ i18n('components.footer.column-three.support') }</p> } />
							<Title render={ () => <p>{ i18n('components.footer.column-three.address') }</p> } />
						</div>
					</div>
				</div>
				<div className={ styles.footerContentSection }>
					<div className={ styles.footerContentSectionRow }>
						<div className={ styles.footerContentSectionRowItem }>
							<Title render={ () => <p>&copy; { getYear() } portal0. All rights reserved.</p> } />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
