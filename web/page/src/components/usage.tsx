'use client';
import { useState } from 'react';
import styles from './usage.module.css';
import { Title } from '@/components/ui/title';
import { IconArrowRight } from '@/components/ui/icons';
import Image from 'next/image';
import { useLocale } from '@/utils/hooks/useLocale';
import { useFont } from '@/utils/hooks/useFont';

interface IUsage {
	testimonial: string;
	author: {
		photo: string,
		name: string,
		title: string,
	};
};

interface IUsageProps {
	items: IUsage[];
};

const Usage: React.FC<IUsageProps> = ({ items }) => {
	const { i18n } = useLocale();
	const { getRobotoFont } = useFont();
	const robotoFont = getRobotoFont();

	const [selectedItem, setSelectedItem] = useState<number>(0);

	const handleSelectedItem = (direction: string) => {
		switch (direction) {
			case 'backward':
				setSelectedItem(selectedItem === 0 ? items.length - 1 : selectedItem - 1);
				break;
			case 'forward':
				setSelectedItem(selectedItem === items.length - 1 ? 0 : selectedItem + 1);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<div className={ `${ robotoFont.className } ${ styles.usageContentWrapperBackground }` }>
				<div className={ styles.usageContentWrapper }>
					<div className={ styles.usageContentSection }>
						<div className={ styles.usageContentSectionRow }>
							<div className={ styles.usageContentSectionRowItem }>
								<Title render={ () => <h2>{ i18n('components.usage.title-primary') }</h2> } />
								<Title render={ () => <h2>{ i18n('components.usage.title-secondary') }</h2> } />
							</div>
							<div className={ styles.usageContentSectionRowItem }>
								<div className={ styles.usageContentControls }>
									<div
										className={ styles.usageContentControlSingle }
										onClick={ () => handleSelectedItem('backward') }
									>
										<IconArrowRight color={ 'var(--emerald-light)' } />
									</div>
									<div
										className={ styles.usageContentControlSingle }
										onClick={ () => handleSelectedItem('forward') }
									>
										<IconArrowRight color={ 'var(--emerald-light)' } />
									</div>
								</div>
								<div className={ styles.usageContentExpandedText }>
									<Title render={ () => <h3>{ i18n(items[selectedItem].testimonial) }</h3> } />
								</div>
								<div className={ styles.usageContentAuthor }>
									<div className={ styles.usageContentAuthorPhoto }>
										<Image
											src={ `/assets/img/usage/${ i18n(items[selectedItem].author.photo) }.jpg` }
											width={ 50 }
											height={ 50 }
											alt={ i18n(items[selectedItem].author.photo) }
											unoptimized
											priority
										/>
									</div>
									<div className={ styles.usageContentAuthorText }>
										<div className={ styles.usageContentAuthorName }>
											{ i18n(items[selectedItem].author.name) }
										</div>
										<div className={ styles.usageContentAuthorTitle }>
											{ i18n(items[selectedItem].author.title) }
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Usage;
