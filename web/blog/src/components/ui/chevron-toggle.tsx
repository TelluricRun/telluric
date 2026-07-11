import React, { useEffect, useRef, useState } from 'react';
import { useConfig } from '@/utils/hooks/useConfig';
import { useRedirect } from '@/utils/hooks/useRedirect';
import styles from './chevron-toggle.module.css';

export interface IChevronToggleProps {
  onToggle?: (open: boolean) => void;
}

export const ChevronToggle: React.FC<IChevronToggleProps> = ({ onToggle = () => {} }) => {
	const { getWebPageUrls, getWebBlogUrls, getAppsWebUrls } = useConfig();
	const { redirectTo } = useRedirect();
	const { WEB_PAGE_BASE_URL } = getWebPageUrls();
	const { WEB_BLOG_BASE_URL } = getWebBlogUrls();
	const { APPS_WEB_BASE_URL } = getAppsWebUrls();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    const next = !open;
    setOpen(next);
    onToggle(next);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <div
        className={styles.chevronWrapper}
        role="button"
        aria-expanded={open}
        onClick={handleClick}
        data-testid="chevron-toggle"
      >
        <svg
          className={`${styles.icon} ${open ? styles.rotated : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {open && (
        <div className={styles.menu} role="menu">
          <div className={styles.menuItem}>
			<span>add-on</span>
			<span>Create and share customer portals</span>
		  </div>
		  <div className={styles.menuItem} onClick={(): void => redirectTo(WEB_PAGE_BASE_URL)}>
			<span>web.page</span>
			<span>Create and share customer portals</span>
		  </div>
		  <div className={styles.menuItem} onClick={(): void => redirectTo(WEB_BLOG_BASE_URL)}>
			<span>web.blog</span>
			<span>Sell your sheets data</span>
		  </div>
		  <div className={styles.menuItem} onClick={(): void => redirectTo(APPS_WEB_BASE_URL)}>
			<span>apps.web</span>
			<span>Automate invoice generation</span>
		  </div>
        </div>
      )}
    </div>
  );
};

export default ChevronToggle;
