import styles from './sidebar.module.css';
import React from 'react';

interface ISidebarProps {
	sidebarVisible: boolean;
	children?: React.ReactNode;
};

const Sidebar: React.FC<ISidebarProps> = ({
											  sidebarVisible,
											  children = undefined,
										  }) => {
	const sidebarClass = `${ styles.sidebarContentWrapper } ${ sidebarVisible ? '' : styles.sidebarContentWrapperRetracted }`;

	return (
		<>
			<div className={ sidebarClass }>
				<div className={ styles.sidebarContentSection }>
					<div className={ styles.sidebarContentSectionRow }>
						{ children }
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
