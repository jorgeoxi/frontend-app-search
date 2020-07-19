import React from 'react';
import { Link } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar';
import logo from '../assets/logo.png'
import styles from './NavBar.module.css';

export default function NavBar(props) {
    return (
        <div className={styles['nav-bar']}>
            <Link to={'/'}>
                <img src={logo} className={styles.logo} alt='logo' />
            </Link>
            <SearchBar small term={props.term} />
            <button className={`button ${styles['nav-button']}`} >Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    );
}