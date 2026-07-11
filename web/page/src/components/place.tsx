import styles from './place.module.css';
import { Title } from '@/components/ui/title';
import Image from 'next/image';
import { useLocale } from '@/utils/hooks/useLocale';

const Place = () => {
	const { i18n } = useLocale();

	const places: Array<string> = [
		'romania',
		'united kingdom',
		'spain',
		'italy',
		'france',
		'germany',
		'austria',
		'denmark',
		'belgium',
		'holland',
		'portugal',
	];
	const placesCount: Array<number> = [57, 28, 2, 13, 4, 9, 11, 3, 7, 2, 10];

	return (
		<>
			<div className={ styles.placeContentWrapper }>
				<div className={ styles.placeContentContainer }>
					<div className={ styles.placeContentSection }>
						<Title render={ () => <h3>{ i18n('components.place.title-primary') }</h3> } />
						<Title render={ () => <h2>{ i18n('components.place.description-primary') }</h2> } />
						<div className={ styles.placeContentBlurTitle }></div>
					</div>
				</div>
				<div className={ styles.placeContentRow }>
					{
						places.map((place: string, idx: number) => (
							<div key={ idx } className={ styles.placeContentRowItemWrapper }>
								<div className={ styles.placeContentRowItem }>
									<Image
										src={ `/assets/img/place/${ place }small.avif` }
										width={ 300 }
										height={ 400 }
										alt={ place }
										unoptimized
										priority
									/>
								</div>
								<div className={ styles.placeContentRowItemText }>
									<Title render={ () => <h4>{ place }</h4> } />
									<Title render={ () => <h4>{ placesCount[idx] } { i18n('components.place.destinations') }</h4> } />
								</div>
							</div>
						))
					}
				</div>
			</div>
		</>
	);
};

export default Place;
