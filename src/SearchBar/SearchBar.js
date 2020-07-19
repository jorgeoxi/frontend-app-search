import React, { useState } from "react";
import styles from './SearchBar.module.css';

export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term);
        }
        console.log(term);
        e.preventDefault();
    }

    const sizeClass = props.small ? '' : 'is-medium';

    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <div className="control">
                    <button className={`button is-static ${sizeClass}`}>
                        Search
                </button>
                </div>
                <div className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        value={term}
                        placeholder="Find Your Info" />
                </div>
                <button className={`button is-static ${sizeClass}`} onClick={submit}>
                    <span className="icon is-small">
                        <i className="fas fa-search"></i>
                    </span>
                </button>
            </div>
        </form>
    )
}