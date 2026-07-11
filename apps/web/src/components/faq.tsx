import styles from './faq.module.css';
import React, { useState } from 'react';
import { Title } from '@/components/ui/title';
import { IconAdd, IconClose } from '@/components/ui/icons';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IFaqItem {
	question: string;
	answer: string;
};

const Faq: React.FC = () => {
	const { i18n } = useLocale();
	const { getFigtreeFont } = useFont();
	const figtreeFont = getFigtreeFont();
	const [openItems, setOpenItems] = useState<number[]>([]);

	const faqItems: IFaqItem[] = [
		{
			question: i18n('components.faq.question-1'),
			answer: i18n('components.faq.answer-1')
		},
		{
			question: i18n('components.faq.question-2'),
			answer: i18n('components.faq.answer-2')
		},
		{
			question: i18n('components.faq.question-3'),
			answer: i18n('components.faq.answer-3')
		},
		{
			question: i18n('components.faq.question-4'),
			answer: i18n('components.faq.answer-4')
		}
	];

	const toggleItem = (index: number) => {
		setOpenItems(prev => 
			prev.includes(index) 
				? prev.filter(i => i !== index)
				: [...prev, index]
		);
	};

	return (
		<>
			<div className={ styles.faqContentWrapper }>
				<div className={ styles.faqContentContainer }>
					<div className={ styles.faqContentSection }>
						<div className={ `${ styles.faqContentSectionHeader } ${ figtreeFont.className }` }>
							<Title render={ () => <h2>{ i18n('components.faq.title-primary') }</h2> } />
						</div>
						<div className={ styles.faqContentSectionItems }>
							{
								faqItems.map((item: IFaqItem, idx: number) => (
									<div className={ styles.faqItem } key={ idx }>
										<div 
											className={ styles.faqItemHeader }
											onClick={ () => toggleItem(idx) }
										>
											<Title render={ () => <h4>{ item.question }</h4> } />
											<div className={ styles.faqItemIcon }>											{
												openItems.includes(idx) 
													? <IconClose size={ '20px' } color={ 'var(--dark-glare)' } />
													: <IconAdd size={ '20px' } color={ 'var(--dark-glare)' } />
											}
											</div>
										</div>
										<div className={ `${ styles.faqItemContent } ${ openItems.includes(idx) ? styles.faqItemContentOpen : '' }` }>
											<Title render={ () => <p>{ item.answer }</p> } />
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

export default Faq;
