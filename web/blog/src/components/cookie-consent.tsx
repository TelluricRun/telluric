"use client";
import React, { useEffect, useState } from 'react';
import styles from './cookie-consent.module.css';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'cookie_consent_accepted';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = sessionStorage.getItem(STORAGE_KEY) === 'true' || localStorage.getItem(STORAGE_KEY) === 'true';
      if (!accepted) {
        setVisible(true);
      }
    } catch (e) {
      // access to storage might fail in some contexts
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {
      // ignore
    }
    setVisible(false);
  };

  const deny = () => {
    // do not persist acceptance so it will reappear on next visit
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.consentWrapper} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className={styles.consentBar}>
        <div className={styles.consentText}>
          By continuing to use this site you agree to the use of cookies to personalize content and analyze traffic. Read our <a className={styles.link} href="/privacy">privacy policy</a>.
        </div>
        <div className={styles.consentActions}>
          <Button size={'small'} type={'secondary'} text={'Deny'} onClick={deny} onMouseOverAnimation={false} />
          <Button size={'small'} type={'primary'} text={'Accept'} onClick={accept} onMouseOverAnimation={false} />
        </div>
      </div>
    </div>
  );
}
