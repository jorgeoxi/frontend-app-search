import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { useHistory } from "react-router-dom";
import TopNav from './TopNav/TopNav';
import SearchFilter from './SearchFilters/SearchFilter';
import logo from '../assets/logo.png';

import styles from './LandingPage.module.css';

export function LandingPage() {

    const history = useHistory();

    function search(term) {
        const urlEncodedTerm = encodeURI(term);
        history.push(`/search?find_desc=${urlEncodedTerm}`);
    }

    return (
            <div className={styles['search-area']}>
                <TopNav />
                <img src={logo} className={styles.logo} alt='logo' />
                <SearchBar search={search} />
                <SearchFilter />
            </div>
    )
}