import styles from './footer-reveal.module.css';
import React from 'react';

const FooterReveal: React.FC = () => {
    return (
        <>
            <div className={ styles.footerRevealContentWrapper }>
                <div className={ styles.brandWrapper }></div>
            </div>
        </>
    );
};

export default FooterReveal;
