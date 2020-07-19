import React from 'react';
import NavBar from '../NavBar/NavBar';
import SubNav from '../NavBar/SubNav/SubNav';
import SearchSummary from './SearchSummary/SearchSummary';
import SearchResults from './SearchResults/SearchResults';
import { useLocation } from "react-router-dom";
 

export function Search() {
    const location = useLocation();
    const params = new URLSearchParams(location.search)
    const term = params.get('find_desc');

    return (
        <div>
            <NavBar term={term}/>
            <SubNav />
            <SearchSummary term={term}/>
            <SearchResults />
        </div>
    )
}

