import styles from './testimonials.module.css';
import React from 'react';
import Image from 'next/image';
import { Title } from '@/components/ui/title';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface ITestimonial {
	content: string;
	author: {
		name: string;
		title: string;
		photo: string;
	};
};

const Testimonials: React.FC = () => {
	const { i18n } = useLocale();
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();

	const testimonials: ITestimonial[] = [
		{
			content: i18n('components.testimonials.testimonial-1-content'),
			author: {
				name: i18n('components.testimonials.testimonial-1-author-name'),
				title: i18n('components.testimonials.testimonial-1-author-title'),
				photo: '1'
			}
		},
		{
			content: i18n('components.testimonials.testimonial-2-content'),
			author: {
				name: i18n('components.testimonials.testimonial-2-author-name'),
				title: i18n('components.testimonials.testimonial-2-author-title'),
				photo: '2'
			}
		}
	];

	return (
		<>
			<div className={ styles.testimonialsContentWrapper }>
				<div className={ styles.testimonialsContentContainer }>
					<div className={ styles.testimonialsContentSection }>
						<div className={ `${ styles.testimonialsContentSectionHeader } ${ figtreeFont.className }` }>
							<Title render={ () => <h2>{ i18n('components.testimonials.title-primary') }</h2> } />
						</div>
						<div className={ styles.testimonialsContentSectionItems }>
							{
								testimonials.map((testimonial: ITestimonial, idx: number) => (
									<div className={ styles.testimonialItem } key={ idx }>
										<div className={ styles.testimonialContent }>
											<Title render={ () => <p>{ `"${ testimonial.content }"` }</p> } />
										</div>
										<div className={ styles.testimonialAuthor }>
											<div className={ styles.testimonialAuthorPhoto }>
												<Image
													src={ `/assets/img/testimonial-${ testimonial.author.photo }.jpg` }
													width={ 60 }
													height={ 60 }
													alt={ testimonial.author.name }
													unoptimized
												/>
											</div>
											<div className={ styles.testimonialAuthorInfo }>
												<Title render={ () => <h4>{ testimonial.author.name }</h4> } />
												<Title render={ () => <p>{ testimonial.author.title }</p> } />
											</div>
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

export default Testimonials;
