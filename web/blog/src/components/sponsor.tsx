import styles from './sponsor.module.css';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Title } from '@/components/ui/title';
import { Spacer } from '@/components/ui/spacer';
import { useLocale } from '@/utils/hooks/useLocale';

interface ISponsor {
	name: string;
	width: number;
	height: number;
};

interface ISponsorProps {
	items: ISponsor[];
};

const Sponsor: React.FC<ISponsorProps> = ({ items }: ISponsorProps) => {
	const { i18n } = useLocale();
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.disconnect();
			}
		}, { threshold: 1, rootMargin: '0px' });

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Spacer position={ 'bottom' } />
			<div className={ styles.sponsorContentWrapper }>
				<div className={ styles.sponsorContentInner }>
					<div className={ styles.sponsorContentSection }>
						<Title render={ () => <h3>{ i18n('components.sponsor.description-primary') }</h3> }/>
					</div>
					<div className={ `${ styles.sponsorContentSection } ${ isVisible ? styles.animate : '' }` } ref={ sectionRef }>
						{
							items.map(({ name, width, height }: ISponsor, idx: number) => (
								<div
									key={ idx }
								>
									<Image
										src={ `/assets/img/sponsor/${ name }.png` }
										width={ width }
										height={ height }
										alt={ name }
										unoptimized
									/>
								</div>
							))
						}
					</div>
				</div>
			</div>
			<Spacer position={ 'top' } />
		</>
	);
};

export default Sponsor;
