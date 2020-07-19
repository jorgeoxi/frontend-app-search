import React from 'react'
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';

export default function SearchResults(props) {

    if(!props.users || !props.users.length) {
        return (
            <div>

            </div>
        )
    }

    const searchResults = props.users.map(u => <SearchResult key={u.id} users={u} />)

    return (
        <div className={styles["search-results"]}>
            {searchResults}
        </div>
    )
}
