import React from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps {
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
    return (
        <div className={styles.searchContainer} >
            <div className={styles.searchIcon}>
                <i className="fa fa-search" aria-hidden="true" color='8E8E8E'></i>
            </div>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={styles.searchInput}
                />
            </div>
        </div>
    );
};