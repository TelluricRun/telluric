'use client';
import styles from './showcase.module.css';
import { Title } from '@/components/ui/title';
import { useFont } from '@/utils/hooks/useFont';

const Showcase = () => {
	const { getRobotoFont } = useFont();
	const robotoFont = getRobotoFont();

	return (
		<>
			<div className={ `${ robotoFont.className } ${ styles.showcaseContentWrapper }` }>
				<div className={ styles.showcaseContentSection }>
					<div className={ styles.showcaseContentSectionRow }>
						<div className={ styles.showcaseContentSectionRowItem }>
							<Title render={ () => <h2>Exemple</h2> } />
							<Title render={ () => <h2>Ready Software</h2> } />
						</div>
					</div>
					<div className={ styles.showcaseContentSectionGrid }>
						<div className={ styles.showcaseContentSectionGridRow }>
							<div className={ styles.showcaseContentSectionGridItemTall }>
								<div className={ `${ styles.showcaseContentGridItemPhoto } ${ styles.photo1 }` }></div>
								<div className={ styles.showcaseContentGridItemText }>
									<Title render={ () => <h3>Transit Expert</h3> } />
									<Title render={ () => <h3>Save links and thoughts even when you’re out and about</h3> } />
								</div>
							</div>
							<div className={ styles.showcaseContentSectionGridItem }>
								<div className={ `${ styles.showcaseContentGridItemPhoto } ${ styles.photo2 }` }></div>
								<div className={ styles.showcaseContentGridItemText }>
									<Title render={ () => <h3>Transit Expert</h3> } />
									<Title render={ () => <h3>Save links and thoughts even when you’re out and about</h3> } />
								</div>
							</div>
						</div>
						<div className={ styles.showcaseContentSectionGridRow }>
							<div className={ styles.showcaseContentSectionGridItem }>
								<div className={ `${ styles.showcaseContentGridItemPhoto } ${ styles.photo3 }` }></div>
								<div className={ styles.showcaseContentGridItemText }>
									<Title render={ () => <h3>Transit Expert</h3> } />
									<Title render={ () => <h3>Save links and thoughts even when you’re out and about</h3> } />
								</div>
							</div>
							<div className={ styles.showcaseContentSectionGridItem }>
								<div className={ `${ styles.showcaseContentGridItemPhoto } ${ styles.photo4 }` }></div>
								<div className={ styles.showcaseContentGridItemText }>
									<Title render={ () => <h3>Transit Expert</h3> } />
									<Title render={ () => <h3>Save links and thoughts even when you’re out and about</h3> } />
								</div>
							</div>
							<div className={ styles.showcaseContentSectionGridItem }>
								<div className={ `${ styles.showcaseContentGridItemPhoto } ${ styles.photo5 }` }></div>
								<div className={ styles.showcaseContentGridItemText }>
									<Title render={ () => <h3>Transit Expert</h3> } />
									<Title render={ () => <h3>Save links and thoughts even when you’re out and about</h3> } />
								</div>
							</div>
						</div>
						<div className={ styles.showcaseContentSectionGridRow }>
							<div className={ styles.showcaseContentSectionGridItem }>
								<div className={ `${ styles.showcaseContentGridItemPhoto } ${ styles.photo6 }` }></div>
								<div className={ styles.showcaseContentGridItemText }>
									<Title render={ () => <h3>Transit Expert</h3> } />
									<Title render={ () => <h3>Save links and thoughts even when you’re out and about</h3> } />
								</div>
							</div>
							<div className={ styles.showcaseContentSectionGridItemTall }>
								<div className={ `${ styles.showcaseContentGridItemPhoto } ${ styles.photo7 }` }></div>
								<div className={ styles.showcaseContentGridItemText }>
									<Title render={ () => <h3>Transit Expert</h3> } />
									<Title render={ () => <h3>Save links and thoughts even when you’re out and about</h3> } />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Showcase;
