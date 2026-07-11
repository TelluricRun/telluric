'use client';
import styles from './vision.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { Title } from '@/components/ui/title';
import * as Icons from '@/components/ui/icons';

const visionItems = [
    {
        title: 'Install via Marketplace',
        description: 'The admin installs GuardRail from the Google Workspace Marketplace, granting Domain-Wide Delegation (DWD) to our service account for secure access.',
        content: 'first',
        icon: 'IconDownload',
    },
    {
        title: 'Select Users & Pay',
        description: 'Choose the Organizational Units (OUs) or Groups you wish to license. Our system automatically calculates billing based on your selection, securing instant compliance for those teams.',
        content: 'second',
        icon: 'IconUser',
    },
    {
        title: 'Set Policy & Go Live',
        description: 'Define your core data policies (e.g., redact SSNs, block external sharing for PII). Users automatically see the GuardRail add-on and are protected immediately.',
        content: 'third',
        icon: 'IconRocket',
    },
];

type DynamicIconProps = {
    name: string;
    color?: string;
};

const DynamicIcon = ({ name, color }: DynamicIconProps) => {
    const Icon = Icons[name as keyof typeof Icons];

    if (!Icon) return null;

    return <Icon color={color} />
}

interface IVisionProps {}

const Vision: React.FC<IVisionProps> = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % visionItems.length);
        }, 6000);
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleItemClick = (index: number) => {
        // If the clicked item is already active, we need to reset its animation.
        if (index === activeIndex) {
            // By setting the index to -1 and then back, we force React to
            // remove and re-apply the 'active' class, thus restarting the animation.
            setActiveIndex(-1);
            setTimeout(() => {
                setActiveIndex(index);
            }, 0);
        } else {
            // Otherwise, just set the new active item.
            setActiveIndex(index);
        }
        // In either case, restart the 6-second timer.
        startInterval();
    };

    return (
        <div className={`${styles.visionContentWrapper}`}>
            <div className={styles.visionContentWrapperRow}>
                <Title render={() => <h4>/ how it works /</h4>} />
                <Title render={() => <h2>Deploy GuardRail in 3 Minutes</h2>} />
                <Title render={() => <h3>
                    Minimal setup, instant compliance and protection.
                </h3>} />
            </div>
            <div className={styles.visionContentWrapperRow}>
                <div className={styles.visionContentWrapperRowSection}>
                    <div>
                        { activeIndex >= 0 && visionItems[activeIndex].content }
                    </div>
                </div>
                <div className={styles.visionContentWrapperRowSection}>
                    {visionItems.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={index}
                                className={`${styles.item} ${isActive ? styles.active : ''}`}
                                onClick={() => handleItemClick(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.iconWrapper}>
                                    <DynamicIcon name={ visionItems[index].icon } color={isActive ? '#FFFFFF' : '#000000'} />
                                </div>
                                <div className={styles.textSection}>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                    <h4 className={styles.itemDescription}>{item.description}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Vision;
