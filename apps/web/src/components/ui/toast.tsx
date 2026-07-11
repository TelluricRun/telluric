import React, { useEffect, useState } from 'react';
import styles from './toast.module.css';

export type ToastVariant = 'success' | 'error' | 'info';

interface IToastProps {
  message: string;
  variant?: ToastVariant;
  visible?: boolean;
}

const Toast: React.FC<IToastProps> = ({ message, variant = 'info', visible = true }: IToastProps) => {
  const [internalVisible, setInternalVisible] = useState<boolean>(visible);

  useEffect(() => {
    // when parent toggles visible, reflect it and allow animation to play
    setInternalVisible(visible);
  }, [visible]);

  // apply enter/exit class based on internalVisible
  const stateClass = internalVisible ? styles.enter : styles.exit;

  return (
    <div className={ styles.toastWrapper } aria-live="polite">
      <div className={`${ styles.toast } ${ styles[variant] } ${ stateClass }`}>{ message }</div>
    </div>
  );
};

export default Toast;
