import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import TopNav from './TopNav/TopNav';
import SearchFilter from './SearchFilters/SearchFilter';
import logo from '../assets/logo.png';

import styles from './LandingPage.module.css';

export function LandingPage() {
    return (
            <div className={styles['search-area']}>
                <TopNav />
                <img src={logo} className={styles.logo} alt='logo' />
                <SearchBar />
                <SearchFilter />
            </div>
    )
}