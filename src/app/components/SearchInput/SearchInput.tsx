import React, {useRef} from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps {
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={styles.searchContainer} onClick={handleContainerClick} >
            <div className={styles.searchIcon}>
                <i className="fa fa-search" aria-hidden="true" color='8E8E8E'></i>
            </div>
            <div className={styles.inputWrapper}>
                <input
                    ref={inputRef}
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