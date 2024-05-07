import React from 'react';
import styles from './TitleContainer.module.css';

interface TitleContainerProps {
    title: string;
}

export const TitleContainer = ({ title }: TitleContainerProps) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};