import React from "react";
import styles from './SearchBar.module.css';

export function SearchBar() {
    return (
        <div className="field has-addons">
            <div className="control">
                <a className="button is-info is-medium" href="/">
                    Search
                </a>
            </div>
            <div className="control">
                <input className={`input is-medium ${styles['input-control']}`} is-medium type="text" placeholder="Find Your Info" />
            </div>
            <button className="button is-medium">
                <span className="icon is-small">
                    <i className="fas fa-search"></i>
                </span>
            </button>
        </div>
    )
}