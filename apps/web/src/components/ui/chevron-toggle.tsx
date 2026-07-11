import React, { useEffect, useRef, useState } from 'react';
import styles from './chevron-toggle.module.css';

export interface IChevronToggleProps {
  onToggle?: (open: boolean) => void;
}

export const ChevronToggle: React.FC<IChevronToggleProps> = ({ onToggle = () => {} }) => {
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
			<span>portal0</span>
			<span>Create and share customer portals</span>
		  </div>
		  <div className={styles.menuItem}>
			<span>vault0</span>
			<span>Sell your sheets data</span>
		  </div>
		  <div className={styles.menuItem}>
			<span>invoice0</span>
			<span>Automate invoice generation</span>
		  </div>
		  <div className={styles.menuItem}>
			<span>datastore0</span>
			<span>Share and sell digital assets</span>
		  </div>
		  <div className={styles.menuItem}>
			<span>board0</span>
			<span>Create and collaborate on boards</span>
		  </div>
        </div>
      )}
    </div>
  );
};

export default ChevronToggle;
