import styles from './adaptive-menu.module.css';
import React from 'react';
import * as Icons from '@/components/ui/icons';

// TODO
// the current Icons implementation is flexible and dynamic, but not performant because it is importing all icons

// a less flexible and dynamic but more performant implementation would be to import only the icons that are used
// we can achieve this by using an intermediary file that imports/exports only the icons we need
// which means we need to know in advance which icons we need

// the best solution would be to use a dynamic import that only imports the icons we need
// such that it is performant, flexible and dynamic

interface IMenuItem {
    label: string;
    description?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    svg?: string;
    link?: string;
    children?: IMenuItem[];
};

export interface IAdaptiveMenuProps {
    items?: IMenuItem[];
};

export const AdaptiveMenu: React.FC<IAdaptiveMenuProps> = ({
    items = [],
}) => {
    return (
        <>
            <div className={ styles['adaptive-menu-wrapper'] }>
                <ul className={ styles['adaptive-menu-list'] }>
                    {
                        items &&
                        items?.map(({ label, iconLeft, iconRight }: IMenuItem, idx: number) => (
                            <li key={ idx } className={ styles['adaptive-menu-item'] }>
                                {
                                    iconLeft &&
                                    Icons[iconLeft as keyof typeof Icons] &&
                                    React.createElement(Icons[iconLeft as keyof typeof Icons], { size: '20px', color: 'var(--text-secondary)' })
                                }
                                { label }
                                {
                                    iconRight &&
                                    Icons[iconRight as keyof typeof Icons] &&
                                    React.createElement(Icons[iconRight as keyof typeof Icons], { size: '20px', color: 'var(--text-secondary)' })
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default AdaptiveMenu;
