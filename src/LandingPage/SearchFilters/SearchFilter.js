import React from 'react'
import styles from './SearchFilter.module.css';

function SearchFilter() {
    return (
        <div className={styles.filters}>
            <span className="icon is-small">
                <i className="fas fa-user"></i>
            </span><span className={styles.filter}>Conciliaciones</span>
            <span className="icon is-small">
                <i className="fas fa-user"></i>
            </span><span className={styles.filter}>Fuentes</span>
            <span className="icon is-small">
                <i className="fas fa-table"></i>
            </span><span className={styles.filter}>Tableros</span>
            <span className="icon is-small">
                <i className="fas fa-user"></i>
            </span><span className={styles.filter}>Usuarios</span>
        </div>
    )
}

export default SearchFilter;