import React from 'react';
import styles from './TopNav.module.css';

function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span><h1>Frontend SearchApp</h1></span>
            </div>
            <div className={styles.right}>
                <span>Login</span>
                <button className='button'>Sign up</button>
            </div>
        </div>
    );
}

export default TopNav;