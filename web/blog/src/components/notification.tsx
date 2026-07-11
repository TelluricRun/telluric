import styles from './notification.module.css';
import React from 'react';

interface INotificationProps {
    message?: string;
};

const Notification: React.FC<INotificationProps> = ({
    message = 'We have released a new version of the app. Please refresh your browser to get the latest updates.',
}: INotificationProps) => {
    return (
        <>
            <div className={ styles.notificationWrapper }>
                <div className={ styles.notificationContainer }>
                    { message }
                </div>
            </div>
        </>
    );
};

export default Notification;
